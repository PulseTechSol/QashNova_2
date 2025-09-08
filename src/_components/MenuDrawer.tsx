"use client";
import { Box, Typography } from "@mui/material";
import React, {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type NavLink = { text: string; route: string };

type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activePath: string;
  onNavigate: (route: string) => void;
  onbackdropClick: (e: unknown) => void;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export default function MenuDrawer({
  open,
  onClose,
  links,
  activePath,
  onNavigate,
  onbackdropClick,
  setActive,
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

  // === Single body scroll lock here ===
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
      touchAction: (document.body.style as any).touchAction as
        | string
        | undefined,
    };
    const startY = window.scrollY;

    // lock
    if (document.body.style.position !== "fixed") {
      document.body.style.position = "fixed";
      document.body.style.top = `-${startY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document.body.style as any).touchAction = "none";
    }

    // close on user scroll after short delay
    const handleScroll = () => {
      const dt = performance.now() - openMeta.current.t;
      const dy = Math.abs(window.scrollY - openMeta.current.y);
      if (dt < 150) return;
      if (dy >= 60) handleCloseSequence();
    };
    const id = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 80);

    // unlock on close/unmount
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
  }, [open]);

  // Stagger link appearance after panel animates in
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
  }, [open]);

  const handleCloseSequence = () => {
    setLinksVisible(false);
    setTimeout(() => {
      onClose();
    }, LINKS_EXIT_MS);
  };

  return (
    <>
      {/* Backdrop (click to close) */}
      <Box
        onClick={(e) => {
          setActive(false); // reset instantly
          onbackdropClick(e);
        }}
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

      {/* Panel */}
      <Box
        sx={{
          maxWidth: {
            xs: open ? "320px" : "0px",
            sm: open ? "380px" : "0px",
            md: open ? "440px" : "0px",
          },
          width: "100%",
          height: {
            xs: open ? "337px" : "0px",
            md: open ? "397px" : "0px",
            lg: open ? "469px" : "0px",
          },
          position: "fixed",
          top: { xs: "10px", lg: "20px" },
          right: { xs: "10px", lg: "20px" },
          transition: "all 0.48s ease-in",
          transitionDelay: "0.3s",
          opacity: open ? 1 : 0,
          borderRadius: "40px",
          zIndex: 1001,
          background: "#f1f1f1",
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
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0px",
            p: { xs: "20px 30px 20px 40px", md: "50px 30px 50px 60px" },
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
                  setActive(false); // reset menu button instantly
                  handleCloseSequence();
                  onNavigate(link.route);
                }}
                sx={{ width: "100%", cursor: "pointer" }}
              >
                <Typography
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
