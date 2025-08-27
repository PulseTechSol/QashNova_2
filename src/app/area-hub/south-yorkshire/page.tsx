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

function Rotherham() {
  const faqData = [
    {
      title: "Do you work across all of South Yorkshire?",
      content:
        "Yes, we serve businesses across Sheffield, Rotherham, South-Yorkshire, Barnsley, Chesterfield and surrounding areas. Same great service everywhere.",
    },
    {
      title: "Do you provide ongoing support?",
      content:
        "Yes, we offer managed hosting, security updates, maintenance packages and SEO services for all South Yorkshire clients.",
    },
    {
      title: "Can you help with local SEO?",
      content:
        "Absolutely. We optimize for local search across all South Yorkshire towns and help with Google Business Profile setup and management.",
    },
    {
      title: "Do you offer face-to-face meetings?",
      content:
        "Yes, we can meet clients across South Yorkshire for initial consultations and project discussions when needed.",
    },
  ];
  const caseStudiesData = {
    sectionHeading: "South Yorkshire Case Studies",

    cards: [
      {
        title: "South Yorkshire Manufacturing — B2B Lead Generation",
        image: pngs.southYorkshireB2bLeads,
        bullets: [
          { label: "Challenge", text: " Complex services poorly presented." },
          {
            label: "Solution",
            text: " Clean B2B site with clear service sections.",
          },
          { label: "Result", text: "60% increase in qualified leads" },
        ],
      },
      {
        title: "Doncaster Service Business — Local SEO Success",
        image: pngs.doncasterLocalSeo,
        bullets: [
          { label: "Challenge", text: "Poor local search visibility" },
          {
            label: "Solution",
            text: " SEO-optimized site with local targeting",
          },
          { label: "Result", text: " First page rankings for key services" },
        ],
      },
    ],
  };

  const seoSupportData: SeoSupportData = {
    heading: "  Regional SEO & Support",
    description:
      "We don't just build attractive sites — we make sure they can be found by South Yorkshire customers",
    features: [
      [
        {
          image: svgs.blueTick,
          title: "Google Business",
          subtitle: "Multi-location optimization",
        },
        {
          image: svgs.blueTick,
          title: "Ongoing Support",
          subtitle: "Regional marketing campaigns",
        },
      ],

      [
        {
          image: svgs.blueTick,
          title: " Regional SEO",
          subtitle: "South Yorkshire keyword targeting",
        },
        {
          image: svgs.blueTick,
          title: "Local Citations",
          subtitle: "South Yorkshire to Sheffield listings",
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
          breadcrumbRight="South-Yorkshire"
          heading="Website Design in south-yorkshire"
          description="Fast, secure and easy-to-manage websites for businesses across Sheffield"
        />
        <OurServicesGenaricSection
          heading="services in south-yorkshire"
          leftColumnCards={[
            { text: " Ecommerce Stores", image: svgs.ecmstore },
            { text: "B2B & Manufacturing", image: svgs.b2bmanufacturing },
          ]}
          rightColumnCards={[
            { text: "Service Businesses", image: svgs.businessSites },
            { text: "SEO & Maintenance", image: svgs.supportSeo },
          ]}
        />
        <WhyQashnovaSection
          heading="Why Trust QashNova"
          description="Our team understands the South Yorkshire market. We've worked with businesses across towns and know what local customers respond to."
          image={pngs.WhyTrustQashNova}
        />
        <CaseStudiesSection data={caseStudiesData} />
        <SeoSupportSection data={seoSupportData} />
        <FaqAreahub items={faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
