"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { copy, Locale, site } from "./data";

const localePaths = {
  en: {
    home: "/",
    products: "/products/",
    contact: "/contact/",
  },
  sr: {
    home: "/sr/",
    products: "/sr/proizvodi/",
    contact: "/sr/kontakt/",
  },
};

const socialLinks = [
  { href: site.socials.facebook, icon: "facebook", label: "Facebook" },
  { href: site.socials.instagram, icon: "instagram", label: "Instagram" },
  { href: site.socials.tiktok, icon: "tiktok", label: "TikTok" },
  { href: site.socials.youtube, icon: "youtube", label: "YouTube" },
];

export function MobileMenu({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const t = copy[locale];
  const paths = localePaths[locale];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={`site-header fixed left-1/2 top-8 z-40 hidden w-[min(750px,calc(100vw-24px))] -translate-x-1/2 overflow-hidden rounded-[36px] bg-white font-enigma font-normal lowercase text-black shadow-[0_10px_35px_rgba(0,0,0,.18)] transition-[height] duration-[600ms] ease-[cubic-bezier(.65,0,.35,1)] max-md:block ${
        isOpen ? "h-[min(720px,calc(100dvh-25dvh))]" : "h-[72px]"
      }`}
      id={menuId}
    >
      <div className="absolute inset-x-7 top-0 z-10 flex h-[72px] items-center justify-between">
        <Link
          className="inline-flex h-12 w-[132px] items-center"
          href={paths.home}
          aria-label="Dalibor Trkulja"
          onClick={closeMenu}
        >
          <img
            className="h-11 w-auto object-contain object-left -m-4"
            src="/assets/logos/Trkulja Logo Main Black.svg"
            alt="Dalibor Trkulja"
          />
        </Link>
        <button
          className="relative size-11 cursor-pointer border-0 bg-transparent p-0"
          type="button"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 bg-brand-header transition-transform duration-[600ms] ${
              isOpen
                ? "-translate-y-1/2 rotate-45"
                : "-translate-y-[5px] rotate-0"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 bg-brand-header transition-transform duration-[600ms] ${
              isOpen
                ? "-translate-y-1/2 -rotate-45"
                : "translate-y-[5px] rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute inset-x-0 bottom-9 top-[116px] grid grid-rows-[1fr_auto] transition duration-200 ${
          isOpen
            ? "translate-y-0 opacity-100 delay-[420ms]"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="grid content-center justify-items-center gap-10 text-[clamp(36px,11vw,56px)] leading-none text-black"
          aria-label="Mobile navigation"
        >
          <Link href={`${paths.home}#story`} onClick={closeMenu}>
            {t.nav.story}
          </Link>
          <Link href={paths.products} onClick={closeMenu}>
            {t.nav.work}
          </Link>
          <Link href={paths.contact} onClick={closeMenu}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              className="inline-flex items-center no-underline"
              href={social.href}
              aria-label={social.label}
              key={social.label}
            >
              <img
                className="size-8"
                src={`/assets/icons/${social.icon}.svg`}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
