// ============================================================
// FILE KONFIGURASI DATA PORTFOLIO
// ============================================================
// File ini berisi SEMUA data konten website.
// Kamu bisa mengedit, menambah, atau menghapus data di sini
// tanpa perlu menyentuh file komponen UI.
// ============================================================

export const profile = {
  name: "Bayu Alfatir Aji Utomo",
  nickname: "Bayu",
  title: "The Future Engineer",
  status: "Pelajar di SMAN 104 Jakarta",
  location: "Ciracas, Jakarta Timur, Indonesia",
  careerFocus: "AI Engineer",
  email: "bayu.alfatir@email.com",
  whatsapp: "+6281234567890",
  linkedin: "https://linkedin.com/in/bayualfatir",
  github: "https://github.com/bayualfatir",
  instagram: "https://instagram.com/bayualfatir",
  // Ganti URL di bawah ini dengan link foto profilmu
  photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
};

// ============================================================
// TERJEMAHAN BAHASA
// ============================================================
export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      skills: "Keahlian",
      portfolio: "Portofolio",
      certificates: "Sertifikat",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, saya",
      tagline: "The Future Engineer",
      description:
        "Seorang pelajar yang passionate di bidang teknologi dan bercita-cita menjadi AI Engineer. Selalu haus akan pengetahuan dan siap menghadapi tantangan masa depan.",
      ctaPrimary: "Lihat Portofolio",
      ctaSecondary: "Hubungi Saya",
    },
    about: {
      eyebrow: "TENTANG SAYA",
      title: "Siapa Bayu?",
      paragraphs: [
        "Saya adalah Bayu Alfatir Aji Utomo, seorang pelajar aktif di SMAN 104 Jakarta yang memiliki ketertarikan mendalam pada dunia engineering dan teknologi. Sejak kecil, saya telah terpesona oleh bagaimana teknologi dapat mengubah cara hidup manusia.",
        "Saat ini, saya sedang fokus mempelajari Artificial Intelligence dan Machine Learning. Saya percaya bahwa AI adalah kunci untuk memecahkan banyak masalah kompleks di masa depan — mulai dari kesehatan, pendidikan, hingga lingkungan.",
        "Di luar akademik, saya senang bereksperimen dengan proyek-proyek teknis, membaca paper riset terbaru, dan berkolaborasi dengan teman-teman yang memiliki visi serupa.",
      ],
      stats: [
        { label: "Proyek", value: "5+" },
        { label: "Sertifikat", value: "3+" },
        { label: "Tahun Belajar", value: "2+" },
      ],
    },
    skills: {
      eyebrow: "KEAHLIAN",
      title: "Skill Teknis",
      description:
        "Berikut adalah teknologi dan keterampilan yang sedang saya pelajari dan kembangkan.",
    },
    portfolio: {
      eyebrow: "PORTOFOLIO",
      title: "Proyek Saya",
      description: "Kumpulan proyek yang telah dan sedang saya kerjakan.",
      statusDraft: "DRAFT",
      statusCompleted: "SELESAI",
      cta: "Lihat Detail",
    },
    certificates: {
      eyebrow: "SERTIFIKAT",
      title: "Pencapaian & Sertifikat",
      description:
        "Berbagai sertifikat dan piagam yang saya peroleh selama perjalanan belajar.",
    },
    contact: {
      eyebrow: "KONTAK",
      title: "Mari Terhubung",
      description:
        "Tertarik untuk berkolaborasi atau sekadar ingin berbincang? Hubungi saya melalui salah satu platform di bawah ini.",
      connectTitle: "Hubungi Saya",
    },
    footer: {
      copyright: "© 2026 Bayu Alfatir Aji Utomo. All rights reserved.",
      madeWith: "Dibuat dengan React + Tailwind CSS",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      portfolio: "Portfolio",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      tagline: "The Future Engineer",
      description:
        "A passionate student in technology aspiring to become an AI Engineer. Always hungry for knowledge and ready to face future challenges.",
      ctaPrimary: "View Portfolio",
      ctaSecondary: "Contact Me",
    },
    about: {
      eyebrow: "ABOUT ME",
      title: "Who is Bayu?",
      paragraphs: [
        "I am Bayu Alfatir Aji Utomo, an active student at SMAN 104 Jakarta with a deep interest in engineering and technology. Since childhood, I have been fascinated by how technology can transform human life.",
        "Currently, I am focusing on learning Artificial Intelligence and Machine Learning. I believe AI is the key to solving many complex problems in the future — from healthcare, education, to environmental issues.",
        "Outside academics, I enjoy experimenting with technical projects, reading the latest research papers, and collaborating with friends who share similar visions.",
      ],
      stats: [
        { label: "Projects", value: "5+" },
        { label: "Certificates", value: "3+" },
        { label: "Years Learning", value: "2+" },
      ],
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Technical Skills",
      description:
        "Here are the technologies and skills I am currently learning and developing.",
    },
    portfolio: {
      eyebrow: "PORTFOLIO",
      title: "My Projects",
      description: "Collection of projects I have worked on and am currently working on.",
      statusDraft: "DRAFT",
      statusCompleted: "COMPLETED",
      cta: "View Details",
    },
    certificates: {
      eyebrow: "CERTIFICATES",
      title: "Achievements & Certificates",
      description:
        "Various certificates and awards I have earned during my learning journey.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let's Connect",
      description:
        "Interested in collaborating or just want to chat? Reach out to me through one of the platforms below.",
      connectTitle: "Connect With Me",
    },
    footer: {
      copyright: "© 2026 Bayu Alfatir Aji Utomo. All rights reserved.",
      madeWith: "Built with React + Tailwind CSS",
    },
  },
};

