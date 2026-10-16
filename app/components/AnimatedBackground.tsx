"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Atmospheric Sky Gradient (Translucent Sky Blue & Soft White) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e3f2fd]/55 via-[#f5f9fd]/75 to-[#e6f3fc]/55" />

      {/* Gentle Morning Sunlight Glow (Top-right warm aura) */}
      <div className="absolute -top-[12%] right-[8%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-amber-100/35 via-sky-100/20 to-transparent blur-3xl animate-cloud-2" />

      {/* Cloud Formation 1: Upper Sky / Hero (Soft Fluffy White with Sky Blue Tints) */}
      <div className="absolute -top-[10%] -left-[12%] w-[80vw] h-[52vw] rounded-full bg-gradient-to-r from-white/90 via-sky-100/60 to-white/75 blur-3xl animate-cloud-1" />

      {/* Cloud Formation 2: Upper-Mid Sky (Drifting from Right) */}
      <div className="absolute top-[18%] -right-[18%] w-[75vw] h-[48vw] rounded-full bg-gradient-to-bl from-white/85 via-sky-200/30 to-white/80 blur-3xl animate-cloud-2" />

      {/* Cloud Formation 3: Mid Sky / Skills & Projects (Ethereal Center Cloud) */}
      <div className="absolute top-[40%] -left-[15%] w-[85vw] h-[58vw] rounded-full bg-gradient-to-tr from-sky-200/35 via-white/90 to-sky-100/45 blur-3xl animate-cloud-3" />

      {/* Cloud Formation 4: Lower Sky / Experience */}
      <div className="absolute top-[64%] -right-[16%] w-[80vw] h-[52vw] rounded-full bg-gradient-to-tl from-white/90 via-sky-100/50 to-white/70 blur-3xl animate-cloud-1" />

      {/* Cloud Formation 5: Horizon / Education & Contact */}
      <div className="absolute -bottom-[8%] left-[2%] w-[88vw] h-[55vw] rounded-full bg-gradient-to-t from-white/90 via-sky-200/30 to-transparent blur-3xl animate-cloud-2" />

      {/* Airy Cloud Wisps (Awan Tipis Semi-Transparan) */}
      <div className="absolute top-[14%] left-[25%] w-[42vw] h-[14vw] rounded-full bg-white/75 blur-2xl animate-cloud-3" />
      <div className="absolute top-[35%] right-[18%] w-[46vw] h-[16vw] rounded-full bg-white/70 blur-2xl animate-cloud-1" />
      <div className="absolute top-[58%] left-[18%] w-[48vw] h-[18vw] rounded-full bg-white/75 blur-2xl animate-cloud-2" />
      <div className="absolute top-[80%] right-[22%] w-[44vw] h-[15vw] rounded-full bg-white/80 blur-2xl animate-cloud-3" />

      {/* Atmospheric Soft Light Shimmer */}
      <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(rgba(255,255,255,0.95)_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
    </div>
  );
}
