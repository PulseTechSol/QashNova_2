import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { sectionPadding } from "@/app/_utils/themes";

interface HeroSectionProps {
  line1: string;
  line1Mobile: string;
  line2Desktop: string;
  line2Mobile?: string;
  line3Desktop: string;
  line3Mobile?: string;
  isbool?: boolean;
}
const headingStyles = {
  fontWeight: 600,
  color: "#3C65FF",
  fontSize: {
    xs: "45px",
    sm: "66px",
    md: "100px",
    lg: "120px",
    xl: "150px",
  },
};

export default function HeroSection({
  line1,
  line1Mobile,
  isbool = false,
  line2Desktop,
  line2Mobile = "",
  line3Desktop,
  line3Mobile = "",
}: HeroSectionProps) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1440px",
        minHeight: {
          xs: "400px",
          sm: "600px",
          md: "700px",
          xl: "900px",
        },
        padding: sectionPadding,
        background: "linear-gradient(-10deg, #DDDDDD, #ffffffff)",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "350px", sm: "600px", md: "1300px", xl: "1440px" },
          width: "100%",
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
            lineHeight: { sm: "50px", md: "110px", xl: "150px" },
            mt: { xs: "40px", sm: "60px", lg: "80px" },
            ...headingStyles,
            flexWrap: "nowrap",
            display: { xs: "none", sm: "block" },
          }}
        >
          {line1}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            // lineHeight: { md: "110px", xl: "150px" },
            mt: { xs: "40px", sm: "60px", lg: "80px" },
            ...headingStyles,
            flexWrap: "nowrap",
            display: { xs: "block", sm: "none" },
          }}
        >
          {line1Mobile}
        </Typography>

        {/* Line 2 (Desktop & Mobile) */}
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            textAlign: "end",
            lineHeight: { md: "110px", xl: "150px" },
            ...headingStyles,
          }}
        >
          {line2Desktop}
        </Typography>
        {line2Mobile && (
          <Typography
            sx={{
              // maxWidth: "366px",
              width: "100%",
              display: { xs: "block", sm: "none" },
              textAlign: isbool ? "end" : "end",
              lineHeight: { xs: "40px" },
              ...headingStyles,
              whiteSpace: "nowrap",
            }}
          >
            {line2Mobile}
          </Typography>
        )}

        {/* Line 3 (Desktop & Mobile) */}
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            textAlign: "left",
            lineHeight: { sm: "50px", md: "110px", xl: "150px" },
            ...headingStyles,
          }}
        >
          {line3Desktop}
        </Typography>
        {line3Mobile && (
          <Typography
            sx={{
              display: { xs: "block", sm: "none" },
              textAlign: "left",
              maxWidth: "370px",
              width: "100%",
              ...headingStyles,
              whiteSpace: "nowrap",
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
            left: { xs: 36, md: 313 },
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
            top: { xs: 205, sm: 400, lg: 523 },
            left: { xs: "30%", sm: -53 },
            display: isbool ? { xs: "none", sm: "block" } : { sm: "block" },
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
            // bgcolor: "red",
            width: { xs: "61px", md: "114px" },
            height: { xs: "61px", md: "114px" },
            position: "absolute",
            top: { xs: 310, sm: 300, lg: 330, xl: 440 },
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
