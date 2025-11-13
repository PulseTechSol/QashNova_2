"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import { maxWidth } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GenericHeadingBox from "@/_components/GenericHeadingBox";

gsap.registerPlugin(ScrollTrigger);

export default function Ourmission({
  mission,
}: {
  mission: {
    heading1: string;
    heading2: string;
    descriptionMobile: string;
    descriptionDesktop: string;
  };
}) {
  return (
    <Box
      component="section" // semantics only
      aria-label="our mission"
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
      }}
    >
      {/* decorative bg left */}
      <Box
        aria-hidden
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
          alt=""
          aria-hidden="true"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      {/* decorative bg right */}
      <Box
        aria-hidden
        sx={{
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "none", lg: "block" },
          position: "absolute",
          right: 0,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt=""
          aria-hidden="true"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
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
          <GenericHeadingBox
            isbool={true}
            heading1={mission.heading1}
            heading2={mission.heading2}
          />

          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#FFFFFF80",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            paragraph // real <p>
            sx={{
              display: { xs: "none", md: "block" },
              maxWidth: { xs: "490px", xl: "600px", xxl: "800px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
              m: 0,
            }}
          >
            {mission.descriptionDesktop}
          </Typography>
          <Typography
            paragraph
            sx={{
              maxWidth: "490px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
              display: { xs: "block", md: "none" },
              m: 0,
            }}
          >
            {mission.descriptionMobile}
          </Typography>
        </Box>

        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
            width: "100%",
          }}
        >
          <Image
            src={pngs.ourMission}
            alt="Our mission illustration"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
