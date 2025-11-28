import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load DigitalInsights component to reduce initial bundle size
const DigitalInsights = dynamicImport(
  () => import("./_sections/DigitalInsights"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

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

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("blog");

  const title =
    data?.metaTitle ??
    "Qashnova Blog | Tips on Websites, Branding & Business Growth";
  const description =
    data?.metaDescription ??
    "Read expert insights from Qashnova on websites, branding, SEO, and digital strategies to grow your business online.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/blogs";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "Qashnova",
      images: [
        {
          url: "https://www.qashnova.com/logo.svg",
          width: 1200,
          height: 630,
          alt: "Qashnova blog - expert insights on websites, branding, SEO, and digital strategies",
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["https://www.qashnova.com/logo.svg"],
    },
  };
}

export default async function Blogs() {
  const data = await fetchPageData("blog");

  const hero = data?.textualContent?.heroSection;
  const digitalInsights = data?.textualContent?.digitalInsightsSection;

  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1 ?? "Navigate"}
          line1Mobile={hero?.mobile?.line1 ?? "Navigate"}
          line2Desktop={hero?.desktop?.line2 ?? "the Future"}
          line2Mobile={hero?.mobile?.line2 ?? "the Future"}
          line3Desktop={hero?.desktop?.line3 ?? "of Digital"}
          line3Mobile={hero?.mobile?.line3 ?? "of Digital"}
          isbool={true}
        />
      </header>

      <main role="main">
        <DigitalInsights
          heading={
            digitalInsights?.heading ?? {
              line1: "Digital",
              line2: "Insights",
            }
          }
          description={
            digitalInsights?.description ??
            "Dive into our latest articles, expert analysis, and actionable tips. Stay informed on the evolving digital landscape and discover strategies to propel your business forward."
          }
          blogs={blogs}
        />
      </main>
    </>
  );
}
