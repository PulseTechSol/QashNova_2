import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import DigitalInsights from "./_sections/DigitalInsights";

const blogs = [
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

export const metadata: Metadata = {
  title: "Qashnova Blog | Tips on Websites, Branding & Business Growth",
  description:
    "Read expert insights from Qashnova on websites, branding, SEO, and digital strategies to grow your business online.",
  alternates: { canonical: "https://www.qashnova.com/blogs" },
};

export default function Blogs() {
  return (
    <>
      <header>
        <HeroSection
          line1="Navigate"
          line2Desktop="the Future"
          line3Desktop="of Digital"
          line1Mobile="Navigate"
          line2Mobile="the Future"
          line3Mobile="of Digital"
          isbool={true}
        />
      </header>

      <main role="main">
        <DigitalInsights
          heading={{
            line1: "Digital",
            line2: "Insights",
          }}
          description={
            "Dive into our latest articles, expert analysis, and actionable tips. Stay informed on the evolving digital landscape and discover strategies to propel your business forward."
          }
          blogs={blogs}
        />
      </main>
    </>
  );
}
