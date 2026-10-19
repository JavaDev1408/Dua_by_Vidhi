import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Eagerly load any bridal card images placed in assets
// Each file must be named: <occasion-id>-bridal.jpg
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
    // Soft lavender-lilac lehenga with floral embroidery — ballgown silhouette
    bg: 'from-[#D8C8D8] via-[#C9B8CA] to-[#B8A4B8]',
    accent: '#7B5E7B',
    shimmer: '#E8D8E8',
    href: '#sangeet',
  },
  {
    id: 'carnival',
    label: 'CARNIVAL',
    tagline: 'A little drama, a lot of sparkle',
    // Multicolour printed lehenga — festive, flared
    bg: 'from-[#D4C8A8] via-[#CBBF9E] to-[#B8A880]',
    accent: '#7A6840',
    shimmer: '#E8DFC8',
    href: '#carnival',
  },
  {
    id: 'mehendi',
    label: 'MEHENDI',
    tagline: 'Colors of new beginning',
    // Mint-green & peach lehenga — garden ceremony vibe
    bg: 'from-[#C8D8C0] via-[#BDD0B5] to-[#A8C0A0]',
    accent: '#4A7050',
    shimmer: '#DCECD8',
    href: '#mehendi',
  },
  {
    id: 'engagement',
    label: 'ENGAGEMENT',
    tagline: 'A beautiful promise',
    // Blush-peach bridal lehenga with heavy dupatta
    bg: 'from-[#E8CEC0] via-[#DFBFB0] to-[#D0A898]',
    accent: '#8B4A38',
    shimmer: '#F0DDD5',
    href: '#engagement',
  },
  {
    id: 'wedding',
    label: 'WEDDING',
    tagline: 'The beginning of your forever',
    // Deep crimson-rose bridal lehenga — classic grandeur
    bg: 'from-[#D4A8A8] via-[#C89898] to-[#B88080]',
    accent: '#7A2838',
    shimmer: '#E8C8C8',
    href: '#wedding',
  },
  {
    id: 'cocktail',
    label: 'COCKTAIL',
    tagline: 'A touch of glamour',
    // Silver-lavender gown with structured silhouette
    bg: 'from-[#C8C8D8] via-[#B8B8CC] to-[#A8A8C0]',
    accent: '#48486A',
    shimmer: '#E0E0EE',
    href: '#cocktail',
  },
];

// Decorative divider line with a small diamond centre
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-3 mb-1">
      <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/50" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <rect x="4" y="0.5" width="5" height="5" rx="0.3" transform="rotate(45 4 0.5)" fill="#C5A880" fillOpacity="0.65" />
      </svg>
      <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/50" />
    </div>
  );
}

// Individual occasion card
function OccasionCard({ occasion, index }) {
  const [hovered, setHovered] = useState(false);
  const cardImage = getCardImage(occasion.id);

  return (
    <div
      className="flex-1 min-w-0 flex flex-col group cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / illustrated panel */}
      <div className="relative overflow-hidden rounded-[2px] aspect-[3/4.6]">

        {cardImage ? (
          /* Real photograph */
          <img
            src={cardImage}
            alt={`${occasion.label} bridal wear`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out ${hovered ? 'scale-[1.05]' : 'scale-100'}`}
          />
        ) : (
          /* Gradient placeholder for cards without a photo yet */
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-b ${occasion.bg} transition-transform duration-700 ease-out ${hovered ? 'scale-[1.03]' : 'scale-100'}`}
            />

            {/* Subtle inner texture overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjA0Ii8+PC9zdmc+')] opacity-60 mix-blend-overlay pointer-events-none" />

            {/* Shimmer highlight — top edge */}
            <div
              className="absolute inset-x-0 top-0 h-24 pointer-events-none"
              style={{ background: `linear-gradient(to bottom, ${occasion.shimmer}55 0%, transparent 100%)` }}
            />

            {/* Elegant lehenga silhouette illustration using CSS shapes */}
            <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
              <div className="relative flex flex-col items-center">
                <div className="w-6 h-6 rounded-full mb-0.5 opacity-30" style={{ background: `radial-gradient(circle, ${occasion.shimmer} 0%, ${occasion.accent}30 100%)` }} />
                <div className="w-8 h-10 rounded-t-[50%] opacity-25" style={{ background: `linear-gradient(to bottom, ${occasion.shimmer}80, ${occasion.accent}40)` }} />
                <div
                  className={`w-20 sm:w-24 h-28 sm:h-32 opacity-20 transition-all duration-500 ${hovered ? 'opacity-30' : ''}`}
                  style={{ background: `radial-gradient(ellipse at top, ${occasion.shimmer}90, ${occasion.accent}50 70%)`, borderRadius: '50% 50% 60% 60% / 20% 20% 80% 80%' }}
                />
              </div>
            </div>
          </>
        )}

        {/* Bottom gradient fade into ivory — applied to all cards */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF5EF]/40 to-transparent pointer-events-none" />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${occasion.accent}22 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Text area below the card image */}
      <div className="pt-4 pb-1 flex flex-col items-start gap-1.5">
        {/* Label */}
        <span
          className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.22em] uppercase transition-colors duration-200"
          style={{ color: hovered ? occasion.accent : '#322B29' }}
        >
          {occasion.label}
        </span>

        {/* Tagline */}
        <p className="font-serif italic text-[12px] sm:text-[13px] leading-[1.45] text-[#6B5E58] max-w-[130px]">
          {occasion.tagline}
        </p>

        {/* Arrow CTA */}
        <a
          href={occasion.href}
          className="mt-1.5 flex items-center gap-1.5 group/arrow"
          aria-label={`Shop ${occasion.label}`}
        >
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover/arrow:translate-x-1"
            style={{ color: hovered ? occasion.accent : '#9C646E', strokeWidth: 1.5 }}
          />
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
      className="w-full bg-[#FAF5EF] pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Eyebrow */}
          <p className="text-[9.5px] sm:text-[10.5px] font-sans font-medium tracking-[0.28em] uppercase text-[#9E8B80] mb-3">
            SHOP BY OCCASION
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] font-normal italic leading-[1.1] text-[#2C2420] tracking-[-0.01em]">
            Six Moments, Endless Magic
          </h2>

          {/* Decorative divider */}
          <SectionDivider />
        </div>

        {/* Desktop: 6-column grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-4 lg:gap-5 xl:gap-6">
          {occasions.map((occasion, i) => (
            <OccasionCard key={occasion.id} occasion={occasion} index={i} />
          ))}
        </div>

        {/* Mobile: horizontal scroll strip */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {occasions.map((occasion, i) => (
            <div key={occasion.id} className="snap-start flex-none w-[48vw] max-w-[180px]">
              <OccasionCard occasion={occasion} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile scroll hint dots */}
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
