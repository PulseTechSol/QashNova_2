import { localFontSize } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import React from "react";

interface GenericHeadingBoxProps {
  heading1?: string;
  heading2?: string;
  isbool?: boolean;
}

export default function GenericHeadingBox({
  heading1,
  heading2,
  isbool = false,
}: GenericHeadingBoxProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        // bgcolor: "#f8f6f62d",
        maxWidth: {
          xs: isbool ? "250px" : "350px",
          sm: isbool ? "310px" : "400px",
          md: "540px",
          xl: "600px",
          xxl: "800px",
        },
        width: "100%",
        textTransform: "capitalize",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: isbool ? "#fff" : "rgba(0, 0, 0, 1)",
          textAlign: isbool ? "center" : "left",
          lineHeight: {
            xs: "50px",
            md: "80px",
            lg: "100px",
            xl: "120px",
            xxl: "150px",
          },
          textWrap: "inherit",
        }}
      >
        {heading1}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          color: isbool ? "#fff" : "rgba(0, 0, 0, 1)",
          fontSize: localFontSize.h3,
          fontWeight: 600,
          // ml:{xs:"10px",}
          lineHeight: {
            xs: "50px",
            md: "80px",
            lg: "100px",
            xl: "120px",
            xxl: "150px",
          },
          textAlign: {
            xs: isbool ? "end" : "center",
            md: isbool ? "end" : "center",
            lg: "end",
          },
          textWrap: "inherit",
        }}
      >
        {heading2}
      </Typography>
    </Box>
  );
}
