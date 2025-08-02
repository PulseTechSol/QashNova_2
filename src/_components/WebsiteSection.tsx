"use client";

import pngs from "@/_assets/pngs";
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
  return (
    <Box
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
      <Box
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
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
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
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        // ref={containerRef}
        sx={{
          // padding: sectionPadding,
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
        <GenericHeadingBox heading1={heading1} heading2={heading2} />

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
              // bgcolor: { xs: "#fff", xl: "#ffffff12" },
              maxWidth: { xs: "100%", lg: "555px", xl: "1000px" },
              width: "100%",
              borderRadius: {
                xs: "0 40px 40px 40px",
                sm: "0 80px 80px 80px",
              },
              height: "auto",
              // height: { xs: "100%", sm: "100%" },
              overflow: "hidden",
            }}
          >
            <Image
              src={image as StaticImageData}
              alt="Websites"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              width: "100%",
              textAlign: { xs: "end", md: "start" },
            }}
          >
            <Typography
              sx={{
                maxWidth: { xs: "557px", xl: "1000px" },
                width: "100%",
                fontSize: { xs: "18px", xl: "24px" },
                fontWeight: 400,
                color: isbool ? "#00000080" : "#FFFFFF80",
                textAlign: { xs: "end", md: "start" },
                display: { xs: "none", md: "block" },
              }}
            >
              {destopPara}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: isbool ? "#00000080" : "#FFFFFF80",
                textAlign: { xs: "end", md: "start" },
                display: { xs: "block", md: "none" },
              }}
            >
              {mobilePara}
            </Typography>
            <Box
              sx={{
                width: "100%",
                mt: { xs: "20px", xl: "40px" },
                display: { xs: "flex" },
                alignItems: { xs: "end", md: "start" },
                justifyContent: { xs: "end", md: "start" },
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href={link}
                target="_blank"
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
