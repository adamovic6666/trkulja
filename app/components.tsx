import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { categories, copy, Locale, Product, site } from "./data";

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
const uiText = "font-enigma font-normal lowercase";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const paths = localePaths[locale];
  return (
    <>
      <header
        className={`${uiText} site-header fixed left-1/2 top-10 z-30 grid min-h-[72px] w-[min(1080px,calc(100vw-40px))] -translate-x-1/2 grid-cols-[190px_1fr_170px] items-center rounded-full bg-white px-5 py-2 text-black shadow-[0_10px_35px_rgba(0,0,0,.18)] max-md:hidden`}
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
      className={`mx-auto overflow-hidden rounded-t-[88px] bg-brand-ink max-md:rounded-t-[34px] ${className}`}
    >
      <div className="mx-auto w-full max-w-[960px] pt-20 pb-16 max-md:px-5 max-md:py-12">
        <SectionTitle>{t.contactTitle}</SectionTitle>
        <div className="mx-auto grid w-[min(780px,100%)] grid-cols-[minmax(320px,460px)_minmax(180px,1fr)] items-center gap-16 max-md:grid-cols-1 max-md:gap-10">
          <div className="relative aspect-[8/6] overflow-hidden rounded-[22px] bg-[#eeeeee]">
            <iframe
              className="absolute inset-0 h-full w-full grayscale [filter:grayscale(1)_contrast(.78)_brightness(1.14)]"
              src="https://maps.google.com/maps?q=Krajiska%204%2C%20Indjija%2C%20Serbia&z=15&output=embed"
              title="Dalibor Trkulja workshop map"
              loading="lazy"
            />
          </div>
          <ContactDetails locale={locale} />
        </div>
      </div>
      <Footer locale={locale} />
    </section>
  );
}

export function ContactDetails({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="text-base leading-relaxed text-white">
      <div className="grid gap-3">
        <h3 className="text-[18px] font-bold leading-relaxed">
          Dalibor Trkulja
        </h3>
        <p>{site.address[locale]}</p>
        <p>
          T: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </p>
        <p>
          E: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
      <div className="mt-8 grid gap-2">
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
    </div>
  );
}

export function ProductGrid({
  locale,
  products,
}: {
  locale: Locale;
  products: Product[];
}) {
  const t = copy[locale];

  return (
    <div className="grid grid-cols-3 gap-9 md:mx-auto md:w-[min(360px,100%)] md:grid-cols-1">
      {products.map((product) => {
        const item = product[locale];

        return (
          <article
            className="grid overflow-hidden rounded-3xl bg-brand-card text-white"
            key={product.id}
          >
            <img
              className="aspect-[3/4] w-full object-cover"
              src={product.image}
              alt={item.name}
            />
            <div className="grid gap-3 p-6">
              <h3 className={`${uiText} m-0 text-3xl leading-none`}>
                {item.name}
              </h3>
              <SpecList locale={locale} product={product} />
              <div className="mt-2 flex items-center gap-4">
                <span className={`${uiText} mr-1 text-[28px] leading-none`}>
                  {t.talk}
                </span>
                <IconLink
                  href={site.phoneHref}
                  icon="mobile"
                  label={site.phoneDisplay}
                />
                <IconLink
                  href={site.socials.whatsapp}
                  icon="whatsapp"
                  label="WhatsApp"
                />
                <IconLink
                  href={site.socials.viber}
                  icon="viber"
                  label="Viber"
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function SpecList({ locale, product }: { locale: Locale; product: Product }) {
  const labels = copy[locale].labels;
  const item = product[locale];

  return (
    <dl className="m-0 grid gap-1 text-sm text-white/70">
      <Spec label={labels.length} value={item.length} />
      <Spec label={labels.handle} value={item.handle} />
      <Spec label={labels.steel} value={item.steel} />
      <Spec label={labels.sheath} value={item.sheath} />
    </dl>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-2">
      <dt className="font-bold">{label}:</dt>
      <dd className="m-0">{value}</dd>
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

function IconLink({
  href,
  icon,
  label,
  invert = false,
}: {
  href: string;
  icon: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <a
      className="inline-flex items-center gap-2 no-underline"
      href={href}
      aria-label={label}
    >
      <img
        className={`${invert ? "h-11 w-11 invert" : "h-8 w-8"}`}
        src={`/assets/icons/${icon}.svg`}
        alt=""
      />
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const paths = localePaths[locale];

  return (
    <footer className="relative pb-4 md:pb-6 text-[12px] text-white">
      <div className="mx-auto flex w-[min(1080px,calc(100vw-40px))] items-center justify-center gap-5 max-md:flex-col max-md:gap-3 max-md:text-center">
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
