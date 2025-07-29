import React from "react";
import PlanScreen from "./_sections/PlanScreen";
import HeroSection from "@/_components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        line1="Custom"
        line1Mobile="Solutions"
        line2Desktop="Plans for"
        line3Desktop="Proven Boom"
        line2Mobile="Built for"
        line3Mobile="Your brand"
        isbool={true}
      />
      <PlanScreen />
    </>
  );
}
