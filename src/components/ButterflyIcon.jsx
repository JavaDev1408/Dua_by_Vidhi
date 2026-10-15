import React from 'react';

export function ButterflyLogoIcon({ className = "w-6 h-6", color = "#C5A880" }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central slender body */}
      <path
        d="M24 8V32"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Antennae */}
      <path
        d="M23 8C21.5 5 18 4 17 5.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M25 8C26.5 5 30 4 31 5.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Upper Left Wing - Filigree lace pattern */}
      <path
        d="M23 10C17 7 6 9 5 18C4 23 11 26 23 23"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M21 13C16 11 9 13 8 18C7.5 21 13 23 21 21"
        stroke={color}
        strokeWidth="0.8"
        strokeDasharray="0.5 1.5"
      />
      <circle cx="12" cy="16" r="1.5" fill={color} fillOpacity="0.4" />
      <circle cx="16" cy="18" r="1" fill={color} fillOpacity="0.5" />

      {/* Upper Right Wing - Filigree lace pattern */}
      <path
        d="M25 10C31 7 42 9 43 18C44 23 37 26 25 23"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M27 13C32 11 39 13 40 18C40.5 21 35 23 27 21"
        stroke={color}
        strokeWidth="0.8"
        strokeDasharray="0.5 1.5"
      />
      <circle cx="36" cy="16" r="1.5" fill={color} fillOpacity="0.4" />
      <circle cx="32" cy="18" r="1" fill={color} fillOpacity="0.5" />

      {/* Lower Left Wing */}
      <path
        d="M23 23C15 24 9 27 10 32C11 35.5 17 35 23 27"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M21 24C16 26 13 28 14 31C14.5 32.5 18 32 21 27"
        stroke={color}
        strokeWidth="0.7"
        strokeDasharray="0.5 1"
      />

      {/* Lower Right Wing */}
      <path
        d="M25 23C33 24 39 27 38 32C37 35.5 31 35 25 27"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M27 24C32 26 35 28 34 31C33.5 32.5 30 32 27 27"
        stroke={color}
        strokeWidth="0.7"
        strokeDasharray="0.5 1"
      />
    </svg>
  );
}

export function ButterflyHeroFloat({ className = "w-16 h-16", color = "#C5A880" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Antennae */}
      <path d="M31 16C28 10 22 8 20 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M33 16C36 10 42 8 44 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Body */}
      <path d="M32 16L32 46" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Top Left Wing */}
      <path
        d="M31 18C20 12 6 16 5 28C4 36 14 40 30 34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M28 22C20 18 10 21 9 29C8 34 16 36 28 32" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
      <path d="M26 25C20 22 14 24 13 29C12 32 18 34 26 30" stroke={color} strokeWidth="0.8" strokeDasharray="1 2" strokeOpacity="0.6" />

      {/* Top Right Wing */}
      <path
        d="M33 18C44 12 58 16 59 28C60 36 50 40 34 34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M36 22C44 18 54 21 55 29C56 34 48 36 36 32" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
      <path d="M38 25C44 22 50 24 51 29C52 32 46 34 38 30" stroke={color} strokeWidth="0.8" strokeDasharray="1 2" strokeOpacity="0.6" />

      {/* Bottom Left Wing */}
      <path
        d="M30 35C18 36 10 42 12 50C14 55 22 54 30 42"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M28 37C20 38 14 42 15 47C16 50 21 49 28 41" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />

      {/* Bottom Right Wing */}
      <path
        d="M34 35C46 36 54 42 52 50C50 55 42 54 34 42"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M36 37C44 38 50 42 49 47C48 50 43 49 36 41" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
    </svg>
  );
}

export function ButterflySmallQuote({ className = "w-5 h-5", color = "#A87A84" }) {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 6V18" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M13.5 8C9 5 2 7 2 12C2 15.5 6 17 13.5 14" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M14.5 8C19 5 26 7 26 12C26 15.5 22 17 14.5 14" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M13.5 14C8 15 5 17 6 20C7 22 10.5 21 13.5 17" stroke={color} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M14.5 14C20 15 23 17 22 20C21 22 17.5 21 14.5 17" stroke={color} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
