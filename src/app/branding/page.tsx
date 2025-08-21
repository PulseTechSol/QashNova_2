import HeroSection from "@/_components/HeroSection";
import CardBranding from "./_sections/CardBranding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Identity Design Services | Qashnova",
  description:
    "Qashnova offers complete branding solutions including logo design, brand identity, and visuals that make your business unforgettable.",
  alternates: {
    canonical: "https://www.qashnova.com/branding",
  },
};

export default function BrandingPage() {
  return (
    <>
      <HeroSection
        line1="Defining"
        line1Mobile="Defining"
        line2Desktop="Your Unique"
        line2Mobile="Your Unique"
        line3Desktop="brand identity"
        line3Mobile="identity"
        isbool={true}
      />
      <CardBranding />
    </>
  );
}
