"use client";
import { localFontSize, sectionPaddingX } from "@/app/_utils/themes";
import { Box, TextField, Typography } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ButtonComponent from "@/_components/ButtonComponent";
import { toast } from "react-toastify";
import axios from "axios";
import LandingNavbar from "@/_components/LandingNavbar";

const AnimatedText = ({
  text,
  display,
}: {
  text: string;
  display?: ResponsiveStyleValue<
    "none" | "block" | "flex" | "inline-flex" | "inline"
  >;
}) => {
  return (
    <Typography
      component="div"
      sx={{
        display: display,
        background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textTransform: "uppercase",
        textWrap: { xl: "nowrap" },
        fontSize: { xs: "40px", lg: "60px", xl: "69px" },
        lineHeight: { xs: "45px", lg: "70px", xl: "79px" },
        fontWeight: 600,
        justifyContent: "center",
        flexWrap: "wrap",
        columnGap: "0.25em",
        maxWidth: { xs: "361px", sm: "unset" },
      }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <Box key={wordIndex} sx={{ display: "flex" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 + (wordIndex * 5 + charIndex) * 0.038 }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </Box>
      ))}
    </Typography>
  );
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export default function HeroHome() {
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 4000,
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #fff,#DDDDDD)",
      }}
    >
      <LandingNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            zIndex: 111,
            maxWidth: "1440px",
            width: "100%",
            textAlign: "center",
            display: { xs: "flex" },
            justifyContent: { xs: "space-between" },
            alignItems: "center",
            flexDirection: "column",
            paddingX: sectionPaddingX,
            paddingY: { xs: "50px", md: "50px" },
            margin: "auto",
            gap: { xs: "40px", md: "60px", lg: "80px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
              gap: "40px",
            }}
          >
            <AnimatedText
              text="get free website & marketing audit"
              display={"flex"}
            />

            <Typography
              data-aos="zoom-in"
              data-aos-duration="600"
              sx={{
                maxWidth: { xs: "500px", md: "864px" },
                width: "100%",
                fontSize: localFontSize.p1,
                fontWeight: 400,
                color: "#00000080",
                textAlign: { xs: "center" },
              }}
            >
              We build, market, and optimise your online presence so you can
              focus on growing your business locally
            </Typography>
          </Box>
          {/* --------------button and in input */}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              disabled={loading}
              placeholder="Enter Your Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: "361px",

                "& .MuiInputBase-input": {
                  borderRadius: "10px",
                  padding: "10px",
                  border: `1px solid  #3C65FF80`,
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#00000033",
                },
              }}
            />

            <ButtonComponent
              label="Get My Free Audit"
              onClick={onSubmit}
              loading={loading}
              disabled={loading}
              sx={{
                // disabled:loading,
                width: "100%",
                maxWidth: "361px",
                borderRadius: "10px",
                padding: "10px",
                fontWeight: "400",
                fontSize: "16px",
                height: "45px",
                bgcolor: "#3C65FF",
                color: "#fff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                position: "relative",
                zIndex: 0,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 4px)",
                  background:
                    "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
                  backgroundSize: "400%",
                  filter: "blur(5px)",
                  zIndex: -1,
                  opacity: 0,
                  transition: "opacity .3s ease-in-out",
                  borderRadius: "10px",
                  animation: "glowing 20s linear infinite",
                },

                "&:hover::before": {
                  opacity: 1,
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "#3C65FF",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                  borderRadius: "10px",
                },

                "&:active": {
                  color: "#000",
                },
                "&:active::after": {
                  background: "transparent",
                },
              }}
            />
          </Box>
        </Box>
        {/* Background and star icons */}
        <Box
          sx={{
            width: { xs: "355px", md: "500px" },
            height: { xs: "355px", md: "500px" },
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(38, 23, 177, 0.14)",
              filter: "blur(50px)",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
