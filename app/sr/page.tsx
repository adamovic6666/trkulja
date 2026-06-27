import type { Metadata } from "next";
import Link from "next/link";
import {
  CategoryGrid,
  ContactSection,
  SectionTitle,
  styles,
} from "../components";
import { copy, meta, site, story } from "../data";

export const metadata: Metadata = {
  title: meta.sr.home.title,
  description: meta.sr.home.description,
  alternates: { canonical: "/sr/", languages: { en: "/", sr: "/sr/" } },
};

export default function SerbianHomePage() {
  const locale = "sr";
  const t = copy[locale];

  return (
    <main>
      <section className="relative isolate min-h-[620px] overflow-hidden max-md:min-h-[390px]">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="/assets/video/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 to-black/80" />
        <div className="grid min-h-[620px] place-items-center max-md:min-h-[390px]">
          <img
            className="w-[min(480px,42vw)] brightness-0 invert max-md:w-[180px]"
            src="/assets/logos/dt potpis.svg"
            alt="Dalibor Trkulja signature"
          />
        </div>
      </section>

      <section
        id="story"
        className="relative z-10 -mt-20 w-full rounded-t-[88px] bg-brand-ink px-8 py-20 max-md:-mt-8 max-md:rounded-t-[34px] max-md:px-5 max-md:pb-14 max-md:pt-7"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionTitle>{t.homeTitle}</SectionTitle>
          <div className="mx-auto max-w-[780px] text-[14px] leading-snug text-white max-md:max-w-[240px] max-md:text-[12px]">
            {story[locale].map((paragraph) => (
              <p className="mb-5 max-md:mb-4" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-14 grid w-[min(760px,100%)] grid-cols-[320px_1fr] gap-3 rounded-4xl bg-black max-md:mt-7 max-md:w-[min(240px,100%)] max-md:grid-cols-1 max-md:rounded-[24px]">
            <img
              className="w-full rounded-4xl object-contain max-md:h-[245px]"
              src="/assets/thumbs/Dalibor Trkulja Kovacka Radionica.webp"
              alt="Dalibor Trkulja"
            />
            <div className="grid content-center gap-6 px-14 py-6 max-md:justify-items-center max-md:px-4 max-md:pb-6 max-md:pt-5 max-md:text-center">
              <h3
                className={`${styles.uiText} m-0 text-[clamp(20px,2.4vw,28px)] leading-tight max-md:text-[24px]`}
              >
                {t.ctaTitle}
              </h3>
              <a
                className={`${styles.uiText} inline-flex min-h-10 justify-self-start rounded-full bg-brand-charcoal px-7 py-2 text-white no-underline max-md:justify-self-center`}
                href="tel:+381652672932"
              >
                {t.callNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="w-full rounded-t-[88px] bg-black px-8 py-24 max-md:rounded-t-[34px] max-md:px-5 max-md:py-16"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionTitle>{t.workTitle}</SectionTitle>
          <p className="mx-auto mb-14 w-[min(780px,100%)] text-[14px] leading-snug text-white max-md:mb-10 max-md:max-w-[240px] max-md:text-[12px]">
            {t.productsIntro}
          </p>
          <CategoryGrid locale={locale} />
          <div className="mx-auto mt-14 grid w-[min(760px,100%)] grid-cols-[320px_1fr] gap-3 rounded-4xl max-md:mt-7 max-md:w-[min(240px,100%)] max-md:grid-cols-1 max-md:3xl bg-brand-ink">
            <img
              className="w-full rounded-4xl object-contain max-md:h-[245px]"
              src="/assets/thumbs/Dalibor Trkulja Damaskus Nozevi Sekire.webp"
              alt=""
            />
            <div className="grid content-center gap-7 px-14 py-10 max-md:justify-items-center max-md:px-6 max-md:py-8 max-md:text-center">
              <h3
                className={`${styles.uiText} m-0 text-[clamp(24px,2.5vw,34px)] leading-tight max-md:text-[24px]`}
              >
                {t.videoTitle}
              </h3>
              <Link
                className={`${styles.uiText} inline-flex min-h-10 justify-self-start rounded-full bg-brand-charcoal px-7 py-2 text-white no-underline max-md:justify-self-center`}
                href={site.socials.youtube}
              >
                {t.youtube}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection locale={locale} />
    </main>
  );
}
