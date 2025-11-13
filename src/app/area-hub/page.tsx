import React from "react";
import AreaHero from "./_sections/AreaHero";
import OurHubareasCards from "./_sections/OurHubareasCards";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("area-hub");

  const title = data?.metaTitle ?? "Area Hub - Qashnova";
  const description =
    data?.metaDescription ??
    "Discover our Area Hub for professional website design services in Rotherham, South Yorkshire & Sheffield. Elevate your online presence with Qashnova.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/area-hub";

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
          alt: "Qashnova area hub - professional website design services in Rotherham, South Yorkshire and Sheffield",
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

const locations = [
  {
    title: "Rotherham",
    description:
      "We're local and work with South Yorkshire businesses daily. That means fast response times and practical advice tailored to Rotherham customers.",
    route: "/area-hub/rotherham",
  },
  {
    title: "South Yorkshire",
    description:
      "Our websites are built to be fast, secure and easy to manage, so you can focus on running your business while we bring you more customers.  ",
    route: "/area-hub/south-yorkshire",
  },
  {
    title: "sheffield",
    description:
      "Designing bespoke websites that capture the unique spirit of Sheffield, ensuring a seamless and engaging user experience that drive real business growth.",
    route: "/area-hub/sheffield",
  },
];

async function page() {
  const data = await fetchPageData("area-hub");

  const hero = data?.textualContent?.heroSection;
  const ourHubAreas = data?.textualContent?.ourHubAreasSection;

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <AreaHero
        heading={
          hero?.heading ??
          "Professional Website Design for Rotherham, South Yorkshire & Sheffield"
        }
        subheading={
          hero?.description ??
          `Crafting bespoke websites in Rotherham, South Yorkshire, and
          Sheffield, we blend stunning aesthetics with powerful functionality.
          Our designs are tailored to elevate your brand.`
        }
      />
      <OurHubareasCards
        heading={ourHubAreas?.heading ?? "our hub areas"}
        description={
          ourHubAreas?.description ??
          " At Qashnova, we have been working with clients across the UK, providing tailored digital solutions that help businesses grow and succeed. Our projects cover a wide range of services including web design, development, branding and digital marketing. We take time to understand the challenges faced in different industries and create strategies that deliver lasting results. From small start-ups to established companies, our focus is always on building strong partnerships and providing measurable value. By combining creativity with technical expertise, we continue to support businesses nationwide and expand our presence across a variety of sectors."
        }
        locations={ourHubAreas?.locations ?? locations}
      />

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "0px",
          top: { xs: "-2%", lg: "10%" },
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
          top: { xs: "-2%", lg: "10%" },
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
    </Box>
  );
}

export default page;
