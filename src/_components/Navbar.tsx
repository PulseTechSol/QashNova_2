"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import ButtonComponent from "./ButtonComponent";
// import { localFontSize } from "@/app/_utils/themes";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

    // Cleanup jab component unmount ho
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);
  const navLinks = [
    { text: "home", route: "/" },
    { text: "about", route: "/about-us" },
    { text: "websites", route: "" },
    { text: "Branding", route: "" },
    { text: "case study", route: "" },
    { text: "plans", route: "" },
    { text: "contact", route: "" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 20000,
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
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
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
              // objectFit: "cover",
            }}
            src={svgs.logo}
            alt="logo"
          />
        </Box>

        <Box
          sx={{
            maxWidth: "280px",
            width: "100%",
            display: "flex",
            // flexDirection:{xs:"row"}
            justifyContent: { xs: "start", md: "space-between" },
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box
            onClick={() => router.push("/contact-us")}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <ButtonComponent
              label="Hire Us"
              imgSrc={svgs.whiteArrow}
              sx={{
                background: { xs: "#3C65FF", md: "#3C65FF" },
                color: { xs: "#fff" },
                borderRadius: "50px",
                border: "2px solid #3C65FF",
                maxWidth: "280px",

                // maxWidth:
              }}
            />
          </Box>
          <Box
            onClick={sidebar}
            sx={{ textAlign: "end", display: { xs: "block" } }}
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
            zIndex: 1000, // 👈 Menu ke niche
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // optional dark effect
          }}
        />
      )}

      <Box
        onClick={sidebar}
        sx={{
          // bgcolor:""
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
          width: { xs: "100vw", sm: "50vw", md: "540px" },
          position: "fixed",
          top: "0px",
          right: "0px",
          transition: "all 0.4s ease-in-out",
          transform: menu ? "translateX(0%)" : "translateX(100%)",
          // transform: menu ? "translateX(100%)" : "translateX(-100%)",
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
          }}
        >
          <Image
            onClick={sidebar}
            src={svgs.hamburger}
            alt="kashanimgclose"
            height={50}
            width={50}
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
            // height: "566px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            // bgcolor: "#ccc",
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
                // padding: { xs: "20px" },
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
                      ? "64px"
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
              // display: { xs: "none", sm: "block" },
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
