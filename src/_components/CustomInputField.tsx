"use client";
import React, { forwardRef } from "react";
import { Box, FormLabel } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";

interface CustomInputFieldProps {
  label: string;
  inputType?: string;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
}

const CustomInputField = forwardRef<
  HTMLInputElement,
  CustomInputFieldProps & React.ComponentPropsWithoutRef<"input">
>(
  (
    {
      label,
      inputType = "text",
      multiline = false,
      rows = 1,
      error = false,
      helperText = "",
      ...rest
    },
    ref
  ) => {
    return (
      <Box sx={{ width: "100%" }}>
        <FormLabel
          sx={{
            color: "#FFFFFF",
            fontSize: localFontSize.p2,
            marginBottom: { xs: "10px", md: "15px" },
            display: "block",
          }}
        >
          {label}
        </FormLabel>

        <Box
          sx={{
            borderRadius: "15px",
            border: "2px solid transparent",
            backgroundImage: `linear-gradient(#000, #000),
              linear-gradient(90deg, #3C65FF, #8A38F5, #2617B1)`,
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            padding: "1px",
          }}
        >
          <Box
            component={multiline ? "textarea" : "input"}
            ref={ref}
            rows={multiline ? rows : undefined}
            type={inputType}
            {...rest}
            sx={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "13px",
              backgroundColor: "#000",
              color: "#FFFFFF",
              fontSize: localFontSize.p3.lg,
              border: "none",
              resize: "none",
              outline: "none",
            }}
          />
        </Box>

        {helperText && (
          <Box
            sx={{
              color: error ? "#FF6B6B" : "#CCCCCC",
              fontSize: localFontSize.p2,
              marginTop: "8px",
            }}
          >
            {helperText}
          </Box>
        )}
      </Box>
    );
  }
);

CustomInputField.displayName = "CustomInputField";

export default CustomInputField;
