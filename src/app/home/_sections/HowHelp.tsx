"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import ButtonComponent from "@/_components/ButtonComponent";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import GenericHeadingBox from "@/_components/GenericHeadingBox";
gsap.registerPlugin(ScrollTrigger);

export default function HowHelp() {
  const containerRef = useRef<HTMLDivElement>(null);

  const websiteServices = [
    {
      title: "Website Development",
      description:
        "We craft high-performing, bespoke websites engineered to convert visitors into customers.",
      buttons: [
        "Custom Websites",
        "Responsive Design",
        "E-commerce",
        "E-commerce",
      ],
      image: pngs.image1,
    },
    {
      title: "Creative Web Designing",
      description:
        "We go beyond pretty pixels, crafting visually stunning and strategically designed websites that capture attention and convert.",
      buttons: [
        "Web Experiences",
        "Engaging Design",
        "Digital Artistry",
        "Digital Artistry",
        "User-Centric Aesthetics",
      ],
      image: pngs.image2,
    },
    {
      title: "SEO & SEM optimisation",
      description:
        "We implement sophisticated SEO techniques and precision-targeted SEM campaigns to ensure your brand is seen by the right audience at the right time",
      buttons: [
        "Growth Strategy",
        "Paid Search Performance",
        "Ranking Mastery",
        "Traffic & Conversions",
      ],
      image: pngs.image3,
    },
    {
      title: "Social Media Management",
      description:
        "From compelling content creation to community nurturing and performance analytics, our comprehensive social media management ensures your brand thrives.",
      buttons: [
        "Community Growth",
        "Platform Performance optimisation",
        "Content Curation",
        "Audience Connection",
      ],
      image: pngs.image4,
    },
    {
      title: "Creative Branding",
      description:
        "Forge an unforgettable identity that resonates. We craft distinctive, strategic branding solutions that go beyond logos, building a powerful narrative and visual language.",
      buttons: [
        "Brand Identity",
        "Storytelling",
        "Market Differentiation",
        "Visual Language Design",
        "Strategic Brand Positioning",
      ],
      image: pngs.image5,
    },
  ];
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
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        })
        .set(card, { opacity: 1, scale: 1 })
        .to(
          card,
          {
            opacity: 0,
            scale: 0.6,
            ease: "none",
          },
          0.01
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        px: sectionPaddingX,
      }}
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
          <GenericHeadingBox heading1="How" heading2="we Help" />
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "rgba(0, 0, 0, 1)",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "490px", xl: "600px", xxl: "700px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "rgba(0, 0, 0, 1)",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            Discover our full range of digital marketing services. From strategy
            to execution, we&apos;re here to deliver effective solutions that
            help your brand succeed in today&apos;s competitive landscape.
          </Typography>
        </Box>

        {websiteServices.map((service, index) => {
          const isFirst = index === 0;
          const isLast = index === websiteServices.length - 1;
          return (
            <Box
              key={index}
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
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                      // xl: "18px",
                    },
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: "5px", md: "10px", xl: "15px" },
                  }}
                >
                  {service.buttons.map((label, i) => (
                    <ButtonComponent
                      disableHover={true}
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
                  sx={{
                    mt: { xs: "15px", sm: "30px", md: "60px", xl: "80px" },
                    fontSize: localFontSize.p2,
                    fontWeight: 400,
                    color: "rgba(0, 0, 0, 1)",
                    textAlign: { xs: "start" },
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
                  alt={`service-${index}`}
                  className={`custom-img ${isFirst ? "first" : ""} ${
                    isLast ? "last" : ""
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* background */}
      <Box
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
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50%",
          aspectRatio: "1 / 1",
          backgroundColor: "background: rgba(60, 101, 255, 0.7)",
          filter: "blur(400px)",
          zIndex: 0,
          transform: "translate(-40%, -50%)",
        }}
      />
    </Box>
  );
}
