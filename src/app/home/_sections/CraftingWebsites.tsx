import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function CraftingWebsites() {
  return (
    <>
      <Box sx={{ background: "linear-gradient(30deg, #DDDDDD, #ffffffff)" }}>
        <Box
          sx={{
            position: "relative",
            maxWidth: "1440px",
            width: "100%",
            padding: sectionPadding,
            margin: "auto",
            gap: { xs: "0" },
          }}
        >
          <Typography
            sx={{
              maxWidth: "1440px",
              width: "100%",
              textAlign: { xs: "center" },
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textTransform: "uppercase",
              mb: { xs: "40px", lg: "80px" },
              fontSize: localFontSize.h1,
              fontWeight: 600,
            }}
          >
            Crafting Websites for Your Success
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex" },
              alignItems: { xs: "center" },
              justifyContent: "center",
            }}
          >
            <ButtonComponent
              label="Learn How"
              imgSrc={svgs.whiteArrow}
              sx={{
                background: { xs: "#3C65FF", md: "#3C65FF" },
                color: { xs: "#fff" },
                borderRadius: "50px",
                border: "2px solid #3C65FF",
                maxWidth: "280px",

                // maxWidth:
              }}
            />
          </Box>
          <Box
            sx={{
              width: "391px",
              height: "41px",
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: 700,
              left: 750,
            }}
          >
            <Image
              src={svgs.line}
              alt="line"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
