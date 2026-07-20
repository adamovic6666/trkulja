import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { categories, contactLinks, copy, Locale, site } from "./data";

const localePaths = {
  en: {
    home: "/",
    products: "/products/",
    contact: "/contact/",
    privacy: "/privacy-policy/",
  },
  sr: {
    home: "/sr/",
    products: "/sr/proizvodi/",
    contact: "/sr/kontakt/",
    privacy: "/sr/politika-privatnosti/",
  },
};

const container = "mx-auto w-[min(1200px,calc(100vw-40px))]";
const headerWidth = "w-[min(1080px,calc(100vw-40px))]";
const uiText = "font-enigma font-normal lowercase";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const paths = localePaths[locale];
  return (
    <>
      <header
        className={`${uiText} site-header fixed left-1/2 top-10 z-30 grid min-h-[72px] ${headerWidth} -translate-x-1/2 grid-cols-[190px_1fr_170px] items-center rounded-full bg-white px-5 py-2 text-black shadow-[0_10px_35px_rgba(0,0,0,.18)] max-md:hidden`}
      >
        <Link
          className="inline-flex items-center"
          href={paths.home}
          aria-label="Dalibor Trkulja"
        >
          <img
            className="h-auto w-28 -ml-1"
            src="/assets/logos/Trkulja Logo Main Black.svg"
            alt="Dalibor Trkulja"
          />
        </Link>
        <nav
          className="flex items-center justify-center gap-20 text-xl"
          aria-label="Primary navigation"
        >
          <Link
            className="hover:text-brand-header"
            href={`${paths.home}#story`}
          >
            {t.nav.story}
          </Link>
          <Link className="hover:text-brand-header" href={paths.products}>
            {t.nav.work}
          </Link>
          <Link className="hover:text-brand-header" href={paths.contact}>
            {t.nav.contact}
          </Link>
        </nav>
        <div
          className="flex items-center justify-end gap-4 pr-4"
          aria-label="Language switcher"
        >
          <Link
            className={
              locale === "en" ? "text-brand-header" : "hover:text-brand-header"
            }
            href="/"
          >
            eng
          </Link>
          <Link
            className={
              locale === "sr" ? "text-brand-header" : "hover:text-brand-header"
            }
            href="/sr/"
          >
            srb
          </Link>
        </div>
      </header>
      <MobileMenu locale={locale} />
    </>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`${uiText} mx-auto mb-14 grid w-[min(780px,100%)] justify-items-center text-center text-[clamp(24px,3vw,36px)] leading-none max-md:mb-12 max-md:text-[28px]`}
    >
      <span>{children}</span>
      <span className="mt-3 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3">
        <span className="h-[1px] bg-white" />
        <span
          className="relative block size-2.5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-full before:-translate-y-1/2 before:rotate-45 before:bg-white before:content-[''] after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:-rotate-45 after:bg-white after:content-['']"
          aria-hidden="true"
        />
        <span className="h-[1px] bg-white" />
      </span>
    </h2>
  );
}

