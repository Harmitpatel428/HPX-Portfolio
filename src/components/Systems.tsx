import { useRef, useState, type JSX, type KeyboardEvent } from "react";
import { Icon, type IconName } from "./Icons";
import { Avatar, Pill } from "./chrome";
import { ArrowLink, CheckItem, IconSquare, Reveal, SectionHead } from "./ui";

/* ------------------------- panel: 01 sales board ------------------------- */

const BOARD: { stage: string; tone: string; deals: { name: string; amt: string; init: string; tone: "brand" | "amber" | "cobalt" | "moss" | "rust" | "ink" }[] }[] = [
  {
    stage: "Lead",
    tone: "text-mist",
    deals: [
      { name: "Sunbird Foods", amt: "₹2.4L", init: "SN", tone: "amber" },
      { name: "BlueRock Traders", amt: "₹1.8L", init: "BR", tone: "cobalt" },
    ],
  },
  {
    stage: "Qualified",
    tone: "text-[#2b528a]",
    deals: [
      { name: "Meridian Textiles", amt: "₹6.2L", init: "MT", tone: "brand" },
      { name: "Auriga Services", amt: "₹4.4L", init: "AS", tone: "ink" },
    ],
  },
  {
    stage: "Proposal",
    tone: "text-brand-deep",
    deals: [
      { name: "Kestrel Mfg", amt: "₹5.6L", init: "KM", tone: "brand" },
      { name: "Zenith Infra", amt: "₹3.1L", init: "ZI", tone: "amber" },
    ],
  },
  {
    stage: "Negotiation",
    tone: "text-[#8a5c14]",
    deals: [{ name: "Vantage Logistics", amt: "₹7.8L", init: "VL", tone: "brand" }],
  },
  {
    stage: "Won",
    tone: "text-[#1f6b42]",
    deals: [{ name: "Northgate Retail", amt: "₹4.9L", init: "NR", tone: "moss" }],
  },
];

