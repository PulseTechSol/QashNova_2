import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroHome() {
  return (
    <Box sx={{ background: "linear-gradient(-10deg, #DDDDDD, #ffffffff)" }}>
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
            textAlign: { xs: "center", sm: "start" },
            background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            textTransform: "uppercase",
            mt: { xs: "0", lg: "80px" },
            fontSize: localFontSize.h1,
            fontWeight: 600,
          }}
        >
          Ignite Your
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",

            textAlign: { xs: "center", sm: "start" },

            margin: "auto",
            display: { xs: "flex" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textTransform: "uppercase",
            }}
          >
            <Typography
              sx={{
                // mt: { xs: "0", lg: "80px" },
                width: "100%",
                fontSize: localFontSize.h1,
                fontWeight: 600,
              }}
            >
              Digital
            </Typography>
            <Typography
              sx={{
                // mt: { xs: "0", lg: "80px" },
                width: "100%",
                fontSize: localFontSize.h1,
                fontWeight: 600,
              }}
            >
              Impact
            </Typography>
          </Box>
          <Box
            sx={{
              // position: { xs: "static", lg: "absolute" },
              right: 140,
              top: 442,
              maxWidth: "457px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.p1,
                color: "#1B1B1B",
                mb: "40px",
                // lineHeight: 1.6,
              }}
            >
              Dull campaigns? Not on our watch. We specialize in dynamic digital
              marketing that sparks engagement, accelerates growth, and ensures
              your brand captivates every scroll.
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: { xs: "flex", sm: "block" },
                alignItems: { xs: "center", sm: "start" },
                justifyContent: "center",
                // bgcolor: "#ccc",
              }}
            >
              <ButtonComponent
                sx={{
                  border: "3px solid transparent",
                  // borderRadius: "16px",
                  backgroundImage: `linear-gradient(#fff, #fff),
                      linear-gradient(90deg, #3C65FF, #8A38F5, #2617B1)`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  padding: "1px",
                  // px: 23,
                  width: "194px",
                  textAlign: { xs: "center", sm: "start" },
                  bgcolor: "#fff",
                  // border: "3px solid #8A38F5 ",
                  color: "#3C65FF",
                }}
                label="Let’s Chat"
                imgSrc={svgs.siarrowright}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 73,
            left: 213,
          }}
        >
          <Image src={svgs.startDark1} alt="star" />
        </Box>
        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 523,
            left: -53,
          }}
        >
          <Image src={svgs.startDark1} alt="star" />
        </Box>
        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 709,
            right: 213,
          }}
        >
          <Image src={svgs.stars2} alt="star" />
        </Box>
        <Box
          sx={{
            width: "1400px",
            height: "500px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 5,
            left: -600,
            overflow: "hidden",
            // bgcolor: "red",
          }}
        >
          <Image
            src={pngs.heroHome}
            alt="star"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
