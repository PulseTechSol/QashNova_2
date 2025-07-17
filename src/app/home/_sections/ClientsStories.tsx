"use client";

import { useEffect, useRef, useState } from "react";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import gsap from "gsap";

const cardData = [
  {
    image: pngs.clients1,
    name: "Sarah Johnson",
    description:
      "From the initial consultation to the ongoing social media management, Qashnova has been an absolute pleasure to work with. Their creative branding insights helped us define our  voice",
    bgColor: "#3C65FF",
  },
  {
    image: pngs.clients2,
    name: "Sarah Chen",
    description:
      "Partnering with Qashnova completely transformed our online presence. Their strategic approach to both web development and digital marketing delivered a stunning, high-performing website.",
    bgColor: "#5841D4",
  },
  {
    image: pngs.clients3,
    name: "David Miller",
    description:
      "Qashnova's expertise in SEO & SEM Optimization is truly unparalleled. Before them, we struggled to rank for key terms, but their diligent work and data-driven campaigns have put us front and center in search results.",
    bgColor: "#2617B1",
  },
];

export default function ClientsStories() {
  const [hoverNext, setHoverNext] = useState(false);
  const [hoverPrevoius, setHoverPrevoius] = useState(false);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    const items = itemsRef.current;
    const color = gsap.utils.interpolate(["#3C65FF", "#243342"]);
    const map = gsap.utils.mapRange(0, items.length, 0, 1);
    const offset = 15; // ✅ Reduced from 30 to 15

    gsap.set(items, {
      backgroundColor: (index: number) => color(map(index)),
      x: (index: number) => offset * index,
      y: (index: number) => -offset * index,
      zIndex: (index: number) => items.length - index,
    });

    updatePositions(currentIndex.current);
  }, []);

  const updatePositions = (startIndex: number) => {
    const items = itemsRef.current;
    const total = items.length;
    for (let i = 0; i < total; i++) {
      const itemIndex = (startIndex + i) % total;
      const item = items[itemIndex];
      gsap.to(item, {
        x: 15 * i, // ✅ was 30
        y: -15 * i, // ✅ was -30
        zIndex: total - i,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleNext = () => {
    currentIndex.current = (currentIndex.current + 1) % cardData.length;
    updatePositions(currentIndex.current);
  };

  const handlePrev = () => {
    currentIndex.current =
      (currentIndex.current - 1 + cardData.length) % cardData.length;
    updatePositions(currentIndex.current);
  };

  return (
    <Box sx={{ backgroundColor: "#000000" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Heading */}
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
            }}
          >
            clients’
          </Typography>
          <Typography
            sx={{
              width: "100%",
              color: "#3C65FF",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              textAlign: { xs: "center" },
            }}
          >
            stories
          </Typography>
        </Box>
        {/* Right Cards */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "400px", sm: "450px", md: "560px" },
            height: { xs: "550px", sm: "570px", md: "500px" },
            margin: "auto",
          }}
        >
          {cardData.map((card, index) => (
            <Box
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) itemsRef.current[index] = el;
              }}
              sx={{
                position: "absolute",
                top: { xs: "", md: "0" },
                bottom: { xs: "0", md: "unset" },
                borderRadius: { xs: "20px", md: "40px" },
                left: 0,
              }}
            >
              <ClientCard {...card} />
            </Box>
          ))}

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 3,
              position: "absolute",
              bottom: "20px",
              width: "100%",
              zIndex: "20",
            }}
          >
            <Box
              onMouseOver={() => setHoverNext(true)}
              onMouseOut={() => setHoverNext(false)}
              onClick={handleNext}
              sx={{
                width: "50px",
                height: "auto",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "rotate(180deg)",
                  display: hoverNext ? "inline" : "none",
                }}
                src={svgs.sliderArrow}
                alt="sliderArrow"
              />
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  display: hoverNext ? "none" : "inline",
                }}
                src={svgs.arrowSliderDisabled}
                alt="sliderArrow"
              />
            </Box>
            <Box
              onMouseOver={() => setHoverPrevoius(true)}
              onMouseOut={() => setHoverPrevoius(false)}
              onClick={handlePrev}
              sx={{ width: "50px", height: "auto" }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  display: hoverPrevoius ? "inline" : "none",
                }}
                src={svgs.sliderArrow}
                alt="sliderArrow"
              />{" "}
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  display: hoverPrevoius ? "none" : "inline",
                  transform: "rotate(180deg)",
                }}
                src={svgs.arrowSliderDisabled}
                alt="sliderArrow"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

type ClientCardProps = {
  image: StaticImageData;
  description: string;
  name: string;
  bgColor: string;
};

export function ClientCard({
  image,
  description,
  name,
  bgColor,
}: ClientCardProps) {
  return (
    <Box
      sx={{
        height: "500px",
        maxWidth: { xs: "400px", sm: "450px", md: "560px" },
        width: "100%",
        backgroundColor: bgColor,
        borderRadius: { xs: "20px", md: "40px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <Image
        src={image}
        alt="client"
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p1,
          color: "#ffffff",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
