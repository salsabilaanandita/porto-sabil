"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import Counter from "./Counter";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Full-Bleed Running Background Typography Ticker Stream (Page Background) */}
      <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 -z-10 pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="animate-bg-marquee flex items-center gap-8 whitespace-nowrap text-6xl sm:text-8xl lg:text-9xl font-mono font-black text-stroke-bg tracking-tighter">
          <span>01 TENTANG SAYA</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">WEB DEVELOPER</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>REST API &amp; DATABASE</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">REKAYASA SOFTWARE</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>01 TENTANG SAYA</span>
          <span className="text-[#0071e3]/30">///</span>

        </div>
      </div>

      {/* Subtle Reverse Running Ticker */}
      <div className="absolute inset-x-0 bottom-8 -z-10 pointer-events-none select-none overflow-hidden opacity-20 sm:opacity-35">
        <div className="animate-bg-marquee-reverse flex items-center gap-6 whitespace-nowrap text-4xl sm:text-6xl font-mono font-black text-stroke-blue-bg tracking-tight">
          <span>01 FILOSOFI</span>
          <span>·</span>
          <span>KUALITAS KODE</span>
          <span>·</span>
          <span>OPTIMAL &amp; TERSTRUKTUR</span>
          <span>·</span>
          <span>01 FILOSOFI</span>
          <span>·</span>
          <span>KUALITAS KODE</span>
          <span>·</span>
        </div>
      </div>

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

          {/* Metric Badges */}
          <ScrollReveal direction="up" delay={300}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-transparent border border-[#e5e5ea] hover:border-[#0071e3]/40 hover:bg-white/80 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 text-center sm:text-left"
                >
                  <Counter
                    targetValue={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl sm:text-3xl font-semibold font-mono text-[#111111] block mb-1"
                  />
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
