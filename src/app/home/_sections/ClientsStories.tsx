"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import {
  localFontSize,
  sectionPaddingY,
  sectionPaddingX,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import gsap from "gsap";

interface ClientStory {
  heading: {
    line1: string;
    line2: string;
  };
  reviews?: {
    image: string;
    name: string;
    description: string;
    bgColor: string;
  }[];
}

export default function ClientsStories({ heading, reviews = [] }: ClientStory) {
  const [hoverNext, setHoverNext] = useState(false);
  const [hoverPrevoius, setHoverPrevoius] = useState(false); // keeping your var name to avoid any ripple
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    const items = itemsRef.current;
    const color = gsap.utils.interpolate(["#3C65FF", "#243342"]);
    const map = gsap.utils.mapRange(0, items.length, 0, 1);
    const offset = 15;

    gsap.set(items, {
      backgroundColor: (index: number) => color(map(index)),
      x: (index: number) => offset * index,
      y: (index: number) => -offset * index,
      zIndex: (index: number) => items.length - index,
    });

    updatePositions(currentIndex.current);

    return () => {
      // nothing to clean here since we don't register global listeners
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updatePositions = (startIndex: number) => {
    const items = itemsRef.current;
    const total = items.length;
    for (let i = 0; i < total; i++) {
      const item = items[i];
      gsap.to(item, {
        x: 15 * i,
        y: -15 * i,
        zIndex: total - i,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const items = itemsRef.current;

  const handleNext = () => {
    if (items.length === 0) return;
    const first = items.shift();
    if (first) items.push(first);
    updatePositions(0);
  };

  const handlePrev = () => {
    if (items.length === 0) return;
    const last = items.pop();
    if (last) {
      items.unshift(last);
      gsap.set(last, {
        x: 15 * items.length,
        y: -15 * items.length,
        zIndex: 0,
      });
    }
    items.forEach((item, i) => {
      gsap.to(item, {
        x: 15 * i,
        y: -15 * i,
        zIndex: items.length - i,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  const onKey = (e: KeyboardEvent, fn: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  return (
    <Box
      component="section"
      aria-label="clients’ stories"
      sx={{
        backgroundColor: "#000 !important",
        position: "relative",
        zIndex: 2000,
        paddingX: sectionPaddingX,
      }}
    >
      <Box
        sx={{
          maxWidth: "1700px",
          width: "100%",
          margin: "auto",
          paddingY: sectionPaddingY,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Heading */}
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "300px", sm: "477px" },
            width: "100%",
            textTransform: "capitalize",
          }}
        >
          <Typography
            component="h2"
            aria-label="clients’ stories"
            sx={{
              width: "100%",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              color: "#fff",
              textAlign: { xs: "start" },
            }}
          >
            {heading?.line1}
          </Typography>
          <Typography
            component="span"
            sx={{
              width: "100%",
              display: "block",
              color: "#fff",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              textAlign: { xs: "center" },
            }}
          >
            {heading?.line2}
          </Typography>
        </Box>

        {/* Right Cards */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "322px", sm: "450px", md: "560px" },
            height: { xs: "550px", sm: "570px", md: "500px" },
            margin: "auto",
          }}
        >
          {reviews.map((card, index) => (
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) itemsRef.current[index] = el;
              }}
              sx={{
                position: "absolute",
                top: { xs: "", md: "0" }, // keeping as-is to avoid visual change
                bottom: { xs: "0", md: "unset" },
                borderRadius: { xs: "20px", md: "40px" },
                left: 0,
              }}
            >
              <ClientCard {...card} />
            </Box>
          ))}

          {/* Prev */}
          <Box
            role="button"
            tabIndex={0}
            aria-label="Previous testimonial"
            onKeyDown={(e) => onKey(e, handlePrev)}
            onMouseOver={() => setHoverNext(true)}
            onMouseOut={() => setHoverNext(false)}
            onClick={handlePrev}
            sx={{
              width: "50px",
              height: "auto",
              position: "absolute",
              bottom: "20px",
              left: "20px",
              zIndex: "20",
              cursor: "pointer",
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
              alt="icon"
              aria-hidden
            />
            <Image
              style={{
                width: "100%",
                height: "100%",
                display: hoverNext ? "none" : "inline",
              }}
              src={svgs.arrowSliderDisabled}
              alt="icon"
              aria-hidden
            />
          </Box>

          {/* Next */}
          <Box
            role="button"
            tabIndex={0}
            aria-label="Next testimonial"
            onKeyDown={(e) => onKey(e, handleNext)}
            onMouseOver={() => setHoverPrevoius(true)}
            onMouseOut={() => setHoverPrevoius(false)}
            onClick={handleNext}
            sx={{
              width: "50px",
              height: "auto",
              position: "absolute",
              bottom: "20px",
              right: "20px",
              zIndex: "20",
              cursor: "pointer",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                display: hoverPrevoius ? "inline" : "none",
              }}
              src={svgs.sliderArrow}
              alt="icon"
              aria-hidden
            />
            <Image
              style={{
                width: "100%",
                height: "100%",
                display: hoverPrevoius ? "none" : "inline",
                transform: "rotate(180deg)",
              }}
              src={svgs.arrowSliderDisabled}
              alt="icon"
              aria-hidden
            />
          </Box>
        </Box>
      </Box>

      {/* Background Blur Effects (decorative) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          maxWidth: "40vw",
          height: "400px",
          width: "100%",
          background: "#5841D466",
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          maxWidth: "40vw",
          height: "400px",
          width: "100%",
          background: "#5841D466",
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />
    </Box>
  );
}

type ClientCardProps = {
  image: string;
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
      component="article"
      aria-label={`Testimonial from ${name}`}
      sx={{
        height: "500px",
        maxWidth: { xs: "320px", sm: "450px", md: "560px" },
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
        alt={`${name} — client`}
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
        width={80}
        height={80}
      />
      <Typography
        paragraph
        sx={{ fontSize: localFontSize.p2, color: "#FFFFFF80", m: 0 }}
      >
        {description}
      </Typography>
      <Typography sx={{ fontSize: localFontSize.p1, color: "#ffffff" }}>
        {name}
      </Typography>
    </Box>
  );
}
