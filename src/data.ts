// Centralized portfolio data — easy to edit and maintain.

export const PROFILE = {
  name: "NAMITH J",
  tagline: "CSE Data Science",
  roles: ["Computer Vision Engineer", "Data Scientist", "Full-Stack Builder"],
};

export const STATEMENTS = [
  ["Detecting ", "signal", " in the noise."],
  ["Turning scanned chaos into ", "structured data", "."],
  ["From bounding boxes to ", "full-stack systems", "."],
  ["Building software that ", "actually ships", "."],
];

export const ABOUT = {
  heading: ["Engineer.", "Analyst.", "Builder."],
  paragraphs: [
    "I'm a **Computer Science & Engineering (Data Science)** student working at the intersection of **computer vision, machine learning, and full-stack engineering**.",
    "I like problems with structure hiding inside them — a scanned PDF that should be searchable data, a video frame that should be a labeled object, a stack of student notes that should be one platform.",
    "My approach is execution-first: prototype fast, instrument everything, and ship something that actually runs.",
  ],
};

export const SKILLS_ROW_1 = [
  "Python", "Java", "DSA", "OOPs", "DBMS",
  "Sentence Transformers", "YOLO", "OpenCV", "Groq API", "Flask",
];

export const SKILLS_ROW_2 = [
  "MySQL", "MongoDB", "Git", "GitHub", "VS Code",
  "Tesseract OCR", "Computer Vision", "Semantic Search", "REST APIs", "Data Pipelines",
];

export const PROJECTS = [
  {
    badge: "Pinned",
    category: "Data",
    year: "2025",
    title: "AI-Powered Academic Resource Platform",
    description:
      "Architected a full-stack ecosystem for centralized academic resource management, streaming, and previewing. Built semantic search and OCR-powered document indexing for scanned course material.",
    tags: ["Python", "Flask", "Sentence Transformers", "Groq API", "SQL", "Tesseract OCR"],
    icon: "github",
  },
  {
    badge: "Pinned",
    category: "AI",
    year: "2026",
    title: "Forensic Evidence Detection & 3D Reconstruction",
    description:
      "Built a real-time evidence detection system using OpenCV and YOLO, plus an interactive 360° reconstruction experience with custom cubemap projection and spatial rendering.",
    tags: ["Python", "OpenCV", "YOLO", "Data Structures", "Spatial Mapping"],
    icon: "github",
  },
  {
    badge: "Pinned",
    category: "Data",
    year: "2026",
    title: "Media Pipeline",
    description:
      "Built an end-to-end media processing pipeline for ingesting, transforming, and serving rich media assets with Python and cloud-friendly tooling.",
    tags: ["Python", "Flask", "Media Processing", "API", "GitHub"],
    icon: "media",
  },
];

export const EXPERTISE = [
  {
    title: "Computer Vision & Detection",
    description: "Real-time object detection, classification, and spatial reconstruction with OpenCV and YOLO.",
    icon: "plus",
  },
  {
    title: "AI Search & NLP",
    description: "Semantic search and LLM-backed assistants using Sentence Transformers and the Groq API.",
    icon: "lines",
  },
  {
    title: "Full-Stack Platforms",
    description: "End-to-end web systems in Python and Flask, backed by MySQL and MongoDB.",
    icon: "stack",
  },
  {
    title: "Data Extraction Pipelines",
    description: "OCR and document digitization that turn unstructured scans into structured, searchable data.",
    icon: "doc",
  },
  {
    title: "Systems & DSA Foundations",
    description: "Data structures, OOPs, and DBMS fundamentals behind every build that has to hold up.",
    icon: "layers",
  },
  {
    title: "Rapid Prototyping",
    description: "Hackathon-tested execution — design, build, and pitch under real time constraints.",
    icon: "bolt",
  },
];

export const EDUCATION = [
  {
    meta: "2023 — 2027 · VTU",
    title: "BE, Computer Science & Engineering (Data Science)",
    description: "CGPA 7.86 / 10 · Graduation June 2027 · Coursework: OOPs, DSA, DBMS, Operating Systems",
  },
  {
    meta: "Pre-University · PCMC",
    title: "Sri Ramakunjeshwara Pre University College",
    description: "Physics, Chemistry, Mathematics, Computer Science",
  },
  {
    meta: "March 2023",
    title: "SOLVE-A-THON 1.0 — National-Level 24-Hour Hackathon",
    description: "Designed, programmed, and pitched a functional software solution in a time-constrained collaborative environment.",
  },
  {
    meta: "Certifications",
    title: "Data Science & Analytics — HP Life · Data Analytics Job Simulation — Deloitte",
    description: "Applied coursework in analytics and data-driven decision making.",
  },
];

export const CONTACT = {
  email: "namithjgowda09@gmail.com",
  phone: "+91 76766 73309",
  linkedin: "https://www.linkedin.com/in/namith-j",
  github: "https://github.com/Namithj09",
  location: "Puttur, Karnataka, India",
};
