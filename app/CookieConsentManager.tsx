"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const text = {
  en: {
    banner:
      "We use necessary cookies and, with your permission, analytics cookies to understand visits and improve the website.",
    settings: "Settings",
    reject: "Reject optional",
    accept: "Accept all",
    title: "Cookie settings",
    close: "Close",
    intro: "Necessary storage is always active. Read our",
    policy: "privacy and cookie policy",
    necessary: "Necessary",
    always: "Always active",
    analytics: "Analytics",
    analyticsDescription: "Helps us understand visits and improve the website.",
    marketing: "Marketing",
    marketingDescription:
      "Allows relevant campaigns if advertising tools are added in the future.",
    save: "Save selection",
  },
  sr: {
    banner:
      "Koristimo neophodne kolačiće i, uz Vašu dozvolu, analitičke kolačiće kako bismo razumeli posete i unapredili sajt.",
    settings: "Podešavanja",
    reject: "Odbij opcione",
    accept: "Prihvati sve",
    title: "Podešavanja kolačića",
    close: "Zatvori",
    intro: "Neophodno skladištenje je uvek aktivno. Pročitajte našu",
    policy: "politiku privatnosti i kolačića",
    necessary: "Neophodni",
    always: "Uvek aktivni",
    analytics: "Analitika",
    analyticsDescription: "Pomaže nam da razumemo posete i unapredimo sajt.",
    marketing: "Marketing",
    marketingDescription:
      "Omogućava relevantne kampanje ako u budućnosti dodamo alate za oglašavanje.",
    save: "Sačuvaj izbor",
  },
};

export function CookieConsentManager() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/sr") ? "sr" : "en";
  const t = text[locale];
  const policyHref = locale === "sr" ? "/sr/politika-privatnosti/" : "/privacy-policy/";
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setShowBanner(true);
        return;
      }

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

  useEffect(() => {
    const openSettings = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function savePreferences(next: ConsentPreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPreferences(next);
    setShowBanner(false);
    setShowModal(false);
  }

  if (!isReady) return null;

  const buttonClass =
    "rounded-full bg-brand-header px-4 py-2 text-sm font-medium text-white transition hover:brightness-110";

  return (
    <>
      {preferences.analytics && gaId ? <GoogleAnalytics gaId={gaId} /> : null}

      {showBanner ? (
        <aside className="fixed inset-x-0 bottom-0 z-[1000] border-t border-white/10 bg-brand-card/95 text-white shadow-2xl backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-sm leading-relaxed text-white/80 md:max-w-[64ch]">
              {t.banner}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={buttonClass}
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
              >
                {t.settings}
              </button>
              <button
                type="button"
                className={buttonClass}
                onClick={() => savePreferences(defaultPreferences)}
              >
                {t.reject}
              </button>
              <button
                type="button"
                className={buttonClass}
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
              >
                {t.accept}
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {showModal ? (
        <div
          className="fixed inset-0 z-[1100] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="w-full max-w-2xl rounded-[24px] bg-[#333333] p-5 text-white shadow-2xl md:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 id="cookie-settings-title" className="text-xl font-bold md:text-2xl">
                {t.title}
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/75 transition hover:bg-white/10"
              >
                {t.close}
              </button>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-white/70">
              {t.intro}{" "}
              <Link className="underline underline-offset-4" href={policyHref}>
                {t.policy}
              </Link>
              .
            </p>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold">{t.necessary}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    {t.always}
                  </span>
                </div>
              </div>

              {(["analytics", "marketing"] as const).map((category) => (
                <label
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/10 p-4"
                  key={category}
                >
                  <span>
                    <span className="block font-bold">{t[category]}</span>
                    <span className="block text-sm text-white/65">
                      {t[`${category}Description`]}
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    className="size-5 shrink-0 accent-brand-header"
                    checked={preferences[category]}
                    onChange={() =>
                      setPreferences((current) => ({
                        ...current,
                        [category]: !current[category],
                      }))
                    }
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                className={buttonClass}
                onClick={() => savePreferences(defaultPreferences)}
              >
                {t.reject}
              </button>
              <button
                type="button"
                className={buttonClass}
                onClick={() => savePreferences(preferences)}
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
