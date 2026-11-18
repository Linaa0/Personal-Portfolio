import type { ProjectVisualKey } from "@/lib/projects";

/**
 * Art-directed visual for each project. These are editorial illustrations of
 * what each project is about, not screenshots. Illustrative data is labelled.
 */
export default function ProjectVisual({ slug }: { slug: ProjectVisualKey }) {
  switch (slug) {
    case "schoolarchive":
      return <SchoolArchiveVisual />;
    case "instantly":
      return <InstantlyVisual />;
    case "zubaka":
      return <ZubakaVisual />;
    case "izere":
      return <IzereVisual />;
    case "lineup":
      return <LineUpVisual />;
    case "aquatrace":
      return <AquaTraceVisual />;
  }
}

function Stage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-velvet ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,rgb(107_11_25/.55),transparent_60%),radial-gradient(90%_70%_at_10%_100%,rgb(42_4_10/.9),transparent_70%)]" />
      {children}
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />
    </div>
  );
}

function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`absolute text-[0.6rem] uppercase tracking-[0.28em] text-mist ${className}`}>{children}</span>
  );
}

/* 01 · SchoolArchive: a library of spines ------------------------------- */
function SchoolArchiveVisual() {
  const spines = [
    { w: 46, h: 300, c: "#2a040a", label: "" },
    { w: 64, h: 380, c: "#6b0b19", label: "Notes" },
    { w: 40, h: 330, c: "#18050a", label: "" },
    { w: 72, h: 420, c: "#86192d", label: "Past papers" },
    { w: 52, h: 350, c: "#2a040a", label: "" },
    { w: 66, h: 395, c: "#6b0b19", label: "Assignments" },
    { w: 38, h: 290, c: "#a52a40", label: "" },
    { w: 58, h: 360, c: "#2a040a", label: "Appeals" },
    { w: 44, h: 310, c: "#18050a", label: "" },
  ];
  let x = 60;
  return (
    <Stage>
      <div aria-hidden className="absolute -right-[6%] -top-[10%] select-none font-display text-[38rem] leading-none text-paper/[0.035]">
        A
      </div>
      <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="sa-sheen" x1="0" x2="1">
            <stop offset="0" stopColor="#f4eae4" stopOpacity="0" />
            <stop offset=".5" stopColor="#f4eae4" stopOpacity=".12" />
            <stop offset="1" stopColor="#f4eae4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {spines.map((s, i) => {
          const sx = x;
          x += s.w + 6;
          const top = 560 - s.h;
          return (
            <g key={i}>
              <rect x={sx} y={top} width={s.w} height={s.h} fill={s.c} stroke="#c58a94" strokeOpacity=".18" />
              <rect x={sx} y={top} width={s.w} height={s.h} fill="url(#sa-sheen)" />
              <line x1={sx + 6} x2={sx + s.w - 6} y1={top + 26} y2={top + 26} stroke="#c58a94" strokeOpacity=".35" />
              <line x1={sx + 6} x2={sx + s.w - 6} y1={top + s.h - 26} y2={top + s.h - 26} stroke="#c58a94" strokeOpacity=".35" />
              {s.label && (
                <text
                  x={sx + s.w / 2}
                  y={top + s.h / 2}
                  transform={`rotate(-90 ${sx + s.w / 2} ${top + s.h / 2})`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#f8f5f6"
                  fontFamily="var(--font-quicksand)"
                  fontSize="22"
                 
                >
                  {s.label}
                </text>
              )}
            </g>
          );
        })}
        <line x1="30" x2="570" y1="561" y2="561" stroke="#c58a94" strokeOpacity=".5" />
        <line x1="30" x2="570" y1="566" y2="566" stroke="#c58a94" strokeOpacity=".15" />
      </svg>
      <div className="absolute inset-x-[10%] bottom-[11%] flex items-center gap-3 border-b border-rose/40 pb-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c58a94" strokeWidth="2" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="text-sm text-mist">Search the archive</span>
        <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-rose" />
      </div>
      <Tag className="left-[10%] top-[8%]">One school today · Many schools tomorrow</Tag>
    </Stage>
  );
}

