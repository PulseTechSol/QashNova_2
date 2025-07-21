import { localFontSize } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";

interface SectionHeadingLayoutProps {
  heading1: string;
  heading2: string;
  description: string;
  headingAlign?: "start" | "center" | "end";
  descriptionAlign?: "start" | "center" | "end";
}

export default function SectionHeadingLayout({
  heading1,
  heading2,
  description,
}: SectionHeadingLayoutProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "start", sm: "center" },
        flexDirection: { xs: "column", sm: "row" },
        gap: "40px",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "300px", sm: "477px" },
          width: "100%",

          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: localFontSize.h3,
            fontWeight: 600,
            color: "#3C65FF",
            textAlign: { xs: "start" },
            lineHeight: { xs: "50px", md: "70px" },
          }}
        >
          {heading1}
        </Typography>
        <Typography
          sx={{
            color: "#3C65FF",
            fontSize: localFontSize.h3,
            fontWeight: 600,
            textAlign: { xs: "center", sm: "end" },
          }}
        >
          {heading2}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "2px",
          height: 200,
          bgcolor: "#FFFFFF80",
          display: { xs: "none", lg: "block" },
        }}
      />
      <Typography
        sx={{
          maxWidth: "490px",
          width: "100%",
          fontSize: "18px",
          fontWeight: 400,
          color: "#FFFFFF80",
          textAlign: { xs: "end", sm: "start" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
