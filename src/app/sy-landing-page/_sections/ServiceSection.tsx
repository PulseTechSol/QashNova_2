"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import CountdownTimer from "../_components/Time";
import EmailInputBox from "../_components/EmailInputBox";

export default function ServiceSection() {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        position: "relative",
        zIndex: 111,
        p: sectionPadding,
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
          // p: sectionPadding,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "40px",
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
            padding: {
              xs: "20px",
              sm: "30px 20px",
              md: "40px",
              lg: "40px 80px",
            },
            background:
              "linear-gradient(101.99deg, rgba(60, 101, 255, 0.2) 0%, rgba(88, 65, 212, 0.2) 50.48%, rgba(38, 23, 177, 0.2) 100%)",
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
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.1)",
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
          display: { xs: "block" },
          position: "absolute",
          right: 0,
          top: 1,
          zIndex: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(60, 101, 255, 0.1)",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
