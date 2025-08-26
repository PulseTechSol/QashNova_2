"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface FeatureItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

export interface SeoSupportData {
  heading: string;
  description: string;
  features: FeatureItemProps[][];
}

interface SeoSupportSectionProps {
  data: SeoSupportData;
}

export default function SeoSupportSection({ data }: SeoSupportSectionProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "60px", lg: "80px" },
        }}
      >
        {/* heading + description */}
        <Box sx={{ maxWidth: "360px" }}>
          <Typography
          data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: {
                ...localFontSize.h4,
                xl: localFontSize.h4.lg,
                xxl: localFontSize.h4.lg,
              },
              fontWeight: 500,
              color: "#000",
              textTransform: "capitalize",
            }}
          >
            {data.heading}
          </Typography>
          <Typography
          data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: localFontSize.p3,
            }}
          >
            {data.description}
          </Typography>
        </Box>

        {/* features grid */}
        <Box
         data-aos="fade-left"
            data-aos-duration="500"
          sx={{
            display: "flex",
            gap: { xs: "40px", sm: "80px" },
            flexDirection: "column",
          }}
        >
          {data.features.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{ display: "flex", gap: { xs: "10px", sm: "20px" } }}
            >
              {row.map((item, idx) => (
                <FeatureItem
                  key={idx}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function FeatureItem({ image, title, subtitle }: FeatureItemProps) {
  return (
    <Box sx={{ maxWidth: "325px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: "8px", sm: "15px" },
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Image style={{ width: "27px" }} src={image} alt={title} />
        </Box>
        <Box>
          <Typography
           data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: { xs: "20px", md: "32px" },
              paddingBottom: "20px",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
           data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
