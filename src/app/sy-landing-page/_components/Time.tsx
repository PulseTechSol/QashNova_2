"use client";

import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";
import { useEffect, useState } from "react";

const TimeBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <Box
      sx={{
        padding: "16px 24px",
        color: "#fff",
        textAlign: "center",
        minWidth: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: localFontSize.h5,
          fontWeight: 500,
          color: "#fff",
        }}
      >
        {value.toString().padStart(2, "0")}
      </Typography>
      <Typography
        sx={{
          letterSpacing: 1,
          fontSize: localFontSize.p3,
          fontWeight: 400,
          color: "#fff",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const CountdownTimer = () => {
  const getTargetTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const target = new Date(`${year}-08-31T23:59:59`);
    return target.getTime();
  };

  const [remainingTime, setRemainingTime] = useState(
    getTargetTime() - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTargetTime() - Date.now();
      setRemainingTime(timeLeft > 0 ? timeLeft : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

  return (
    <Box
      sx={{
        maxWidth: { xs: "300px", sm: "400px", lg: "517px" },
        width: "100%",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(193, 190, 190, 0.36) 0px 2px 4px 0px inset",
        // background: "linear-gradient(145deg, #281b60ff, #07071aff)",
        background: "rgba(255, 255, 255, 0.1)",
        padding: { xs: "5px 2px", sm: "20px" },
      }}
    >
      <TimeBox value={days} label="DAYS" />
      <Typography
        sx={{ fontSize: localFontSize.h4, fontWeight: 600, color: "#fff" }}
      >
        :
      </Typography>
      <TimeBox value={hours} label="HOURS" />
      <Typography
        sx={{ fontSize: localFontSize.h4, fontWeight: 600, color: "#fff" }}
      >
        :
      </Typography>
      <TimeBox value={minutes} label="MINUTES" />
    </Box>
  );
};

export default CountdownTimer;
