// app/_components/ThemeRegistry.tsx
"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/_utils/themes";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
