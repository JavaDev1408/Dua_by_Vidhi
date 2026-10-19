import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Eagerly load all 6 occasion bridal images placed in assets
const cardImages = import.meta.glob('../assets/*-bridal.{jpg,jpeg,png,webp}', { eager: true });

function getCardImage(id) {
  const key = `../assets/${id}-bridal.jpg`;
  const keyJpeg = `../assets/${id}-bridal.jpeg`;
  const keyPng = `../assets/${id}-bridal.png`;
  const keyWebp = `../assets/${id}-bridal.webp`;
  return (cardImages[key] || cardImages[keyJpeg] || cardImages[keyPng] || cardImages[keyWebp])?.default ?? null;
}

const occasions = [
  {
    id: 'sangeet',
    label: 'SANGEET',
    tagline: 'A celebration in every twirl',
    accent: '#7B5E7B',
    href: '#sangeet',
  },
  {
    id: 'carnival',
    label: 'CARNIVAL',
    tagline: 'A little drama, a lot of sparkle',
    accent: '#8A6840',
    href: '#carnival',
  },
  {
    id: 'mehendi',
    label: 'MEHENDI',
    tagline: 'Colors of new beginning',
    accent: '#4A7050',
    href: '#mehendi',
  },
  {
    id: 'engagement',
    label: 'ENGAGEMENT',
    tagline: 'A beautiful promise',
    accent: '#8B4A38',
    href: '#engagement',
  },
  {
    id: 'wedding',
    label: 'WEDDING',
    tagline: 'The most beautiful you',
    accent: '#7A2838',
    href: '#wedding',
  },
  {
    id: 'cocktail',
    label: 'COCKTAIL',
    tagline: 'A touch of glamour',
    accent: '#48486A',
    href: '#cocktail',
  },
];

// Decorative divider line with a delicate diamond center
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-3 mb-2">
      <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/50" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <rect x="4" y="0.5" width="5" height="5" rx="0.3" transform="rotate(45 4 0.5)" fill="#C5A880" fillOpacity="0.75" />
      </svg>
      <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/50" />
    </div>
  );
}

// Individual occasion card matching reference layout
function OccasionCard({ occasion }) {
  const [hovered, setHovered] = useState(false);
  const cardImage = getCardImage(occasion.id);

  return (
    <div
      className="flex-1 min-w-0 flex flex-col group cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bridal photograph container */}
      <div className="relative overflow-hidden rounded-[2px] aspect-[3/4.6] bg-[#F0E6DE]">
        {cardImage && (
          <img
            src={cardImage}
            alt={`${occasion.label} bridal couture`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out ${hovered ? 'scale-[1.05]' : 'scale-100'}`}
          />
        )}

        {/* Soft bottom gradient fade into ivory */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAF5EF]/30 to-transparent pointer-events-none" />

        {/* Subtle couture hover shimmer */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${occasion.accent}20 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Typography area below card image */}
      <div className="pt-4 pb-2 flex flex-col items-center text-center gap-1">
        {/* Occasion Label */}
        <span className="text-[11px] sm:text-[12px] font-serif font-medium tracking-[0.16em] uppercase text-[#2E2421] transition-colors duration-200 group-hover:text-[#743C4A]">
          {occasion.label}
        </span>

        {/* Poetic Tagline */}
        <p className="font-serif italic text-[12px] sm:text-[13px] leading-[1.4] text-[#695D56] max-w-[140px]">
          {occasion.tagline}
        </p>

        {/* Elegant Arrow CTA */}
        <a
          href={occasion.href}
          className="mt-1 flex items-center justify-center text-[#9C646E] group/arrow"
          aria-label={`Shop ${occasion.label}`}
        >
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 stroke-[1.5]" />
        </a>
      </div>
    </div>
  );
}

export default function OccasionsSection() {
  const scrollRef = useRef(null);

  return (
    <section
      id="occasions"
      className="w-full bg-[#FAF5EF] pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-t border-[#F0E6DE]/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.26em] uppercase text-[#A68F83] mb-2 sm:mb-3">
            SHOP BY OCCASION
          </p>

          {/* Heading in luxury rose-wine serif */}
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal italic leading-[1.12] text-[#743C4A] tracking-[-0.01em]">
            Six Moments, Endless Magic
          </h2>

          {/* Decorative Divider */}
          <SectionDivider />
        </div>

        {/* Desktop & Tablet: 6-column grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-3.5 lg:gap-4 xl:gap-5">
          {occasions.map((occasion) => (
            <OccasionCard key={occasion.id} occasion={occasion} />
          ))}
        </div>

        {/* Mobile: Smooth horizontal swipe strip */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-3.5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {occasions.map((occasion) => (
            <div key={occasion.id} className="snap-start flex-none w-[46vw] max-w-[170px]">
              <OccasionCard occasion={occasion} />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator Dots */}
        <div className="flex md:hidden justify-center gap-1.5 mt-5">
          {occasions.map((o, i) => (
            <div
              key={o.id}
              className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-4 h-1 bg-[#9C646E]' : 'w-1.5 h-1 bg-[#C5A880]/40'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
