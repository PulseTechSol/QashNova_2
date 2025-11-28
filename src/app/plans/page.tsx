import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load PlanScreen component to reduce initial bundle size
const PlanScreen = dynamicImport(() => import("./_sections/PlanScreen"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

// 🔹 Dynamic metadata from Strapi
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData("plan");

  const title =
    data?.metaTitle ?? "Affordable Website & Branding Plans | Qashnova";
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

  const findYourPerfectPlanFallback = {
    heading1: "Find Your",
    heading2: "Perfect Plan",
    description: `Our plans are designed to give every business the right foundation to
          grow online. Whether you need a simple landing page, a professional
          website for your small business or a fully integrated e-commerce
          platform, we have an option to suit your goals. Each package includes
          secure hosting, a custom domain and responsive design as standard.
          From our affordable Basic plan to our advanced Premium solution, you
          can choose the level of functionality and support that best matches
          your needs. Whatever stage your business is at, we make sure your
          website is built to perform and scale.`,
    planCards: [
      {
        plan: "Basic",
        description: "Ideal for Landing Pages with Basic Form Submission.",
        price: "£49 /Month",
        points: [
          "Custom Domain",
          "Hosting",
          "1-Page Responsive Design",
          "Basic Functionality",
        ],
      },
      {
        plan: "Standard",
        description: "The Go-to for most Small/Medium sized Businesses.",
        price: "£99 /Month",
        points: [
          "Custom Domain",
          "Hosting",
          "5-Page Responsive Design",
          "Standard Custom Functionality",
          "Priority Support",
          "Advanced Security",
        ],
      },
      {
        plan: "Premium",
        description: "For Businesses that Mostly Sell Online.",
        price: "£249 /Month",
        points: [
          "Custom Domain",
          "Hosting",
          "10-Page+ Responsive Design",
          "Advanced Custom Functionality",
          "Priority Support",
          "Advanced Security",
          "E-commerce Integration",
          "Admin Panel",
        ],
      },
    ],
  };
  return (
    <>
      <header>
        <HeroSection
          line1={hero?.desktop?.line1 ?? "Custom"}
          line1Mobile={hero?.mobile?.line1 ?? "Solutions"}
          line2Desktop={hero?.desktop?.line2 ?? "Plans for"}
          line2Mobile={hero?.mobile?.line2 ?? "Built for"}
          line3Desktop={hero?.desktop?.line3 ?? "Proven Boom"}
          line3Mobile={hero?.mobile?.line3 ?? "Your brand"}
          isbool={true}
        />
      </header>

      <main role="main">
        <PlanScreen
          findYourPerfectPlan={
            findYourPerfectPlan ?? findYourPerfectPlanFallback
          }
        />
      </main>
    </>
  );
}
