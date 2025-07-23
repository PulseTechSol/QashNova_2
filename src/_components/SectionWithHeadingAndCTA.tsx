import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface SectionWithHeadingAndCTAProps {
  heading?: string;
  lastword?: string;
}

export default function SectionWithHeadingAndCTA({
  heading,
  lastword,
}: SectionWithHeadingAndCTAProps) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(20deg, #5841D466, #ffffffff,#ffffffff)",
          overflow: "hidden",
          padding: sectionPadding,
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
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textTransform: "uppercase",
              mb: { xs: "40px", lg: "80px" },
              fontSize: { ...localFontSize.h2, xxl: "180px" },
              fontWeight: 600,
            }}
          >
            {heading}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                color: "red",
                backgroundColor: "red",
                background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "uppercase",
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
              label="Learn How"
              imgSrc={svgs.whiteArrow}
              sx={{
                background: { xs: "#3C65FF", md: "#3C65FF" },
                color: { xs: "#fff" },
                borderRadius: "50px",
                border: "2px solid #3C65FF",
                maxWidth: { sm: "280px", md: "400px" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
