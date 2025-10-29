"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonComponent from "@/_components/ButtonComponent";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

interface CasestudiesProps {
  heading?: {
    line1: string;
    line2: string;
  };
  description?: string;
  caseStudies?: {
    title: string;
    description: string;
    image: string;
    imgMob: string;
  }[];
}
export default function Casestudies({
  heading,
  description,
  caseStudies = [],
}: CasestudiesProps) {
  const router = useRouter();

  return (
    <Box
      component="section"
      aria-label="case studies"
      sx={{
        position: "relative",
        zIndex: 10000,
        px: sectionPaddingX,
      }}
    >
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
        }}
      >
        {/* Heading row */}
        <Box
          sx={{
            maxWidth: { xl: "1800px" },
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px", xl: "60px" },
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "300px", sm: "477px", xl: "800px" },
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <Typography
              component="h2"
              aria-label="case studies"
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#000",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              {heading?.line1}
            </Typography>
            <Typography
              component="span"
              sx={{
                width: "100%",
                display: "block",
                color: "#000",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", md: "end" },
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
              bgcolor: "#00000080",
              display: { xs: "none", lg: "block" },
            }}
          />

          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            paragraph
            sx={{
              maxWidth: { xs: "490px", xl: "800px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#00000080",
              textAlign: { xs: "end", sm: "start" },
              m: 0,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          role="list"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: "20px", md: "40px", xl: "60px" },
          }}
        >
          {caseStudies.map((items, index) => (
            <Box
              role="listitem"
              key={index}
              sx={{
                width: "100%",
                height: {
                  xs: "100%",
                  md: "220px",
                  "@media (min-width:1200px)": { height: "290px" },
                  "@media (min-width:1290px)": { height: "220px" },
                  "@media (min-width:1440px)": { height: "300px" },
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: { xs: "relative", md: "relative" },
                overflow: "hidden",
                transition: "all 0.4s ease-in-out",
                "&:hover .bgOverlay": { opacity: 1 },
                "&:hover .contentBox": { color: { xs: "#fff", md: "#fff" } },
                "&:hover .descriptionText": {
                  color: { xs: "#fff", md: "#fff" },
                },
                "&:hover .lineBox": { display: { md: "none" } },
              }}
            >
              {/* Background Image + Overlay */}
              <Box
                className="bgOverlay"
                aria-hidden
                sx={{
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
                    inset: 0,
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
                  p: { xs: "10px", md: "0 20px", xl: "0 40px" },
                  gap: { xs: "20px", md: "40px" },
                  transition: "all 0.4s ease-in-out",
                }}
              >
                <Typography
                  data-aos="fade-right"
                  data-aos-duration="500"
                  sx={{
                    maxWidth: { xs: "458px", xl: "600px", xxl: "700px" },
                    width: "100%",
                    fontSize: localFontSize.h4,
                    fontWeight: 500,
                    color: "#000",
                    textAlign: { xs: "center", md: "start" },
                    textTransform: "capitalize",
                    transition: "color 0.4s ease-in-out",
                  }}
                >
                  {items.title}
                </Typography>
                <Typography
                  data-aos="fade-left"
                  data-aos-duration="500"
                  className="descriptionText"
                  paragraph
                  sx={{
                    maxWidth: { xs: "554px", xl: "650px", xxl: "750px" },
                    width: "100%",
                    fontSize: { xs: "18px", xl: "24px" },
                    fontWeight: 400,
                    color: "#00000080",
                    textAlign: { xs: "center", md: "start" },
                    transition: "color 0.4s ease-in-out",
                    m: 0,
                  }}
                >
                  {items.description}
                </Typography>
              </Box>

              {/* Divider Line */}
              <Box
                data-aos="zoom-in"
                data-aos-duration="500"
                className="lineBox"
                aria-hidden
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
          ))}
        </Box>

        {/* CTA button */}
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
            onClick={() => router.push("/case-study")}
            label="view all"
            imgSrc={svgs.whiteArrow}
            sx={{
              background: { xs: "#3C65FF", md: "#3C65FF" },
              color: { xs: "#fff" },
              borderRadius: "50px",
              maxWidth: { xs: "280px", xl: "360px" },
            }}
          />
        </Box>
      </Box>

      {/* Decorative background blurs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth: "40%",
          width: "100%",
          backgroundColor: "rgba(88, 65, 212, 0.4)",
          filter: "blur(200px)",
          zIndex: 0,
          height: "30%",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          maxWidth: "40%",
          width: "100%",
          backgroundColor: "rgba(88, 65, 212, 0.4)",
          filter: "blur(200px)",
          zIndex: 0,
          height: "30%",
        }}
      />
    </Box>
  );
}
