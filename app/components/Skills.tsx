"use client";

import React from "react";
import Image from "next/image";
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
  QALogo,
  TestScenarioLogo,
  BugReportLogo,
  SystemAnalystLogo,
  PHPLogo,
  CodeIgniterLogo,
  HTML5Logo,
  CSS3Logo,
} from "./BrandLogos";

import { skills } from "../data/portfolio-data";

// Mapping of skill names to their authentic brand SVG logos and role subtitles
const skillMetaMap: Record<
  string,
  {
    Logo: React.ComponentType<{ className?: string }>;
    image?: string;
    tag: string;
    dot: string;
  }
> = {
  // Quality Assurance
  "Quality Assurance": { Logo: QALogo, tag: "QA & Verification", dot: "bg-[#0071E3]" },
  "Manual Testing": { Logo: QALogo, tag: "QA & Verification", dot: "bg-emerald-500" },
  "Functional Testing": { Logo: QALogo, tag: "Functional Testing", dot: "bg-teal-500" },
  "Test Scenarios": { Logo: TestScenarioLogo, tag: "Test Case Design", dot: "bg-emerald-600" },
  "Bug Reporting": { Logo: BugReportLogo, tag: "Defect Tracking", dot: "bg-rose-500" },
  "UI/UX Verification": { Logo: QALogo, tag: "UI Quality Audit", dot: "bg-amber-500" },
  "Dokumentasi Pengujian": { Logo: TestScenarioLogo, tag: "Test Documentation", dot: "bg-sky-500" },

  // System Analysis
  "System Analysis": { Logo: SystemAnalystLogo, tag: "Architecture & Flow", dot: "bg-violet-500" },
  "Analisis Sistem": { Logo: SystemAnalystLogo, tag: "Business Process", dot: "bg-violet-500" },
  "Flowchart": { Logo: SystemAnalystLogo, tag: "Process Mapping", dot: "bg-indigo-500" },
  "ERD": { Logo: SystemAnalystLogo, tag: "Entity Relationship", dot: "bg-purple-500" },
  "Class Diagram": { Logo: SystemAnalystLogo, tag: "UML Architecture", dot: "bg-fuchsia-500" },

  // Web Development
  "PHP": { Logo: PHPLogo, tag: "Server-Side Scripting", dot: "bg-[#777BB4]" },
  "CodeIgniter": { Logo: CodeIgniterLogo, tag: "PHP MVC Framework", dot: "bg-[#EE4326]" },
  "HTML": { Logo: HTML5Logo, tag: "Semantic Markup", dot: "bg-[#E34F26]" },
  "HTML5": { Logo: HTML5Logo, tag: "Semantic Markup", dot: "bg-[#E34F26]" },
  "CSS": { Logo: CSS3Logo, tag: "Styling & Layout", dot: "bg-[#1572B6]" },
  "CSS3": { Logo: CSS3Logo, tag: "Styling & Layout", dot: "bg-[#1572B6]" },

  // Existing Frameworks & Languages
  "Next.js": { Logo: NextjsLogo, tag: "Full-Stack Framework", dot: "bg-black" },
  "Next.Js": { Logo: NextjsLogo, tag: "Full-Stack Framework", dot: "bg-black" },
  "React.js": { Logo: ReactLogo, tag: "UI Library", dot: "bg-[#00D8FF]" },
  "TypeScript": { Logo: TypeScriptLogo, image: "/ts.png", tag: "Strict Typed JS", dot: "bg-[#3178C6]" },
  "JavaScript": { Logo: JavaScriptLogo, image: "/js.png", tag: "Web Programming", dot: "bg-[#F7DF1E]" },
  "Golang": { Logo: GoLogo, image: "/golang.png", tag: "Backend & Systems", dot: "bg-[#00ACD7]" },
  "Bootstrap": { Logo: BootstrapLogo, tag: "CSS Framework", dot: "bg-[#7952B3]" },
  "Tailwind CSS": { Logo: TailwindLogo, tag: "Utility-First CSS", dot: "bg-[#38BDF8]" },
  "Vue.js": { Logo: VueLogo, tag: "Progressive Framework", dot: "bg-[#41B883]" },
  "Express": { Logo: ExpressLogo, tag: "Node.js Framework", dot: "bg-zinc-800" },
  "Laravel": { Logo: LaravelLogo, image: "/laravel.png", tag: "PHP Web Framework", dot: "bg-[#FF2D20]" },
  "PostgreSQL": { Logo: PostgreSQLLogo, image: "/postgresql.png", tag: "Relational Database", dot: "bg-[#336791]" },
  "Neon.tech": { Logo: NeonLogo, tag: "Serverless Postgres", dot: "bg-[#00E599]" },
  "Lumen": { Logo: LumenLogo, image: "/lumen.png", tag: "Micro-Framework", dot: "bg-[#E24B2C]" },
  "REST APIs": { Logo: RestApiLogo, tag: "API Architecture", dot: "bg-[#0071E3]" },
  "MySQL": { Logo: MySQLLogo, image: "/mysql.png", tag: "Relational Database", dot: "bg-[#00758F]" },
  "MySql": { Logo: MySQLLogo, image: "/mysql.png", tag: "Relational Database", dot: "bg-[#00758F]" },
  "MongoDB": { Logo: MongoDBLogo, image: "/mongodb.png", tag: "Document Database", dot: "bg-[#47A248]" },
  "Git": { Logo: GitLogo, tag: "Version Control", dot: "bg-[#F05032]" },
  "GitHub": { Logo: GitHubLogo, tag: "Code Collaboration", dot: "bg-zinc-900" },
  "Vercel": { Logo: VercelLogo, tag: "Cloud Deployment", dot: "bg-black" },
  "Laragon": { Logo: LaragonLogo, image: "/laragon.jpg", tag: "Local Dev Server", dot: "bg-[#0E83CD]" },
  "VS Code": { Logo: VSCodeLogo, image: "/vscode.jpg", tag: "Code Editor", dot: "bg-[#007ACC]" },
  "VsCode": { Logo: VSCodeLogo, image: "/vscode.jpg", tag: "Code Editor", dot: "bg-[#007ACC]" },
  "Antigravity": { Logo: AntigravityLogo, image: "/antigravity.jpg", tag: "Agentic AI IDE", dot: "bg-[#4285F4]" },
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
    image: meta.image,
  };
});

