import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";
export default function SeoSupportSection() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: sectionPadding,
          margin: "auto",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "60px", lg: "80px" },
        }}
      >
        {/* this is heading  */}
        <Box sx={{ maxWidth: "360px" }}>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: {
                ...localFontSize.h4,
                xl: localFontSize.h4.lg,
                xxl: localFontSize.h4.lg,
              },
              fontWeight: 500,
              color: "#000",

              textTransform: "capitalize",
            }}
          >
            Local SEO & Support
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: localFontSize.p3,
            }}
          >
            {`We don't just build attractive sites — we make sure they can be
            found by Rotherham customers`}
          </Typography>
        </Box>

        {/* the card section  */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "40px", sm: "80px" },
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", gap: { xs: "10px", sm: "20px" } }}>
            <FeatureItem
              image={svgs.blueTick}
              title="Google Business Profile"
              subtitle="Setup and optimization included"
            />
            <FeatureItem
              image={svgs.blueTick}
              title="Google Business Profile"
              subtitle="Setup and optimization included"
            />
          </Box>
          <Box sx={{ display: "flex", gap: { xs: "10px", sm: "20px" } }}>
            <FeatureItem
              image={svgs.blueTick}
              title="Google Business Profile"
              subtitle="Setup and optimization included"
            />
            <FeatureItem
              image={svgs.blueTick}
              title="Google Business Profile"
              subtitle="Setup and optimization included"
            />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "300px", md: "25vw", lg: "30%", xxl: "20%" },
            width: "100%",
            position: "absolute",
            left: "0px",
            bottom: { xs: "-2%", lg: "10%" },
            zIndex: 1,
            transform: {
              xs: "translate(-20%, -10%)",
              lg: "translate(-40%, -20%)",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(60, 101, 255, 0.2)",
              filter: "blur(50px)",
              zIndex: -1,
              aspectRatio: "1/1",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

interface FeatureItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

export function FeatureItem({ image, title, subtitle }: FeatureItemProps) {
  return (
    <Box sx={{ maxWidth: "325px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: "8px", sm: "15px" },
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Image style={{ width: "27px" }} src={image} alt={title} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: { xs: "20px", md: "32px" },
              paddingBottom: "20px",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
