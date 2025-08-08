import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; // 👈 your custom breakpoint
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000, // 👈 custom breakpoint
    },
  },
});

export default theme;

export const maxWidth = "1440px";

export const sectionPadding = {
  xs: "60px 20px",
  sm: "60px",
  md: "80px",
  lg: "100px 150px",
};
export const sectionPaddingY = {
  xs: "60px",
  sm: "60px",
  md: "80px",
  lg: "100px",
};

export const sectionPaddingX = {
  xs: "20px",
  sm: "60px",
  md: "80px",
  lg: "150px",
};

export const blogScreenGap = { xs: "10px", sm: "15px", md: "20px", xl: "35px" };

export const localFontSize = {
  h1: {
    xs: "56px",
    sm: "66px",
    md: "100px",
    lg: "120px",
    xl: "150px",
    xxl: "180px",
  },
  h2: {
    xs: "36px",
    sm: "50px",
    md: "80px",
    lg: "120px",
  },
  h3: {
    xs: "48px",
    sm: "54px",
    md: "70px",
    lg: "100px",
    xl: "120px",
    xxl: "150px",
  },
  hMarquee: {
    xs: "26px",
    sm: "29px",
    md: "37px",
    lg: "53px",
    xl: "64px",
    xxl: "80px",
  },
  h4: {
    xs: "36px",
    sm: "46px",
    md: "50px",
    lg: "64px",
    xl: "74px",
    xxl: "80px",
  },
  h5: {
    xs: "24px",
    md: "28px",
    lg: "36px",
    xl: "46px",
    // xxl: "50px",
  },
  p1: {
    xs: "18px",
    md: "20px",
    xl: "28px",
    // xxl: "30px",
  },
  p2: {
    xs: "16px",
    md: "18px",
    xl: "24px",
    // xxl: "32px",
  },
  p3: {
    xs: "14px",
    md: "16px",
    xl: "20px",
    // xxl: "30px",
  },
};
