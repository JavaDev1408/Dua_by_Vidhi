import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logoClean from '../assets/dua_logo_clean.png';

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
      <header className="sticky top-0 z-50 w-full bg-[#FFFDFB]/95 backdrop-blur-md border-b border-[#ECE3DB] transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] sm:h-[80px] flex items-center justify-between relative">
          
          {/* Left: Hamburger & Navigation Links */}
          <div className="flex items-center gap-5 sm:gap-6 lg:gap-7 z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1 text-[#423835] hover:text-brand-rose transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 stroke-[1.4]" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
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
            Center: The Signature "DUA by Vidhi" Tag
            Positioned with absolute left-1/2 -translate-x-1/2 to guarantee true mathematical centering.
            Hangs down gracefully past the header's bottom border as an authentic couture label plaque.
          */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30">
            <a
              href="#"
              className="group block bg-[#FFFDF9] border-x border-b border-[#E5DDD5] rounded-b-md shadow-[0_4px_14px_rgba(60,45,35,0.07)] px-2.5 sm:px-3.5 pt-1.5 sm:pt-2 pb-2.5 sm:pb-3 w-[114px] sm:w-[134px] md:w-[146px] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(60,45,35,0.11)] hover:border-[#DACFC5]"
            >
              <img
                src={logoClean}
                alt="DUA by Vidhi"
                className="w-full h-auto object-contain max-h-[76px] sm:max-h-[86px] mx-auto transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
          </div>

          {/* Right: Action Icons */}
          <div className="flex items-center justify-end gap-4 sm:gap-6 text-[#423835] z-10">
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
                <div className="w-24">
                  <img src={logoClean} alt="DUA by Vidhi" className="w-full h-auto" />
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
