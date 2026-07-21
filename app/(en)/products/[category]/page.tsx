import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection, SectionTitle, styles } from "../../../components";
import {
  CategorySlug,
  copy,
  getCategoryByLocaleSlug,
  meta,
  productsFor,
} from "../../../data";
import { HomeScrollLayers } from "../../../HomeScrollLayers";
import { ProductGrid } from "../../../ProductGrid";
import { createPageMetadata } from "../../../metadata";
import { getBreadcrumbJsonLd, JsonLd } from "../../../structuredData";

const categories: CategorySlug[] = ["knives", "axes", "other-products"];

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryByLocaleSlug("en", resolvedParams.category);
  if (!categories.includes(category)) return {};

  return createPageMetadata({
    title: meta.en[category].title,
    description: meta.en[category].description,
    canonical: `/products/${category}/`,
    languages: {
      en: `/products/${category}/`,
      sr: `/sr/proizvodi/${category === "knives" ? "nozevi" : category === "axes" ? "sekire" : "ostali-proizvodi"}/`,
    },
    locale: "en",
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const locale = "en";
  const resolvedParams = await params;
  const category = getCategoryByLocaleSlug(locale, resolvedParams.category);

  if (!categories.includes(category)) {
    notFound();
  }

  return (
    <main className="pt-40 md:pt-48">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products/" },
          { name: copy[locale].categoryTitles[category], url: `/products/${category}/` },
        ])}
      />
      <HomeScrollLayers />
      <section className="bg-black pb-12 md:pb-20 home-panel relative z-[1]">
        <div className={styles.container}>
          <SectionTitle>{copy[locale].categoryTitles[category]}</SectionTitle>
          <p className="mx-auto mb-12 md:mb-14 max-w-[770px] text-[15px] text-white/70">
            {copy[locale].categoryIntro[category]}
          </p>
          <ProductGrid locale={locale} products={productsFor(category)} />
        </div>
      </section>
      <ContactSection locale={locale} className="home-panel relative z-[2]" />
    </main>
  );
}
