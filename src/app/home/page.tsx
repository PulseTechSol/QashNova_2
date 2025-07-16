import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import OurWork from "./_sections/OurWork";
import Casestudies from "./_sections/Casestudies";
import ContactUs from "@/_components/ContactUs";
import SectionWithHeadingAndCTA from "../../_components/SectionWithHeadingAndCTA";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Partness />
      <HowHelp />
      <SectionWithHeadingAndCTA heading="Crafting Websites for Your Success" />
      <OurWork />
      <Casestudies />
      <ContactUs />
    </>
  );
}
