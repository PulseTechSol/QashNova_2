"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import {
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GenericHeadingBox from "@/_components/GenericHeadingBox";
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
        paddingX: sectionPaddingX,
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
          py: sectionPaddingY,
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "80px", xl: "100px", xxl: "150px" },
        }}
      >
        <GenericHeadingBox isbool={true} heading1="what" heading2="we do" />

        <Box
          sx={{
            width: "100%",
            maxWidth: { xxl: "1500px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "start" },
            flexDirection: { xs: "column" },
            gap: { xs: "40px", lg: "80px", xl: "90px", xxl: "120px" },
          }}
        >
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "557px", xl: "1000px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
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
            data-aos="fade-left"
            data-aos-duration="500"
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
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: {
                xs: "100%",
                md: "553px",
                xl: "1200px",
                xxl: "1400px",
              },
              width: "100%",
              height: { xs: "auto", lg: "430px", xl: "100%" },
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
