import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load below-the-fold components to reduce initial bundle size
const WhatweDo = dynamicImport(() => import("./_sections/WhatweDo"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const SectionWithHeadingAndCTA = dynamicImport(
  () => import("@/_components/SectionWithHeadingAndCTA"),
  {
    loading: () => <div style={{ minHeight: "200px" }} />,
    ssr: true,
  }
);

const Ourmission = dynamicImport(() => import("./_sections/Ourmission"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("about-us");

  const title = data?.metaTitle;
  const description = data?.metaDescription;
  const url = data?.canonicalUrl;

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
          alt: "About Qashnova - creative digital agency for websites, branding, and growth strategies",
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

export default async function AboutUsPage() {
  const data = await fetchPageData("about-us");

  const hero = data?.textualContent?.heroSection;
  const whatWeDo = data?.textualContent?.whatWeDoSection;
  const brand = data?.textualContent?.brightenYourBrandSection;
  const mission = data?.textualContent?.ourMissionSection;

  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1}
          line1Mobile={hero?.mobile?.line1}
          line2Desktop={hero?.desktop?.line2}
          line2Mobile={hero?.mobile?.line2}
          line3Desktop={hero?.desktop?.line3}
          line3Mobile={hero?.mobile?.line3}
        />
      </header>

      <main role="main">
        <WhatweDo whatWeDo={whatWeDo} />
        <SectionWithHeadingAndCTA
          heading={brand?.heading}
          lastword={brand?.lastword}
          route={brand?.route}
        />
        <Ourmission mission={mission} />
      </main>
    </>
  );
}
