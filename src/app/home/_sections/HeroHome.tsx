"use client";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box } from "@mui/material";
import AnimatedText from "@/_components/AnimatedText";

export default function HeroHome({
  firstWord,
  secondWord,
  thirdWord,
}: {
  firstWord: string;
  secondWord: string;
  thirdWord: string;
}) {
  // Combine all words for SEO-friendly H1 (5-70 characters recommended)
  const fullHeading =
    `${firstWord || ""} ${secondWord || ""} ${thirdWord || ""}`.trim() ||
    "Qashnova Premier Digital Agency Website Design Branding SEO Services";

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
        component="h1"
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 140,
          margin: 0,
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
        }}
        aria-label={fullHeading}
      >
        {/* Visual animated text - all text inside H1 for SEO */}
        <AnimatedText text={firstWord} />
        <Box
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
          <AnimatedText text={secondWord} />
        </Box>

        <Box
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
          <AnimatedText text={thirdWord} />
        </Box>
      </Box>
    </Box>
  );
}
