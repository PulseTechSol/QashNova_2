import { localFontSize } from "@/app/_utils/themes";
// import { localFontSize } from "@/utils/themes";
import { Button, CircularProgress, SxProps, Theme } from "@mui/material";
// import { useMediaQuery, useTheme } from "@mui/material";
// import { Box } from "@mui/system";

import Image, { StaticImageData } from "next/image";
import React from "react";

type ButtonComponentProps = {
  imgSrc?: string | StaticImageData;
  label?: string;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
};

export default function ButtonComponent({
  imgSrc,
  label = "Learn More",
  sx = {},
  type = "button",
  loading,
  onClick,
}: ButtonComponentProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // maxWidth: "170px",
        width: "max-content",
        height: { xs: "60px", md: "60px" },
        padding: { xs: "15px 40px", md: "15px 40px" },
        gap: { xs: "6px", md: "10px" },
        fontSize: localFontSize.p3,
        fontWeight: 300,
        borderRadius: "50px",
        // outline: "none",
        textTransform: "capitalize",
        // bgcolor:"#DDDDD"
        bgcolor: "#3C65FF80",
        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#D8B282" }} />
      ) : (
        <>
          {label}
          {imgSrc && (
            <Image
              // style={{ display: imgSrc === "" ? "block" : "none" }}
              loading="lazy"
              src={imgSrc}
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </>
      )}
    </Button>
  );
}
