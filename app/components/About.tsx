"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import Counter from "./Counter";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">


      {/* Header Eyebrow */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
            01
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
            TENTANG SAYA
          </span>
          <div className="h-[1px] w-12 bg-[#e5e5ea]" />
        </div>

        {/* Big Headline with Floating Touch & Full Width Underline Animation */}
        <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99] mb-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15] max-w-4xl">
            Mengembangkan sistem{" "}
            <span className="underline decoration-[#0071e3] decoration-2 underline-offset-4 font-semibold text-[#111111]">
              backend
            </span>
            ,{" "}
            <span className="italic text-[#6e6e73] font-normal">
              REST API
            </span>{" "}
            &amp;{" "}
            <span className="text-[#0071e3] font-semibold">
              aplikasi web modern.
            </span>
          </h2>
          {/* Emerging Solid Underline (Non-Gradient, Full Width) */}
          <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
        </div>
      </ScrollReveal>

      {/* 2-Column Content: Code Editor Card Left & Narrative with Metric Boxes Right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Code Editor Box */}
        <div className="lg:col-span-6">
          <ScrollReveal direction="up" delay={150}>
            <div className="rounded-3xl bg-[#111111] text-white p-6 sm:p-8 font-mono text-xs sm:text-sm border border-black shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 active:scale-[0.99] cursor-default">
              {/* Editor Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-slate-400 text-xs">
                <span>// developer.ts</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <p className="hover:-translate-y-0.5 transition-transform duration-200">
                  <span className="text-[#0071e3]">const</span>{" "}
                  <span className="text-emerald-400 font-semibold">developer</span> = {"{"}
                </p>
                <div className="pl-6 space-y-1">
                  <p className="hover:-translate-y-0.5 transition-transform duration-200">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;{PORTFOLIO_DATA.personal.name}&quot;</span>,
                  </p>
                  <p className="hover:-translate-y-0.5 transition-transform duration-200">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-sky-300">&quot;{PORTFOLIO_DATA.personal.title}&quot;</span>,
                  </p>
                  <p className="hover:-translate-y-0.5 transition-transform duration-200">
                    <span className="text-slate-400">focus:</span> [
                  </p>
                  <div className="pl-6 space-y-1 text-amber-300">
                    {PORTFOLIO_DATA.skills.map((skillCat, idx) => (
                      <p key={idx} className="hover:-translate-y-0.5 transition-transform duration-200">
                        &quot;{skillCat.category}&quot;,
                      </p>
                    ))}
                  </div>
                  <p className="hover:-translate-y-0.5 transition-transform duration-200">],</p>
                  <p className="hover:-translate-y-0.5 transition-transform duration-200">
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">&quot;{PORTFOLIO_DATA.personal.location}&quot;</span>
                  </p>
                </div>
                <p className="hover:-translate-y-0.5 transition-transform duration-200">{"};"}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Narrative & Metric Badges */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.aboutShort.map((paragraph, pIdx) => (
                <p key={pIdx} className="hover:-translate-y-1 active:scale-[0.99] transition-transform duration-300 cursor-default">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

{/* GitHub Repository & Experience Stats */}
<ScrollReveal direction="up" delay={300}>
  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    
    <div className="p-3 sm:p-4 rounded-2xl hover:bg-black/[0.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 text-center sm:text-left group cursor-default">
      <Counter
        targetValue={30}
        suffix="+"
        className="font-extrabold text-2xl sm:text-4xl text-[#111111] tracking-tight font-display block mb-1 group-hover:text-[#0071e3] transition-colors"
      />

      <span className="text-[9px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block leading-tight">
        GITHUB REPOSITORIES
      </span>
    </div>

    <div className="p-3 sm:p-4 rounded-2xl hover:bg-black/[0.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 text-center sm:text-left group cursor-default">
      <Counter
        targetValue={1}
        suffix=""
        className="font-extrabold text-2xl sm:text-4xl text-[#111111] tracking-tight font-display block mb-1 group-hover:text-[#0071e3] transition-colors"
      />

      <span className="text-[9px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block leading-tight">
        PENGALAMAN PKL
      </span>
    </div>

  </div>
</ScrollReveal>
        </div>
      </div>
    </section>
  );
}
