// src/components/InfiniteMovingCards.jsx

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn'; // Ensure you have this utility function or replace it with a relevant className joining function.

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'right') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-56 ssssxl:max-w-xs sssxl:max-w-md sssxxl:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ssxl:max-w-6xl sxl:max-w-7xl overflow-hidden mt-12 md:mt-32 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-0 md:gap-8 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className="w-[90px] max-w-full relative rounded-2xl flex-shrink-0 border-slate-700 md:pt-8 px-8 md:w-[100px]"
            style={{
              // background: 'white',
              // border: "2px solid rgba(23, 158, 255",
              // boxShadow: " inset 0px 0px 3px 5px rgba(23, 158, 255, 0.325)"
            }}
            key={item.name}
          >
            <img src={item.img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
