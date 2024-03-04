import Footer from "@/components/page/Footer";
import Navbar from "@/components/page/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils/cn";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | FadiGorges.dev",
    default: "Fadi Gorges | Software Developer Portfolio",
  },
  // TODO: Add rest of metadata and USE GENERATEMETADATA TO MERGE THEM
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Add Google Analytics */}
        {/* <GoogleAnalytics /> */}
      </head>
      <body className={cn("antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex flex-col justify-between min-h-screen min-h-svh gap-16">
            {children}
            <Footer />
          </div>
          <Toaster richColors closeButton />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
