"use client";

import { useState } from "react";
import { personal, socialLinks } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function ContactSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd send to an API route. For now, simulate success.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050505] overflow-hidden"
      aria-label="Contact — Get in touch"
    >


      {/* Section index */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        07 — Contact
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* Header */}
        <div className="mb-9 md:mb-14 pb-7 md:pb-10 border-b border-white/5">
          <span className="reveal suptitle text-white/25 block mb-6">
            Get in touch
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="reveal text-[clamp(1.9rem,10vw,4rem)] font-light leading-[1.05] tracking-tight text-white max-w-lg"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Let&apos;s Build
              <br />
              <span className="font-semibold">
                Something Great<span className="text-accent">.</span>
              </span>
            </h2>
            <p className="reveal reveal-delay-1 text-white/28 text-sm leading-relaxed max-w-xs shrink-0">
              Have a project in mind? I&apos;d love to hear about it. Send me a
              message and I&apos;ll get back within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-14">
          {/* Form — takes 3/5 on desktop */}
          <div className="reveal lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-64 text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white text-xl font-medium mb-2"
                  style={{ fontFamily: "var(--font-primary)" }}
                >
                  Message sent!
                </h3>
                <p className="text-white/35 text-sm">
                  Thanks for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Name */}
                  <div className="border-b border-white/7 pb-4 mb-6 md:mr-8">
                    <label
                      htmlFor="name"
                      className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-3 font-medium"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full bg-transparent text-white text-base placeholder:text-white/15 outline-none border-none font-light"
                      placeholder="Alex Johnson"
                    />
                  </div>

                  {/* Email */}
                  <div className="border-b border-white/7 pb-4 mb-6">
                    <label
                      htmlFor="email"
                      className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-3 font-medium"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full bg-transparent text-white text-base placeholder:text-white/15 outline-none border-none font-light"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div className="border-b border-white/7 pb-4 mb-6">
                  <label
                    htmlFor="project"
                    className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-3 font-medium"
                  >
                    Project type
                  </label>
                  <input
                    id="project"
                    type="text"
                    value={formState.project}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, project: e.target.value }))
                    }
                    className="w-full bg-transparent text-white text-base placeholder:text-white/15 outline-none border-none font-light"
                    placeholder="Website redesign, mobile app, brand identity..."
                  />
                </div>

                {/* Message */}
                <div className="border-b border-white/7 pb-4 mb-8">
                  <label
                    htmlFor="message"
                    className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-3 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full bg-transparent text-white text-base placeholder:text-white/15 outline-none border-none resize-none font-light"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto justify-center text-sm"
                >
                  Send message
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info — takes 2/5 on desktop */}
          <div className="reveal reveal-delay-2 lg:col-span-2 flex flex-col gap-7 pt-2">
            {/* Direct contact */}
            <div>
              <h3 className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
                Direct contact
              </h3>
              <a
                href={`mailto:${personal.email}`}
                className="block text-white text-base hover:text-accent transition-colors mb-2 font-light"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="block text-white/40 text-sm hover:text-accent transition-colors font-light"
              >
                {personal.phone}
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
                Based in
              </h3>
              <p className="text-white text-base font-light">
                {personal.location}
              </p>
              <p className="text-white/30 text-sm mt-1">GMT+7 · WIB</p>
            </div>

            {/* Availability */}
            <div className="bg-white/3 border border-white/7 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-white text-sm font-medium">
                  Available for projects
                </span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                Currently accepting new client work for Q3 2025. Response time
                is typically under 24 hours.
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
                Find me online
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/35 text-sm hover:text-accent transition-colors flex items-center gap-2 group font-light"
                  >
                    <span>{s.label}</span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      <path d="M6 1a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V2.707l-8.146 8.147a.5.5 0 0 1-.708-.708L14.293 1H6z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
