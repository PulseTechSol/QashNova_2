"use client";

import {
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Link, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ButtonComponent from "./ButtonComponent";
import svgs from "@/_assets/svgs";
import GenericHeadingBox from "./GenericHeadingBox";
import pngs from "@/_assets/pngs";

interface WebsiteSectionProps {
  destopPara?: string;
  mobilePara?: string;
  image?: StaticImageData | string;
  isbool?: boolean;
  heading1?: string;
  heading2?: string;
  link?: string;
}

export default function WebsiteSection({
  destopPara,
  heading1,
  heading2,
  mobilePara,
  image,
  isbool = false,
  link,
}: WebsiteSectionProps) {
  const sectionLabel = `${heading1 ?? ""} ${heading2 ?? ""}`.trim();

  return (
    <Box
      component="section" // semantics only
      aria-label={sectionLabel || "website project"}
      sx={{
        position: "relative",
        background: isbool
          ? "transparent"
          : "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
        px: sectionPaddingX,
      }}
    >
      {/* decorative bg left */}
      <Box
        aria-hidden // accessibility + no visible text
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: isbool ? "none" : "block",
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
          position: "absolute",
          right: 0,
          display: isbool ? "none" : "block",
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
          py: sectionPaddingY,
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: isbool ? { xs: "row", md: "row-reverse" } : "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: {
            xs: "40px",
            md: "60px",
            lg: "80px",
            xl: "100px",
            xxl: "120px",
          },
          textWrap: "nowrap",
        }}
      >
        {/* Heading */}
        <GenericHeadingBox
          isbool={!isbool}
          heading1={heading1}
          heading2={heading2}
        />

        {/* Media + copy */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xl: "1000px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "start" },
            flexDirection: { xs: "column-reverse", md: "column" },
            gap: { xs: "40px", lg: "40px", xl: "80px" },
            textWrap: "wrap",
          }}
        >
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "100%", lg: "555px", xl: "1000px" },
              width: "100%",
              borderRadius: {
                xs: "0 40px 40px 40px",
                sm: "0 80px 80px 80px",
              },
              height: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              src={image as StaticImageData}
              alt="Website preview"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>

          {/* Intro copy — keeping desktop/mobile variants because content differs */}
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{ width: "100%", textAlign: { xs: "end", md: "start" } }}
          >
            <Typography
              paragraph
              sx={{
                maxWidth: { xs: "557px", xl: "1000px" },
                width: "100%",
                fontSize: { xs: "18px", xl: "24px" },
                fontWeight: 400,
                color: isbool ? "#00000080" : "#FFFFFF80",
                textAlign: { xs: "end", md: "start" },
                display: { xs: "none", md: "block" },
                m: 0,
              }}
            >
              {destopPara}
            </Typography>

            <Typography
              paragraph
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: isbool ? "#00000080" : "#FFFFFF80",
                textAlign: { xs: "end", md: "start" },
                display: { xs: "block", md: "none" },
                m: 0,
              }}
            >
              {mobilePara}
            </Typography>

            <Box
              sx={{
                width: "100%",
                mt: { xs: "20px", xl: "40px" },
                display: "flex",
                alignItems: { xs: "end", md: "start" },
                justifyContent: { xs: "end", md: "start" },
              }}
            >
              <Link
                href={link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <ButtonComponent
                  label="go to website"
                  imgSrc={svgs.whiteArrow}
                  sx={{
                    background: { xs: "#3C65FF", md: "#3C65FF" },
                    color: { xs: "#fff" },
                    borderRadius: "50px",
                    maxWidth: { sm: "280px", xl: "350px" },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
