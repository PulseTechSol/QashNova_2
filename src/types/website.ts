// types/website.ts
export interface WebsiteItem {
  heading1: string;
  heading2: string;
  destopPara: string; // (spelling typo hai, ideally "desktopPara" use karo)
  mobilePara: string;
  image: string; // local path ("/websites/...") ya Strapi absolute URL
  link: string;
  switchSide?: boolean; // optional, because kuch items me missing hai
}

export interface HeroSection {
  mobile: {
    line1: string;
    line2: string;
    line3: string;
  };
  desktop: {
    line1: string;
    line2: string;
    line3: string;
  };
}

export interface WebsitePageData {
  textualContent: {
    heroSection: HeroSection;
    websitesData: WebsiteItem[];
  };
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
}
