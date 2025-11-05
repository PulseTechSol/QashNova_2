import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import WhatweDo from "./_sections/WhatweDo";
import SectionWithHeadingAndCTA from "@/_components/SectionWithHeadingAndCTA";
import Ourmission from "./_sections/Ourmission";
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("about-us");

  return {
    title: data?.metaTitle ?? "About Qashnova | Who We Are & What We Do",
    description:
      data?.metaDescription ??
      "Learn about Qashnova, a creative digital agency focused on websites, branding, and growth strategies that empower businesses worldwide.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/about-us",
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
          line1={hero?.desktop?.line1}
          line1Mobile={hero?.mobile?.line1}
          line2Desktop={hero?.desktop?.line2}
          line2Mobile={hero?.mobile?.line2}
          line3Desktop={hero?.desktop?.line3}
          line3Mobile={hero?.mobile?.line3}
        />
      </header>

      <main role="main">
        <WhatweDo whatWeDo={whatWeDo} />
        <SectionWithHeadingAndCTA
          heading={brand?.heading ?? "brighten your brand with "}
          lastword={brand?.lastword ?? "qashnova"}
          route={brand?.route ?? "/case-study"}
        />
        <Ourmission mission={mission} />
      </main>
    </>
  );
}
