import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";
import I18nProvider from "@/src/providers/i18n-provider";

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
    <html>
      <body className={inter.className}>
        <I18nProvider>
          <Header />
          <main>
            {modal}
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
