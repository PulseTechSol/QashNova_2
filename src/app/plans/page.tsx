import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import PlanScreen from "./_sections/PlanScreen";

export const metadata: Metadata = {
  title: "Affordable Website & Branding Plans | Qashnova",
  description:
    "Choose from Qashnova’s tailored website and branding plans designed for startups, small businesses, and growing brands.",
  alternates: { canonical: "https://www.qashnova.com/plans" },
};

export default function Page() {
  return (
    <>
      <header>
        <HeroSection
          line1="Custom"
          line1Mobile="Solutions"
          line2Desktop="Plans for"
          line3Desktop="Proven Boom"
          line2Mobile="Built for"
          line3Mobile="Your brand"
          isbool={true}
        />
      </header>

      <main role="main">
        <PlanScreen />
      </main>
    </>
  );
}
