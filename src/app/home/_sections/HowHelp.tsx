"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pngs from "@/_assets/pngs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HowHelp() {
  // const containerRef = useRef<HTMLDivElement>(null);

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
      title: "SEO & SEM Optimization",
      description:
        "We implement sophisticated SEO techniques and precision-targeted SEM campaigns to ensure your brand is seen by the right audience at the right time",
      buttons: [
        "Growth Strategy",
        "Paid Search Performance",
        "Digital Artistry",
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
        "Platform Performance Optimization",
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

  return (
    <Box
      sx={{
        position: "relative",
        background: "radial-gradient(circle, #08289be3 0%, #000 25%)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        overflow: "hidden",
      }}
    >
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
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "none", lg: "block" },
          position: "absolute",
          // top: 89,
          right: 0,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        // ref={containerRef}
        sx={{
          maxWidth: "1440px",
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
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start" },
              }}
            >
              How
            </Typography>
            <Typography
              sx={{
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center" },
              }}
            >
              we Help
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
            sx={{
              maxWidth: "490px",
              width: "100%",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
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
                padding: "40px",
                display: "flex",
                flexWrap: { xs: "wrap", md: "nowrap" },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: { xs: "40px", md: "60px" },
                bgcolor: "#fff",
                borderRadius: "80px",
                borderTopLeftRadius: isFirst ? 0 : "80px",
                borderBottomRightRadius: isLast ? 0 : "80px",
              }}
            >
              <Box
                sx={{
                  maxWidth: "555px",
                  width: "100%",
                  padding: { xs: "0px", md: "40px 0" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: localFontSize.h4,
                    fontWeight: 500,
                    color: "#3C65FF",
                    lineHeight: { md: "70px" },
                    textAlign: { xs: "start" },
                  }}
                >
                  {service.title}
                </Typography>

                <Box
                  sx={{
                    mt: { xs: "20px", md: "30px" },
                    height: "auto",
                    width: "100%",
                    fontSize: localFontSize.p3,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: "5px", md: "10px" },
                  }}
                >
                  {service.buttons.map((label, i) => (
                    <ButtonComponent
                      key={i}
                      label={label}
                      sx={{
                        padding: { xs: "5px 15px", md: "10px 20px" },
                        height: { xs: "30px", md: "44px" },
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={{
                    mt: { xs: "30px", md: "60px" },
                    fontSize: localFontSize.p2,
                    fontWeight: 400,
                    color: "#00000080",
                    textAlign: { xs: "start" },
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "445px" },
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image
                  src={service.image}
                  alt={`service-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "80px",
                    borderTopLeftRadius: isFirst ? 0 : "80px",
                    borderBottomRightRadius: isLast ? 0 : "80px",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
