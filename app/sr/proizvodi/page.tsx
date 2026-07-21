import {
  CategoryGrid,
  ContactSection,
  SectionTitle,
  styles,
} from "../../components";
import { copy, meta } from "../../data";
import { HomeScrollLayers } from "../../HomeScrollLayers";
import { createPageMetadata } from "../../metadata";
import { getBreadcrumbJsonLd, JsonLd } from "../../structuredData";

export const metadata = createPageMetadata({
  title: meta.sr.products.title,
  description: meta.sr.products.description,
  canonical: "/sr/proizvodi/",
  languages: { en: "/products/", sr: "/sr/proizvodi/" },
  locale: "sr",
});

export default function SerbianProductsPage() {
  const locale = "sr";

  return (
    <main>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Početna", url: "/sr/" },
          { name: "Proizvodi", url: "/sr/proizvodi/" },
        ])}
      />
      <HomeScrollLayers />
      <section className="home-panel relative z-[1] grid min-h-dvh content-start bg-black px-8 pb-24 pt-40 md:pb-32 md:pt-48 max-md:px-5">
        <div className={styles.container}>
          <SectionTitle>{copy[locale].productsTitle}</SectionTitle>
          <p className="mx-auto mb-12 md:mb-14 max-w-[770px] text-[15px] text-white/70">
            {copy[locale].productsIntro}
          </p>
          <CategoryGrid locale={locale} />
        </div>
      </section>
      <ContactSection locale={locale} className="home-panel z-[2]" />
    </main>
  );
}
