"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#e5e5ea] py-12 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1560px] mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#6e6e73]">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[#111111]">{PORTFOLIO_DATA.personal.name}</span>
          <span>© {new Date().getFullYear()} · Hak cipta dilindungi.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-[#111111] transition-colors">
            Beranda
          </a>
          <a href="#about" className="hover:text-[#111111] transition-colors">
            Tentang
          </a>
          <a href="#project" className="hover:text-[#111111] transition-colors">
            Proyek
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-[#111111] transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
