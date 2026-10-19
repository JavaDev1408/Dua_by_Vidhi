import React from 'react';
import { ArrowRight } from 'lucide-react';
import fabricPhoto from '../assets/dua-story-fabric.jpg';
import butterflyEmblem from '../assets/dua-story-butterfly-clean.png';

export default function DuaStoryBanner() {
  return (
    <section id="story" className="w-full bg-[#FAF5EF] pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        {/* Main Banner Card */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F0E2DB] border border-[#E7D6CB]/80 shadow-[0_12px_40px_-15px_rgba(116,60,74,0.06)] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Panel: Fabric & Butterfly Brooches Photo */}
          <div className="relative w-full lg:w-[44%] xl:w-[42%] min-h-[220px] sm:min-h-[280px] lg:min-h-[300px] flex-shrink-0 overflow-hidden">
            <img
              src={fabricPhoto}
              alt="Dua bridal couture blush tulle fabric with gold butterfly brooches"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
              loading="lazy"
            />
            {/* Desktop: Seamless soft right gradient fade into the blush card background */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-28 xl:w-36 bg-gradient-to-r from-transparent via-[#F0E2DB]/50 to-[#F0E2DB] pointer-events-none" />
            
            {/* Mobile / Tablet: Soft bottom gradient fade into the story text */}
            <div className="block lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F0E2DB] via-[#F0E2DB]/70 to-transparent pointer-events-none" />
          </div>

          {/* Center Panel: Editorial Story Typography */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-10 xl:px-14 py-8 sm:py-10 lg:py-8 z-10">
            {/* Eyebrow */}
            <p className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#B88A85] mb-2 sm:mb-2.5">
              THE DUA STORY
            </p>

            {/* Heading */}
            <h3 className="font-serif italic text-[26px] sm:text-[32px] lg:text-[34px] xl:text-[38px] leading-[1.16] text-[#743C4A] tracking-[-0.01em] mb-3 sm:mb-3.5">
              More than an outfit,<br />
              it’s a feeling.
            </h3>

            {/* Body Description */}
            <p className="font-sans text-[12px] sm:text-[13px] lg:text-[13.5px] xl:text-[14px] leading-[1.68] text-[#7D6E65] max-w-[510px] mb-5 sm:mb-6 font-normal">
              Born from a belief that every girl carries a little magic within her, Dua is a celebration of every transformation, every dream, and every beautiful beginning.
            </p>

            {/* CTA Link */}
            <div>
              <a
                href="#story"
                className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] uppercase text-[#743C4A] hover:text-[#522933] group transition-colors duration-200"
              >
                <span>OUR STORY</span>
                <span className="text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-1.5 text-[#743C4A]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Panel: Vertical Divider & Golden Butterfly Emblem */}
          <div className="hidden lg:flex items-center pr-8 xl:pr-12 pl-2">
            {/* Elegant Vertical Divider Line */}
            <div className="w-[1px] h-28 xl:h-32 bg-[#E0CDC2]" />

            {/* Dua Butterfly Emblem */}
            <div className="flex items-center justify-center pl-8 xl:pl-10">
              <img
                src={butterflyEmblem}
                alt="Dua golden butterfly emblem"
                className="w-12 h-12 xl:w-14 xl:h-14 object-contain filter drop-shadow-[0_2px_8px_rgba(197,168,128,0.25)] transition-transform duration-500 hover:scale-110 select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
