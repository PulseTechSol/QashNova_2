import React from "react";
import DigitalInsights from "./_sections/DigitalInsights";
import HeroSection from "@/_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qashnova Blog | Tips on Websites, Branding & Business Growth",
  description:
    "Read expert insights from Qashnova on websites, branding, SEO, and digital strategies to grow your business online.",
  alternates: {
    canonical: "https://www.qashnova.com/blogs",
  },
};

export default function Blogs() {
  return (
    <>
      <HeroSection
        line1="Navigate"
        line2Desktop="the Future"
        line3Desktop="of Digital"
        line1Mobile="Navigate"
        line2Mobile="the Future"
        line3Mobile="of Digital"
        isbool={true}
      />
      <DigitalInsights />
    </>
  );
}
