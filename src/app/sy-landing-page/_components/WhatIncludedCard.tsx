"use client";

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type WhatIncludedCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  index?: number;
};

export function WhatIncludedCard({
  image,
  title,
  description,
  index,
}: WhatIncludedCardProps) {
  return (
    <Box
      sx={{
        padding: { xs: "40px 20px 30px 20px", sm: "unset" },
        width: { xs: "100%", sm: "unset" },
      }}
    >
      <Box
        key={index}
        data-aos="zoom-in"
        data-aos-duration="800"
        sx={{
          margin: "auto",
          maxWidth: { xs: "366px", sm: "260px" },
          width: "100%",
          height: { xs: "366px", sm: "260px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "32px",
          padding: "20px",
          flexDirection: "column",
          position: "relative",
          zIndex: "20",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.4s ease-in-out",
          background:
            "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(230, 230, 230, 0.1))",
          boxShadow: `
          4px 4px 12px rgba(0, 0, 0, 0.25), 
          -4px -4px 12px rgba(255, 255, 255, 0.25)
        `,
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          "&:hover": {
            transform: "scale(1.03)",
            background:
              "linear-gradient(135deg, #3C65FF 0%, #5841D4 50%, #2617B1 100%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          },
          "&:hover .card-content": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "&:hover .card-description": {
            opacity: 1,
            transform: "translateY(0)",
          },
        }}
      >
        {/* Default content (image + title) */}
        <Box
          className="card-content"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.4s ease-in-out",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "83px", sm: "60px" },
              width: "100%",
              height: { xs: "83px", sm: "60px" },
            }}
          >
            <Image
              src={image}
              alt={`${title} service icon - South Yorkshire digital marketing package by Qashnova`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          </Box>
          <Typography
            sx={{
              fontSize: "36px",
              lineHeight: "calc(36px + 4px)",
              fontWeight: 500,
              color: "#3C65FF",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* On Hover: Description */}
        <Typography
          className="card-description"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) !important",
            opacity: 0,
            transition: "all 0.4s ease-in-out",
            color: "#fff",
            fontSize: { xs: "24px", sm: "20px", md: "20px" },
            fontWeight: 500,
            maxWidth: "85%",
            width: "100%",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
