"use client";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import ButtonComponent from "./ButtonComponent";
// import { maxWidth } from "@/app/_utils/themes";
import AOS from "aos";

import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  const toggleDrawer = (open: boolean) => {
    setMenu(open);
  };
  function sidebar() {
    setMenu((p) => !p);
    console.log(menu);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (menu) {
        setMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);
  const navLinks = [
    { text: "home", route: "/" },
    { text: "about", route: "/about-us" },
    { text: "websites", route: "/websites" },
    { text: "Branding", route: "/branding" },
    { text: "case study", route: "/case-study" },
    { text: "plans", route: "/plans" },
    { text: "contact", route: "/contact-us" },
  ];

  return (
    <Box
      sx={{
        top: "0",
        left: "0",
        right: "0",
        zIndex: 20000,
        backgroundColor: { xs: "rgba(255, 255, 255, 0.4)", sm: "transparent" },
        // this is to fix navbar on moble
        position: { xs: "fixed", sm: "relative" },
        width: "100%",
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "row-reverse", md: "row" },
          justifyContent: "space-between",
          gap: { md: "10px", lg: "18px" },
          padding: {
            xs: "20px",
            sm: "20px 40px",
            md: "20px 80px",
            lg: "20px 150px",
          },
          // maxWidth: maxWidth,
          margin: "auto",
        }}
      >
        {/* logo for mobile */}
        <Box
          onClick={() => router.push("/")}
          sx={{
            maxWidth: "43px",
            height: "44px",
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            style={{
              height: "100% !important",
              width: "100% !important",
              cursor: "pointer",
            }}
            src={svgs.mobileLogo}
            alt="logo"
          />
        </Box>
        {/* logo for md */}
        <Box
          onClick={() => router.push("/")}
          sx={{
            maxWidth: "287px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            width={287}
            style={{
              height: "100% !important",
              width: "100% !important",
              cursor: "pointer",
            }}
            src={svgs.logo}
            alt="logo"
          />
        </Box>
        <Box
          onClick={() => router.push("/contact-us")}
          sx={{
            // maxWidth: "280px",
            // width: "100%",
            display: { xs: "none", md: "flex" },
            justifyContent: { xs: "start", md: "center" },
            alignItems: "center",
            gap: "30px",
          }}
        >
          <ButtonComponent
            label="Hire Us"
            imgSrc={svgs.whiteArrow}
            sx={{
              background: { xs: "#3C65FF", md: "#3C65FF" },
              color: { xs: "#fff" },
              borderRadius: "50px",
              maxWidth: { xs: "280px", xl: "360px" },
            }}
          />
          <Box
            onClick={sidebar}
            sx={{
              textAlign: "end",
              display: { xs: "block" },
              cursor: "pointer",
            }}
          >
            <Image
              src={svgs.hamburger}
              alt="hamburger"
              height={50}
              width={50}
            />
          </Box>
        </Box>
      </Box>
      {menu && (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
      )}

      <Box
        onClick={sidebar}
        sx={{
          display: menu ? "block" : "none",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 1000,
        }}
      ></Box>
      <Box
        sx={{
          height: { xs: "auto", md: "650px", lg: "760px" },
          width: { xs: "100vw", sm: "80vw", md: "540px" },
          position: "fixed",
          top: "0px",
          right: "0px",
          transition: "all 0.4s ease-in-out",
          transform: menu ? "translateX(0%)" : "translateX(100%)",
          borderRadius: { xs: "0 40px 0 40px", md: " 40px 0 0 40px" },
          zIndex: 1000,
          background: {
            xs: `linear-gradient(180deg, #FFFFFF, #C5C5C5, #999999)`,
            md: "#fff",
          },
          overflowY: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
        }}
      >
        <Box
          sx={{
            margin: { xs: "10px 20px ", md: "20px " },
            textAlign: { xs: "left", md: "right" },
            cursor: "pointer",
          }}
        >
          <Image
            onClick={sidebar}
            src={svgs.cross}
            alt="kashanimgclose"
            width={40}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            height: "1px",
            bgcolor: "#00000080",
            width: "100%",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: { xs: "10px", md: "20px", lg: "20px" },
            padding: { xs: "20px  30px", md: "50px 30px" },
          }}
        >
          {navLinks.map((link, i) => (
            <Box
              onClick={() => {
                toggleDrawer(false);
                router.push(link.route);
              }}
              sx={{
                width: { xs: "100%" },
                gap: "30px",
                backgroundColor:
                  pathname ===
                  (link.route.startsWith("./")
                    ? link.route.substring(1)
                    : link.route)
                    ? ""
                    : "",
                cursor: "pointer",
              }}
              key={i}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontWeight:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? 600
                      : 400,
                  fontSize:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? { xs: "50px", sm: "64px" }
                      : { xs: "36px", md: "30px", lg: "36px" },
                  background:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)"
                      : "none",
                  WebkitBackgroundClip:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? "text"
                      : "unset",
                  WebkitTextFillColor:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? "transparent"
                      : "#000",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {link.text}
              </Typography>
            </Box>
          ))}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "scroll",

              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1ff",
              },
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
