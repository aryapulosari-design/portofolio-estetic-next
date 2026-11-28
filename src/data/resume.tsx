import type { ReactNode } from "react";

export const projectCategories = ["Security & Networking", "Web Products", "Python & Data"] as const;

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: (typeof projectCategories)[number];
  dates?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  video?: string;
  links?: { icon: ReactNode; type: string; href: string }[];
  caseStudy?: {
    slug: string;
    role: string;
    problem: string;
    approach: string;
    workflow: readonly { title: string; description: string }[];
    demo: string;
    demoGuide: string;
  };
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
  headline: "I build web tools for security and operations.",
  description:
    "Informatics Engineering student at UIN Malang with Blue Team internship experience at PTIPD and product development work through Velkira.",
  summary:
    "I lead Ethernet-0, a campus cybersecurity community. My other projects include MikroTik network labs, a route finder built with Flask, and model comparisons in Scikit-learn.",
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
    phone: { label: "0857 0483 4416", dial: "+6285704834416" },
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
      title: "UIN-CSIRT Ticketing",
      category: "Security & Networking",
      description: "A team project for reporting campus cybersecurity incidents and tracking them through triage, assignment, and resolution.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      href: "https://github.com/aryapulosari-design/Sistem-Informasi-Tiket-Cyber-Sec",
      image: "/projects/uin-csirt-demo.webp",
      imageAlt: "UIN-CSIRT demo dashboard showing incident tickets and their triage status",
      imageCaption: "Demo screenshot · sample data",
      caseStudy: {
        slug: "uin-csirt-ticketing",
        role: "Project Manager & Backend · Team project",
        problem: "The campus needed a shared record for incident reports, evidence, and follow-up. Reporters needed to see where their report stood while the IT team needed a way to prioritize and assign work.",
        approach: "I led the project and worked on the backend. The team designed views for reporters, IT staff, and admins around a shared ticket history. We built a demo mode with in-memory sample records so each role could be demonstrated locally without a configured backend.",
        workflow: [
          { title: "Submit a report", description: "A reporter opens a ticket, attaches evidence, and can add follow-up information." },
          { title: "Triage and assign", description: "IT staff review the ticket, set its urgency, assign an owner, and record actions." },
          { title: "Track the outcome", description: "Reporters see progress while the team can review the status history." },
        ],
        demo: "The local demo uses sample incidents and stores changes in server memory. It illustrates the reporting and triage workflow.",
        demoGuide: "https://github.com/aryapulosari-design/Sistem-Informasi-Tiket-Cyber-Sec#cara-menjalankan",
      },
    },
    {
      title: "Luma Support",
      category: "Web Products",
      description:
        "A customer support workspace for online stores by Velkira, with ticket assignment, follow-up history, and an interactive demo.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      href: "https://github.com/aryapulosari-design/Luna_Velkira",
      image: "/projects/luma-support-demo.webp",
      imageAlt: "Luma Support demo workspace showing a queue of sample support tickets",
      imageCaption: "Demo screenshot · sample data",
      caseStudy: {
        slug: "luma-support",
        role: "Product development · Velkira",
        problem: "An online store support team needs to see which customer requests are open, who owns each ticket, and what has already happened before the next reply.",
        approach: "At Velkira, I worked on a workspace that brings queue filters, ticket ownership, and follow-up history together. The project includes a separate demo with fictional customers and tickets so visitors can explore the workflow locally.",
        workflow: [
          { title: "Find a request", description: "Use search and status filters to locate an order-related support ticket." },
          { title: "Assign an owner", description: "Give the ticket to a team member so the next action has a clear owner." },
          { title: "Follow up", description: "Use the ticket history to review what has happened and record the next step." },
        ],
        demo: "The demo uses fictional data and resets in a new session. It is designed to demonstrate the interface and ticket workflow.",
        demoGuide: "https://github.com/aryapulosari-design/Luna_Velkira/blob/main/doct/06-demo.md",
      },
    },
    {
      title: "SunDays Coffee Concept",
      category: "Web Products",
      description:
        "A responsive café website concept by Velkira with menu filters, brand story, and a video hero.",
      technologies: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/aryapulosari-design/SunDays",
      image: "/projects/sundays.jpg",
    },
    {
      title: "Geographic Route Finder",
      category: "Python & Data",
      description:
        "A Malang Raya route-finding application using Python, Flask, Dijkstra's algorithm, and SQL-backed data.",
      technologies: ["Python", "Flask", "Dijkstra", "SQL"],
      image: "/projects/route-finder.svg",
    },
    {
      title: "MikroTik Networking Laboratory",
      category: "Security & Networking",
      description:
        "Configured DHCP, NAT, firewall filters, simple queues, and a hotspot, with basic network troubleshooting.",
      technologies: ["MikroTik", "DHCP", "NAT", "Firewall"],
      image: "/projects/mikrotik-network.svg",
    },
    {
      title: "Superstore Data Science",
      category: "Python & Data",
      description:
        "Used Scikit-learn to compare Linear Regression, Ridge Regression, and Random Forest on Superstore data.",
      technologies: ["Python", "Scikit-learn", "Data Analysis"],
      image: "/projects/superstore-data.svg",
    },
    {
      title: "Web CRUD Application",
      category: "Web Products",
      description:
        "A group-built data management application using HTML, CSS, PHP, and MySQL.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: "/projects/web-crud.svg",
    },
  ] as Project[],
  hackathons: [] as Hackathon[],
};