/* 02 · Instantly: two streams become one brief -------------------------- */
function InstantlyVisual() {
  const bars = (n: number, seed: number) =>
    Array.from({ length: n }, (_, i) => 40 + ((i * 37 + seed * 53) % 50));
  const tiers = [
    { name: "Immediate", tone: "bg-flare" },
    { name: "Needs response", tone: "bg-wine" },
    { name: "Important", tone: "bg-crimson" },
    { name: "FYI only", tone: "bg-rose/50" },
    { name: "No action", tone: "bg-mist/30" },
  ];
  return (
    <Stage>
      <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M120 0 C120 260, 300 260, 300 400" stroke="#c58a94" strokeOpacity=".25" fill="none" />
        <path d="M480 0 C480 260, 300 260, 300 400" stroke="#c58a94" strokeOpacity=".25" fill="none" />
        <path d="M120 0 C120 260, 300 260, 300 400" stroke="#a52a40" strokeWidth="1.5" fill="none" strokeDasharray="4 18" className="[animation:flow_3s_linear_infinite]" />
        <path d="M480 0 C480 260, 300 260, 300 400" stroke="#a52a40" strokeWidth="1.5" fill="none" strokeDasharray="4 18" className="[animation:flow_3.6s_linear_infinite]" />
      </svg>
      {[
        { label: "Gmail", left: "8%", seed: 1 },
        { label: "Slack", left: "62%", seed: 2 },
      ].map((col) => (
        <div key={col.label} className="absolute top-[9%] w-[30%]" style={{ left: col.left }}>
          <p className="mb-4 font-display text-xl text-paper">{col.label}</p>
          <div className="space-y-2.5 [mask-image:linear-gradient(black_40%,transparent)]">
            {bars(6, col.seed).map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose/50" />
                <span className="h-1.5 rounded-full bg-paper/30" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="absolute inset-x-[16%] bottom-[10%] border border-rose/25 bg-night/70 p-6 backdrop-blur-sm">
        <div className="flex items-baseline justify-between">
          <p className="font-display text-2xl text-paper">Today&apos;s brief</p>
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-mist">AI sorted</p>
        </div>
        <ul className="mt-5 space-y-3">
          {tiers.map((t, i) => (
            <li key={t.name} className="flex items-center gap-3 text-sm text-paper/85">
              <span className={`h-2 w-2 rotate-45 ${t.tone}`} />
              <span className="flex-1">{t.name}</span>
              <span className="h-1 rounded-full bg-paper/10" style={{ width: `${70 - i * 12}px` }} />
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-line pt-4 text-xs text-mist">
          Suggested reply · <span className="text-rose">Professional</span>
        </div>
      </div>
      <style>{`@keyframes flow{to{stroke-dashoffset:-220}}`}</style>
    </Stage>
  );
}

/* 03 · ZUBAKA: contour lines and a site reading -------------------------- */
function contour(cx: number, cy: number, r: number, k: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    const rr =
      r * (1 + 0.12 * Math.sin(3 * a + k) + 0.07 * Math.sin(5 * a - k * 1.7) + 0.04 * Math.cos(7 * a + k * 0.6));
    pts.push(`${(cx + rr * Math.cos(a) * 1.15).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}
const contours = [
  ...Array.from({ length: 11 }, (_, i) => contour(380, 260, 24 + i * 30, i * 0.35)),
  ...Array.from({ length: 6 }, (_, i) => contour(140, 600, 18 + i * 26, 2 + i * 0.4)),
];

function ZubakaVisual() {
  return (
    <Stage>
      <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        {contours.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#c58a94" strokeOpacity={0.1 + (i % 11) * 0.025} strokeWidth={i % 5 === 0 ? 1.2 : 0.7} />
        ))}
        <path d="M-10 470 C 120 430, 200 520, 300 480 S 470 380, 620 430" fill="none" stroke="#a52a40" strokeOpacity=".7" strokeWidth="2" />
        <path d="M-10 470 C 120 430, 200 520, 300 480 S 470 380, 620 430" fill="none" stroke="#a52a40" strokeOpacity=".2" strokeWidth="14" />
        <path d="M60 750 L 250 330 L 600 300" fill="none" stroke="#f4eae4" strokeOpacity=".22" strokeDasharray="2 6" />
        <g transform="translate(330 360)">
          <circle r="44" fill="#a52a40" fillOpacity=".08" stroke="#a52a40" strokeOpacity=".5" strokeDasharray="3 5" />
          <circle r="6" fill="#f4eae4" />
          <circle r="14" fill="none" stroke="#f4eae4" strokeOpacity=".5" />
        </g>
      </svg>
      <Tag className="left-[8%] top-[8%]">Kigali hills · illustrative</Tag>
      <div className="absolute bottom-[9%] right-[8%] w-[58%] min-w-[15rem] border-l border-rose/50 bg-night/75 py-5 pl-6 pr-5 backdrop-blur-sm">
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-mist">Site reading · a school</p>
        <p className="mt-2 font-display text-2xl text-paper">Generally suitable</p>
        <dl className="mt-4 space-y-1.5 text-sm">
          {[
            ["Flood exposure", "Low"],
            ["Slope", "Moderate"],
            ["Road access", "Good"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4">
              <dt className="text-mist">{k}</dt>
              <dd className="text-paper">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 flex gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-rose">
          <span>EN</span>
          <span>RW</span>
          <span>FR</span>
        </p>
      </div>
    </Stage>
  );
}

/* 04 · IZERE: an agreement, confirmed and sealed ------------------------- */
function IzereVisual() {
  return (
    <Stage>
      <div className="absolute left-1/2 top-1/2 w-[64%] min-w-[16rem] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg]">
        <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] bg-cream/10" />
        <div className="relative bg-cream px-7 pb-9 pt-8 text-night shadow-[0_40px_80px_-20px_rgba(0,0,0,.7)]">
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-crimson">Supply agreement</p>
          <p className="mt-2 font-display text-2xl leading-tight">Weekly stock delivery</p>
          <ul className="mt-6 space-y-3 text-[0.72rem]">
            {[
              { step: "Terms agreed", note: "v1", done: true },
              { step: "Delivery confirmed by both", note: "Mon", done: true },
              { step: "Quantity change requested", note: "v2", done: false },
            ].map((s) => (
              <li key={s.step} className="flex items-center gap-3 border-b border-night/10 pb-2.5">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[0.55rem] ${
                    s.done ? "bg-crimson text-cream" : "border border-night/30"
                  }`}
                >
                  {s.done ? "✓" : ""}
                </span>
                <span className={`flex-1 ${s.done ? "text-night/80" : "text-night/50"}`}>{s.step}</span>
                <span className="text-night/40">{s.note}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-6 text-[0.62rem]">
            {["Supplier", "Business owner"].map((p) => (
              <div key={p}>
                <span className="block h-px bg-night/40" />
                <p className="mt-1.5 uppercase tracking-[0.2em] text-night/60">{p}</p>
                <p className="mt-0.5 text-crimson">Confirmed</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-9 -right-7 flex h-24 w-24 items-center justify-center rounded-full bg-crimson shadow-[inset_0_-6px_14px_rgba(0,0,0,.45),0_10px_30px_rgba(0,0,0,.5)]">
            <span className="absolute inset-2 rounded-full border border-rose/40" />
            <span className="font-display text-lg tracking-wide text-cream">Izere</span>
          </div>
        </div>
      </div>
      <div className="absolute left-[8%] top-[8%] space-y-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-mist">
        <p>Small business process</p>
        <p className="text-rose">Illustrative record</p>
      </div>
    </Stage>
  );
}

/* 05 · Line-Up: a transit map, a moving bus and a QR ticket -------------- */
const QR = Array.from({ length: 81 }, (_, i) => {
  const r = Math.floor(i / 9);
  const c = i % 9;
  const finder = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3);
  return finder || ((r * 7 + c * 13 + r * c) % 5 < 2);
});

function LineUpVisual() {
  const routes = [
    { d: "M40 150 C 180 150, 220 330, 320 360 S 480 420, 570 560", color: "#a52a40", w: 4 },
    { d: "M60 600 C 160 520, 240 420, 320 360 S 470 200, 560 130", color: "#c58a94", w: 3 },
    { d: "M20 380 L 320 360 L 590 330", color: "#f4eae4", w: 2, dash: "2 8" },
  ];
  const stops = [
    [40, 150], [175, 205], [320, 360], [450, 430], [570, 560],
    [60, 600], [205, 470], [450, 225], [560, 130],
  ];
  return (
    <Stage>
      <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="lu-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#c58a94" strokeOpacity=".05" />
          </pattern>
        </defs>
        <rect width="600" height="750" fill="url(#lu-grid)" />
        {routes.map((r, i) => (
          <path key={i} id={`lu-r${i}`} d={r.d} fill="none" stroke={r.color} strokeWidth={r.w} strokeLinecap="round" strokeOpacity={i === 2 ? 0.35 : 0.85} strokeDasharray={r.dash} />
        ))}
        {stops.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 2 ? 9 : 5.5} fill="#090204" stroke="#f4eae4" strokeWidth={i === 2 ? 2.5 : 1.5} />
        ))}
        {/* bus travelling along route 1 */}
        <g>
          <circle r="11" fill="#a52a40" fillOpacity=".25">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#lu-r0" />
            </animateMotion>
          </circle>
          <circle r="5" fill="#f4eae4">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#lu-r0" />
            </animateMotion>
          </circle>
        </g>
      </svg>

      <div className="absolute left-[8%] top-[8%] flex items-center gap-2 rounded-full border border-rose/30 bg-night/70 px-4 py-2 text-xs text-paper backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-flare" />
        Next bus · 4 min
      </div>

      <div className="absolute bottom-[8%] right-[8%] w-[46%] min-w-[11rem] rounded-2xl border border-rose/25 bg-night/80 p-5 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-mist">Digital ticket</p>
            <p className="mt-1.5 text-sm text-paper">Route 2 · Single</p>
          </div>
          <div className="grid h-14 w-14 shrink-0 grid-cols-9 gap-px rounded-md bg-cream p-1">
            {QR.map((on, i) => (
              <span key={i} className={on ? "bg-night" : ""} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between border-t border-line pt-3 text-[0.68rem] text-mist">
          <span>Valid 90 min</span>
          <span className="text-rose">Paid</span>
        </div>
      </div>
      <Tag className="bottom-[8%] left-[8%]">Illustrative</Tag>
    </Stage>
  );
}

/* 06 · AquaTrace: tracing an anomaly upstream ---------------------------- */
function AquaTraceVisual() {
  const stations = [
    { x: 150, y: 150, id: "S1", state: "normal" },
    { x: 420, y: 140, id: "S2", state: "normal" },
    { x: 300, y: 330, id: "S3", state: "normal" },
    { x: 300, y: 520, id: "S4", state: "alert" },
  ];
  return (
    <Stage>
      <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="aq-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#c58a94" strokeOpacity=".06" />
          </pattern>
        </defs>
        <rect width="600" height="750" fill="url(#aq-grid)" />
        <g transform="translate(0 50)">
        {/* drains */}
        <path d="M40 60 L150 150 L300 330 L300 520 L300 700" fill="none" stroke="#2a040a" strokeWidth="18" strokeLinecap="round" />
        <path d="M560 40 L420 140 L300 330" fill="none" stroke="#2a040a" strokeWidth="14" strokeLinecap="round" />
        <path d="M40 60 L150 150 L300 330 L300 520 L300 700" fill="none" stroke="#c58a94" strokeOpacity=".35" strokeWidth="1.2" />
        <path d="M560 40 L420 140 L300 330" fill="none" stroke="#c58a94" strokeOpacity=".35" strokeWidth="1.2" />
        <path d="M130 420 L300 450" fill="none" stroke="#2a040a" strokeWidth="10" strokeLinecap="round" />
        <path d="M130 420 L300 450" fill="none" stroke="#a52a40" strokeWidth="1.5" />
        {/* likely source section */}
        <path d="M300 348 L300 502" fill="none" stroke="#a52a40" strokeWidth="6" strokeDasharray="6 6" />
        <text x="318" y="430" fill="#c58a94" fontSize="13" fontFamily="var(--font-quicksand)" letterSpacing="2">LIKELY SOURCE SECTION</text>
        {stations.map((s) => (
          <g key={s.id} transform={`translate(${s.x} ${s.y})`}>
            {s.state === "alert" && <circle r="30" fill="#a52a40" fillOpacity=".18" className="[animation:ping_2.4s_ease-out_infinite] [transform-box:fill-box] [transform-origin:center]" />}
            <circle r="13" fill={s.state === "alert" ? "#a52a40" : "#090204"} stroke={s.state === "alert" ? "#f4eae4" : "#c58a94"} strokeWidth="1.5" />
            <text x="22" y="5" fill="#f8f5f6" fontSize="14" fontFamily="var(--font-quicksand)" letterSpacing="1">{s.id}</text>
            <text x="22" y="22" fill={s.state === "alert" ? "#c58a94" : "#a89498"} fontSize="10" fontFamily="var(--font-quicksand)" letterSpacing="2">
              {s.state === "alert" ? "ABNORMAL" : "NORMAL"}
            </text>
          </g>
        ))}
        </g>
        {/* turbidity trace */}
        <g transform="translate(40 655)">
          <text y="-14" fill="#a89498" fontSize="10" fontFamily="var(--font-quicksand)" letterSpacing="2">S4 · TURBIDITY · 02:00 to 05:00</text>
          <path d="M0 60 L60 58 L110 61 L150 57 L180 59 L200 20 L215 8 L235 30 L260 50 L300 56 L360 58 L520 59" fill="none" stroke="#f4eae4" strokeOpacity=".85" strokeWidth="1.5" />
          <line x1="0" x2="520" y1="64" y2="64" stroke="#c58a94" strokeOpacity=".2" />
        </g>
      </svg>
      <p className="absolute left-[8%] top-[7%] max-w-[13rem] text-[0.6rem] uppercase leading-relaxed tracking-[0.28em] text-mist">
        Monitor · Detect · <span className="text-rose">Trace</span> · Investigate · Resolve · Verify
      </p>
      <Tag className="right-[6%] top-[7%] text-right">Illustrative network</Tag>
      <style>{`@keyframes ping{0%{transform:scale(.6);opacity:1}100%{transform:scale(2.2);opacity:0}}`}</style>
    </Stage>
  );
}
