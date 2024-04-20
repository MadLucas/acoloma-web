
import React from "react";
import HeroSection from "./components/Banner/HeroSection";
import MainContent from "./components/Main/MainContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-16">
      <HeroSection/> 
      <MainContent/>
      </div>
    </main>
  );
}