const marqueeRow1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const marqueeRow2 = allSkills.slice(Math.ceil(allSkills.length / 2));

export default function Skills() {
  return (
    <section id="skill" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">


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
        <div className="mb-12 relative z-10 overflow-hidden py-3 -mx-6 px-6">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/90 to-transparent z-10" />

          <div className="animate-marquee flex gap-4 py-1.5 mb-2">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <div
                key={`m1-${idx}`}
                className="flex items-center gap-3 px-2 py-1 shrink-0 bg-transparent border-0 hover:opacity-75 transition-opacity"
              >
                <span className={`w-2 h-2 rounded-full ${item.dot} opacity-80`} />
                <span className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  {item.name}
                </span>
                <span className="text-[#86868b] font-mono text-sm ml-1">/</span>
              </div>
            ))}
          </div>

          <div className="animate-marquee-reverse flex gap-4 py-1.5">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <div
                key={`m2-${idx}`}
                className="flex items-center gap-3 px-2 py-1 shrink-0 bg-transparent border-0 hover:opacity-75 transition-opacity"
              >
                <span className={`w-2 h-2 rounded-full ${item.dot} opacity-80`} />
                <span className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  {item.name}
                </span>
                <span className="text-[#86868b] font-mono text-sm ml-1">/</span>
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
                {/* Brand logo */}
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#f7fbff] flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-3 shadow-xs overflow-hidden">
                  {skill.image ? (
                    <Image
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain transition-transform duration-300"
                    />
                  ) : (
                    <LogoComponent className="w-8 h-8 transition-transform duration-300" />
                  )}
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
