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
import { Box, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useRef } from "react";
import GenericHeadingBox from "@/_components/GenericHeadingBox";
gsap.registerPlugin(ScrollTrigger);

interface HowHelpProps {
  heading?: {
    line1: string;
    line2: string;
  };
  description?: string;
  services?: {
    title: string;
    description: string;
    buttons: string[];
    image: string;
  }[];
}

export default function HowHelp({
  heading,
  description,
  services = [],
}: HowHelpProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".gsap-card");

    cards.forEach((card, index) => {
      if (index === cards.length - 1) {
        gsap.set(card, { opacity: 1, scale: 1 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: card as Element,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        })
        .set(card, { opacity: 1, scale: 1 })
        .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      component="section"
      aria-label="how we help"
      sx={{ position: "relative", px: sectionPaddingX }}
    >
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
          gap: { xs: "40px", md: "80px", xl: "100px", xxl: "120px" },
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Heading + intro */}
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px", xl: "60px", xxl: "80px" },
          }}
        >
          <GenericHeadingBox
            heading1={heading?.line1}
            heading2={heading?.line2}
          />
          <Box
            aria-hidden
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "rgba(0, 0, 0, 1)",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Box
            sx={{
              maxWidth: { xs: "490px", xl: "600px", xxl: "700px" },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", md: "20px" },
            }}
          >
            <Typography
              data-aos="fade-left"
              data-aos-duration="500"
              paragraph
              sx={{
                fontSize: { xs: "18px", xl: "24px" },
                fontWeight: 400,
                color: "rgba(0, 0, 0, 1)",
                textAlign: "start",
                m: 0,
              }}
            >
              {description}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "20px" },
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.75)",
                textAlign: "start",
                m: 0,
              }}
            >
              Explore our{" "}
              <MuiLink
                component={NextLink}
                href="/branding"
                underline="always"
                sx={{ fontWeight: 600 }}
              >
                branding services
              </MuiLink>
              ,{" "}
              <MuiLink
                component={NextLink}
                href="/websites"
                underline="always"
                sx={{ fontWeight: 600 }}
              >
                website portfolio
              </MuiLink>
              ,{" "}
              <MuiLink
                component={NextLink}
                href="/plans"
                underline="always"
                sx={{ fontWeight: 600 }}
              >
                growth plans
              </MuiLink>{" "}
              and{" "}
              <MuiLink
                component={NextLink}
                href="/contact-us"
                underline="always"
                sx={{ fontWeight: 600 }}
              >
                contact our team
              </MuiLink>{" "}
              to dive deeper into how we support ambitious brands.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "20px" },
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.75)",
                textAlign: "start",
                m: 0,
              }}
            >
              Looking for trusted guidance on optimisation? Review the{" "}
              <MuiLink
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                sx={{ fontWeight: 600 }}
              >
                Google Search Central SEO starter guide
              </MuiLink>{" "}
              for best practices from the source.
            </Typography>
          </Box>
        </Box>

        {/* Cards */}
        {services.map((service, index) => {
          const isFirst = index === 0;
          const isLast = index === services.length - 1;
          return (
            <Box
              key={index}
              component="article"
              aria-label={service.title}
              className="gsap-card"
              sx={{
                width: "100%",
                maxWidth: { xl: "1800px" },
                padding: { xs: "20px 15px ", sm: "40px", xl: "60px" },
                display: "flex",
                flexWrap: { xs: "wrap", md: "nowrap" },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: { xs: "20px", sm: "40px", md: "60px", xl: "80px" },
                bgcolor: "#fff",
                borderRadius: { xs: "30px", sm: "80px" },
                borderTopLeftRadius: isFirst
                  ? { xs: 0, sm: 0 }
                  : { xs: "30px", md: "80px" },
                borderBottomRightRadius: isLast
                  ? { xs: 0, sm: 0 }
                  : { xs: "30px", sm: "80px" },
              }}
            >
              <Box
                data-aos="zoom-in"
                data-aos-duration="500"
                sx={{
                  maxWidth: { xs: "555px", xl: "800px" },
                  width: "100%",
                  padding: { xs: "0px", md: "40px 0", xl: "60px 0" },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: localFontSize.h4,
                    fontWeight: 500,
                    color: "rgba(0, 0, 0, 1)",
                    lineHeight: { xs: "40px", md: "70px", xl: "80px" },
                    textAlign: { xs: "start" },
                  }}
                >
                  {service.title}
                </Typography>

                <Box
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  sx={{
                    mt: { xs: "10px", sm: "20px", md: "30px", xl: "50px" },
                    height: "auto",
                    width: "100%",
                    fontSize: { xs: "12px", md: "16px" },
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: "5px", md: "10px", xl: "15px" },
                  }}
                >
                  {service.buttons.map((label, i) => (
                    <ButtonComponent
                      disableHover
                      key={i}
                      label={label}
                      sx={{
                        maxWidth: { xl: "500px" },
                        padding: {
                          xs: "5px 15px",
                          md: "10px 20px",
                          xl: "20px 40px",
                        },
                        height: { xs: "30px", md: "44px", xl: "55px" },
                        backgroundColor: "rgba(60, 101, 255, 0.5)",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  paragraph
                  sx={{
                    mt: { xs: "15px", sm: "30px", md: "60px", xl: "80px" },
                    fontSize: localFontSize.p2,
                    fontWeight: 400,
                    color: "rgba(0, 0, 0, 1)",
                    textAlign: { xs: "start" },
                    m: 0,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>

              <Box
                data-aos="zoom-in"
                data-aos-duration="500"
                sx={{
                  maxWidth: {
                    xs: "100%",
                    md: "445px",
                    xl: "600px",
                    xxl: "700px",
                  },
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className={`custom-img ${isFirst ? "first" : ""} ${
                    isLast ? "last" : ""
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={500}
                  height={500}
                  loading={isFirst ? "eager" : "lazy"}
                  priority={isFirst}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* background blurs (decorative) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          aspectRatio: "1 / 1",
          backgroundColor: "rgba(88, 65, 212, 0.4)",
          filter: "blur(400px)",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50%",
          aspectRatio: "1 / 1",
          // NOTE: keep original value to avoid visual change; replace with rgba(...) if you want the blue blur visible
          backgroundColor: "background: rgba(60, 101, 255, 0.7)",
          filter: "blur(400px)",
          zIndex: 0,
          transform: "translate(-40%, -50%)",
        }}
      />
    </Box>
  );
}
