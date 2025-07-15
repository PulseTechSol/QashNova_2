import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import CraftingWebsites from "./_sections/CraftingWebsites";
import OurWork from "./_sections/OurWork";
import ContactUs from "@/_components/ContactUs";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Partness />
      <HowHelp />
      <CraftingWebsites />
      <OurWork />
      <ContactUs />
    </>
  );
}
