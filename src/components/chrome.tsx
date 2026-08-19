import type { ReactNode } from "react";
import { useCountUp, useInView } from "../lib/hooks";
import { BrandMark, Icon, type IconName } from "./Icons";

/* ------------------------------------------------------------------ */
/*  Shared application chrome — every product preview on the site      */
/*  renders through these atoms so the UI reads as ONE real product.   */
/* ------------------------------------------------------------------ */

export const SIDEBAR_ITEMS: { icon: IconName; label: string }[] = [
  { icon: "grid", label: "Overview" },
  { icon: "funnel", label: "Sales" },
  { icon: "building", label: "Organizations" },
  { icon: "users", label: "Contacts" },
  { icon: "flow", label: "Processes" },
  { icon: "file", label: "Documents" },
  { icon: "pulse", label: "Activities" },
  { icon: "receipt", label: "Invoices" },
  { icon: "card", label: "Payments" },
  { icon: "chart", label: "Reports" },
  { icon: "sliders", label: "Settings" },
];

export const ORG_NAME = "Eigen Dynamics Pvt Ltd";

export function AppFrame({
  active = "Overview",
  children,
  className = "",
  org = ORG_NAME,
  status,
}: {
  active?: string;
  children: ReactNode;
  className?: string;
  org?: string;
  status?: ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-panel border border-line bg-card shadow-frame ${className}`}
    >
      <div className="grid lg:grid-cols-[184px_1fr]">
        {/* Sidebar (lg+) */}
        <aside className="hidden flex-col border-r border-line bg-paper lg:flex">
          <div className="flex items-center gap-2.5 px-4 pb-4 pt-4">
            <span className="text-ink">
              <BrandMark className="size-7" />
            </span>
            <div className="leading-none">
              <p className="font-display text-[13.5px] font-semibold tracking-tight">HPX Eigen</p>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.28em] text-mist">
                CRM
              </p>
            </div>
          </div>
          <nav className="flex-1 space-y-0.5 px-2.5" aria-label="Product modules (preview)">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = item.label === active;
              return (
                <span
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-[7px] px-2.5 py-[7px] text-[13px] font-medium ${
                    isActive
                      ? "bg-ink text-paper shadow-lift"
                      : "text-mist hover:bg-paper-deep hover:text-ink"
                  }`}
                >
                  <Icon name={item.icon} className="size-[16px]" />
                  {item.label}
                  {isActive ? (
                    <span className="ml-auto size-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
                  ) : null}
                </span>
              );
            })}
          </nav>
          <div className="m-2.5 flex items-center gap-2.5 rounded-ui border border-line bg-card px-2.5 py-2">
            <Avatar initials="AR" tone="brand" />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[12px] font-semibold">Aarav Rathi</p>
              <p className="truncate font-mono text-[9.5px] uppercase tracking-wider text-mist">
                Admin
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0">
          {/* Top bar */}
          <header className="flex items-center gap-2.5 border-b border-line bg-card px-3 py-2.5 sm:px-4">
            <span className="inline-flex min-w-0 flex-1 items-center gap-2 rounded-ui border border-line bg-paper px-2.5 py-1.5 sm:max-w-[220px] sm:flex-none lg:max-w-none">
              <Icon name="building" className="size-[15px] shrink-0 text-brand-deep" />
              <span className="truncate text-[12.5px] font-semibold">{org}</span>
              <Icon name="chevronDown" className="size-3.5 shrink-0 text-mist" />
            </span>
            <label className="ml-auto hidden min-w-0 flex-1 items-center gap-2 rounded-ui border border-line bg-paper px-3 py-1.5 md:flex max-w-[300px]">
              <Icon name="search" className="size-[15px] shrink-0 text-mist" />
              <span className="truncate text-[12.5px] text-mist">Search customers, invoices…</span>
              <kbd className="ml-auto rounded-[4px] border border-line bg-card px-1 font-mono text-[9.5px] text-mist">
                ⌘K
              </kbd>
            </label>
            <button
              type="button"
              aria-label="Notifications"
              className="relative ml-auto grid size-9 shrink-0 place-items-center rounded-ui border border-line bg-paper text-mist transition-colors hover:text-ink sm:size-8 md:ml-0"
            >
              <Icon name="bell" className="size-[16px]" />
              <span className="absolute right-1.5 top-1.5 size-[7px] rounded-full bg-amber" aria-hidden="true" />
            </button>
            <span className="hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
            <span className="flex shrink-0 items-center gap-2">
              <Avatar initials="AR" tone="brand" />
            </span>
            <span className="hidden items-center gap-1 rounded-ui bg-brand-soft px-2 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-brand-deep lg:inline-flex">
              <span className="pulse-dot size-[6px] rounded-full bg-brand" aria-hidden="true" />
              Demo data
            </span>
          </header>

          {/* Mobile module strip — replaces the sidebar below lg so the
              preview still reads as a full product on small screens. */}
          <nav
            className="strip-clean flex items-center gap-1 overflow-x-auto border-b border-line bg-paper px-2.5 py-2 lg:hidden"
            aria-label="Product modules (preview)"
          >
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = item.label === active;
              return (
                <span
                  key={item.label}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${
                    isActive ? "bg-ink text-paper shadow-lift" : "text-mist"
                  }`}
                >
                  <Icon name={item.icon} className="size-[13px]" />
                  {item.label}
                </span>
              );
            })}
          </nav>

          {/* Content */}
          <div className="bg-paper/60 p-3.5 sm:p-4">{children}</div>

          {/* Status bar */}
          {status ? (
            <footer className="flex items-center gap-3 border-t border-line bg-card px-4 py-2">
              {status}
            </footer>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function StatusBarDefault() {
  return (
    <>
      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
        <span className="pulse-dot size-[7px] rounded-full bg-moss" aria-hidden="true" />
        Synced · just now
      </span>
      <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.14em] text-mist sm:block">
        Eigen Dynamics · 14 users · 6 teams
      </span>
      <span className="font-mono text-[10px] text-mist sm:ml-0 ml-auto">v2.4</span>
    </>
  );
}

/* ------------------------------- Status pill ------------------------------ */

export function Pill({
  tone,
  children,
}: {
  tone: "moss" | "amber" | "rust" | "brand" | "cobalt" | "slate";
  children: ReactNode;
}) {
  const map = {
    moss: "bg-moss-soft text-[#1f6b42] border-moss/25",
    amber: "bg-amber-soft text-[#8a5c14] border-amber/30",
    rust: "bg-rust-soft text-[#8f3527] border-rust/25",
    brand: "bg-brand-soft text-brand-deep border-brand/25",
    cobalt: "bg-cobalt-soft text-[#2b528a] border-cobalt/25",
    slate: "bg-paper text-mist border-line",
  } as const;
  const dot = {
    moss: "bg-moss",
    amber: "bg-amber",
    rust: "bg-rust",
    brand: "bg-brand",
    cobalt: "bg-cobalt",
    slate: "bg-mist",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[5px] border px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] leading-none ${map[tone]}`}
    >
      <span className={`size-[6px] rounded-full ${dot[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}

/* --------------------------------- Avatar --------------------------------- */

export type AvatarTone = "brand" | "amber" | "cobalt" | "moss" | "rust" | "ink";

const avatarTones: Record<AvatarTone, string> = {
  brand: "bg-brand-soft text-brand-deep",
  amber: "bg-amber-soft text-[#8a5c14]",
  cobalt: "bg-cobalt-soft text-[#2b528a]",
  moss: "bg-moss-soft text-[#1f6b42]",
  rust: "bg-rust-soft text-[#8f3527]",
  ink: "bg-ink text-brand-bright",
};

export function Avatar({
  initials,
  tone = "brand",
  size = "md",
}: {
  initials: string;
  tone?: AvatarTone;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full font-semibold ${avatarTones[tone]} ${
        size === "sm" ? "size-6 text-[9px]" : "size-8 text-[11px]"
      }`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function AvatarStack({
  people,
}: {
  people: { initials: string; tone: AvatarTone }[];
}) {
  return (
    <span className="flex -space-x-1.5">
      {people.map((p, i) => (
        <span key={i} className="rounded-full ring-2 ring-card">
          <Avatar initials={p.initials} tone={p.tone} size="sm" />
        </span>
      ))}
    </span>
  );
}

/* -------------------------------- Sparkline ------------------------------- */

export function Sparkline({
  data,
  className = "h-9 w-full",
  stroke = "var(--color-brand)",
}: {
  data: number[];
  className?: string;
  stroke?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 120;
  const h = 36;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - 4 - ((v - min) / (max - min || 1)) * (h - 8);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} aria-hidden="true">
      <polyline
        points={pts}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="spark-path"
      />
      <polygon points={`0,${h} ${pts} ${w},${h}`} fill={stroke} opacity="0.07" />
    </svg>
  );
}

