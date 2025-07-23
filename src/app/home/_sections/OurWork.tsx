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
import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OurWork() {
  const router = useRouter();
  useEffect(() => {
    const cards = document.querySelectorAll(".hover-card");

    cards.forEach((card) => {
      const overlay = card.querySelector(".curtain") as HTMLElement;

      card.addEventListener("mouseenter", () => {
        overlay.style.transform = "translateY(0%)";
      });

      card.addEventListener("mouseleave", () => {
        overlay.style.transform = "translateY(100%)";
      });
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #070707ff 30%)",
        overflow: "hidden",
        px: sectionPaddingX,
      }}
    >
      {/* BACKGROUND */}
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
          width: "790px",
          height: "790px",
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

      {/* SECTION */}
      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          py: sectionPaddingY,
          // padding: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: { xs: "40px", md: "80px", xl: "100px" },
        }}
      >
        {/* HEADING */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xl: "1800px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: "40px",
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "300px", sm: "477px", xl: "550px", xxl: "650px" },
              width: "100%",

              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "110px", xl: "150px" },
              }}
            >
              our
            </Typography>
            <Typography
              sx={{
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", sm: "center" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              work
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#FFFFFF80",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "490px", xl: "700px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            See the passion and precision in every project. Our featured work
            highlights the collaborative journey with our clients, demonstrating
            how we transform visions into impactful digital experiences and
            stunning creative solutions.
          </Typography>
        </Box>

        {/*  */}
        <Box
          sx={{
            width: "100%",
            display: "flex",

            flexDirection: "column",
            gap: { xs: "20px", xl: "60px" },
          }}
        >
          <WorkShowcase
            title="Sabir’s Grill"
            overlayText="Transformed Sabir's Grill's digital presence with web design, development, social media, and SEO."
            year="2025"
            isboolean={true}
            image={pngs.workimage1}
            sx={{
              height: {
                xs: "300px",
                sm: "450px",
                md: "620px",
                lg: "700px",
                xl: "1000px",
                xxl: "1200px",
              },
            }}
          />
          <Box
            width="100%"
            sx={{
              display: "flex",
              gap: { xs: "20px", xl: "40px" },
              justifyContent: "space-between",

              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <WorkShowcase
              title="sofa & rattan"
              overlayText="We delivered integrated web design, development, social media, and SEO to elevate their online presence."
              year="2025"
              image={pngs.workimage2}
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: "555px",
                  xl: "1000px",
                  xxl: "1200px",
                },
              }}
            />
            <WorkShowcase
              title="a class travel"
              overlayText="Elevated their digital reach and client engagement through expert web design, development, social media, and SEO."
              year="2025"
              image={pngs.workimage3}
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: "555px",
                  xl: "1000px",
                  xxl: "1200px",
                },
              }}
            />
          </Box>
          <WorkShowcase
            title="Isfahan & Kashan"
            overlayText="We enhanced their digital presence with expert web design, development, social media, and SEO."
            year="2025"
            image={pngs.workimag4}
            sx={{
              height: {
                xs: "300px",
                sm: "450px",
                md: "600px",
                lg: "700px",
                xl: "1000px",
                xxl: "1200px",
              },
            }}
          />
          <ButtonComponent
            onClick={() => {
              router.push("/websites");
            }}
            label="view all projects"
            imgSrc={svgs.whiteArrow}
            sx={{
              background: "#3C65FF",
              color: "#fff",
              borderRadius: "50px",
              border: "2px solid #3C65FF",
              maxWidth: { xs: "280px", xl: "360px" },
              margin: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

interface WorkShowcaseProps {
  title?: string;
  year?: string;
  image?: StaticImageData;
  sx?: SxProps<Theme>;
  isboolean?: boolean;
  overlayText?: string;
}

export function WorkShowcase({
  title,
  year,
  image,
  sx,
  isboolean,
  overlayText,
}: WorkShowcaseProps) {
  return (
    <Box className="hover-card" sx={{ width: "100%" }}>
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          borderRadius:
            image === pngs.workimage1 ? { xs: "0", md: "80px 80px 0 0" } : "0",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "20px", lg: "20px 50px", xxl: "40px 80px" },
            gap: "20px",
            textTransform: "capitalize",
          }}
        >
          <Typography
            sx={{
              maxWidth: { xs: "316px", md: "400px", xl: "600px" },
              width: "100%",
              fontSize: localFontSize.h5,
              fontWeight: 400,
              color: "#fff",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: { xs: "87px", xl: "120px" },
              width: "100%",
              fontSize: localFontSize.h5,
              fontWeight: 400,
              color: "#fff",
            }}
          >
            {year}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "300px",
              sm: "450px",
              md: "350px",
              lg: "458px",
              xl: "550px",
            },
            ...(image === pngs.workimag4
              ? {
                  borderBottomLeftRadius: { xs: "0", md: "80px" },
                  borderBottomRightRadius: { xs: "0", md: "80px" },
                  overflow: "hidden",
                }
              : {
                  borderRadius: "0",
                  overflow: "hidden",
                }),
            ...sx,
            backgroundColor: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={image as StaticImageData}
            alt="workimage1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: isboolean ? "cover" : "contain",
            }}
          />
          {/* Curtain */}
          <Box
            className="curtain"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.6s ease",
              transform: "translateY(100%)",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: localFontSize.h5,
                fontWeight: 500,
                textAlign: "left",
                padding: "20px",
                width: { lg: "90%", xl: "80%" },
              }}
            >
              {overlayText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
