import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comforty",
  description: "Furniture collections for your interior",
};

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <div className="flex-1">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
