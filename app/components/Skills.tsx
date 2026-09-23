"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  ReactLogo,
  NextjsLogo,
  TypeScriptLogo,
  JavaScriptLogo,
  TailwindLogo,
  GoLogo,
  PostgreSQLLogo,
  MongoDBLogo,
  GitLogo,
  GitHubLogo,
  BootstrapLogo,
  VueLogo,
  LaravelLogo,
  ExpressLogo,
  LumenLogo,
  RestApiLogo,
  MySQLLogo,
  NeonLogo,
  VercelLogo,
  LaragonLogo,
  VSCodeLogo,
  AntigravityLogo,
} from "./BrandLogos";

import { skills } from "../data/portfolio-data";

// Mapping of skill names to their authentic brand SVG logos and role subtitles
const skillMetaMap: Record<
  string,
  { Logo: React.ComponentType<{ className?: string }>; tag: string; dot: string }
> = {
  "Next.js": { Logo: NextjsLogo, tag: "Full-Stack Framework", dot: "bg-black" },
  "Next.Js": { Logo: NextjsLogo, tag: "Full-Stack Framework", dot: "bg-black" },
  "React.js": { Logo: ReactLogo, tag: "UI Library", dot: "bg-[#00D8FF]" },
  "TypeScript": { Logo: TypeScriptLogo, tag: "Strict Typed JS", dot: "bg-[#3178C6]" },
  "JavaScript": { Logo: JavaScriptLogo, tag: "Web Programming", dot: "bg-[#F7DF1E]" },
  "Golang": { Logo: GoLogo, tag: "Backend & Systems", dot: "bg-[#00ACD7]" },
  "Bootstrap": { Logo: BootstrapLogo, tag: "CSS Framework", dot: "bg-[#7952B3]" },
  "Tailwind CSS": { Logo: TailwindLogo, tag: "Utility-First CSS", dot: "bg-[#38BDF8]" },
  "Vue.js": { Logo: VueLogo, tag: "Progressive Framework", dot: "bg-[#41B883]" },
  "Express": { Logo: ExpressLogo, tag: "Node.js Framework", dot: "bg-zinc-800" },
  "Laravel": { Logo: LaravelLogo, tag: "PHP Web Framework", dot: "bg-[#FF2D20]" },
  "PostgreSQL": { Logo: PostgreSQLLogo, tag: "Relational Database", dot: "bg-[#336791]" },
  "Neon.tech": { Logo: NeonLogo, tag: "Serverless Postgres", dot: "bg-[#00E599]" },
  "Lumen": { Logo: LumenLogo, tag: "Micro-Framework", dot: "bg-[#E24B2C]" },
  "REST APIs": { Logo: RestApiLogo, tag: "API Architecture", dot: "bg-[#0071E3]" },
  "MySQL": { Logo: MySQLLogo, tag: "Relational Database", dot: "bg-[#00758F]" },
  "MySql": { Logo: MySQLLogo, tag: "Relational Database", dot: "bg-[#00758F]" },
  "MongoDB": { Logo: MongoDBLogo, tag: "Document Database", dot: "bg-[#47A248]" },
  "Git": { Logo: GitLogo, tag: "Version Control", dot: "bg-[#F05032]" },
  "GitHub": { Logo: GitHubLogo, tag: "Code Collaboration", dot: "bg-zinc-900" },
  "Vercel": { Logo: VercelLogo, tag: "Cloud Deployment", dot: "bg-black" },
  "Laragon": { Logo: LaragonLogo, tag: "Local Dev Server", dot: "bg-[#0E83CD]" },
  "VS Code": { Logo: VSCodeLogo, tag: "Code Editor", dot: "bg-[#007ACC]" },
  "VsCode": { Logo: VSCodeLogo, tag: "Code Editor", dot: "bg-[#007ACC]" },
  "Antigravity": { Logo: AntigravityLogo, tag: "Agentic AI IDE", dot: "bg-[#4285F4]" },
};

