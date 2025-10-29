"use client";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import Navbar from "@/_components/LandingNavbar";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AreaHero({
  heading,
  subheading,
}: {
  heading?: string;
  subheading?: string;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Navbar />
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
          gap: "40px",
        }}
      >
        {/* <Box sx={{width:"100%",maxWidth:"1140px"}}> */}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: localFontSize.h6,
            fontWeight: 600,
            color: "#3C65FF",
            background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // mb:{xs:"40px",},
            lineHeight: { xs: "50px", sm: "60px", md: "80px" },
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: "18px",
            color: "#00000080",
            textAlign: "center",
            fontWeight: "400",
            maxWidth: { md: "800px", lg: "864px" },
          }}
        >
          {subheading}
        </Typography>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
