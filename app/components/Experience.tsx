"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Experience as ExperienceData, PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

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
              <div
                onClick={() => exp.details && setSelectedExperience(exp)}
                className="relative py-8 sm:py-10 border-b border-[#e5e5ea] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group cursor-pointer overflow-hidden"
              >
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

      {selectedExperience?.details && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#e5e5ea] bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Tutup detail pengalaman"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f7] text-[#111111] transition hover:bg-[#e5e5ea]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-8 pr-12">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
                {selectedExperience.company} · {selectedExperience.period}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
                {selectedExperience.role}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                {selectedExperience.details.overview}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#111111]">
                  Project &amp; Kontribusi
                </h4>
                <div className="space-y-5">
                  {selectedExperience.details.projects.map((project) => (
                    <div key={project.name} className="border-l-2 border-[#0071e3] pl-4">
                      <h5 className="font-bold text-[#111111]">{project.name}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-[#6e6e73]">
                        {project.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-[#f2f2f7] px-2 py-1 font-mono text-[10px] text-[#6e6e73]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#111111]">
                  Tanggung Jawab
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed text-[#6e6e73]">
                  {selectedExperience.details.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]" />
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
