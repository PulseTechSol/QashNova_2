import React from "react";
import PlanComponent from "../_components/PlanComponent";
import { Box, Typography } from "@mui/material";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
// import Image from "next/image";
// import pngs from "@/_assets/pngs";

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
        overflow: "hidden",
        position: "relative",
        background: "#000",
        px: sectionPaddingX,
      }}
    >
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
              color: "#fff",
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
              color: "#fff",
              textAlign: "right",
              lineHeight: { xs: "60px", md: "80px", lg: "120px", xl: "150px" },
            }}
          >
            Perfect Plan
          </Typography>
        </Box>

        <Typography
          data-aos={"fade-left"}
          data-aos-duration="500"
          sx={{
            width: "100%",
            fontSize: localFontSize.p1,
            fontWeight: 400,
            color: "#FFFFFF80",
            display: { xs: "none", md: "block" },
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Our plans are designed to give every business the right foundation to
          grow online. Whether you need a simple landing page, a professional
          website for your small business or a fully integrated e-commerce
          platform, we have an option to suit your goals. Each package includes
          secure hosting, a custom domain and responsive design as standard.
          From our affordable Basic plan to our advanced Premium solution, you
          can choose the level of functionality and support that best matches
          your needs. Whatever stage your business is at, we make sure your
          website is built to perform and scale.
        </Typography>

        <Typography
          sx={{
            fontSize: localFontSize.p1,
            fontWeight: 400,
            color: "#FFFFFF80",
            textAlign: { xs: "center", md: "start" },
            display: { xs: "block", md: "none" },
            marginBottom: 10,
          }}
        >
          Our plans are designed to give every business the right foundation to
          grow online. Whether you need a simple landing page, a professional
          website for your small business or a fully integrated e-commerce
          platform, we have an option to suit your goals. Each package includes
          secure hosting, a custom domain and responsive design as standard.
          From our affordable Basic plan to our advanced Premium solution, you
          can choose the level of functionality and support that best matches
          your needs. Whatever stage your business is at, we make sure your
          website is built to perform and scale.
        </Typography>
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
      {/* the positioned images are there */}
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: { xs: "block" },
          position: "absolute",
          left: -13,
          top: 2,
          zIndex: 19,
          // bgcolor: "red",
        }}
      >
        <Image
          src={pngs.howHeplLG}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: { xs: "none", sm: "block" },
          position: "absolute",
          left: -13,
          zIndex: 19,

          bottom: { xs: 0, md: 1 },
          transform: "rotate(270deg)",
        }}
      >
        <Image
          src={pngs.howHeplLG}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "1000px" },
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: 2,
          zIndex: 1,
          // bgcolor: "red",
          right: 0,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
