import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load CaseStudySection component to reduce initial bundle size
const CaseStudySection = dynamicImport(
  () => import("@/_components/CaseStudySection"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

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

  const caseStudiesFallback = [
    {
      heading1: "Sabir's",
      heading2: "Grill",
      destopPara:
        "Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernised their branding and visual identity, developed a clean, responsive custom website, and executed engaging social media campaigns. We also produced high-quality print materials including leaflets, menus, and posters, and built bespoke web solutions like feedback forms and an inventory management system. Our team fully managed key campaigns, including the successful launch of their Sheffield branch, significantly increasing Sabir's online visibility, boosting customer engagement, and driving more traffic to their locations.",
      mobilePara:
        "Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernised their branding and visual identity, developed a clean, responsive custom website, and executed engaging social media campaigns.",
      image: "/caseStudy/caseStudy1.png",
      switchSide: true,
    },
    {
      heading1: "Homeflair",
      heading2: "",
      destopPara:
        "Qashnova partnered with Homeflair for a complete brand and digital overhaul. We created a full e-commerce website and continue to support with product management and uploads. Alongside this, we developed a completely new brand identity, including a new logo, premium colour palette, and refined typography. We post to both social platforms using tailored brand styles, positioning Homeflair as a more premium name. We've also worked on SEO to drive consistent organic traffic, significantly increasing engagement and establishing Homeflair as a leading name in home décor.",
      mobilePara:
        "Qashnova partnered with Homeflair for a complete brand and digital overhaul. We created a full e-commerce website and continue to support with product management and uploads.",
      image: "/caseStudy/caseStudy2.png",
      switchSide: false,
    },
  ];
  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1 ?? "Showcasing"}
          line1Mobile={hero?.mobile?.line1 ?? "Displaying"}
          line2Desktop={hero?.desktop?.line2 ?? "Our Journey"}
          line2Mobile={hero?.mobile?.line2 ?? "Journey"}
          line3Desktop={hero?.desktop?.line3 ?? "with Clients"}
          line3Mobile={hero?.mobile?.line3 ?? "with Clients"}
          isbool={true}
        />
      </header>

      <main role="main">
        {(caseStudies ?? caseStudiesFallback).map((study, index) => (
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
