import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";

interface HeroSectionProps {
  line1: string;
  line2Desktop: string;
  line2Mobile?: string;
  line3Desktop: string;
  line3Mobile?: string;
}

export default function HeroSection({
  line1,
  line2Desktop,
  line2Mobile = "",
  line3Desktop,
  line3Mobile = "",
}: HeroSectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "450px", sm: "600px", md: "calc(100vh - 101px)" },
        background: "linear-gradient(-10deg, #DDDDDD, #ffffffff)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1440px",
          width: "100%",
          padding: sectionPadding,
          margin: "auto",
          background: "linear-gradient(90deg, #3C65FF, #553FD2, #2617B1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {/* Line 1 */}
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: { md: "110px", xl: "150px" },
            mt: { xs: "60px", lg: "80px" },
            fontSize: localFontSize.h1,
            fontWeight: 600,
          }}
        >
          {line1}
        </Typography>

        {/* Line 2 (Desktop & Mobile) */}
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            textAlign: "end",
            lineHeight: { md: "110px", xl: "150px" },
            fontSize: localFontSize.h1,
            fontWeight: 600,
          }}
        >
          {line2Desktop}
        </Typography>
        {line2Mobile && (
          <Typography
            sx={{
              display: { xs: "block", sm: "none" },
              textAlign: "end",
              lineHeight: { xs: "30px" },
              fontSize: localFontSize.h1,
              fontWeight: 600,
            }}
          >
            {line2Mobile}
          </Typography>
        )}

        {/* Line 3 (Desktop & Mobile) */}
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            textAlign: "center",
            lineHeight: { md: "110px", xl: "150px" },
            fontSize: localFontSize.h1,
            fontWeight: 600,
          }}
        >
          {line3Desktop}
        </Typography>
        {line3Mobile && (
          <Typography
            sx={{
              display: { xs: "block", sm: "none" },
              textAlign: "center",
              maxWidth: "370px",
              width: "100%",
              fontSize: localFontSize.h1,
              fontWeight: 600,
            }}
          >
            {line3Mobile}
          </Typography>
        )}

        {/* Decorative Images */}
        <Box
          sx={{
            width: { xs: "89px", sm: "121px" },
            height: { xs: "89px", sm: "121px" },
            position: "absolute",
            top: { xs: 16, lg: 73 },
            left: { xs: 36, lg: 213 },
          }}
        >
          <Image
            src={svgs.startDark1}
            alt="star"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "29px", sm: "121px" },
            height: { xs: "29px", sm: "121px" },
            position: "absolute",
            top: { xs: 210, sm: 400, lg: 523 },
            left: { xs: "25%", sm: -53 },
          }}
        >
          <Image
            src={svgs.startDark1}
            alt="star"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "61px", md: "114px" },
            height: { xs: "61px", md: "114px" },
            position: "absolute",
            top: { xs: 310, sm: 240, lg: 290, xl: 340 },
            right: { xs: 100, sm: -10, lg: 40, xl: 20 },
          }}
        >
          <Image
            src={svgs.stars2}
            alt="star"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "1400px",
            height: "500px",
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 5,
            left: -600,
            overflow: "hidden",
          }}
        >
          <Image
            src={pngs.heroHome}
            alt="hero"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
