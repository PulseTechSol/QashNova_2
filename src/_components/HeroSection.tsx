import { Box, Typography } from "@mui/material";
import { maxWidth, sectionPadding } from "@/app/_utils/themes";

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
  color: "#000",
  fontSize: {
    xs: "45px",
    sm: "60px",
    md: "90px",
    lg: "110px",
    xl: "130px",
    xxl: "190px",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: {
          xs: "400px",
          sm: "600px",
          md: "700px",
          xl: "900px",
        },
        padding: { ...sectionPadding, xxl: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          maxWidth: { xs: maxWidth, xxl: "80vw" },
          width: "100%",
          margin: "auto",
          zIndex: 140,
        }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: {
              xs: "330px",
              sm: "600px",
              md: "1300px",
              lg: "1440px",
              xl: "2000px",
            },
            width: "100%",
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
              lineHeight: { md: "110px", xl: "150px", xxl: "200px" },
              ...headingStyles,
            }}
          >
            {line2Desktop}
          </Typography>
          {line2Mobile && (
            <Typography
              sx={{
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
              maxWidth: "2000px",
              width: "100%",
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
        </Box>
      </Box>
    </Box>
  );
}