// ============================================================
// DATA SKILLS
// Tambah/hapus skill di sini sesuai kebutuhanmu
// ============================================================
export const skillsData = [
  {
    id: 1,
    name: "Python",
    category: "Programming",
    level: "Intermediate",
    description:
      "Bahasa pemrograman utama untuk data science dan AI development.",
    icon: "Code2",
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Programming",
    level: "Intermediate",
    description:
      "Pengembangan web interaktif dan aplikasi frontend modern.",
    icon: "Braces",
  },
  {
    id: 3,
    name: "React.js",
    category: "Frontend",
    level: "Beginner",
    description:
      "Library JavaScript untuk membangun antarmuka pengguna yang dinamis.",
    icon: "Layers",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Intermediate",
    description:
      "Framework CSS utility-first untuk styling yang cepat dan konsisten.",
    icon: "Palette",
  },
  {
    id: 5,
    name: "Machine Learning",
    category: "AI/ML",
    level: "Beginner",
    description:
      "Pembelajaran dasar algoritma ML dan neural networks.",
    icon: "Brain",
  },
  {
    id: 6,
    name: "Git & GitHub",
    category: "Tools",
    level: "Intermediate",
    description:
      "Version control dan kolaborasi kode dengan tim.",
    icon: "GitBranch",
  },
  {
    id: 7,
    name: "Figma",
    category: "Design",
    level: "Beginner",
    description:
      "Desain UI/UX dan prototyping antarmuka aplikasi.",
    icon: "PenTool",
  },
  {
    id: 8,
    name: "Public Speaking",
    category: "Soft Skill",
    level: "Intermediate",
    description:
      "Presentasi proyek dan komunikasi ide dengan percaya diri.",
    icon: "Mic",
  },
];

