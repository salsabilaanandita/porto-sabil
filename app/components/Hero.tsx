"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  DiscordIcon,
  TwitterIcon,
} from "./Icons";
import Counter from "./Counter";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex flex-col justify-center max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-32 pb-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
        {/* Left Column: Expressive Headline & CTAs */}
        <div className="lg:col-span-7">
            {/* Eyebrow / Name */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f2f7] border border-[#e5e5ea] text-[#6e6e73] text-xs font-mono font-medium mb-6 animate-fade-up opacity-0 hover:-translate-y-0.5 active:scale-95 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-[#111111]">{PORTFOLIO_DATA.personal.name}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.title}</span>
            </div>

            {/* Bold Impact Heading matching user request style */}
            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 active:scale-[0.99] mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.1] uppercase animate-fade-up animation-delay-100 opacity-0 font-display">
                HI, I&apos;M {PORTFOLIO_DATA.personal.name.toUpperCase()}.
              </h1>
              {/* Emerging Solid Underline */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3 opacity-0 group-hover:opacity-100" />
            </div>

            {/* Descriptive Body Paragraphs */}
            <div className="space-y-4 max-w-xl mb-8 animate-fade-up animation-delay-200 opacity-0">
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed transition-transform duration-300 hover:-translate-y-0.5 cursor-default font-normal">
                {PORTFOLIO_DATA.personal.tagline}
              </p>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed transition-transform duration-300 hover:-translate-y-0.5 cursor-default font-normal">
                {PORTFOLIO_DATA.personal.aboutShort[1]}
              </p>
            </div>

            {/* Action Buttons with Download Resume Pill */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 animate-fade-up animation-delay-300 opacity-0">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Permintaan%20Resume%20/%20CV`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#0071e3] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer group"
              >
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#e5e5ea] bg-white/80 hover:bg-white text-[#111111] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-[#0071e3]/40 active:scale-95 cursor-pointer shadow-2xs"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-2.5 animate-fade-up animation-delay-400 opacity-0">
              <span className="text-xs text-[#6e6e73] font-medium mr-1">Sosial Media:</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-[#e5e5ea] bg-transparent hover:bg-white text-[#6e6e73] hover:text-[#0071e3] hover:border-[#0071e3]/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-[#e5e5ea] bg-transparent hover:bg-white text-[#6e6e73] hover:text-[#111111] hover:border-[#111111]/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full border border-[#e5e5ea] bg-transparent hover:bg-white text-[#6e6e73] hover:text-rose-500 hover:border-rose-400/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="p-2.5 rounded-full border border-[#e5e5ea] bg-transparent hover:bg-white text-[#6e6e73] hover:text-indigo-400 hover:border-indigo-400/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-full border border-[#e5e5ea] bg-transparent hover:bg-white text-[#6e6e73] hover:text-[#111111] hover:border-[#111111]/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up animation-delay-300 opacity-0">
            <div className="relative w-[290px] sm:w-[340px] lg:w-[360px] aspect-[4/4.6] sm:aspect-square">
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0071e3]/15 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Kotak Persegi dengan Border Radius Halus */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden border border-[#111111] shadow-2xl animate-float-slow transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer group bg-[#f0f0f3]">
                <Image
                  src={PORTFOLIO_DATA.personal.avatar || "/profile.jpg"}
                  alt={PORTFOLIO_DATA.personal.name}
                  fill
                  sizes="(max-width: 640px) 290px, 360px"
                  className="object-cover object-[50%_20%] grayscale contrast-[1.05] group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />
                <div className="absolute bottom-3.5 inset-x-4 py-1.5 px-3 rounded-xl bg-black/75 backdrop-blur-md text-center text-white border border-white/10 shadow-sm transition-all duration-300 group-hover:bg-black/90">
                  <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase">
                    {PORTFOLIO_DATA.personal.name} · WEB DEVELOPER
                  </span>
                </div>
              </div>




              {/* Floating Skill Badges from PORTFOLIO_DATA */}
              {PORTFOLIO_DATA.floatingSkills.map((chip, idx) => (
                <div
                  key={idx}
                  className={`absolute ${chip.delayClass} z-20`}
                  style={{
                    top: chip.top,
                    bottom: chip.bottom,
                    left: chip.left,
                    right: chip.right,
                  }}
                >
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#e5e5ea] text-xs font-semibold text-[#111111] shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
                    <span>{chip.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid with Single-Run Counting Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-[#e5e5ea] animate-fade-up animation-delay-500 opacity-0">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col hover:-translate-y-1 transition-transform duration-200 cursor-default"
            >
              <Counter targetValue={stat.value} suffix={stat.suffix} />
              <span className="text-xs text-[#6e6e73] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
    </section>
  );
}
