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
              <div className="flex min-h-[84px] items-center justify-center px-3 py-3">
                <span className="line-clamp-2 text-center text-[22px] leading-tight">
                  {item.name}
                </span>
              </div>
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
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 px-5 py-5 backdrop-blur-sm md:py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {products.length > 1 ? (
        <button
          className="fixed left-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center text-white/80 transition hover:text-white md:left-8 md:grid"
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
        className="relative grid max-h-[calc(100dvh-40px)] w-[min(420px,calc(100vw-40px))] justify-items-center overflow-y-auto overflow-x-hidden rounded-[24px] bg-[#333333] text-center text-white shadow-[0_22px_60px_rgba(0,0,0,.5)] md:w-[min(760px,calc(100vw-104px))] md:grid-cols-2 md:justify-items-stretch md:text-left"
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

        <div className="relative w-full md:h-full">
          <img
            className="w-full object-contain md:h-full md:object-cover"
            src={product.image}
            alt={item.name}
          />

          {products.length > 1 ? (
            <>
              <button
                className="absolute left-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white/90 transition hover:text-white md:hidden"
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
              <button
                className="absolute right-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white/90 transition hover:text-white md:hidden"
                type="button"
                aria-label={
                  locale === "sr" ? "Sledeći proizvod" : "Next product"
                }
                onClick={() => onNavigate((index + 1) % products.length)}
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          ) : null}
        </div>

        <div className="grid w-full gap-3 px-6 py-5 md:content-center md:gap-4 md:px-10 md:py-10">
          <h3 className="font-enigma m-0 text-[20px] font-normal leading-tight lowercase md:text-[28px]">
            {item.name}
          </h3>

          <dl className="m-0 grid gap-1 text-sm text-white/70">
            <Spec label={labels.length} value={item.length} />
            <Spec label={labels.handle} value={item.handle} />
            <Spec label={labels.steel} value={item.steel} />
            <Spec label={labels.sheath} value={item.sheath} />
          </dl>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <span className="font-enigma text-[22px] font-normal leading-none lowercase hidden md:block">
              {t.talk}
            </span>
            <div className="hidden items-center gap-3 md:flex">
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
          className="fixed right-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center text-white/80 transition hover:text-white md:right-8 md:grid"
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
