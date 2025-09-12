"use client";

import React, { useRef, useState, useEffect, ReactNode, MouseEvent, useCallback } from 'react'; // Added useCallback
import Link from 'next/link';

// ... (interface remains the same)
interface DraggableInteractiveLinkBoxProps {
  href: string;
  className?: string;
  children: ReactNode;
  maxRotate?: number;
  perspective?: number;
  dragConstraint?: number;
  stretchFactor?: number;
}


const DraggableInteractiveLinkBox: React.FC<DraggableInteractiveLinkBoxProps> = ({
  href,
  className,
  children,
  maxRotate = 6,
  perspective = 1000,
  dragConstraint = 50,
  stretchFactor = 0.05,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startDragMouse, setStartDragMouse] = useState({ x: 0, y: 0 });
  const [startDragCard, setStartDragCard] = useState({ x: 0, y: 0 });

  // ... (handleMouseMoveTilt and handleMouseLeaveTilt are fine)
  const handleMouseMoveTilt = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || isDragging) return;
    setIsHovering(true);
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
    setStartDragCard({ x: position.x, y: position.y });
  };

  // WRAP these two functions in useCallback
  const handleMouseMoveDrag = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!isDragging || !cardRef.current) return;

    let newX = startDragCard.x + (e.clientX - startDragMouse.x);
    let newY = startDragCard.y + (e.clientY - startDragMouse.y);

    newX = Math.max(-dragConstraint, Math.min(dragConstraint, newX));
    newY = Math.max(-dragConstraint, Math.min(dragConstraint, newY));
    
    setPosition({ x: newX, y: newY });
  }, [isDragging, startDragCard, startDragMouse, dragConstraint]); // Add dependencies for this function

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
  }, [isDragging]); // Add dependencies for this function

  // ADD the useCallback-wrapped functions to the dependency array of useEffect
  useEffect(() => {
    if (isDragging) {
      // Create local handlers that call the memoized functions
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
      setPosition({ x: 0, y: 0 });
    }
  }, [isDragging, handleMouseMoveDrag, handleMouseUp]); // CORRECTED dependency array


  // ... (rest of the component logic for transforms and the return statement remains the same)
  // Calculate stretch effect (inverse scale)
  const dragDistance = Math.sqrt(position.x ** 2 + position.y ** 2);
  const normalizedDistance = Math.min(1, dragDistance / dragConstraint); // 0 to 1
  const currentStretchScale = 1 - (normalizedDistance * stretchFactor); // Scale down as it's pulled

  // Determine transform based on state
  let transformValue = '';
  if (isDragging) {
    transformValue = `perspective(${perspective}px) translate(${position.x}px, ${position.y}px) scale(${currentStretchScale})`;
  } else {
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
        const dragThreshold = 5;
        if (Math.abs(startDragCard.x - position.x) > dragThreshold || Math.abs(startDragCard.y - position.y) > dragThreshold ) {
            if (isDragging){
                e.preventDefault();
            }
        }
      }}
      className={`
        draggable-card relative block transform-style-preserve-3d 
        cursor-grab 
        ${isDragging ? 'cursor-grabbing shadow-2xl z-20' : 'hover:shadow-2xl z-10'}
        transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.3,1)]
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