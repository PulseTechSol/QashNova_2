import HomePage from "./home/page";
import type { Metadata } from "next";

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Qashnova | Digital Agency for Web Design, Branding & SEO",
  description:
    "Qashnova delivers bespoke web design, branding, SEO, SEM, and social media strategies that help UK businesses grow online.",
  keywords: [
    "digital agency",
    "website design",
    "web development",
    "branding agency",
    "SEO services",
    "social media management",
    "e-commerce development",
    "digital marketing",
    "web design UK",
    "creative agency",
    "custom websites",
    "responsive web design",
    "SEO optimization",
    "SEM services",
    "brand identity design",
    "digital strategy",
    "online presence",
    "web solutions",
  ],
  alternates: {
    canonical: "https://www.qashnova.com/",
  },
  openGraph: {
    title: "Qashnova | Digital Agency for Web Design, Branding & SEO",
    description:
      "Bespoke web design, branding, SEO, SEM, and social media strategies for UK businesses seeking measurable digital growth.",
    url: "https://www.qashnova.com/",
    siteName: "Qashnova",
    images: [
      {
        url: "https://www.qashnova.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Qashnova digital agency delivering web design, branding, and SEO services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qashnova | Digital Agency for Web Design, Branding & SEO",
    description:
      "Bespoke web design, branding, SEO, SEM, and social media strategies for UK businesses seeking measurable digital growth.",
    images: ["https://www.qashnova.com/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function Home() {
  return <HomePage />;
}
