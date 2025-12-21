// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Ingenious Techworks | Enterprise Solutions",
  description: "We create digital experiences that blend innovation, strategy, and engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        <div className="bg-grid"></div>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}