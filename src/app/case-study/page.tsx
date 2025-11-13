import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load CaseStudySection component to reduce initial bundle size
const CaseStudySection = dynamicImport(() => import("@/_components/CaseStudySection"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("case-study");

  const title = data?.metaTitle ?? "Case Studies | Qashnova Success Stories";
  const description =
    data?.metaDescription ??
    "Explore real case studies of businesses that grew with Qashnova's websites, branding, and marketing strategies.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/case-study";

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
          alt: "Qashnova case studies - success stories of businesses that grew with our services",
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

export default async function CaseStudyPage() {
  const data = await fetchPageData("case-study");

  const hero = data?.textualContent?.heroSection;
  const caseStudies: {
    heading1: string;
    heading2: string;
    destopPara: string;
    mobilePara: string;
    image: string;
    switchSide?: boolean;
  }[] = data?.textualContent?.caseStudies;

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
        {caseStudies.map((study, index) => (
          <CaseStudySection
            key={index}
            heading1={study.heading1}
            heading2={study.heading2}
            destopPara={study.destopPara}
            mobilePara={study.mobilePara}
            image={study.image}
            isbool={study.switchSide}
          />
        ))}
      </main>
    </>
  );
}
