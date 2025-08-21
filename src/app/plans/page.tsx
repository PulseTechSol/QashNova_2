import React from "react";
import PlanScreen from "./_sections/PlanScreen";
import HeroSection from "@/_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website & Branding Plans | Qashnova",
  description:
    "Choose from Qashnova’s tailored website and branding plans designed for startups, small businesses, and growing brands.",
  alternates: {
    canonical: "https://www.qashnova.com/plans",
  },
};

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
