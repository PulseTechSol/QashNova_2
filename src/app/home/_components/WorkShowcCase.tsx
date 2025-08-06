"use client";

import { localFontSize } from "@/app/_utils/themes";
import { Box, Typography, SxProps, Theme } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface WorkShowcCaseProps {
  title?: string;
  year?: string;
  image?: StaticImageData;
  sx?: SxProps<Theme>;
  isboolean?: boolean;
  overlayText?: string;
}

export function WorkShowcCase({
  title,
  year,
  image,
  sx,
  isboolean,
  overlayText,
}: WorkShowcCaseProps) {
  return (
    <Box
      className="hover-card"
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.2)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: "20px", lg: "20px 50px", xxl: "40px 80px" },
          gap: "20px",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            maxWidth: { xs: "316px", md: "400px", xl: "600px" },
            width: "100%",
            fontSize: localFontSize.h5,
            fontWeight: 400,
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            maxWidth: { xs: "87px", xl: "120px" },
            width: "100%",
            fontSize: localFontSize.h5,
            fontWeight: 400,
            color: "#fff",
          }}
        >
          {year}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "#000",
          position: "relative",
          overflow: "hidden",
          ...sx,
        }}
      >
        <Image
          src={image as StaticImageData}
          alt="workimage"
          style={{
            width: "100%",
            height: "100%",
            objectFit: isboolean ? "cover" : "cover",
            backgroundColor: "red",
          }}
        />
        <Box
          className="curtain"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.6s ease",
            transform: "translateY(150%)",
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: localFontSize.h5,
              fontWeight: 500,
              textAlign: "left",
              padding: "20px",
              width: { lg: "90%", xl: "80%" },
            }}
          >
            {overlayText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
