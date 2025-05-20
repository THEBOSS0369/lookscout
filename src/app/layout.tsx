import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Workflow App",
  description: "Your Supercharged Design Workflow",
  manifest: "/manifest.json",
  themeColor: "#2563EB",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/lookscout/lookscout.png", sizes: "512x512", type: "image/png" },
      { url: "/hero/GitLab.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/lookscout/lookscout.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Apple specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Design Workflow App" />
        <link rel="apple-touch-icon" href="/lookscout/lookscout.png" />

        {/* PWA related meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
