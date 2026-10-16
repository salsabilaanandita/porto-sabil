"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Experience as ExperienceData, PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

  return (
    <section id="experience" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Static Full-Page Background Typography Watermark (Awal di tengah-tengah, Berwarna & Jelas) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[14vw] sm:text-[13vw] font-mono font-black tracking-tighter uppercase whitespace-nowrap leading-none text-center text-sky-600/[0.09]">
          EXPERIENCE
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
              <div
                onClick={() => exp.details && setSelectedExperience(exp)}
                className="relative py-8 sm:py-10 border-b border-[#e5e5ea] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group cursor-pointer overflow-hidden"
              >
                {/* Background Watermark Index Number per row */}
                <div className="absolute right-4 bottom-2 -z-0 select-none pointer-events-none text-6xl sm:text-8xl font-mono font-black text-black/[0.03] group-hover:text-[#0071e3]/10 transition-colors duration-300">
                  {numberString}
                </div>

                {/* Category / Sub-header bar */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-xs font-mono font-semibold text-[#0071e3]">
                    + {numberString}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                    {exp.company}
                  </span>
                  {exp.duration && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3]">
                      {exp.duration}
                    </span>
                  )}
                  <div className="h-[1px] flex-1 bg-[#e5e5ea] group-hover:bg-[#0071e3]/40 transition-colors" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                  {/* Left: Index & Date */}
                  <div className="lg:col-span-2 space-y-1">
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {numberString}
                    </span>
                    <span className="text-xs font-mono text-[#111111] font-semibold block">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-[#86868b] block">
                      {exp.location}
                    </span>
                  </div>

                  {/* Middle: Role & Company */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#0071e3] transition-colors mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">
                      <span className="text-[#0071e3]">+ —</span>
                      <span>{exp.company}</span>
                    </div>

                    {/* Skill Badges on Card */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.badges?.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f2f2f7] text-[#555555] border border-[#e5e5ea]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Description & Action */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed group-hover:text-[#111111] transition-colors font-normal">
                      {exp.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-[#0071e3] group-hover:translate-x-1 transition-transform">
                      <span>Buka Detail Pengalaman</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience?.details && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#e5e5ea] bg-white p-6 shadow-2xl sm:p-8">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Tutup detail pengalaman"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f7] text-[#111111] transition hover:bg-[#e5e5ea] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
                  {selectedExperience.company} · {selectedExperience.period}
                </span>
                {selectedExperience.duration && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071e3] text-white">
                    {selectedExperience.duration}
                  </span>
                )}
                <span className="font-mono text-xs text-[#86868b]">
                  ({selectedExperience.location})
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                {selectedExperience.role}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                {selectedExperience.details.overview}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column: Projects & Systems */}
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#111111]">
                  Project &amp; Kontribusi
                </h4>
                <div className="space-y-4">
                  {selectedExperience.details.projects.map((project) => (
                    <div
                      key={project.name}
                      className="border-l-2 border-[#0071e3] pl-4 py-1"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold text-sm text-[#111111]">
                          {project.name}
                        </h5>
                        {project.role && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f2f2f7] text-[#0071e3] font-medium">
                            {project.role}
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-[#6e6e73] mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-[#f2f2f7] px-2 py-0.5 font-mono text-[9px] text-[#6e6e73]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Responsibilities */}
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#111111]">
                  Tanggung Jawab
                </h4>
                <ul className="space-y-3">
                  {selectedExperience.details.responsibilities.map((item, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-xs leading-relaxed text-[#555555]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-[#e5e5ea] pt-6">
              {selectedExperience.details.evidenceImages?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {selectedExperience.details.evidenceImages.map((image) => (
                    <div key={image.src} className="relative aspect-video overflow-hidden rounded-xl border border-[#e5e5ea] bg-[#f2f2f7]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
