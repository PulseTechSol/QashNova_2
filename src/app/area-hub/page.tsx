import React from "react";
import AreaHero from "./_sections/AreaHero";
import OurHubareasCards from "./_sections/OurHubareasCards";
import { Box } from "@mui/material";

function page() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <AreaHero />
      <OurHubareasCards />

      <Box
        sx={{
          maxWidth: { xs: "300px", md: "35vw", lg: "50%", xxl: "30%" },
          width: "100%",
          position: "absolute",
          left: "0px",
          top: { xs: "-2%", lg: "10%" },
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
          top: { xs: "-2%", lg: "10%" },
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
    </Box>
  );
}

export default page;
