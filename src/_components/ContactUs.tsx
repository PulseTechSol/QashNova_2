"use client";
import { Box, Typography } from "@mui/material";
import { localFontSize, maxWidth, sectionPadding } from "@/app/_utils/themes";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs({
  heading,
  description,
}: {
  heading?: string;
  description?: string[];
}) {
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
            {heading && heading.split(" ")[0]}{" "}
            {heading && heading.split(" ")[1]}
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
            {heading && heading.split(" ")[2]}
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
          {description?.map((para, idx) => (
            <Typography
              key={idx}
              paragraph
              sx={{
                fontSize: localFontSize.p1,
                color: "#FFFFFF80",
                mb: 5,
                mt: idx === 0 ? 5 : 0,
              }}
            >
              {para}
            </Typography>
          ))}
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
