"use client";
import { sectionPadding } from "@/app/_utils/themes";
import { Box } from "@mui/material";
import svgs from "@/_assets/svgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhatIncludedCard } from "../_components/WhatIncludedCard";

export default function WhatIncluded() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customPaging: (i: number) => <div className="custom-dot" />,
    dotsClass: "slick-dots custom-dots",
  };
  const websiteServices = [
    {
      title: "Website & Hosting",
      image: svgs.inclued1,
      description:
        "Custom website, bespoke design for mobile & desktop, content updates & management, web & email hosting",
    },

    {
      title: "Branding & SEO",
      image: svgs.branding,
      description: "Logo redesign, local style, on-page SEO, keyword research.",
    },
    {
      title: "Google Business",
      image: svgs.inclued5,
      description:
        "Profile setup, optimisation , and local google ads campaign.",
    },
    {
      title: "Social Media",
      image: svgs.inclued4,
      description: "Weekly posting on Facebook and Instagram.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        position: "relative",
      }}
    >
      {/* desktop cards here */}
      <Box
        sx={{
          maxWidth: { xs: "1440px" },
          width: "100%",
          position: "relative",
          p: sectionPadding,
          margin: "auto",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflow: "hidden",
          gap: { xs: "20px", md: "30px" },
        }}
      >
        {websiteServices.map((items, index) => (
          <WhatIncludedCard
            key={index}
            image={items.image}
            title={items.title}
            description={items.description}
            index={index}
          />
        ))}
      </Box>

      {/* mobile silder there */}
      <Box sx={{ display: { sm: "none" }, paddingBottom: "70px" }}>
        <Slider {...settings}>
          {websiteServices.map((items, index) => (
            <WhatIncludedCard
              key={index}
              image={items.image}
              title={items.title}
              description={items.description}
              index={index}
            />
          ))}
        </Slider>
      </Box>
      {/* positioned circle */}
      <Box
        sx={{
          width: { xs: "355px", md: "340px" },
          height: { xs: "355px", md: "340px" },
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          display: { xs: "none", sm: "block" },
        }}
      >
        {/* Decorative background - removed Image, using CSS Box */}
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
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          position: "absolute",
          left: "calc(50% - 320px)",
          top: "50%",
          transform: "translate(-50% , -50%)",
          zIndex: 1,
          display: { xs: "none", sm: "block" },
        }}
      >
        {/* Decorative background - removed Image, using CSS Box */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(88, 65, 212, 0.1)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "355px", md: "450px" },
          height: { xs: "355px", md: "450px" },
          position: "absolute",
          left: "calc(50% + 320px)",
          top: "50%",
          transform: "translate(-50% , -50%)",
          zIndex: 1,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(88, 65, 212, 0.1)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
