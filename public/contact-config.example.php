<?php
// Copy this file to contact-config.php (same folder) and fill in real values.
// contact-config.php is gitignored - it holds a live secret and must never be committed.
// contact.php requires this file at runtime, so it must exist alongside contact.php
// in the deployed folder on the server.

define("RESEND_API_KEY", "re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
define("CONTACT_EMAIL_TO", "trkulja.dalibor@gmail.com");
// Must be on a domain verified in Resend (Domains tab) - currently mailer.trkulja.rs, not the bare trkulja.rs.
define("CONTACT_EMAIL_FROM", "Dalibor Trkulja <noreply@mailer.trkulja.rs>");
