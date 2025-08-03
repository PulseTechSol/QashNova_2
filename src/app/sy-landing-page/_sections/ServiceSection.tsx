"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import CountdownTimer from "../_components/Time";
import EmailInputBox from "../_components/EmailInputBox";
// import CountdownTimer from "@/_components/Time";
// import EmailInputBox from "@/_components/EmailInputBox";

export default function ServiceSection() {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        position: "relative",
        zIndex: 111,
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="800"
        sx={{
          position: "relative",
          zIndex: 111,
          maxWidth: { xs: "1440px" },
          width: "100%",
          p: sectionPadding,
          margin: "auto",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1100px",
            boxShadow: "rgba(251, 248, 248, 0.57) 0px 2px 4px 0px inset",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            borderRadius: "50px",
            p: { xs: " 20px", sm: "40px 70px" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h5,
              // mb: { xs: "32p" },
              fontWeight: 500,
              color: { xs: "#fff" },
            }}
          >
            All-in-One Online Presence for Just £200/month.
          </Typography>
          <CountdownTimer />
          <EmailInputBox buttonLabel="Free Audit" isbool={true} />
          <Typography
            sx={{
              fontSize: { xs: "20px" },
              fontWeight: 400,
              color: "#FFFFFF80",
              textTransform: "capitalize",
            }}
          >
            * Only 10 slots left this month for South Yorkshire businesses.
          </Typography>
        </Box>
      </Box>
      {/* the positioned images are there */}
      <Box
        sx={{
          width: { xs: "355px", md: "633px" },
          height: { xs: "355px", md: "633px" },
          display: { xs: "block", lg: "block" },
          position: "absolute",
          left: -13,
          top: 1,
          zIndex: 12,
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
          display: { xs: "block" },
          position: "absolute",
          right: 0,
          top: 1,
          zIndex: 12,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
