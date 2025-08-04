"use client";
// import pngs from "@/_assets/pngs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
// import Image from "next/image";

export default function SabirSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px" },
          width: "100%",
          p: sectionPadding,
          paddingTop: "0px !important",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="800"
          sx={{
            maxWidth: "1200px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: localFontSize.h5,
              p: { xl: "0 70px" },
              mb: { xs: "40px" },
              fontWeight: 500,
              color: { xs: "#000" },
            }}
          >
            “Qashnova truly elevated Sabir&apos;s Grill&apos;s online presence.
            Their web, social, and SEO work delivered a fantastic site and
            significantly boosted our local business.”
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px" },
              fontWeight: 400,
              color: "#00000080",
            }}
          >
            - Sabir&apos;s Grill
          </Typography>
        </Box>
      </Box>
      {/* opsitioned images  */}
      <Box
        sx={{
          width: "633px",
          height: "633px",
          display: { xs: "none", sm: "block" },
          position: "absolute",
          left: -160,
          bottom: -130,
          zIndex: 1,
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

      <Box
        sx={{
          width: { xs: "300px", md: "790px" },
          height: { xs: "300px", md: "790px" },
          display: { xs: "none", sm: "block" },
          position: "absolute",
          transform: "rotate(180deg)",
          right: 0,
          zIndex: 1,
          top: "0",
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
