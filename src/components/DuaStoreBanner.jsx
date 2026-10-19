import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroBride from '../assets/hero-bride.jpg';

// Decorative butterfly SVG — matches the existing ButterflyIcon style
function ButterflyDecor({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <line x1="32" y1="14" x2="32" y2="44" stroke="#C5A880" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="12.5" r="1.4" fill="#C5A880" />
      {/* Antennae */}
      <path d="M31.5 13C29 8.5 24 7 21 8" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20.5" cy="7.8" r="0.9" fill="#C5A880" />
      <path d="M32.5 13C35 8.5 40 7 43 8" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" />
      <circle cx="43.5" cy="7.8" r="0.9" fill="#C5A880" />
      {/* Left upper wing */}
      <path
        d="M31 17C24 11 12 10 7 17C4 21 5 26 9 29C14 33 23 32 31 27"
        stroke="#C5A880" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M29 19C23 15 14 15 10 19C8 21 9 25 12 27C17 30 24 28 29 25"
        stroke="#C5A880" strokeWidth="0.8" strokeOpacity="0.7"
      />
      <path d="M23 18L14 17" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      <path d="M25 22L15 22" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      <path d="M27 25L17 26" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      {/* Right upper wing */}
      <path
        d="M33 17C40 11 52 10 57 17C60 21 59 26 55 29C50 33 41 32 33 27"
        stroke="#C5A880" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M35 19C41 15 50 15 54 19C56 21 55 25 52 27C47 30 40 28 35 25"
        stroke="#C5A880" strokeWidth="0.8" strokeOpacity="0.7"
      />
      <path d="M41 18L50 17" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      <path d="M39 22L49 22" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      <path d="M37 25L47 26" stroke="#C5A880" strokeWidth="0.65" strokeOpacity="0.6" />
      {/* Left lower wing */}
      <path
        d="M30.5 28C21 30 13 34 15 41C16 45 23 45 30.5 36"
        stroke="#C5A880" strokeWidth="1.1" strokeLinecap="round"
      />
      <path
        d="M28 30C21 32 16 35 17 39C18 42 23 41 28 35"
        stroke="#C5A880" strokeWidth="0.7" strokeOpacity="0.65"
      />
      {/* Right lower wing */}
      <path
        d="M33.5 28C43 30 51 34 49 41C48 45 41 45 33.5 36"
        stroke="#C5A880" strokeWidth="1.1" strokeLinecap="round"
      />
      <path
        d="M36 30C43 32 48 35 47 39C46 42 41 41 36 35"
        stroke="#C5A880" strokeWidth="0.7" strokeOpacity="0.65"
      />
    </svg>
  );
}

// Smaller, slightly tilted version for the right side accent
function ButterflyAccent({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="24" y1="10" x2="24" y2="33" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" />
      <circle cx="24" cy="9" r="1.1" fill="#C5A880" />
      <path d="M23.5 9.5C21.5 6 17 5 15 6" stroke="#C5A880" strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="14.5" cy="5.8" r="0.75" fill="#C5A880" />
      <path d="M24.5 9.5C26.5 6 31 5 33 6" stroke="#C5A880" strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="33.5" cy="5.8" r="0.75" fill="#C5A880" />
      {/* Left wing */}
      <path
        d="M23 12C18 8 9 8 5 13C3 16 4 19 7 21C11 24 18 23 23 20"
        stroke="#C5A880" strokeWidth="1.1" strokeLinecap="round"
      />
      <path d="M21 14C16 11 10 12 8 15C7 17 8 19 11 20C14 22 19 21 21 18" stroke="#C5A880" strokeWidth="0.7" strokeOpacity="0.65" />
      {/* Right wing */}
      <path
        d="M25 12C30 8 39 8 43 13C45 16 44 19 41 21C37 24 30 23 25 20"
        stroke="#C5A880" strokeWidth="1.1" strokeLinecap="round"
      />
      <path d="M27 14C32 11 38 12 40 15C41 17 40 19 37 20C34 22 29 21 27 18" stroke="#C5A880" strokeWidth="0.7" strokeOpacity="0.65" />
      {/* Left lower */}
      <path d="M22.5 21C17 23 12 26 13 30C14 33 18 32 22.5 26" stroke="#C5A880" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M21 22.5C16.5 24 13 26.5 14 29C14.5 31 18 30 21 25" stroke="#C5A880" strokeWidth="0.6" strokeOpacity="0.6" />
      {/* Right lower */}
      <path d="M25.5 21C31 23 36 26 35 30C34 33 30 32 25.5 26" stroke="#C5A880" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M27 22.5C31.5 24 35 26.5 34 29C33.5 31 30 30 27 25" stroke="#C5A880" strokeWidth="0.6" strokeOpacity="0.6" />
    </svg>
  );
}

