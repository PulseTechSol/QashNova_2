import React from "react";
import PlanComponent from "../_components/PlanComponent";
import { Box, Typography } from "@mui/material";
import { localFontSize, maxWidth, sectionPaddingY } from "@/app/_utils/themes";

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
        maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
        width: "100%",
        margin: "auto",
        paddingY: sectionPaddingY,
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          maxWidth: {
            xs: "400px",
            sm: "400px",
            md: "600px",
            lg: "715px",
            xl: "900px",
            xxl: "1100px",
          },
          width: "100%",
          margin: { xs: "0px auto 30px", md: "0px auto 60px" },
          position: "relative",
          zIndex: 99,
          mb: { xl: "100px" },
        }}
      >
        <Typography
          sx={{
            fontSize: localFontSize.h3,
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#3C65FF",
            lineHeight: { xs: "60px", md: "80px", lg: "120px", xl: "150px" },
          }}
        >
          Find Your
        </Typography>
        <Typography
          sx={{
            fontSize: localFontSize.h3,
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#3C65FF",
            textAlign: "right",
            lineHeight: { xs: "60px", md: "80px", lg: "120px", xl: "150px" },
          }}
        >
          Perfect Plan
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", xl: "nowrap" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", xxl: "50px" },
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
    </Box>
  );
}
