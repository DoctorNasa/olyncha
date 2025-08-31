import React from 'react';

interface LogoCatProps {
  className?: string;
  size?: number;
}

/**
 * LogoCat Component
 * Inline SVG of a cat lifting a cup - The Olyn Cha brand logo
 * Monoline design, uses currentColor for easy theming
 */
const LogoCat: React.FC<LogoCatProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Olyn Cha logo - Cat lifting a cup"
    >
      {/* Cat body */}
      <path
        d="M 30 70 Q 30 50 35 45 Q 40 40 50 40 Q 60 40 65 45 Q 70 50 70 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cat head */}
      <circle
        cx="50"
        cy="30"
        r="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Cat ears */}
      <path
        d="M 40 25 L 38 18 L 42 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 60 25 L 62 18 L 58 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Cat eyes */}
      <circle cx="45" cy="30" r="1.5" fill="currentColor" />
      <circle cx="55" cy="30" r="1.5" fill="currentColor" />
      
      {/* Cat nose */}
      <path
        d="M 50 33 L 48 35 M 50 33 L 52 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Cat arm holding cup */}
      <path
        d="M 65 50 Q 72 48 75 50 Q 78 52 78 58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cup */}
      <path
        d="M 72 58 Q 72 65 75 65 Q 78 65 82 65 Q 85 65 85 58 Q 85 52 82 52 Q 78 52 75 52 Q 72 52 72 58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cup handle */}
      <path
        d="M 85 56 Q 88 56 88 59 Q 88 62 85 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Steam from cup */}
      <path
        d="M 76 50 Q 77 48 76 46 M 80 50 Q 79 48 80 46 M 84 50 Q 85 48 84 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Cat tail */}
      <path
        d="M 30 65 Q 20 60 15 65 Q 10 70 15 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cat whiskers */}
      <path
        d="M 35 30 L 30 28 M 35 33 L 30 33 M 65 30 L 70 28 M 65 33 L 70 33"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};

export default LogoCat;
