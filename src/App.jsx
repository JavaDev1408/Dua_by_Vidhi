import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OccasionsSection from './components/OccasionsSection';
import DuaStoryBanner from './components/DuaStoryBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] flex flex-col font-sans">
      {/* 1. Header with centered DUA by Vidhi plaque tab */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section: Seated bride in embellished lehenga in palace courtyard */}
        <HeroSection />

        {/* 3. Shop by Occasion: Six Moments, Endless Magic */}
        <OccasionsSection />

        {/* 4. The Dua Story: Editorial Banner */}
        <DuaStoryBanner />
      </main>
    </div>
  );
}
