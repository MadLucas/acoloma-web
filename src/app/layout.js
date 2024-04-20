
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ACOLOMA",
description: "Cortinas Roller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav><Navbar/></nav>
        {children}
        </body>
    </html>
  );
}
