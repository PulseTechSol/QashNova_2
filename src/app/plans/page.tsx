import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import PlanScreen from "./_sections/PlanScreen";
import { fetchPageData } from "@/lib/strapi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("plan");

  const title = data?.metaTitle ?? "Affordable Website & Branding Plans | Qashnova";
  const description =
    data?.metaDescription ??
    "Choose from Qashnova's tailored website and branding plans designed for startups, small businesses, and growing brands.";
  const url = data?.canonicalUrl ?? "https://www.qashnova.com/plans";

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
          alt: "Qashnova affordable website and branding plans for startups and small businesses",
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
