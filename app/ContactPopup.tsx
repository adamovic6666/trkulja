"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contactLinks, copy, type Locale } from "./data";
import { useBodyScrollLock } from "./useBodyScrollLock";

export function ContactPopup({
  locale,
  triggerClassName,
  triggerLabel,
  showTriggerIcons = true,
}: {
  locale: Locale;
  triggerClassName?: string;
  triggerLabel?: string;
  showTriggerIcons?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];
  const label = triggerLabel ?? t.talk;
  const defaultTriggerClassName =
    "group inline-flex cursor-pointer items-center gap-4 text-white no-underline";

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        className={triggerClassName ?? defaultTriggerClassName}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {triggerClassName ? (
          label
        ) : (
          <span className="font-enigma mr-1 text-[28px] font-normal leading-none lowercase">
            {label}
          </span>
        )}
        {showTriggerIcons ? (
          <ContactIcons className="h-8 w-8 transition group-hover:scale-105" />
        ) : null}
      </button>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-50 grid place-items-center bg-black/80 px-5 py-8 backdrop-blur-sm"
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setOpen(false);
                }
              }}
            >
              <div
                className="relative grid w-[min(420px,calc(100vw-40px))] justify-items-center rounded-[24px] bg-[#333333] px-10 pb-12 pt-14 text-center text-white shadow-[0_22px_60px_rgba(0,0,0,.5)]"
                role="dialog"
                aria-modal="true"
                aria-label={t.talk}
              >
                <button
                  className="absolute right-6 top-6 grid size-7 place-items-center text-white/90 transition hover:text-white"
                  type="button"
                  aria-label={locale === "sr" ? "Zatvori" : "Close"}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="absolute h-[1.5px] w-4 rotate-45 bg-current"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute h-[1.5px] w-4 -rotate-45 bg-current"
                    aria-hidden="true"
                  />
                </button>

                <h2 className="font-enigma m-0 text-[32px] font-normal leading-none lowercase">
                  {t.talk}
                </h2>
                <div className="mt-8 flex items-center justify-center">
                  {contactLinks.map((link) => (
                    <a
                      className="inline-flex size-16 items-center justify-center rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
                      href={link.href}
                      aria-label={link.label}
                      key={link.icon}
                    >
                      <img
                        className="size-11"
                        src={`/assets/icons/${link.icon}.svg`}
                        alt=""
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function ContactIcons({ className }: { className: string }) {
  return contactLinks.map((link) => (
    <img
      className={className}
      src={`/assets/icons/${link.icon}.svg`}
      alt=""
      aria-hidden="true"
      key={link.icon}
    />
  ));
}
