"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contactLinks } from "./ContactPopup";
import { copy, type Locale, type Product } from "./data";
import { useBodyScrollLock } from "./useBodyScrollLock";

const uiText = "font-enigma font-normal lowercase";

export function ProductGrid({
  locale,
  products,
}: {
  locale: Locale;
  products: Product[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mx-auto grid w-[min(780px,100%)] grid-cols-3 gap-9 max-md:grid-cols-1 max-md:gap-8">
        {products.map((product, index) => {
          const item = product[locale];
          return (
            <button
              className={`${uiText} grid cursor-pointer overflow-hidden rounded-3xl bg-brand-card text-center text-white transition hover:-translate-y-1 hover:bg-brand-charcoal`}
              type="button"
              key={product.id}
              onClick={() => setActiveIndex(index)}
            >
              <img
                className="aspect-[3/4] w-full rounded-3xl object-cover"
                src={product.image}
                alt={item.name}
              />
              <span className="block px-1 py-6 text-[28px] leading-none">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {activeIndex !== null ? (
        <ProductModal
          locale={locale}
          products={products}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </>
  );
}

function ProductModal({
  locale,
  products,
  index,
  onClose,
  onNavigate,
}: {
  locale: Locale;
  products: Product[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const t = copy[locale];
  const labels = t.labels;
  const product = products[index];
  const item = product[locale];

  useBodyScrollLock(true);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + products.length) % products.length);
      }
      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % products.length);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, products.length, onClose, onNavigate]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 px-5 py-8 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {products.length > 1 ? (
        <button
          className="fixed left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center text-white/80 transition hover:text-white sm:left-4 md:left-8"
          type="button"
          aria-label={
            locale === "sr" ? "Prethodni proizvod" : "Previous product"
          }
          onClick={() =>
            onNavigate((index - 1 + products.length) % products.length)
          }
        >
          <ChevronIcon direction="left" />
        </button>
      ) : null}

      <div
        className="relative grid w-[min(460px,calc(100vw-104px))] justify-items-center overflow-hidden rounded-[24px] bg-[#333333] text-center text-white shadow-[0_22px_60px_rgba(0,0,0,.5)]"
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
      >
        <button
          className="absolute right-4 top-4 z-10 grid size-8 place-items-center rounded-full bg-black/40 text-white/90 transition hover:text-white"
          type="button"
          aria-label={locale === "sr" ? "Zatvori" : "Close"}
          onClick={onClose}
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

        <img
          className="aspect-[4/3] w-full object-cover"
          src={product.image}
          alt={item.name}
        />

        <div className="grid w-full gap-4 px-2 md:px-8 py-6 md:py-8">
          <h3 className="font-enigma m-0 text-[28px] font-normal leading-tight lowercase">
            {item.name}
          </h3>

          <dl className="m-0 grid gap-1 text-sm text-white/70">
            <Spec label={labels.length} value={item.length} />
            <Spec label={labels.handle} value={item.handle} />
            <Spec label={labels.steel} value={item.steel} />
            <Spec label={labels.sheath} value={item.sheath} />
          </dl>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <span className="font-enigma text-[22px] font-normal leading-none lowercase hidden md:block">
              {t.talk}
            </span>
            <div className="flex items-center gap-3">
              {contactLinks.map((link) => (
                <a
                  className="inline-flex size-11 items-center justify-center rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
                  href={link.href}
                  aria-label={link.label}
                  key={link.icon}
                >
                  <img
                    className="size-8"
                    src={`/assets/icons/${link.icon}.svg`}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {products.length > 1 ? (
        <button
          className="fixed right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center text-white/80 transition hover:text-white sm:right-4 md:right-8"
          type="button"
          aria-label={locale === "sr" ? "Sledeći proizvod" : "Next product"}
          onClick={() => onNavigate((index + 1) % products.length)}
        >
          <ChevronIcon direction="right" />
        </button>
      ) : null}
    </div>,
    document.body,
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  if (value === "/") return null;

  return (
    <div>
      <span className="font-bold">{label}: </span>
      <span>{value}</span>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="size-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline
        points={direction === "left" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"}
      />
    </svg>
  );
}
