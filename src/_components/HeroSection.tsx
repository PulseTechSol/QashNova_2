import { Box, Typography } from "@mui/material";
import { maxWidth, sectionPadding } from "@/app/_utils/themes";

interface HeroSectionProps {
  line1: string;
  line1Mobile: string;
  line2Desktop: string;
  line2Mobile?: string;
  line3Desktop?: string;
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
    <Box sx={{ padding: { ...sectionPadding, xxl: "0" } }}>
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
              xs: "380px",
              sm: "600px",
              md: "1300px",
              lg: "1083px",
              xl: "2000px",
            },
            width: "100%",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {/* ✅ Line 1 Desktop (Primary H1) */}
          <Typography
            component="h1"
            variant="h1"
            sx={{
              width: "100%",
              textAlign: "start",
              maxWidth: { sm: "600px", md: "947px" },
              lineHeight: {
                sm: "60px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                xxl: "190px",
              },
              ml: { sm: "30px", lg: "60px" },
              ...headingStyles,
              flexWrap: "nowrap",
              display: { xs: "none", sm: "block" },
            }}
          >
            {line1}
          </Typography>

          {/* ✅ Line 1 Mobile (Same Styling But Not H1 for SEO) */}
          <Typography
            component="p"
            variant="h1"
            sx={{
              mt: "90px",
              textAlign: "start",
              ml: { xs: "20px" },
              lineHeight: { xs: "50px" },
              ...headingStyles,
              flexWrap: "nowrap",
              display: { xs: "block", sm: "none" },
            }}
          >
            {line1Mobile}
          </Typography>

          {/* Line 2 (Desktop) */}
          <Typography
            component="h2"
            variant="h2"
            sx={{
              display: { xs: "none", sm: "block" },
              textAlign: "end",
              lineHeight: {
                sm: "60px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                xxl: "160px",
              },
              ...headingStyles,
            }}
          >
            {line2Desktop}
          </Typography>

          {/* Line 2 (Mobile) */}
          {line2Mobile && (
            <Typography
              component="h2"
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: { xs: "500px" },
                display: { xs: "block", sm: "none" },
                textAlign: isbool ? "end" : "end",
                lineHeight: { xs: "45px" },
                ...headingStyles,
                whiteSpace: "nowrap",
              }}
            >
              {line2Mobile}
            </Typography>
          )}

          {/* Line 3 (Desktop) */}
          <Typography
            component="h3"
            variant="h3"
            sx={{
              width: "100%",
              display: { xs: "none", sm: "block" },
              textAlign: "left",
              lineHeight: {
                sm: "60px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                xxl: "190px",
              },
              ...headingStyles,
            }}
          >
            {line3Desktop}
          </Typography>

          {/* Line 3 (Mobile) */}
          {line3Mobile && (
            <Typography
              component="h3"
              variant="h3"
              sx={{
                display: { xs: "block", sm: "none" },
                textAlign: "left",
                maxWidth: "370px",
                width: "100%",
                lineHeight: { xs: "50px" },
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
