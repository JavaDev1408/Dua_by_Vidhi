import React from 'react';

export function ButterflyLogoIcon({ className = "w-8 h-7", color = "#9C7847" }) {
  return (
    <svg
      viewBox="0 0 60 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center Body & Head */}
      <ellipse cx="30" cy="24" rx="1.3" ry="9" fill={color} />
      <circle cx="30" cy="14" r="1.5" fill={color} />
      
      {/* Antennae */}
      <path
        d="M29.5 13.5C27 9 22 7.5 19 8.5"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="8.5" r="0.8" fill={color} />
      
      <path
        d="M30.5 13.5C33 9 38 7.5 41 8.5"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="41.5" cy="8.5" r="0.8" fill={color} />

      {/* Left Forewing (Upper Wing) */}
      <path
        d="M29 16C23 10 13 8 7 15C5 18 5 22 8 26C11 30 18 31 29 27"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Left Forewing Inner Veins */}
      <path
        d="M28 18C22 14 14 14 10 18C8 20 8 23 11 25C15 28 22 27 28 25"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.85"
      />
      <path d="M22 17L14 16" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />
      <path d="M24 21L14 20" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />
      <path d="M26 23L16 25" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />

      {/* Right Forewing (Upper Wing) */}
      <path
        d="M31 16C37 10 47 8 53 15C55 18 55 22 52 26C49 30 42 31 31 27"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Right Forewing Inner Veins */}
      <path
        d="M32 18C38 14 46 14 50 18C52 20 52 23 49 25C45 28 38 27 32 25"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.85"
      />
      <path d="M38 17L46 16" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />
      <path d="M36 21L46 20" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />
      <path d="M34 23L44 25" stroke={color} strokeWidth="0.7" strokeOpacity="0.75" />

      {/* Left Hindwing (Lower Wing) */}
      <path
        d="M28.5 26C20 27 12 30 14 37C15 40 21 41 28.5 32"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M26 28C21 29 16 32 17 36C18 38 22 37 26 31"
        stroke={color}
        strokeWidth="0.7"
        strokeOpacity="0.75"
      />

      {/* Right Hindwing (Lower Wing) */}
      <path
        d="M31.5 26C40 27 48 30 46 37C45 40 39 41 31.5 32"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M34 28C39 29 44 32 43 36C42 38 38 37 34 31"
        stroke={color}
        strokeWidth="0.7"
        strokeOpacity="0.75"
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
      <path d="M31 16C28 10 22 8 20 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M33 16C36 10 42 8 44 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M32 16L32 46" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M31 18C20 12 6 16 5 28C4 36 14 40 30 34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M28 22C20 18 10 21 9 29C8 34 16 36 28 32" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
      <path d="M26 25C20 22 14 24 13 29C12 32 18 34 26 30" stroke={color} strokeWidth="0.8" strokeDasharray="1 2" strokeOpacity="0.6" />
      <path
        d="M33 18C44 12 58 16 59 28C60 36 50 40 34 34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M36 22C44 18 54 21 55 29C56 34 48 36 36 32" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
      <path d="M38 25C44 22 50 24 51 29C52 32 46 34 38 30" stroke={color} strokeWidth="0.8" strokeDasharray="1 2" strokeOpacity="0.6" />
      <path
        d="M30 35C18 36 10 42 12 50C14 55 22 54 30 42"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M28 37C20 38 14 42 15 47C16 50 21 49 28 41" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
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
