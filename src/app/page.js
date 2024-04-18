import React from "react";
import Navbar from "./navbar/Navbar"
import HeroSection from "./Banner/HeroSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <div className="mt-24">
      <HeroSection/>
      </div>
    </main>
  );
}