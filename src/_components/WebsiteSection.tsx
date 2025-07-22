"use client";

import pngs from "@/_assets/pngs";
import { maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
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
}
export default function WebsiteSection({
  destopPara,
  heading1,
  heading2,
  mobilePara,
  image,
  isbool = false,
}: WebsiteSectionProps) {
  return (
    <Box
      sx={{
        position: "relative",
        background: isbool
          ? ""
          : "radial-gradient(circle, #08289be3 0%, #000 25%)",
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
          padding: sectionPadding,

          maxWidth: { xs: maxWidth, xxl: "80vw" },
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: isbool ? { xs: "row", md: "row-reverse" } : "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "60px", lg: "80px", xxl: "120px" },
        }}
      >
        <GenericHeadingBox heading1={heading1} heading2={heading2} />

        <Box
          sx={{
            width: "100%",
            maxWidth: { xxl: "1200px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "start" },
            flexDirection: { xs: "column-reverse", md: "column" },
            gap: { xs: "40px", lg: "40px", xxl: "80px" },
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              maxWidth: { xs: "100%", md: "555px", xxl: "1200px" },
              width: "100%",
              borderRadius: {
                xs: "0 40px 40px 40px",
                sm: "0 80px 80px 80px",
              },
              height: { xs: "100%", sm: "100%" },
              overflow: "hidden",
            }}
          >
            <Image
              src={image as StaticImageData}
              alt="Websites"
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: { xs: "end", md: "start" },
            }}
          >
            <Typography
              sx={{
                maxWidth: { xs: "557px", xxl: "1000px" },
                width: "100%",
                fontSize: { xs: "18px", xxl: "26px" },
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
                mt: { xs: "20px", xxl: "40px" },
                display: { xs: "flex" },
                alignItems: { xs: "end", md: "start" },
                justifyContent: { xs: "end", md: "start" },
              }}
            >
              <ButtonComponent
                label="go to website"
                imgSrc={svgs.whiteArrow}
                sx={{
                  background: { xs: "#3C65FF", md: "#3C65FF" },
                  color: { xs: "#fff" },
                  borderRadius: "50px",
                  border: "2px solid #3C65FF",
                  maxWidth: { sm: "280px", xxl: "350px" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
