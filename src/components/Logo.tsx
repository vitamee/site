import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  withBg?: boolean;
}

export default function Logo({ className = 'h-10', light = false, withBg = false }: LogoProps) {
  // Color configuration:
  // Text "Vitam" is black (#111111) or white (#FFFFFF)
  // Infinity "ee" and Smile are bright neon lime/green (#CBEF43)
  const textColor = light ? '#FFFFFF' : '#111111';
  const greenColor = '#CBEF43';

  return (
    <div className={`inline-flex items-center justify-center transition-all duration-300 ${withBg ? 'bg-white p-2 px-3 rounded-2xl border border-brand-border/40 shadow-xs' : ''}`}>
      <svg
        viewBox="0 0 135 50"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vitamee"
      >
        {/* "Vitam" text */}
        <text
          x="12"
          y="32"
          fill={textColor}
          style={{
            fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '-0.03em'
          }}
        >
          Vitam
        </text>

        {/* "ee" representing the Infinity Symbol in green */}
        {/* Scaled and shifted beautifully to join "Vitam" */}
        <path
          d="M109 19.5C104.8 19.5 101.7 22.8 100 25.0C98.3 22.8 95.2 19.5 91 19.5C86.8 19.5 83 22.8 83 27.0C83 31.2 86.8 34.5 91 34.5C95.2 34.5 98.3 31.2 100 29.0C101.7 31.2 104.8 34.5 109 34.5C113.2 34.5 117 31.2 117 27.0C117 22.8 113.2 19.5 109 19.5ZM91 30.5C88.8 30.5 87 28.9 87 27.0C87 25.1 88.8 23.5 91 23.5C92.8 23.5 95 25.3 96.3 27.0C95 28.7 92.8 30.5 91 30.5ZM109 30.5C107.2 30.5 105 28.7 103.7 27.0C105 25.3 107.2 23.5 109 23.5C111.2 23.5 113 25.1 113 27.0C113 28.9 111.2 30.5 109 30.5Z"
          fill={greenColor}
        />

        {/* Smile - discreet green curve under the brand name */}
        <path
          d="M15 41C45 45.5 75 45.5 105 41"
          stroke={greenColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}
