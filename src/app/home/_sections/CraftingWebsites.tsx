import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
// import Image from "next/image";

export default function CraftingWebsites() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(20deg, #5841D466, #ffffffff,#ffffffff)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "1440px",
            width: "100%",
            padding: sectionPadding,
            margin: "auto",
            gap: { xs: "0" },
          }}
        >
          <Typography
            sx={{
              maxWidth: "1440px",
              width: "100%",
              textAlign: { xs: "center" },
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textTransform: "uppercase",
              mb: { xs: "40px", lg: "80px" },
              fontSize: localFontSize.h1,
              fontWeight: 600,
            }}
          >
            Crafting Websites for Your Success
          </Typography>
          <Box
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
                maxWidth: "280px",
              }}
            />
          </Box>
          {/* <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "relative",
              width: "100%",
              height: "100px",
              // overflow: "hidden",
            }}
          >
            <svg
              width="391px"
              height="100%"
              viewBox="0 0 512 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: -200,
                left: 600,
              }}
            >
              <defs>
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3C65FF" />
                  <stop offset="100%" stopColor="#2617B1" />
                </linearGradient>
              </defs>
              <path
                d="M10 90 Q 256 0 502 90"
                stroke="url(#blueGradient)"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </Box> */}

          <Box
            sx={{
              width: "391px",
              height: "41px",
              display: "block",
              "@media (min-width:0px) and (max-width:1300px)": {
                display: "none",
              },
              position: "absolute",
              top: { lg: 610, xl: 970 },
              left: 750,
            }}
          >
            <Image
              src={svgs.line}
              alt="line"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
