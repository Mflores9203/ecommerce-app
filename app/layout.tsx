import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: "Ecommerce-App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
