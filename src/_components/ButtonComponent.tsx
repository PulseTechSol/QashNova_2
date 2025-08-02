"use client";

import { localFontSize } from "@/app/_utils/themes";
import { Button, CircularProgress, SxProps, Theme, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import svgs from "@/_assets/svgs";

type ButtonComponentProps = {
  imgSrc?: string | StaticImageData;
  label?: string;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
  disableHover?: boolean;
};

export default function ButtonComponent({
  imgSrc,
  label = "Learn More",
  sx = {},
  type = "button",
  loading,
  onClick,
  disableHover,
}: ButtonComponentProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      onMouseEnter={() => !disableHover && setHovered(true)}
      onMouseLeave={() => !disableHover && setHovered(false)}
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
        height: { xs: "60px", md: "60px", xxl: "100px" },
        padding:
          !disableHover && hovered
            ? { xs: "15px 50px", md: "15px 50px", xl: "40px 90px" }
            : { xs: "15px 40px", md: "15px 40px", xl: "40px 80px" },
        gap:
          !disableHover && hovered
            ? { xs: "8px", md: "12px" }
            : { xs: "6px", md: "10px" },
        fontSize: localFontSize.p3,
        borderRadius: "50px",
        textTransform: "capitalize",
        bgcolor: "#3C65FF80",
        textWrap: "nowrap",
        transition: "all 0.35s ease-in-out",
        "&:hover": {
          background:
            "linear-gradient(97.1deg, #3C65FF 0%, #5841D4 49.04%, #171C47 100%)",
          color: "#fff",
          border: "none",
        },
        ...sx,
      }}
    >
      {loading ? (
        <Box
          sx={{
            width: "20px !important",
            height: "20px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            sx={{
              width: "20px !important",
              height: "20px !important",
              color: "#D8B282",
            }}
          />
        </Box>
      ) : (
        <>
          {label}
          {imgSrc && (
            <Image
              loading="lazy"
              src={hovered ? svgs.arrow2 : imgSrc}
              alt="icon"
              style={{
                width: hovered ? "20px" : "15px",
                transition: "all 0.35s ease-in-out",
                transform: hovered ? "scale(1.15)" : "scale(1)",
              }}
            />
          )}
        </>
      )}
    </Button>
  );
}