export default function DuaStoreBanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-[#FAF5EF] py-6 sm:py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Banner container — thin horizontal strip with a warm ivory tint */}
        <div className="relative flex items-stretch rounded-[3px] overflow-hidden border border-[#EAE0D5] shadow-[0_2px_24px_rgba(50,40,35,0.06)]"
          style={{ minHeight: '220px' }}
        >

          {/* ── LEFT: Photo panel (~38% width) ── */}
          <div className="relative w-[38%] flex-shrink-0 overflow-hidden">
            <img
              src={heroBride}
              alt="Bride in embellished pink lehenga on palace balcony with butterflies"
              className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
            />
            {/* Soft right-edge fade blending into the text panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F5EDE4]/80 pointer-events-none" />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F0E4D8]/30 to-transparent pointer-events-none" />
          </div>

          {/* ── CENTRE: Text content ── */}
          <div className="flex-1 bg-[#F7F0E8] flex flex-col justify-center px-8 sm:px-10 lg:px-12 py-8 sm:py-10 relative">

            {/* Eyebrow label */}
            <p className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.30em] uppercase text-[#9E8B80] mb-3 sm:mb-4">
              THE DUA STORE
            </p>

            {/* Headline */}
            <h2 className="font-serif italic text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[38px] font-normal leading-[1.18] text-[#2C2420] tracking-[-0.01em] mb-4 sm:mb-5 max-w-sm">
              More than an outfit,<br />
              it's a feeling.
            </h2>

            {/* Body copy */}
            <p className="font-sans text-[12px] sm:text-[13px] font-light leading-[1.75] text-[#6B5E58] max-w-[340px] sm:max-w-[400px] mb-6 sm:mb-7">
              Born from a belief that every girl carries a little magic within her,
              Dua is a celebration of every transformation, every dream,
              and every beautiful beginning.
            </p>

            {/* OUR STORY CTA */}
            <a
              href="#our-story"
              className="group inline-flex items-center gap-2.5 self-start"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.22em] uppercase text-[#2C2420] border-b border-[#2C2420]/30 pb-0.5 transition-colors duration-200 group-hover:text-[#9C646E] group-hover:border-[#9C646E]/50">
                OUR STORY
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-1"
                style={{
                  color: hovered ? '#9C646E' : '#2C2420',
                  strokeWidth: 1.8,
                }}
              />
            </a>

            {/* Decorative fine divider line at bottom of text zone — subtle */}
            <div className="absolute bottom-0 left-8 sm:left-10 lg:left-12 right-0 h-[1px] bg-[#E8DDD4]/60" />
          </div>

          {/* ── RIGHT: Butterfly decorative accent panel ── */}
          <div className="hidden sm:flex w-[11%] lg:w-[13%] flex-shrink-0 bg-[#F7F0E8] flex-col items-center justify-center gap-4 border-l border-[#EAE0D5]/70 py-8 relative">
            {/* Primary butterfly — larger, centred */}
            <ButterflyDecor className="w-12 h-12 lg:w-14 lg:h-14 animate-float-slow opacity-80" />
            {/* Secondary butterfly — smaller, offset down */}
            <ButterflyAccent className="w-7 h-7 lg:w-8 lg:h-8 animate-float-gentle opacity-60 translate-x-3 translate-y-1" />
          </div>

        </div>
      </div>
    </section>
  );
}
