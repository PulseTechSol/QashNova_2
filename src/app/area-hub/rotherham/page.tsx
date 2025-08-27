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
      title: "How long to build a website?",
      content:
        "Most brochure sites take 2-6 weeks depending on scope; ecommerce can take 6-12 weeks. We'll provide a detailed timeline during consultation.",
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
        title: "Conquest Law solicitors",
        image: pngs.conquestLaw,
        bullets: [
          {
            label: "Challenge",
            text: "Their outdated website lacked trust and clarity for potential clients.",
          },
          {
            label: "Solution",
            text: "We designed a modern, professional website that highlights their legal expertise.",
          },
          {
            label: "Result",
            text: " Improved client trust and stronger online lead generation.",
          },
        ],
      },
      {
        title: "Izec prestigue",
        image: pngs.izecPrestige,
        bullets: [
          {
            label: "Challenge",
            text: "Their old site failed to reflect the premium nature of their services",
          },
          {
            label: "Solution",
            text: "We created a sleek, luxury-focused design with easy booking features.",
          },
          {
            label: "Result",
            text: "Enhanced brand image and higher customer engagement.",
          },
        ],
      },
      {
        title: "saifs boxing gym & fitness",
        image: pngs.saifBoxing,
        bullets: [
          {
            label: "Challenge",
            text: "The gym lacked an online presence to attract new members.",
          },
          {
            label: "Solution",
            text: " We developed a dynamic website showcasing classes, trainers, and programs.",
          },
          {
            label: "Result",
            text: "Increased visibility and new member sign-ups.",
          },
        ],
      },
    ],
  };

  const seoSupportData: SeoSupportData = {
    heading: " Local SEO & Support",
    description:
      "We don't just build attractive sites — we make sure they can be found by Rotherham customers",
    features: [
      [
        {
          image: svgs.blueTick,
          title: "Google Business Profile",
          subtitle: "Setup and optimization included",
        },
        {
          image: svgs.blueTick,
          title: "Monthly Packages",
          subtitle: "Ongoing SEO & marketing available",
        },
      ],
      [
        {
          image: svgs.blueTick,
          title: "On-Page SEO",
          subtitle: "Every site includes SEO optimization",
        },
        {
          image: svgs.blueTick,
          title: "Local Keywords",
          subtitle: "Rotherham, South Yorkshire & Sheffield targeting",
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
        <SeoSupportSection data={seoSupportData} />
        <FaqAreahub items={faqData} />
        <Footer />
      </Box>
    </>
  );
}

export default Rotherham;
