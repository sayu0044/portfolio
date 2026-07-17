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

export type Project = {
  slug: string;
  name: string;
  meta: string;
  short: string;
  long: string;
  tech: string[];
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "Desain Website",
    name: "Desain Website",
    meta: "2026 / SOLO BUILD / UI/UX DESIGN",
    short:
      "Warehouse inventory system with stock tracking, low-stock alerts and role-based access.",
    long: "A warehouse inventory system for a local distributor. Tracks stock movement in and out, raises low-stock alerts, and separates what admins, staff and viewers can do with role-based access. Built on Laravel with a Tailwind interface.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript strict"],
    image: {
      src: "/images/projects/design website - fe.png",
      alt: "Desain Website screenshot placeholder",
    },
  },
  {
    slug: "Prototype mobile design",
    name: "Prototype mobile design",
    meta: "2024 - 2025 / SOLO BUILD / mobile app design",
    short:
      "Class scheduling app that resolves room and lecturer conflicts automatically.",
    long: "A class scheduling app for a campus organization. Detects room and lecturer conflicts automatically, suggests open slots, and publishes a shareable weekly timetable. Livewire keeps the schedule grid reactive without a separate frontend.",
    tech: ["Laravel", "Livewire", "MySQL"],
    image: {
      src: "/images/jadwalku.jpg",
      alt: "JadwalKu schedule screenshot placeholder",
    },
  },
  {
    slug: "tokokita",
    name: "TokoKita",
    meta: "2024 / SOLO BUILD / E-COMMERCE",
    short:
      "E-commerce storefront with cart, checkout and a lightweight admin dashboard.",
    long: "An e-commerce storefront with product catalog, cart, checkout and a lightweight admin dashboard for orders and stock. My first full project in plain PHP and JavaScript, later refactored with what Laravel taught me.",
    tech: ["PHP", "JavaScript", "MySQL"],
    image: {
      src: "/images/tokokita.jpg",
      alt: "TokoKita storefront screenshot placeholder",
    },
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
