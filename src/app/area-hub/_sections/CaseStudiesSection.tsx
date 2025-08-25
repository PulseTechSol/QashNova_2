import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import CaseStudyCard from "../_components/CaseStudyCard";
import pngs from "@/_assets/pngs";
// import Image, { StaticImageData } from "next/image";
// import svgs from "@/_assets/svgs";
export default function CaseStudiesSection() {
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
        {/* this is heading  */}
        <Typography
          sx={{
            fontSize: {
              ...localFontSize.h4,
              xl: localFontSize.h4.lg,
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
        {/* the card section  */}
        <Box sx={{}}>
          <CaseStudyCard
            index={0}
            title="Rotherham Bakery — Online Orders Success"
            image={pngs.rotherhamBakeryOnlineOrdersSuccess}
            bullets={[
              {
                label: "Challenge",
                text: "Challenge: Outdated site with no online ordering system",
              },
              {
                label: "Solution",
                text: "New ecommerce site with clear product pages and local delivery options",
              },
              {
                label: "Result",
                text: "45% increase in online orders within 3 months",
              },
            ]}
          />
        </Box>
      </Box>
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
