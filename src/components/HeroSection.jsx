import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButterflySmallQuote } from './ButterflyIcon';
import heroSeated from '../assets/hero-seated-bride.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#FAF5EF]">
      {/* Hero Background Image (Seated Bride in Dusty-Rose Lehenga in Palace Courtyard) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSeated}
          alt="Indian bride seated in embellished pink lehenga in palace courtyard"
          className="w-full h-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-center select-none"
        />
        {/* Soft Contrast Gradient on Left for Editorial Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EF]/95 via-[#FAF5EF]/60 to-transparent sm:via-[#FAF5EF]/45 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EF]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container matching the desktop reference grid */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-24 flex flex-col justify-between min-h-[580px] sm:min-h-[660px] lg:min-h-[760px]">
        
        {/* Top spacing */}
        <div className="hidden lg:block h-2" />

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto">
          
          {/* Left Column: Eyebrow, Headline, Description, and CTA Button */}
          <div className="lg:col-span-7 xl:col-span-6 relative">
            
            {/* Category Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-sans font-medium text-[#9E8B80]">
                BRIDAL & OCCASION WEAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/70 inline-block" />
            </div>

            {/* Headline with period matching reference */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-normal leading-[1.08] text-[#332A26] tracking-[-0.01em] select-none">
              A fairytale <br />
              looks better <br />
              on you.
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-[14px] font-sans font-light text-[#5E534D] max-w-sm sm:max-w-md leading-relaxed tracking-wide">
              Discover exquisite bridal and occasion wear, curated for every chapter of your journey.
            </p>

            {/* CTA Button: Solid Dusty Rose / Mauve Button */}
            <div className="mt-7 sm:mt-9">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[3px] bg-[#9C646E] hover:bg-[#8A535D] text-[#FFFDF9] shadow-sm hover:shadow-md transition-all duration-300 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Right Column: Poetic Quote & Vertical Line Anchor */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-start lg:justify-end">
            <div className="relative text-left lg:text-center select-none max-w-xs lg:mr-6 xl:mr-12 py-4 flex flex-col items-start lg:items-center">
              
              {/* Uppercase Quote */}
              <p className="font-serif text-[11px] sm:text-[12px] tracking-[0.24em] text-[#695E57] leading-[1.85] uppercase font-medium">
                EVERY GIRL <br />
                HAS WINGS. <br />
                EVERY BRIDE <br />
                HAS A STORY.
              </p>

              {/* Vertical Elegant Dropline */}
              <div className="w-[1px] h-12 sm:h-16 bg-[#B5A398]/60 my-3" />

              {/* Small Anchor Butterfly */}
              <ButterflySmallQuote className="w-4 h-4 sm:w-5 sm:h-5 text-[#8F7C73]" />
            </div>
          </div>

        </div>

        {/* Bottom space */}
        <div className="h-2" />
      </div>

      {/* Gentle bottom boundary transition to plain canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF5EF] to-transparent pointer-events-none" />
    </section>
  );
}
