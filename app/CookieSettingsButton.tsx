"use client";

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      className="cursor-pointer border-0 bg-transparent p-0 text-inherit underline"
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      {label}
    </button>
  );
}
