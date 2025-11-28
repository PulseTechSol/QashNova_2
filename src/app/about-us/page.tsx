import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load below-the-fold components to reduce initial bundle size
const WhatweDo = dynamicImport(() => import("./_sections/WhatweDo"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const SectionWithHeadingAndCTA = dynamicImport(
  () => import("@/_components/SectionWithHeadingAndCTA"),
  {
    loading: () => <div style={{ minHeight: "200px" }} />,
    ssr: true,
  }
);

const Ourmission = dynamicImport(() => import("./_sections/Ourmission"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("about-us");

  const title = data?.metaTitle ?? "About Qashnova | Who We Are & What We Do";
  const description =
    data?.metaDescription ??
    "Learn about Qashnova, a creative digital agency focused on websites, branding, and growth strategies that empower businesses worldwide.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/about-us";

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
          alt: "About Qashnova - creative digital agency for websites, branding, and growth strategies",
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

export default async function AboutUsPage() {
  const data = await fetchPageData("about-us");

  const hero = data?.textualContent?.heroSection;
  const whatWeDo = data?.textualContent?.whatWeDoSection;
  const brand = data?.textualContent?.brightenYourBrandSection;
  const mission = data?.textualContent?.ourMissionSection;

  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1 ?? "designing"}
          line1Mobile={hero?.mobile?.line1 ?? "designing"}
          line2Desktop={hero?.desktop?.line2 ?? "your Digital"}
          line2Mobile={hero?.mobile?.line2 ?? "Digital"}
          line3Desktop={hero?.desktop?.line3 ?? "Future today"}
          line3Mobile={hero?.mobile?.line3 ?? "Future"}
        />
      </header>

      <main role="main">
        <WhatweDo
          whatWeDo={
            whatWeDo ?? {
              heading1: "What",
              heading2: "we do",
              descriptionMobile:
                "We specialize in creating beautiful, functional, and responsive" +
                "websites tailored to your unique needs.",
              descriptionDesktop:
                "We specialize in creating beautiful, functional, and responsive" +
                "websites tailored to your unique needs. At Qashnova, we combine" +
                "creativity with cutting-edge technology to deliver designs that" +
                "captivate and connect with your audience.",
            }
          }
        />
        <SectionWithHeadingAndCTA
          heading={brand?.heading ?? "brighten your brand with "}
          lastword={brand?.lastword ?? "qashnova"}
          route={brand?.route ?? "/case-study"}
        />
        <Ourmission
          mission={
            mission ?? {
              heading1: "Our",
              heading2: "mission",
              descriptionMobile:
                "We're on a mission to be your trusted guide in the digital" +
                "world. Our commitment lies in crafting bespoke solutions that" +
                "elevate your brand.",
              descriptionDesktop:
                "We're on a mission to be your trusted guide in the digital" +
                "world. Our commitment lies in crafting bespoke solutions that" +
                "elevate your brand, expand your reach, and consistently drive" +
                "your online objectives forward.",
            }
          }
        />
      </main>
    </>
  );
}
