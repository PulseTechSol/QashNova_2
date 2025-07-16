import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import OurWork from "./_sections/OurWork";
import Casestudies from "./_sections/Casestudies";
import ContactUs from "@/_components/ContactUs";
import SectionWithHeadingAndCTA from "../../_components/SectionWithHeadingAndCTA";
import ClientsStories from "./_sections/ClientsStories";

export default function HomePage() {
  return (
    <>
      <ClientsStories />
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
