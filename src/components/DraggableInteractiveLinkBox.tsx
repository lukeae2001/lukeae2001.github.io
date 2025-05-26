// src/components/DraggableInteractiveLinkBox.tsx
"use client";

import React, { useRef, useState, useEffect, ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface DraggableInteractiveLinkBoxProps {
  href: string;
  className?: string;
  children: ReactNode;
  maxRotate?: number;
  perspective?: number;
  dragConstraint?: number; // Max pixels the card can be dragged from origin
  stretchFactor?: number; // How much to visually indicate "stretch" (e.g., scale down)
}

const DraggableInteractiveLinkBox: React.FC<DraggableInteractiveLinkBoxProps> = ({
  href,
  className,
  children,
  maxRotate = 6,
  perspective = 1000,
  dragConstraint = 50, // Card can be dragged 50px in any direction from center
  stretchFactor = 0.05, // Card will scale down by up to 5% at max drag
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Current offset from original
  const [startDragMouse, setStartDragMouse] = useState({ x: 0, y: 0 }); // Mouse position at drag start
  const [startDragCard, setStartDragCard] = useState({ x: 0, y: 0 }); // Card position at drag start

  // For 3D tilt effect
  const handleMouseMoveTilt = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || isDragging) return;
    setIsHovering(true);
    // ... (tilt logic from previous version - keeping it concise here)
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-mouseY / (rect.height / 2)) * maxRotate;
    const rotateY = (mouseX / (rect.width / 2)) * maxRotate;
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeaveTilt = () => {
    if (!cardRef.current || isDragging) return;
    setIsHovering(false);
    const card = cardRef.current;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  };
  
  // Drag handlers
  const handleMouseDown = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0) return; 
    e.preventDefault();
    setIsDragging(true);
    setIsHovering(false);
    if (cardRef.current) {
        cardRef.current.style.setProperty('--rotateX', '0deg');
        cardRef.current.style.setProperty('--rotateY', '0deg');
    }
    setStartDragMouse({ x: e.clientX, y: e.clientY });
    setStartDragCard({ x: position.x, y: position.y }); // Start from current position
  };

  const handleMouseMoveDrag = (e: MouseEvent<HTMLElement>) => {
    if (!isDragging || !cardRef.current) return;

    let newX = startDragCard.x + (e.clientX - startDragMouse.x);
    let newY = startDragCard.y + (e.clientY - startDragMouse.y);

    // Apply constraints
    newX = Math.max(-dragConstraint, Math.min(dragConstraint, newX));
    newY = Math.max(-dragConstraint, Math.min(dragConstraint, newY));
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Position will animate back to 0,0 due to CSS transition when style is reset
    // For a more "springy" return, a library is needed. Here we just reset.
    // The transition will occur when the transform style is updated in the main return
  };

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: globalThis.MouseEvent) => 
        handleMouseMoveDrag(e as unknown as MouseEvent<HTMLElement>);
      const handleGlobalMouseUp = () => handleMouseUp();

      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    } else {
      // When not dragging, animate position back to 0,0
      // This will trigger the CSS transition on the transform property
      setPosition({ x: 0, y: 0 });
    }
  }, [isDragging, startDragMouse, startDragCard]);


  // Calculate stretch effect (inverse scale)
  const dragDistance = Math.sqrt(position.x ** 2 + position.y ** 2);
  const normalizedDistance = Math.min(1, dragDistance / dragConstraint); // 0 to 1
  const currentStretchScale = 1 - (normalizedDistance * stretchFactor); // Scale down as it's pulled

  // Determine transform based on state
  let transformValue = '';
  if (isDragging) {
    transformValue = `perspective(${perspective}px) translate(${position.x}px, ${position.y}px) scale(${currentStretchScale})`;
  } else {
    // When not dragging, apply tilt or reset to base scale
    // The position x,y will be transitioning back to 0,0 because of setPosition in useEffect
    transformValue = `perspective(${perspective}px) translate(${position.x}px, ${position.y}px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(${isHovering ? 1.03 : 1})`;
  }


  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMoveTilt}
      onMouseLeave={handleMouseLeaveTilt}
      onClick={(e) => {
        // Prevent navigation only if a significant drag occurred AND released on the card
        const dragThreshold = 5; // pixels
        if (Math.abs(startDragCard.x - position.x) > dragThreshold || Math.abs(startDragCard.y - position.y) > dragThreshold ) {
            if (isDragging){ // if mouseup happened outside, isDragging would be false here
                e.preventDefault();
            }
        }
        // Resetting position is handled by the useEffect when isDragging becomes false
      }}
      className={`
        draggable-card relative block transform-style-preserve-3d 
        cursor-grab 
        ${isDragging ? 'cursor-grabbing shadow-2xl z-20' : 'hover:shadow-2xl z-10'}
        transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.3,1)] {/* Spring-like easing */}
        ${className || ''} 
      `}
      style={
        {
          '--rotateX': '0deg',
          '--rotateY': '0deg',
          transform: transformValue,
        } as React.CSSProperties
      }
    >
      {children}
    </Link>
  );
};

export default DraggableInteractiveLinkBox;