import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";
export default function Footer() {
  const headingStyles = {
    fontWeight: 500,
    color: "#3C65FF",
    fontSize: localFontSize.h5,
    textTransform: "capitalize",
    textAlign: { xs: "center", md: "right" },
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box
          sx={{
            padding: sectionPadding,
            maxWidth: "1440px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* image box */}
          <Box
            sx={{
              width: { xs: "100px", md: "150px", lg: "230px" },
              height: "auto",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={svgs.logoFooter}
              alt="logoFooter"
            />
          </Box>
          {/* other nevigations */}
          <Box
            sx={{
              maxWidth: { xs: "400px", md: "440px", lg: "480px", xl: "550px" },
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ ...headingStyles }}>social media</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "20px",
                  flexWrap: "wrap",
                  rowGap: "20px",
                  columnGap: "30px",
                  maxWidth: { xs: "240px", sm: "unset" },
                  margin: "auto",
                }}
              >
                <SocialMediaItem text="facebook" image={svgs.facebook} />
                <SocialMediaItem text="instagram" image={svgs.instagram} />
                <SocialMediaItem text="whatsapp" image={svgs.whatsapp} />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginTop: { xs: "40px", md: "50px", lg: "80px" },
              }}
            >
              <Typography sx={{ ...headingStyles }}>contact</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "20px",
                  flexWrap: "wrap-reverse",
                  rowGap: "20px",
                  columnGap: "30px",
                  maxWidth: { xs: "240px", sm: "unset" },
                  margin: "auto",
                }}
              >
                <SocialMediaItem text="hello@qashnova.com" image={svgs.email} />
                <SocialMediaItem text="0772002392" image={svgs.phone} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

interface SocialMediaItemProps {
  text: string;
  image: StaticImageData;
}

export function SocialMediaItem({ text, image }: SocialMediaItemProps) {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Image style={{ width: "20px", height: "auto" }} src={image} alt={text} />
      <Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: localFontSize.p1,
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
      </Typography>
    </Box>
  );
}
