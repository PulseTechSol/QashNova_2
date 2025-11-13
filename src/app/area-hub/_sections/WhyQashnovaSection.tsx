"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface WhyQashnovaSectionProps {
  heading: string;
  description: string;
  image: StaticImageData;
}

export default function WhyQashnovaSection({
  heading,
  description,
  image,
}: WhyQashnovaSectionProps) {
  return (
    <Box sx={{ bgcolor: "#000", position: "relative" }}>
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "60px", lg: "80px" },
        }}
      >
        {/* heading */}
        <Typography
         data-aos="fade-right"
            data-aos-duration="500"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: {
              xs:"32px",
              md:localFontSize.h4.md,
              lg: localFontSize.h4.lg,
              xxl: localFontSize.h4.lg,
            },
            fontWeight: 500,
            color: "#fff",
            textTransform: "capitalize",
            maxWidth:{md:"400px",xl:"100%"},
            width:"100%",
            lineHeight:{md:"60px",lg:"70px"},
          }}
        >
          {heading}
        </Typography>

        {/* description + image */}
        <Box sx={{ maxWidth: "466px" }}>
          <Typography
           data-aos="fade-left"
            data-aos-duration="500"
            sx={{
               textAlign: { xs: "center", md: "left" },
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: {xs:"18px",sm:"20px"},
              mb:{ xs: "40px", md: "60px", lg: "80px" },
            }}
          >
            {description}
          </Typography>
          <Box  data-aos="fade-left"
            data-aos-duration="500"
            sx={{ mt: { xs: "20px", md: "60px", lg: "80px" } }}>
            <Image
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={image}
              alt={`${heading} illustration - ${description.substring(0, 60)}...`}
              loading="lazy"
            />
          </Box>
        </Box>

        {/* blur background circle */}
        <Box
          sx={{
            maxWidth: { xs: "300px", md: "25vw", lg: "30%", xxl: "20%" },
            width: "100%",
            position: "absolute",
            left: "0px",
            bottom: { xs: "-2%", lg: "10%" },
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
      </Box>
    </Box>
  );
}
