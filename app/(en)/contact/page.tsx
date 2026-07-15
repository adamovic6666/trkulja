import { ContactSection, SectionTitle, styles } from "../../components";
import { ContactForm } from "../../ContactForm";
import { copy, meta } from "../../data";
import { HomeScrollLayers } from "../../HomeScrollLayers";
import { createPageMetadata } from "../../metadata";

export const metadata = createPageMetadata({
  title: meta.en.contact.title,
  description: meta.en.contact.description,
  canonical: "/contact/",
  languages: { en: "/contact/", sr: "/sr/kontakt/" },
  locale: "en",
});

export default function ContactPage() {
  const locale = "en";

  return (
    <>
      <HomeScrollLayers />
      <main>
        <section className="home-panel relative z-[1] grid min-h-dvh content-start bg-black px-8 pb-24 pt-40 md:pb-32 md:pt-48 max-md:px-5">
          <div className={styles.container}>
            <SectionTitle>{copy[locale].contactPageTitle}</SectionTitle>
            <p className="mx-auto mb-14 max-w-[770px] text-[15px] text-white/70">
              {copy[locale].contactIntro}
            </p>
            <ContactForm locale={locale} />
          </div>
        </section>
      </main>
      <ContactSection locale={locale} className="home-panel z-[2]" />
    </>
  );
}
