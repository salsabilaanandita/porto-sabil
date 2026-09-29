"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface CertificatePdfViewerProps {
  file: string;
}

export default function CertificatePdfViewer({ file }: CertificatePdfViewerProps) {
  const [pageCount, setPageCount] = useState(0);

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setPageCount(numPages)}
      loading={<div className="p-10 text-center text-sm text-[#6e6e73]">Memuat sertifikat...</div>}
      error={<div className="p-10 text-center text-sm text-[#6e6e73]">PDF tidak dapat dimuat.</div>}
      className="flex max-h-[65vh] snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
    >
      {Array.from({ length: pageCount }, (_, index) => (
        <div
          key={index + 1}
          className="flex min-w-full shrink-0 snap-center justify-center p-3 sm:p-5"
        >
          <Page
            pageNumber={index + 1}
            width={560}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="max-w-full overflow-hidden rounded-md shadow-sm"
          />
        </div>
      ))}
    </Document>
  );
}