export function CategoryGrid({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto grid w-[min(780px,100%)] grid-cols-3 gap-9 max-md:grid-cols-1 max-md:gap-8">
      {categories.map((category) => (
        <Link
          className={`${uiText} grid rounded-3xl bg-brand-card text-center text-white no-underline transition hover:-translate-y-1 hover:bg-brand-charcoal`}
          href={category.href[locale]}
          key={category.slug}
        >
          <img
            className="aspect-[3/4] w-full rounded-3xl md:object-cover"
            src={category.thumb}
            alt={category.thumb}
          />
          <span className="block px-1 py-6 text-[28px] leading-none">
            {copy[locale].categories[category.slug]}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function ContactSection({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = copy[locale];

  return (
    <section
      id="contact"
      className={`relative mx-auto flex flex-col overflow-hidden rounded-t-[88px] bg-brand-ink px-8 pb-6 pt-20 max-md:rounded-t-[34px] max-md:px-5 max-md:pb-4 max-md:pt-16 ${className}`}
    >
      <SectionTitle>{t.contactTitle}</SectionTitle>

      <div className="mx-auto w-full max-w-[960px]">
        {/* Mobile: map + let's talk in a single unified card */}
        <div className="hidden overflow-hidden rounded-3xl max-md:block bg-[#3a3a3a]">
          <div className="relative aspect-[4/3] w-full">
            <iframe
              className="absolute rounded-3xl inset-0 h-full w-full grayscale [filter:grayscale(1)_contrast(.78)_brightness(1.14)]"
              src="https://maps.google.com/maps?q=Krajiska%204%2C%20Indjija%2C%20Serbia&z=15&output=embed"
              title="Dalibor Trkulja workshop map"
              loading="lazy"
            />
          </div>
          <TalkCard locale={locale} className="" />
        </div>

        <div className="hidden max-md:mt-8 max-md:grid max-md:grid-cols-1 max-md:gap-8">
          <ContactDetails locale={locale} />
          <FollowDetails locale={locale} />
        </div>

        {/* Desktop: map beside contact details */}
        <div className="grid grid-cols-2 gap-10 max-md:hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#eeeeee]">
            <iframe
              className="absolute inset-0 h-full w-full grayscale [filter:grayscale(1)_contrast(.78)_brightness(1.14)]"
              src="https://maps.google.com/maps?q=Krajiska%204%2C%20Indjija%2C%20Serbia&z=15&output=embed"
              title="Dalibor Trkulja workshop map"
              loading="lazy"
            />
          </div>
          <div className="grid gap-10">
            <ContactDetails locale={locale} />
            <FollowDetails locale={locale} />
          </div>
        </div>

        <div className="mt-16 max-md:hidden">
          <p className="text-base leading-relaxed text-white/90">
            {t.contactDescription}
          </p>
          <div className="mt-16">
            <TalkCard locale={locale} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer locale={locale} />
      </div>
    </section>
  );
}

function TalkCard({
  locale,
  className = "rounded-[22px]",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = copy[locale];

  return (
    <div
      className={`bg-[#3a3a3a] px-6 py-12 text-center md:flex md:items-center md:justify-between md:gap-10 md:px-10 md:text-left ${className}`}
    >
      <div>
        <h3 className="font-enigma text-[28px] font-normal leading-none lowercase md:text-[28px]">
          {t.talk}
        </h3>
        <p className="mt-4 text-base text-white/80 md:mt-2 md:max-w-[300px]">
          {t.talkSubtitle}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 md:mt-0 md:justify-start">
        {contactLinks.map((link) => (
          <a
            className="inline-flex size-12 items-center justify-center rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 md:size-14"
            href={link.href}
            aria-label={link.label}
            key={link.icon}
          >
            <img
              className="size-10 md:size-12"
              src={`/assets/icons/${link.icon}.svg`}
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function ContactDetails({ locale }: { locale: Locale }) {
  return (
    <div className="pointer-events-auto grid gap-3 text-base leading-relaxed text-white">
      <h3 className="text-[18px] font-bold leading-relaxed">Dalibor Trkulja</h3>
      <p>{site.address[locale]}</p>
      <p>
        T: <a href={site.phoneHref}>{site.phoneDisplay}</a>
      </p>
      <p>
        E: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}

export function FollowDetails({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="pointer-events-auto grid gap-2 text-white">
      <h4 className="mb-1 text-[18px] font-bold">{t.follow}</h4>
      <SocialRow
        href={site.socials.facebook}
        icon="facebook"
        label="Facebook"
      />
      <SocialRow
        href={site.socials.instagram}
        icon="instagram"
        label="Instagram"
      />
      <SocialRow href={site.socials.tiktok} icon="tiktok" label="TikTok" />
      <SocialRow href={site.socials.youtube} icon="youtube" label="YouTube" />
    </div>
  );
}

function SocialRow({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a className="inline-flex items-center gap-2 no-underline" href={href}>
      <img className="size-5 invert" src={`/assets/icons/${icon}.svg`} alt="" />{" "}
      {label}
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const paths = localePaths[locale];

  return (
    <footer className="relative pb-4 md:pb-0 text-[12px] text-white">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-center gap-5 max-md:flex-col max-md:gap-3 max-md:text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 max-md:flex-col max-md:gap-3">
          <span>
            Copyright © 2021-2026 Dalibor Trkulja. All rights reserved
          </span>
          <span className="max-md:hidden">|</span>
          <span>
            Design &amp; Code:{" "}
            <a className="underline" href="https://sova.ooo/">
              Sova Creative Studio
            </a>
          </span>
        </div>
        <span className="max-md:hidden">|</span>

        <Link className="underline max-md:block" href={paths.privacy}>
          {copy[locale].privacy}
        </Link>
      </div>
    </footer>
  );
}

export const styles = {
  container,
  uiText,
};
