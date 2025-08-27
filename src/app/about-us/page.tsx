import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import WhatweDo from "./_sections/WhatweDo";
import SectionWithHeadingAndCTA from "@/_components/SectionWithHeadingAndCTA";
import Ourmission from "./_sections/Ourmission";

export const metadata: Metadata = {
  title: "About Qashnova | Who We Are & What We Do",
  description:
    "Learn about Qashnova, a creative digital agency focused on websites, branding, and growth strategies that empower businesses worldwide.",
  alternates: { canonical: "https://www.qashnova.com/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <header>
        <HeroSection
          line1="designing"
          line1Mobile="designing"
          line2Desktop="your Digital"
          line2Mobile="Digital"
          line3Desktop="Future today"
          line3Mobile="Future"
        />
      </header>

      <main role="main">
        <WhatweDo />
        <SectionWithHeadingAndCTA
          heading="brighten your brand with "
          lastword="qashnova"
          route="/case-study"
        />
        <Ourmission />
      </main>
    </>
  );
}
