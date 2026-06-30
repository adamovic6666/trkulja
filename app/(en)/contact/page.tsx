import type { Metadata } from "next";
import { ContactDetails, Footer, SectionTitle, styles } from "../../components";
import { copy, meta } from "../../data";

export const metadata: Metadata = {
  title: meta.en.contact.title,
  description: meta.en.contact.description,
  alternates: {
    canonical: "/contact/",
    languages: { en: "/contact/", sr: "/sr/kontakt/" },
  },
};

export default function ContactPage() {
  const locale = "en";

  return (
    <>
      <main className="pt-48">
        <section className="bg-black pb-24">
          <div className={styles.container}>
            <SectionTitle>{copy[locale].contactPageTitle}</SectionTitle>
            <p className="mx-auto mb-14 max-w-[770px] text-[15px] text-white/70">
              {copy[locale].contactIntro}
            </p>
            <div className="grid grid-cols-2 items-center gap-16 rounded-4xl bg-brand-card p-14 md:grid-cols-1 md:p-8">
              <a
                className="min-h-[330px] overflow-hidden rounded-[22px] bg-[#f3f3f3]"
                href="https://maps.google.com/?q=Krajiska+4+Indjija+Serbia"
              >
                <img
                  className="h-[330px] w-full object-cover opacity-80 grayscale [filter:grayscale(1)_contrast(.86)_brightness(1.08)]"
                  src="/assets/thumbs/Dalibor Trkulja Kovacka Radionica.webp"
                  alt="Dalibor Trkulja workshop map"
                />
              </a>
              <ContactDetails locale={locale} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
