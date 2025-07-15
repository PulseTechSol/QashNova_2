import { Box } from "@mui/material";
import CustomInputField from "./CustomInputField";

export default function ContactUsForm() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "18px", md: "25px" },
        }}
      >
        <CustomInputField label="Name" inputType="text" />
        <CustomInputField label="Phone" inputType="number" />
        <CustomInputField label="Email" inputType="email" />
        <CustomInputField label="Message" inputType="text" />
      </Box>
    </>
  );
}
