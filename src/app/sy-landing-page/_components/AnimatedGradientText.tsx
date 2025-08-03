// "use client";

// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const AnimatedGradientText = ({ text }: { text: string }) => {
//   return (
//     <Typography
//       component="div"
//       sx={{
//         width: "100%",
//         fontSize: { xs: "40px", lg: "60px", xl: "70px" },
//         fontWeight: 600,
//         background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         textTransform: "uppercase",
//         textWrap: { xl: "nowrap" },
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         gap: "0.25em",
//       }}
//     >
//       {text.split(" ").map((word, wordIndex) => (
//         <Box key={wordIndex} sx={{ display: "flex" }}>
//           {word.split("").map((char, charIndex) => (
//             <motion.span
//               key={`${wordIndex}-${charIndex}`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.25, 1, 0.5, 1],
//                 delay: (wordIndex * 10 + charIndex) * 0.05,
//               }}
//               style={{ display: "inline-block" }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </Box>
//       ))}
//     </Typography>
//   );
// };

// export default function HeroHome() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         bgcolor: "#fff",
//         position: "relative",
//         background: "linear-gradient(180deg, #fff,#DDDDDD)",
//       }}
//     >
//       <Box
//         sx={{
//           zIndex: 111,
//           maxWidth: "1440px",
//           width: "100%",
//           textAlign: "center",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexDirection: "column",
//           paddingX: sectionPaddingX,
//           paddingY: { xs: "40px", md: "50px" },
//           margin: "auto",
//           gap: { xs: "40px", md: "60px", lg: "80px" },
//         }}
//       >
//         <Box
//           data-aos="zoom-in"
//           data-aos-duration="800"
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexDirection: "column",
//             width: "100%",
//             textAlign: "center",
//             gap: { xs: "20px", md: "40px" },
//           }}
//         >
//           <AnimatedGradientText text="Grow Online for £200/month" />

//           <Typography
//             sx={{
//               maxWidth: { xs: "500px", md: "864px" },
//               width: "100%",
//               fontSize: localFontSize.p1,
//               fontWeight: 400,
//               color: "#00000080",
//               textAlign: "center",
//             }}
//           >
//             Custom Website + Marketing + SEO for South Yorkshire SMEs -
//             £200/month. We build, market and optimise your site so you can focus
//             on growing your local business.
//           </Typography>
//         </Box>

//         {/* Rest of your component (unchanged) */}
//         {/* You can leave everything else below exactly as it is in your provided code */}
//       </Box>
//     </Box>
//   );
// }
