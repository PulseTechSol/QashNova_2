"use client";

import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";
import ButtonComponent from "@/_components/ButtonComponent";
import svgs from "@/_assets/svgs";

type DigitalInsightCardProps = {
  heading: string;
  description: string;
  backgroundImage?: string;
  onClick?: () => void;
};

export default function DigitalInsightCard({
  heading,
  description,
  backgroundImage,
  onClick,
}: DigitalInsightCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: { xs: "20px", md: "40px" },
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(to right, #fff, #eee)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 4px 40px 0px #00000040",
        padding: {
          xs: "40px 24px",
          sm: "40px 25px",
          md: "40px 30px",
          xl: "40px",
          xxl: "50px 60px",
        },
        borderRadius: "40px",
        maxWidth: {
          xs: "360px",
          sm: "380px",
          md: "350px",
          lg: "430px",
          xl: "580px",
          xxl: "800px",
        },
        width: "100%",
        height: {
          xs: "370px",
          sm: "400px",
          md: "430px",
          lg: "475px",
          xl: "585px",
          xxl: "650px",
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: backgroundImage ? "#fff" : "#000000",
            fontSize: localFontSize.h5,
            fontWeight: 500,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: backgroundImage ? "rgba(255, 255, 255, 0.5)" : "#00000080",
            fontSize: localFontSize.p2,
            fontWeight: 500,
            paddingTop: { xs: "10px", md: "15px", lg: "20px" },
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>
      <ButtonComponent
        onClick={onClick}
        label="Read more"
        imgSrc={svgs.whiteArrow}
        sx={{
          background: { xs: "#3C65FF", md: "#3C65FF" },
          color: { xs: "#fff" },
          borderRadius: "50px",
          maxWidth: { xs: "280px", xl: "360px" },
        }}
      />
    </Box>
  );
}
