"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);

      const numProjects = PORTFOLIO_DATA.projects.length;
      const step = 1 / (numProjects - 1);
      const index = Math.min(
        Math.max(Math.round(clampedProgress / step), 0),
        numProjects - 1
      );
      setActiveProjectIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToProject = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const totalScrollDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const targetOffset =
      window.scrollY +
      rect.top +
      (index / (PORTFOLIO_DATA.projects.length - 1)) * totalScrollDistance;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="project"
      ref={sectionRef}
      className="relative h-[280vh] sm:h-[320vh] border-t border-[#e5e5ea]"
    >
      {/* Sticky Fullscreen Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden z-10">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
              03
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
              PROYEK PILIHAN
            </span>
            <div className="h-[1px] w-12 bg-[#e5e5ea]" />
          </div>

          <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
              Kumpulan proyek aplikasi web, API &amp; sistem yang telah dibangun.
            </h2>
            <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-2.5 opacity-0 group-hover:opacity-100" />
          </div>
        </div>

        {/* Large Horizontal Slide Track Driven by Cursor/Page Scroll */}
        <div className="relative z-10 w-full mx-auto">
          {/* Sliding Viewport */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
              style={{
                transform: `translateX(-${activeProjectIndex * 100}%)`,
              }}
            >
              {PORTFOLIO_DATA.projects.map((project, idx) => {
                const projectNumber = `0${idx + 1}`;
                const isActive = activeProjectIndex === idx;

                return (
                  <div
                    key={project.id}
                    className={`w-full shrink-0 py-2 sm:py-4 px-0 transition-all duration-700 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-20 scale-[0.98] pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      
                      {/* Left: Large Prominent Visual Preview with Clean Frame */}
                      <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#e5e5ea] bg-[#1c1c20] shadow-lg group/img flex flex-col">
                        {/* Mock Browser Top Header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#25252a] border-b border-white/5 select-none shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/40 text-[10px] font-mono text-zinc-400 max-w-[220px] sm:max-w-[300px] truncate border border-white/5">
                            <span className="text-[#0071e3]">https://</span>
                            <span className="truncate">{project.id}.app/preview</span>
                          </div>
                          <div className="font-mono text-[10px] font-bold text-zinc-400">
                            {projectNumber} / 0{PORTFOLIO_DATA.projects.length}
                          </div>
                        </div>

                        {/* Screenshot Frame (Full Visibility, No Cropping) */}
                        <div className="relative aspect-16/9 w-full bg-[#0e0e12] overflow-hidden flex items-center justify-center p-0.5 sm:p-1.5">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 1024px) 100vw, 850px"
                            className="object-contain transition-transform duration-500 group-hover/img:scale-[1.01]"
                          />
                        </div>
                      </div>


                      {/* Right: Spacious Detailed Information & Action Buttons */}
                      <div className="lg:col-span-5 flex flex-col justify-between py-2">
                        <div>
                          {/* Category & Metadata */}
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0071e3] px-3 py-1 rounded-md bg-[#0071e3]/10">
                              + {project.category}
                            </span>
                            <span className="text-xs font-mono text-[#6e6e73]">
                              {project.year} · {project.role}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-3 leading-tight">
                            {project.title}
                          </h3>

                          {/* Project Description */}
                          <p className="text-xs sm:text-sm lg:text-base text-[#6e6e73] leading-relaxed mb-6 font-normal">
                            {project.description}
                          </p>

                          {/* Technology Stack Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-black/[0.04] text-[#111111] border border-black/[0.03]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-4 pt-4 border-t border-[#e5e5ea]">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] text-white hover:bg-[#0071e3] text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                            >
                              <span>Kunjungi Demo</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e5e5ea] bg-white text-[#111111] hover:border-[#0071e3] hover:text-[#0071e3] text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Synced Indicator Bar */}
        <div className="flex items-center justify-between mt-6 relative z-10 max-w-sm mx-auto w-full">
          <span className="font-mono text-xs font-semibold text-[#6e6e73]">
            0{activeProjectIndex + 1} / 0{PORTFOLIO_DATA.projects.length}
          </span>
          <div className="flex items-center gap-2">
            {PORTFOLIO_DATA.projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToProject(idx)}
                aria-label={`Project ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  activeProjectIndex === idx
                    ? "w-8 bg-[#0071e3]"
                    : "w-2 bg-[#e5e5ea] hover:bg-[#86868b]"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-[#86868b]">
            Scroll ke bawah
          </span>
        </div>

      </div>
    </section>
  );
}
