import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

export default function LogoMarquee() {
  const logos = [
    svgs.logo1,
    svgs.logos2,
    svgs.logo3,
    svgs.logo4,
    svgs.logo5,
    svgs.logos6,
    svgs.logos7,
    svgs.logo1,
    svgs.logos2,
    svgs.logo3,
    svgs.logo4,
    svgs.logo5,
    svgs.logos6,
    svgs.logos7,
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #DDDDDD, #ffffff)",
        p: {
          xs: "60px 0px",
          sm: "60px 0px",
          md: "80px 0px",
          lg: "100px 0px",
        },
      }}
    >
      <Marquee speed={40} gradient={false}>
        {logos.map((item, index) => (
          <Box
            key={index}
            sx={{
              mx: { xs: 2, sm: 4 },
              width: { xs: "100px", sm: "120px", md: "150px" },
              height: { xs: "100px", md: "150px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={item}
              alt={`logo-${index}`}
              width={150}
              height={150}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
