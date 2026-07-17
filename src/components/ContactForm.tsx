"use client";

import { useState } from "react";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";

type SendState = "idle" | "sending" | "sent" | "error";

const inputClass =
  "h-12 w-full rounded-xl border border-cream/10 bg-transparent px-4 text-[15px] text-cream placeholder:text-faint transition-colors duration-300 focus:border-accent/60 focus:outline-none";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<SendState>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(json.error ?? "Sending failed. Your text is still here.");
        setState("error");
        return;
      }
      setState("sent");
      form.reset();
    } catch {
      setError("Network problem. Your text is still here; try again.");
      setState("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot, hidden from real visitors */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name">
          <input
            id="contact-name"
            name="name"
            required
            maxLength={120}
            className={inputClass}
          />
        </Field>
        <Field id="contact-email" label="Email">
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </Field>
      </div>
      <Field id="contact-subject" label="Subject">
        <input
          id="contact-subject"
          name="subject"
          required
          maxLength={200}
          className={inputClass}
        />
      </Field>
      <Field id="contact-message" label="Message">
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          className="w-full rounded-xl border border-cream/10 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-faint transition-colors duration-300 focus:border-accent/60 focus:outline-none"
        />
      </Field>
      <p className="text-[13px] leading-relaxed text-faint">
        Your name, email, and message are used only to reply to you. Nothing
        is shared or added to any list.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn btn-primary disabled:opacity-50"
        >
          <PaperPlaneTiltIcon size={16} weight="bold" />
          {state === "sending" ? "Sending..." : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm">
          {state === "sent" && (
            <span className="text-cream">
              Sent. I&apos;ll reply to your email.
            </span>
          )}
          {state === "error" && <span className="text-muted">{error}</span>}
        </p>
      </div>
    </form>
  );
}
