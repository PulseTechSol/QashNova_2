"use client";

import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import GenericHeadingBox from "./GenericHeadingBox";
import pngs from "@/_assets/pngs";

interface CaseStudySectionProps {
  destopPara?: string;
  mobilePara?: string;
  image?: StaticImageData | string;
  isbool?: boolean;
  heading1?: string;
  heading2?: string;
}

export default function CaseStudySection({
  destopPara,
  heading1,
  heading2,
  mobilePara,
  image,
  isbool = false,
}: CaseStudySectionProps) {
  const sectionLabel =
    `${heading1 ?? ""} ${heading2 ?? ""}`.trim() || "case study";

  return (
    <Box
      component="section"
      aria-label={sectionLabel}
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
        px: sectionPaddingX,
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
          alt="" // decorative
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
          alt="" // decorative
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" }, // fix: "1536px"
          width: "100%",
          paddingY: sectionPaddingY,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "60px", lg: "60px", xl: "80px", xxl: "80px" },
        }}
      >
        <GenericHeadingBox heading1={heading1} heading2={heading2} isbool />

        <Box
          sx={{
            width: "100%",
            maxWidth: { xxl: "2000px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "start" },
            flexDirection: {
              xs: "column-reverse",
              md: !isbool ? "row" : "row-reverse",
            },
            gap: { xs: "40px", lg: "40px", xl: "60px", xxl: "100px" },
          }}
        >
          <Box
            data-aos={!isbool ? "fade-right" : "fade-left"}
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "100%", md: "555px", xl: "800px", xxl: "1200px" },
              height: {
                xs: "100%",
                md: "400px",
                lg: "500px",
                xl: "800px",
                xxl: "900px",
              },
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Image
              src={image as StaticImageData}
              alt={`Case study — ${sectionLabel}`}
              style={{
                textAlign: "start",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "557px", xl: "800px", xxl: "800px" },
              height: { xs: "100%", lg: "500px", xl: "800px", xxl: "900px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              data-aos={isbool ? "fade-right" : "fade-left"}
              data-aos-duration="500"
              paragraph
              sx={{
                width: "100%",
                fontSize: localFontSize.p1,
                fontWeight: 400,
                color: "#FFFFFF80",
                display: { xs: "none", md: "block" },
                m: 0,
              }}
            >
              {destopPara}
            </Typography>
            <Typography
              paragraph
              sx={{
                fontSize: localFontSize.p1,
                fontWeight: 400,
                color: "#FFFFFF80",
                textAlign: { xs: "center", md: "start" },
                display: { xs: "block", md: "none" },
                m: 0,
              }}
            >
              {mobilePara}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
