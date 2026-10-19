import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OccasionsSection from './components/OccasionsSection';
import DuaStoreBanner from './components/DuaStoreBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] flex flex-col font-sans">
      {/* 1. Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Shop by Occasion: Six Moments, Endless Magic */}
        <OccasionsSection />

        {/* 4. The Dua Store editorial banner */}
        <DuaStoreBanner />
      </main>
    </div>
  );
}
