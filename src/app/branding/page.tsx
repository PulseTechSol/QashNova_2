import HeroSection from "@/_components/HeroSection";
import CardBranding from "./_sections/CardBranding";
import { Metadata } from "next";
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("branding");

  return {
    title: data?.metaTitle ?? "Branding & Identity Design Services | Qashnova",
    description:
      data?.metaDescription ??
      "Qashnova offers complete branding solutions including logo design, brand identity, and visuals that make your business unforgettable.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/branding",
    },
  };
}

export default async function BrandingPage() {
  const data = await fetchPageData("branding");

  const hero = data?.textualContent?.heroSection;
  const brandingSection: {
    heading: string;
    description: { mobile: string[]; desktop: string[] };
    showcaseCards: { image: string; title: string }[];
  } = data?.textualContent?.brandingSection;
  console.log(brandingSection, "brandingSection");
  return (
    <>
      <HeroSection
        line1={hero?.desktop?.line1}
        line1Mobile={hero?.mobile?.line1}
        line2Desktop={hero?.desktop?.line2}
        line2Mobile={hero?.mobile?.line2}
        line3Desktop={hero?.desktop?.line3}
        line3Mobile={hero?.mobile?.line3}
        isbool={true}
      />
      <CardBranding brandingSection={brandingSection} />
    </>
  );
}
