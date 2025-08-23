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
            display: "flex",
            flexDirection: "column",
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
          <Typography
            data-aos={"fade-left"}
            data-aos-duration="500"
            sx={{
              width: "100%",
              fontSize: localFontSize.p1,
              fontWeight: 400,
              color: "#FFFFFF80",
              display: { xs: "none", md: "block" },
              textAlign: "center",
              marginBottom: 10,
              maxWidth: { xs: maxWidth, xl: "1136px", xxl: "1536px" },
            }}
          >
            We would love to hear from you. Whether you have a question about
            our services, need advice on your project or simply want to find out
            how we can help, our team is here to listen. Every enquiry matters
            to us and we aim to respond quickly with clear and helpful answers.
            <br />
            <br />
            Filling out the form above is the easiest way to get in touch. Just
            let us know a little about what you are looking for and we will come
            back to you as soon as possible. If you prefer, you can also reach
            us directly by phone or email and we will be happy to assist.
            <br />
            <br />
            Building strong relationships with our clients starts with a
            conversation, so please do not hesitate to contact us today. We look
            forward to working with you and helping bring your ideas and goals
            to life.
          </Typography>

          <Typography
            sx={{
              fontSize: localFontSize.p1,
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "center", md: "start" },
              display: { xs: "block", md: "none" },
              marginBottom: 10,
            }}
          >
            We would love to hear from you. Whether you have a question about
            our services, need advice on your project or simply want to find out
            how we can help, our team is here to listen. Every enquiry matters
            to us and we aim to respond quickly with clear and helpful answers.
            <br />
            <br />
            Filling out the form above is the easiest way to get in touch. Just
            let us know a little about what you are looking for and we will come
            back to you as soon as possible. If you prefer, you can also reach
            us directly by phone or email and we will be happy to assist.
            <br />
            <br />
            Building strong relationships with our clients starts with a
            conversation, so please do not hesitate to contact us today. We look
            forward to working with you and helping bring your ideas and goals
            to life.
          </Typography>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              width: "100%",
              maxWidth: { xs: maxWidth, xl: "700px", xxl: "1086px" },
            }}
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
    </>
  );
}
