"use client";

import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
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
          padding: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "60px", lg: "60px" },
        }}
      >
        <GenericHeadingBox
          heading1={heading1}
          heading2={heading2}
          isbool={true}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "start" },
            flexDirection: {
              xs: "column-reverse",
              md: !isbool ? "row" : "row-reverse",
            },
            gap: { xs: "40px", lg: "40px" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "555px" },
              height: { xs: "100%", md: "400px", lg: "500px", xl: "600px" },
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Image
              src={image as StaticImageData}
              alt="Websites"
              style={{
                textAlign: "start",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: "557px",
              height: { xs: "100%", lg: "500px", xl: "600px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.p1,
                fontWeight: 400,
                color: "#FFFFFF80",
                display: { xs: "none", md: "block" },
              }}
            >
              {destopPara}
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                fontWeight: 400,
                color: "#FFFFFF80",
                textAlign: { xs: "center", md: "start" },
                display: { xs: "block", md: "none" },
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
