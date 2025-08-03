"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import ClientOnly from "@/_components/ClientOnly";
import AnimatedBackground from "@/_components/AnimatedBackground";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/sy-landing-page";

  return (
    <>
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

      {!isLandingPage && <Navbar />}

      <Box sx={{ marginTop: isLandingPage ? 0 : { xs: "96px", sm: "unset" } }}>
        {children}
        {!isLandingPage &&  <Footer />}
      </Box>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
