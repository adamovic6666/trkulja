# Cookie consent and analytics setup

This document describes how the Faraon project implements its cookie-consent UI and Google Analytics, and gives a consent-aware version that can be reused in another Next.js project.

## Stack

- Next.js App Router
- React client component for the consent UI
- Tailwind CSS for all banner and modal styling
- `localStorage` for saved preferences
- `@next/third-parties/google` for Google Analytics 4

Install the analytics package if the target project does not already have it:

```bash
npm install @next/third-parties
```

Add the GA4 measurement ID to `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Restart the development server after changing the environment file.

## How this project is structured

The relevant files are:

```text
src/
├── app/
│   ├── _components/google-analytics/GoogleAnalytics.tsx
│   ├── layout.tsx
│   └── obavestenje-o-kolacicima/page.tsx
└── components/common/CookieConsent.tsx
```

`CookieConsent.tsx` is a client component because it uses React state, effects, click handlers, and the browser-only `localStorage` API. `GoogleAnalytics.tsx` reads the public GA measurement ID and renders Next.js's Google Analytics component. Both are mounted once in the root layout, so the consent interface is available on every page.

Preferences use this shape:

```ts
type ConsentOptions = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};
```

They are saved under the `cookie-consent-preferences` local-storage key. Necessary storage is always enabled; analytics and marketing default to `false`.

The lifecycle is:

1. Render nothing until the component mounts, avoiding a server/client hydration mismatch.
2. Read and parse saved preferences from `localStorage`.
3. Show the bottom banner if no valid saved value exists.
4. Let the visitor accept all, reject optional categories, or open the preferences modal.
5. Sanitize loaded values with `Boolean(...)` and force `necessary: true`.
6. Save the choice and close both the banner and modal.

## Tailwind styling used here

There is no separate CSS file for the consent screen. Its appearance comes entirely from utility classes.

The banner uses:

```tsx
<div className="fixed inset-x-0 bottom-0 z-[1000] border-t border-black/10 bg-white/95 backdrop-blur-sm">
  <div className="mx-auto flex w-full max-w-frame flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between xl:px-0">
    {/* text and actions */}
  </div>
</div>
```

- `fixed inset-x-0 bottom-0` pins it across the bottom of the viewport.
- `z-[1000]` keeps it above normal page content.
- `bg-white/95 backdrop-blur-sm` creates a slightly transparent, blurred surface.
- `flex-col md:flex-row` stacks content on small screens and places it in a row on larger screens.
- `max-w-frame` is a project-specific Tailwind token equal to `80rem`. In another project, replace it with `max-w-7xl`, or add the same custom token.

The modal overlay and card use:

```tsx
<div className="fixed inset-0 z-[1100] grid place-items-center bg-black/60 p-4">
  <div className="w-full max-w-2xl rounded-[24px] bg-white p-5 shadow-2xl md:p-7">
    {/* settings */}
  </div>
</div>
```

The shared button style is:

```text
rounded-full bg-primary px-4 py-2 text-sm font-medium text-black/80
transition hover:bg-primary/90
```

`bg-primary` is also project-specific (`#FFB200`). Replace it with a standard class such as `bg-amber-400`, or define a `primary` color in the target Tailwind theme. Checkbox controls use `accent-brand`; the Faraon `brand` color is `#ac0000`.

## Important current limitation

In the current Faraon root layout, these components are rendered independently:

```tsx
<CookieConsent />
<GoogleAnalytics />
```

Therefore, when `NEXT_PUBLIC_GA_MEASUREMENT_ID` exists, Google Analytics is rendered even if the visitor rejects analytics cookies. The consent UI records the selection, but it does not currently gate the analytics script. No Meta Pixel or Google Ads tag is currently mounted by this implementation, despite those categories being described on the cookie-information page.

For a new project, use the consent-aware wrapper below.

## Reusable consent-aware implementation

Create `src/components/CookieConsentManager.tsx`:

