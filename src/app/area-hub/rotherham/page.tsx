import React from "react";
import HeroCity from "../_components/HeroCity";
import LandingNavbar from "@/_components/LandingNavbar";
import OurServicesGenaricSection from "../_sections/OurServicesGenaricSection";
import { Box } from "@mui/material";
import WhyQashnovaSection from "../_sections/WhyQashnovaSection";
import CaseStudiesSection from "../_sections/CaseStudiesSection";
import FaqAreahub from "../_sections/FaqAreahub";

import SeoSupportSection from "../_sections/SeoSupportSection";

function Rotherham() {
    const faqData = [
    { title: "Do I need technical skills?", content: "No, we handle everything." },
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
        <HeroCity />
        <OurServicesGenaricSection />
        <WhyQashnovaSection />
        <CaseStudiesSection />
      <FaqAreahub items={faqData}   />
        <SeoSupportSection />
      </Box>
    </>
  );
}

export default Rotherham;
