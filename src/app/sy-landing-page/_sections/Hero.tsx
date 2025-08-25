"use client";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPaddingX } from "@/app/_utils/themes";
import { Box,  TextField, Typography } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import ButtonComponent from "@/_components/ButtonComponent";
import { toast } from "react-toastify";
import axios from "axios";


// function useHasScrolledPast100vh() {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY || window.pageYOffset;
//       if (scrolled >= window.innerHeight) {
//         setHasScrolled(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return hasScrolled;
// }

const AnimatedText = ({ text,display }: { text: string, display?: ResponsiveStyleValue<"none" | "block" | "flex" | "inline-flex" | "inline">; }) => {
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
  // const isMobile = useMediaQuery("(max-width:900px)");
  // const hasScrolledPast100vh = useHasScrolledPast100vh();

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
      <Navbar />
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
            
           <AnimatedText text="Grow Online for £200/month" display={{ xs: "none", sm: "flex" }} />
           <AnimatedText text="get free website & marketing audit" display={{ xs: "flex", sm: "none" }} />

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


<Box sx={{width:"100%", display :{xs:"flex",sm :"none"},justifyContent:"center",alignItems:"center", flexDirection:"column",gap:"10px"}}>
 <TextField         
          placeholder="Enter Your Email"
          
          type="text"
           value={email}
        onChange={(e) => setEmail(e.target.value)}

       
          sx={{
            width: "100%",
            maxWidth:"361px",
            
           
            

            "& .MuiInputBase-input": {
              borderRadius:"10px",
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
               fontWeight:"400",
              color: "#00000033",
             


            },
          
          }}
        />

  <ButtonComponent
  label="Get My Free Audit"
   onClick={onSubmit}
          loading={loading}
  sx={{
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





          <Box
            sx={{
            
              
              width: "100%",
              textAlign: { xs: "start" },
              display: {xs:"none", sm: "flex" },
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: "20px",
            }}
          >
            {/* Left side */}
            <Box
              sx={{
                maxWidth: { xs: "650px" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                gap: { xs: "10px", md: "10px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: { xs: "10px", md: "10px" },
                }}
              >
                <Box
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="2000"
                  sx={{
                    maxWidth: { xs: "83px", sm: "150px", md: "120px" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={pngs.girl}
                    alt="girl"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="2500"
                  sx={{
                    maxWidth: { xs: "511px" },
                    width: "100%",
                    p: { xs: "10px", sm: "15px", lg: "20px" },
                    borderRadius: { xs: "17px", md: "30px" },
                    background:
                      "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px" },
                      fontWeight: 400,
                      color: "#FFFFFF80",
                    }}
                  >
                    Is your website not attracting Sheffield, Rotherham,
                    Doncaster or Barnsley customers?
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  textAlign: "end",
                  gap: { xs: "10px", md: "10px" },
                }}
              >
                <Box
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="3000"
                  sx={{
                    maxWidth: { xs: "465px" },
                    width: "100%",
                    p: { xs: "10px", sm: "20px", lg: "30px" },
                    textAlign: "end",
                    borderRadius: { xs: "17px", md: "30px" },
                    background:
                      "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px" },
                      fontWeight: 400,
                      color: "#FFFFFF80",
                    }}
                  >
                    Get a bespoke site plus local marketing and SEO - made for
                    South Yorkshire
                  </Typography>
                </Box>
                <Box
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="3000"
                  sx={{
                    maxWidth: {
                      xs: "83px",
                      sm: "150px",
                      md: "103px",
                      xl: "130px",
                    },
                    width: "100%",
                    height: "130px",
                  }}
                >
                  <Image
                    src={pngs.bulb}
                    alt="bulb"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Right side */}
            <Box
              data-aos="fade-left"
              data-aos-duration="600"
              sx={{
                maxWidth: { xs: "468px" },
                width: "100%",
                p: { xs: "30px", md: "20px 30px" },
                textAlign: "center",
                borderRadius: "20px",
                boxShadow: `
                4px 4px 12px rgba(0, 0, 0, 0.25), 
                -4px -4px 12px rgba(255, 255, 255, 0.25)
              `,
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  mb: "20px",
                  color: "#3C65FF",
                  fontSize: localFontSize.p1,
                  fontWeight: 500,
                }}
              >
                Limited time offer. Join before 31 August
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  fontSize: localFontSize.p1,
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#00000080",
                }}
              >
                Trusted by 20+ South Yorkshire businesses.
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  mt: { xs: "10px", md: "20px" },
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={svgs.star}
                    alt="star"
                    style={{ width: 30, height: 30 }}
                  />
                ))}
              </Box>
            </Box>
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
