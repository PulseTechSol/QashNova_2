import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import CaseStudySection from "@/_components/CaseStudySection";
import { fetchPageData } from "@/lib/strapi";

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("case-study");

  return {
    title: data?.metaTitle ?? "Case Studies | Qashnova Success Stories",
    description:
      data?.metaDescription ??
      "Explore real case studies of businesses that grew with Qashnova’s websites, branding, and marketing strategies.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/case-study",
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
