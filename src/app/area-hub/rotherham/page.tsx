import React from "react";
import HeroCity from "../_components/HeroCity";
import LandingNavbar from "@/_components/LandingNavbar";
import OurServicesGenaricSection from "../_components/OurServicesGenaricSection";
import { Box } from "@mui/material";
import Footer from "@/_components/Footer";

function Rotherham() {
  return (
    <>
      <Box>
        <LandingNavbar />
        <HeroCity />
        <OurServicesGenaricSection />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
