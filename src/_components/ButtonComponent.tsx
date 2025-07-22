import { localFontSize } from "@/app/_utils/themes";
import { Button, CircularProgress, SxProps, Theme } from "@mui/material";

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
        width: "max-content",
        height: { xs: "60px", md: "60px", xxl: "100px" },
        padding: { xs: "15px 40px", md: "15px 40px", xxl: "40px 80px" },
        gap: { xs: "6px", md: "10px" },
        fontSize: localFontSize.p3,
        fontWeight: 300,
        borderRadius: "50px",
        textTransform: "capitalize",
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
