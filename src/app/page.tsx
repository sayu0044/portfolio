import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import GhostLabel from "@/components/GhostLabel";
import HeroHome from "@/components/HeroHome";
import Journey from "@/components/Journey";
import ContactForm from "@/components/ContactForm";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { homeStack, journey, projects, site } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="mx-auto max-w-[1200px] px-6 md:px-10">
        <HeroHome />
        <Reveal stagger className="grid grid-cols-2 gap-8 border-t border-cream/10 py-8 pb-16 md:grid-cols-4">
          <div>
            <div className="font-display text-[44px] text-accent">3</div>
            <div className="mt-1 text-sm text-muted">Projects completed</div>
          </div>
          <div>
            <div className="font-display text-[44px] text-accent">1</div>
            <div className="mt-1 text-sm text-muted">Year of experience</div>
          </div>
          <div className="self-center">
            <div className="font-mono text-[11px] tracking-[0.18em] text-faint">
              EMAIL
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-1.5 inline-block text-[15px] text-accent transition-colors duration-300 hover:text-accent-soft"
            >
              {site.email}
            </a>
          </div>
          <div className="self-center">
            <div className="font-mono text-[11px] tracking-[0.18em] text-faint">
              GITHUB
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 inline-block text-[15px] text-accent transition-colors duration-300 hover:text-accent-soft"
            >
              {site.githubLabel}
            </a>
          </div>
        </Reveal>
      </header>

      <section id="about" className="relative">
        <GhostLabel text="about." />
        <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="eyebrow">[ About ]</div>
          </Reveal>
          <div className="mt-7 grid gap-10 md:grid-cols-2 md:gap-18">
            <Reveal>
              <h2 className="font-display text-[clamp(36px,4vw,54px)] leading-[1.12] font-medium text-pretty">
                I care about the parts users never see.
              </h2>
            </Reveal>
            <Reveal stagger className="flex flex-col gap-5 text-[17px] leading-[1.75] text-soft">
              <p>
                I&apos;m Sayu, a web developer working mostly with Laravel and
                PHP. I like building the whole thing: the schema, the business
                logic, and the interface that makes it all feel effortless.
              </p>
              <p>
                One year in and three projects deep, I&apos;m learning
                something new every week and shipping it the week after.
              </p>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-12 md:mt-30 md:grid-cols-[0.85fr_1.15fr] md:gap-18">
            <div>
              <Reveal className="md:sticky md:top-30">
                <div className="eyebrow">[ My journey ]</div>
                <h3 className="mt-5 font-display text-[clamp(32px,3.4vw,44px)] leading-[1.15] font-medium">
                  Where I have been
                </h3>
                <p className="mt-4 max-w-[36ch] text-[15.5px] leading-[1.7] text-muted">
                  From first CRUD apps to production features, one step at a
                  time.
                </p>
              </Reveal>
            </div>
            <Journey items={journey} />
          </div>
        </div>
      </section>

      <section className="relative">
        <GhostLabel text="work." align="left" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,4vw,54px)] font-medium">
              Selected work.
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-b border-accent/40 pb-1.5 text-[15px] text-accent transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
            >
              All projects <ArrowRightIcon size={15} />
            </Link>
          </Reveal>
          <Reveal stagger className="mt-13 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href="/projects"
                className="group block overflow-hidden rounded-[20px] border border-cream/10 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/45"
              >
                <div className="relative h-[210px] overflow-hidden border-b border-cream/8">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6.5">
                  <h3 className="font-display text-[25px] font-medium">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted">
                    {p.short}
                  </p>
                  <div className="mt-4.5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee
        items={["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind", "Git"]}
      />

      <section className="relative">
        <GhostLabel text="tools." />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 md:px-10 md:pb-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,4vw,54px)] font-medium">
              Tools I work with.
            </h2>
            <Link
              href="/tech-stack"
              className="inline-flex items-center gap-2 border-b border-accent/40 pb-1.5 text-[15px] text-accent transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
            >
              Full tech stack <ArrowRightIcon size={15} />
            </Link>
          </Reveal>
          <Reveal stagger className="mt-13 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeStack.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-4.5 rounded-[20px] border border-cream/10 px-6.5 py-6 transition-colors duration-300 hover:border-accent/45"
              >
                <Image
                  src={s.icon}
                  alt=""
                  width={34}
                  height={34}
                  unoptimized
                  className="flex-none"
                />
                <div>
                  <div className="text-[17px] font-medium">{s.name}</div>
                  <div className="mt-0.5 text-[13.5px] text-dim">{s.role}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-24">
        <GhostLabel text="contact." align="left" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-18">
            <div>
              <Reveal className="md:sticky md:top-30">
                <h2 className="font-display text-[clamp(44px,5.5vw,72px)] leading-[1.08] font-medium text-pretty">
                  Let&apos;s build something
                  <span className="text-accent">.</span>
                </h2>
                <p className="mt-6 max-w-[40ch] text-[17px] leading-[1.7] text-muted">
                  Open to junior roles, internships and freelance Laravel
                  work. Messages go straight to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-accent transition-colors duration-300 hover:text-accent-soft"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
