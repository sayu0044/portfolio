// ============================================================
// Portfolio Data — Ashley
// Edit this file to update content across the entire site
// ============================================================

export const personal = {
  name: "Ashley",
  logo: "S.",
  role: "Creative Developer & UI/UX Designer",
  tagline: "Crafting Digital Experiences That Matter",
  bio: "I design and build fast, beautiful digital products that bridge the gap between functionality and aesthetics. With 6+ years of experience, I help brands translate complex ideas into interfaces people actually enjoy using.",
  bioSecondary:
    "Based in Jakarta, I collaborate with startups and established companies across Southeast Asia and beyond — turning strategy into pixel-perfect, performant products.",
  location: "Jakarta, Indonesia",
  email: "hello@ashley.design",
  phone: "+62 812 3456 7890",
  availableForWork: true,
};

export const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
  { label: "GitHub", href: "https://github.com/sayu0044", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "6+", label: "Years Experience" },
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
      "Production-ready interfaces built with modern React, Next.js, and Tailwind CSS — accessible, performant, and maintainable.",
    tools: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "03",
    title: "Brand & Identity",
    description:
      "Visual identities that carry meaning across every touchpoint — from logomark to full brand guidelines.",
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

export const projects = [
  {
    id: "p1",
    title: "Kemia Skincare",
    category: "Brand Identity & Web",
    year: "2024",
    description: "Complete brand identity and e-commerce redesign for an honest skincare brand targeting millennial consumers.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=75",
    tags: ["Branding", "E-commerce", "Figma"],
    featured: true,
  },
  {
    id: "p2",
    title: "Cascad Dashboard",
    category: "Product Design",
    year: "2024",
    description: "Analytics dashboard for a SaaS platform with 50k+ daily active users. Reduced time-on-task by 34%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    tags: ["SaaS", "Dashboard", "React"],
    featured: true,
  },
  {
    id: "p3",
    title: "Interior Studio",
    category: "Web Design & Dev",
    year: "2023",
    description: "Immersive portfolio site for a boutique interior design firm — built with Next.js and GSAP-inspired CSS animations.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=75",
    tags: ["Next.js", "Portfolio", "Animation"],
    featured: false,
  },
  {
    id: "p4",
    title: "Molekule Air Pro",
    category: "Mobile App",
    year: "2023",
    description: "IoT mobile app connecting users to their air purifier — real-time data, alerts, and scheduling in one clean interface.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=75",
    tags: ["Mobile", "IoT", "Figma"],
    featured: false,
  },
  {
    id: "p5",
    title: "Chocolat Brand",
    category: "Brand & Packaging",
    year: "2022",
    description: "Playful yet premium packaging and brand direction for an artisanal chocolate maker launching in 3 new markets.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b8c7e3be8?w=800&q=75",
    tags: ["Packaging", "Brand", "Print"],
    featured: false,
  },
  {
    id: "p6",
    title: "SecureHome App",
    category: "Product Design",
    year: "2022",
    description: "Smart home security app with live camera feeds, motion alerts, and household member management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75",
    tags: ["Mobile", "Security", "UX Research"],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Kemia Skincare",
    text: "Ashley completely transformed how our brand communicates. The new identity and website felt instantly ours — and our conversion rate went up 28% in the first quarter post-launch.",
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
    text: "The mobile app Ashley designed scored a 4.8 in user satisfaction testing — the highest we've ever recorded. The attention to interaction detail was extraordinary.",
  },
];

export const blogPosts = [
  {
    id: "b1",
    category: "Design",
    date: "March 12, 2025",
    title: "Why Most SaaS Dashboards Fail on Mobile — and How to Fix It",
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
      "A practical guide to token-based design systems that scale — without the overhead of a dedicated toolchain or six-figure design platform.",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=70",
  },
];
