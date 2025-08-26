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
      title: "How long to build a website?",
      content:
        "Most brochure sites take 2–6 weeks depending on scope; ecommerce can take 6–12 weeks. We'll provide a detailed timeline during consultation.",
    },
    {
      title: "Do you provide hosting?",
      content:
        "Yes, we offer managed hosting, security updates and maintenance packages for all Rotherham websites.",
    },
    {
      title: "Is it mobile-friendly websites?",
      content:
        "Every site we build is fully responsive and tested on mobile devices to ensure perfect functionality.",
    },
    {
      title: "Do you provide help with Google Business Profile?",
      content:
        "Yes, we help set up and optimize your Google Business Profile plus provide local SEO recommendations.",
    },
    {
      title: "What's included in the price?",
      content:
        "All websites include mobile responsiveness, basic SEO, contact forms, and training on how to update your content.",
    },
    {
      title: "Is ongoing support available?",
      content:
        "Yes, we offer monthly support packages including updates, backups, security monitoring, and content changes.",
    },
  ];
  const caseStudiesData = {
    sectionHeading: "Recent Rotherham Projects",
    cards: [
      {
        title: "South Yorkshire Manufacturing — B2B Lead Generation",
        image: pngs.southYorkshireB2bLeads,
        bullets: [
          { label: "Challenge", text: "No online presence or ordering system" },
          {
            label: "Solution",
            text: "New website with online ordering and local delivery",
          },
          { label: "Result", text: "50% increase in orders within 2 months" },
        ],
      },
      {
        title: "Sheffield Retailer — Ecommerce Website",
        image: pngs.southYorkshireB2bLeads,
        bullets: [
          { label: "Challenge", text: "Outdated store and poor UX" },
          {
            label: "Solution",
            text: "Modern ecommerce platform with mobile-first design",
          },
          { label: "Result", text: "Doubled online sales in 3 months" },
        ],
      },
    ],
  };

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
            { text: "Ecommerce Websites", image: svgs.ecommerceWebsites },
            { text: "Website Redesign", image: svgs.websiteRedesign },
          ]}
          rightColumnCards={[
            { text: "Business Sites", image: svgs.businessSites },
            { text: "Support & SEO", image: svgs.supportSeo },
          ]}
        />
        <WhyQashnovaSection
          heading="Why Qashnova"
          description="Our small-team approach means you'll deal with the same people who build and support your site. Real experience running campaigns that deliver results."
          image={pngs.WhyChooseQashNova}
        />
        <CaseStudiesSection data={caseStudiesData} />
        <SeoSupportSection />
        <FaqAreahub items={faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
