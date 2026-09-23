import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salsabila Anandita Putri — Junior Web Developer",
  description:
    "Junior Web Developer yang berfokus pada pengembangan backend, REST API, database, dan aplikasi web.",
  keywords: [
    "Salsabila Anandita Putri",
    "Web Developer",
    "Junior Web Developer",
    "Golang",
    "Node.js",
    "Laravel",
    "Next.js",
    "React",
    "PostgreSQL",
    "MySQL",
    "REST API",
  ],
  authors: [{ name: "Salsabila Anandita Putri" }],
  openGraph: {
    title: "Salsabila Anandita Putri — Junior Web Developer",
    description:
      "Junior Web Developer yang berfokus pada pengembangan backend, REST API, database, dan aplikasi web.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} scroll-smooth antialiased selection:bg-[#0071e3]/20 selection:text-[#0071e3] font-sans`}
    >
      <body className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

