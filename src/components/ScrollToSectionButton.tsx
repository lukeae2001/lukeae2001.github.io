// src/components/ScrollToSectionButton.tsx
"use client"; 

import React from 'react';

interface ScrollToSectionButtonProps {
  targetId: string;
  ariaLabel?: string;
}

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({ targetId, ariaLabel }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <a 
        href={`#${targetId}`} 
        aria-label={ariaLabel || "Scroll to next section"}
        onClick={handleScroll}
        // We will replace 'animate-bounce' with our custom animation class later
        className="bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer animate-slow-bounce" // Using a placeholder for custom animation
      >
        <svg 
          className="w-6 h-6 text-black" // CHANGED text-blue-500 to text-black
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  );
};

export default ScrollToSectionButton;