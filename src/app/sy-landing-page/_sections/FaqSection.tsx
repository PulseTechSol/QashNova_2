"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";

// import Accordion from "@/_components/Accordion";
import Link from "next/link";
import pngs from "@/_assets/pngs";
import Image from "next/image";
import Accordion from "../_components/Accordion";

export default function FaqSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #DDDDDD, #fff, #DDDDDD)",
        bgcolor: "#fff",
        overflow: "hidden",
        position: "relative",
        zIndex: 1111,
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="800"
        sx={{
          position: "relative",
          zIndex: 1111,
          maxWidth: "1440px",
          width: "100%",
          p: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <Typography
          sx={{
            zIndex: 111,
            fontSize: localFontSize.h3,
            lineHeight: "80px",
            fontWeight: 600,
            textAlign: "center",
            color: "#3C65FF",
          }}
        >
          FAQ
        </Typography>
        <Accordion />

        <Box
          sx={{
            zIndex: 111,
            display: { xs: "flex" },
            flexWrap: "wrap",
            gap: { xs: "20px", md: "40px" },
            justifyContent: "center",
            alignItems: "center",
            bgcolor: { xs: "transparent" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: 400,
              color: "#000",
              textAlign: { xs: "center", md: "start" },
              "& a": {
                transition: "all 0.4s ease-in-out",
                color: "#404042ff",
                "&:hover": {
                  color: "#55555bff",
                },
              },
            }}
          >
            <Link
              href="https://www.qashnova.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                outline: "none",
                borderBottom: "1px solid #000",
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              Privacy policy
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: 400,
              color: "#000",
              textAlign: { xs: "center", md: "start" },
              "& a": {
                transition: "all 0.4s ease-in-out",
                color: "#404042ff",
                "&:hover": {
                  color: "#55555bff",
                },
              },
            }}
          >
            <Link
              href="https://www.qashnova.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                outline: "none",
                borderBottom: "1px solid #000",
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              Full site
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "633px" },
          height: { xs: "633px" },
          display: { xs: "block" },
          position: "absolute",
          left: -13,
          bottom: 1,
          zIndex: 1,
        }}
      >
        <Image
          src={pngs.bgcolorBlue}
          alt="Decorative blue gradient background pattern - South Yorkshire FAQ section bottom left"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "block" },
          position: "absolute",
          transform: "rotate(180deg)",
          right: 0,
          zIndex: 1,
          top: 1,
        }}
      >
        <Image
          src={pngs.bgcolorBlue}
          alt="Decorative blue gradient background pattern - South Yorkshire FAQ section top right"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
