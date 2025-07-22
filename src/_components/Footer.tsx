import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";
import Link from "next/link";
import pngs from "@/_assets/pngs";
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
      <Box
        sx={{
          backgroundColor: "",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "355px", md: "633px" },
            height: { xs: "355px", md: "633px" },
            display: { xs: "block", lg: "block" },
            position: "absolute",
            left: -13,
          }}
        >
          <Image
            src={pngs.howHeplLG}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "300px", md: "790px" },
            height: { xs: "300px", md: "790px" },
            display: { xs: "none", lg: "block" },
            position: "absolute",
            // top: 89,
            right: 0,
          }}
        >
          <Image
            src={pngs.howHeplLGcolor}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: { xs: maxWidth, xxl: "80vw" },
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            padding: sectionPadding,

            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* image box */}
          <Box
            sx={{
              width: { xs: "100px", md: "150px", lg: "230px", xxl: "300px" },
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
              maxWidth: {
                xs: "400px",
                md: "440px",
                lg: "480px",
                xl: "550px",
                xxl: "700px",
              },
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
        <Box
          sx={{
            padding: {
              xs: "20px 20px ",
              sm: "30px 60px ",
              md: "30px 80px ",
              lg: "30px 100px ",
              xl: "30px 150px ",
              xxl: "60px 150px",
            },
            display: { xs: "flex" },
            flexWrap: "wrap",
            gap: { xs: "10px", md: "10px" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: { xs: "center", md: "start" },
            bgcolor: { xs: "#FFFFFF33" },
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: localFontSize.p2,
              color: { xs: "#00000080", md: "#00000080" },
              textAlign: { xs: "center", md: "start" },
              fontWeight: 400,
              "& a": {
                transition: "all 0.4s ease-in-out",
                color: "#00000080",
                "&:hover": {
                  color: "#00000080",
                },
              },
            }}
          >
            Copyright © 2025 A Class Travel Ltd. All Rights Reserved.
          </Typography>
          <Typography
            sx={{
              display: { xs: "block", md: "none" },
              fontSize: localFontSize.p2,
              color: { xs: "#00000080", md: "#00000080" },
              textAlign: { xs: "center", md: "start" },
              fontWeight: 400,
              "& a": {
                transition: "all 0.4s ease-in-out",
                color: "#00000080",
                "&:hover": {
                  color: "#00000080",
                },
              },
            }}
          >
            © 2025 All Rights Reserved.
          </Typography>
          <Typography
            // onClick={() => router.push("/about")}
            sx={{
              fontSize: localFontSize.p2,
              fontWeight: 600,
              color: { xs: "#3C65FF", md: "#3C65FF" },
              textAlign: { xs: "center", md: "start" },

              "& a": {
                transition: "all 0.4s ease-in-out",
                color: "#3C65FF",
                "&:hover": {
                  color: "#0027b4ff",
                },
              },
            }}
          >
            <Link
              href="https://www.qashnova.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "none",
                textDecoration: "none",
              }}
            >
              Powered By Qashnova
            </Link>
          </Typography>
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
