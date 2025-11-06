// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import LayoutWrapper from "@/_components/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qashnova.com"),
  title: "Qashnova | Creative Digital Solutions for Brands",
  description:
    "Qashnova builds custom websites, branding, and digital strategies to help businesses grow and stand out online. Tailored solutions for your success.",
  alternates: {
    canonical: "https://www.qashnova.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
