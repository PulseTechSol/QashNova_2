"use client";
import { Box, Typography } from "@mui/material";
import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#000000", position: "relative" }}
    >
      <Box
        component="article"
        sx={{
          backgroundColor: "#000000",
          padding: sectionPadding,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
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
              color: "#fff",
              textAlign: { xs: "start", sm: "start" },
              lineHeight: 1.2,
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
              lineHeight: 1.2,
            }}
          >
            touch
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: maxWidth, xl: "1136px", xxl: "1536px" },
            textAlign: { xs: "center", md: "center" },
            mb: 10,
          }}
        >
          <Typography
            paragraph
            sx={{
              fontSize: localFontSize.p1,
              color: "#FFFFFF80",
              mb: 5,
              mt: 5,
            }}
          >
            We would love to hear from you. Whether you have a question about
            our services, need advice on your project or simply want to find out
            how we can help, our team is here to listen. Every enquiry matters
            to us and we aim to respond quickly with clear and helpful answers.
          </Typography>
          <Typography
            paragraph
            sx={{ fontSize: localFontSize.p1, color: "#FFFFFF80", mb: 5 }}
          >
            Filling out the form below is the easiest way to get in touch. Just
            let us know a little about what you are looking for and we will come
            back to you as soon as possible. If you prefer, you can also reach
            us directly by phone or email and we will be happy to assist.
          </Typography>
          <Typography
            sx={{ fontSize: localFontSize.p1, color: "#FFFFFF80", mb: 5 }}
          >
            Building strong relationships with our clients starts with a
            conversation, so please do not hesitate to contact us today. We look
            forward to working with you and helping bring your ideas and goals
            to life.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: maxWidth, xl: "700px", xxl: "1086px" },
            zIndex: 1,
          }}
        >
          <ContactUsForm />
        </Box>

        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "60%",
            backgroundColor: {
              xs: "rgba(88, 65, 212, 1)",
              md: "rgba(88, 65, 212, 0.4)",
            },
            filter: "blur(400px)",
            zIndex: 0,
            transform: "translate(-50%, -50%)",
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
}
