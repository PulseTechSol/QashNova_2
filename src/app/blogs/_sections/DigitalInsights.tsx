"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import DigitalInsightCard from "@/_components/DigitalInsightCard";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";

export default function DigitalInsights() {
  const router = useRouter();

  type CardContent = {
    backgroundImage?: string;
    heading: string;
    description: string;
    route: string;
  };

  const cardContentList: CardContent[] = [
    {
      heading: "Mastering SEO in 2025: Your Essential Guide",
      description:
        "Learn the latest SEO strategies and techniques to boost your search rankings and attract more organic traffic to your website this year.",
      backgroundImage: "/blogs/blog1.webp",
      route: "/mastering-seo-in-2025-your-essential-guide",
    },
    {
      heading: "The Power of Visual Storytelling in Branding",
      description:
        "Discover how compelling visuals and narratives can transform your brand identity and deeply resonate with your audience on every platform.",
      backgroundImage: "/blogs/blog2.webp",
      route: "/the-power-of-visual-storytelling-in-branding",
    },
    {
      heading: "Social Media Trends You Can't Ignore",
      description:
        "Stay ahead with insights into the most impactful social media trends, and learn how to leverage them for stronger engagement and community building.",
      backgroundImage: "/blogs/blog3.webp",
      route: "/social-media-trends-you-cant-ignore",
    },
    {
      heading: "Website Redesign Checklist: Avoiding Common Pitfalls",
      description:
        "Planning a new website? This guide offers crucial tips and a checklist to ensure a smooth redesign process and a successful online launch.",
      backgroundImage: "/blogs/blog1.webp",
      route: "/website-redesign-checklist-avoiding-common-pitfalls",
    },
    {
      heading: "Maximizing ROI in Digital Ads",
      description:
        "Learn strategies to fine-tune your digital advertising campaigns for better performance and a stronger return on investment.",
      backgroundImage: "/blogs/blog1.webp",
      route: "/maximizing-roi-in-digital-ads",
    },
    {
      heading: "The Future of E-commerce: What's Next?",
      description:
        "Explore emerging trends and technologies shaping the online retail landscape, from AI-powered personalization to seamless checkout experiences.",
      backgroundImage: "/blogs/blog1.webp",
      route: "/the-future-of-e-commerce-whats-next",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        px: sectionPaddingX,
        backgroundColor: "rgba(0, 0, 0, 1)",

        // Top-left & bottom-left blurs via pseudo-elements (reduce extra DOM)
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "30%",
          backgroundColor: "rgba(88, 65, 212, 0.3)",
          filter: "blur(200px)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "40%",
          height: "30%",
          backgroundColor: "rgba(88, 65, 212, 0.18)",
          filter: "blur(200px)",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: maxWidth, xl: "1536px", xxl: "1700px" },
          width: "100%",
          py: sectionPaddingY,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "80px", xl: "100px" },

          // Right-side blue blur as another pseudo instead of extra Box
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            width: "40%",
            height: "30%",
            backgroundColor: "rgba(60, 101, 255, 0.18)",
            filter: "blur(200px)",
            zIndex: 0,
          },
        }}
      >
        {/* Heading + intro */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xl: "1800px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "30px", sm: "40px", xl: "60px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "477px", xl: "800px" },
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#fff",
                lineHeight: { xs: "50px", md: "120px", xl: "150px" },
              }}
            >
              <Box
                component="span"
                sx={{ display: "block", textAlign: "start" }}
              >
                Digital
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  textAlign: { xs: "center", md: "end" },
                }}
              >
                Insights
              </Box>
            </Typography>
          </Box>

          <Typography
            paragraph
            sx={{
              maxWidth: { xs: "490px", xl: "800px" },
              width: "100%",
              fontSize: { xs: "18px", xl: "24px" },
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.5)",
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
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "40px", xl: "60px" },
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cardContentList.map((item, index) => (
            <DigitalInsightCard
              key={index}
              heading={item.heading}
              description={item.description}
              backgroundImage={item.backgroundImage}
              onClick={() => router.push(item.route)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
