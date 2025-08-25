import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

export default function HeroCity() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          padding: sectionPadding,
          paddingTop: { xs: "30px", md: "40px", lg: "50px" },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "50px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "#00000080",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Areas Hub
          </Typography>
          <Image src={svgs.arrowRight} alt="arrowRight" />
          <Typography
            sx={{
              fontSize: "18px",
              color: "rgba(60, 101, 255, 1)",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Rotherham
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "600px", lg: "864px" },
            margin: "auto",
          }}
        >
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
