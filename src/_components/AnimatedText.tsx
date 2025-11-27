"use client";

import { localFontSize } from "@/app/_utils/themes";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

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

export default function AnimatedText({ text }: { text: string }) {
  return (
    <Typography
      component="div"
      sx={{
        // display: "flex",
        // background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // textTransform: "uppercase",
        textWrap: { xl: "nowrap" },
        // fontSize: "inherit",
        // lineHeight: "inherit",
        // fontWeight: "inherit",
        // justifyContent: "center",
        // flexWrap: "wrap",
        // columnGap: "0.25em",
        // maxWidth: { xs: "340px", sm: "unset" },

        fontWeight: 600,
        textTransform: "uppercase",
        color: "#000",
        fontSize: localFontSize.h1,
        lineHeight: {
          xs: "70px",
          sm: "76px",
          md: "115px",
          lg: "130px",
          xl: "160px",
          xxl: "200px",
        },
        textAlign: "left",
      }}
    >
      {text?.split(" ")?.map((word, wordIndex) => (
        <Box key={wordIndex} sx={{ display: "flex" }}>
          {word?.split("")?.map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 + (wordIndex * 5 + charIndex) * 0.055 }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </Box>
      ))}
    </Typography>
  );
}
