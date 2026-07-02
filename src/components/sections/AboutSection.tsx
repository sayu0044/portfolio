"use client";

import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Download } from "lucide-react";

const profileTestimonials = [
  {
    quote: "Available",
    name: "Sayu",
    designation: "Full Stack Developer",
    src: "/img/photo/1.jpg",
  },
  {
    quote: "Digital Product",
    name: "Sayu",
    designation: "UI/UX Designer",
    src: "/img/photo/2.jpg",
  },
];

const journeyItems = [
  {
    period: ["2023", "August -", "Present"],
    metaPeriod: "2023 August - Present",
    position: "D4 Teknik Informatika Student",
    place: "Universitas Airlangga",
    location: "Surabaya, Indonesia",
    status: "Current",
    description:
      "Currently pursuing D4 (Diploma 4) degree in Computer Engineering at Universitas Airlangga, focusing on software development, system analysis, and modern programming technologies.",
    achievements: [
      "Studying comprehensive computer science curriculum",
      "Learning modern software development practices",
      "Developing projects using various technologies",
    ],
    tech: [
      "Software Development",
      "System Analysis",
      "Web Development",
      "Database",
    ],
    badge: "UA",
  },
  {
    period: ["2024 -", "2025"],
    metaPeriod: "2024 - 2025",
    position: "Staff Ahli Departemen Pendidikan",
    place: "Himpunan Mahasiswa",
    location: "Surabaya, Indonesia",
    status: "",
    description:
      "Served as expert staff in the Education Department, specifically in the Interest and Talent division (Minat dan Bakat), focusing on non-academic student development activities.",
    achievements: [
      "Contributed to non-academic student development programs",
      "Helped handle interest and talent activities",
      "Supported sports-related activities such as basketball, badminton, and futsal",
      "Collaborated with other members to manage department programs",
    ],
    tech: [
      "Organization",
      "Leadership",
      "Education Department",
      "Interest and Talent",
      "Sports",
    ],
    badge: "HM",
  },
  {
    period: ["2021 -", "2023"],
    metaPeriod: "2021 - 2023",
    position: "Science Student",
    place: "SMA Negeri 20 Surabaya",
    location: "Surabaya, Indonesia",
    status: "",
    description:
      "Graduated from SMA Negeri 20 Surabaya with a focus on the Science major, building a strong academic foundation before continuing into informatics and software development.",
    achievements: [
      "Completed senior high school education in the Science major",
      "Built foundational knowledge in mathematics and science",
      "Prepared academic foundation for further study in informatics",
    ],
    tech: ["High School", "Science Major", "Mathematics", "Science"],
    badge: "20",
  },
];

type AboutSectionProps = {
  showJourney?: boolean;
};

export default function AboutSection({
  showJourney = false,
}: AboutSectionProps) {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section
      id="about"
      className="relative bg-[#0c0c0c] overflow-hidden"
      aria-label="About me"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#050505] to-transparent pointer-events-none" />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        <div className="grid grid-cols-1 items-center gap-9 md:gap-12 lg:grid-cols-2">
          <div className="reveal mx-auto flex w-full max-w-112 flex-col items-center gap-5 lg:mx-0 lg:-translate-y-4">
            <AnimatedTestimonials
              testimonials={profileTestimonials}
              autoplay
              className="max-w-112"
            />
            <a
              href="/file/CV.pdf"
              download
              className="inline-flex min-h-11 w-full max-w-112 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="reveal reveal-delay-1 mx-auto max-w-126 text-center lg:mx-0 lg:text-left">
            <h2
              className="text-[clamp(1.8rem,5.2vw,3.15rem)] font-semibold leading-[1.03] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              <span className="block">Full Stack Developer</span>
              <span className="block">& UI/UX Designer</span>
            </h2>
            <p className="mt-2 text-base md:text-lg font-medium text-white/35">
              Web, Mobile & Digital Product Development
            </p>
            <p className="mt-8 text-base md:text-[1.35rem] leading-[1.7] text-white/66">
              I design and develop user-friendly digital products by combining
              responsive front-end interfaces, reliable back-end systems, and
              intuitive UI/UX design, with a strong focus on performance and
              functionality.
            </p>
          </div>
        </div>

        {showJourney && (
          <div className="relative mt-20 overflow-hidden rounded-[1.75rem] bg-[#0c0c0c] px-0 py-14 md:mt-28 md:py-18 lg:mt-32">
            <div className="relative z-10 mx-auto max-w-5xl">
            <div className="reveal mx-auto max-w-134 text-center">
              <h2
                className="text-[clamp(2.25rem,6vw,4.2rem)] font-semibold leading-none tracking-tight text-white"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                My Journey
              </h2>
              <p className="mx-auto mt-4 max-w-118 text-sm leading-relaxed text-white/45 md:text-base">
                A timeline of my professional experience, projects, and growth
                as a developer.
              </p>
            </div>

            <div className="relative mt-12 space-y-12 md:mt-16 md:space-y-16">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-accent/50 lg:left-[284px]" />

              {journeyItems.map((item, index) => (
                <article
                  key={item.position}
                  className={`reveal reveal-delay-${index + 1} relative grid grid-cols-[32px_minmax(0,1fr)] gap-x-5 lg:grid-cols-[260px_48px_minmax(0,1fr)] lg:gap-x-0`}
                >
                  <div className="hidden pr-8 pt-2 text-right lg:block">
                    <p
                      className="text-[2.35rem] font-semibold leading-[0.96] tracking-tight text-white"
                      style={{ fontFamily: "var(--font-primary)" }}
                    >
                      {item.period.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="relative flex justify-center pt-4">
                    <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-[#050505]">
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p
                      className="mb-4 text-[2rem] font-semibold leading-[0.98] tracking-tight text-white lg:hidden"
                      style={{ fontFamily: "var(--font-primary)" }}
                    >
                      {item.period.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>

                    <div className="rounded-2xl border border-white/9 bg-black/35 p-5 transition-colors duration-200 hover:border-white/18 md:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex min-w-0 items-start gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white text-[10px] font-semibold text-black">
                            {item.badge}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold leading-tight text-white md:text-lg">
                              {item.position}
                            </h3>
                            <p className="mt-1 text-sm text-white/52">
                              {item.place}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/42 md:justify-end">
                          <span className="inline-flex items-center gap-1.5">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            >
                              <path d="M4.5 2.5v2M11.5 2.5v2M3 6.5h10M4 4h8a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 12 13H4a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 4 4Z" />
                            </svg>
                            {item.metaPeriod}
                          </span>
                          {item.status && (
                            <span className="rounded-full bg-white/12 px-2 py-0.5 text-[10px] font-semibold text-white/70">
                              {item.status}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            >
                              <path d="M8 14s4-3.8 4-7A4 4 0 0 0 4 7c0 3.2 4 7 4 7Z" />
                              <path d="M8 8.5A1.5 1.5 0 1 0 8 5a1.5 1.5 0 0 0 0 3.5Z" />
                            </svg>
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-white/55 md:text-[0.95rem]">
                        {item.description}
                      </p>

                      <div className="mt-5">
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                          <span className="text-accent" aria-hidden="true">
                            *
                          </span>
                          Key Achievements
                        </h4>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-white/52 md:text-sm">
                          {item.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[10px] font-medium text-white/62 transition-colors hover:border-accent/35 hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
