// import HeroSection from "@/_components/HeroSection";
import PrivatePolicies from "./_sections/PrivatePolicies";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1536px",
          margin: "auto",
        }}
      >
        <Navbar />
      </Box>
      {/* <Box
        sx={{
          maxWidth: { sm: "600px", md: "900px", lg: "1200px" },
          margin: "auto",
        }}
      >
        <HeroSection
          line1="privacy"
          line1Mobile="privacy"
          line2Desktop="policy"
          line2Mobile="policy"
          // line3Desktop=""
          // line3Mobile=""
        />
      </Box> */}
      <PrivatePolicies
        businessName="Qashnova"
        businessEmail="hello@qashnova.com"
        businessPhone="0772002392"
      />
      <Footer />
    </>
  );
}
