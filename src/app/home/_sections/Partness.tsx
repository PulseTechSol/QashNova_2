"use client";
import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";

export default function LogoMarquee() {
  const logos = [
    "Your Online Companion",
    "Drive Digital Results",
    "Power Your Brand",
    // repetition1
    "Your Online Companion",
    "Drive Digital Results",
    "Power Your Brand",
    // repetition2
    "Your Online Companion",
    "Drive Digital Results",
    "Power Your Brand",
    // repetition3
    "Your Online Companion",
    "Drive Digital Results",
    "Power Your Brand",
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #DDDDDD, #ffffff)",
        p: {
          xs: "60px 0px",
          sm: "60px 0px",
          md: "80px 0px",
          lg: "100px 0px",
        },
      }}
    >
      <Marquee speed={100} gradient={false}>
        {logos.map((item, index) => (
          <Box
            sx={{
              paddingX: { xs: "25px", md: "35px", lg: " 50px", xxl: "150px" },
            }}
            key={index}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.2)",
                fontSize: localFontSize.hMarquee,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
