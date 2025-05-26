// src/components/InteractiveLinkBox.tsx
"use client"; // This component needs to be a Client Component for event handlers and refs

import React, { useRef, ReactNode } from 'react';
import Link from 'next/link';

interface InteractiveLinkBoxProps {
  href: string;
  className?: string; // To pass through existing styling for the box
  children: ReactNode;
  maxRotate?: number; // Optional: max rotation angle in degrees
  perspective?: number; // Optional: perspective value in pixels
}

const InteractiveLinkBox: React.FC<InteractiveLinkBoxProps> = ({
  href,
  className,
  children,
  maxRotate = 5,     // Default subtle rotation
  perspective = 800, // Default perspective
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation values
    const rotateX = (-mouseY / (rect.height / 2)) * maxRotate;
    const rotateY = (mouseX / (rect.width / 2)) * maxRotate;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.transform = `perspective(${perspective}px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.03)`; // Apply slight scale on hover too
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    // Reset CSS variables and transform
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`; // Reset scale
  };

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        block transform-style-preserve-3d 
        transition-transform duration-150 ease-out /* Smooth transition for reset and scale */
        ${className || ''} 
      `}
      style={
        {
          '--rotateX': '0deg', // Initialize CSS variables
          '--rotateY': '0deg',
          // Initial transform set here for consistency, though it will be overridden by JS on hover/leave
          transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        } as React.CSSProperties
      }
    >
      {children}
    </Link>
  );
};

export default InteractiveLinkBox;