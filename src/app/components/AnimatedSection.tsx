// components/AnimatedSection.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'slide-up' | 'zoom-in' | 'fade-in';
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            // Add delay before triggering animation
            setTimeout(() => {
              setIsVisible(true);
              if (once) {
                setHasAnimated(true);
              }
            }, delay);
          } else if (!once && !entry.isIntersecting) {
            // Reset animation when element goes out of view (if once is false)
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '-50px 0px -50px 0px', // Trigger animation when element is 50px into viewport
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, once, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${
        isVisible ? `animate-${animation}` : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;