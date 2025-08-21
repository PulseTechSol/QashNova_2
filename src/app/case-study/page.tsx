import pngs from "@/_assets/pngs";
import CaseStudySection from "@/_components/CaseStudySection";
import HeroSection from "@/_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Qashnova Success Stories",
  description:
    "Explore real case studies of businesses that grew with Qashnova’s websites, branding, and marketing strategies.",
  alternates: {
    canonical: "https://www.qashnova.com/case-study",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <HeroSection
        line1="Showcasing"
        line1Mobile="Displaying"
        line2Desktop="Our Journey"
        line3Desktop="with Clients"
        line2Mobile="Journey"
        line3Mobile="with Clients"
        isbool={true}
      />
      <CaseStudySection
        heading1="Sabir's"
        heading2="Grill"
        destopPara="Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernised their branding and visual identity, developed a clean, responsive custom website, and executed engaging social media campaigns. We also produced high-quality print materials including leaflets, menus, and posters, and built bespoke web solutions like feedback forms and an inventory management system. Our team fully managed key campaigns, including the successful launch of their Sheffield branch, significantly increasing Sabir's online visibility, boosting customer engagement, and driving more traffic to their locations."
        mobilePara="Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernised their branding and visual identity, developed a clean, responsive custom website, and executed engaging social media campaigns."
        image={pngs.caseStudy1}
        isbool={true}
      />
      <CaseStudySection
        heading1="Homeflair"
        destopPara="Qashnova partnered with Homeflair for a complete brand and digital overhaul. We created a full e-commerce website and continue to support with product management and uploads. Alongside this, we developed a completely new brand identity, including a new logo, premium colour palette, and refined typography. We post to both social platforms using tailored brand styles, positioning Homeflair as a more premium name. We’ve also worked on SEO to drive consistent organic traffic, significantly increasing engagement and establishing Homeflair as a leading name in home décor."
        mobilePara="Qashnova partnered with Homeflair for a complete brand and digital overhaul. We created a full e-commerce website and continue to support with product management and uploads."
        image={pngs.caseStudy2}
      />
    </>
  );
}
