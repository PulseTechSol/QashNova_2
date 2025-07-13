import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroHome() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "1440px",
          width: "100%",
          padding: sectionPadding,
          margin: "auto",
          display: { xs: "flex", lg: "block" },
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: 4,
        }}
      >
        {/* LEFT SIDE - Heading */}
        <Typography
          sx={{
            mt: { xs: "0", lg: "80px" },
            // maxWidth: "1440px",
            // bgcolor: "green",
            width: "100%",
            fontSize: localFontSize.h1,
            fontWeight: 600,
            background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            textTransform: "uppercase",
          }}
        >
          Ignite Your Digital Impact
        </Typography>

        {/* RIGHT SIDE - Paragraph + Button */}
        <Box
          sx={{
            position: { xs: "static", lg: "absolute" },
            right: 140,
            top: 442,
            // bottom: ,
            maxWidth: "457px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: localFontSize.p1,
              color: "#1B1B1B",
              mb: "40px",
              // lineHeight: 1.6,
            }}
          >
            Dull campaigns? Not on our watch. We specialize in dynamic digital
            marketing that sparks engagement, accelerates growth, and ensures
            your brand captivates every scroll.
          </Typography>
          <Box sx={{}}>
            <ButtonComponent
              sx={{
                // bgcolor: " linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
                bgcolor: "#fff",
                border: "4px solid #8A38F5 ",
                color: "#3C65FF",
              }}
              label="Let’s Chat"
              imgSrc={svgs.siarrowright}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 73,
            left: 213,
          }}
        >
          <Image src={svgs.startDark1} alt="star" />
        </Box>
        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 523,
            left: -53,
          }}
        >
          <Image src={svgs.startDark1} alt="star" />
        </Box>
        <Box
          sx={{
            width: "121px",
            height: "121px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 759,
            right: 213,
          }}
        >
          <Image src={svgs.stars2} alt="star" />
        </Box>
      </Box>
    </Box>
  );
}
