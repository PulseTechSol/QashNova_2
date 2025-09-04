"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type NavLink = { text: string; route: string };

type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activePath: string;
  onNavigate: (route: string) => void;
};

export default function MenuDrawer({
  open,
  onClose,
  links,
  activePath,
  onNavigate,
}: MenuDrawerProps) {
  const openMeta = useRef({ y: 0, t: 0 });
  const [linksVisible, setLinksVisible] = useState(false);
  const [aosKey, setAosKey] = useState(0);
  const PANEL_TRANSITION_MS = 480;
  const PANEL_DELAY_MS = 300;
  const PANEL_APPEAR_MS = PANEL_TRANSITION_MS + PANEL_DELAY_MS;
  const ITEM_STAGGER_MS = 200;
  const ITEM_DURATION_MS = 300;
  const LINKS_EXIT_MS = 150;

  useEffect(() => {
    if (!open) return;
    openMeta.current.y = window.scrollY;
    openMeta.current.t = performance.now();

    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      touchAction: (document.body.style as any).touchAction,
    };
    const startY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${startY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.body.style as any).touchAction = "none";

    const handleScroll = () => {
      const dt = performance.now() - openMeta.current.t;
      const dy = Math.abs(window.scrollY - openMeta.current.y);
      if (dt < 150) return;
      if (dy >= 60) handleCloseSequence();
    };

    const id = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 80);

    return () => {
      clearTimeout(id);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document.body.style as any).touchAction = prev.touchAction;
      window.scrollTo(0, startY);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) {
      setLinksVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setLinksVisible(true);
      setAosKey((k) => k + 1);
      AOS.refreshHard();
    }, PANEL_APPEAR_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const handleCloseSequence = () => {
    setLinksVisible(false);
    setTimeout(() => {
      onClose();
    }, LINKS_EXIT_MS);
  };

  return (
    <>
      {/* Backdrop always mounted; fade & disable clicks when closed */}
      <Box
        onClick={open ? handleCloseSequence : undefined}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.2)",
          touchAction: "none",
          overscrollBehavior: "none",
          height: "100vh",
          transition: "opacity 0.25s ease-in-out",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transitionDelay: "0.2s",
        }}
      />

      {/* Panel (kept as you provided) */}
      <Box
        sx={{
          maxWidth: {
            xs: open ? "calc(100vw - 20px)" : "0px",
            sm: open ? "50vw" : "0px",
            md: open ? "540px" : "0px",
          },
          width: "100%",
          height: {
            xs: open ? "417px" : "0px",
            md: open ? "546px" : "0px",
            lg: open ? "594px" : "0px",
          },
          position: "fixed",
          top: { xs: "10px", sm: "15px", md: "20px" },
          left: { xs: "10px", md: "unset" },
          right: "20px",
          transition: "all 0.48s ease-in",
          transitionDelay: "0.3s",
          opacity: open ? 1 : 0,
          borderRadius: "40px",
          zIndex: 1001,
          background: {
            xs: "linear-gradient(180deg,#FFFFFF,#C5C5C5,#999999)",
            md: "#fff",
          },
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": { backgroundColor: "#f1f1f1" },
          overflow: "hidden",
          // prevent interaction while visually closed
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: { xs: "10px", md: "20px", lg: "20px" },
            p: { xs: "20px 30px", md: "50px 30px" },
            opacity: linksVisible ? 1 : 0,
            transition: "opacity 150ms ease-out",
          }}
        >
          {links.map((link, i) => {
            const isActive =
              activePath ===
              (link.route.startsWith("./")
                ? link.route.substring(1)
                : link.route);

            return (
              <Box
                key={`${link.route}-${aosKey}`}
                onClick={() => {
                  handleCloseSequence(); // hide links first
                  onNavigate(link.route);
                }}
                sx={{ width: "100%", cursor: "pointer" }}
              >
                <Typography
                  // Only set AOS props when links are allowed to animate
                  data-aos={linksVisible ? "zoom-in" : undefined}
                  data-aos-duration={ITEM_DURATION_MS}
                  data-aos-delay={PANEL_APPEAR_MS + i * ITEM_STAGGER_MS}
                  data-aos-once="true"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: isActive
                      ? { xs: "30px", lg: "36px" }
                      : { xs: "24px", lg: "30px" },
                    background: isActive
                      ? "linear-gradient(90deg,#3C65FF,#5841D4,#2617B1)"
                      : "none",
                    WebkitBackgroundClip: isActive ? "text" : "unset",
                    WebkitTextFillColor: isActive ? "transparent" : "#000",
                    transition: "all 0.3s ease-in-out",
                    textAlign: { xs: "right", md: "unset" },
                  }}
                >
                  {link.text}
                </Typography>
              </Box>
            );
          })}

          <Box
            sx={{
              flexGrow: 1,
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-track": { backgroundColor: "#f1f1f1ff" },
            }}
          />
        </Box>
      </Box>
    </>
  );
}
