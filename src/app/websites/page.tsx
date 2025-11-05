import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import WebsiteSection from "@/_components/WebsiteSection";
import { fetchPageData } from "@/lib/strapi";
import { WebsiteItem } from "@/types/website";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("website");

  return {
    title: data?.metaTitle ?? "Custom Website Development Services | Qashnova",
    description:
      data?.metaDescription ??
      "Get modern, fast, and responsive websites built by Qashnova. We design websites that not only look great but also perform for your business.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/websites",
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
