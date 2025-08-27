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
        title: "Sabir’s Grill",
        image: pngs.sabirsGrill,
        bullets: [
          {
            label: "Challenge",
            text: "Standing out in a competitive fast-food market with a limited online presence.",
          },
          {
            label: "Solution",
            text: "Designed a modern, appetizing website focused on menu visibility and easy ordering.",
          },
          {
            label: "Result",
            text: "Increased customer engagement and improved online brand recognition.",
          },
        ],
      },
      {
        title: "A Class Travel",
        image: pngs.aClassTravel,
        bullets: [
          {
            label: "Challenge",
            text: "Communicating luxury and trust to high-end clients through digital presence.",
          },
          {
            label: "Solution",
            text: "Developed a sleek, professional website highlighting premium services and booking ease.",
          },
          {
            label: "Result",
            text: "Enhanced credibility and streamlined client inquiries",
          },
        ],
      },
      {
        title: "Savile Row Furniture",
        image: pngs.savileRowFurnitures,
        bullets: [
          {
            label: "Challenge",
            text: "Showcasing premium furnished apartments in a way that appeals to international clients.",
          },
          {
            label: "Solution",
            text: "Created a stylish, image-driven website emphasizing elegance and convenience.",
          },
          {
            label: "Result",
            text: "Improved client confidence and higher conversion rates from online visitors.",
          },
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
