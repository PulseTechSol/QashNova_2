import { Box, Typography } from "@mui/material";
import {
  localFontSize,
  maxWidth,
  sectionPadding,
  sectionPaddingY,
} from "@/app/_utils/themes";

interface BlogHeroProps {
  text: string;
  backgroundImage?: string;
}
export default function BlogHero({ text, backgroundImage }: BlogHeroProps) {
  return (
    <>
      <Box sx={{ padding: sectionPadding, position: "relative", zIndex: 100 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            maxWidth: maxWidth,
            width: "100%",
            height: { xl: "555px", xxl: "650px" },
            margin: "auto",
            paddingY: sectionPaddingY,
            paddingX: { xs: "20px", sm: "40px", md: "60px", xxl: "80px" },
            backgroundImage: `url(${backgroundImage || "/bgCase1.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { xs: "20px", md: "40px" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: localFontSize.h3.xs,
                sm: localFontSize.h3.sm,
                md: localFontSize.h3.md,
                lg: localFontSize.h3.lg,
                xl: localFontSize.h3.xl,
              },
              fontWeight: 600,
              color: "#fff",
              lineHeight: {
                xs: "calc(48px + 10px)",
                sm: "calc(54px + 15px)",
                md: "calc(70px + 15px)",
                lg: "calc(100px + 18px)",
                xl: "calc(120px + 20px)",
              },
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              paddingBottom: "10px",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
