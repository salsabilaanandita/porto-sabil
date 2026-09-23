"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth trailing animation loop
    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Fluid Trailing Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-[width,height,transform,background-color,border-color] duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-11 h-11 bg-[#0071e3]/12 border-[1.5px] border-[#0071e3] scale-110"
            : isClicked
            ? "w-7 h-7 bg-[#0071e3]/20 border border-[#0071e3] scale-90"
            : "w-8 h-8 bg-transparent border border-[#0071e3]/45"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Center Precise Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          isClicked
            ? "w-2.5 h-2.5 bg-[#0071e3] scale-75"
            : isHovered
            ? "w-2.5 h-2.5 bg-[#0071e3] scale-125"
            : "w-2 h-2 bg-[#0071e3]"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
