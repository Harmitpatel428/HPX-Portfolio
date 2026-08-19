--- src/components/Pricing.tsx (原始)


+++ src/components/Pricing.tsx (修改后)
import { useState } from "react";
import { Icon } from "./Icons";
import { Eyebrow, IconSquare, Reveal } from "./ui";

type Billing = "monthly" | "annual";

/* ------------------------------ plan data ------------------------------ */

const ESSENTIALS = [
  "Up to 5 users in your organization",
  "Sales — leads, opportunities & pipeline",
  "Contacts & customer records",
  "Complete activity timeline",
  "Documents — 10 GB connected storage",
  "Email support",
];

const GROWTH = [
  "Up to 20 users across teams",
  "Everything in Essentials",
  "Business processes & workflows",
  "Invoices — full billing lifecycle",
  "Payments — balances & transactions",
  "Reports & dashboards",
  "Documents — 50 GB · priority support",
];

const SCALE_TAGS = [
  "Unlimited users & teams",
  "Multiple organizations",
  "API access",
  "Dedicated onboarding & migration",
  "Custom roles & approval flows",
];

const COMPARE: { feature: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { feature: "Users included", values: ["5", "20", "Unlimited"] },
  { feature: "Organizations", values: ["1", "1", "Multiple"] },
  { feature: "Sales pipeline", values: [true, true, true] },
  { feature: "Contacts & customer records", values: [true, true, true] },
  { feature: "Activity timeline", values: [true, true, true] },
  { feature: "Connected documents", values: ["10 GB", "50 GB", "Unlimited"] },
  { feature: "Business processes", values: [false, true, true] },
  { feature: "Invoices", values: [false, true, true] },
  { feature: "Payments", values: [false, true, true] },
  { feature: "Reports & dashboards", values: [false, true, true] },
  { feature: "API access", values: [false, false, true] },
  { feature: "Onboarding", values: ["Self-serve", "Guided", "Dedicated"] },
  { feature: "Support", values: ["Email", "Priority", "Success manager"] },
];

/* ------------------------------ primitives ----------------------------- */

function inr(v: number): string {
  return v.toLocaleString("en-IN");
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (b: Billing) => void;
}) {
  const btn = (active: boolean) =>
    `relative h-10 rounded-[6px] px-4 text-[13px] font-semibold transition-all duration-200 ${
      active ? "bg-ink text-paper shadow-lift" : "text-mist hover:text-ink"
    }`;
  return (
    <div
      className="inline-flex items-center gap-1 rounded-ui border border-line bg-card p-1"
      role="group"
      aria-label="Billing period"
    >
      <button type="button" className={btn(billing === "monthly")} aria-pressed={billing === "monthly"} onClick={() => onChange("monthly")}>
        Monthly
      </button>
      <button
        type="button"
        className={btn(billing === "annual")}
        aria-pressed={billing === "annual"}
        onClick={() => onChange("annual")}
      >
        Annual
        <span className="ml-1.5 rounded-[4px] bg-brand-soft px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-deep">
          2 months free
        </span>
      </button>
    </div>
  );
}

