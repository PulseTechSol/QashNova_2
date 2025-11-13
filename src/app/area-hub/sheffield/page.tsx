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
  projects: [
    {
      title: "Isfahan & Kashan",
      image: "/areahub/isfhanAndKashan.png",
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
      image: "/areahub/brightEcoFuture.png",
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
        title: "Google Business ",
        subtitle: "Sheffield listing optimization",
      },
      {
        title: "Ongoing Support",
        subtitle: "Sheffield-focused marketing",
      },
    ],
    [
      {
        title: "Sheffield SEO",
        subtitle: "Local keyword targeting for Sheffield",
      },
      {
        title: "Local Citations",
        subtitle: "Sheffield directory listings",
      },
    ],
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("sheffield");

  const title = data?.metaTitle ?? "Website Design in Sheffield";
  const description =
    data?.metaDescription ??
    "Crafting bespoke websites in Sheffield. We blend stunning aesthetics with powerful functionality. Our designs are tailored to elevate your brand.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/area-hub/sheffield";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "Qashnova",
      images: [
        {
          url: "https://www.qashnova.com/logo.svg",
          width: 1200,
          height: 630,
          alt: "Website design in Sheffield by Qashnova - bespoke websites with stunning aesthetics",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["https://www.qashnova.com/logo.svg"],
    },
  };
}

async function Sheffield() {
  const data = await fetchPageData("sheffield");

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
          breadcrumbRight="Sheffield"
          heading={hero?.heading ?? "Website Design for Sheffield business"}
          description={
            hero?.description ??
            "Professional, mobile-friendly websites for Sheffield businesses that convert visitors into customers."
          }
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
          heading={whyQashnova?.heading ?? "Why Choose QashNova"}
          description={
            whyQashnova?.description ??
            "We're local to Sheffield and understand what works for businesses in the Steel City. Fast response times and practical advice tailored to Sheffield customers."
          }
          image={pngs.whyQashnova}
        />
        <CaseStudiesSection data={caseStudies ?? caseStudiesData} />
        <SeoSupportSection data={seoSupport ?? seoSupportData} />
        <FaqAreahub items={faqDataByCMS ?? faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Sheffield;
