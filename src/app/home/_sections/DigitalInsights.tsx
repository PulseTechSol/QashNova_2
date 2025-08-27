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
import DigitalInsightCard from "@/_components/DigitalInsightCard";
import ButtonComponent from "@/_components/ButtonComponent";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalInsights() {
  const router = useRouter();
  type CardContent = {
    heading: string;
    description: string;
    route: string;
  };

  const cardContentList: CardContent[] = [
    {
      heading: "Mastering SEO in 2025: Your Essential Guide",
      description:
        "Learn the latest SEO strategies and techniques to boost your search rankings and attract more organic traffic to your website this year.",
      route: "/mastering-seo-in-2025-your-essential-guide",
    },
    {
      heading: "The Power of Visual Storytelling in Branding",
      description:
        "Discover how compelling visuals and narratives can transform your brand identity and deeply resonate with your audience on every platform.",
      route: "/the-power-of-visual-storytelling-in-branding",
    },
    {
      heading: "Social Media Trends You Can't Ignore",
      description:
        "Stay ahead with insights into the most impactful social media trends, and learn how to leverage them for stronger engagement and community building.",
      route: "/social-media-trends-you-cant-ignore",
    },
    {
      heading: "Website Redesign Checklist: Avoiding Common Pitfalls",
      description:
        "Planning a new website? This guide offers crucial tips and a checklist to ensure a smooth redesign process and a successful online launch.",
      route: "/website-redesign-checklist-avoiding-common-pitfalls",
    },
  ];

  return (
    <Box
      component="section"
      aria-label="digital insights"
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
        {/* Heading */}
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
              aria-label="digital insights"
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
              insights
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
            Dive into our latest articles, expert analysis, and actionable tips.
            Stay informed on the evolving digital landscape and discover
            strategies to propel your business forward.
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
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "40px", xl: "60px" },
            flexWrap: "wrap",
          }}
        >
          {cardContentList.map((item, index) => (
            <Box role="listitem" key={index}>
              <DigitalInsightCard
                heading={item.heading}
                description={item.description}
                onClick={() => router.push(item.route)}
              />
            </Box>
          ))}
        </Box>

        <ButtonComponent
          onClick={() => router.push("/blogs")}
          label="view all"
          imgSrc={svgs.whiteArrow}
          sx={{
            background: { xs: "#3C65FF", md: "#3C65FF" },
            color: { xs: "#fff" },
            borderRadius: "50px",
            maxWidth: { xs: "280px", xl: "360px" },
            marginTop: { xs: "20px", md: "unset" },
          }}
        />
      </Box>

      {/* decorative blur */}
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
          zIndex: -1,
          height: "30%",
        }}
      />
    </Box>
  );
}
