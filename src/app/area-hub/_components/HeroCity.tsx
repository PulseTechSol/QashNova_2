import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";

export default function HeroCity() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: { md: "600px", lg: "864px" } }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: localFontSize.h6,
              fontWeight: 600,
              color: "#3C65FF",
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: "40px",
              // lineHeight:"100px",
              textTransform: "uppercase",
            }}
          >
            Website Design in Rotherham
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#00000080",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Crafting bespoke websites in Rotherham. We blend stunning aesthetics
            with powerful functionality. Our designs are tailored to elevate
            your brand.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
