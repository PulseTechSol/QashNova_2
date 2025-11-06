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

export default function WhatweDo({
  whatWeDo,
}: {
  whatWeDo: {
    heading1: string;
    heading2: string;
    descriptionMobile: string;
    descriptionDesktop: string;
  };
}) {
  return (
    <Box
      component="section" // semantics only
      aria-label="what we do"
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
        px: sectionPaddingX, // fix: was `paddingX`
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
          alt="howHeplLG" // decorative
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
          alt="howHeplLGcolor" // decorative
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
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
        <GenericHeadingBox
          isbool={true}
          heading1={whatWeDo.heading1}
          heading2={whatWeDo.heading2}
        />

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
          {/* Desktop paragraph */}
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            paragraph // real <p>, improves ratio
            sx={{
              maxWidth: { xs: "557px", xl: "1000px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", md: "start" },
              display: { xs: "none", md: "block" },
              m: 0,
            }}
          >
            {whatWeDo.descriptionDesktop}
          </Typography>

          {/* Mobile paragraph (shorter content kept) */}
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            paragraph
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", md: "start" },
              display: { xs: "block", md: "none" },
              m: 0,
            }}
          >
            {whatWeDo.descriptionMobile}
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
              alt="What we do — websites and digital design"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
