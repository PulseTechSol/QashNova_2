import pngs from "@/_assets/pngs";
import HeroSection from "@/_components/HeroSection";
import WebsiteSection from "@/_components/WebsiteSection";

export default function WebsitesPage() {
  return (
    <>
      <HeroSection
        line1="Where"
        line1Mobile="Where"
        line2Desktop="Design Meets"
        line3Desktop="Performance"
        line2Mobile="Design Meets"
        line3Mobile="Future"
        isbool={true}
      />
      <WebsiteSection
        heading1="Sabir's"
        heading2="Grill"
        destopPara="We transformed Sabir's Grill's online presence by creating a sleek, culturally rich website that blends modern design with intuitive navigation and mobile . The goal was a seamless Browse experience to highlight their diverse offerings and drive online reservations, resulting in a flavorful digital experience mirroring their cuisine's quality and warmth."
        mobilePara="We transformed Sabir's Grill's online presence by creating a sleek, culturally rich website that blends modern design with intuitive navigation and mobile optimisation."
        image={pngs.websites1}
        link="https://www.sabirs.co.uk/"
      />
      <WebsiteSection
        heading1="Saif’s"
        heading2="Boxing"
        destopPara="Saif's Boxing needed a bold online identity to match its energetic gym and community. We delivered a high-impact, mobile-responsive website showcasing training programs, transformations, and class schedules with strength and clarity. Optimized for local search, the site now helps potential clients easily discover and join, reflecting the gym's power and discipline."
        mobilePara="Saif's Boxing needed a bold online identity to match its energetic gym and community. We delivered a high-impact, mobile-responsive website showcasing training programs, transformations, and class schedules with strength and clarity."
        image={pngs.websites2}
        isbool={true}
        link="https://saif-s-boxing.vercel.app/"
      />
      <WebsiteSection
        heading1="a class"
        heading2="travels"
        destopPara="For A Class Travels, we delivered a professional and responsive website encompassing expert web design and development. Our work focused on creating an intuitive platform that effectively showcases their premium chauffeur services, ensuring a seamless user experience for booking and inquiries."
        mobilePara="For A Class Travels, we delivered a professional and responsive website encompassing expert web design and development. Our work focused on creating an intuitive platform that effectively showcases their premium chauffeur services."
        image={pngs.websites3}
        link="https://www.a-class-travel.co.uk/"
      />
      <WebsiteSection
        heading1="izec"
        heading2="prestige"
        destopPara="For Izec Prestige Cars, an executive chauffeur service, we designed and developed a sophisticated and user-friendly website. This platform effectively showcases their premium services, from airport transfers to event travel, ensuring a seamless online experience that reflects their commitment to comfort, professionalism, and luxury."
        mobilePara="For Izec Prestige Cars, an executive chauffeur service, we designed and developed a sophisticated and user-friendly website. This platform effectively showcases their premium services, from airport transfers to event travel."
        image={pngs.websites4}
        isbool={true}
        link="https://izec-prestige.vercel.app/"
      />
      <WebsiteSection
        heading1="Conquest"
        heading2="law"
        destopPara="For Conquest Law Solicitors, a leading legal firm, we designed and developed a professional and authoritative website. This platform effectively presents their diverse legal services for individuals and businesses, fostering trust and clarity while serving as a crucial online hub for client outreach and information."
        mobilePara="For Conquest Law Solicitors, a leading legal firm, we designed and developed a professional and authoritative website."
        image={pngs.websites5}
        link="https://solicitors-website-navy.vercel.app/"
      />
    </>
  );
}
