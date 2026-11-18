"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { site } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";
type Fields = { name: string; email: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Hello from ${fields.name || "your portfolio"}`,
  )}&body=${encodeURIComponent(fields.message)}`;

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, company: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        setFields({ name: "", email: "", message: "" });
      } else if (data.code === "not_configured") {
        setStatus("unavailable");
      } else if (data.code === "invalid" && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field = (k: keyof Fields, label: string, type = "text", auto?: string) => (
    <div>
      <label htmlFor={`cf-${k}`} className="text-sm font-semibold text-paper">
        {label}
      </label>
      {k === "message" ? (
        <textarea
          id={`cf-${k}`}
          name={k}
          rows={5}
          value={fields[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
          placeholder="What are you building, and where could I help?"
          className="field resize-none"
          data-lenis-prevent
        />
      ) : (
        <input
          id={`cf-${k}`}
          name={k}
          type={type}
          autoComplete={auto}
          value={fields[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
          placeholder={k === "name" ? "Your full name" : "you@example.com"}
          className="field"
        />
      )}
      <AnimatePresence>
        {errors[k] && (
          <motion.p
            id={`cf-${k}-err`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-sm text-rose"
          >
            {errors[k]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-7" aria-describedby="cf-status">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {field("name", "Your name", "text", "name")}
        {field("email", "Email", "email", "email")}
      </div>
      {field("message", "Message")}

      {/* Honeypot for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          data-cursor="Send"
          className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-paper w-full justify-center px-8 py-4 text-sm font-semibold text-night transition-colors duration-500 hover:bg-cream disabled:opacity-70 sm:w-auto"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-flare transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
          <span className="relative transition-colors duration-500 group-hover:text-paper">
            {status === "sending" ? "Sending" : "Send message"}
          </span>
          {status === "sending" ? (
            <Loader2 size={16} className="relative animate-spin" aria-hidden />
          ) : (
            <ArrowRight size={16} className="relative transition-all duration-500 group-hover:translate-x-1 group-hover:text-paper" aria-hidden />
          )}
        </button>
      </div>

      <div id="cf-status" role="status" aria-live="polite" className="min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          {status === "sent" && (
            <motion.p key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-paper">
              Thank you. Your message was delivered, and I will reply as soon as I can.
            </motion.p>
          )}
          {status === "unavailable" && (
            <motion.p key="unavail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-mist">
              Direct sending is not switched on yet, so nothing was sent.{" "}
              <a href={mailto} className="link-line text-paper">
                Open it in your email app
              </a>{" "}
              instead, or write to {site.email}.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-rose">
              Something went wrong and the message was not sent. Please try again, or{" "}
              <a href={mailto} className="link-line text-paper">
                email me directly
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
