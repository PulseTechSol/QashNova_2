"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import ButtonComponent from "@/_components/ButtonComponent";
import svgs from "@/_assets/svgs";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalInsights() {
  type CardContent = {
    heading: string;
    description: string;
  };

  const cardContentList: CardContent[] = [
    {
      heading: "Mastering SEO in 2025: Your Essential Guide",
      description:
        "Learn the latest SEO strategies and techniques to boost your search rankings and attract more organic traffic to your website this year.",
    },
    {
      heading: "The Power of Visual Storytelling in Branding",
      description:
        "Discover how compelling visuals and narratives can transform your brand identity and deeply resonate with your audience on every platform.",
    },
    {
      heading: "Social Media Trends You Can't Ignore",
      description:
        "Stay ahead with insights into the most impactful social media trends, and learn how to leverage them for stronger engagement and community building.",
    },
    {
      heading: "Website Redesign Checklist: Avoiding Common Pitfalls",
      description:
        "Planning a new website? This guide offers crucial tips and a checklist to ensure a smooth redesign process and a successful online launch.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        zIndex: 10000,
        px: sectionPaddingX,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "1700px" },
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
        {/* this is the heading box */}
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
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#000",
                textAlign: { xs: "start" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              digital
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#000",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", md: "end" },
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              insights
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
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "490px", xl: "800px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "#00000080",
              textAlign: { xs: "end", sm: "start" },
            }}
          >
            Dive into our latest articles, expert analysis, and actionable tips.
            Stay informed on the evolving digital landscape and discover
            strategies to propel your business forward.
          </Typography>
        </Box>
        {/* this is the parent of cards */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "40px", xl: "60px" },
            flexWrap: "wrap",
          }}
        >
          {/* this is the cards */}
          {cardContentList.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: { xs: "20px", md: "40px" },
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 40px 0px #00000040",
                padding: {
                  xs: "40px 24px",
                  sm: "40px 25px",
                  md: "40px 30px",
                  xl: "40px",
                  xxl: "50px 60px",
                },
                borderRadius: "40px",
                maxWidth: {
                  xs: "360px",
                  sm: "380px",
                  md: "350px",
                  lg: "430px",
                  xl: "580px",
                  xxl: "800px",
                },
                width: "100%",
                height: {
                  xs: "370px",
                  sm: "400px",
                  md: "430px",
                  lg: "475px",
                  xl: "585px",
                  xxl: "650px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: localFontSize.h5,
                    fontWeight: 500,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.heading}
                  {item.heading}
                </Typography>
                <Typography
                  sx={{
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                    fontWeight: 500,
                    paddingTop: { xs: "10px", md: "15px", lg: "20px" },
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                  {item.description}
                </Typography>
              </Box>
              <ButtonComponent
                label="Read more"
                imgSrc={svgs.whiteArrow}
                sx={{
                  background: { xs: "#3C65FF", md: "#3C65FF" },
                  color: { xs: "#fff" },
                  borderRadius: "50px",
                  maxWidth: { xs: "280px", xl: "360px" },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {/* <Box
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
      /> */}
    </Box>
  );
}
