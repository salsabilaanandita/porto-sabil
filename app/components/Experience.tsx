"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Static Full-Page Background Typography Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none flex flex-col items-center justify-center opacity-40 sm:opacity-55 overflow-hidden">
        <span className="text-[14vw] sm:text-[13vw] font-mono font-black text-stroke-bg tracking-tighter uppercase whitespace-nowrap leading-none text-center">
          EXPERIENCE
        </span>
        <span className="text-[5vw] sm:text-[4.5vw] font-mono font-bold text-stroke-blue-bg tracking-widest uppercase whitespace-nowrap leading-none mt-2 opacity-60 text-center">
          ENGINEERING · DEVELOPMENT · SYSTEMS
        </span>
      </div>

      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
                05
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
                EXPERIENCE
              </span>
              <div className="h-[1px] w-12 bg-[#e5e5ea]" />
            </div>

            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99]">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
                Pengalaman kerja &amp; industri profesional.
              </h2>
              {/* Emerging Solid Underline */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#6e6e73] max-w-xs font-mono hover:-translate-y-1 active:scale-[0.99] transition-transform duration-300 cursor-default">
            Pengalaman nyata dalam pengembangan software dan kolaborasi tim.
          </p>
        </div>
      </ScrollReveal>

      {/* Clean Horizontal Divider Rows */}
      <div className="border-t border-[#e5e5ea] relative z-10">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => {
          const numberString = `0${idx + 1}`;
          return (
            <ScrollReveal key={exp.id} direction="up" delay={idx * 120}>
              <div className="relative py-8 sm:py-10 border-b border-[#e5e5ea] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group cursor-pointer overflow-hidden">
                {/* Background Watermark Index Number per row */}
                <div className="absolute right-4 bottom-2 -z-0 select-none pointer-events-none text-6xl sm:text-8xl font-mono font-black text-black/[0.03] group-hover:text-[#0071e3]/10 transition-colors duration-300">
                  {numberString}
                </div>

                {/* Category / Sub-header bar matching screenshot */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-xs font-mono font-semibold text-[#0071e3]">
                    + {numberString}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                    {exp.company}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e5e5ea] group-hover:bg-[#0071e3]/40 transition-colors" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                  {/* Left: Index & Date */}
                  <div className="lg:col-span-2 space-y-1">
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {numberString}
                    </span>
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {exp.period}
                    </span>
                  </div>

                  {/* Middle: Role & Company */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#0071e3] transition-colors mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6e6e73] uppercase tracking-wider">
                      <span className="text-[#0071e3]">+ —</span>
                      <span>{exp.company} · {exp.location}</span>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="lg:col-span-5">
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed group-hover:text-[#111111] transition-colors font-normal">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
