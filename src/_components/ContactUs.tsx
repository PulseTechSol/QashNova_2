import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import ContactUsForm from "./ContactUsForm";
import ButtonComponent from "./ButtonComponent";
import svgs from "@/_assets/svgs";

export default function ContactUs() {
  return (
    <>
      <Box sx={{ backgroundColor: "#000000" }}>
        <Box
          sx={{
            padding: sectionPadding,
            margin: "auto",
            maxWidth: "1440px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "200px", sm: "250px", md: "477px" },
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
            <Box
              sx={{
                width: "100%",
                mt: { xs: "20px", md: "40px" },
                // display: { xs: "flex" },
                // alignItems: { xs: "center" },
                // justifyContent: "center",
              }}
            >
              <ButtonComponent
                label="Learn How"
                imgSrc={svgs.whiteArrow}
                sx={{
                  background: { xs: "#3C65FF", md: "#3C65FF" },
                  color: { xs: "#fff" },
                  borderRadius: "50px",
                  border: "2px solid #3C65FF",
                  maxWidth: "280px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
