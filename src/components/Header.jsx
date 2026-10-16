import React, { useState } from 'react';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import logoRetina from '../assets/dua_logo_retina.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation links matching the new desktop reference
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Occasions', href: '#' },
    { name: 'Boutiques', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FAF5EF] border-b border-[#E8DFD5] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[74px] sm:h-[80px] flex items-center justify-between relative">
          
          {/* Left: Desktop Navigation Links (Clean text links matching reference) */}
          <div className="flex items-center gap-6 xl:gap-8 z-10">
            {/* Mobile Hamburger toggle (visible only on small screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 -ml-1 text-[#453D38] hover:text-brand-rose transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 stroke-[1.4]" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-sans tracking-[0.05em] text-[#4A423D] hover:text-brand-rose transition-colors duration-200 font-normal"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 
            Center: The Exact "DUA by Vidhi" Tag Plaque
            - Mathematically dead-centered (absolute left-1/2 -translate-x-1/2 top-0)
            - Drops down 14px past the header bottom border into the hero section
            - Contains the exact etched butterfly, metallic gold serif "DUA", and cursive script "by Vidhi"
          */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-auto">
            <a
              href="#"
              className="block group"
              aria-label="Dua by Vidhi - Home"
            >
              <div className="bg-[#FAF5EF] border-x border-b border-[#E3D6C8] rounded-b-[3px] shadow-[0_4px_12px_rgba(50,40,35,0.06)] px-2.5 sm:px-3 pt-1.5 sm:pt-2 pb-2.5 sm:pb-3 w-[88px] sm:w-[98px] md:w-[104px] flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-[0_6px_16px_rgba(50,40,35,0.1)]">
                <img
                  src={logoRetina}
                  alt="DUA by Vidhi"
                  className="w-full h-auto object-contain max-h-[68px] sm:max-h-[74px] select-none transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </a>
          </div>

          {/* Right: 4 Action Icons (Search, Wishlist, User, Shopping Bag matching reference) */}
          <div className="flex items-center justify-end gap-4 sm:gap-6 text-[#4A423D] z-10">
            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.3]" />
            </button>
            
            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none relative"
              aria-label="Wishlist"
            >
              <Heart className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.3]" />
            </button>

            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none relative"
              aria-label="My Account"
            >
              <User className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.3]" />
            </button>

            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none relative"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.3]" />
            </button>
          </div>

        </div>
      </header>

      {/* Slide-over Drawer for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="fixed inset-0 bg-[#2D2421]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF5EF] shadow-2xl p-6 flex flex-col justify-between z-50 border-r border-[#E8DFD5]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD5]">
                <div className="w-24">
                  <img src={logoRetina} alt="DUA by Vidhi" className="w-full h-auto" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4A423D] hover:text-brand-rose transition-colors"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-sans tracking-[0.08em] text-[#4A423D] hover:text-brand-rose hover:translate-x-1 transition-all py-1.5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-10 pt-6 border-t border-[#E8DFD5]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8C7B75] mb-2 font-medium">
                  Bespoke Bridal
                </p>
                <p className="text-sm font-serif italic text-[#5E514D]">
                  Curated luxury couture for every chapter of your journey.
                </p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-[#E8DFD5]">
              <span className="font-serif italic text-xs text-[#8C7B75]">
                Dua by Vidhi &bull; Haute Couture
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
