import { ArrowUpRight, Download } from "lucide-react";
import { site } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/Editorial";
import Magnetic from "@/components/ui/Magnetic";
import ContactForm from "./ContactForm";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: site.linkedin.handle, href: site.linkedin.href, external: true },
  { label: "GitHub", value: `@${site.github.handle}`, href: site.github.href, external: true },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  return (
    <section id="contact" data-tone="flare" aria-labelledby="contact-title" className="section-space relative">
      <div className="shell">
        <SectionHeader
          index="06"
          label="Contact"
          id="contact-title"
          title={["Let’s build something", <span key="b" className="text-rose">worth the time.</span>]}
          intro="Open to internships, roles, collaborations and good conversations. I read every message."
        />

        <div className="mt-24 grid grid-cols-1 gap-20 lg:mt-32 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ul data-reveal="stagger" className="border-t border-line">
              {links.map((l) => (
                <li key={l.label} className="border-b border-line">
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-6 py-6"
                  >
                    <span className="eyebrow w-24 shrink-0">{l.label}</span>
                    <span className="min-w-0 flex-1 truncate text-paper transition-colors duration-500 group-hover:text-rose">
                      {l.value}
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="shrink-0 text-mist transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose"
                    />
                    {l.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>

            <div data-reveal="up" className="mt-12">
              <Magnetic>
                <a
                  href={site.cv.href}
                  download={site.cv.fileName}
                  className="inline-flex items-center gap-3 rounded-full border border-rose/30 px-7 py-4 text-sm font-semibold text-paper transition-colors duration-500 hover:border-rose hover:bg-crimson/30"
                >
                  <Download size={15} aria-hidden className="text-rose" />
                  Download CV
                </a>
              </Magnetic>
            </div>
          </div>

          <div data-reveal="up" className="rounded-[2rem] border border-rose/25 bg-velvet p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,.8)] sm:p-12 lg:col-span-6 lg:col-start-7">
            <p className="text-xl font-normal text-paper">Send a message</p>
            <p className="mt-2 text-sm text-mist">All fields are required.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
