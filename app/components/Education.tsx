"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ExternalLink, X, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO_DATA, Certification } from "../data/portfolio-data";

const CertificatePdfViewer = dynamic(() => import("./CertificatePdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="p-10 text-center text-sm text-[#6e6e73]">
      Memuat sertifikat...
    </div>
  ),
});

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(PORTFOLIO_DATA.certifications.length / ITEMS_PER_PAGE);
  const paginatedCerts = PORTFOLIO_DATA.certifications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, PORTFOLIO_DATA.certifications.length);


  return (
    <section id="education" className="relative py-28 max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#e5e5ea] overflow-hidden">
      {/* Full-Bleed Running Background Typography Ticker Stream (Page Background) */}
      <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 -z-10 pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="animate-bg-marquee flex items-center gap-8 whitespace-nowrap text-6xl sm:text-8xl lg:text-9xl font-mono font-black text-stroke-bg tracking-tighter">
          <span>06 EDUCATION</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">AWS CERTIFIED</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>CKA KUBERNETES</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">META DEVELOPER</span>
          <span className="text-[#0071e3]/30">///</span>
          <span>06 EDUCATION</span>
          <span className="text-[#0071e3]/30">///</span>
          <span className="text-black/[0.04]">AWS CERTIFIED</span>
          <span className="text-[#0071e3]/30">///</span>
        </div>
      </div>

      {/* Subtle Reverse Running Ticker */}
      <div className="absolute inset-x-0 bottom-12 -z-10 pointer-events-none select-none overflow-hidden opacity-20 sm:opacity-35">
        <div className="animate-bg-marquee-reverse flex items-center gap-6 whitespace-nowrap text-4xl sm:text-6xl font-mono font-black text-stroke-blue-bg tracking-tight">
          <span>INFORMATICS ITB</span>
          <span>·</span>
          <span>SOLUTIONS ARCHITECT</span>
          <span>·</span>
          <span>CLUSTER ADMIN</span>
          <span>·</span>
          <span>INFORMATICS ITB</span>
          <span>·</span>
          <span>SOLUTIONS ARCHITECT</span>
          <span>·</span>
        </div>
      </div>

      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-[#0071e3] tracking-widest uppercase">
                06
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73]">
                EDUCATION &amp; CERTIFICATIONS
              </span>
              <div className="h-[1px] w-12 bg-[#e5e5ea]" />
            </div>

            <div className="group inline-block cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-[0.99]">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.15]">
                Pendidikan formal &amp; sertifikasi terverifikasi.
              </h2>
              {/* Emerging Solid Underline (Non-Gradient, Full Width) */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#0071e3] transition-all duration-500 rounded-full mt-3.5 opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#6e6e73] max-w-xs font-mono hover:-translate-y-1 active:scale-[0.99] transition-transform duration-300 cursor-default">
            Kualifikasi akademik dan bukti kompetensi resmi terverifikasi.
          </p>
        </div>
      </ScrollReveal>

      {/* Formal Education Rows */}
      <div className="border-t border-[#e5e5ea] mb-16">
        {PORTFOLIO_DATA.education.map((edu, idx) => {
          const numberString = `0${idx + 1}`;
          return (
            <ScrollReveal key={edu.id} direction="up" delay={100 + idx * 80}>
              <div className="py-8 sm:py-10 border-b border-[#e5e5ea] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group cursor-pointer">
                {/* Sub-header bar matching screenshot */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-semibold text-[#0071e3]">
                    + {numberString}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                    {edu.institution}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e5e5ea] group-hover:bg-[#0071e3]/40 transition-colors" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Index & Date */}
                  <div className="lg:col-span-2 space-y-1">
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {numberString}
                    </span>
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {edu.period}
                    </span>
                  </div>

                  {/* Middle: Degree & Institution */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#0071e3] transition-colors mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6e6e73] uppercase tracking-wider">
                      <span className="text-[#0071e3]">+ —</span>
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="lg:col-span-5">
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed group-hover:text-[#111111] transition-colors font-normal">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Verified Certifications Section Header */}
      <ScrollReveal direction="up" delay={150}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#6e6e73] font-semibold">
            SERTIFIKASI TERVERIFIKASI (SENTUH UNTUK MELIHAT LAMPIRAN)
          </span>
          <div className="h-[1px] flex-1 bg-[#e5e5ea]" />
        </div>
      </ScrollReveal>

      {/* Certifications List (Paginated 5 per page) */}
      <div className="border-t border-[#e5e5ea]">
        {paginatedCerts.map((cert, idx) => {
          const globalIdx = (currentPage - 1) * ITEMS_PER_PAGE + idx;
          const numberString = globalIdx + 1 < 10 ? `0${globalIdx + 1}` : `${globalIdx + 1}`;
          return (
            <ScrollReveal key={cert.id} direction="up" delay={50 + idx * 60}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="py-8 sm:py-10 border-b border-[#e5e5ea] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group cursor-pointer"
              >
                {/* Sub-header bar matching screenshot */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-semibold text-[#0071e3]">
                    + {numberString}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                    {cert.issuer}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#e5e5ea] group-hover:bg-[#0071e3]/40 transition-colors" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Index & Year */}
                  <div className="lg:col-span-2 space-y-1">
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {numberString}
                    </span>
                    <span className="text-xs font-mono text-[#6e6e73] block">
                      {cert.year}
                    </span>
                  </div>

                  {/* Middle: Certificate Name & Credential ID */}
                  <div className="lg:col-span-5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#0071e3] transition-colors mb-2">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6e6e73] uppercase tracking-wider">
                      <span className="text-[#0071e3]">+ —</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Right: Skills & Click to Preview */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f2f2f7] text-[#6e6e73] group-hover:bg-[#0071e3]/10 group-hover:text-[#0071e3] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] group-hover:text-[#0071e3] shrink-0 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Lampiran</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Clean Minimalist Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6">
          <div className="text-xs font-mono text-[#6e6e73]">
            Menampilkan <span className="font-bold text-[#111111]">{startIndex}–{endIndex}</span> dari{" "}
            <span className="font-bold text-[#111111]">{PORTFOLIO_DATA.certifications.length}</span> sertifikat
          </div>

          <div className="flex items-center gap-2">
            {/* Prev button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Halaman sebelumnya"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-[#e5e5ea] bg-white hover:bg-[#f5f5f7] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer text-[#111111]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#111111] text-white shadow-sm"
                      : "border border-[#e5e5ea] bg-white text-[#6e6e73] hover:text-[#111111] hover:border-[#111111]/40"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Halaman selanjutnya"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-[#e5e5ea] bg-white hover:bg-[#f5f5f7] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer text-[#111111]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}


      {/* Modal / Lightbox for Certificate Details */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e5e5ea] shadow-2xl p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Tutup modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-[#f2f2f7] hover:bg-[#e5e5ea] active:scale-95 text-[#111111] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="mb-6 pr-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0071e3] font-semibold block mb-1">
                {selectedCert.issuer} · {selectedCert.year}
              </span>
              <h3 className="text-2xl font-bold text-[#111111]">
                {selectedCert.name}
              </h3>
              <p className="text-xs font-mono text-[#6e6e73] mt-1">
                Credential ID: {selectedCert.credentialId}
              </p>
            </div>

            {/* PDF pages can be swiped horizontally on touch devices */}
            <div className="w-full rounded-xl overflow-hidden bg-[#f2f2f7] border border-[#e5e5ea] mb-6 shadow-sm">
              {selectedCert.pdfUrl ? (
                <CertificatePdfViewer file={selectedCert.pdfUrl} />
              ) : (
                <div className="relative aspect-16/10">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    fill
                    sizes="650px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-1">
                  Tentang Sertifikasi &amp; Cakupan Materi
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                  Kompetensi yang Divalidasi:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-[#f2f2f7] text-[#111111] border border-[#e5e5ea]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Verify Link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#f2f2f7]">
              {selectedCert.pdfUrl ? (
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#e5e5ea] bg-[#f5f5f7] hover:bg-[#e5e5ea] text-xs font-semibold text-[#111111] transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>Buka Dokumen PDF</span>
                </a>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-xl border border-[#e5e5ea] text-xs font-medium text-[#6e6e73] hover:text-[#111111] active:scale-95 cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-[#0071e3] active:scale-95 transition-all shadow-sm"
                >
                  <span>Verifikasi di Dicoding</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
