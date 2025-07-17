import React from "react";
import PlanComponent from "../_components/PlanComponent";
import { Box } from "@mui/material";
import { sectionPadding } from "@/app/_utils/themes";

export default function PlanScreen() {
  const plans = [
    {
      plan: "Basic",
      description: "Ideal for Landing Pages with Basic Form Submission.",
      price: "£49 /Month",
      points: [
        "Custom Domain",
        "Hosting",
        "1-Page Responsive Design",
        "Basic Functionality",
      ],
    },
    {
      plan: "Standard",
      description: "The Go-to for most Small/Medium sized Businesses.",
      price: "£99 /Month",
      points: [
        "Custom Domain",
        "Hosting",
        "5-Page Responsive Design",
        "Standard Custom Functionality",
        "Priority Support",
        "Advanced Security",
      ],
    },
    {
      plan: "Premium",
      description: "For Businesses that Mostly Sell Online.",
      price: "£249 /Month",
      points: [
        "Custom Domain",
        "Hosting",
        "10-Page+ Responsive Design",
        "Advanced Custom Functionality",
        "Priority Support",
        "Advanced Security",
        "E-commerce Integration",
        "Admin Panel",
      ],
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        margin: "auto",
        padding: sectionPadding,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: "30px",
        position: "relative",
        zIndex: 99,
      }}
    >
      {plans.map((data, i) => (
        <PlanComponent
          key={i}
          plan={data.plan}
          desc={data.description}
          price={data.price}
          listItems={data.points}
        />
      ))}
    </Box>
  );
}
