"use client";

import { Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import ButtonComponent from "./ButtonComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  function sidebar() {
    setMenu((p) => !p);
  }

  const navLinks = [
    { text: "home", route: "/" },
    { text: "about", route: "/about-us" },
    { text: "websites", route: "/websites" },
    { text: "Branding", route: "/branding" },
    { text: "case study", route: "/case-study" },
    { text: "plans", route: "/plans" },
    { text: "blogs", route: "/blogs" },
    { text: "contact", route: "/contact-us" },
  ];

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    setMenu(false);
  }, [pathname]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive((prev) => !prev);
  };

  return (
    <Box
      sx={{
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        backgroundColor: { xs: "rgba(255, 255, 255, 0.4)", sm: "transparent" },
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
          flexDirection: "row",
          justifyContent: "space-between",
          gap: { md: "10px", lg: "18px" },
          padding: {
            xs: "20px",
            sm: "20px 30px",
            md: "20px 40px",
            lg: "20px 40px",
          },
          margin: "auto",
        }}
      >
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

        <Box
          onClick={() => router.push("/")}
          sx={{ maxWidth: "287px", display: { xs: "none", md: "block" } }}
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
          sx={{
            display: "flex",
            justifyContent: { xs: "start", md: "center" },
            alignItems: "center",
            gap: "30px",
          }}
        >
          <ButtonComponent
            onClick={() => router.push("/contact-us")}
            label="Hire Us"
            imgSrc={svgs.whiteArrow}
            sx={{
              background: { xs: "#3C65FF", md: "#3C65FF" },
              color: { xs: "#fff" },
              borderRadius: "50px",
              maxWidth: { xs: "280px", xl: "360px" },
              display: { xs: "none", md: "flex" },
            }}
          />
          <Box>
            {/* menu button  */}
            <Box
              onClick={(e) => {
                handleClick(e);
                sidebar();
              }}
              sx={{
                display: "flex",
                cursor: "pointer",
                height: 50,
                width: 50,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #3C65FF",
                gap: "5px",
                flexDirection: "column",
                position: "relative",
                zIndex: 1002,
                transition: "transform 0.38s ease-in-out",
                "& > *": {
                  width: "60%",
                  height: "2px",
                  backgroundColor: "#3C65FF",
                  transformOrigin: "50% 50%",
                  willChange: "transform, color, background-color",
                  transition:
                    "transform 300ms cubic-bezier(.22,.61,.36,1), background-color 300ms, color 300ms",
                },
                "& > *:nth-of-type(1)": {
                  transform: active
                    ? "translateY(4px) rotate(45deg)"
                    : "translateY(0) rotate(0deg)",
                  backgroundColor: "#3C65FF",
                },
                "& > *:nth-of-type(2)": {
                  transform: active
                    ? "translateY(-4px) rotate(-45deg)"
                    : "translateY(0) rotate(0deg)",
                  backgroundColor: "#3C65FF",
                },
              }}
            >
              <Box component="div" />
              <Box component="div" />
            </Box>
            <MenuDrawer
              open={menu}
              active={active}
              setActive={setActive}
              onClose={() => setMenu(false)}
              links={navLinks}
              activePath={pathname}
              onNavigate={(route) => router.push(route)}
              onbackdropClick={(e: unknown) => {
                handleClick(e as React.MouseEvent<HTMLDivElement, MouseEvent>);
                sidebar();
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