function SalesPanel() {
  return (
    <div className="scroll-thin overflow-x-auto pb-1">
      <div className="grid min-w-[640px] grid-cols-5 gap-2">
        {BOARD.map((col) => (
          <div key={col.stage} className="rounded-[9px] border border-line bg-paper p-2">
            <p className={`px-1 pb-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] ${col.tone}`}>
              {col.stage}
            </p>
            <div className="space-y-2">
              {col.deals.map((d) => (
                <div key={d.name} className="group rounded-[8px] border border-line bg-card p-2.5 shadow-[0_1px_0_rgb(12_24_38/0.04)] transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift">
                  <div className="flex items-center justify-between gap-1">
                    <Avatar initials={d.init} tone={d.tone} size="sm" />
                    <span className="font-mono text-[10.5px] font-semibold tabular-nums">{d.amt}</span>
                  </div>
                  <p className="mt-1.5 truncate text-[11.5px] font-semibold">{d.name}</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-mist">Follow-up · 2d</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------ panel: 02 documentation ------------------------ */

const DOCS = [
  { name: "Service Agreement — Meridian Textiles.pdf", ctx: "Customer", ctxTone: "brand" as const, ver: "v3", upd: "2d ago", status: "Approved", tone: "moss" as const },
  { name: "Onboarding Checklist — Northgate.docx", ctx: "Process", ctxTone: "cobalt" as const, ver: "v1", upd: "5d ago", status: "In review", tone: "amber" as const },
  { name: "Quote Q-118 — Kestrel Manufacturing.pdf", ctx: "Opportunity", ctxTone: "amber" as const, ver: "v2", upd: "1d ago", status: "Sent", tone: "cobalt" as const },
  { name: "GST Registration — internal.pdf", ctx: "Organization", ctxTone: "slate" as const, ver: "v4", upd: "12d ago", status: "Archived", tone: "slate" as const },
];

const CTX_TONE: Record<string, string> = {
  brand: "border-brand/25 bg-brand-soft text-brand-deep",
  cobalt: "border-cobalt/25 bg-cobalt-soft text-[#2b528a]",
  amber: "border-amber/30 bg-amber-soft text-[#8a5c14]",
  slate: "border-line bg-paper text-mist",
};

function DocsPanel() {
  return (
    <ul className="divide-y divide-line rounded-[9px] border border-line bg-paper">
      {DOCS.map((d) => (
        <li key={d.name} className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-card">
          <span className="grid size-8 shrink-0 place-items-center rounded-[7px] border border-line bg-card text-mist">
            <Icon name="file" className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-semibold">{d.name}</p>
            <p className="mt-0.5 flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-wider text-mist">
              <span className={`inline-flex items-center gap-1 rounded-[4px] border px-1.5 py-[2px] font-mono text-[9px] uppercase tracking-[0.1em] leading-none ${CTX_TONE[d.ctxTone]}`}>
                <Icon name="link" className="size-2.5" />
                {d.ctx}
              </span>
              {d.ver} · {d.upd}
            </p>
          </div>
          <span className="hidden sm:block"><Pill tone={d.tone}>{d.status}</Pill></span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------- panel: 03 process ---------------------------- */

const STEPS = [
  { label: "KYC & verification", owner: "SN", tone: "amber" as const, state: "done" as const, meta: "Completed · Mon" },
  { label: "Contract & signing", owner: "AR", tone: "brand" as const, state: "done" as const, meta: "Completed · Tue" },
  { label: "System setup", owner: "PK", tone: "cobalt" as const, state: "active" as const, meta: "In progress · 2 tasks open" },
  { label: "Training & handover", owner: "RM", tone: "moss" as const, state: "queued" as const, meta: "Queued" },
];

function ProcessPanel() {
  return (
    <div className="rounded-[9px] border border-line bg-paper p-3.5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[12.5px] font-semibold">Customer Onboarding · Northgate Retail</p>
        <span className="font-mono text-[10px] uppercase tracking-wider text-mist">62% complete</span>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full w-[62%] rounded-full bg-brand transition-[width] duration-700" />
      </div>
      <ol className="space-y-2">
        {STEPS.map((s, i) => (
          <li
            key={s.label}
            className={`flex items-center gap-3 rounded-[8px] border px-3 py-2.5 ${
              s.state === "active" ? "border-brand/40 bg-brand-soft/40" : "border-line bg-card"
            }`}
          >
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full font-mono text-[9.5px] font-semibold ${
                s.state === "done"
                  ? "bg-moss-soft text-[#1f6b42]"
                  : s.state === "active"
                  ? "bg-brand text-paper"
                  : "bg-paper text-mist"
              }`}
            >
              {s.state === "done" ? <Icon name="check" className="size-3" strokeWidth={2.4} /> : i + 1}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold">{s.label}</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-mist">{s.meta}</p>
            </div>
            <span className="ml-auto">
              <Avatar initials={s.owner} tone={s.tone} size="sm" />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------- panel: 04 activity ---------------------------- */

const TIMELINE = [
  { icon: "phone" as const, tone: "cobalt" as const, title: "Call with Priya Nair", meta: "Today · 11:20 · 14 min", by: "AR" },
  { icon: "calendar" as const, tone: "brand" as const, title: "Quarterly review meeting", meta: "Today · 09:00 · Northgate Retail", by: "SN" },
  { icon: "note" as const, tone: "amber" as const, title: "Note — pricing sensitivity on expansion", meta: "Yesterday · 16:02", by: "AR" },
  { icon: "tag" as const, tone: "moss" as const, title: "Deal stage changed → Negotiation", meta: "Yesterday · 12:40 · ₹4.4L", by: "PK" },
];

function ActivityPanel() {
  return (
    <div className="rounded-[9px] border border-line bg-paper p-3.5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[12.5px] font-semibold">Timeline · Meridian Textiles</p>
        <span className="font-mono text-[10px] uppercase tracking-wider text-mist">46 events</span>
      </div>
      <ol className="relative ml-3 space-y-3.5 border-l border-line pl-5">
        {TIMELINE.map((t) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[31px] grid size-6 place-items-center rounded-full border border-line bg-card text-brand-deep">
              <Icon name={t.icon} className="size-3" />
            </span>
            <div className="flex items-baseline justify-between gap-3">
              <p className="truncate text-[12px] font-semibold">{t.title}</p>
              <span className="font-mono text-[9px] uppercase tracking-wider text-mist shrink-0">{t.by}</span>
            </div>
            <p className="font-mono text-[9.5px] uppercase tracking-wider text-mist">{t.meta}</p>
          </li>
        ))}
      </ol>
      <div className="mt-3.5 flex items-center gap-2.5 rounded-[8px] border border-dashed border-brand/40 bg-brand-soft/40 px-3 py-2.5">
        <Icon name="clock" className="size-4 text-brand-deep" />
        <p className="text-[11.5px] font-semibold text-brand-deep">Next up — follow-up call · Thu 11:00</p>
      </div>
    </div>
  );
}

/* -------------------------- panel: 05 payments --------------------------- */

const PAYMENTS = [
  { id: "PAY-1187", who: "Vantage Logistics", method: "Bank transfer", amt: "₹1,18,000", status: "Received", tone: "moss" as const },
  { id: "PAY-1182", who: "Kestrel Manufacturing", method: "UPI", amt: "₹64,200", status: "Received", tone: "moss" as const },
  { id: "PAY-1179", who: "Northgate Retail", method: "Cheque", amt: "₹1,42,000", status: "Clearing", tone: "amber" as const },
  { id: "PAY-1171", who: "Auriga Services", method: "Bank transfer", amt: "₹88,500", status: "Received", tone: "moss" as const },
];

function PaymentsPanel() {
  return (
    <div>
      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          { label: "Received · MTD", value: "₹18.6L", cls: "text-[#1f6b42]" },
          { label: "Outstanding", value: "₹4.82L", cls: "text-[#8a5c14]" },
          { label: "Clearing", value: "₹1.42L", cls: "text-[#2b528a]" },
        ].map((s) => (
          <div key={s.label} className="rounded-[8px] border border-line bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mist">{s.label}</p>
            <p className={`mt-0.5 font-display text-[17px] font-semibold tabular-nums ${s.cls}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-line rounded-[9px] border border-line bg-paper px-3">
        {PAYMENTS.map((p) => (
          <li key={p.id} className="flex items-center gap-3 py-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-card text-mist">
              <Icon name="card" className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10.5px] font-medium">{p.id}</p>
              <p className="hidden truncate text-[11px] text-mist sm:block">{p.who} · {p.method}</p>
            </div>
            <span className="ml-auto font-mono text-[12px] font-semibold tabular-nums">{p.amt}</span>
            <Pill tone={p.tone}>{p.status}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------- panel: 06 invoices --------------------------- */

const LIFECYCLE = ["Draft", "Sent", "Viewed", "Pending", "Paid"];

const INVOICE_ROWS = [
  { id: "INV-2044", who: "Vantage Logistics", amt: "₹86,400", due: "Due in 6 days", tone: "amber" as const },
  { id: "INV-2042", who: "Meridian Textiles", amt: "₹1,42,000", due: "Overdue 4d", tone: "rust" as const },
  { id: "INV-2041", who: "Vantage Logistics", amt: "₹1,18,000", due: "Paid · 02 Feb", tone: "moss" as const },
  { id: "INV-2038", who: "Meridian Textiles", amt: "₹2,36,000", due: "Paid · 28 Jan", tone: "moss" as const },
];

function InvoicesPanel() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        {LIFECYCLE.map((s, i) => (
          <span key={s} className="flex items-center gap-1.5">
            <span
              className={`rounded-[5px] border px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] ${
                s === "Paid"
                  ? "border-moss/25 bg-moss-soft text-[#1f6b42]"
                  : "border-line bg-card text-mist"
              }`}
            >
              {s}
            </span>
            {i < LIFECYCLE.length - 1 ? <Icon name="chevronRight" className="size-3 text-mist/50" /> : null}
          </span>
        ))}
      </div>
      <ul className="divide-y divide-line rounded-[9px] border border-line bg-paper px-3">
        {INVOICE_ROWS.map((r) => (
          <li key={r.id} className="flex items-center gap-3 py-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-card text-mist">
              <Icon name="receipt" className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10.5px] font-medium">{r.id}</p>
              <p className="hidden truncate text-[11px] text-mist sm:block">{r.who}</p>
            </div>
            <span className="ml-auto font-mono text-[12px] font-semibold tabular-nums">{r.amt}</span>
            <Pill tone={r.tone}>{r.due}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ system meta ------------------------------ */

type SystemDef = {
  id: string;
  num: string;
  icon: IconName;
  tone: "brand" | "amber" | "moss" | "rust" | "cobalt" | "ink";
  name: string;
  headline: string;
  copy: string;
  checks: string[];
  panel: () => JSX.Element;
};

const SYSTEMS: SystemDef[] = [
  {
    id: "sales",
    num: "01",
    icon: "funnel",
    tone: "brand",
    name: "Sales",
    headline: "Turn opportunities into organized sales execution.",
    copy: "Leads, opportunities and pipeline stages live in one structured view — with deal values, owners and follow-ups attached to every stage, so nothing moves forward by memory alone.",
    checks: [
      "Leads & opportunities in one pipeline",
      "Stage values that update as deals move",
      "Follow-ups and owners on every deal",
      "Deal visibility across the whole team",
    ],
    panel: SalesPanel,
  },
  {
    id: "documents",
    num: "02",
    icon: "file",
    tone: "cobalt",
    name: "Documentation",
    headline: "Keep business documentation connected to the work.",
    copy: "Agreements, quotes, checklists and internal records are attached to the customer, opportunity or process they belong to — with versions and history preserved on every file.",
    checks: [
      "Documents linked to customers & processes",
      "Version history on every record",
      "Internal and customer-facing records",
      "Context attached, not folders buried",
    ],
    panel: DocsPanel,
  },
  {
    id: "process",
    num: "03",
    icon: "flow",
    tone: "amber",
    name: "Process",
    headline: "Make repeatable business processes visible.",
    copy: "Onboarding, fulfillment, renewals — any operational work can run as a structured process with stages, owners, tasks and checkpoints, so progress is always measurable.",
    checks: [
      "Defined stages with clear ownership",
      "Tasks and checkpoints inside each step",
      "Progress visible to the whole team",
      "Operational work that never goes dark",
    ],
    panel: ProcessPanel,
  },
  {
    id: "activity",
    num: "04",
    icon: "pulse",
    tone: "moss",
    name: "Activity Tracker",
    headline: "Know what happened, what is happening, and what happens next.",
    copy: "Calls, meetings, notes, tasks and status changes land on one chronological timeline per customer — a complete operational record instead of a trail of forwarded emails.",
    checks: [
      "Every interaction on one timeline",
      "Calls, meetings, notes & tasks",
      "Status changes recorded automatically",
      "Next actions always in view",
    ],
    panel: ActivityPanel,
  },
  {
    id: "payments",
    num: "05",
    icon: "card",
    tone: "rust",
    name: "Payments",
    headline: "Connect customer operations to financial activity.",
    copy: "Payment status, transactions, outstanding balances and payment history sit alongside the customer record — so the operational picture and the financial picture never diverge.",
    checks: [
      "Payment status on every customer",
      "Transaction & payment history",
      "Outstanding balances always current",
      "Financial activity tied to the record",
    ],
    panel: PaymentsPanel,
  },
  {
    id: "invoices",
    num: "06",
    icon: "receipt",
    tone: "ink",
    name: "Invoices",
    headline: "Keep billing visible inside the customer lifecycle.",
    copy: "Invoices move through a clear lifecycle — issued, sent, pending, paid — with amounts and states attached to the customer, so billing is part of the relationship, not a side system.",
    checks: [
      "Invoice creation against customers",
      "Clear issued / pending / paid states",
      "Amounts due surfaced per customer",
      "Invoice history on the record",
    ],
    panel: InvoicesPanel,
  },
];

/* -------------------------------- section -------------------------------- */

export function Systems() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const system = SYSTEMS[active];
  const Panel = system.panel;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const count = SYSTEMS.length;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % count;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + count) % count;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = count - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="systems" className="section-y relative border-t border-line bg-paper-deep/50">
      <div className="container-x">
        <SectionHead
          eyebrow="01 — Core systems"
          title={<>Six systems. One operational record.</>}
          lede="HPX Eigen CRM is not a contact list with extras bolted on. Six core systems share the same customers, the same context and the same organizational record."
        />

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* tab list */}
          <Reveal className="lg:col-span-4">
            <div
              role="tablist"
              aria-label="Core systems"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="strip-clean flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-24 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
            >
              {SYSTEMS.map((s, i) => {
                const selected = i === active;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${s.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group flex min-w-[150px] shrink-0 items-center gap-2.5 rounded-[10px] border px-3.5 py-3 text-left transition-all duration-200 lg:min-w-0 lg:gap-3 ${
                      selected
                        ? "border-ink bg-ink text-paper shadow-lift"
                        : "border-line bg-card text-ink hover:border-ink/30 lg:hover:-translate-y-[1px]"
                    }`}
                  >
                    <span className={`font-mono text-[10px] font-semibold ${selected ? "text-brand-bright" : "text-mist"}`}>
                      {s.num}
                    </span>
                    <Icon name={s.icon} className={`size-[17px] ${selected ? "text-brand-bright" : "text-mist group-hover:text-brand-deep"}`} />
                    <span className="text-[13.5px] font-semibold leading-tight">{s.name}</span>
                    <Icon
                      name="chevronRight"
                      className={`ml-auto hidden size-3.5 transition-all lg:block ${selected ? "text-brand-bright" : "text-mist opacity-0 group-hover:opacity-100"}`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* panel */}
          <div className="lg:col-span-8">
            <div
              key={system.id}
              role="tabpanel"
              id={`panel-${system.id}`}
              aria-labelledby={`tab-${system.id}`}
              tabIndex={0}
              className="panel panel-in p-5 shadow-lift sm:p-7 focus-visible:outline-2"
            >
              <div className="flex flex-wrap items-center gap-3">
                <IconSquare name={system.icon} tone={system.tone} />
                <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-mist">
                  System {system.num} — {system.name}
                </p>
              </div>
              <h3 className="t-h3 mt-4">{system.headline}</h3>
              <p className="t-lede mt-3 max-w-[62ch] text-mist">{system.copy}</p>

              <div className="mt-6 rounded-[10px] border border-line bg-paper/70 p-3 sm:p-4">
                <Panel />
              </div>

              <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {system.checks.map((c) => (
                  <CheckItem key={c}>{c}</CheckItem>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <ArrowLink href="#platform">See {system.name.toLowerCase()} in the platform</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
