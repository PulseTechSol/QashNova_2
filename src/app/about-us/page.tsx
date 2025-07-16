import HeroSection from "@/_components/HeroSection";
import WhatweDo from "./_sections/WhatweDo";
import SectionWithHeadingAndCTA from "@/_components/SectionWithHeadingAndCTA";
import Ourmission from "./_sections/Ourmission";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        line1="designing"
        line2Desktop="your Digital"
        line2Mobile="Digital"
        line3Desktop="Future today"
        line3Mobile="Future"
      />
      <WhatweDo />
      <SectionWithHeadingAndCTA
        heading="brighten your brand with "
        lastword="qashnova"
      />
      <Ourmission />
    </>
  );
}
