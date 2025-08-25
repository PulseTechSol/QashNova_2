import React from "react";
import HeroCity from "../_components/HeroCity";
import LandingNavbar from "@/_components/LandingNavbar";
import OurServicesGenaricSection from "../_sections/OurServicesGenaricSection";
import { Box } from "@mui/material";
import WhyQashnovaSection from "../_sections/WhyQashnovaSection";
import CaseStudiesSection from "../_sections/CaseStudiesSection";
import FaqAreahub from "../_sections/FaqAreahub";

import SeoSupportSection from "../_sections/SeoSupportSection";
import svgs from "@/_assets/svgs";
import pngs from "@/_assets/pngs";
import Footer from "@/_components/Footer";

function Rotherham() {
  const faqData = [
    {
      title: "Do I need technical skills?",
      content: "No, we handle everything.",
    },
    { title: "How long to go live?", content: "Usually 10 to 14 days." },
    { title: "Can I add features later?", content: "Yes. Scale as you grow." },
  ];
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient( to right, #FFFFFF 0%, #DDDDDD 100%)",
          // backgroundColor: "red",
        }}
      >
        <LandingNavbar />
        <HeroCity
          breadcrumbLeft="Areas Hub"
          breadcrumbRight="Rotherham"
          heading="Website Design in Rotherham"
          description="Crafting bespoke websites in Rotherham. We blend stunning aesthetics with powerful functionality. Our designs are tailored to elevate your brand."
        />
        <OurServicesGenaricSection
          heading="Services in Rotherham"
          leftColumnCards={[
            { text: "Ecommerce Websites", image: svgs.websiteRedesign },
            { text: "Business Sites", image: svgs.businessSites },
          ]}
          rightColumnCards={[
            { text: "Website Redesign", image: svgs.websiteRedesign },
            { text: "Support & SEO", image: svgs.supportSeo },
          ]}
        />
        <WhyQashnovaSection
          heading="Why Qashnova"
          description="Our small-team approach means you'll deal with the same people who build and support your site. Real experience running campaigns that deliver results."
          image={pngs.WhyChooseQashNova}
        />
        <CaseStudiesSection />
        <SeoSupportSection />
        <FaqAreahub items={faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
