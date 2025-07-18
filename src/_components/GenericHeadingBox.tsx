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
      sx={{
        maxWidth: { xs: "350px", sm: "400px", md: "540px" },
        width: "100%",
        textTransform: "capitalize",
      }}
    >
      <Typography
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: "#3C65FF",
          textAlign: isbool ? "center" : "start",
          lineHeight: { xs: "50px", md: "80px" },
        }}
      >
        {heading1}
      </Typography>
      <Typography
        sx={{
          color: "#3C65FF",
          fontSize: localFontSize.h3,
          fontWeight: 600,
          // ml:{xs:"10px",}
          textAlign: {
            xs: isbool ? "end" : "center",
            md: isbool ? "end" : "center",
            lg: "end",
          },
        }}
      >
        {heading2}
      </Typography>
    </Box>
  );
}
