import type { Metadata } from "next";
import {
  CategoryGrid,
  ContactSection,
  SectionTitle,
  styles,
} from "../components";
import { ContactPopup } from "../ContactPopup";
import { copy, meta, site, story } from "../data";
import { HomeScrollLayers } from "../HomeScrollLayers";

export const metadata: Metadata = {
  title: meta.sr.home.title,
  description: meta.sr.home.description,
  alternates: { canonical: "/sr/", languages: { en: "/", sr: "/sr/" } },
};

export default function SerbianHomePage() {
  const locale = "sr";
  const t = copy[locale];

  return (
    <main className="home-page">
      <HomeScrollLayers />
      <section className="home-panel home-hero relative isolate z-[1] min-h-dvh overflow-hidden bg-black">
        <video
          className="home-hero-video absolute inset-0 z-0 h-full w-full object-cover"
          src="/assets/video/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 to-black/80" />
        <div className="home-hero-black absolute inset-0 z-20 bg-black" />
        <div className="relative z-30 grid min-h-dvh place-items-center max-md:pb-[88px]">
          <img
            className="home-hero-signature w-[min(220px,46vw)] brightness-0 invert"
            src="/assets/logos/dt potpis.svg"
            alt="Dalibor Trkulja signature"
          />
        </div>
        <a
          className="home-scroll-cue absolute bottom-[calc(env(safe-area-inset-bottom)+4rem)] left-1/2 z-30 h-10 w-9 -translate-x-1/2 max-md:bottom-[calc(env(safe-area-inset-bottom)+5.5rem)]"
          href="#story"
          aria-label={`Scroll to ${t.nav.story}`}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </section>

      <section
        id="story"
        className="home-panel relative z-[2] rounded-t-[88px] bg-brand-ink px-8 py-16 md:py-20 max-md:rounded-t-[34px] max-md:px-5 max-md:pb-32"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionTitle>{t.homeTitle}</SectionTitle>
          <div className="mx-auto max-w-[780px] text-base leading-snug text-white">
            {story[locale].map((paragraph) => (
              <p className="mb-5 max-md:mb-4" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-14 grid w-[min(760px,100%)] grid-cols-[320px_1fr] gap-3 rounded-4xl bg-brand-card max-md:mt-12 max-md:grid-cols-1 max-md:rounded-[24px]">
            <img
              className="w-full rounded-4xl object-contain"
              src="/assets/thumbs/Dalibor Trkulja Kovacka Radionica.webp"
              alt="Dalibor Trkulja"
            />
            <div className="grid content-center gap-6 px-14 py-6 max-md:justify-items-center max-md:px-4 max-md:pb-6 max-md:pt-5 max-md:text-center">
              <h3 className={`${styles.uiText} m-0 text-[28px] leading-tight`}>
                {t.ctaTitle}
              </h3>
              <ContactPopup
                locale={locale}
                triggerLabel={t.callNow}
                showTriggerIcons={false}
                triggerClassName={`${styles.uiText} inline-flex min-h-10 cursor-pointer justify-self-start rounded-full bg-brand-charcoal px-7 py-2 text-white no-underline max-md:justify-self-center`}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="home-panel relative z-[3] w-full rounded-t-[88px] bg-black px-8 py-24 max-md:rounded-t-[34px] max-md:px-5 max-md:py-16 max-md:pb-32"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionTitle>{t.workTitle}</SectionTitle>
          <p className="mx-auto mb-14 w-[min(780px,100%)] text-base leading-snug text-white max-md:mb-10">
            {t.productsIntro}
          </p>
          <CategoryGrid locale={locale} />
          <div className="mx-auto mt-14 grid w-[min(760px,100%)] grid-cols-[320px_1fr] gap-3 rounded-4xl max-md:mt-12 max-md:grid-cols-1 max-md:3xl bg-brand-card">
            <img
              className="w-full rounded-4xl object-contain"
              src="/assets/thumbs/Dalibor Trkulja Damaskus Nozevi Sekire.webp"
              alt=""
            />
            <div className="grid content-center gap-7 px-14 py-10 max-md:justify-items-center max-md:px-6 max-md:py-8 max-md:text-center">
              <h3
                className={`${styles.uiText} m-0 text-[clamp(28px,2.5vw,34px)] leading-tight`}
              >
                {t.videoTitle}
              </h3>
              <a
                target="_blank"
                rel="noopener"
                className={`${styles.uiText} inline-flex min-h-10 justify-self-start rounded-full bg-brand-charcoal px-7 py-2 text-white no-underline max-md:justify-self-center`}
                href={site.socials.youtube}
              >
                {t.youtube}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection locale={locale} className="home-panel z-[4]" />
    </main>
  );
}
