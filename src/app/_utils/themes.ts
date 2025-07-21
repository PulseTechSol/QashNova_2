// import { localFontSize } from "@/app/utils/themes";

// this is the font family below there
// import { createTheme } from "@mui/material/styles";

// export const theme = createTheme({
//   typography: {
//     fontFamily: "Montserrat",
//   },
// });
// export theme;
import { createTheme } from "@mui/material/styles";

// Extend the breakpoints with 'xxl'
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
  // You can also customize palette, typography, etc.
});

export default theme;

export const maxWidth = "1440px";

export const localFontSize = {
  h1: {
    xs: "56px",
    sm: "66px",
    md: "100px",
    lg: "120px",
    xl: "150px",
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
  },
  h4: {
    xs: "36px",
    sm: "46px",
    md: "50px",
    lg: "64px",
  },
  h5: {
    xs: "24px",
    md: "28px",
    lg: "36px",
  },
  p1: {
    xs: "18px",
    md: "20px",
  },
  p2: {
    xs: "16px",
    md: "18px",
  },
  p3: {
    xs: "14px",
    md: "16px",
  },
};

export const sectionPadding = {
  xs: "60px 20px",
  sm: "60px",
  md: "80px",
  lg: "100px 150px",
};
