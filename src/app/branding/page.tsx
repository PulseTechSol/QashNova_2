import HeroSection from "@/_components/HeroSection";
import CardBranding from "./_sections/CardBranding";

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
