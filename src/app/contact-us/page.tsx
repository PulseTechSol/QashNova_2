// app/contact-us/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import ContactUs from "@/_components/ContactUs";
import { fetchPageData } from "@/lib/strapi";

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("contact-us");

  return {
    title: data?.metaTitle ?? "Contact Qashnova | Let’s Build Something Great",
    description:
      data?.metaDescription ??
      "Get in touch with Qashnova for website development, branding, or digital strategy. We’re here to help you succeed.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/contact-us",
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
