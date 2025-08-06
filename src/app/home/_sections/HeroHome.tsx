"use client";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";

export default function HeroHome() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        minHeight: { md: "calc(100vh - 101px)" },
        overflow: "hidden",
        padding: {
          xs: "100px 20px 60px 20px",
          sm: sectionPadding.sm,
          md: sectionPadding.md,
          lg: sectionPadding.lg,
        },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          // 🔕 Temporarily disabled: this is the code to implement the gradient in the text
          // background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
          // WebkitBackgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          width: "100%",
          position: "relative",
          zIndex: 140,
          "& > h1": {
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#000",
            fontSize: localFontSize.h1,
            lineHeight: {
              xs: "70px",
              sm: "76px",
              md: "115px",
              lg: "130px",
              xl: "160px",
              xxl: "200px",
            },
            textAlign: "left",
          },
        }}
      >
        <Typography variant="h1">Design.</Typography>
        <Typography
          variant="h1"
          sx={{
            paddingLeft: {
              xs: "60px",
              sm: "80px",
              md: "150px",
              lg: "200px",
              xl: "300px",
              xxl: "320px",
            },
          }}
        >
          Market.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            paddingLeft: {
              xs: "120px",
              sm: "160px",
              md: "300px",
              lg: "400px",
              xl: "600px",
              xxl: "640px",
            },
          }}
        >
          Grow.
        </Typography>
      </Box>
    </Box>
  );
}
