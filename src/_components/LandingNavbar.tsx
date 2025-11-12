"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailInputBox from "../app/sy-landing-page/_components/EmailInputBox";

export default function LandingNavbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Box
      sx={{
        top: "0",
        left: "0",
        right: "0",
        zIndex: 10,
        position: "relative",
        bgcolor: "transparent",
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="600"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "row-reverse", md: "row" },
          justifyContent: "space-between",
          gap: { md: "10px", lg: "18px" },
          padding: {
            xs: "20px",
            sm: "20px 40px",
            md: "20px 80px",
            lg: "20px 150px",
          },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: "43px",
            height: "44px",
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            style={{
              height: "100% !important",
              width: "100% !important",
              cursor: "pointer",
            }}
            src={svgs.mobileLogo}
            alt="Qashnova digital agency logo - mobile navigation"
          />
        </Box>
        {/* logo for md */}
        <Box
          sx={{
            maxWidth: "287px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            width={287}
            style={{
              height: "100% !important",
              width: "100% !important",
              cursor: "pointer",
            }}
            src={svgs.logo}
            alt="Qashnova digital agency logo - website design, branding and SEO services"
          />
        </Box>

        <EmailInputBox buttonLabel="Free Audit" />
      </Box>
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
