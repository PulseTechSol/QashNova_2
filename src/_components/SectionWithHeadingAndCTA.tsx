"use client";
import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SectionWithHeadingAndCTAProps {
  heading?: string;
  lastword?: string;
  route?: string;
}

export default function SectionWithHeadingAndCTA({
  heading,
  lastword,
  route = "/case-study",
}: SectionWithHeadingAndCTAProps) {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          padding: sectionPadding,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: maxWidth, xxl: "80vw" },
            width: "100%",
            margin: "auto",
            gap: { xs: "0" },
          }}
        >
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              textAlign: { xs: "center" },
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 1)",
              mb: { xs: "40px", lg: "80px" },
              fontSize: { ...localFontSize.h2, xxl: "180px" },
              fontWeight: 600,
            }}
          >
            {heading}
            <span
              style={{
                position: "relative",
              }}
            >
              {lastword}
              <Box
                sx={{
                  width: {
                    xs: "124px",
                    sm: "190px",
                    md: "391px",
                    xxl: "450px",
                  },
                  height: { xs: "14px", sm: "30px", md: "41px", xxl: "60px" },
                  display: "block",
                  position: "absolute",
                  top: { xs: "20px", sm: 50, xxl: 70 },
                  left: { xs: "35%", lg: 290 },
                }}
              >
                <Image
                  src={svgs.line}
                  alt="line"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </span>
          </Typography>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              width: "100%",
              display: { xs: "flex" },
              alignItems: { xs: "center" },
              justifyContent: "center",
            }}
          >
            <ButtonComponent
              onClick={() => router.push(route)}
              label="Case Studies"
              imgSrc={svgs.whiteArrow}
              sx={{
                background: { xs: "#3C65FF", md: "#3C65FF" },
                color: { xs: "#fff" },
                borderRadius: "50px",
                maxWidth: { sm: "280px", md: "400px" },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            maxWidth: "700px",
            width: "100%",
            height: "200px",
            backgroundColor: "rgba(88, 65, 212, 0.4)",
            filter: "blur(170px)",
            zIndex: 0,
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </>
  );
}
