"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Animated Subtle Grid / Matrix */}
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Subtle Dot Matrix Accent with Electric Blue Highlights */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 113, 227, 0.35) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Diagonal Light Sweep Beam across screen */}
      <div className="absolute -left-[50%] -top-[50%] w-[200%] h-[140px] bg-gradient-to-r from-transparent via-[#0071e3]/14 to-transparent blur-2xl animate-light-sweep" />

      {/* Floating Animated Luminous Orbs (Abu, Putih, Hitam, Biru) */}
      <div className="absolute -top-[10%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-gradient-to-br from-[#0071e3]/18 via-sky-400/12 to-transparent blur-3xl animate-blob-1" />
      <div className="absolute top-[18%] -right-[15%] w-[68vw] h-[68vw] rounded-full bg-gradient-to-bl from-slate-800/10 via-[#0071e3]/14 to-transparent blur-3xl animate-blob-2" />
      <div className="absolute top-[44%] -left-[18%] w-[72vw] h-[72vw] rounded-full bg-gradient-to-tr from-sky-400/16 via-slate-400/12 to-transparent blur-3xl animate-blob-3" />
      <div className="absolute top-[68%] -right-[15%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-[#0071e3]/18 via-blue-500/12 to-transparent blur-3xl animate-blob-1" />
      <div className="absolute -bottom-[8%] left-[8%] w-[75vw] h-[75vw] rounded-full bg-gradient-to-t from-slate-900/8 via-[#0071e3]/12 to-transparent blur-3xl animate-blob-2" />

      {/* Floating Animated Technical & Code Elements */}
      <div className="absolute top-[12%] left-[6%] font-mono font-bold text-sm text-[#0071e3]/30 animate-float-slow hidden sm:block">
        {"{ code: 'clean' }"}
      </div>

      <div className="absolute top-[26%] right-[8%] font-mono font-bold text-base text-black/[0.14] animate-float-1 hidden sm:block">
        {"</>"}
      </div>

      <div className="absolute top-[40%] left-[5%] font-mono font-bold text-xs text-[#0071e3]/35 tracking-widest animate-float-2 hidden md:block">
        01001101 · 01000101 · 01010011
      </div>

      <div className="absolute top-[56%] right-[10%] font-mono font-bold text-base text-black/[0.12] animate-float-3 hidden sm:block">
        {"[ async => await ]"}
      </div>

      <div className="absolute top-[70%] left-[8%] font-mono font-bold text-sm text-[#0071e3]/30 animate-float-4 hidden sm:block">
        {"(λ) => { scale: '100x' }"}
      </div>

      <div className="absolute top-[84%] right-[6%] font-mono font-bold text-xs text-black/[0.15] tracking-widest animate-float-5 hidden md:block">
        [SYS_LATENCY: 0.012ms] · [REGION: AP-SOUTHEAST-3]
      </div>

      {/* Floating Geometric Plus Markers & Crosshairs */}
      <div className="absolute top-[18%] right-[14%] text-lg font-mono font-bold text-[#0071e3]/35 animate-float-slow select-none">
        +
      </div>
      <div className="absolute top-[34%] left-[12%] text-lg font-mono font-bold text-black/[0.18] animate-float-1 select-none">
        +
      </div>
      <div className="absolute top-[62%] right-[16%] text-lg font-mono font-bold text-[#0071e3]/35 animate-float-2 select-none">
        +
      </div>
      <div className="absolute top-[80%] left-[14%] text-lg font-mono font-bold text-black/[0.18] animate-float-3 select-none">
        +
      </div>

      {/* Ambient Drifting Glowing Particles */}
      <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-[#0071e3]/40 blur-[1px] animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-slate-500/35 blur-[1px] animate-float-1" />
      <div className="absolute top-2/3 left-1/3 w-3.5 h-3.5 rounded-full bg-sky-500/35 blur-[1px] animate-float-2" />
      <div className="absolute top-3/4 right-1/5 w-3 h-3 rounded-full bg-[#0071e3]/35 blur-[1px] animate-float-3" />
      <div className="absolute top-1/2 left-3/4 w-4.5 h-4.5 rounded-full bg-indigo-500/30 blur-[1px] animate-float-4" />
    </div>
  );
}
