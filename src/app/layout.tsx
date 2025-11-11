// app/layout.tsx
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import LayoutWrapper from "@/_components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Qashnova",
              url: "https://www.qashnova.com",
              logo: "https://www.qashnova.com/logo.svg",
              description:
                "Qashnova builds custom websites, branding, and digital strategies to help businesses grow.",
              sameAs: ["https://www.instagram.com/qashnova1/"],
            }),
          }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
