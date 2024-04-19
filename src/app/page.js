import React from "react";
import Navbar from "./components/navbar/Navbar"
import HeroSection from "./components/Banner/HeroSection";

import MainContent from "./components/Main/MainContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <div className="mt-16">
      <HeroSection/> 
      <MainContent/>
      </div>
    </main>
  );
}