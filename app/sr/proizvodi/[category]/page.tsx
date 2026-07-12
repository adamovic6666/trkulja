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

const categories: CategorySlug[] = ["knives", "axes", "other-products"];
const srSlugs = ["nozevi", "sekire", "ostali-proizvodi"];

export function generateStaticParams() {
  return srSlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryByLocaleSlug("sr", resolvedParams.category);
  if (!categories.includes(category)) return {};

  return {
    title: meta.sr[category].title,
    description: meta.sr[category].description,
    alternates: {
      canonical: `/sr/proizvodi/${resolvedParams.category}/`,
      languages: {
        en: `/products/${category}/`,
        sr: `/sr/proizvodi/${resolvedParams.category}/`,
      },
    },
  };
}

export default async function SerbianProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const locale = "sr";
  const resolvedParams = await params;
  const category = getCategoryByLocaleSlug(locale, resolvedParams.category);

  if (!categories.includes(category)) {
    notFound();
  }

  return (
    <main className="pt-40 md:pt-48">
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
