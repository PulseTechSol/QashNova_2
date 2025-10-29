"use client";
import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { WorkShowcCase } from "../_components/WorkShowcCase";

interface OurWorkProps {
  heading?: {
    line1: string;
    line2: string;
  };
  description?: string;
  projects?: {
    title: string;
    overlayText: string;
    year: string;
    image: string;
  }[];
}

export default function OurWork({
  heading,
  description,
  projects = [],
}: OurWorkProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>(".hover-card");
    const cleaners: Array<() => void> = [];

    cards.forEach((card) => {
      const overlay = card.querySelector<HTMLElement>(".curtain");
      const enter = () =>
        overlay && (overlay.style.transform = "translateY(0%)");
      const leave = () =>
        overlay && (overlay.style.transform = "translateY(100%)");

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("focusin", enter);
      card.addEventListener("focusout", leave);

      cleaners.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
        card.removeEventListener("focusin", enter);
        card.removeEventListener("focusout", leave);
      });
    });

    return () => cleaners.forEach((fn) => fn());
  }, []);

  return (
    <Box
      component="section"
      aria-label="our work"
      sx={{
        position: "relative",
        background: "rgba(0, 0, 0, 1)",
        px: sectionPaddingX,
      }}
    >
      {/* SECTION */}
      <Box
        ref={containerRef}
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
          width: "100%",
          py: sectionPaddingY,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: { xs: "40px", md: "80px", xl: "100px" },
          position: "relative",
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
              component="h2"
              aria-label="our work"
              sx={{
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "rgba(255, 255, 255, 1)",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "110px", xl: "150px" },
              }}
            >
              {heading?.line1}
            </Typography>
            <Typography
              component="span"
              sx={{
                display: "block",
                color: "rgba(255, 255, 255, 1)",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", sm: "center" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              {heading?.line2}
            </Typography>
          </Box>

          <Box
            aria-hidden
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
            paragraph
            sx={{
              maxWidth: { xs: "490px", xl: "700px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
              m: 0,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* projects boxes */}
        <Box
          role="list"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", xl: "40px" },
          }}
        >
          {Array.from({ length: Math.ceil(projects.length / 2) }).map(
            (_, rowIndex) => {
              const rowItems = projects.slice(rowIndex * 2, rowIndex * 2 + 2);
              return (
                <Box
                  key={rowIndex}
                  width="100%"
                  sx={{
                    display: "flex",
                    gap: { xs: "20px", xl: "40px" },
                    justifyContent: "space-between",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  {rowItems.map((proj, i) => (
                    <Box
                      role="listitem"
                      key={proj.title + i}
                      sx={{ width: "100%" }}
                    >
                      <WorkShowcCase {...proj} />
                    </Box>
                  ))}
                </Box>
              );
            }
          )}

          <ButtonComponent
            onClick={() => router.push("/websites")}
            label="view all projects"
            imgSrc={svgs.whiteArrow}
            sx={{
              background: "#3C65FF",
              color: "#fff",
              borderRadius: "50px",
              margin: "auto",
            }}
          />
        </Box>

        {/* background blurs (decorative) */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "50vw",
            height: { xs: "50%", md: "unset" },
            width: "100%",
            backgroundColor: {
              xs: "rgba(88, 65, 212, 1)",
              md: "rgba(88, 65, 212, 0.4)",
            },
            filter: "blur(400px)",
            zIndex: 0,
            aspectRatio: "1/1",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            maxWidth: "50vw",
            height: { xs: "20%", md: "unset" },
            width: "100%",
            backgroundColor: {
              xs: "rgba(88, 65, 212, 1)",
              md: "rgba(88, 65, 212, 0.4)",
            },
            filter: "blur(400px)",
            zIndex: 0,
            aspectRatio: "1/1",
            display: { xs: "block", md: "none" },
          }}
        />
      </Box>
    </Box>
  );
}
