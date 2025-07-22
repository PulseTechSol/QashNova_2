import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <>
      <Box sx={{ backgroundColor: "#000000 !important", position: "relative" }}>
        <Box
          sx={{
            backgroundColor: "#000000 !important",
            padding: sectionPadding,
            margin: "auto",
            maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "200px", sm: "250px", md: "477px", xl: "800px" },
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start", sm: "start" },
              }}
            >
              get in
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              touch
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            {/* contactus form there */}
            <ContactUsForm />
          </Box>
        </Box>
      </Box>
    </>
  );
}
