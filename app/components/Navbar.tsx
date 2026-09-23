"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skill" },
  { label: "Proyek", href: "#project" },
  { label: "Dokumentasi", href: "#gallery" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Pendidikan", href: "#education" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Centered Glassmorphic Dock Container */}
      <div className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_10px_35px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)]">
        {/* Brand Dot / Name Badge */}
        <a
          href="#home"
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-black/[0.04] transition-colors group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-tight text-[#111111] group-hover:text-[#0071e3] transition-colors">
            {PORTFOLIO_DATA.personal.name.split(" ")[0].toUpperCase()}
          </span>
        </a>

        {/* Divider */}
        <div className="hidden md:block h-4 w-[1px] bg-[#e5e5ea]" />

        {/* Desktop Nav Items with Active Pill Animation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold shadow-xs"
                    : "text-[#6e6e73] hover:text-[#111111] hover:bg-black/[0.04]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#111111] -z-10 shadow-sm transition-colors" />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="hidden md:block h-4 w-[1px] bg-[#e5e5ea]" />

        {/* Action Button */}
        <div className="flex items-center gap-1.5">
          {/* Contact Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0071e3] text-white text-xs font-semibold hover:bg-[#0077ed] transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              <Sparkles className="w-3 h-3" />
              <span>Kontak</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full hover:bg-black/[0.05] text-[#111111] transition-all active:scale-95 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 w-[90vw] max-w-sm rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/60 p-4 shadow-2xl ring-1 ring-black/[0.05] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[#111111] text-white font-semibold"
                      : "text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#111111]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center text-xs font-semibold py-2.5 rounded-xl bg-[#0071e3] text-white shadow-xs"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
