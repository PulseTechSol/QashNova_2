"use client";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface OurHubareasCardsProps {
  heading?: string;
  description?: string;
  locations?: Array<{
    title: string;
    description: string;
    route: string;
  }>;
}
export default function OurHubareasCards({
  heading,
  description,
  locations = [],
}: OurHubareasCardsProps) {
  const router = useRouter();

  return (
    <Box sx={{ position: "relative", bgcolor: "#000000", overflow: "hidden" }}>
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          position: "absolute",
          left: -13,
        }}
      >
        <Image
          src={pngs.howHeplLG}
          alt=""
          aria-hidden="true"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "500px", md: "790px" },
          height: { xs: "500px", md: "790px" },
          position: "absolute",
          right: 0,
          transform: "rotate(90deg)",
          bottom: -1,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt=""
          aria-hidden="true"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
          gap: { xs: "40px", md: "80px" },
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            textAlign: "center",
            fontSize: localFontSize.h4,
            fontWeight: 500,
            color: "#fff",

            textTransform: "capitalize",
          }}
        >
          {heading}
        </Typography>

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
            marginBottom: 5,
          }}
        >
          {description}
        </Typography>

        <Typography
          sx={{
            fontSize: localFontSize.p1,
            fontWeight: 400,
            color: "#FFFFFF80",
            textAlign: { xs: "center", md: "start" },
            display: { xs: "block", md: "none" },
            marginBottom: 5,
          }}
        >
          {description}
        </Typography>

        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            width: "100%",
            display: { xs: "flex" },
            justifyContent: "center",
            alignItems: "center",

            flexWrap: { xs: "wrap", lg: "nowrap" },
            overflow: "hidden",
            gap: { xs: "20px", md: "30px" },
          }}
        >
          {locations.map((items, index) => (
            <WhatIncludedCard
              key={index}
              title={items.title}
              description={items.description}
              index={index}
              onClick={() => router.push(items.route)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
type WhatIncludedCardProps = {
  title: string;
  description: string;
  index: number;
  onClick: () => void;
};

export function WhatIncludedCard({
  title,
  description,
  index,
  onClick,
}: WhatIncludedCardProps) {
  return (
    <Box data-aos="zoom-in" data-aos-duration="500" onClick={onClick} sx={{}}>
      <Box
        key={index}
        sx={{
          margin: "auto",
          maxWidth: { xs: "360px" },
          width: "100%",
          height: { xs: "350px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          padding: "33px 35px",
          flexDirection: "column",

          textAlign: "center",
          cursor: "pointer",
          background:
            " linear-gradient(133.39deg, rgba(60, 101, 255, 0.2) 0%, rgba(88, 65, 212, 0.2) 50%, rgba(38, 23, 177, 0.2) 100%)",

          border: "1px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Default content (image + title) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "83px", sm: "60px" },
              width: "100%",
              height: { xs: "83px", sm: "60px" },
            }}
          >
            <Image
              src={svgs.locationhub}
              alt={`${title} area hub location icon - Qashnova local SEO and digital marketing services`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            sx={{
              textAlign: "left",
              textTransform: "capitalize",
              fontSize: "32px",
              textWrap: "nowrap",

              lineHeight: "calc(36px + 4px)",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: "left",

              color: "#FFFFFF80",
              fontSize: "18px",
              fontWeight: 400,
              width: "100%",
              display: "-webkit-box",
              WebkitLineClamp: 5, // kitni lines dikhani hain
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
