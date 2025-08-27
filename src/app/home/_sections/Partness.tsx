"use client";
import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";

export default function LogoMarquee() {
  const slogans = [
    "Your Online Companion",
    "Drive Digital Results",
    "Power Your Brand",
  ];

  return (
    <Box
      component="section"
      aria-label="brand slogans"
      sx={{
        background: "linear-gradient(180deg, #DDDDDD, #ffffff)",
        p: { xs: "60px 0", sm: "60px 0", md: "80px 0", lg: "100px 0" },
      }}
    >
      <Marquee speed={100} gradient={false} autoFill aria-hidden>
        {slogans.map((item, index) => (
          <Typography
            key={index}
            component="span"
            sx={{
              color: "rgba(0, 0, 0, 0.2)",
              fontSize: localFontSize.hMarquee,
              fontWeight: 600,
              textTransform: "uppercase",
              px: { xs: "25px", md: "35px", lg: "50px", xxl: "150px" },
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </Typography>
        ))}
      </Marquee>
    </Box>
  );
}
