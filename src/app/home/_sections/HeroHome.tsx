"use client";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroHome() {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: { xs: "calc(100vh - 97px)", md: "calc(100vh - 101px)" },
          overflow: "hidden",
          px: sectionPaddingX,
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
            width: "100%",
            py: sectionPaddingY,
            margin: "auto",
            gap: { xs: "0" },
            zIndex: 140,
          }}
        >
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textTransform: "uppercase",
              textAlign: { xs: "start" },
              mt: { xs: "60px", lg: "80px" },
              fontSize: localFontSize.h1,
              fontWeight: 600,
            }}
          >
            Ignite Your
          </Typography>

          <Box
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 140,
              textAlign: { xs: "start" },
              display: { xs: "flex" },
              justifyContent: { xs: "space-between" },
              alignItems: "center",
              flexWrap: { xs: "wrap", lg: "nowrap" },
              mb: { xs: "30%", md: "0", lg: "100px" },
              gap: 4,
            }}
          >
            <Box
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{
                position: "relative",
                zIndex: 140,
                maxWidth: { xl: "1000px" },
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
                  fontSize: localFontSize.h1,
                  fontWeight: 600,
                }}
              >
                Digital
              </Typography>
              <Typography
                sx={{
                  fontSize: localFontSize.h1,
                  fontWeight: 600,
                }}
              >
                Impact
              </Typography>
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{
                right: 140,
                top: 442,
                maxWidth: { xs: "457px", xl: "800px", xxl: "1000px" },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: localFontSize.p1,
                  color: "#00000080",
                  mb: { xs: "40px", xl: "60px" },
                }}
              >
                Dull campaigns? Not on our watch. We specialize in dynamic
                digital marketing that sparks engagement, accelerates growth,
                and ensures your brand captivates every scroll.
              </Typography>

              <Box sx={{}}>
                <ButtonComponent
                  onClick={() => {
                    router.push("/contact-us");
                  }}
                  sx={{
                    border: "3px solid transparent",
                    backgroundImage: `linear-gradient( #fff, #DDDDDD),
                      linear-gradient(90deg, #3C65FF, #8A38F5, #2617B1)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    padding: "1px",
                    width: { xs: "184px", md: "194px", xl: "260px" },
                    textAlign: { xs: "center", sm: "start" },
                    color: "#3C65FF",
                  }}
                  label="Let’s Chat"
                  imgSrc={svgs.siarrowright}
                />
              </Box>
            </Box>
          </Box>
          {/* top */}
          <Box
            sx={{
              width: { xs: "89px", lg: "121px" },
              height: { xs: "89px", lg: "121px" },
              display: { xs: "block", md: "none", lg: "block" },
              position: "absolute",
              top: { xs: 16, lg: 73 },
              left: { xs: 36, lg: 13 },
              zIndex: 3,
            }}
          >
            <Image
              src={svgs.startDark1}
              alt="star"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          {/* left */}
          <Box
            sx={{
              // bgcolor: "#ccc",
              width: { xs: "89px", lg: "121px" },
              height: { xs: "89px", lg: "121px" },
              display: { xs: "block", md: "none", lg: "block" },
              position: "absolute",
              top: { xs: "85%", lg: 523 },
              left: { xs: 3, lg: -200 },
              zIndex: 3,
            }}
          >
            <Image
              src={svgs.startDark1}
              alt="star"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          {/*center  */}
          <Box
            sx={{
              width: { xs: "89px", lg: "121px" },
              height: { xs: "89px", lg: "121px" },
              display: { xs: "block", md: "none", lg: "block" },
              position: "absolute",
              top: { xs: "75%", lg: 700, xl: 823, xxl: 909 },
              right: { xs: -20, lg: 343, xxl: "42%" },
              zIndex: 3,
            }}
          >
            <Image
              src={svgs.startDark1}
              alt="star"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          {/*short  */}
          <Box
            sx={{
              width: { xs: "58px", lg: "84px" },
              height: { xs: "58px", lg: "84px" },
              display: { xs: "block", md: "none", lg: "block" },
              position: "absolute",
              top: { xs: 294, lg: 590, xl: 690, xxl: 780 },
              right: { xs: 53, lg: 160, xxl: "28%" },
              zIndex: 3,
            }}
          >
            <Image
              src={svgs.stars2}
              alt="star"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: 5,
              left: -600,
              overflow: "hidden",
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
    </Box>
  );
}
