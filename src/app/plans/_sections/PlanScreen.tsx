"use client";
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

interface PlanCard {
  plan: string;
  price: string;
  points: string[];
  description: string;
}

interface FindYourPerfectPlan {
  heading1: string;
  heading2: string;
  planCards: PlanCard[];
  description: string;
}

export default function PlanScreen({
  findYourPerfectPlan,
}: {
  findYourPerfectPlan: FindYourPerfectPlan;
}) {
  console.log(findYourPerfectPlan, "findYourPerfectPlan");
  return (
    <Box
      component="section" // semantics only (no visual change)
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
        {/* Heading (unchanged look) */}
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
            component="h1"
            aria-label="Find Your Perfect Plan" // better semantics; same visuals
            sx={{
              fontSize: localFontSize.h3,
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#fff",
              lineHeight: { xs: "60px", md: "80px", lg: "120px", xl: "150px" },
            }}
          >
            {findYourPerfectPlan?.heading1}
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: localFontSize.h3,
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#fff",
              textAlign: "right",
              lineHeight: { xs: "60px", md: "80px", lg: "120px", xl: "150px" },
            }}
          >
            {findYourPerfectPlan?.heading2}
          </Typography>
        </Box>

        {/* Single intro paragraph (replaces duplicate mobile/desktop copies) */}
        <Typography
          data-aos={"fade-left"}
          data-aos-duration="500"
          paragraph
          sx={{
            width: "100%",
            fontSize: localFontSize.p1,
            fontWeight: 400,
            color: "#FFFFFF80",
            textAlign: "center",
            marginBottom: 10,
            maxWidth: {
              xs: maxWidth,
              md: "900px",
              xl: "1136px",
              xxl: "1536px",
            },
            mx: "auto",
          }}
        >
          {findYourPerfectPlan?.description}
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
          {findYourPerfectPlan?.planCards?.map((data, i) => (
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

      {/* Decorative images (unchanged visuals) */}
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: { xs: "block" },
          position: "absolute",
          left: -13,
          top: 2,
          zIndex: 19,
        }}
      >
        <Image
          src={pngs.howHeplLG}
          alt="" // decorative
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
          alt="" // decorative
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
          right: 0,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="" // decorative
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
