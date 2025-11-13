// app/privacy-policy/page.tsx
import { Metadata } from "next";
import Navbar from "@/_components/Navbar";
import PrivatePolicies from "./_sections/PrivatePolicies";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Privacy Policy | Qashnova",
  description:
    "Read Qashnova's privacy policy to understand how we handle your data, cookies, and user information securely.",
  alternates: { canonical: "https://www.qashnova.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Qashnova",
    description:
      "Read Qashnova's privacy policy to understand how we handle your data, cookies, and user information securely.",
    url: "https://www.qashnova.com/privacy-policy",
    siteName: "Qashnova",
    images: [
      {
        url: "https://www.qashnova.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Qashnova privacy policy - data protection and user privacy information",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Qashnova",
    description:
      "Read Qashnova's privacy policy to understand how we handle your data, cookies, and user information securely.",
    images: ["https://www.qashnova.com/logo.svg"],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Box sx={{ maxWidth: "1536px", mx: "auto" }}>
        <Navbar />
      </Box>

      <main role="main">
        <PrivatePolicies
          businessName="Qashnova"
          businessEmail="hello@qashnova.com"
          businessPhone="07722002392"
        />
      </main>
    </>
  );
}
