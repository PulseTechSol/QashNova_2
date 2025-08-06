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
            position: "relative",
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
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
                color: "#fff",
                textAlign: { xs: "start", sm: "start" },
              }}
            >
              get in
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#fff",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              touch
            </Typography>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{ width: "100%" }}
          >
            {/* contactus form there */}
            <ContactUsForm />
          </Box>
          {/* there is the blurr box */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50%",
              height: "60%",
              backgroundColor: "rgba(88, 65, 212, 0.6)",
              filter: "blur(400px)",
              zIndex: 0,
              transform: "translate(-50%, -50%)",
              aspectRatio: "1/1",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
