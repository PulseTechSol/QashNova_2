import React from "react";
import HeroCity from "../_components/HeroCity";
import LandingNavbar from "@/_components/LandingNavbar";
import OurServicesGenaricSection from "../_sections/OurServicesGenaricSection";
import { Box } from "@mui/material";
import WhyQashnovaSection from "../_sections/WhyQashnovaSection";
import CaseStudiesSection from "../_sections/CaseStudiesSection";
import FaqAreahub from "../_sections/FaqAreahub";

import SeoSupportSection, {
  SeoSupportData,
} from "../_sections/SeoSupportSection";
import svgs from "@/_assets/svgs";
import pngs from "@/_assets/pngs";
import Footer from "@/_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design in Sheffield",
  description:
    "Crafting bespoke websites in Sheffield. We blend stunning aesthetics with powerful functionality. Our designs are tailored to elevate your brand.",
  alternates: { canonical: "https://www.qashnova.com/area-hub/sheffield" },
};
function Sheffield() {
  const faqData = [
    {
      title: "Do you provide hosting and support?",
      content:
        "Yes, we offer managed hosting, security updates and maintenance packages for all Sheffield businesses with local support.",
    },
    {
      title: "Can you help with Sheffield SEO?",
      content:
        "Absolutely. We optimize for Sheffield local search and help with Google Business Profile setup and local SEO strategies.",
    },
    {
      title: "Do you meet Sheffield clients in person?",
      content:
        "Yes, we can meet Sheffield clients for initial consultations and project discussions when needed. We're local to the area.",
    },
  ];
  const caseStudiesData = {
    sectionHeading: "Sheffield Project Case Studies",
    cards: [
      {
        title: "Isfahan & Kashan",
        image: pngs.isfhanAndKashan,
        bullets: [
          {
            label: "Challenge",
            text: "Needed a premium online presence to reflect the elegance of authentic Persian rugs.",
          },
          {
            label: "Solution",
            text: "Designed a refined, image-focused website with smooth navigation and cultural storytelling.",
          },
          {
            label: "Result",
            text: "Enhanced brand credibility and increased customer engagement online.",
          },
        ],
      },
      {
        title: "Bright Eco Future",
        image: pngs.brightEcoFuture,
        bullets: [
          {
            label: "Challenge",
            text: "Complex information about government grants was difficult for homeowners to understand.",
          },
          {
            label: "Solution",
            text: "Built a clear, user-friendly website with simple content flow and application guidance.",
          },
          {
            label: "Result",
            text: "Improved lead generation and made the grant process easier for eligible homeowners.",
          },
        ],
      },
    ],
  };
  const seoSupportData: SeoSupportData = {
    heading: "Regional SEO & Support",
    description:
      "We don't just build attractive sites — we make sure they can be found by Sheffield customers",
    features: [
      [
        {
          image: svgs.blueTick,
          title: "Google Business ",
          subtitle: "Sheffield listing optimization",
        },
        {
          image: svgs.blueTick,
          title: "Ongoing Support",
          subtitle: "Sheffield-focused marketing",
        },
      ],
      [
        {
          image: svgs.blueTick,
          title: "Sheffield SEO",
          subtitle: "Local keyword targeting for Sheffield",
        },
        {
          image: svgs.blueTick,
          title: "Local Citations",
          subtitle: "Sheffield directory listings",
        },
      ],
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
          breadcrumbRight="Sheffield"
          heading="Website Design for Sheffield business"
          description="Professional, mobile-friendly websites for Sheffield businesses that convert visitors into customers."
        />
        <OurServicesGenaricSection
          heading="Services in Sheffield"
          leftColumnCards={[
            { text: "Ecommerce Websites", image: svgs.ecommerceWebsites },
            { text: "Website Redesign", image: svgs.websiteRedesign },
          ]}
          rightColumnCards={[
            { text: "Business websites", image: svgs.buswebsite },
            { text: "SEO & Maintenance", image: svgs.seosheffield },
          ]}
        />
        <WhyQashnovaSection
          heading="Why Choose QashNova"
          description="We're local to Sheffield and understand what works for businesses in the Steel City. Fast response times and practical advice tailored to Sheffield customers."
          image={pngs.whyQashnova}
        />
        <CaseStudiesSection data={caseStudiesData} />
        <SeoSupportSection data={seoSupportData} />
        <FaqAreahub items={faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Sheffield;
