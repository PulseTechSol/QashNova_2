import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import OurWork from "./_sections/OurWork";
import Casestudies from "./_sections/Casestudies";
import ContactUs from "@/_components/ContactUs";
import SectionWithHeadingAndCTA from "../../_components/SectionWithHeadingAndCTA";
import ClientsStories from "./_sections/ClientsStories";
import DigitalInsights from "./_sections/DigitalInsights";

export default function HomePage() {
  return (
    <>
      <header>
        <HeroHome />
      </header>

      <main role="main">
        <Partness />
        <HowHelp />
        <SectionWithHeadingAndCTA
          heading="Crafting Websites for Your "
          lastword="Success"
        />
        <OurWork />
        <ClientsStories />
        <Casestudies />
        <DigitalInsights />
        <ContactUs />
      </main>
    </>
  );
}
