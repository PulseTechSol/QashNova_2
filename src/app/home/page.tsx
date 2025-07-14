import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
// import CraftingWebsites from "./_sections/CraftingWebsites";
// import Partness from "./_sections/partness";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Partness />
      <HowHelp />
      {/* <CraftingWebsites /> */}
    </>
    // <h1>Home</h1>
  );
}
