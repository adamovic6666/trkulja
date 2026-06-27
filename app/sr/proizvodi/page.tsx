import type { Metadata } from "next";
import { CategoryGrid, ContactSection, SectionTitle, styles } from "../../components";
import { copy, meta } from "../../data";

export const metadata: Metadata = {
  title: meta.sr.products.title,
  description: meta.sr.products.description,
  alternates: { canonical: "/sr/proizvodi/", languages: { en: "/products/", sr: "/sr/proizvodi/" } },
};

export default function SerbianProductsPage() {
  const locale = "sr";

  return (
      <main className="pt-48">
        <section className="bg-black pb-20">
          <div className={styles.container}>
            <SectionTitle>{copy[locale].productsTitle}</SectionTitle>
            <p className="mx-auto mb-20 max-w-[770px] text-[15px] text-white/70">{copy[locale].productsIntro}</p>
            <CategoryGrid locale={locale} />
          </div>
        </section>
        <ContactSection locale={locale} />
      </main>
  );
}
