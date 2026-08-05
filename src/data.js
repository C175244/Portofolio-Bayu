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
  email: "bayualfatir89@gmail.com",
  linkedin: "https://www.linkedin.com/in/bayu-alfatir-292963327",
  github: "https://github.com/C175244",
  instagram: "https://www.instagram.com/bsfuib",
  // Ganti URL di bawah ini dengan link foto profilmu
  photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
};

// ============================================================
// DATA PORTOFOLIO & SERTIFIKAT (Ditaruh di atas agar bisa dihitung otomatis)
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

export const certificatesData = [
  {
    id: 1,
    title: "Google Cloud Arcade",
    titleEn: "Google Cloud Arcade",
    issuer: "Google Cloud",
    date: "2025",
    description:
      "Penyelesaian berbagai quest, pembelajaran hands-on, dan pengumpulan skill badge dalam bidang Cloud Computing dan Artificial Intelligence di platform Google Cloud.",
    descriptionEn:
      "Completion of various quests, hands-on learning, and skill badge collection in Cloud Computing and Artificial Intelligence on the Google Cloud platform.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    type: "course",
  },
  {
    id: 2,
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
        "Saya adalah Bayu Alfatir Aji Utomo, seorang pelajar aktif di SMAN 104 Jakarta yang memiliki ketertarikan mendalam pada dunia engineering dan teknologi. Saat ini, fokus dan cita-cita utama saya adalah menjadi seorang AI Engineer—yaitu profesi yang berfokus pada perancangan, pengembangan, dan implementasi algoritma kecerdasan buatan untuk memecahkan masalah kompleks serta mengotomatisasi sistem agar mampu belajar dan beradaptasi layaknya kognisi manusia.",
        "Ketertarikan saya pada teknologi sudah dipupuk sejak kecil. Sekitar usia 6 tahun, saya cukup rutin berpartisipasi dalam berbagai workshop teknologi dasar. Di sana, saya mulai bereksperimen dengan hal-hal praktis seperti memprogram lampu LED (mengatur pola nyala, kombinasi warna, dan pewaktuan), hingga merakit mobil robot fungsional menggunakan bahan-bahan daur ulang.",
        "Sayangnya, kegiatan eksplorasi hardware secara langsung tersebut terpaksa terhenti total saat pandemi COVID-19 melanda, di mana seluruh aktivitas mengharuskan saya untuk tetap berada di rumah. Meskipun hingga saat ini saya belum berkesempatan mengikuti workshop luring serupa kembali, masa pembatasan tersebut justru membuka jalan bagi saya untuk mengalihkan fokus eksplorasi ke ranah digital dan perangkat lunak (software), yang pada akhirnya mengantarkan saya pada ketertarikan yang sangat kuat terhadap Artificial Intelligence."
      ],
      stats: [
        { label: "Proyek", value: `${portfolioData.length}+` },
        { label: "Sertifikat", value: `${certificatesData.length}+` },
        { label: "Tahun Belajar", value: "10+" },
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
        "Berbagai sertifikat dan penghargaan teknis yang saya peroleh selama perjalanan belajar.",
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
        "I am Bayu Alfatir Aji Utomo, an active student at SMAN 104 Jakarta with a deep interest in engineering and technology. Currently, my main focus and career aspiration is to become an AI Engineer—a profession dedicated to designing, developing, and implementing artificial intelligence algorithms to solve complex problems and automate systems to learn and adapt like human cognition.",
        "My fascination with technology has been nurtured since childhood. Around the age of 6, I regularly participated in various basic technology workshops. There, I began experimenting with practical applications such as programming LED lights (setting light patterns, color combinations, and timing) and assembling functional robot cars using recycled materials.",
        "Unfortunately, this hands-on hardware exploration came to a complete halt during the COVID-19 pandemic, which required me to stay indoors. Although I haven't had the opportunity to attend similar offline workshops since then, the restrictions actually paved the way for me to shift my focus toward digital exploration and software development, ultimately leading to my strong passion for Artificial Intelligence."
      ],
      stats: [
        { label: "Projects", value: `${portfolioData.length}+` },
        { label: "Certificates", value: `${certificatesData.length}+` },
        { label: "Years Learning", value: "10+" },
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
        "Various technical certificates and awards I have earned during my learning journey.",
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
// DATA KONTAK SOSIAL MEDIA
// Edit link sosial mediamu di sini
// ============================================================
export const socialLinks = [
  {
    id: "email",
    name: "Email",
    url: "mailto:bayualfatir89@gmail.com",
    displayText: "bayualfatir89@gmail.com", 
    icon: "Mail",
    color: "#EA4335",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bayu-alfatir-292963327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    displayText: "LinkedIn/BayuAlfatir", 
    icon: "Linkedin",
    color: "#0A66C2",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/C175244",
    displayText: "github/BayuAlfatir", 
    icon: "Github",
    color: "#181717",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/bsfuib?igsh=cHZzYnF4ejA5ZXBz",
    displayText: "@bsfuib", 
    icon: "Instagram",
    color: "#E4405F",
  },
];
