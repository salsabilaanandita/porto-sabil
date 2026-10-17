export interface Project {
  id: string;
  title: string;
  shortDesc?: string;
  role: string;
  year: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stack?: string[];
  githubUrl: string;
  liveUrl?: string;
  additionalLinks?: {
    label: string;
    url: string;
  }[];
  featured?: boolean;
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  description: string;
  badges?: string[];
  details?: {
    overview: string;
    pillars?: {
      title: string;
      tag: string;
      description: string;
      points: string[];
    }[];
    projects: {
      name: string;
      clientOrSystem?: string;
      role?: string;
      description: string;
      tools: string[];
    }[];
    responsibilities: string[];
    evidenceImages?: {
      src: string;
      alt: string;
    }[];
  };
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  description: string;
  skills: string[];
  image: string;
  pdfUrl?: string;
  verifyUrl: string;
}


export const PORTFOLIO_DATA = {
  personal: {
    name: "Salsabila Anandita Putri",

    title: "Junior Web Developer · Quality Assurance",
    avatar: "/salsabila-formal.jpg",

    typewriterRoles: [
      "Junior Web Developer & Quality Assurance.",
      "Mengembangkan aplikasi web, backend API, & alur sistem.",
      "Membangun antarmuka web modern, responsif, & interaktif.",
      "Quality Assurance testing (manual testing & pelaporan bug).",
    ],

    tagline:
      "Fresh graduate SMK Wikrama Bogor jurusan PPLG dengan pengalaman PKL di Quality Assurance, analisis sistem, & web development. Siap berkontribusi sebagai QA Engineer atau Web Developer.",

    aboutShort: [
      "Fresh graduate SMK Wikrama Bogor jurusan Pengembangan Perangkat Lunak dan Gim dengan pengalaman PKL di bidang Quality Assurance, analisis sistem, dan pengembangan web.",
      "Terbiasa melakukan manual dan functional testing, pelaporan bug, serta dokumentasi pengujian, dan mampu membangun aplikasi full-stack menggunakan Next.js, Golang, Laravel, dan PostgreSQL.",
      "Tertarik berkontribusi sebagai QA Engineer atau Web Developer yang menjaga kualitas aplikasi melalui pengujian yang sistematis.",
    ],

    phone: "+62 897 9099 974",
    email: "salsabilaananditaputri@gmail.com",
    resumePdf: "/Salsabila%20Anandita%20Putri.pdf",

    github: "https://github.com/salsabilaanandita",
    linkedin: "https://www.linkedin.com/in/salsabilaananditaputri/",
    instagram: "https://instagram.com/_ssalsabiill",

    location: "Bogor, Jawa Barat, Indonesia",
  },

  stats: [
    {
      value: 6,
      suffix: "",
      label: "Proyek",
    },
    {
      value: 9,
      suffix: "+",
      label: "Sertifikat",
    },
    {
      value: 10,
      suffix: "+",
      label: "Teknologi",
    },
    {
      value: 30,
      suffix: "+",
      label: "Bug Ditemukan",
    },
  ],

  floatingSkills: [
    {
      name: "PHP",
      top: "8%",
      left: "-8%",
      delayClass: "animate-float-1",
    },
    {
      name: "QA Testing",
      top: "12%",
      right: "-8%",
      delayClass: "animate-float-2",
    },
    {
      name: "Next.js",
      top: "52%",
      left: "-12%",
      delayClass: "animate-float-3",
    },
    {
      name: "Laravel",
      top: "48%",
      right: "-10%",
      delayClass: "animate-float-4",
    },
    {
      name: "PostgreSQL",
      bottom: "6%",
      left: "-6%",
      delayClass: "animate-float-5",
    },
    {
      name: "React",
      bottom: "8%",
      right: "-6%",
      delayClass: "animate-float-1",
    },
  ],

  marqueeSkills: [
    "Quality Assurance",
    "Manual Testing",
    "Test Scenarios",
    "Bug Reporting",
    "Functional Testing",
    "PHP",
    "CodeIgniter",
    "Golang",
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "System Analysis",
    "Flowchart & ERD",
    "Git",
    "GitHub",
    "Laragon",
    "VS Code",
    "Antigravity",
  ],

  skills: [
    {
      category: "Quality Assurance (QA)",
      items: [
        "Manual Testing",
        "Test Scenarios",
        "Functional Testing",
        "Bug Reporting",
        "UI/UX Verification",
        "Dokumentasi Pengujian",
      ],
    },
    {
      category: "Web Development",
      items: [
        "PHP",
        "CodeIgniter",
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Laravel",
      ],
    },
    {
      category: "Database & Backend",
      items: [
        "Golang",
        "PostgreSQL",
        "MySQL",
        "REST APIs",
        "Express",
        "Neon.tech",
        "MongoDB",
      ],
    },
    {
      category: "Analisis Sistem & Tools",
      items: [
        "System Analysis",
        "Flowchart",
        "ERD",
        "Class Diagram",
        "Git",
        "GitHub",
        "VS Code",
        "Laragon",
        "Vercel",
      ],
    },
  ],



  projects: [
    {
      id: "coffe-next",
      title: "Kopi Rengkuh — Kafe & Roastery Jakarta",
      shortDesc:
        "Aplikasi katalog menu dan profil kedai kopi interaktif yang berfokus pada frontend UI/UX modern.",
      role: "Frontend Developer",
      year: "2026",
      category: "Frontend Web Application",
      description:
        "Sebuah project aplikasi frontend untuk kedai kopi (coffee shop) yang dibangun menggunakan Next.js. Aplikasi ini menyajikan antarmuka pengguna yang menarik, responsif, dan dinamis, menampilkan katalog menu kopi secara interaktif. Dibangun khusus di sisi klien (frontend-only).",
      image: "/projects/coffe.jpg",
      tags: [
        "Coffee Shop",
        "Frontend",
        "Next.js",
        "React.js",
        "Tailwind CSS",
      ],
      stack: ["Next.js", "React.js", "Tailwind CSS"],
      githubUrl: "https://github.com/salsabilaanandita/coffe-next.git",
      liveUrl: "https://coffe-next-zeta.vercel.app/",
      featured: true,
      highlights: [
        "Antarmuka frontend interaktif dan responsif menggunakan Next.js",
        "Desain UI/UX modern dan estetik untuk kedai kopi",
        "Katalog menu kopi interaktif tanpa integrasi backend",
      ],
    },
    {
      id: "money-tracker-app",
      title: "Money Tracker App",
      shortDesc:
        "Aplikasi pencatatan keuangan pribadi (personal finance) dengan dashboard analisis arus kas.",
      role: "Full Stack Developer",
      year: "2026",
      category: "Personal Finance",
      description:
        "Aplikasi pencatatan keuangan pribadi (personal finance) berbasis web yang dirancang untuk melacak pemasukan, pengeluaran, wallet balance, budget bulanan, serta progres target tabungan secara real-time. Dilengkapi visualisasi grafik arus kas yang interaktif.",
      image: "/projects/money-tracker.png",
      tags: [
        "Personal Finance",
        "Next.js",
        "Golang",
        "PostgreSQL",
        "REST API",
        "Tailwind CSS",
      ],
      stack: ["Next.js", "Golang", "PostgreSQL", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/salsabilaanandita/web-money-tracker",
      liveUrl: "https://web-money-tracker.vercel.app/login",
      featured: true,
      highlights: [
        "Dashboard interaktif untuk memantau total saldo, pemasukan, dan pengeluaran",
        "Visualisasi grafik (charts) arus kas harian, mingguan, dan bulanan",
        "Pencatatan pengeluaran berdasarkan kategori tertentu",
        "Pelacakan target tabungan dan dana darurat secara real-time",
      ],
    },
    {
      id: "chatbot-gemini-ai",
      title: "Chatbot AI — Gemini AI Chatbot",
      shortDesc:
        "Aplikasi Chatbot AI berbasis Express.js dan Gemini 3.5 Flash dengan fitur streaming respons real-time (SSE) dan analisis berkas multimodal.",
      role: "Full Stack Developer",
      year: "2026",
      category: "AI & Web Application",
      description:
        "Aplikasi Chatbot AI interaktif cerdas yang dibangun menggunakan Express.js, Node.js, dan Google Gemini API (model Gemini 3.5 Flash). Memiliki fitur streaming response real-time menggunakan Server-Sent Events (SSE), dukungan multimodal upload berkas (PDF, gambar, audio), sistem riwayat multi-sesi percakapan, pencarian histori chat, serta antarmuka modern dengan dukungan tema gelap dan terang.",
      image: "/projects/chatbot.png",
      tags: [
        "Chatbot AI",
        "Gemini 3.5 Flash",
        "Express.js",
        "Node.js",
        "REST API",
        "Multimodal",
        "Tailwind",
      ],
      stack: ["Express.js", "Node.js", "Gemini 3.5 Flash", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/salsabilaanandita/chatbot.git",
      liveUrl: "https://chatbot-psi-five-28.vercel.app/",
      featured: true,
      highlights: [
        "Backend Express.js dengan integrasi Google Gemini 3.5 Flash API",
        "Real-time streaming respons (SSE) dan pemrosesan berkas multimodal (PDF/Gambar/Audio)",
        "Manajemen multi-sesi percakapan, pencarian histori chat, dan tema dark/light mode",
      ],
    },
    {
      id: "inventaris-app",
      title: "Inventaris App (INV-PRO)",
      shortDesc:
        "Aplikasi manajemen inventaris gudang untuk pelacakan stok barang, transaksi masuk/keluar, dan estimasi aset.",
      role: "Fullstack Developer",
      year: "2026",
      category: "Inventory Management",
      description:
        "Sistem manajemen inventaris gudang modern (INV-PRO) untuk mengelola data master barang, pencatatan transaksi barang masuk & keluar, stok opname, riwayat peminjaman, serta estimasi nilai total aset gudang.",
      image: "/projects/inventaris.jpg",
      tags: [
        "Inventory",
        "Warehouse",
        "Laravel",
        "PostgreSQL",
        "Tailwind CSS",
        "REST API",
      ],
      stack: ["Laravel", "PostgreSQL", "Tailwind CSS", "PHP", "REST API"],
      githubUrl: "https://github.com/salsabilaanandita/inventaris-web.git",
      liveUrl: "https://inventaris-web-nine.vercel.app/",
      featured: true,
      highlights: [
        "Dashboard analitik inventaris dengan tren transaksi 7 hari",
        "Manajemen data master barang & status stok (Urgent/Active)",
        "Pencatatan barang masuk, barang dipinjam, dan stok opname",
        "Monitoring estimasi total nilai aset gudang",
      ],
    },
    {
      id: "aplikasi-kasir",
      title: "Aplikasi Kasir (KasirApp)",
      shortDesc:
        "Sistem Point of Sale untuk manajemen transaksi penjualan, stok barang, dan ringkasan bisnis.",
      role: "Full Stack Developer",
      year: "2026",
      category: "Point of Sale (POS)",
      description:
        "Aplikasi POS dan kasir minimalis (KasirApp) yang mengintegrasikan transaksi penjualan, pendaftaran pelanggan member, katalog produk, pelacakan produk terlaris, dan analitik tren penjualan harian secara real-time.",
      image: "/projects/kasir.jpg",
      tags: [
        "Point of Sale",
        "Business",
        "Laravel",
        "PHP",
        "PostgreSQL",
        "Tailwind",
      ],
      stack: ["Laravel", "PHP", "PostgreSQL", "Tailwind"],
      githubUrl:
        "https://github.com/salsabilaanandita/Website-Kasir.git",
      liveUrl: "https://website-kasir-coral.vercel.app/",
      featured: true,
      highlights: [
        "Sistem POS transaksi kasir cepat dan pencatatan nota penjualan",
        "Dashboard ringkasan bisnis & grafik tren penjualan harian",
        "Manajemen member pelanggan dan katalog inventaris produk",
        "Perankingan produk terlaris (top selling products) otomatis",
      ],
    },
    {
      id: "bookstore-app",
      title: "Bookstore App (Pustaka)",
      shortDesc:
        "Aplikasi toko buku digital untuk menjelajahi katalog, membaca detail buku, dan mengelola koleksi bacaan.",
      role: "Full Stack Developer",
      year: "2026",
      category: "Bookstore Platform",
      description:
        "Platform bookstore modern dengan frontend React.js dan backend Express.js yang terhubung ke Supabase untuk katalog buku, koleksi pengguna, serta pengalaman membaca yang terstruktur.",
      image: "/projects/bookstore-app.jpg",
      tags: [
        "Bookstore",
        "React.js",
        "Express.js",
        "Supabase",
        "REST API",
      ],
      stack: ["React.js", "Express.js", "Supabase", "REST API"],
      githubUrl: "https://github.com/salsabilaanandita/bookstore-app.git",
      liveUrl: "https://bookstore-app-khaki.vercel.app/",
      featured: true,
      highlights: [
        "Frontend bookstore interaktif berbasis React.js",
        "Backend Express.js dengan REST API untuk kebutuhan aplikasi",
        "Supabase sebagai database dan layanan data aplikasi",
      ],
    },
  ] as Project[],


  gallery: [
    {
      id: "gal-1",
      title: "Quality Assurance (QA) & Manual Testing",
      subtitle:
        "Pengujian fungsional sistem strategis (SIGAP, OJK, Bank Indonesia) dengan skenario uji mandiri & pelaporan 30+ bug ke developer.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "gal-2",
      title: "Web Development & Maintenance",
      subtitle:
        "Pemeliharaan aplikasi web menggunakan PHP & CodeIgniter (Bank J Trust), penyesuaian UI dengan HTML & CSS, serta integrasi API.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "gal-3",
      title: "Analisis Sistem & Dokumentasi Teknis",
      subtitle:
        "Pemodelan arsitektur sistem (Flowchart, ERD, Class Diagram), analisis proses bisnis, dan manajemen basis data PostgreSQL.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Software Development & QA Intern",
      company: "PT. Mede Media Softika – PKL",
      location: "Bogor / Jakarta, Indonesia",
      period: "Jul 2025 – Jan 2026",
      duration: "7 Bulan",
      badges: [
        "Quality Assurance",
        "Web Development",
        "Analisis Sistem",
      ],
      description:
        "Menjalani Praktik Kerja Lapangan (PKL) selama 7 bulan di PT. Mede Media Softika pada divisi Quality Assurance (QA), Web Development, dan Analisis Sistem. Menjalankan ratusan skenario manual & functional testing pada aplikasi web multi-role, pencatatan log error, penyusunan dokumentasi hasil uji, analisis alur sistem & diagram, serta pemeliharaan backend web PHP CodeIgniter dan penyesuaian frontend.",
      details: {
        overview:
          "Pengalaman industri selama 7 bulan PKL di PT. Mede Media Softika mencakup Quality Assurance (QA), pengembangan web, dan analisis sistem. Di bidang QA, fokus memegang pengujian manual dan fungsional dengan ratusan skenario uji, pencatatan error di Excel, serta pelaporan bug ke tim developer. Di bidang web development, berkontribusi dalam pemeliharaan web berbasis PHP CodeIgniter, perbaikan UI frontend, dan diagram alur sistem.",
        pillars: [
          {
            title: "Quality Assurance (QA)",
            tag: "Manual & Functional Testing",
            description:
              "Pengujian manual dan fungsional berbasis ratusan dokumen skenario pengujian untuk aplikasi web multi-role.",
            points: [
              "Menjalankan manual dan functional testing dengan ratusan skenario pengujian pada aplikasi web multi-role.",
              "Menguji berbagai fitur, menu, halaman, dan hak akses tiap role pengguna secara komprehensif.",
              "Mengidentifikasi dan mencatat bug ke Excel Log Error beserta bukti screenshot untuk tim developer.",
              "Menyusun dokumentasi hasil pengujian di Microsoft Word berisi hasil tes per skenario dan tabel bukti pendukung.",
            ],
          },
          {
            title: "Web Development",
            tag: "PHP, CodeIgniter & Frontend",
            description:
              "Pemeliharaan backend web, debugging, dan perbaikan tampilan antarmuka.",
            points: [
              "Berkontribusi pada pengembangan dan pemeliharaan backend aplikasi web menggunakan PHP dan CodeIgniter.",
              "Membantu debugging dan perbaikan tampilan (front-end) pada menu dan fitur aplikasi web berdasarkan temuan pengujian.",
              "Menghubungkan data dari API ke antarmuka aplikasi dan mendukung pengelolaan basis data PostgreSQL.",
            ],
          },
          {
            title: "Analisis Sistem & Dokumentasi",
            tag: "Flowchart & ERD",
            description:
              "Analisis alur aplikasi dan perancangan diagram sistem pendukung pengujian.",
            points: [
              "Menyusun flowchart, ERD, dan diagram sistem untuk mendukung analisis alur aplikasi dan perancangan skenario pengujian.",
              "Menganalisis proses bisnis dan alur kerja aplikasi untuk memastikan kelayakan sistem.",
            ],
          },
        ],
        projects: [
          {
            name: "OJK (SIGAP)",
            clientOrSystem: "OJK / SIGAP",
            role: "Quality Assurance (QA)",
            description:
              "Melakukan manual testing dan pengujian fungsional pada sistem OJK (SIGAP). Merancang dokumen skenario pengujian mandiri, memverifikasi alur fitur & validasi form, mengidentifikasi ketidaksesuaian antarmuka, serta menyusun dan melaporkan bugs & error ke tim developer.",
            tools: [
              "Manual Testing",
              "Test Scenario",
              "Functional Testing",
              "Bug Reporting",
              "Dokumentasi",
            ],
          },
          {
            name: "Bank Indonesia",
            clientOrSystem: "Bank Indonesia",
            role: "Quality Assurance (QA)",
            description:
              "Melaksanakan pengujian fungsional manual berbasis dokumen skenario uji buatan sendiri pada website Bank Indonesia. Menguji responsivitas antarmuka dan alur fitur, menemukan 30+ bug dan error, serta menyusun laporan pengujian terstruktur untuk developer.",
            tools: [
              "Manual Testing",
              "Test Case Design",
              "Functional Testing",
              "Bug Reporting",
            ],
          },
          {
            name: "Bank J Trust",
            clientOrSystem: "Bank J Trust",
            role: "Web Development",
            description:
              "Melanjutkan pengembangan dan pemeliharaan menu website menggunakan PHP dan framework CodeIgniter. Menambahkan menu baru, menghubungkan data dari API dengan tampilan, penyesuaian UI menggunakan HTML & CSS, serta membantu pengelolaan query PostgreSQL.",
            tools: [
              "PHP",
              "CodeIgniter",
              "PostgreSQL",
              "REST API",
              "HTML",
              "CSS",
            ],
          },
        ],
        responsibilities: [
          "Menjalankan manual dan functional testing dengan ratusan skenario pengujian pada aplikasi web multi-role, mencakup berbagai fitur, menu, halaman, dan hak akses tiap role pengguna.",
          "Mengidentifikasi dan mencatat bug ke Excel Log Error beserta bukti screenshot untuk ditindaklanjuti tim developer.",
          "Menyusun dokumentasi hasil pengujian di Microsoft Word, berisi hasil tes per skenario dan tabel bukti pendukung.",
          "Menyusun flowchart, ERD, dan diagram sistem untuk mendukung analisis alur aplikasi dan perancangan skenario pengujian.",
          "Membantu debugging dan perbaikan tampilan (front-end) pada menu dan fitur aplikasi web berdasarkan temuan pengujian.",
          "Berkontribusi pada pengembangan dan pemeliharaan backend aplikasi web menggunakan PHP dan CodeIgniter.",
        ],
        evidenceImages: [],
      },
    },
  ],

  education: [
    {
      id: "edu-1",
      degree: "Pengembangan Perangkat Lunak dan Gim (PPLG/RPL)",
      institution: "SMK Wikrama Bogor",
      period: "2023 — 2026",
      details:
        "Fresh graduate dengan pembelajaran yang berfokus pada pengembangan perangkat lunak, aplikasi web, backend, frontend, database, REST API, serta pengembangan aplikasi.",
    },
  ],

  certifications: [
    {
      id: "cert-1",
      name: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia & AWS",
      year: "15 Maret 2026",
      credentialId: "JLX1VDJWNZ72",
      description:
        "Standar kompetensi internasional AWS: arsitektur RESTful API, dasar Node.js, framework Hapi, deploy web service ke Amazon EC2 via SSH, pengujian API otomatis dengan Postman, dan Proyek Bookshelf API (CRUD).",
      skills: [
        "Back-End Development",
        "Node.js",
        "RESTful API",
        "Amazon EC2",
        "Hapi Framework",
        "Postman",
        "Bookshelf API",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/backend-pemula-javascript.pdf",
      verifyUrl: "https://dicoding.com/certificates/JLX1VDJWNZ72",
    },
    {
      id: "cert-2",
      name: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Dicoding Indonesia",
      year: "06 Maret 2026",
      credentialId: "L4PQ96752PO1",
      description:
        "Pengembangan frontend web modern berbasis React: functional components, props, stateful & controlled components, composition, unidirectional data flow, dan pembuatan web aplikasi reaktif.",
      skills: [
        "React.js",
        "Frontend Development",
        "Component Architecture",
        "State Management",
        "Controlled Components",
      ],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/aplikasi-web-react.pdf",
      verifyUrl: "https://dicoding.com/certificates/L4PQ96752PO1",
    },
    {
      id: "cert-3",
      name: "Bootcamp dan Sertifikasi Secure Coding",
      issuer: "PT Sinergi Cakrawala Indonesia (SCI)",
      year: "Februari – April 2026",
      credentialId: "0121/CER/SCI-WKR/IV/2026",
      description:
        "Pelatihan intensif dan uji kompetensi secure coding: penerapan praktik penulisan kode aman, mitigasi celah keamanan aplikasi web, serta standar keamanan perangkat lunak industri.",
      skills: [
        "Secure Coding",
        "Application Security",
        "Vulnerability Mitigation",
        "Software Security",
      ],
      image: "/certificates/secure-coding-sci.jpg",
      verifyUrl: "",
    },
    {
      id: "cert-4",
      name: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia (Validated by AWS)",
      year: "05 Februari 2026",
      credentialId: "53XEKV4VVXRN",
      description:
        "Penguasaan mendalam JavaScript modern (ES6+), runtime Node.js, struktur data kompleks (Object, Array, Map, Set), Object-Oriented Programming (OOP), Functional Programming, penanganan proses Asynchronous (Promise & async/await), dan Code Quality.",
      skills: [
        "JavaScript",
        "Node.js",
        "ES6+",
        "OOP",
        "Functional Programming",
        "Async/Await",
        "Code Quality",
      ],
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/pemrograman-javascript.pdf",
      verifyUrl: "https://dicoding.com/certificates/53XEKV4VVXRN",
    },
    {
      id: "cert-5",
      name: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia & Google Developers",
      year: "05 Februari 2026",
      credentialId: "MRZM624ORPYQ",
      description:
        "Pengembangan fondasi website modern: client-server lifecycle, markup HTML5 semantik, CSS3 styling tingkat lanjut (box model, positioning, selector), layout responsif Flexbox, dan implementasi proyek web.",
      skills: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "Responsive Web Design",
        "Web Development",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/dasar-pemrograman-web.pdf",
      verifyUrl: "https://dicoding.com/certificates/MRZM624ORPYQ",
    },
    {
      id: "cert-6",
      name: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding Indonesia & AWS",
      year: "19 Januari 2026",
      credentialId: "MRZM6MRRKPYQ",
      description:
        "Standar internasional AWS Cloud Computing: arsitektur komputasi (Amazon EC2, ELB, SQS/SNS), penyimpanan & database (EBS, S3, EFS, DynamoDB), jaringan VPC & Direct Connect, IAM Security, hingga pemanfaatan Generative AI di AWS.",
      skills: [
        "AWS Cloud",
        "Cloud Computing",
        "Amazon EC2",
        "Amazon S3",
        "DynamoDB",
        "Gen AI di AWS",
        "IAM Security",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/cloud-gen-ai-aws.pdf",
      verifyUrl: "https://dicoding.com/certificates/MRZM6MRRKPYQ",
    },
    {
      id: "cert-7",
      name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      year: "18 Januari 2026",
      credentialId: "JLX158RRNZ72",
      description:
        "Fondasi logika pemrograman dan algoritma komputasi standar industri: gerbang logika (AND, OR, NOT, NAND, NOR, XOR, XNOR) serta penerapan Computational Thinking (dekomposisi, pola, abstraksi, dan evaluasi algoritma).",
      skills: [
        "Programming Logic",
        "Computational Thinking",
        "Gerbang Logika",
        "Algoritma",
        "Problem Solving",
      ],
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/logika-pemrograman-101.pdf",
      verifyUrl: "https://dicoding.com/certificates/JLX158RRNZ72",
    },
    {
      id: "cert-8",
      name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding Indonesia",
      year: "17 Januari 2026",
      credentialId: "4EXG3DV6DZRL",
      description:
        "Standar okupasi Pengembang Software: analisis kebutuhan aplikasi dari sisi pengguna & teknis, perancangan diagram alur, pemrograman dasar HTML, CSS, JavaScript, serta pengarsipan dokumentasi teknis perangkat lunak.",
      skills: [
        "Software Engineering",
        "HTML",
        "CSS",
        "JavaScript",
        "Flowchart",
        "Documentation",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      pdfUrl: "/certificates/dasar-pemrograman-software.pdf",
      verifyUrl: "https://dicoding.com/certificates/4EXG3DV6DZRL",
    },
    {
      id: "cert-9",
      name: "IGDX Career Seminar: Career Guidance For Aspiring Game Developer",
      issuer: "Kominfo & Asosiasi Game Indonesia (AGI)",
      year: "18 Desember 2024",
      credentialId: "IGDX-KOMINFO-2024",
      description:
        "Seminar bimbingan karir dan pemahaman industri game development yang diselenggarakan oleh Kementerian Komunikasi dan Informatika (Kominfo) bekerja sama dengan Asosiasi Game Indonesia (AGI) dan SMK Wikrama Bogor.",
      skills: [
        "Game Development",
        "Career Guidance",
        "Software Industry",
        "Kominfo",
      ],
      image: "/certificates/igdx-kominfo.png",
      verifyUrl: "",
    },
  ],


};

export const skills = PORTFOLIO_DATA.skills;

