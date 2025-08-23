import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import Navbar from "@/app/sy-landing-page/_components/Navbar";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function AreaHero() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Navbar />
      <Box
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
          Professional Website Design for Rotherham, South Yorkshire & Sheffield
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
          Crafting bespoke websites in Rotherham, South Yorkshire, and
          Sheffield, we blend stunning aesthetics with powerful functionality.
          Our designs are tailored to elevate your brand.
        </Typography>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
