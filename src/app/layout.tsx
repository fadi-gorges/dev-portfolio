import Footer from "@/components/page/Footer";
import Navbar from "@/components/page/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils/cn";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | FadiGorges.DEV",
    default: "Fadi Gorges | Software Developer Portfolio",
  },
  // TODO: Add description
  description: "",
};

export const viewport = {
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
        <ThemeProvider attribute="class" defaultTheme="" enableSystem>
          <Navbar />
          <div className="flex flex-col min-h-screen gap-10">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster richColors closeButton />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
