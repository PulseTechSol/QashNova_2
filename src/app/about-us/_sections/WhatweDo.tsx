"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhatweDo() {
  return (
    <Box
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
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
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "none", lg: "block" },
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

      <Box
        // ref={containerRef}
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "80px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "300px", sm: "477px" },
            width: "100%",
            textTransform: "capitalize",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h3,
              fontWeight: 600,
              color: "#3C65FF",
              textAlign: { xs: "start" },
            }}
          >
            what
          </Typography>
          <Typography
            sx={{
              color: "#3C65FF",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              // ml:{xs:"10px",}
              textAlign: { xs: "center" },
            }}
          >
            we do
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "start" },
            flexDirection: { xs: "column" },
            gap: { xs: "40px", lg: "80px" },
          }}
        >
          <Typography
            sx={{
              maxWidth: "557px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", md: "start" },
              display: { xs: "none", md: "block" },
            }}
          >
            We specialize in creating beautiful, functional, and responsive
            websites tailored to your unique needs. At Qashnva, we combine
            creativity with cutting-edge technology to deliver designs that
            captivate and connect with your audience.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", md: "start" },
              display: { xs: "block", md: "none" },
            }}
          >
            We specialize in creating beautiful, functional, and responsive
            websites tailored to your unique needs.
          </Typography>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "553px" },
              width: "100%",
              height: { xs: "auto", lg: "430px" },
            }}
          >
            <Image
              src={pngs.whatweDo}
              alt="whatweDo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
