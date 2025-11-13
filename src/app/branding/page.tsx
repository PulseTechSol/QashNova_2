import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { Metadata } from "next";
import { fetchPageData } from "@/lib/strapi";

// Lazy load CardBranding component to reduce initial bundle size
const CardBranding = dynamicImport(() => import("./_sections/CardBranding"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("branding");

  const title = data?.metaTitle ?? "Branding & Identity Design Services | Qashnova";
  const description =
    data?.metaDescription ??
    "Qashnova offers complete branding solutions including logo design, brand identity, and visuals that make your business unforgettable.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/branding";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "Qashnova",
      images: [
        {
          url: "https://www.qashnova.com/logo.svg",
          width: 1200,
          height: 630,
          alt: "Qashnova branding and identity design services - logo design and brand identity",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["https://www.qashnova.com/logo.svg"],
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
