import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";
import I18nProvider from "@/src/providers/I18nProvider";
import SelectColorProvider from "@/src/providers/SelectColorProvider";

const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});

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
          <SelectColorProvider>
            <Header />
            <main>
              {modal}
              {children}
            </main>
            <Footer />
          </SelectColorProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
