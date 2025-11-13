"use client";
import {
  localFontSize,
  maxWidth,
  maxWidthxxl,
  sectionPadding,
} from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";
import Link from "next/link";
import pngs from "@/_assets/pngs";
import { usePathname } from "next/navigation";

export default function Footer() {
  const headingStyles = {
    fontWeight: 500,
    color: "#3C65FF",
    fontSize: localFontSize.h5,
    textTransform: "capitalize",
    textAlign: { xs: "center", md: "right" },
  };

  const pathname = usePathname();
  const isAreaHub =
    pathname.includes("area-hub") || pathname.includes("privacy-policy");

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
            display: { xs: "block" },
            position: "absolute",
            left: -13,
            bottom: 1,
            // bgcolor: "red",
            zIndex: 1,
          }}
        >
          <Image
            src={pngs.footerbgImg}
            alt=""
            aria-hidden="true"
            style={{ height: "100%", width: "100%" }}
            loading="lazy"
          />
        </Box>

        <Box
          sx={{
            maxWidth: { xs: maxWidth, xxl: isAreaHub ? "1536px" : maxWidthxxl },
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
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              position: "relative",
              width: { xs: "100px", md: "150px", lg: "230px", xxl: "300px" },
              height: "auto",
              zIndex: 111,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={svgs.logoFooter}
              alt="Qashnova digital agency footer logo"
              loading="lazy"
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
              position: "relative",
              zIndex: 111,
            }}
          >
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{ width: "100%" }}
            >
              <Typography sx={{ ...headingStyles }}>social media</Typography>
              <Box
                data-aos="fade-left"
                data-aos-duration="500"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "20px",
                  flexWrap: "wrap",
                  rowGap: "20px",
                  columnGap: "30px",
                  maxWidth: { xs: "276px", sm: "unset" },
                  margin: "auto",
                }}
              >
                <SocialMediaItem
                  link="https://www.facebook.com/profile.php?id=61572441703298"
                  text="facebook"
                  image={svgs.facebook}
                />
                <SocialMediaItem
                  link="https://www.instagram.com/qashnova1/"
                  text="instagram"
                  image={svgs.instagram}
                />
                <SocialMediaItem
                  link="https://wa.me/447722002392"
                  text="whatsapp"
                  image={svgs.whatsapp}
                />
              </Box>
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{
                width: "100%",
                marginTop: { xs: "40px", md: "50px", lg: "80px" },
              }}
            >
              <Typography sx={{ ...headingStyles }}>contact</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "center",
                    md: "space-between",
                  },
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
                <SocialMediaItem
                  link="tel:+447722002392"
                  text="07722002392"
                  image={svgs.phone}
                />
              </Box>
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{
                width: "100%",
                marginTop: { xs: "40px", md: "50px", lg: "80px" },
              }}
            >
              <Typography sx={{ ...headingStyles }}>Useful Links</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: "12px 30px",
                  alignItems: "start",
                  width: "100%",
                  paddingTop: "20px",
                  maxWidth: { xs: "240px", sm: "unset" },
                  margin: "auto",
                }}
              >
                <LinkItem
                  link="https://www.qashnova.com/websites"
                  text="Websites"
                />
                <LinkItem
                  link="https://www.qashnova.com/branding"
                  text="Branding"
                />
                <LinkItem
                  link="https://www.qashnova.com/case-study"
                  text="Case Study"
                />
                <LinkItem
                  link="https://www.qashnova.com/area-hub"
                  text="Area Hub"
                />
                <LinkItem link="https://www.qashnova.com/plans" text="Plans" />
                <LinkItem link="https://www.qashnova.com/blogs" text="Blog" />
                <LinkItem
                  link="https://www.qashnova.com/privacy-policy"
                  text="Privacy Policy"
                />
                <LinkItem
                  link="https://www.qashnova.com/contact-us"
                  text="Contact Us"
                />
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
            Copyright © 2025. All Rights Reserved.
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
                cursor: "pointer",
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
  link?: string;
}

export function SocialMediaItem({ text, image, link }: SocialMediaItemProps) {
  // Create unique alt text for social media icons
  const altText = link 
    ? `${text} social media icon - follow Qashnova on ${text}`
    : `${text} contact icon - Qashnova ${text}`;
  
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Image
        style={{ width: "20px", height: "auto" }}
        src={image}
        alt={altText}
        loading="lazy"
      />
      {typeof link === "string" ? (
        <Link style={{ textDecoration: "none" }} href={link} target="_blank">
          <Typography
            sx={{
              color: "#000000",
              fontSize: localFontSize.p1,
              textTransform: "capitalize",
              textDecoration: "none",
            }}
          >
            {text}
          </Typography>
        </Link>
      ) : (
        <Typography
          sx={{
            color: "#000000",
            fontSize: localFontSize.p1,
            textTransform: "capitalize",
            textDecoration: "none",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
}

export function LinkItem({ text, link }: { text: string; link?: string }) {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {typeof link === "string" ? (
        <Link href={link} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: localFontSize.p1,
              textTransform: "capitalize",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap", // ✅ stops breaking into 2 lines
              "&:hover": {
                textDecoration: "underline",
                color: "#1976d2",
              },
            }}
          >
            {text}
          </Typography>
        </Link>
      ) : (
        <Typography
          sx={{
            color: "#000000",
            fontSize: localFontSize.p1,
            textTransform: "capitalize",
            whiteSpace: "nowrap", // ✅ same fix for non-links too
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
}
