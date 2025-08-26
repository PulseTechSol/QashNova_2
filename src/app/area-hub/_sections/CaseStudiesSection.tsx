import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import CaseStudyCard, { BulletItem } from "../_components/CaseStudyCard";
import { StaticImageData } from "next/image";

type CaseStudy = {
  title: string;
  image: StaticImageData;
  bullets: BulletItem[];
};

type CaseStudiesData = {
  sectionHeading: string;
  cards: CaseStudy[];
};

type CaseStudiesSectionProps = {
  data: CaseStudiesData;
};
export default function CaseStudiesSection({ data }: CaseStudiesSectionProps) {
  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          padding: sectionPadding,
          margin: "auto",
          gap: "80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Typography
         data-aos="zoom-in"
            data-aos-duration="500"
          sx={{
            fontSize: {
              xs:"32px",
              md:localFontSize.h4.md,
              lg: localFontSize.h4.lg,
              xxl: localFontSize.h4.lg,
            },
            fontWeight: 500,
            color: "#000",
            textTransform: "capitalize",
            maxWidth: "630px",
            textAlign: "center",
            margin: "auto",
            paddingBottom: { xs: "30px", md: "40px", lg: "80px" },
          }}
        >
          Recent Rotherham Projects
        </Typography>

        {/* Map Cards */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "40px", md: "60px" },
            flexDirection: "column",
            width: "100%",
          }}
          >
          {data.cards.map((card, index) => (
            <CaseStudyCard
            
              key={index}
              index={index}
              totalCards={data.cards.length}
              title={card.title}
              image={card.image}
              bullets={card.bullets}
            />
          ))}
        </Box>
      </Box>

      {/* blur circle (unchanged) */}
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "25vw", lg: "30%", xxl: "20%" },
          width: "100%",
          position: "absolute",
          left: "0px",
          bottom: { xs: "-2%", lg: "10%" },
          zIndex: 1,
          transform: {
            xs: "translate(-20%, -10%)",
            lg: "translate(-40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.2)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
