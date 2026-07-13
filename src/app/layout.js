import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SocietyHub",
  description: "Discover trusted local services and empower local communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans
          antialiased
          bg-background
          text-foreground
          min-h-screen
        `}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
