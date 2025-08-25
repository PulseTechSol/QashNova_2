import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";
export default function OurServicesGenaricSection() {
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
          flexDirection: { xs: "column", xl: "row" },
          gap: "80px",
        }}
      >
        {/* this is heading  */}
        <Typography
          sx={{
            textAlign: { xs: "center", lg: "left" },
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
          services in Rotherham
        </Typography>
        {/* the card section  */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px", md: "40px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", sm: "20px", md: "40px" },
            }}
          >
            <ServiceCard
              text="Ecommerce Websites"
              image={svgs.websiteRedesign}
            />
            <ServiceCard
              text="Ecommerce Websites"
              image={svgs.websiteRedesign}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", sm: "20px", md: "40px" },
              paddingTop: "95px",
            }}
          >
            <ServiceCard
              text="Ecommerce Websites"
              image={svgs.websiteRedesign}
            />
            <ServiceCard
              text="Ecommerce Websites"
              image={svgs.websiteRedesign}
            />
          </Box>
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
  );
}

interface ServiceCardProps {
  text: string;
  image: StaticImageData;
}

export function ServiceCard({ text, image }: ServiceCardProps) {
  return (
    <Box
      sx={{
        padding: { xs: "20px 10px", sm: "30px", md: "50px 30px" },
        backgroundImage:
          "linear-gradient(180deg, #3C65FF 0%, #5841D4 50%, #2617B1 100%)",
        borderRadius: { xs: "20px", md: "40px" },
        width: { xs: "175px", sm: "200px", md: "275px" },
        height: { xs: "175px", sm: "200px", md: "275px" },
        aspectRatio: "1/1",
      }}
    >
      <Box
        sx={{
          height: "60px",
          width: "60px",
          margin: "auto",
          marginBottom: { xs: "10px", sm: "20px" },
        }}
      >
        <Image
          src={image}
          alt={text}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: {
            ...localFontSize.h5,
            xl: localFontSize.h5.lg,
            xs: "20px",
          },
          lineHeight: {
            xs: `calc(${localFontSize.h5.xs} + 5px)`,
            md: `calc(${localFontSize.h5.md} + 5px)`,
            lg: `calc(${localFontSize.h5.lg} + 5px)`,
            xl: `calc(${localFontSize.h5.xl} + 5px)`,
          },
          fontWeight: 500,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
