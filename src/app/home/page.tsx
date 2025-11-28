import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import SectionWithHeadingAndCTA from "../../_components/SectionWithHeadingAndCTA";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/strapi";

// Lazy load below-the-fold components to reduce initial bundle size
const OurWork = dynamicImport(() => import("./_sections/OurWork"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const ClientsStories = dynamicImport(
  () => import("./_sections/ClientsStories"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

const Casestudies = dynamicImport(() => import("./_sections/Casestudies"), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

const DigitalInsights = dynamicImport(
  () => import("./_sections/DigitalInsights"),
  {
    loading: () => <div style={{ minHeight: "400px" }} />,
    ssr: true,
  }
);

const ContactUs = dynamicImport(() => import("@/_components/ContactUs"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
  ssr: true,
});

// Revalidate every hour (3600 seconds) to prevent hitting API limits
export const revalidate = 3600;

export default async function HomePage() {
  const data = await fetchPageData("homepage");

  const hero = data?.textualContent?.heroSection;
  const ourWork = data?.textualContent?.OurWorkSection;
  const howWeHelp = data?.textualContent?.howWeHelpsection;
  const clientStories = data?.textualContent?.clientsStoriesSection;
  const digitalInsights = data?.textualContent?.digitalInsightsSection;
  const sectionWithCta = data?.textualContent?.sectionWithHeadingAndCTA;
  const slogans = data?.textualContent?.slogansSection;
  const caseStudies = data?.textualContent?.caseStudiesSection;

  return (
    <>
      <header>
        <HeroHome
          firstWord={hero?.firstWord}
          secondWord={hero?.secondWord}
          thirdWord={hero?.thirdWord}
        />
      </header>

      <main role="main">
        <Partness slogans={slogans} />
        <HowHelp
          heading={howWeHelp?.heading}
          description={howWeHelp?.description}
          services={howWeHelp?.services}
        />
        <SectionWithHeadingAndCTA
          heading={sectionWithCta?.heading}
          lastword={sectionWithCta?.lastword}
        />
        <OurWork
          heading={ourWork?.heading}
          description={ourWork?.description}
          projects={ourWork?.projects}
        />

        <ClientsStories
          heading={clientStories?.heading}
          reviews={clientStories?.reviews}
        />
        <Casestudies
          heading={caseStudies?.heading}
          description={caseStudies?.description}
          caseStudies={caseStudies?.caseStudies}
        />
        <DigitalInsights
          heading={digitalInsights?.heading}
          description={digitalInsights?.description}
          articles={digitalInsights?.articles}
        />
        <ContactUs />
      </main>
    </>
  );
}
