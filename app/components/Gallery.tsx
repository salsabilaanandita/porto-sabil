"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSlide(index);
          }
        },
        { threshold: 0.55 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section id="gallery" className="py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea]">
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
            04
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
            DOKUMENTASI &amp; FOKUS
          </span>
          <div className="h-[1px] w-12 bg-[#e5e5ea]" />
        </div>

        <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99]">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
            Eksplorasi visual dalam rekayasa software &amp; pengembangan sistem.
          </h2>
          {/* Emerging Solid Underline (Non-Gradient, Full Width) */}
          <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Visual Display (Large Image with Crossfade & 10px radius) */}
        <div className="lg:col-span-7 lg:sticky lg:top-24">
          <div className="relative w-full aspect-16/10 rounded-[10px] overflow-hidden bg-[#e5e5ea] border border-[#e5e5ea]">
            {PORTFOLIO_DATA.gallery.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {PORTFOLIO_DATA.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  slideRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? "w-8 bg-[#111111]"
                    : "w-2 bg-[#d1d1d6]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Story Triggers (Tanpa Garis Kiri & Kanan / Border-x-0) */}
        <div className="lg:col-span-5 flex flex-col space-y-28 lg:py-16">
          {PORTFOLIO_DATA.gallery.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              onClick={() => {
                setActiveSlide(idx);
                slideRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`py-8 px-2 border-y border-[#e5e5ea] border-x-0 rounded-[10px] transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? "bg-transparent opacity-100 -translate-y-1.5 border-[#0071e3]/60"
                  : "bg-transparent border-[#e5e5ea]/50 opacity-40 hover:opacity-90 hover:border-[#e5e5ea]"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#0071e3] font-bold tracking-wider">
                  + 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                  STORY {idx + 1}
                </span>
                <div className="h-[1px] flex-1 bg-[#e5e5ea]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed font-normal">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
