import type { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  dates?: string;
  href?: string;
  image?: string;
  imageCaption?: string;
  video?: string;
  links?: { icon: ReactNode; type: string; href: string }[];
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: { icon: ReactNode; title: string; href: string }[];
};

export const DATA = {
  name: "Arya Kharisudin Irfani",
  initials: "AKI",
  // shortcut: localhost is only for preview, set NEXT_PUBLIC_SITE_URL before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Informatics Engineering student at UIN Malang focused on cybersecurity, Python development, and data science.",
  summary:
    "I study Informatics Engineering at UIN Maulana Malik Ibrahim Malang, with interests in defensive security, Python development, and data science. I practice Linux and MikroTik networking, build projects with Flask and Scikit-learn, and contribute to campus technology communities.",
  avatarUrl: "/arya-cutout.png",
  skills: ["Blue Team", "Cybersecurity", "Linux", "Python", "Data Science", "MikroTik", "Networking", "Log Analysis", "Flask", "SQL", "PHP"],
  certificates: [
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", issued: "Mar 2026", href: "/certificates/cisco-introduction-to-cybersecurity.png" },
    { title: "Cyber Security 101", issuer: "TryHackMe", issued: "Jul 2025", href: "/certificates/tryhackme-cyber-security-101.pdf" },
    { title: "Pre Security", issuer: "TryHackMe", issued: "Jul 2025", href: "/certificates/tryhackme-pre-security.pdf" },
    { title: "Introduction to Information Security", issuer: "Cyber Academy", issued: "Jun 2025", href: "/certificates/cyber-academy-information-security.pdf" },
    { title: "Python Fundamental", issuer: "Aguna Course", issued: "Apr 2025", href: "/certificates/aguna-python-fundamental.pdf" },
    { title: "Memulai Pemrograman dengan Java", issuer: "Dicoding", issued: "Jan 2025", href: "/certificates/dicoding-java.pdf" },
    { title: "Ketua OSIS", issuer: "MA Hasanuddin Pare", issued: "Aug 2022", href: "/certificates/osis-chairperson.jpg" },
  ],
  contact: {
    email: "aryapulosari@gmail.com",
    social: {
      LinkedIn: {
        url: "https://id.linkedin.com/in/arya-kharisudin-irfani-055311328",
      },
      GitHub: {
        url: "https://github.com/aryapulosari-design",
      },
    },
  },
  work: [
    {
      company: "Velkira",
      title: "Founder",
      monogram: "FLK",
      logoUrl: "",
      start: "2026",
      end: "Present",
      description: "Agency focused on building web and mobile applications with AI integration.",
    },
    {
      company: "Ethernet-0 Community",
      title: "Lead",
      monogram: "ETH",
      logoUrl: "",
      start: "Oct 2026",
      end: "Present",
      description: "Lead a cybersecurity community at UIN Malang. Presented an IT incubation introduction and helped create CTF learning materials.",
    },
    {
      company: "PTIPD UIN Maulana Malik Ibrahim Malang",
      title: "Blue Team Cybersecurity Intern",
      monogram: "PTI",
      logoUrl: "",
      start: "Aug 2026",
      end: "Sep 2026",
      description: "Completed a two-month cybersecurity internship with the Blue Team at PTIPD UIN Malang.",
    },
    {
      company: 'HMPS Teknik Informatika "Encoder" UIN Malang',
      title: "Member",
      monogram: "ENC",
      logoUrl: "",
      start: "Jun 2025",
      end: "Present",
      description:
        "Help plan and run student association programs, including leading a charity event committee.",
    },
    {
      company: "OSIS, MA Hasanuddin Pare",
      title: "Chair",
      monogram: "OSIS",
      logoUrl: "",
      start: "2022",
      end: "2023",
      description: "Led the student council, coordinated its programs, and worked with teachers and student representatives.",
    },
  ],
  education: [
    {
      school: "UIN Maulana Malik Ibrahim Malang",
      href: "https://uin-malang.ac.id/",
      monogram: "UIN",
      degree: "Informatics Engineering",
      logoUrl: "",
      start: "2024",
      end: "Present",
    },
    {
      school: "MA Hasanuddin Pare",
      href: undefined,
      monogram: "MA",
      degree: "High school",
      logoUrl: "",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Luma Support",
      description:
        "A customer support workspace for online stores by Velkira, with ticket assignment, follow-up history, and an interactive demo.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      href: "https://github.com/aryapulosari-design/Luna_Velkira",
      image: "/projects/luma-support.svg",
      imageCaption: "Interface illustration",
    },
    {
      title: "SunDays Coffee Concept",
      description:
        "A responsive café website concept by Velkira with menu filters, brand story, and a video hero.",
      technologies: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/aryapulosari-design/SunDays",
      image: "/projects/sundays.jpg",
    },
    {
      title: "Geographic Route Finder",
      description:
        "A Malang Raya route-finding application using Python, Flask, Dijkstra's algorithm, and SQL-backed data.",
      technologies: ["Python", "Flask", "Dijkstra", "SQL"],
      image: "/projects/route-finder.svg",
    },
    {
      title: "MikroTik Networking Laboratory",
      description:
        "Configured DHCP, NAT, firewall filters, simple queues, and a hotspot, with basic network troubleshooting.",
      technologies: ["MikroTik", "DHCP", "NAT", "Firewall"],
      image: "/projects/mikrotik-network.svg",
    },
    {
      title: "Superstore Data Science",
      description:
        "Used Scikit-learn to compare Linear Regression, Ridge Regression, and Random Forest on Superstore data.",
      technologies: ["Python", "Scikit-learn", "Data Analysis"],
      image: "/projects/superstore-data.svg",
    },
    {
      title: "Web CRUD Application",
      description:
        "A group-built data management application using HTML, CSS, PHP, and MySQL.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: "/projects/web-crud.svg",
    },
  ] as Project[],
  hackathons: [] as Hackathon[],
};
