import React from "react";
import DigitalInsights from "./_sections/DigitalInsights";
import HeroSection from "@/_components/HeroSection";

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
