import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      {/* 1. Slim, elegant ivory/blush luxury couture header */}
      <Header />

      {/* 2. Hero Section: Palace balcony with Indian bride in pink lehenga */}
      <main className="flex-1">
        <HeroSection />

        {/* 
          Strict Scope: 
          Below the hero section, the rest of the page is kept completely empty 
          with a plain ivory background as specified.
        */}
        <div className="w-full h-48 sm:h-64 bg-[#FAF7F2]" />
      </main>
    </div>
  );
}