// Extract unique skills from user's skill list maintaining order
const uniqueSkillNames: string[] = [];
skills.forEach((group) => {
  group.items.forEach((item) => {
    if (!uniqueSkillNames.includes(item)) {
      uniqueSkillNames.push(item);
    }
  });
});

const allSkills = uniqueSkillNames.map((name) => {
  const meta = skillMetaMap[name] || {
    Logo: RestApiLogo,
    tag: "Technology",
    dot: "bg-blue-500",
  };
  return {
    name,
    tag: meta.tag,
    dot: meta.dot,
    Logo: meta.Logo,
  };
});

const marqueeRow1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const marqueeRow2 = allSkills.slice(Math.ceil(allSkills.length / 2));

export default function Skills() {
  return (
    <section id="skill" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Full-Bleed Running Background Typography Ticker Stream */}
      <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 -z-10 pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="animate-bg-marquee flex items-center gap-8 whitespace-nowrap text-6xl sm:text-8xl lg:text-9xl font-mono font-black text-stroke-bg tracking-tighter">
          <span>02 TECH STACK</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">OFFICIAL LOGOS &amp; ECOSYSTEM</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>CAPABILITIES</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>02 TECH STACK</span>
          <span className="text-[#0071e3]/30">///</span>
        </div>
      </div>

      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
                02
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
                TECH STACK &amp; KEAHLIAN
              </span>
              <div className="h-[1px] w-12 bg-[#e5e5ea]" />
            </div>

            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99]">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
                Penguasaan tech stack modern, backend API &amp; arsitektur sistem.
              </h2>
              {/* Emerging Solid Underline */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#6e6e73] max-w-xs font-mono hover:-translate-y-1 active:scale-[0.99] transition-transform duration-300 cursor-default">
            Instrumen dan ekosistem software engineering yang digunakan sehari-hari.
          </p>
        </div>
      </ScrollReveal>

      {/* Running Marquee Ticker Stream */}
      <ScrollReveal direction="up" delay={50}>
        <div className="mb-12 relative z-10 overflow-hidden py-2 -mx-6 px-6">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/90 to-transparent z-10" />

          <div className="animate-marquee flex gap-3 py-1 mb-2">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <div
                key={`m1-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#e5e5ea] bg-white/80 backdrop-blur-sm shrink-0 hover:border-[#0071e3]/40 transition-colors"
              >
                <span className={`w-2 h-2 rounded-full ${item.dot} opacity-70`} />
                <span className="text-xs font-semibold text-[#111111]">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-[#86868b] uppercase tracking-wider">
                  Tech Skill
                </span>
              </div>
            ))}
          </div>

          <div className="animate-marquee-reverse flex gap-3 py-1">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <div
                key={`m2-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#e5e5ea] bg-white/80 backdrop-blur-sm shrink-0 hover:border-[#0071e3]/40 transition-colors"
              >
                <span className={`w-2 h-2 rounded-full ${item.dot} opacity-70`} />
                <span className="text-xs font-semibold text-[#111111]">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-[#86868b] uppercase tracking-wider">
                  Tech Skill
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Clean Unified Grid with Authentic SVG Brand Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3.5 sm:gap-4 relative z-10">
        {allSkills.map((skill, idx) => {
          const LogoComponent = skill.Logo;
          return (
            <ScrollReveal key={skill.name} direction="up" delay={idx * 15}>
              <div className="p-4 sm:p-5 rounded-2xl border border-[#e5e5ea] bg-white/80 backdrop-blur-md hover:bg-white hover:border-[#0071e3]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group flex flex-col items-center justify-center text-center cursor-default min-h-[145px]">
                {/* Authentic Brand SVG Logo */}
                <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] group-hover:bg-[#0071e3]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-3 shadow-xs">
                  <LogoComponent className="w-8 h-8 transition-transform duration-300" />
                </div>

                {/* Tech Name */}
                <h3 className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#0071e3] transition-colors truncate w-full">
                  {skill.name}
                </h3>

                {/* Tag Subtitle */}
                <p className="text-[10px] font-mono text-[#86868b] truncate w-full mt-1">
                  {skill.tag}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
