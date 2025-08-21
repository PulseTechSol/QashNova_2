import React from "react";
import ContactUs from "@/_components/ContactUs";
import { Box } from "@mui/material";
import HeroSection from "@/_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Qashnova | Let’s Build Something Great",
  description:
    "Get in touch with Qashnova for website development, branding, or digital strategy. We’re here to help you succeed.",
  alternates: {
    canonical: "https://www.qashnova.com/contact-us",
  },
};

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
