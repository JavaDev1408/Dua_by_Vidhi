import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] flex flex-col font-sans">
      {/* 1. Header with centered DUA by Vidhi plaque tab */}
      <Header />

      {/* 2. Hero Section: Seated bride in embellished lehenga in palace courtyard */}
      <main className="flex-1">
        <HeroSection />

        {/* 
          Strict Scope: 
          Below the hero section, the rest of the page is kept completely empty 
          with a plain ivory background as specified.
        */}
        <div className="w-full h-48 sm:h-64 bg-[#FAF5EF]" />
      </main>
    </div>
  );
}
