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
    default: "Tran Ho | Software Engineer",
    template: "%s | Tran Ho",
  },

  description:
    "Portfolio of Tran Ho, a Software Engineer focused on backend and full-stack development with Java, Spring Boot, React, and TypeScript. Explore my projects, skills, and experience.",

  keywords: [
    "Tran Ho",
    "Ho Nguyen Bao Tran",
    "Software Engineer",
    "Backend Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "REST API",
    "Software Engineer Vietnam",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Tran Ho" }],
  creator: "Tran Ho",

  metadataBase: new URL("https://tranho.skymart.id.vn"),

  openGraph: {
    title: "Tran Ho | Software Engineer",
    description:
      "Explore the portfolio of Tran Ho, a Software Engineer passionate about backend development, full-stack applications, and building practical software solutions.",
    url: "https://tranho.skymart.id.vn",
    siteName: "Tran Ho Portfolio",
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
