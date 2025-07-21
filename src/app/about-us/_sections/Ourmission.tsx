"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import { localFontSize, maxWidth } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Ourmission() {
  // const containerRef = useRef<HTMLDivElement>(null);

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
          maxWidth: maxWidth,
          width: "100%",

          margin: "auto",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "space-between",
          // alignItems: "center",
          // flexWrap: { xs: "wrap", lg: "nowrap" },
          // gap: { xs: "40px", md: "0px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: {
              xs: "60px 20px 0",
              sm: "60px 60px 0",
              md: "80px 80px 0 ",
              lg: "100px 150px 0",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px" },
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
              Our
            </Typography>
            <Typography
              sx={{
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center" },
              }}
            >
              mission
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#FFFFFF80",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            sx={{
              display: { xs: "none", md: "block" },

              maxWidth: "490px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            We&apos;re on a mission to be your trusted guide in the digital
            world. Our commitment lies in crafting bespoke solutions that
            elevate your brand, expand your reach, and consistently drive your
            online objectives forward.
          </Typography>
          <Typography
            sx={{
              maxWidth: "490px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
              display: { xs: "block", md: "none" },
            }}
          >
            We&apos;re on a mission to be your trusted guide in the digital
            world. Our commitment lies in crafting bespoke solutions that
            elevate your brand.
          </Typography>
        </Box>
        <Box
          sx={{
            // bgcolor: "red",
            maxWidth: maxWidth,
            width: "100%",
            // height: { xs: "auto", lg: "800px" },
          }}
        >
          <Image
            src={pngs.ourMission}
            alt="ourMission"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
