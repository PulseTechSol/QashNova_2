"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
// import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Casestudies() {
  const websiteServices = [
    {
      title: "saif’s boxing & fitness",
      description:
        "Saif’s Boxing needed a bold and gritty online identity that reflects the energy of the gym and its community. We crafted a high-impact design that showcases training programs, client transformations, and class schedules with clarity.",
      image: "/bgCase1.webp",
      imgMob: "/bgMoblCase1.webp",
    },
    {
      title: "sabir’s grill",
      description:
        "We brought the essence of Sabir’s Grill to life online by blending cultural richness with a sleek, modern interface. Our focus was on creating a seamless browsing experience that highlights their diverse food offerings and rich heritage.",
      image: "/bgCase2.webp",
      imgMob: "/bgMoblCase2.webp",
    },

    {
      title: "conquest law solicitors",
      description:
        "For Conquest Law, we delivered a clean and authoritative web presence that instills trust and professionalism. The site layout is minimal yet impactful, highlighting their services and expertise with confidence.",
      image: "/bgCase3.webp",
      imgMob: "/bgMoblCase3.webp",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: { xs: "block", lg: "block" },
          position: "absolute",
          left: -43,
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
          display: { xs: "block", lg: "block" },
          position: "absolute",
          transform: "rotate(40deg)", // ✅ rotate here
          transformOrigin: "center",
          top: { xs: 300, md: 209 },
          right: { xs: -81, md: -200 },
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%", borderRadius: "80px" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "block", lg: "none" },
          position: "absolute",
          transform: "rotate(200deg)", // ✅ rotate here
          transformOrigin: "center",
          top: 669,
          left: -50,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%", borderRadius: "80px" }}
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
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: { xs: "40px", md: "80px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "477px" },
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "70px" },
              }}
            >
              Case
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", md: "end" },
              }}
            >
              studies
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#00000080",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            sx={{
              maxWidth: "490px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#00000080",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            Explore the pinnacle of creativity with our standout projects that
            blend strategy, design, and innovation. Each campaign is a testament
            to our passion for delivering results that captivate and convert.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {websiteServices.map((items, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: {
                    xs: "100%",

                    md: "220px",
                    "@media (min-width:1200px)": {
                      height: "290px",
                    },
                    "@media (min-width:1290px)": {
                      height: "220px",
                    },
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  flexDirection: "column",
                  position: { xs: "relative", md: "relative" },
                  overflow: "hidden",
                  transition: "all 0.4s ease-in-out",
                  "&:hover .bgOverlay": {
                    opacity: 1,
                  },
                  "&:hover .contentBox": {
                    color: { xs: "#fff", md: "#fff" },
                  },
                  "&:hover .descriptionText": {
                    color: { xs: "#fff", md: "#fff" },
                  },
                  "&:hover .lineBox": {
                    display: { md: "none" },
                  },
                }}
              >
                {/* Background Image + Overlay */}
                <Box
                  className="bgOverlay"
                  sx={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: {
                      xs: `url(${items.imgMob})`,
                      md: `url(${items.image})`,
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                    opacity: 0,
                    borderRadius: { md: "40px" },

                    transition: "opacity 0.4s ease-in-out",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: { md: "40px" },
                      backgroundColor: {
                        xs: "rgba(0, 0, 0, 0.6)",

                        md: "rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  className="contentBox"
                  sx={{
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    p: { xs: " 10px", md: "0 20px" },
                    gap: { xs: "20px", md: "40px" },
                    transition: "all 0.4s ease-in-out",
                  }}
                >
                  <Typography
                    sx={{
                      maxWidth: "458px",
                      width: "100%",
                      fontSize: localFontSize.h4,
                      fontWeight: 500,
                      color: "#3C65FF", // title ka color blue hi rahe
                      textAlign: { xs: "center", md: "start" },
                      textTransform: "capitalize",
                      transition: "color 0.4s ease-in-out",
                    }}
                  >
                    {items.title}
                  </Typography>
                  <Typography
                    className="descriptionText"
                    sx={{
                      maxWidth: "554px",
                      width: "100%",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#00000080",
                      textAlign: { xs: "center", md: "start" },
                      transition: "color 0.4s ease-in-out",
                    }}
                  >
                    {items.description}
                  </Typography>
                </Box>

                {/* Divider Line */}
                <Box
                  className="lineBox"
                  sx={{
                    m: { xs: "30px 0 0", sm: "40px 0 0", md: "0" },
                    width: "100%",
                    height: "3px",
                    display: { lg: "block" },
                    background:
                      "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
                    zIndex: 0,
                    position: { md: "relative" },
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </Box>
            );
          })}

          {/* button */}
        </Box>
        <Box
          sx={{
            // mt: { md: "40px" },
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
      </Box>
    </Box>
  );
}
