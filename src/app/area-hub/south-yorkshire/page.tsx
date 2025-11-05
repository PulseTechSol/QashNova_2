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
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  projects: [
    {
      title: "Sabir’s Grill",
      image: "/areahub/sabirsGrill.png",
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
      image: "/areahub/aClassTravel.png",
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
      image: "/areahub/savileRowFurnitures.png",
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
        title: "Google Business",
        subtitle: "Multi-location optimization",
      },
      {
        title: "Ongoing Support",
        subtitle: "Regional marketing campaigns",
      },
    ],

    [
      {
        title: " Regional SEO",
        subtitle: "South Yorkshire keyword targeting",
      },
      {
        title: "Local Citations",
        subtitle: "South Yorkshire to Sheffield listings",
      },
    ],
  ],
};
// south-yorkshire
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("south-yorkshire");

  return {
    title: data?.metaTitle ?? "Website Design in South Yorkshire",
    description:
      data?.metaDescription ??
      "Crafting bespoke websites in South Yorkshire. We blend stunning aesthetics with powerful functionality. Our designs are tailored to elevate your brand.",
    alternates: {
      canonical:
        data?.canonicalUrl ?? "https://www.qashnova.com/south-yorkshire",
    },
  };
}

async function SouthYorkshire() {
  const data = await fetchPageData("south-yorkshire");

  const hero = data?.textualContent?.heroSection;
  const caseStudies = data?.textualContent?.caseStudiesSection;
  const seoSupport = data?.textualContent?.seoSupportSection;
  const whyQashnova = data?.textualContent?.whyQashnovaSection;
  const faqDataByCMS = data?.textualContent?.faqData;

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
          heading={hero?.heading ?? "Website Design in south-yorkshire"}
          description={
            hero?.description ??
            "Fast, secure and easy-to-manage websites for businesses across south-yorkshire"
          }
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
          heading={whyQashnova?.heading ?? "Why Trust QashNova"}
          description={
            whyQashnova?.description ??
            "Our team understands the South Yorkshire market. We've worked with businesses across towns and know what local customers respond to."
          }
          image={pngs.WhyTrustQashNova}
        />
        <CaseStudiesSection data={caseStudies ?? caseStudiesData} />
        <SeoSupportSection data={seoSupport ?? seoSupportData} />
        <FaqAreahub items={faqDataByCMS ?? faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default SouthYorkshire;
