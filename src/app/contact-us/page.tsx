// app/contact-us/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load ContactUs component since it's below the fold
const ContactUs = dynamicImport(() => import("@/_components/ContactUs"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("contact-us");

  const title = data?.metaTitle;
  const description = data?.metaDescription;
  const url = data?.canonicalUrl;

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
          alt: "Contact Qashnova - Digital Agency for Web Design, Branding & SEO",
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

export default async function Page() {
  // 👇 Strapi se data
  const data = await fetchPageData("contact-us");

  const hero = data?.textualContent?.heroSection;
  const contact = data?.textualContent?.getInTouchSection;

  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1}
          line1Mobile={hero?.mobile?.line1}
          line2Desktop={hero?.desktop?.line2}
          line2Mobile={hero?.mobile?.line2}
          line3Desktop={hero?.desktop?.line3}
          line3Mobile={hero?.mobile?.line3}
        />
      </header>

      <main role="main">
        <ContactUs
          heading={contact?.heading}
          description={contact?.description}
        />
      </main>
    </>
  );
}
