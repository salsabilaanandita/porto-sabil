"use client";

import React, { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => setShouldRender(false), 800);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#fafafa] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"
      }`}
    >
      <div className="w-64 max-w-[80vw] flex flex-col items-center">
        {/* Minimalist Logo / Initial */}
        <div className="text-xs font-mono uppercase tracking-widest text-[#6e6e73] mb-6 animate-pulse">
          {PORTFOLIO_DATA.personal.name} · Portfolio
        </div>

        {/* Loading Progress Line */}
        <div className="w-full h-[2px] bg-[#e5e5ea] rounded-full overflow-hidden relative mb-3">
          <div
            className="h-full bg-[#111111] transition-all duration-200 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text */}
        <div className="text-[11px] font-mono text-[#6e6e73]">
          {progress}%
        </div>
      </div>
    </div>
  );
}
