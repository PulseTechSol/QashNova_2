import HeroHome from "./_sections/Hero";
import WhatIncluded from "./_sections/WhatIncluded";
import SabirSection from "./_sections/SabirSection";
import FaqSection from "./_sections/FaqSection";
import ServiceSection from "./_sections/ServiceSection";
import { Box } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";

export default function Home() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HeroHome />
      <WhatIncluded />
      <SabirSection />
      <ServiceSection />
      <FaqSection />
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%" },
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
        <Image
          src={pngs.bgimgecircle}
          alt="bg-center"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%" },
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
        <Image
          src={pngs.bgimgecircle}
          alt="bg-center"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "50%",
          width: "100%",
          position: "absolute",
          left: "50%",
          top: "-15%",
          zIndex: 1,
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src={pngs.bgimgecircle}
          alt="bg-center"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
