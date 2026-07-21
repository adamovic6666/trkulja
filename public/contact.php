<?php
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$configPath = __DIR__ . "/contact-config.php";
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(["error" => "Missing contact-config.php"]);
    exit;
}
require $configPath;

$body = json_decode(file_get_contents("php://input"), true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request"]);
    exit;
}

$reasons = [
    "en" => [
        "price-order" => "Price or custom order inquiry",
        "materials-process" => "Materials and making process",
        "collaboration" => "Collaboration proposal",
        "feedback" => "Praise or feedback",
    ],
    "sr" => [
        "price-order" => "Pitanje u vezi sa cenom/narudžbinom",
        "materials-process" => "Informacije o izradi i materijalima",
        "collaboration" => "Ponuda za saradnju",
        "feedback" => "Pohvale ili primedbe",
    ],
];

function fail($message) {
    http_response_code(400);
    echo json_encode(["error" => $message]);
    exit;
}

$locale = $body["locale"] ?? "";
if (!in_array($locale, ["en", "sr"], true)) {
    fail("Invalid request");
}

$name = trim((string) ($body["name"] ?? ""));
if (mb_strlen($name) < 2 || mb_strlen($name) > 120) {
    fail("Invalid request");
}

$email = trim((string) ($body["email"] ?? ""));
if (mb_strlen($email) > 160 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail("Invalid request");
}

$subject = trim((string) ($body["subject"] ?? ""));
if (mb_strlen($subject) < 2 || mb_strlen($subject) > 160) {
    fail("Invalid request");
}

$reason = (string) ($body["reason"] ?? "");
if (!isset($reasons[$locale][$reason])) {
    fail("Invalid request");
}

$message = trim((string) ($body["message"] ?? ""));
if (mb_strlen($message) < 10 || mb_strlen($message) > 3000) {
    fail("Invalid request");
}

$website = trim((string) ($body["website"] ?? ""));
if ($website !== "") {
    // Honeypot field caught a bot - report success without sending anything.
    echo json_encode(["ok" => true]);
    exit;
}

function escapeHtml($value) {
    return htmlspecialchars($value, ENT_QUOTES, "UTF-8");
}

$reasonLabel = $reasons[$locale][$reason];
$emailSubject = "[trkulja.rs] " . $subject;
$text = "Name: $name\nEmail: $email\nReason: $reasonLabel\nLocale: $locale\n\n$message";

$rows = [
    ["Name", $name],
    ["Email", $email],
    ["Reason", $reasonLabel],
    ["Subject", $subject],
    ["Locale", $locale],
];
$rowsHtml = "";
foreach ($rows as $row) {
    $rowsHtml .= "<p><strong>" . escapeHtml($row[0]) . ":</strong> " . escapeHtml($row[1]) . "</p>";
}
$html = '<div style="font-family: Georgia, serif; line-height: 1.5; color: #111;">'
    . '<h1 style="font-size: 22px;">New contact form message</h1>'
    . $rowsHtml
    . '<hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />'
    . '<p style="white-space: pre-line;">' . escapeHtml($message) . "</p></div>";

$payload = json_encode([
    "from" => CONTACT_EMAIL_FROM,
    "to" => [CONTACT_EMAIL_TO],
    "reply_to" => $email,
    "subject" => $emailSubject,
    "text" => $text,
    "html" => $html,
]);

$ch = curl_init("https://api.resend.com/emails");
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . RESEND_API_KEY,
        "Content-Type: application/json",
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $statusCode < 200 || $statusCode >= 300) {
    error_log("Contact form email failed: " . ($curlError ?: $response));
    http_response_code(500);
    echo json_encode(["error" => "Email failed"]);
    exit;
}

echo json_encode(["ok" => true]);
