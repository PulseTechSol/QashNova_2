import HeroHome from "./_sections/Hero";
import dynamicImport from "next/dynamic";
import { Box } from "@mui/material";
import { Metadata } from "next";
// import Image from "next/image";
// import pngs from "@/_assets/pngs";

// Lazy load below-the-fold components to reduce initial bundle size
const WhatIncluded = dynamicImport(() => import("./_sections/WhatIncluded"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const SabirSection = dynamicImport(() => import("./_sections/SabirSection"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const ServiceSection = dynamicImport(
  () => import("./_sections/ServiceSection"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

const FaqSection = dynamicImport(() => import("./_sections/FaqSection"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
  ssr: true,
});

export const metadata: Metadata = {
  title: "South Yorkshire Digital Marketing Package | Qashnova",
  description:
    "All-in-One Online Presence for Just £200/month. Get professional website design, SEO, and digital marketing services for South Yorkshire businesses.",
  alternates: {
    canonical: "https://www.qashnova.com/sy-landing-page",
  },
  openGraph: {
    title: "South Yorkshire Digital Marketing Package | Qashnova",
    description:
      "All-in-One Online Presence for Just £200/month. Get professional website design, SEO, and digital marketing services for South Yorkshire businesses.",
    url: "https://www.qashnova.com/sy-landing-page",
    siteName: "Qashnova",
    images: [
      {
        url: "https://www.qashnova.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "South Yorkshire digital marketing package - all-in-one online presence for £200/month",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Yorkshire Digital Marketing Package | Qashnova",
    description:
      "All-in-One Online Presence for Just £200/month. Get professional website design, SEO, and digital marketing services for South Yorkshire businesses.",
    images: ["https://www.qashnova.com/logo.svg"],
  },
};

export default function Home() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HeroHome />
      <WhatIncluded />
      <SabirSection />
      <ServiceSection />
      <FaqSection />
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "0px",
          top: { xs: "-2%", lg: "-10%" },
          zIndex: 1,
          transform: {
            xs: "translate(-20%, -10%)",
            lg: "translate(-40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.2)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          right: "0px",
          top: { xs: "-2%", lg: "-10%" },
          zIndex: 1,
          transform: {
            xs: "translate(20%, -10%)",
            lg: "translate(40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.2)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "40%", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "50%",
          top: { xs: "-8%", lg: "-15%" },
          zIndex: 1,
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(38, 23, 177, 0.1)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
