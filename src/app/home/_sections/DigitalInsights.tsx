"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalInsights() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        zIndex: 10000,
        px: sectionPaddingX,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          py: sectionPaddingY,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: { xs: "40px", md: "80px", xl: "100px" },
        }}
      >
        {/* this is the heading box */}
        <Box
          sx={{
            maxWidth: { xl: "1800px" },
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px", xl: "60px" },
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "300px", sm: "477px", xl: "800px" },
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#000",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              Case
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#000",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", md: "end" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              studies
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#00000080",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "490px", xl: "800px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#00000080",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            Explore the pinnacle of creativity with our standout projects that
            blend strategy, design, and innovation. Each campaign is a testament
            to our passion for delivering results that captivate and convert.
          </Typography>
        </Box>
        {/* this is the parent of cards */}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth: "40%",
          width: "100%",
          backgroundColor: "rgba(88, 65, 212, 0.4)",
          filter: "blur(200px)",
          zIndex: 0,
          height: "30%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          maxWidth: "40%",
          width: "100%",
          backgroundColor: "rgba(88, 65, 212, 0.4)",
          filter: "blur(200px)",
          zIndex: 0,
          height: "30%",
        }}
      />
    </Box>
  );
}