function PlanCard({
  name,
  tagline,
  monthly,
  annual,
  yearlyTotal,
  features,
  billing,
  featured = false,
  cta,
}: {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  yearlyTotal: string;
  features: string[];
  billing: Billing;
  featured?: boolean;
  cta: string;
}) {
  const price = billing === "monthly" ? monthly : annual;
  return (
    <Reveal
      className={
        featured
          ? "relative flex flex-col rounded-panel border border-brand/40 bg-ink p-6 text-paper shadow-glow sm:p-7 lg:-translate-y-2"
          : "relative flex flex-col rounded-panel border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lift sm:p-7"
      }
    >
      {featured ? (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-[5px] bg-brand px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-paper">
          <Icon name="target" className="size-3" />
          Most chosen
        </span>
      ) : null}
      <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.24em] ${featured ? "text-brand-bright" : "text-brand-deep"}`}>
        {name}
      </p>
      <p className={`mt-2 text-[14px] leading-snug ${featured ? "text-paper/75" : "text-mist"}`}>{tagline}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-[40px] font-bold leading-none tracking-tight tabular-nums">
          <span key={billing} className="price-swap inline-block">
            ₹{inr(price)}
          </span>
        </span>
        <span className={`pb-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] ${featured ? "text-mist-dark" : "text-mist"}`}>
          / org / mo
        </span>
      </div>
      <p className={`mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] ${featured ? "text-mist-dark" : "text-mist"}`}>
        {billing === "annual" ? `Billed ₹${yearlyTotal} yearly` : "Billed monthly · cancel anytime"}
      </p>

      <ul className={`mt-6 space-y-2.5 border-t pt-5 ${featured ? "border-ink-line" : "border-line"}`}>
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={`mt-[3px] grid size-[17px] shrink-0 place-items-center rounded-[5px] ${
                featured ? "bg-brand/25 text-brand-bright" : "bg-brand-soft text-brand-deep"
              }`}
            >
              <Icon name="check" className="size-3" strokeWidth={2.4} />
            </span>
            <span className={`text-[13.5px] leading-snug ${featured ? "text-paper/85" : "text-ink/85"}`}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <a href="#get-started" className={`${featured ? "btn-brand" : "btn-ghost"} w-full`}>
          {cta}
          <Icon name="arrowRight" className="size-4 transition-transform duration-200" />
        </a>
      </div>
    </Reveal>
  );
}

/* -------------------------------- section ------------------------------- */

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <section id="pricing" className="section-y relative overflow-hidden border-t border-line">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_30%_10%,black,transparent)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-[-8%] top-16 h-[420px] w-[560px] rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-brand-bright), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Intro rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>06 — Subscriptions</Eyebrow>
              <h2 className="t-h2 mt-4">Pay for your organization. Not per seat.</h2>
              <p className="t-lede mt-6 max-w-[44ch] text-mist">
                One plan covers your whole organization workspace — every team, every module you
                unlock, and every customer record you create. Add your people without watching a
                per-user meter.
              </p>
              <div className="mt-8">
                <BillingToggle billing={billing} onChange={setBilling} />
              </div>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {[
                  "Unlimited customers & records on every plan",
                  "Organization-level isolation included",
                  "Switch or cancel anytime",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
                    <span className="size-[6px] bg-brand" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Plans */}
        <div className="lg:col-span-8">
          <div className="grid gap-5 pt-2 sm:grid-cols-2">
            <PlanCard
              name="Essentials"
              tagline="For teams replacing spreadsheets with a structured CRM."
              monthly={2400}
              annual={2000}
              yearlyTotal={inr(24000)}
              features={ESSENTIALS}
              billing={billing}
              cta="Start with Essentials"
            />
            <PlanCard
              name="Growth"
              tagline="For businesses running the full lifecycle — sales to payment."
              monthly={5400}
              annual={4500}
              yearlyTotal={inr(54000)}
              features={GROWTH}
              billing={billing}
              featured
              cta="Start with Growth"
            />
          </div>

          {/* Scale band */}
          <Reveal delay={120} className="mt-5">
            <div className="flex flex-col gap-6 rounded-panel border border-line bg-card p-6 transition-all duration-300 hover:border-ink/30 hover:shadow-lift sm:p-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <IconSquare name="layers" tone="ink" />
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-[20px] font-semibold tracking-tight">Scale</h3>
                    <span className="chip border-line bg-paper text-mist">Multi-entity</span>
                  </div>
                  <p className="mt-1 max-w-[52ch] text-[13.5px] leading-relaxed text-mist">
                    For groups and parent companies operating several organizations under one
                    account, with deeper controls and a team beside you from day one.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:hidden">
                {SCALE_TAGS.map((t) => (
                  <span key={t} className="rounded-[5px] border border-line bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-mist">
                    {t}
                  </span>
                ))}
              </div>
              <div className="lg:ml-auto lg:flex lg:items-center lg:gap-8 lg:border-l lg:border-line lg:pl-8">
                <div className="hidden flex-col gap-2 lg:flex">
                  {SCALE_TAGS.map((t) => (
                    <span key={t} className="flex items-center gap-2 text-[13px] font-medium text-ink/85">
                      <Icon name="check" className="size-3.5 text-brand-deep" strokeWidth={2.4} />
                      {t}
                    </span>
                  ))}
                </div>
                <div className="lg:text-right">
                  <p className="font-display text-[26px] font-bold tracking-tight">Custom</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">Tailored to your structure</p>
                  <a href="mailto:hello@hpxeigen.com?subject=HPX%20Eigen%20CRM%20Scale%20plan" className="btn-primary mt-3.5 w-full lg:w-auto">
                    Talk to us
                    <Icon name="arrowUpRight" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Comparison */}
          <Reveal delay={160} className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-[19px] font-semibold tracking-tight">Compare what each plan includes</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">All plans · per organization</p>
            </div>
            <div className="scroll-thin mt-4 overflow-x-auto rounded-panel border border-line bg-card">
              <table className="w-full min-w-[620px] border-collapse text-[13.5px]">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th
                      scope="col"
                      className="sticky left-0 z-[2] bg-card px-4 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-mist sm:px-5"
                    >
                      Capability
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-display text-[14px] font-semibold">Essentials</th>
                    <th scope="col" className="bg-ink px-5 py-3.5 font-display text-[14px] font-semibold text-brand-bright">
                      Growth
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-display text-[14px] font-semibold">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={row.feature} className={i % 2 ? "bg-paper/70" : "bg-card"}>
                      <th
                        scope="row"
                        className="sticky left-0 z-[1] bg-inherit px-4 py-3 text-left font-medium text-ink/85 sm:px-5"
                      >
                        {row.feature}
                      </th>
                      {row.values.map((v, j) => (
                        <td key={j} className={`px-5 py-3 ${j === 1 ? "bg-ink/[0.03]" : ""}`}>
                          {v === true ? (
                            <Icon name="check" className="size-4 text-brand-deep" strokeWidth={2.4} />
                          ) : v === false ? (
                            <span className="text-mist/50">—</span>
                          ) : (
                            <span className="font-medium text-ink/85">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] leading-relaxed text-mist">
              Prices in INR, exclusive of taxes · Plans are priced per organization, not per user
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
