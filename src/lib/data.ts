// Single source of truth for site content.
// The images in /public/images are placeholders; overwrite them with the
// real portrait and project screenshots (same filenames) when ready.

export const site = {
  name: "Sayu Damar Yunan",
  // Placeholder mark shown by the loader and page transition.
  // Replace this file with the real logo when it exists.
  logo: "/images/faces/logo.svg",
  cv: "/file/CV.pdf",
  role: "Full-Stack Web Developer",
  email: "its.saiu04@gmail.com",
  github: "https://github.com/sayu0044/",
  githubLabel: "github.com/sayu0044",
  tagline:
    "Building clean, reliable web applications with Laravel, PHP and JavaScript, from database schema to interface.",
};

export const heroPhoto = {
  src: "/images/faces/me1.JPG",
  alt: "Portrait of Sayu Damar Yunan",
};

export type JourneyStep = {
  meta: string;
  sub: string;
  title: string;
  body: string;
};

export const journey: JourneyStep[] = [
  {
    meta: "SMA NEGERI 20 SURABAYA / High School",
    sub: "SCIENCES / 2020 - 2023",
    title: "Academic",
    body: "Studied Natural Science (IPA) with a focus on mathematics, biology, chemistry, and physics. Completed general secondary education while developing analytical thinking, problem-solving, and scientific reasoning skills. Completed the Natural Science (IPA) curriculum, Developed analytical and critical thinking skills, Gained a strong foundation in Biology, Chemistry, Physics, and Mathematics, Applied scientific methods through laboratory experiments and research activities",
  },
  {
    meta: "CAMPUS / UNIVERSITY",
    sub: "COMPUTER SCIENCE  / 2023 - PRESENT",
    title: "Academic / college",
    body: "Currently pursuing an Applied Bachelor's degree in Informatics Engineering at Universitas Airlangga, with a focus on software development, system analysis, and modern programming technologies. Learning modern software development practices, Developing projects using various technologies, Gaining practical programming and problem-solving experience",
  },
  {
    meta: "CAMPUS / UNIVERSITY / STUDENT ASSOCIATION",
    sub: "SPECIALIST ADVISOR FOR TALENTS / 2024 - 2025",
    title: "Non-Acadeic / Organization",
    body: "Supported the development of student talents by mentoring members, coordinating talent development programs, and organizing activities that encouraged leadership, creativity, and collaboration within the student association. Mentored and guided students in developing their skills and potential, Coordinated talent development programs and organizational activities, Collaborated with committees to plan and execute student events, Fostered leadership, teamwork, and professional growth among members",
  },
];

// "live" projects link out to the hosted app ("View More" button);
// "prototype" projects link out to the design/source instead ("View
// Design" button). See the button rendering in src/app/projects/page.tsx.
export type ProjectStatus = "live" | "prototype";

export type Project = {
  slug: string;
  name: string;
  meta: string;
  short: string;
  long: string;
  tech: string[];
  image: { src: string; alt: string };
  status: ProjectStatus;
  link: string;
};

