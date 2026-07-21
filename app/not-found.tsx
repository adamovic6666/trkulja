import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Dalibor Trkulja",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "0 1.5rem",
        textAlign: "center",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Georgia, serif",
      }}
    >
      <p style={{ fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
        404
      </p>
      <h1 style={{ fontSize: "1.75rem" }}>Page not found</h1>
      <p style={{ maxWidth: "28rem", opacity: 0.7 }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" style={{ textDecoration: "underline", color: "#ffffff" }}>
          English site
        </Link>
        <Link href="/sr/" style={{ textDecoration: "underline", color: "#ffffff" }}>
          Srpski sajt
        </Link>
      </div>
    </div>
  );
}
