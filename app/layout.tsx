
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ReduxProvider } from "@/store/Providers";
import { ModalProvider } from "@/context/QuickViewModalContext";
import { CartModalProvider } from "@/context/CartSidebarModalContext";

import QuickViewModal from "@/components/Common/QuickViewModal";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import "./globals.css";
import CartSidebarModal from "@/components/Common/CartSidebarModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JND Boutiques | High-Quality Fashion for Women",
  description: "Discover high-quality and stylish women's fashion at JND Boutiques. Explore our latest collection of dresses, tops, and accessories for every occasion. Shop now!",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="min-h-screen flex flex-col text-gray-800 font-sans ">
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <Header/>
                  {children}
                  <QuickViewModal />
                  <CartSidebarModal />
                  <Footer />
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
          </div>
      </body>
    </html>
  );
}
