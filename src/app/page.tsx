import HomePage from "./home/page";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title:
    "Qashnova | Premier Digital Agency | Website Design, Branding & SEO Services in UK",
  description:
    "Qashnova is a leading digital agency specializing in custom website development, creative branding, SEO optimization, social media management, and e-commerce solutions. We help businesses across the UK grow their online presence with bespoke digital strategies tailored to your success. Expert web design, development, and digital marketing services.",
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
    title:
      "Qashnova | Premier Digital Agency | Website Design, Branding & SEO Services in UK",
    description:
      "Leading digital agency offering custom website development, creative branding, SEO optimization, and social media management. Transform your online presence with expert digital solutions tailored to your business success.",
    url: "https://www.qashnova.com/",
    siteName: "Qashnova",
    images: [
      {
        url: "https://www.qashnova.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Qashnova - Premier Digital Agency for Website Design, Branding & SEO Services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Qashnova | Premier Digital Agency | Website Design, Branding & SEO Services",
    description:
      "Leading digital agency offering custom website development, creative branding, SEO optimization, and social media management. Transform your online presence with expert digital solutions.",
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
