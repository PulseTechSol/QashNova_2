import { Metadata } from "next";
import HeroSection from "@/_components/HeroSection";
import DigitalInsights from "./_sections/DigitalInsights";

export const metadata: Metadata = {
  title: "Qashnova Blog | Tips on Websites, Branding & Business Growth",
  description:
    "Read expert insights from Qashnova on websites, branding, SEO, and digital strategies to grow your business online.",
  alternates: { canonical: "https://www.qashnova.com/blogs" },
};

export default function Blogs() {
  return (
    <>
      <header>
        <HeroSection
          line1="Navigate"
          line2Desktop="the Future"
          line3Desktop="of Digital"
          line1Mobile="Navigate"
          line2Mobile="the Future"
          line3Mobile="of Digital"
          isbool={true}
        />
      </header>

      <main role="main">
        <DigitalInsights />
      </main>
    </>
  );
}
