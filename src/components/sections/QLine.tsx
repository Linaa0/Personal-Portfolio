import Image from "next/image";
import { site } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/Editorial";

/**
 * QLine mark: a "Q" whose ring is a clock face (time spent waiting) and whose
 * tail becomes a steady line carrying five points (the five founders), moving
 * in an orderly flow.
 */
function QLineMark() {
  const tail = "M262 262 L318 318 Q332 332 352 332 L520 332";
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="q-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c58a94" />
          <stop offset=".55" stopColor="#a52a40" />
          <stop offset="1" stopColor="#6b0b19" />
        </linearGradient>
        <linearGradient id="q-tail" x1="0" x2="1">
          <stop offset="0" stopColor="#a52a40" />
          <stop offset="1" stopColor="#a52a40" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="q-glow">
          <stop offset="0" stopColor="#a52a40" stopOpacity=".35" />
          <stop offset="1" stopColor="#a52a40" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="190" cy="190" r="170" fill="url(#q-glow)" />

      {/* slow orbit */}
      <g style={{ transformOrigin: "190px 190px" }} className="animate-[spin_60s_linear_infinite]">
        <circle cx="190" cy="190" r="150" fill="none" stroke="#c58a94" strokeOpacity=".22" strokeDasharray="2 10" />
      </g>

      {/* ring */}
      <circle cx="190" cy="190" r="112" fill="#090204" fillOpacity=".55" stroke="url(#q-ring)" strokeWidth="14" />
      <circle cx="190" cy="190" r="92" fill="none" stroke="#c58a94" strokeOpacity=".15" />

      {/* clock ticks */}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const r1 = i % 3 === 0 ? 74 : 80;
        return (
          <line
            key={i}
            x1={(190 + Math.cos(a) * r1).toFixed(2)}
            y1={(190 + Math.sin(a) * r1).toFixed(2)}
            x2={(190 + Math.cos(a) * 86).toFixed(2)}
            y2={(190 + Math.sin(a) * 86).toFixed(2)}
            stroke="#f4eae4"
            strokeOpacity={i % 3 === 0 ? 0.6 : 0.25}
            strokeWidth={i % 3 === 0 ? 2 : 1}
          />
        );
      })}

      {/* hands */}
      <line x1="190" y1="190" x2="190" y2="138" stroke="#f4eae4" strokeWidth="3" strokeLinecap="round" />
      <g style={{ transformOrigin: "190px 190px" }} className="animate-[spin_12s_linear_infinite]">
        <line x1="190" y1="190" x2="190" y2="120" stroke="#c58a94" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="190" cy="190" r="6" fill="#f4eae4" />

      {/* tail flowing into the line */}
      <path d={tail} fill="none" stroke="url(#q-tail)" strokeWidth="14" strokeLinecap="round" />
      <path d={tail} fill="none" stroke="#f4eae4" strokeOpacity=".25" strokeWidth="1" />

      {/* five points moving in order */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} r="6" fill="#f4eae4" opacity="0">
          <animateMotion dur="6s" begin={`${i * -1.2}s`} repeatCount="indefinite" path={tail} />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.8;1"
            dur="6s"
            begin={`${i * -1.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export default function QLine() {
  const facts = [
    { label: "Role", value: site.leadership.title },
    { label: "Team", value: "Five young women" },
    { label: "Focus", value: "Waiting and service delivery" },
  ];

  return (
    <section id="qline" data-tone="flare" aria-labelledby="qline-title" className="section-space relative">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Leadership"
          id="qline-title"
          title={["Time spent waiting", <span key="b" className="text-rose">is worth designing for.</span>]}
        />

        <div
          data-reveal="up"
          className="relative mt-20 grid grid-cols-1 overflow-hidden rounded-[2rem] border border-line lg:mt-24 lg:h-[30rem] lg:grid-cols-2"
        >
          <Image src="/textures/velvet-fold.webp" alt="" fill sizes="100vw" className="object-cover opacity-35" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/40" />

          <div className="relative order-2 flex flex-col justify-end p-8 sm:p-12 lg:order-1">
            <p className="eyebrow">{site.leadership.title}</p>
            <p className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-normal tracking-tight text-paper">
              {site.leadership.company}
            </p>
            <p className="mt-4 max-w-sm text-mist">Research-driven solutions to waiting and service delivery in Rwanda.</p>
          </div>

          <div className="relative order-1 h-72 p-6 sm:h-80 lg:order-2 lg:h-auto lg:p-10">
            <QLineMark />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-12">
          <p data-reveal="up" className="text-[1.08rem] leading-[1.85] text-mist lg:col-span-6">
            I co-founded QLine with four other young women and lead it as CEO. I set the roadmap, coordinate the team and
            keep our work grounded in research with the people who wait.
          </p>
          <dl data-reveal="stagger" className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-8">
            {facts.map((f) => (
              <div key={f.label} className="border-t border-line pt-5">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-3 text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
