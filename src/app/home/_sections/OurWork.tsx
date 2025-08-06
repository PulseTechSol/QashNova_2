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
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { WorkShowcCase } from "../_components/WorkShowcCase";

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
        background: "rgba(0, 0, 0, 1)",
        px: sectionPaddingX,
      }}
    >
      {/* SECTION */}
      <Box
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
              sx={{
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "rgba(255, 255, 255, 1)",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "110px", xl: "150px" },
              }}
            >
              our
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
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
        {/* projects boxes */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", xl: "40px" },
          }}
        >
          <Box
            width="100%"
            sx={{
              display: "flex",
              gap: { xs: "20px", xl: "40px" },
              justifyContent: "space-between",

              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <WorkShowcCase
              title="Isfahan & Kashan"
              overlayText="We enhanced their digital presence with expert web design, development, social media, and SEO."
              year="2025"
              image={pngs.projectOurWork1}
            />
            <WorkShowcCase
              title="Izec Prestige"
              overlayText="We developed a sophisticated branding strategy that captures their essence of luxury, professionalism, and reliability."
              year="2025"
              image={pngs.projectOurWork2}
            />
          </Box>
          <Box
            width="100%"
            sx={{
              display: "flex",
              gap: { xs: "20px", xl: "40px" },
              justifyContent: "space-between",

              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <WorkShowcCase
              title="Conquest Law"
              overlayText="For Conquest Law Solicitors, a leading legal firm, we designed and developed a professional and authoritative website."
              year="2025"
              image={pngs.projectOurWork3}
            />
            <WorkShowcCase
              title="Saif’s Boxing"
              overlayText="We designed and developed a complete website for Saif’s Boxing & Fitness, a premier training facility dedicated to boxing and personal fitness."
              year="2025"
              image={pngs.projectOurWork4}
            />
          </Box>

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
              margin: "auto",
            }}
          />
        </Box>
        {/* background blurr plased by positioning box  */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "50vw",
            width: "100%",
            backgroundColor: "rgba(88, 65, 212, 0.4)",
            filter: "blur(400px)",
            zIndex: 0,
            aspectRatio: "1/1",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            maxWidth: "50vw",
            width: "100%",
            backgroundColor: "rgba(88, 65, 212, 0.4)",
            filter: "blur(400px)",
            zIndex: 0,
            transformtranslate: "translate(-50%, -50%)",
          }}
        />
      </Box>
    </Box>
  );
}
