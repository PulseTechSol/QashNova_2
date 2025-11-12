"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

interface HeroCityProps {
  breadcrumbLeft: string; // e.g. "Areas Hub"
  breadcrumbRight: string; // e.g. "Rotherham"
  heading: string; // e.g. "Website Design in Rotherham"
  description: string; // e.g. "Crafting bespoke websites in Rotherham..."
}

export default function HeroCity({
  breadcrumbLeft = "Areas Hub",
  breadcrumbRight,
  heading,
  description,
}: HeroCityProps) {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: sectionPadding,
          paddingTop: { xs: "30px", md: "40px", lg: "50px" },
          margin: "auto",
        }}
      >
        {/* Breadcrumb */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "50px" },
          }}
        >
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              fontSize: "18px",
              color: "#00000080",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            {breadcrumbLeft}
          </Typography>
          <Image src={svgs.arrowRight} alt="breadcrumb navigation arrow" />
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              fontSize: "18px",
              color: "rgba(60, 101, 255, 1)",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            {breadcrumbRight}
          </Typography>
        </Box>

        {/* Heading & Description */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "600px", lg: "864px" },
            margin: "auto",
          }}
        >
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: localFontSize.h6,
              fontWeight: 600,
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: "40px",
              textTransform: "uppercase",
            }}
          >
            {heading}
          </Typography>
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            variant="h2"
            sx={{
              fontSize: "18px",
              color: "#00000080",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
