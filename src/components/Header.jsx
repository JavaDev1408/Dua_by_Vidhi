import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { ButterflyLogoIcon } from './ButterflyIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Boutiques', href: '#' },
    { name: 'Personalisation', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FFFDFB]/92 backdrop-blur-md border-b border-[#F2ECE6] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-22 flex items-center justify-between relative">
          
          {/* Left: Hamburger & Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8 z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1 text-[#423835] hover:text-brand-rose transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 stroke-[1.4]" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12px] uppercase font-sans tracking-[0.16em] text-[#554B47] hover:text-brand-rose transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 
            Center: DUA by Vidhi Logo
            Precisely centered horizontally and vertically using absolute positioning
            (left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2) so that differing widths
            of left navigation links and right action icons never displace the logo.
            Uses pure HTML typography (Cinzel & Alex Brush) and custom refined SVG butterfly.
          */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center select-none group cursor-pointer py-1"
            >
              {/* Delicate Golden Butterfly Icon */}
              <div className="transition-transform duration-300 group-hover:scale-105">
                <ButterflyLogoIcon className="w-8 h-6 sm:w-9 sm:h-7 text-[#9C7847]" />
              </div>

              {/* DUA - Roman Luxury Serif with Proportional Elegant Kerning */}
              <span className="font-cinzel text-xl sm:text-2xl font-medium tracking-[0.06em] text-[#947245] leading-none mt-1">
                DUA
              </span>

              {/* by Vidhi - Flowing Signature Calligraphy Script */}
              <span className="font-signature text-base sm:text-[18px] text-[#947245] leading-none mt-0.5 tracking-wide">
                by Vidhi
              </span>
            </a>
          </div>

          {/* Right: Action Icons */}
          <div className="flex items-center justify-end gap-5 sm:gap-6 text-[#423835] z-10">
            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.3]" />
            </button>
            
            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none relative"
              aria-label="Wishlist"
            >
              <Heart className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.3]" />
            </button>

            <button
              className="p-1.5 hover:text-brand-rose transition-colors duration-200 focus:outline-none relative"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.3]" />
            </button>
          </div>

        </div>
      </header>

      {/* Slide-over Drawer (Mobile & Expanded Menu) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#2D2421]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FFFDF9] shadow-2xl p-6 flex flex-col justify-between z-50 border-r border-[#F0E6DE]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F0E6DE]">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <ButterflyLogoIcon className="w-6 h-5 text-[#9C7847]" />
                    <span className="font-cinzel text-lg font-medium tracking-[0.06em] text-[#947245] leading-none">
                      DUA
                    </span>
                  </div>
                  <span className="font-signature text-sm text-[#947245] ml-8 leading-none mt-0.5">
                    by Vidhi
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#554B47] hover:text-brand-rose transition-colors"
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
                    className="text-sm uppercase font-sans tracking-[0.2em] text-[#4A3F3B] hover:text-brand-rose hover:translate-x-1 transition-all py-1.5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-10 pt-6 border-t border-[#F0E6DE]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8C7B75] mb-3">
                  Concierge & Consultations
                </p>
                <p className="text-sm font-serif italic text-[#5E514D]">
                  Book a private bridal appointment with our couture stylists.
                </p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-[#F0E6DE]">
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
