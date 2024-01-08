import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavbarPage from "./components/navbar/page";
import FooterPage from "./components/footer/page";
import { ThemeProvider } from "./context/ThemeContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";

const inter = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <ThemeProvider>
            <AuthProvider>
              <NavbarPage />
              {children}
              <FooterPage />
            </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
