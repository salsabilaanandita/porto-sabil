"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  User,
  MessageSquare,
  Sparkles,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  DiscordIcon,
  TwitterIcon,
} from "./Icons";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO_DATA } from "../data/portfolio-data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || "Pesan dari Web Portfolio"
      )}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");

      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Full-Bleed Running Background Typography Ticker Stream */}
      <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 -z-10 pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="animate-bg-marquee flex items-center gap-8 whitespace-nowrap text-6xl sm:text-8xl lg:text-9xl font-mono font-black text-stroke-bg tracking-tighter">
          <span>07 HUBUNGI SAYA</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">KOLABORASI</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>PENGEMBANGAN WEB</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">DISKUSI PROYEK</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>07 HUBUNGI SAYA</span>
          <span className="text-[#0071e3]/30">///</span>

        </div>
      </div>

      {/* Subtle Reverse Running Ticker */}
      <div className="absolute inset-x-0 bottom-12 -z-10 pointer-events-none select-none overflow-hidden opacity-20 sm:opacity-35">
        <div className="animate-bg-marquee-reverse flex items-center gap-6 whitespace-nowrap text-4xl sm:text-6xl font-mono font-black text-stroke-blue-bg tracking-tight">
          <span>07 HUBUNGI SAYA</span>
          <span>·</span>
          <span>TERBUKA UNTUK KERJA SAMA</span>
          <span>·</span>
          <span>RESPON CEPAT</span>
          <span>·</span>
          <span>07 HUBUNGI SAYA</span>
          <span>·</span>
        </div>
      </div>

      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
            07
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
            HUBUNGI SAYA
          </span>
          <div className="h-[1px] w-12 bg-[#e5e5ea]" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left: Contact Statement & Social Channels */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="up" delay={100}>
            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99] mb-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
                Mari membangun solusi{" "}
                <span className="text-[#111111] underline decoration-[#0071e3] decoration-2 underline-offset-4">
                  aplikasi
                </span>
                ,{" "}
                <span className="text-[#6e6e73] font-normal italic">
                  inovatif
                </span>{" "}
                &amp;{" "}
                <span className="text-[#0071e3] font-semibold">
                  terstruktur.
                </span>
              </h2>
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
            </div>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed mb-8 font-normal hover:-translate-y-1 active:scale-[0.99] transition-transform duration-300 cursor-default">
              Terbuka untuk konsultasi sistem, peluang kerja, atau kolaborasi profesional dalam pengembangan software.
            </p>
          </ScrollReveal>

          {/* Direct Email - Border ONLY Top and Bottom (NO left & right borders as requested) */}
          <ScrollReveal direction="up" delay={150}>
            <div className="py-6 border-y border-[#e5e5ea] mb-10 hover:border-[#0071e3]/40 transition-colors group">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73]">
                      Email Langsung
                    </span>
                  </div>
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#111111] group-hover:text-[#0071e3] transition-colors truncate block">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl bg-[#f5f5f7] hover:bg-[#111111] hover:text-white active:scale-95 text-xs font-semibold text-[#111111] transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6e6e73] group-hover:text-white" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={200}>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e6e73] block mb-4">
              Jejaring Sosial
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-2xl border border-[#e5e5ea] bg-white hover:bg-[#0071e3] text-[#6e6e73] hover:text-white hover:border-[#0071e3] transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md active:scale-95 shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-2xl border border-[#e5e5ea] bg-white hover:bg-[#111111] text-[#6e6e73] hover:text-white hover:border-[#111111] transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md active:scale-95 shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-2xl border border-[#e5e5ea] bg-white hover:bg-rose-500 text-[#6e6e73] hover:text-white hover:border-rose-500 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md active:scale-95 shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-11 h-11 rounded-2xl border border-[#e5e5ea] bg-white hover:bg-[#5865F2] text-[#6e6e73] hover:text-white hover:border-[#5865F2] transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md active:scale-95 shadow-2xs"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-11 h-11 rounded-2xl border border-[#e5e5ea] bg-white hover:bg-black text-[#6e6e73] hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md active:scale-95 shadow-2xs"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Unboxed, Cardless & Borderless Contact Form */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up" delay={250}>
            <div>
              {/* Form Header with Status Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#e5e5ea]">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#111111] flex items-center gap-2">
                    <span>Kirim Pesan Langsung</span>
                    <Sparkles className="w-5 h-5 text-[#0071e3]" />
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6e6e73] mt-1">
                    Pesan akan langsung diteruskan ke inbox email pribadi saya.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-mono font-medium text-emerald-700 shrink-0 self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <Clock className="w-3 h-3 text-emerald-600" />
                  <span>Respon &lt; 24 Jam</span>
                </div>
              </div>

              {/* Success Notification Alert */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-3 animate-fade-in shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Pesan berhasil disiapkan!</p>
                    <p className="text-emerald-700 text-xs mt-0.5">
                      Aplikasi email Anda telah dibuka untuk verifikasi pengiriman.
                    </p>
                  </div>
                </div>
              )}

              {/* Interactive Form (No card wrapping, clean & airy) */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0071e3]" />
                        <span>Nama</span>
                      </span>
                      <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama kamu"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 hover:bg-white focus:bg-white border border-[#e5e5ea] text-sm text-[#111111] placeholder-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all duration-200 shadow-2xs"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#0071e3]" />
                        <span>Email</span>
                      </span>
                      <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@kamu.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 hover:bg-white focus:bg-white border border-[#e5e5ea] text-sm text-[#111111] placeholder-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all duration-200 shadow-2xs"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>Subjek</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subjek pesan"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 hover:bg-white focus:bg-white border border-[#e5e5ea] text-sm text-[#111111] placeholder-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all duration-200 shadow-2xs"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] mb-2 flex items-center justify-between">
                    <span>Pesan</span>
                    <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tulis pesan kamu di sini..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 hover:bg-white focus:bg-white border border-[#e5e5ea] text-sm text-[#111111] placeholder-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all duration-200 resize-none shadow-2xs"
                  />
                </div>

                {/* Action Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-[#86868b] order-2 sm:order-1">
                    Privasi terjamin · Tidak ada spam
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#111111] hover:bg-[#0071e3] text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 disabled:opacity-50 cursor-pointer group"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Mengirimkan Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
