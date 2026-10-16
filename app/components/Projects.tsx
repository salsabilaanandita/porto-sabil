"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const projects = PORTFOLIO_DATA.projects;
  const numProjects = projects.length;

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : numProjects - 1));
  };

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev < numProjects - 1 ? prev + 1 : 0));
  };

  // Touch Swipe for mobile/trackpad
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  // Desktop Mouse Drag / Flick
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) return;
    setMouseStartX(e.clientX);
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (mouseStartX === null) return;
    if (Math.abs(e.clientX - mouseStartX) > 8) {
      setIsDragging(true);
    }
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX !== null) {
      const distance = mouseStartX - e.clientX;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          nextProject();
        } else {
          prevProject();
        }
      }
    }
    setMouseStartX(null);
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setMouseStartX(null);
    setIsDragging(false);
  };

  // Keyboard navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.getElementById("project");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      if (!inView) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : numProjects - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveProjectIndex((prev) => (prev < numProjects - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [numProjects]);

  return (
    <section
      id="project"
      className="relative py-24 sm:py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden"
    >
      {/* Section Header with Integrated Slide Controls (Clean & Unobtrusive) */}
      <ScrollReveal direction="up" delay={0}>
        <div className="mb-8 sm:mb-12 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
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
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-[1.15] max-w-2xl">
                Kumpulan proyek aplikasi web, API &amp; sistem yang telah dibangun.
              </h2>
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-2.5 opacity-0 group-hover:opacity-100" />
            </div>
          </div>

          {/* Navigation Controller in Header (Cohesive Sky Glass Island - Theme Matched) */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-sky-200/60 shadow-[0_4px_20px_rgba(0,113,227,0.08)] select-none">
              {/* Project Counter with Pulsing Sky-Blue Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />
                <span className="font-extrabold text-[#0071e3] text-sm">0{activeProjectIndex + 1}</span>
                <span className="text-slate-300 font-normal">/</span>
                <span className="text-slate-500 font-semibold text-xs">0{numProjects}</span>
              </div>

              {/* Subtle Glass Divider */}
              <div className="h-5 w-[1px] bg-slate-200/80" />

              {/* Prev Button (Cloud Glass Style) */}
              <button
                type="button"
                onClick={prevProject}
                aria-label="Proyek sebelumnya"
                className="w-9 h-9 rounded-xl bg-sky-50/80 hover:bg-[#0071e3] text-[#0071e3] hover:text-white border border-sky-100 hover:border-[#0071e3] active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer group shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Next Button (Active Vibrant Sky Blue CTA) */}
              <button
                type="button"
                onClick={nextProject}
                aria-label="Proyek selanjutnya"
                className="w-9 h-9 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white border border-[#0071e3] active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer group shadow-sm shadow-blue-500/25"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Slide Container (Clean Layout with Touch Swipe & Drag on Image) */}
      <div
        className="relative z-10 w-full mx-auto"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Sliding Viewport */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
            style={{
              transform: `translateX(-${activeProjectIndex * 100}%)`,
            }}
          >
            {projects.map((project, idx) => {
              const projectNumber = `0${idx + 1}`;
              const isActive = activeProjectIndex === idx;

              return (
                <div
                  key={project.id}
                  className={`w-full shrink-0 py-2 sm:py-4 px-0 transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-20 pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Left: Large Prominent Visual Preview with Clean Frame (Draggable) */}
                    <div
                      className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#e5e5ea] bg-[#1c1c20] shadow-lg group/img flex flex-col cursor-grab active:cursor-grabbing select-none"
                      onMouseDown={onMouseDown}
                      onMouseMove={onMouseMove}
                      onMouseUp={onMouseUp}
                      onMouseLeave={onMouseLeave}
                    >
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
                          {projectNumber} / 0{numProjects}
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
                          draggable={false}
                          className="object-contain transition-transform duration-500 group-hover/img:scale-[1.01] pointer-events-none select-none"
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
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-[#e5e5ea]">
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
                        {project.additionalLinks?.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e5e5ea] bg-white text-[#111111] hover:border-[#0071e3] hover:text-[#0071e3] text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>{link.label}</span>
                          </a>
                        ))}
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
    </section>
  );
}
