import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";
import { WebsiteItem } from "@/types/website";

// Lazy load WebsiteSection component to reduce initial bundle size
const WebsiteSection = dynamicImport(
  () => import("@/_components/WebsiteSection"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("website");

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
          alt: "Qashnova custom website development services - modern, fast, and responsive websites",
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
export default async function WebsitesPage() {
  const data = await fetchPageData("website");

  const hero = data?.textualContent?.heroSection;
  const websitesData: WebsiteItem[] = data?.textualContent?.websiteData;
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

      {websitesData &&
        websitesData.map((item, idx) => (
          <WebsiteSection
            key={idx}
            heading1={item.heading1}
            heading2={item.heading2}
            destopPara={item.destopPara}
            mobilePara={item.mobilePara}
            image={item.image}
            link={item.link}
            isbool={item.switchSide}
          />
        ))}
    </>
  );
}
