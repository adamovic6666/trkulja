import type { Metadata } from "next";
import {
  CategoryGrid,
  ContactSection,
  SectionTitle,
  styles,
} from "../../components";
import { copy, meta } from "../../data";
import { HomeScrollLayers } from "../../HomeScrollLayers";

export const metadata: Metadata = {
  title: meta.en.products.title,
  description: meta.en.products.description,
  alternates: {
    canonical: "/products/",
    languages: { en: "/products/", sr: "/sr/proizvodi/" },
  },
};

export default function ProductsPage() {
  const locale = "en";

  return (
    <main className="pt-40 md:pt-48">
      <HomeScrollLayers />
      <section className="home-panel relative z-[1] bg-black px-8 pb-20 max-md:px-5">
        <div className={styles.container}>
          <SectionTitle>{copy[locale].productsTitle}</SectionTitle>
          <p className="mx-auto mb-20 max-w-[770px] text-[15px] text-white/70">
            {copy[locale].productsIntro}
          </p>
          <CategoryGrid locale={locale} />
        </div>
      </section>
      <ContactSection locale={locale} className="home-panel z-[2]" />
    </main>
  );
}
