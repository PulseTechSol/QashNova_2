import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
export default function WhyQashnovaSection() {
  return (
    <Box sx={{ bgcolor: "#000", position: "relative" }}>
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
        {/* this is heading  */}
        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: {
              ...localFontSize.h4,
              xl: localFontSize.h4.lg,
              xxl: localFontSize.h4.lg,
            },
            fontWeight: 500,
            color: "#fff",

            textTransform: "capitalize",
          }}
        >
          Why Choose QashNova
        </Typography>
        {/* the card section  */}
        <Box sx={{ maxWidth: "466px" }}>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: localFontSize.p3,
            }}
          >
            Our small-team approach means you&apos;ll deal with the same people
            who build and support your site. Real experience running campaigns
            that deliver results.
          </Typography>
          <Box sx={{ mt: { xs: "20px", md: "60px", lg: "80px" } }}>
            <Image
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={pngs.WhyChooseQashNova}
              alt="qashnova"
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
    </Box>
  );
}
