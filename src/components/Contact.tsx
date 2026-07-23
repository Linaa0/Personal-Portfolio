"use client";

import { useState, FormEvent } from "react";
import { Github, Mail, Phone, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="section-padding border-t border-border/40 bg-surface/50"
    >
      <div className="container-max">
        <SectionHeading
          label="Contact"
          title="Ready when you are"
          description="Internships, remote roles, freelance work, and startup collaborations worldwide."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted">
              You need someone who ships, not someone who only talks about
              shipping. I build mobile apps, web platforms, and IoT systems. I
              pick things up fast, write clearly, and deliver work your team
              can actually use. Remote or on-site, internship or contract. If
              the problem is interesting, I want in.
            </p>

            <ul className="space-y-4">
              <ContactLink
                icon={<Mail size={18} />}
                label="Email"
                href={`mailto:${personalInfo.email}`}
                value={personalInfo.email}
              />
              <ContactLink
                icon={<Phone size={18} />}
                label="Phone"
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                value={personalInfo.phone}
              />
              <ContactLink
                icon={<Github size={18} />}
                label="GitHub"
                href={personalInfo.github}
                value={`github.com/${personalInfo.githubUsername}`}
                external
              />
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light sm:w-auto"
              >
                <Send size={16} />
                Send Message
              </button>
              {status === "sent" && (
                <p className="text-sm text-accent-light">
                  Opening your email client…
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
  value,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/30"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {label}
          </p>
          <p className="text-sm font-medium text-white">{value}</p>
        </div>
      </a>
    </li>
  );
}
