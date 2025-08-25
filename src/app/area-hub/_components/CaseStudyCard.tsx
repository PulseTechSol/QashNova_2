"use client";

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface BulletItem {
  label: string;
  text: string;
}

interface CaseStudyCardProps {
  title: string;
  image: StaticImageData;
  bullets: BulletItem[];
  index?: number;
}

export default function CaseStudyCard({
  title,
  image,
  bullets,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <Box
      key={index}
      sx={{
        width: "100%",
        maxWidth: { xl: "1200px" },
        padding: { xs: "20px 15px ", sm: "40px", xl: "40px" },
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
        gap: { xs: "45px", md: "48px", xl: "64px" },
        bgcolor: "#fff",
        borderRadius: { xs: "28px", sm: "36px" },
        minHeight: { xs: "fit-content", sm: "750px", md: "543px" },
        position: "static",
        zIndex: "100",
        justifyContent: "space-between",
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          maxWidth: "555px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "42px", lg: "48px" },
            fontWeight: 500,
            color: "rgba(0,0,0,1)",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>
        {/* Bullets */}
        <Box
          component="ul"
          sx={{
            mt: { xs: "12px", sm: "16px", md: "20px", xl: "28px" },
            m: 0,
            p: 0,
            listStyle: "none",
            display: "grid",
            gap: { xs: "6px", md: "8px" },
          }}
        >
          {bullets.map((b, i) => (
            <Box
              key={i}
              component="li"
              sx={{ display: "flex", gap: "8px", alignItems: "baseline" }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#3C65FF",
                  mt: "6px",
                }}
              />
              <Typography
                component="span"
                sx={{
                  color: "rgba(0,0,0,0.6)",
                  fontSize: { xs: "16px", md: "18px" },
                }}
              >
                <span
                  style={{
                    color: "#3C65FF",
                    fontWeight: 600,
                    fontSize: "inherit",
                  }}
                >
                  {b.label}:
                </span>{" "}
                {b.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          maxWidth: { xs: "420px", md: "420px", xl: "445px" },
          margin: { xs: "auto", md: "unset" },
        }}
      >
        <Image
          src={image}
          alt={`case-study-${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
