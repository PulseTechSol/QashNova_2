/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import svgs from "@/_assets/svgs";
import { toast } from "react-toastify";
import axios from "axios";

interface EmailInputBoxProps {
  buttonLabel: string;
  isbool?: boolean;
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const EmailInputBox: React.FC<EmailInputBoxProps> = ({
  buttonLabel,
  isbool = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "/api/landingPage",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        toast.success("Form submitted successfully!");
        setEmail("");
      } else {
        toast.error("Submission failed! Please try again.");
      }
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        maxWidth: { xs: "270px", sm: "300px", md: "405px" },
        width: "100%",
        zIndex: 111,
        display: "flex",
        bgcolor: "#fff",
        height: { sm: 60 },
        justifyContent: { xs: "center" },
        alignItems: "center",
        gap: "5px",
        borderRadius: "40px",
        border: isbool ? "0" : "3px solid #3C65FF",
        padding: {
          xs: "8px 10px",
          sm: "10px 8px 10px 10px",
          md: "20px 8px 20px 20px",
        },
      }}
    >
      <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={
          isbool
            ? isMobile
              ? "Enter your Email"
              : "Enter your Email"
            : isMobile
            ? "Email"
            : "Enter your Email"
        }
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          width: "100%",
          maxWidth: { xs: "230px", md: "unset" },
          backgroundColor: "transparent",
          p: 0,
          "& input": {
            padding: 0,
          },
          "& .MuiOutlinedInput-root": {
            padding: 0,
            "&.Mui-focused": {
              backgroundColor: "transparent",
              color: "#000",
            },
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
            color: "#000",
          },
          "& input:not(:placeholder-shown)": {
            backgroundColor: "transparent",
            color: "#000",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            p: "0",
            backgroundColor: "transparent",
            color: "#000",
          },
        }}
      />

      <Box sx={{ display: { xs: "block" } }}>
        <ButtonComponent
          label={buttonLabel}
          imgSrc={svgs.whiteArrow}
          onClick={onSubmit}
          loading={loading}
          sx={{
            background: "#3C65FF",
            color: "#fff",
            borderRadius: "50px",
            fontSize: { xs: "12px" },
            padding: { xs: "10px 1px 10px 8px", sm: "10px 30px" },
            border: "2px solid #3C65FF",
            height: { xs: "30px", sm: "40px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default EmailInputBox;
