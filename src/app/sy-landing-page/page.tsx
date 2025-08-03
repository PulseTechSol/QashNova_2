import Hero from "./_sections/Hero";
import WhatIncluded from "./_sections/WhatIncluded";
import SabirSection from "./_sections/SabirSection";
import FaqSection from "./_sections/FaqSection";
import ServiceSection from "./_sections/ServiceSection";
import { Box } from "@mui/material";
// import Image from "next/image";
// import pngs from "@/_assets/pngs";

export default function Home() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Hero />
      <WhatIncluded />
      <SabirSection />
      <ServiceSection />
      <FaqSection />
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "0px",
          top: { xs: "-2%", lg: "-10%" },
          zIndex: 1,
          transform: {
            xs: "translate(-20%, -10%)",
            lg: "translate(-40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.2)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          right: "0px",
          top: { xs: "-2%", lg: "-10%" },
          zIndex: 1,
          transform: {
            xs: "translate(20%, -10%)",
            lg: "translate(40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.2)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "40%", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "50%",
          top: { xs: "-8%", lg: "-15%" },
          zIndex: 1,
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(38, 23, 177, 0.1)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