export const projects: Project[] = [
  {
    slug: "Sweetiepie Website",
    name: "Sweetiepie Website",
    meta: "2026 / SOLO BUILD / UI/UX DESIGN",
    short:
      "Workshop booking platform with responsive UI, course showcase and seamless registration flow.",
    long: "A modern workshop platform designed for SweetiePie, allowing users to explore creative workshops, browse schedules, and register through an intuitive user experience. Built with a responsive frontend, clean layouts, and engaging visual design to showcase classes and improve customer interaction.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript strict"],
    image: {
      src: "/images/projects/design website - fe.png",
      alt: "Sweetiepie Website screenshot placeholder",
    },
    status: "live",
    link: "https://sweetiepie-workshop-ui.vercel.app/",
  },
  {
    slug: "Mobile Design",
    name: "Mobile Design",
    meta: "2024 - 2025 / SOLO BUILD / Mobile App Design",
    short:
      "Mobile food ordering app UI with intuitive navigation, product browsing and checkout flow.",
    long: "A mobile UI/UX design for SweetBite that focuses on delivering a smooth food ordering experience. Includes user journey mapping, product discovery, cart management, and checkout screens designed in Figma with an emphasis on usability and modern mobile design principles.",
    tech: ["figma","Dart", "Flutter", "Pocketbase"],
    image: {
      src: "/images/projects/prototype1.png",
      alt: "JadwalKu schedule screenshot placeholder",
    },
    status: "prototype",
    link: "https://www.figma.com/design/q0eSYfUNhfHvC0MNiO6Xp7/Mobile-SweetBite?t=GCF45tdnoN3sQ9HJ-0",
  },
  {
    slug: "VokasiVote",
    name: "VokasiVote",
    meta: "2024 / GROUP BUILD / E-Vote",
    short:
      "User-centered design project documenting research, ideation, prototyping and usability testing.",
    long: "A complete Design Thinking project that follows the user-centered design process from empathy research and problem definition to ideation, prototyping, and testing. Created to demonstrate structured UX problem-solving and validate solutions based on user needs.",
    tech: ["figma"],
    image: {
      src: "/images/projects/prototype2.png",
      alt: "VokasiVote e-vote screenshot placeholder",
    },
    status: "prototype",
    link: "https://www.figma.com/design/uPcin5FQCqWaIDH8Lyr11c/Design-Thinking?node-id=0-1&p=f&t=eNAoOPwaykGD8GZ2-0",
  },
  // Placeholder projects below - swap short/long copy, tech, image and
  // link with real project details when ready.
  {
    slug: "KampuCuci",
    name: "KampuCuci",
    meta: "2026 / GROUP BUILD / PLACEHOLDER",
    short:
      "Laundry service app UI with order tracking, pickup scheduling and service management.",
    long: "A UI/UX prototype for a digital laundry service that simplifies booking, pickup scheduling, order tracking, and payment. Designed in Figma with a clean interface that improves accessibility and streamlines the customer experience.",
    tech: ["Figma", "Flutter", "Dart", "Supabase"],
    image: {
      src: "/images/projects/prototype3.png",
      alt: "Placeholder project thumbnail",
    },
    status: "prototype",
    link: "https://www.figma.com/design/r5B3ZQ7AJGq6E9HEOiIlNj/KampuCuci?t=gzjMcULY7RhUi5N2-0",
  },
  {
    slug: "Portfolio",
    name: "Portfolio",
    meta: "2026 / SOLO BUILD / PLACEHOLDER",
    short:
      "Personal portfolio website showcasing projects, technical skills and professional experience.",
    long: "A responsive personal portfolio website built to highlight projects, technical expertise, and development experience. Features a modern interface, project gallery, and contact section, providing a centralized platform for personal branding and showcasing software engineering work.",
    tech: ["Javascript", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/images/projects/Live1.png",
      alt: "Placeholder project thumbnail",
    },
    status: "live",
    link: "https://sayuyunan.vercel.app/",
  },
  {
    slug: "Trustora",
    name: "Trustora",
    meta: "2026 / GROUP BUILD / PLACEHOLDER",
    short:
      "Trust-based service platform with authentication, user management and secure web architecture.",
    long: "A full-stack web application focused on building trust between users through secure authentication, structured data management, and scalable architecture. Developed using modern web technologies with an emphasis on maintainability, responsive design, and a clean user experience.",
    tech: ["Python", "CSS", "TypeScript"],
    image: {
      src: "/images/projects/prototype4.png",
      alt: "Placeholder project thumbnail",
    },
    status: "prototype",
    link: "https://github.com/sayu0044/Trustora",
  },
];

const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/f0a583`;

export type Tool = {
  name: string;
  role: string;
  icon: string;
};

export const homeStack: Tool[] = [
  { name: "Laravel", role: "Backend framework", icon: iconUrl("laravel") },
  { name: "PHP", role: "Server-side language", icon: iconUrl("php") },
  { name: "JavaScript", role: "Interactive interfaces", icon: iconUrl("javascript") },
  { name: "MySQL", role: "Relational database", icon: iconUrl("mysql") },
  { name: "Tailwind CSS", role: "Styling", icon: iconUrl("tailwindcss") },
  { name: "Git", role: "Version control", icon: iconUrl("git") },
];

export type ToolGroup = {
  name: string;
  blurb: string;
  items: Tool[];
};

export const stackGroups: ToolGroup[] = [
  {
    name: "Backend",
    blurb: "Where most of my time goes",
    items: [
      { name: "Laravel", role: "Primary framework for every recent project", icon: iconUrl("laravel") },
      { name: "PHP", role: "Server-side language, 8.x", icon: iconUrl("php") },
      { name: "MySQL", role: "Relational database and schema design", icon: iconUrl("mysql") },
      { name: "Livewire", role: "Reactive UIs without leaving Laravel", icon: iconUrl("livewire") },
    ],
  },
  {
    name: "Frontend",
    blurb: "The layer users actually touch",
    items: [
      { name: "JavaScript", role: "Interactivity, fetch and DOM work", icon: iconUrl("javascript") },
      { name: "Tailwind CSS", role: "Styling for all current projects", icon: iconUrl("tailwindcss") },
      { name: "HTML & CSS", role: "Semantic markup, layout, responsive design", icon: iconUrl("html5") },
      { name: "Alpine.js", role: "Light interactions inside Blade views", icon: iconUrl("alpinedotjs") },
    ],
  },
  {
    name: "Tools",
    blurb: "Everything around the code",
    items: [
      { name: "Git", role: "Version control, branching, pull requests", icon: iconUrl("git") },
      { name: "GitHub", role: "Hosting, issues and code review", icon: iconUrl("github") },
      { name: "Composer", role: "PHP dependency management", icon: iconUrl("composer") },
      { name: "Postman", role: "Testing APIs before the frontend exists", icon: iconUrl("postman") },
    ],
  },
];
