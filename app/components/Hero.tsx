"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./Icons";
import Counter from "./Counter";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PORTFOLIO_DATA.personal.typewriterRoles;
    if (!roles || roles.length === 0) return;

    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 20 : 45;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="flex flex-col justify-center max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-24 sm:pt-28 pb-8 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6 sm:mb-8">
        {/* Left Column: Expressive Headline & CTAs */}
        <div className="lg:col-span-7">
            {/* Eyebrow / Name */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#e5e5ea] text-[#6e6e73] text-xs font-mono font-medium mb-3 animate-fade-up opacity-0 hover:-translate-y-0.5 active:scale-95 transition-all cursor-default shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-[#111111]">{PORTFOLIO_DATA.personal.name}</span>
              <span className="text-[#86868b]">·</span>
              <span className="text-[#0071e3] font-semibold">{PORTFOLIO_DATA.personal.title}</span>
            </div>

            {/* Bold Impact Heading */}
            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] mb-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.12] uppercase animate-fade-up animation-delay-100 opacity-0 font-display">
                HI, I&apos;M {PORTFOLIO_DATA.personal.name.toUpperCase()}.
              </h1>
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-2 opacity-0 group-hover:opacity-100" />
            </div>

            {/* Dynamic Typewriter Role (Tanpa titik biru, kursor biru persis di ujung teks) */}
            <div className="mb-3.5 min-h-[30px] font-mono text-base sm:text-lg md:text-xl font-bold tracking-wide animate-fade-up animation-delay-150 opacity-0">
              <span className="text-[#111111] inline">
                {displayText}
                <span className="inline-block w-[3px] h-5 sm:h-6 bg-[#0071e3] animate-pulse ml-1.5 align-middle rounded-full" />
              </span>
            </div>

            {/* Concise Tagline */}
            <div className="max-w-2xl mb-5 animate-fade-up animation-delay-200 opacity-0">
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed font-normal">
                {PORTFOLIO_DATA.personal.tagline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-5 animate-fade-up animation-delay-300 opacity-0">
              <a
                href={PORTFOLIO_DATA.personal.resumePdf || "/Salsabila%20Anandita%20Putri.pdf"}
                download="Salsabila Anandita Putri.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#0071e3] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:scale-95 cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-200/80 bg-white/90 hover:bg-white text-[#111111] hover:text-[#0071e3] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-2xs"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-2.5 animate-fade-up animation-delay-400 opacity-0">
              <span className="text-xs text-[#6e6e73] font-semibold mr-1">Sosial Media:</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 text-[#6e6e73] hover:text-[#0071e3] transition-all hover:-translate-y-0.5 active:scale-95 bg-transparent border-0"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1.5 text-[#6e6e73] hover:text-[#111111] transition-all hover:-translate-y-0.5 active:scale-95 bg-transparent border-0"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 text-[#6e6e73] hover:text-rose-500 transition-all hover:-translate-y-0.5 active:scale-95 bg-transparent border-0"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up animation-delay-300 opacity-0">
            <div className="relative w-[240px] sm:w-[270px] lg:w-[290px] aspect-square">
              {/* Ambient glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0071e3]/15 to-transparent rounded-3xl blur-xl -z-10" />

              {/* Kotak Persegi Murni (1:1) dengan Border Radius Halus */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-[#111111] shadow-xl animate-float-slow transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer group bg-[#f0f0f3]">
                <Image
                  src={PORTFOLIO_DATA.personal.avatar || "/salsabila-formal.jpg"}
                  alt={PORTFOLIO_DATA.personal.name}
                  fill
                  sizes="(max-width: 640px) 240px, 290px"
                  className="object-cover object-[50%_28%] grayscale contrast-[1.05] group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />
              </div>

              {/* Floating Skill Badges: teks warna putih, transparan no background border */}
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
                  <div className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] bg-transparent border-0 shadow-none hover:-translate-y-1 hover:brightness-110 transition-all cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shadow-xs" />
                    <span>{chip.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      {/* Stats Grid with Balanced Full-Width Distribution */}
      <div className="w-full pt-8 mt-2 border-t border-[#e5e5ea] animate-fade-up animation-delay-500 opacity-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-14 w-full max-w-5xl xl:max-w-6xl mx-auto">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center py-2 px-3 rounded-2xl hover:bg-black/[0.02] hover:-translate-y-1 transition-all duration-200 cursor-default group"
            >
              <Counter
                targetValue={stat.value}
                suffix={stat.suffix}
                className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight font-display group-hover:text-[#0071e3] transition-colors"
              />

              <span className="text-xs sm:text-sm text-slate-600 font-medium mt-1.5 tracking-wide whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
