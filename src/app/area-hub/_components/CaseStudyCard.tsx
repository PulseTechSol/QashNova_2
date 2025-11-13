"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface BulletItem {
  label: string;
  text: string;
}

export interface CaseStudyCardProps {
  title: string;
  image: string;
  bullets: BulletItem[];
  index: number;
  totalCards: number;
}

export default function CaseStudyCard({
  title,
  image,
  bullets,
  index,
  totalCards,
}: CaseStudyCardProps) {
  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

  return (
    <Box
      //  data-aos="zoom-in"
      //         data-aos-duration="500"
      sx={{
        width: "100%",
        maxWidth: { xl: "1200px" },
        padding: { xs: "20px 15px ", sm: "40px", xl: "40px" },
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
        gap: { xs: "40px", md: "48px", xl: "64px" },
        bgcolor: "#fff",
        borderRadius: { xs: "30px", md: "80px" },
        borderTopLeftRadius: isFirst
          ? { xs: "0px !important", sm: "0px !important" }
          : { xs: "30px", md: "80px" },
        borderBottomRightRadius: isLast
          ? { xs: "0px !important", sm: "0px !important" }
          : { xs: "30px", sm: "80px" },
        minHeight: { xs: "fit-content", sm: "750px", md: "543px" },
        position: "static",
        zIndex: 100,
        justifyContent: "space-between",
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box sx={{ maxWidth: "555px" }}>
        <Typography
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "42px", lg: "48px" },
            fontWeight: 500,
            color: "rgba(0,0,0,1)",
            textAlign: "left",
            mb: { xs: "30px", sm: "40px" },
            lineHeight: { md: "60px", lg: "70px" },
          }}
        >
          {title}
        </Typography>

        <Box
          data-aos="fade-right"
          data-aos-duration="500"
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
              <Box sx={{ pb: "3px" }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#3C65FF",
                  }}
                />
              </Box>
              <Typography
                component="span"
                sx={{
                  color: "rgba(0,0,0,0.6)",
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 400,
                }}
              >
                <span
                  style={{
                    color: "#3C65FF",
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

      <Box
        data-aos="fade-left"
        data-aos-duration="500"
        sx={{
          maxWidth: { xs: "420px", md: "420px", xl: "445px" },
          margin: { xs: "auto", md: "unset" },
        }}
      >
        <Image
          src={image}
          alt={`${title} case study project showcase by Qashnova digital agency`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          width={500}
          height={500}
        />
      </Box>
    </Box>
  );
}
