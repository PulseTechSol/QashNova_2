import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load DigitalInsights component to reduce initial bundle size
const DigitalInsights = dynamicImport(
  () => import("./_sections/DigitalInsights"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("blog");

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
          alt: "Qashnova blog - expert insights on websites, branding, SEO, and digital strategies",
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

export default async function Blogs() {
  const data = await fetchPageData("blog");

  const hero = data?.textualContent?.heroSection;
  const digitalInsights = data?.textualContent?.digitalInsightsSection;

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
          isbool={true}
        />
      </header>

      <main role="main">
        <DigitalInsights
          heading={digitalInsights?.heading}
          description={digitalInsights?.description}
          blogs={digitalInsights?.blogs}
        />
      </main>
    </>
  );
}
