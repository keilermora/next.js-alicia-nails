import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alicia Nails | Manicurista profesional",
  description: "¡Uñas hermosas en la comodidad de tu casa!",
};

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {modal}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
