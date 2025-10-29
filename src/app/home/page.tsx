import HeroHome from "./_sections/HeroHome";
import Partness from "./_sections/Partness";
import HowHelp from "./_sections/HowHelp";
import OurWork from "./_sections/OurWork";
import Casestudies from "./_sections/Casestudies";
import ContactUs from "@/_components/ContactUs";
import SectionWithHeadingAndCTA from "../../_components/SectionWithHeadingAndCTA";
import ClientsStories from "./_sections/ClientsStories";
import DigitalInsights from "./_sections/DigitalInsights";

const projects = [
  {
    title: "Isfahan & Kashan",
    overlayText:
      "We enhanced their digital presence with expert web design, development, social media, and SEO.",
    year: "2025",
    image: "/ourwork/projectOurWork1.png",
  },
  {
    title: "Izec Prestige",
    overlayText:
      "We developed a sophisticated branding strategy that captures their essence of luxury, professionalism, and reliability.",
    year: "2025",
    image: "/ourwork/projectOurWork2.png",
  },
  {
    title: "Conquest Law",
    overlayText:
      "For Conquest Law Solicitors, a leading legal firm, we designed and developed a professional and authoritative website.",
    year: "2025",
    image: "/ourwork/projectOurWork3.png",
  },
  {
    title: "Saif’s Boxing",
    overlayText:
      "We designed and developed a complete website for Saif’s Boxing & Fitness, a premier training facility dedicated to boxing and personal fitness.",
    year: "2025",
    image: "/ourwork/projectOurWork4.png",
  },
];

const services = [
  {
    title: "Website Development",
    description:
      "We craft high-performing, bespoke websites engineered to convert visitors into customers.",
    buttons: [
      "Custom Websites",
      "Responsive Design",
      "E-commerce",
      "E-commerce",
    ],
    image: "/heroHelp/image1.webp",
  },
  {
    title: "Creative Web Designing",
    description:
      "We go beyond pretty pixels, crafting visually stunning and strategically designed websites that capture attention and convert.",
    buttons: [
      "Web Experiences",
      "Engaging Design",
      "Digital Artistry",
      "Digital Artistry",
      "User-Centric Aesthetics",
    ],
    image: "/heroHelp/image2.webp",
  },
  {
    title: "SEO & SEM optimisation",
    description:
      "We implement sophisticated SEO techniques and precision-targeted SEM campaigns to ensure your brand is seen by the right audience at the right time",
    buttons: [
      "Growth Strategy",
      "Paid Search Performance",
      "Ranking Mastery",
      "Traffic & Conversions",
    ],
    image: "/heroHelp/image3.webp",
  },
  {
    title: "Social Media Management",
    description:
      "From compelling content creation to community nurturing and performance analytics, our comprehensive social media management ensures your brand thrives.",
    buttons: [
      "Community Growth",
      "Platform Performance optimisation",
      "Content Curation",
      "Audience Connection",
    ],
    image: "/heroHelp/image4.webp",
  },
  {
    title: "Creative Branding",
    description:
      "Forge an unforgettable identity that resonates. We craft distinctive, strategic branding solutions that go beyond logos, building a powerful narrative and visual language.",
    buttons: [
      "Brand Identity",
      "Storytelling",
      "Market Differentiation",
      "Visual Language Design",
      "Strategic Brand Positioning",
    ],
    image: "/heroHelp/image5.webp",
  },
];

const reviews = [
  {
    image: "/clients/client1.webp",
    name: "Sarah Johnson",
    description:
      "From the initial consultation to the ongoing social media management, Qashnova has been an absolute pleasure to work with. Their creative branding insights helped us define our voice",
    bgColor: "#3C65FF",
  },
  {
    image: "/clients/client2.webp",
    name: "Sarah Chen",
    description:
      "Partnering with Qashnova completely transformed our online presence. Their strategic approach to both web development and digital marketing delivered a stunning, high-performing website.",
    bgColor: "#5841D4",
  },
  {
    image: "/clients/client3.webp",
    name: "David Miller",
    description:
      "Qashnova's expertise in SEO & SEM optimisation is truly unparalleled. Before them, we struggled to rank for key terms, but their diligent work and data-driven campaigns have put us front and center in search results.",
    bgColor: "#2617B1",
  },
];

const caseStudies = [
  {
    title: "sabir’s grill",
    description:
      "We brought the essence of Sabir’s Grill to life online by blending cultural richness with a sleek, modern interface. Our focus was on creating a seamless browsing experience that highlights their diverse food offerings and rich heritage.",
    image: "/bgCase2.png",
    imgMob: "/bgMoblCase2.png",
  },
  {
    title: "Homeflair",
    description:
      "We designed and developed a responsive e-commerce website for Homeflair, focused on enhancing user experience and showcasing their products. Additionally, we managed targeted social media marketing campaigns to boost traffic and conversions.",
    image: "/bgCase3.png",
    imgMob: "/bgMoblCase3.png",
  },
];

const articals = [
  {
    title: "Mastering SEO in 2025: Your Essential Guide",
    description:
      "Learn the latest SEO strategies and techniques to boost your search rankings and attract more organic traffic to your website this year.",
    route: "/mastering-seo-in-2025-your-essential-guide",
  },
  {
    title: "The Power of Visual Storytelling in Branding",
    description:
      "Discover how compelling visuals and narratives can transform your brand identity and deeply resonate with your audience on every platform.",
    route: "/the-power-of-visual-storytelling-in-branding",
  },
  {
    title: "Social Media Trends You Can't Ignore",
    description:
      "Stay ahead with insights into the most impactful social media trends, and learn how to leverage them for stronger engagement and community building.",
    route: "/social-media-trends-you-cant-ignore",
  },
  {
    title: "Website Redesign Checklist: Avoiding Common Pitfalls",
    description:
      "Planning a new website? This guide offers crucial tips and a checklist to ensure a smooth redesign process and a successful online launch.",
    route: "/website-redesign-checklist-avoiding-common-pitfalls",
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <HeroHome
          firstWord={"Design."}
          secondWord={"Market."}
          thirdWord={"Grow."}
        />
      </header>

      <main role="main">
        <Partness
          slogans={[
            "Your Online Companion",
            "Drive Digital Results",
            "Power Your Brand",
          ]}
        />
        <HowHelp
          heading={{
            line1: "How We ",
            line2: "help",
          }}
          description="Discover our full range of digital marketing services. From strategy
            to execution, we're here to deliver effective solutions that
            help your brand succeed in today's competitive landscape."
          services={services}
        />
        <SectionWithHeadingAndCTA
          heading="Crafting Websites for Your "
          lastword="Success"
        />
        <OurWork
          heading={{
            line1: "Our",
            line2: "work",
          }}
          description="See the passion and precision in every project. Our featured work
            highlights the collaborative journey with our clients, demonstrating
            how we transform visions into impactful digital experiences and
            stunning creative solutions."
          projects={projects}
        />
        <ClientsStories
          heading={{
            line1: "clients’",
            line2: "stories",
          }}
          reviews={reviews}
        />
        <Casestudies
          heading={{ line1: "Case", line2: "Studies" }}
          description=" Explore the pinnacle of creativity with our standout projects that
            blend strategy, design, and innovation. Each campaign is a testament
            to our passion for delivering results that captivate and convert."
          caseStudies={caseStudies}
        />
        <DigitalInsights
          heading={{ line1: "digital", line2: "insights" }}
          description="Dive into our latest articles, expert analysis, and actionable tips.
            Stay informed on the evolving digital landscape and discover
            strategies to propel your business forward."
          articles={articals}
        />
        <ContactUs />
      </main>
    </>
  );
}
