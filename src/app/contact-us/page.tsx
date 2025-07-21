import React from "react";
import ContactUs from "@/_components/ContactUs";
import { Box } from "@mui/material";
import HeroSection from "@/_components/HeroSection";

export default function page() {
  return (
    <Box>
      <HeroSection
        line1="Ready To"
        line1Mobile="Solutions"
        line2Desktop="Start Your"
        line2Mobile="Built For"
        line3Desktop="Project?"
        line3Mobile="Your Brand"
      />
      <ContactUs />
    </Box>
  );
}
