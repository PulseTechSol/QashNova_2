import { localFontSize } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import React from "react";

interface GenericHeadingBoxProps {
  heading1?: string;
  heading2?: string;
}

export default function GenericHeadingBox({
  heading1,
  heading2,
}: GenericHeadingBoxProps) {
  return (
    <Box
      sx={{
        maxWidth: { xs: "300px", sm: "555px" },
        width: "100%",
        textTransform: "capitalize",
      }}
    >
      <Typography
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: "#3C65FF",
          textAlign: { xs: "start" },
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
          textAlign: { xs: "center", md: "center", lg: "end" },
        }}
      >
        {heading2}
      </Typography>
    </Box>
  );
}
