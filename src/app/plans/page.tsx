import { Box } from "@mui/material";
import React from "react";
import PlanScreen from "./_sections/PlanScreen";
import pngs from "@/_assets/pngs";
import Image from "next/image";
import HeroSection from "@/_components/HeroSection";
import { sectionPaddingX } from "../_utils/themes";

export default function page() {
  return (
    <>
      <HeroSection
        line1="Custom"
        line1Mobile="Solutions"
        line2Desktop="Plans for"
        line3Desktop="Proven Boom"
        line2Mobile="Built for"
        line3Mobile="Your brand"
        isbool={true}
      />
      <Box
        sx={{
          position: "relative",
          background: "#000",
          px: sectionPaddingX,
        }}
      >
        <Box
          sx={{
            width: { xs: "355px", md: "633px" },
            height: { xs: "355px", md: "633px" },
            display: { xs: "block", lg: "block" },
            position: "absolute",
            left: -13,
          }}
        >
          <Image
            src={pngs.howHeplLG}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "355px", md: "633px" },
            height: { xs: "355px", md: "633px" },
            display: { xs: "block", lg: "block" },
            position: "absolute",
            left: -13,
            bottom: { xs: -50, md: -300 },
            transform: "rotate(270deg)",
          }}
        >
          <Image
            src={pngs.howHeplLG}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "300px", md: "790px" },
            height: { xs: "300px", md: "790px" },
            display: { xs: "none", sm: "block" },
            position: "absolute",
            // top: 89,
            right: 0,
          }}
        >
          <Image
            src={pngs.howHeplLGcolor}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <PlanScreen />
      </Box>
    </>
  );
}