```tsx
"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie-consent-preferences";
const defaultPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsentManager() {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(defaultPreferences);

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setShowBanner(true);
      setIsReady(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as Partial<ConsentPreferences>;
      setPreferences({
        necessary: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setShowBanner(true);
    } finally {
      setIsReady(true);
    }
  }, []);

  function savePreferences(next: ConsentPreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPreferences(next);
    setShowBanner(false);
    setShowModal(false);
  }

  if (!isReady) return null;

  return (
    <>
      {preferences.analytics && gaId ? <GoogleAnalytics gaId={gaId} /> : null}

      {showBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-[1000] border-t border-black/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-relaxed text-black/80 md:max-w-[62ch]">
              We use necessary cookies and, with your permission, analytics and
              marketing cookies. You can accept, reject, or customize them.
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-300"
              >
                Settings
              </button>
              <button
                type="button"
                onClick={() => savePreferences(defaultPreferences)}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-300"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-300"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showModal ? (
        <div
          className="fixed inset-0 z-[1100] grid place-items-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl md:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 id="cookie-settings-title" className="text-xl font-semibold md:text-2xl">
                Cookie settings
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setShowBanner(true);
                }}
                className="rounded-full border border-black/15 px-3 py-1 text-sm text-black/70 transition hover:bg-black/5"
              >
                Close
              </button>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-black/70">
              Necessary storage is always active. Read our{" "}
              <Link href="/cookie-policy" className="underline underline-offset-4">
                cookie policy
              </Link>
              .
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl border border-black/10 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold">Necessary</span>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                    Always active
                  </span>
                </div>
              </div>

              {(["analytics", "marketing"] as const).map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-black/10 p-4"
                >
                  <span>
                    <span className="block font-semibold capitalize">{category}</span>
                    <span className="block text-sm text-black/65">
                      {category === "analytics"
                        ? "Helps us understand visits and improve the site."
                        : "Allows relevant campaigns and advertising."}
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={preferences[category]}
                    onChange={() =>
                      setPreferences((current) => ({
                        ...current,
                        [category]: !current[category],
                      }))
                    }
                    className="h-5 w-5 shrink-0 accent-red-700"
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => savePreferences(defaultPreferences)}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium transition hover:bg-amber-300"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium transition hover:bg-amber-300"
              >
                Save selection
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
```

Mount it once near the end of the root layout's `<body>`:

```tsx
import CookieConsentManager from "@/components/CookieConsentManager";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsentManager />
      </body>
    </html>
  );
}
```

Do not also mount a separate unconditional `<GoogleAnalytics />` component. The manager renders it only after the visitor has saved `analytics: true`.

## Reopening or withdrawing consent

A production site should provide a persistent footer link or button that lets a visitor change or withdraw consent. The simplest reusable approach is to dispatch a browser event from that button and listen for it inside the manager:

```tsx
// Footer button
<button
  type="button"
  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
>
  Cookie settings
</button>
```

```tsx
// Add inside CookieConsentManager
useEffect(() => {
  const openSettings = () => setShowModal(true);
  window.addEventListener("open-cookie-settings", openSettings);
  return () => window.removeEventListener("open-cookie-settings", openSettings);
}, []);
```

If analytics was previously enabled and is then rejected, the wrapper prevents GA from rendering on subsequent React renders. Depending on the compliance requirements of the target project, also delete existing GA cookies and consider Google Consent Mode so that consent changes are communicated explicitly to Google.

## Porting checklist

- Install `@next/third-parties`.
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the environment.
- Copy the consent manager and mount it once in the root layout.
- Replace project-specific colors, copy, and policy route.
- Keep analytics and marketing disabled by default.
- Verify that no analytics or advertising component is mounted elsewhere.
- Add a way to reopen settings and withdraw consent.
- Test first visit, accept, reject, custom selection, refresh, and invalid saved JSON.
- Confirm requests in the browser Network panel before and after analytics consent.
- Have the final categories, wording, retention, and policy reviewed for the jurisdictions where the new project operates.
