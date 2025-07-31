"use client"
import React, { useState, useEffect, useRef } from 'react';

const HorizontalAutoScroll = ({ children, speed = 50 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || isPaused) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Reset position if content is smaller than container
    if (content.scrollWidth <= container.clientWidth) {
      positionRef.current = 0;
      container.scrollLeft = 0;
      return;
    }

    const animate = () => {
      positionRef.current += 1;
      
      // If we've scrolled to the end, reset to start
      if (positionRef.current >= content.scrollWidth - container.clientWidth) {
        positionRef.current = 0;
        // For smooth reset, you might want to animate this instead
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = positionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed]);

  return (
    <div 
      ref={containerRef}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={contentRef}
        style={{
          display: 'inline-block',
        }}
      >
        {children}
        {/* Duplicate content for seamless looping */}
        {React.Children.map(children, child => 
          React.cloneElement(child, { key: `clone-${child.key}` })
        )}
      </div>
    </div>
  );
};

// Example usage:
const Skill = () => {
  return (
    <HorizontalAutoScroll speed={30}>
      {[...Array(10)].map((_, i) => (
        <div key={i} style={{
          display: 'inline-block',
          width: '200px',
          height: '100px',
          margin: '10px',
          backgroundColor: '#ddd',
          textAlign: 'center',
          lineHeight: '100px',
        }}>
          Item {i + 1}
        </div>
      ))}
    </HorizontalAutoScroll>
  );
};

export default Skill;