// ============================================================
// DATA PORTOFOLIO
// Tambah/hapus proyek di sini sesuai kebutuhanmu
// ============================================================
export const portfolioData = [
  {
    id: 1,
    title: "DompetKu",
    titleEn: "DompetKu",
    description:
      "Aplikasi manajemen keuangan pribadi berbasis mobile. Membantu pengguna melacak pemasukan, pengeluaran, dan menyusun anggaran harian dengan antarmuka yang intuitif.",
    descriptionEn:
      "A personal finance management mobile application. Helps users track income, expenses, and plan daily budgets with an intuitive interface.",
    status: "draft",
    tags: ["React Native", "Firebase", "Mobile App"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: null,
    demo: null,
    note: "Aplikasi native yang masih dalam tahap pengembangan. Belum di-hosting.",
    noteEn: "Native application still in development. Not yet hosted.",
  },
  {
    id: 2,
    title: "Laporan Reaksi Kimia",
    titleEn: "Chemical Reaction Report",
    description:
      "Proyek akademik berupa laporan ilmiah mendalam tentang berbagai reaksi kimia organik dan anorganik. Disusun dengan format penelitian yang rapi dan referensi yang kuat.",
    descriptionEn:
      "An academic project in the form of an in-depth scientific report on various organic and inorganic chemical reactions. Compiled with neat research formatting and strong references.",
    status: "completed",
    tags: ["Chemistry", "Research", "Academic"],
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    github: null,
    demo: null,
    note: "Proyek sekolah yang telah diselesaikan dan dipresentasikan.",
    noteEn: "School project that has been completed and presented.",
  },
  {
    id: 3,
    title: "Mitigasi Lingkungan",
    titleEn: "Environmental Mitigation",
    description:
      "Presentasi komprehensif tentang strategi mitigasi dampak lingkungan di perkotaan. Mencakup analisis masalah, solusi berkelanjutan, dan rekomendasi kebijakan.",
    descriptionEn:
      "A comprehensive presentation on urban environmental impact mitigation strategies. Includes problem analysis, sustainable solutions, and policy recommendations.",
    status: "completed",
    tags: ["Environment", "Presentation", "Research"],
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop",
    github: null,
    demo: null,
    note: "Presentasi kelompok untuk tugas mata pelajaran geografi.",
    noteEn: "Group presentation for geography class assignment.",
  },
];

// ============================================================
// DATA SERTIFIKAT
// Tambah/hapus sertifikat di sini sesuai kebutuhanmu
// ============================================================
export const certificatesData = [
  {
    id: 1,
    title: "Sertifikat Peserta Olimpiade",
    titleEn: "Olympiad Participant Certificate",
    issuer: "SMAN 104 Jakarta",
    date: "2025",
    description:
      "Peserta aktif dalam olimpiade sains tingkat sekolah.",
    descriptionEn:
      "Active participant in school-level science olympiad.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    type: "academic",
  },
  {
    id: 2,
    title: "Sertifikat Keaktifan Organisasi",
    titleEn: "Organization Activity Certificate",
    issuer: "OSIS SMAN 104",
    date: "2024",
    description:
      "Penghargaan atas kontribusi aktif dalam kegiatan organisasi siswa.",
    descriptionEn:
      "Award for active contribution in student organization activities.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    type: "organization",
  },
  {
    id: 3,
    title: "Sertifikat Kursus Online",
    titleEn: "Online Course Certificate",
    issuer: "Dicoding / Coursera",
    date: "2025",
    description:
      "Penyelesaian kursus pengenalan pemrograman dan dasar-dasar AI.",
    descriptionEn:
      "Completion of introductory programming and AI fundamentals course.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    type: "course",
  },
];

// ============================================================
// DATA KONTAK SOSIAL MEDIA
// Edit link sosial mediamu di sini
// ============================================================
export const socialLinks = [
  {
    id: "email",
    name: "Email",
    url: "mailto:bayualfatir89@gmail.com",
    icon: "Mail",
    color: "#EA4335",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: https://www.linkedin.com/in/bayu-alfatir-292963327?utm_source=share_via&utm_content=profile&utm_medium=member_android,
    icon: "Linkedin",
    color: "#0A66C2",
  },
  {
    id: "github",
    name: "GitHub",
    url: profile.github,
    icon: "Github",
    color: "#181717",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: https://www.instagram.com/bsfuib?igsh=cHZzYnF4ejA5ZXBz,
    icon: "Instagram",
    color: "#E4405F",
  },
];
