import React from "react";
import HeroCity from "../_components/HeroCity";
import LandingNavbar from "@/_components/LandingNavbar";
import OurServicesGenaricSection from "../_sections/OurServicesGenaricSection";
import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import WhyQashnovaSection from "../_sections/WhyQashnovaSection";

function Rotherham() {
  return (
    <>
      <Box>
        <LandingNavbar />
        <HeroCity />
        <OurServicesGenaricSection />
        <WhyQashnovaSection />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
