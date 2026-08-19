--- src/components/Hero.tsx (原始)


+++ src/components/Hero.tsx (修改后)
import { HeroDashboard } from "./Dashboard";
import { Icon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

const TICKER = [
  "Sales",
  "Organizations",
  "Contacts",
  "Processes",
  "Documents",
  "Activities",
  "Invoices",
  "Payments",
  "Reports",
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TICKER.map((t) => (
        <span
          key={t}
          className="flex items-center font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-mist sm:text-[11px] sm:tracking-[0.24em]"
        >
          <span className="mx-5 size-[6px] bg-brand/70 sm:mx-8" aria-hidden="true" />
          {t}
        </span>
      ))}
      <span className="mx-5 size-[6px] bg-brand/70 sm:mx-8" aria-hidden="true" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      {/* layered ambient background */}
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_20%,black,transparent)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[720px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-brand-bright), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-12%] top-[42%] h-[420px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-amber), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-10 pb-14 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Connected CRM · Lead → Payment</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="t-hero mt-5 text-ink">
              The CRM built around how your{" "}
              <span className="relative inline-block whitespace-nowrap">
                organization
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-[6px] left-0 w-full text-brand"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9c40-5 138-6 214-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
              </span>{" "}
              actually works.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="t-lede mt-6 max-w-[52ch] text-mist">
              HPX Eigen CRM brings sales, documentation, processes, activity tracking, invoices and
              payments into one reliable, organization-level platform — so critical business
              information never lives scattered across disconnected tools.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#platform" className="btn-primary blink-cursor w-full sm:w-auto">
                Explore HPX Eigen CRM
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#journey" className="btn-ghost w-full sm:w-auto">
                See how it works
                <Icon name="chevronDown" className="size-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                { icon: "shield" as const, label: "Organization-level isolation" },
                { icon: "lock" as const, label: "Role-aware access" },
                { icon: "layers" as const, label: "One operational record" },
              ].map((t) => (
                <li key={t.label} className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
                  <Icon name={t.icon} className="size-[15px] text-brand-deep" />
                  {t.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Product */}
        <div className="relative lg:col-span-7">
          <Reveal delay={160} className="relative">
            <HeroDashboard />

            {/* floating context cards */}
            <div className="animate-float pointer-events-none absolute -left-8 bottom-16 hidden xl:block" aria-hidden="true">
              <div className="flex items-center gap-3 rounded-panel border border-line bg-card px-4 py-3 shadow-frame">
                <span className="grid size-9 place-items-center rounded-ui bg-moss-soft text-[#1f6b42]">
                  <Icon name="card" className="size-[18px]" />
                </span>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold">Payment received · INV-2041</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
                    ₹1.18L · Vantage Logistics
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-float-late pointer-events-none absolute -right-6 -top-7 hidden md:block" aria-hidden="true">
              <div className="flex items-center gap-2.5 rounded-panel border border-line bg-ink px-4 py-2.5 text-paper shadow-frame">
                <span className="grid size-7 place-items-center rounded-[7px] bg-brand/25 text-brand-bright">
                  <Icon name="funnel" className="size-[15px]" />
                </span>
                <p className="text-[12px] font-medium">
                  Deal → Negotiation <span className="font-mono text-brand-bright">₹6.2L</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* module ticker */}
      <div className="marquee-shell relative border-y border-line bg-card/80 py-3.5" role="presentation">
        <div className="animate-marquee flex w-max">
          <TickerRow />
          <TickerRow hidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
