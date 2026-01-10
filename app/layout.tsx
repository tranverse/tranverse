import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AntProvider from "@/components/AntProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Tran Ho | Frontend Developer",
    template: "%s | Tran Ho",
  },
  description:
    "Tran Ho – Frontend Developer specializing in React, Next.js, Ant Design, and modern web technologies. View my portfolio and projects.",
  keywords: [
    "Tran Ho",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Vietnam",
  ],
  authors: [{ name: "Tran Ho" }],
  creator: "Tran Ho",
  metadataBase: new URL("https://tranho.skymart.id.vn"),

  openGraph: {
    title: "Tran Ho | Frontend Developer",
    description:
      "Portfolio of Tran Ho – Frontend Developer with React & Next.js",
    url: "https://tranho.skymart.id.vn",
    siteName: "Tran Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <AntProvider>{children}</AntProvider>
          <Toaster richColors position="top-right" />
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
