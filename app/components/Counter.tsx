"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  targetValue,
  suffix = "",
  duration = 1800,
  className = "font-semibold text-3xl sm:text-4xl text-[#111111] tracking-tight font-mono",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out cubic formula for natural, smooth deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * targetValue);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
}
