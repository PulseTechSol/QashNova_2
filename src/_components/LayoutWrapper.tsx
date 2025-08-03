"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import ClientOnly from "@/_components/ClientOnly";
import Navbar from "@/_components/Navbar";

// Lazy load components
const Footer = dynamic(() => import("@/_components/Footer"), { ssr: false });
const AnimatedBackground = dynamic(
  () => import("@/_components/AnimatedBackground"),
  { ssr: false }
);

// const Navbar = dynamic(() => import("@/_components/Navbar"), { ssr: false });
// const LandingNavbar = dynamic(
//   () => import("../../../qashnova-landing-page/src/_components/Navbar"),
//   { ssr: false }
// );

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/sy-landing-page";

  return (
    <>
      {!isLandingPage && (
        <Box
          sx={{
            position: "relative",
            height: "fit-content",
            overflow: "hidden",
          }}
        >
          <ClientOnly>
            <AnimatedBackground />
          </ClientOnly>
        </Box>
      )}

      {!isLandingPage && <Navbar />}

      <Box sx={{ marginTop: isLandingPage ? 0 : { xs: "96px", sm: "unset" } }}>
        {children}
        {!isLandingPage && <Footer />}
      </Box>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
