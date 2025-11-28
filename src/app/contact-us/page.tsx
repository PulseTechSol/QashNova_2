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

  const title =
    data?.metaTitle ?? "Contact Qashnova | Let's Build Something Great";
  const description =
    data?.metaDescription ??
    "Get in touch with Qashnova for website development, branding, or digital strategy. We're here to help you succeed.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/contact-us";

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
          line1={hero?.desktop?.line1 ?? "Ready To"}
          line1Mobile={hero?.mobile?.line1 ?? "Solutions"}
          line2Desktop={hero?.desktop?.line2 ?? "Start Your"}
          line2Mobile={hero?.mobile?.line2 ?? "Built For"}
          line3Desktop={hero?.desktop?.line3 ?? "Project"}
          line3Mobile={hero?.mobile?.line3 ?? "Your Brand"}
        />
      </header>

      <main role="main">
        <ContactUs
          heading={contact?.heading ?? "Get In Touch"}
          description={
            contact?.description ?? [
              "We would love to hear from you. Whether you have a question about" +
                "our services, need advice on your project or simply want to find out" +
                "how we can help, our team is here to listen. Every enquiry matters" +
                "to us and we aim to respond quickly with clear and helpful answers.",
              "Filling out the form below is the easiest way to get in touch. Just" +
                "let us know a little about what you are looking for and we will come" +
                "back to you as soon as possible. If you prefer, you can also reach" +
                "us directly by phone or email and we will be happy to assist.",
              "Building strong relationships with our clients starts with a" +
                "conversation, so please do not hesitate to contact us today. We look" +
                "forward to working with you and helping bring your ideas and goals" +
                "to life.",
            ]
          }
        />
      </main>
    </>
  );
}