/* -------------------------------- KPI card -------------------------------- */

export function KpiCard({
  label,
  value,
  fmt,
  delta,
  deltaTone = "moss",
  spark,
  sparkStroke,
}: {
  label: string;
  value: number;
  fmt: (v: number) => string;
  delta: string;
  deltaTone?: "moss" | "amber" | "slate" | "brand";
  spark: number[];
  sparkStroke?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const v = useCountUp(value, inView, 1300);
  const deltaMap = {
    moss: "text-[#1f6b42] bg-moss-soft",
    amber: "text-[#8a5c14] bg-amber-soft",
    slate: "text-mist bg-paper",
    brand: "text-brand-deep bg-brand-soft",
  } as const;
  return (
    <div ref={ref} className="rounded-[10px] border border-line bg-card p-3.5">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[9.5px] font-medium uppercase tracking-[0.16em] text-mist">
          {label}
        </p>
        <span className={`rounded-[4px] px-1.5 py-0.5 font-mono text-[9.5px] font-medium ${deltaMap[deltaTone]}`}>
          {delta}
        </span>
      </div>
      <p className="mt-1.5 font-display text-[22px] font-semibold leading-none tracking-tight tabular-nums">
        {fmt(v)}
      </p>
      <div className="mt-2.5">
        <Sparkline data={spark} stroke={sparkStroke} />
      </div>
    </div>
  );
}

/* -------------------------------- Bar chart ------------------------------- */

export function StageBars({
  stages,
  height = "h-28",
}: {
  stages: { label: string; count: number; amt: string; won?: boolean }[];
  height?: string;
}) {
  const max = Math.max(...stages.map((s) => s.count));
  return (
    <div className="bars">
      <div className={`flex items-end gap-2.5 sm:gap-3 ${height}`}>
        {stages.map((s, i) => (
          <div key={s.label} className="group flex h-full min-w-0 flex-1 flex-col justify-end gap-1.5">
            <p className="text-center font-mono text-[9px] leading-none text-mist opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-[10px]">
              {s.amt}
            </p>
            <div
              className={`bar w-full rounded-t-[5px] transition-colors ${
                s.won ? "bg-moss" : "bg-brand/85 group-hover:bg-brand"
              }`}
              style={{ height: `${(s.count / max) * 100}%`, transitionDelay: `${i * 90}ms` }}
              title={`${s.label}: ${s.count} deals · ${s.amt}`}
            />
          </div>
        ))}
      </div>
      {/* labels — compact on mobile, deal counts move into bar tooltips */}
      <div className="mt-2 flex gap-2.5 border-t border-line pt-2 sm:gap-3">
        {stages.map((s) => (
          <p
            key={s.label}
            className="min-w-0 flex-1 truncate text-center font-mono text-[8.5px] uppercase tracking-wide text-mist sm:text-[10px]"
          >
            <span className="font-semibold text-ink sm:inline hidden">{s.count} </span>
            {s.label}
          </p>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Feed item ------------------------------- */

export function FeedItem({
  icon,
  tone = "brand",
  time,
  children,
  className = "",
}: {
  icon: IconName;
  tone?: "brand" | "amber" | "moss" | "cobalt" | "rust";
  time: string;
  children: ReactNode;
  className?: string;
}) {
  const toneMap = {
    brand: "bg-brand-soft text-brand-deep",
    amber: "bg-amber-soft text-[#8a5c14]",
    moss: "bg-moss-soft text-[#1f6b42]",
    cobalt: "bg-cobalt-soft text-[#2b528a]",
    rust: "bg-rust-soft text-[#8f3527]",
  } as const;
  return (
    <li className={`flex items-start gap-2.5 ${className}`}>
      <span className={`mt-px grid size-7 shrink-0 place-items-center rounded-[7px] ${toneMap[tone]}`}>
        <Icon name={icon} className="size-[14px]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] font-medium leading-snug text-ink/90">{children}</p>
        <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-wider text-mist">{time}</p>
      </div>
    </li>
  );
}

/* -------------------------------- Card head ------------------------------- */

export function PreviewCard({
  title,
  hint,
  children,
  className = "",
  action,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <section className={`rounded-[10px] border border-line bg-card p-3.5 sm:p-4 ${className}`} aria-label={title}>
      <header className="mb-3 flex items-center gap-2">
        <h4 className="font-display text-[13.5px] font-semibold tracking-tight">{title}</h4>
        {hint ? (
          <p className="ml-auto hidden font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist sm:block">
            {hint}
          </p>
        ) : null}
        {action ? <span className="ml-auto sm:ml-2">{action}</span> : null}
      </header>
      {children}
    </section>
  );
}
