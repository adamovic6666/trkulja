import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContactSection,
  ProductGrid,
  SectionTitle,
  styles,
} from "../../../components";
import {
  CategorySlug,
  copy,
  getCategoryByLocaleSlug,
  meta,
  productsFor,
} from "../../../data";

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

  return {
    title: meta.en[category].title,
    description: meta.en[category].description,
    alternates: {
      canonical: `/products/${category}/`,
      languages: {
        en: `/products/${category}/`,
        sr: `/sr/proizvodi/${category === "knives" ? "nozevi" : category === "axes" ? "sekire" : "ostali-proizvodi"}/`,
      },
    },
  };
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
      <section className="bg-black pb-12 md:pb-20">
        <div className={styles.container}>
          <SectionTitle>{copy[locale].categories[category]}</SectionTitle>
          <p className="mx-auto mb-20 max-w-[770px] text-[15px] text-white/70">
            {copy[locale].categoryIntro[category]}
          </p>
          <ProductGrid locale={locale} products={productsFor(category)} />
        </div>
      </section>
      <ContactSection locale={locale} />
    </main>
  );
}
