"use client";

import { useState } from "react";
import { personal, socialLinks } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";

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
      className="bg-black relative overflow-hidden"
      aria-label="Contact — Get in touch"
    >
      <AnimatedOrbs />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36"
      >
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="reveal mb-6">
            <span className="suptitle text-white/30">Get in touch</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="reveal text-[clamp(2rem,8vw,5rem)] font-light leading-[1.05] tracking-tight text-white max-w-xl"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Let&apos;s Build
              <br />
              <span className="font-semibold">Something Great</span>
            </h2>
            <p className="reveal reveal-delay-1 text-white/35 text-sm leading-relaxed max-w-xs">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form — takes 3/5 on desktop */}
          <div className="reveal lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-black" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-medium mb-2">Message sent!</h3>
                <p className="text-white/40 text-sm">
                  Thanks for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  {/* Name */}
                  <div className="border-b border-white/10 pb-4 mb-6 sm:mr-8">
                    <label htmlFor="name" className="text-white/30 text-xs tracking-widest uppercase block mb-3">
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
                      className="w-full bg-transparent text-white text-base placeholder:text-white/20 outline-none border-none"
                      placeholder="Alex Johnson"
                    />
                  </div>

                  {/* Email */}
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <label htmlFor="email" className="text-white/30 text-xs tracking-widest uppercase block mb-3">
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
                      className="w-full bg-transparent text-white text-base placeholder:text-white/20 outline-none border-none"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div className="border-b border-white/10 pb-4 mb-6">
                  <label htmlFor="project" className="text-white/30 text-xs tracking-widest uppercase block mb-3">
                    Project type
                  </label>
                  <input
                    id="project"
                    type="text"
                    value={formState.project}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, project: e.target.value }))
                    }
                    className="w-full bg-transparent text-white text-base placeholder:text-white/20 outline-none border-none"
                    placeholder="Website redesign, mobile app, brand identity..."
                  />
                </div>

                {/* Message */}
                <div className="border-b border-white/10 pb-4 mb-8">
                  <label htmlFor="message" className="text-white/30 text-xs tracking-widest uppercase block mb-3">
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
                    className="w-full bg-transparent text-white text-base placeholder:text-white/20 outline-none border-none resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto justify-center text-sm">
                  Send message
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info — takes 2/5 on desktop */}
          <div className="reveal reveal-delay-2 lg:col-span-2 flex flex-col gap-8 pt-2">
            {/* Direct contact */}
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-4">
                Direct contact
              </h3>
              <a
                href={`mailto:${personal.email}`}
                className="block text-white text-base hover:text-accent transition-colors mb-2"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="block text-white/50 text-sm hover:text-accent transition-colors"
              >
                {personal.phone}
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-4">
                Based in
              </h3>
              <p className="text-white text-base">{personal.location}</p>
              <p className="text-white/40 text-sm mt-1">GMT+7 · WIB</p>
            </div>

            {/* Availability */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-medium">
                  Available for projects
                </span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Currently accepting new client work for Q3 2025. Response time is typically under 24 hours.
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-4">
                Find me online
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 text-sm hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span>{s.label}</span>
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
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
