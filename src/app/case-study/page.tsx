import pngs from "@/_assets/pngs";
import CaseStudySection from "@/_components/CaseStudySection";
import HeroSection from "@/_components/HeroSection";

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
        destopPara="Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernized their branding and visual identity, developed a clean, responsive website, and executed engaging social media campaigns. This integrated approach significantly increased Sabir's online visibility, boosted customer engagement, and drove more traffic to their locations, proving how strategic digital transformation elevates a fast-food brand."
        mobilePara="Sabir's partnered with Qashnova for a complete brand and digital overhaul. We modernized their branding and visual identity, developed a clean, responsive website, and executed engaging social media campaigns."
        image={pngs.caseStudy1}
        isbool={true}
      />
      <CaseStudySection
        heading1="Homeflair"
        destopPara="Qashnova partnered with Homeflair for a complete brand and digital overhaul. We executed a comprehensive refresh, developing a modern, user-friendly website and a targeted social media strategy. This work delivered real impact, driving traffic and engagement, and firmly establishing Homeflair as a leading name in home décor."
        mobilePara="Qashnova partnered with Homeflair for a complete brand and digital overhaul. We executed a comprehensive refresh, developing a modern, user-friendly website and a targeted social media strategy."
        image={pngs.caseStudy2}
      />
    </>
  );
}
