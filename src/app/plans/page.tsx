import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import PlanScreen from "./_sections/PlanScreen";
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("plan");

  return {
    title: data?.metaTitle ?? "Affordable Website & Branding Plans | Qashnova",
    description:
      data?.metaDescription ??
      "Choose from Qashnova’s tailored website and branding plans designed for startups, small businesses, and growing brands.",
    alternates: {
      canonical: data?.canonicalUrl ?? "https://www.qashnova.com/plans",
    },
  };
}

export default async function Page() {
  const data = await fetchPageData("plan");

  const hero = data?.textualContent?.heroSection;
  const findYourPerfectPlan = data?.textualContent?.findYourPerfectPlanSection;
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
        <PlanScreen findYourPerfectPlan={findYourPerfectPlan} />
      </main>
    </>
  );
}
