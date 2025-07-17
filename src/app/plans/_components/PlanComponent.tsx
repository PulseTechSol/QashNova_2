import { localFontSize } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import React from "react";

interface PlanProps {
  plan: string;
  desc: string;
  price: string;
  listItems: string[];
}

export default function PlanComponent({
  plan,
  desc,
  price,
  listItems,
}: PlanProps) {
  return (
    <Box
      sx={{
        // maxWidth: "360px",
        width: "360px",
        minHeight: "550px",
        borderRadius: "30px",
        padding: "20px 10px",
        backgroundImage:
          "linear-gradient(to bottom, #313e74, #37305e, #29254a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #FFFFFF66",
        transitionImage: "all 5s ease-in",
        "&:hover": {
          backgroundImage:
            "linear-gradient(to bottom, #3c63fd, #5642d5, #2b1cb6)",
          "& [data-section='plan']": {
            color: "#fff", // hover white
          },
          "& [data-section='price']": {
            color: "#fff", // hover white
          },
        },
      }}
    >
      {plan === "Standard" && (
        <Box
          sx={{
            maxWidth: "170px",
            width: "100%",
            margin: "0px auto 20px",
            borderRadius: "10px",
            padding: "5px",
            background: "linear-gradient(to right, #3C65FF, #5841D4, #2617B1)",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              fontWeight: "500",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            Recommended
          </Typography>
        </Box>
      )}
      <Typography
        data-section="plan"
        sx={{
          fontSize: localFontSize.h4,
          fontWeight: "500",
          textAlign: "center",
          color: "#3C65FF",
          margin: "0px auto 20px",
          transition: "color .5s ease-in-out",
        }}
      >
        {plan}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p1,
          fontWeight: "400",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {desc}
      </Typography>
      <Typography
        data-section="price"
        sx={{
          fontSize: localFontSize.h5,
          fontWeight: "500",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#3C65FF",
          margin: "20px auto",
          transition: "color .5s ease-in-out",
        }}
      >
        {price}
      </Typography>
      <Box
        component="ul"
        sx={{
          paddingLeft: "30px",
          "& li": {
            fontSize: localFontSize.p2,
            color: "#FFFFFF80",
            fontWeight: "400",
            listStyleType: "disc",
          },
        }}
      >
        {listItems.map((list, i) => (
          <li key={i}>{listItems[i]}</li>
        ))}
      </Box>
    </Box>
  );
}
