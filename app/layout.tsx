import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alicia Nails | Manicurista profesional",
  description: "¡Uñas hermosas en la comodidad de tu casa!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <div id="modal-root"></div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
