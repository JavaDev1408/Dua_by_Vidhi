import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButterflyHeroFloat, ButterflySmallQuote } from './ButterflyIcon';
import heroBg from '../assets/hero-bride.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[820px] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Indian bride in pink lehenga overlooking palace"
          className="w-full h-full object-cover object-[65%_center] sm:object-[60%_center] lg:object-center select-none"
        />
        {/* Soft Luxury Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/90 via-[#FFFDF9]/50 to-transparent sm:via-[#FFFDF9]/40 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9]/40 via-transparent to-[#FFFDF9]/30 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 flex flex-col justify-between min-h-[580px] sm:min-h-[680px] lg:min-h-[820px]">
        
        {/* Top spacer or subtle floaters */}
        <div className="hidden lg:block h-6" />

        {/* Content Row: Left Hero Copy & Right Poetic Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 my-auto">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 xl:col-span-6 relative">
            
            {/* Delicate Floating Butterfly above headline */}
            <div className="absolute -top-14 left-1 sm:-top-16 sm:left-4 z-20 pointer-events-none">
              <ButterflyHeroFloat className="w-12 h-12 sm:w-16 sm:h-16 text-[#C2A379] animate-float-slow drop-shadow-sm opacity-90" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-normal leading-[1.08] text-brand-rose tracking-[-0.01em] select-none">
              A fairytale <br />
              looks better <br />
              on you
            </h2>

            {/* Subtitle / Description */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-[15px] font-sans font-light text-[#594B46] max-w-sm sm:max-w-md leading-relaxed tracking-wide">
              Discover the outfits, boutiques and experiences for your most beautiful chapter.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FFFDF9]/85 hover:bg-[#FFFDF9] backdrop-blur-md border border-[#CBB3A8] text-[#3D2E29] hover:text-brand-rose shadow-sm hover:shadow-md transition-all duration-300 text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.24em] uppercase"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 stroke-[1.8] text-brand-rose" />
              </a>
            </div>
          </div>

          {/* Right Poetic Quote (matching screenshot placement and typography) */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-start lg:justify-end">
            <div className="relative text-left lg:text-right select-none max-w-xs lg:mr-4 xl:mr-10 py-4">
              
              <p className="font-script text-3xl sm:text-4xl lg:text-[40px] text-[#7F4E5B] leading-[1.28] tracking-normal drop-shadow-sm">
                Every girl <br />
                has wings. <br />
                Every bride <br />
                has a story.
              </p>

              {/* Decorative flourish and tiny butterfly */}
              <div className="mt-4 flex items-center justify-start lg:justify-end gap-3 text-[#B08A93]">
                <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B08A93]/60 hidden lg:inline-block" />
                <ButterflySmallQuote className="w-5 h-5 text-[#9A6A76] animate-float-gentle inline-block" />
                <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-[#B08A93]/60 to-transparent" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle space */}
        <div className="h-4" />
      </div>

      {/* Very soft bottom blend to transition smoothly to plain ivory canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
}
