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

  const title =
    data?.metaTitle ?? "Branding & Identity Design Services | Qashnova";
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

  const brandingSectionFallback = {
    heading: "Defining",
    description: {
      mobile: [
        `A strong logo is one of the most important parts of any brand. It is
         often the first thing people notice and the image they remember long
         after visiting your business. A well designed logo captures your
         values, sets you apart from competitors and builds trust with your
         audience.`,
        `At our studio we create new logos that reflect your brand’s
         personality and vision. We take time to understand your business,
         your goals and your customers before developing designs that are
         clear, versatile and memorable. Whether you are starting fresh or
         looking to update an existing design, our process is focused on
         making sure your logo works across print, digital and social media.`,
        `We also specialise in re-designing logos to give established brands
         a modern edge while keeping the essence that people recognise. This
         helps businesses stay relevant and consistent as they grow and
         evolve.`,
      ],
      desktop: [
        `A strong logo is one of the most important parts of any brand. It is
         often the first thing people notice and the image they remember long
         after visiting your business. A well designed logo captures your
         values, sets you apart from competitors and builds trust with your
         audience.`,
        `At our studio we create new logos that reflect your brand’s
         personality and vision. We take time to understand your business,
         your goals and your customers before developing designs that are
         clear, versatile and memorable. Whether you are starting fresh or
         looking to update an existing design, our process is focused on
         making sure your logo works across print, digital and social media.`,
        `We also specialise in re-designing logos to give established brands
         a modern edge while keeping the essence that people recognise. This
         helps businesses stay relevant and consistent as they grow and
         evolve.`,
      ],
    },
    showcaseCards: [
      { title: "sofa & rattan", image: "/branding/branding1.png" },
      { title: "Isfahan & Kashan", image: "/branding/branding2.png" },
      { title: "A Class Travel", image: "/branding/branding3.png" },
      { title: "savile row furniture", image: "/branding/branding4.png" },
    ],
  };
  return (
    <>
      <HeroSection
        line1={hero?.desktop?.line1 ?? "Defining"}
        line1Mobile={hero?.mobile?.line1 ?? "Defining"}
        line2Desktop={hero?.desktop?.line2 ?? "Your Unique"}
        line2Mobile={hero?.mobile?.line2 ?? "Your Unique"}
        line3Desktop={hero?.desktop?.line3 ?? "brand identity"}
        line3Mobile={hero?.mobile?.line3 ?? "identity"}
        isbool={true}
      />

      <CardBranding
        brandingSection={brandingSection ?? brandingSectionFallback}
      />
    </>
  );
}
