// ============================================================
// Portfolio Data - Ashley
// Edit this file to update content across the entire site
// ============================================================

export const personal = {
  name: "Hi, I'm Sayu",
  logo: "S.",
  // role: "Creative Developer & UI/UX Designer",
  tagline: "Pioneering Creative Excellent",
  bio: "I design and build fast, beautiful digital products that bridge the gap between functionality and aesthetics. With 6+ years of experience, I help brands translate complex ideas into interfaces people actually enjoy using.",
  bioSecondary:
    "Based in Surabaya, I collaborate with startups and established companies across Southeast Asia and beyond - turning strategy into pixel-perfect, performant products.",
  location: "Surabaya, Indonesia",
  email: "its.saiu04@gmail.com",
  phone: "+62 823 3551 3574",
  availableForWork: true,
};

export const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
  { label: "GitHub", href: "https://github.com/sayu0044", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
];

export const navLinks = [
  { label: "Home", href: "/", key: "home" },
  { label: "About Me", href: "/about", key: "about" },
  { label: "Projects", href: "/projects", key: "project" },
  { label: "Tech", href: "/tech", key: "tech" },
];

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "48", label: "Projects Shipped" },
  { value: "32", label: "Happy Clients" },
  { value: "12", label: "Design Awards" },
];

export const skills = [
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", level: 95 },
      { name: "Brand Identity", level: 85 },
      { name: "Motion & Interaction", level: 80 },
      { name: "Design Systems", level: 90 },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 72 },
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframes to high-fidelity prototypes that developers can build directly from.",
    tools: ["Figma", "FigJam", "Protopie"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Production-ready interfaces built with modern React, Next.js, and Tailwind CSS - accessible, performant, and maintainable.",
    tools: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "03",
    title: "Brand & Identity",
    description:
      "Visual identities that carry meaning across every touchpoint - from logomark to full brand guidelines.",
    tools: ["Illustrator", "Figma", "Framer"],
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Scalable component libraries and token-based design systems that keep teams consistent as they grow.",
    tools: ["Storybook", "Figma Tokens", "Radix UI"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  ariaLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "sweetiepie-website",
    title: "SweetiePie",
    description:
      "A responsive bakery website designed for browsing cake collections and menu items through a clean, accessible, and user-friendly shopping experience.",
    image: "/img/blog/SweetiePie.jpg",
    technologies: ["Web App", "Bakery", "Menu"],
    liveUrl:
      "https://sweetbite-workshop-ix2zudq13-sayudamaryunan-gmailcoms-projects.vercel.app/menu",
    ariaLabel: "View SweetiePie website",
    featured: true,
  },
  {
    id: "sweetiepie-uiux",
    title: "SweetiePie",
    description:
      "A complete UI/UX design for a modern bakery platform, covering product discovery, menu browsing, ordering flows, and a consistent visual experience.",
    image: "/img/blog/figma 1.jpg",
    technologies: ["UI/UX", "Figma", "Prototype"],
    liveUrl:
      "https://www.figma.com/design/Wys97YpZIKdqcw9F7JRJ3S/SweetiePie?node-id=0-1&p=f&t=fjem5NwGkHeETgUl-0",
    ariaLabel: "View SweetiePie UI/UX design",
    featured: true,
  },
  {
    id: "vokasivote",
    title: "VokasiVote",
    description:
      "A UI/UX design for a digital voting platform created for vocational communities, featuring candidate information, structured voting flows, and clear election result presentation.",
    image: "/img/blog/figma 2.jpg",
    technologies: ["UI/UX", "Figma", "Voting Flow"],
    liveUrl:
      "https://www.figma.com/design/HzdMReL56pmjCWu6Hwhm37/VokasiVote?node-id=0-1&p=f&t=V2vSUGLU9ozk4gmU-0",
    ariaLabel: "View VokasiVote design",
    featured: true,
  },
  {
    id: "kampucuci",
    title: "KampuCuci",
    description:
      "A campus laundry service app with ordering, pickup scheduling, and service tracking flows. Designed in Figma and also built into a functional implementation.",
    image: "/img/blog/figma 3.jpg",
    technologies: ["UI/UX", "Figma", "Implementation"],
    liveUrl:
      "https://www.figma.com/design/TvmIYJRfunRZecUtx0kRrW/KampuCuci?node-id=0-1&p=f&t=PO7W2FMJLPXTl0nw-0",
    ariaLabel: "View KampuCuci project",
    featured: false,
  },
  {
    id: "p5",
    title: "Chocolat Brand",
    description:
      "Playful yet premium packaging and brand direction for an artisanal chocolate maker launching in 3 new markets.",
    // TODO: Replace with the real Chocolat Brand project screenshot and live URL.
    image: "/img/blog/2.jpg",
    technologies: ["Packaging", "Brand", "Print"],
    featured: false,
  },
  {
    id: "p6",
    title: "SecureHome App",
    description:
      "Smart home security app with live camera feeds, motion alerts, and household member management.",
    // TODO: Replace with the real SecureHome App project screenshot and live URL.
    image: "/img/blog/1.jpg",
    technologies: ["Mobile", "Security", "UX Research"],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Kemia Skincare",
    text: "Ashley completely transformed how our brand communicates. The new identity and website felt instantly ours - and our conversion rate went up 28% in the first quarter post-launch.",
  },
  {
    name: "Marc Dubois",
    role: "Product Lead, Cascad",
    text: "Exceptional design thinking paired with real engineering knowledge. Ashley shipped production-quality components we could use directly in our codebase. Rare combination.",
  },
  {
    name: "Rania Wijaya",
    role: "Founder, Studio Forma",
    text: "Working with Ashley felt like having a senior design director on the team. Precise, communicative, and always one step ahead of what we needed.",
  },
  {
    name: "Tom Eriksen",
    role: "CTO, Molekule APAC",
    text: "The mobile app Ashley designed scored a 4.8 in user satisfaction testing - the highest we've ever recorded. The attention to interaction detail was extraordinary.",
  },
];

export const blogPosts = [
  {
    id: "b1",
    category: "Design",
    date: "March 12, 2025",
    title: "Why Most SaaS Dashboards Fail on Mobile - and How to Fix It",
    excerpt:
      "70% of enterprise users check their dashboards on mobile at least once a day. Yet most are built desktop-first, then squeezed down. Here's a better approach.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70",
  },
  {
    id: "b2",
    category: "Development",
    date: "January 28, 2025",
    title: "Building a Design System with Tailwind CSS and TypeScript in 2025",
    excerpt:
      "A practical guide to token-based design systems that scale - without the overhead of a dedicated toolchain or six-figure design platform.",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=70",
  },
];
