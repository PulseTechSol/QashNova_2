"use client";

import { localFontSize } from "@/app/_utils/themes";
import { Box, Button, CircularProgress, SxProps, Theme } from "@mui/material";
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
  labalMob?: string;
};

export default function ButtonComponent({
  imgSrc,
  label = "Learn More",
  sx = {},
  type = "button",
  loading,
  onClick,
}: ButtonComponentProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textWrap: "nowrap",
        maxWidth: hovered
          ? { xs: "130px", md: "145px" }
          : { xs: "120px", md: "135px" },
        width: "100%",
        height: { xs: "40px", md: "60px", xxl: "100px" },
        padding: hovered
          ? { xs: "12px 34px", md: "10px 26px" }
          : { xs: "12px 30px", md: "10px 20px" },
        gap: hovered ? { xs: "8px", md: "12px" } : { xs: "6px", md: "10px" },
        fontSize: localFontSize.p3,
        fontWeight: 300,
        borderRadius: "50px",
        textTransform: "capitalize",
        backgroundColor: "#3C65FF80",
        transition: "all 0.35s ease-in-out", // <--- this smooths all transitions
        ...sx,
        "&:hover": {
          background:
            "linear-gradient(97.1deg, #3C65FF 0%, #5841D4 49.04%, #171C47 100%)",
        },
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
