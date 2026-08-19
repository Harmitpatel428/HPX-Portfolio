import { useCycle } from "../lib/hooks";
import { Icon, type IconName } from "./Icons";
import {
  AppFrame,
  FeedItem,
  KpiCard,
  Pill,
  PreviewCard,
  StageBars,
  StatusBarDefault,
} from "./chrome";

const KPIS = [
  {
    label: "Revenue · MTD",
    value: 24.8,
    fmt: (v: number) => `₹${v.toFixed(1)}L`,
    delta: "+12.4%",
    deltaTone: "moss" as const,
    spark: [8, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 21],
  },
  {
    label: "Open opportunities",
    value: 128,
    fmt: (v: number) => `${Math.round(v)}`,
    delta: "+18 wk",
    deltaTone: "brand" as const,
    spark: [40, 44, 42, 51, 55, 53, 60, 66, 63, 71, 74, 80],
    sparkStroke: "var(--color-cobalt)",
  },
  {
    label: "Outstanding",
    value: 4.82,
    fmt: (v: number) => `₹${v.toFixed(2)}L`,
    delta: "14 invoices",
    deltaTone: "amber" as const,
    spark: [9, 8, 10, 9, 7, 8, 6, 7, 6, 5, 6, 5],
    sparkStroke: "var(--color-amber)",
  },
  {
    label: "Win conversion",
    value: 34.8,
    fmt: (v: number) => `${v.toFixed(1)}%`,
    delta: "+2.1 pts",
    deltaTone: "moss" as const,
    spark: [22, 24, 23, 26, 25, 28, 27, 30, 29, 32, 33, 35],
  },
];

const STAGES = [
  { label: "Lead", count: 42, amt: "₹18.2L" },
  { label: "Qualified", count: 31, amt: "₹22.6L" },
  { label: "Proposal", count: 22, amt: "₹19.8L" },
  { label: "Negotiation", count: 18, amt: "₹14.6L" },
  { label: "Won", count: 15, amt: "₹11.2L", won: true },
];

type FeedEntry = {
  id: string;
  icon: IconName;
  tone: "brand" | "amber" | "moss" | "cobalt" | "rust";
  time: string;
  text: string;
};

const FEED: FeedEntry[] = [
  { id: "f1", icon: "phone", tone: "cobalt", time: "2 min ago", text: "Call logged — Meridian Textiles · renewal talk" },
  { id: "f2", icon: "receipt", tone: "moss", time: "6 min ago", text: "INV-2041 marked paid · ₹1.18L — Vantage Logistics" },
  { id: "f3", icon: "flow", tone: "brand", time: "11 min ago", text: "Onboarding process moved to Step 3 — Northgate" },
  { id: "f4", icon: "send", tone: "amber", time: "18 min ago", text: "Proposal sent · ₹6.2L — Kestrel Manufacturing" },
  { id: "f5", icon: "note", tone: "cobalt", time: "24 min ago", text: "Note added — Sunbird Foods opportunity" },
  { id: "f6", icon: "users", tone: "brand", time: "31 min ago", text: "New contact — Priya Nair, Meridian Textiles" },
  { id: "f7", icon: "tag", tone: "amber", time: "38 min ago", text: "Deal moved to Negotiation · ₹4.4L — Auriga" },
  { id: "f8", icon: "calendar", tone: "moss", time: "44 min ago", text: "Meeting booked — Zenith Infra · Thu 11:00" },
];

const INVOICES = [
  { id: "INV-2044", customer: "Vantage Logistics", amount: "₹86,400", status: "Due in 6 days", tone: "amber" as const },
  { id: "INV-2039", customer: "Northgate Retail", amount: "₹1,42,000", status: "Overdue 4d", tone: "rust" as const },
  { id: "INV-2036", customer: "Kestrel Manufacturing", amount: "₹64,200", status: "Paid", tone: "moss" as const },
];

export function HeroDashboard() {
  const cycle = useCycle(FEED.length, 4200);
  const visible = [0, 1, 2, 3].map((i) => FEED[(cycle + i) % FEED.length]);

  return (
    <AppFrame active="Overview" status={<StatusBarDefault />}>
      {/* KPI row */}
      <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
        {KPIS.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      {/* Pipeline + live activity */}
      <div className="mt-2.5 grid gap-2.5 md:grid-cols-5">
        <PreviewCard title="Sales pipeline" hint="This quarter · ₹86.4L" className="md:col-span-3">
          <StageBars stages={STAGES} />
        </PreviewCard>

        <PreviewCard
          title="Live activity"
          className="md:col-span-2"
          action={
            <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand-deep">
              <span className="pulse-dot size-[6px] rounded-full bg-brand" aria-hidden="true" />
              Streaming
            </span>
          }
        >
          <ul className="space-y-3">
            {visible.map((item, i) => (
              <FeedItem
                key={i === 0 ? `live-${cycle}` : item.id}
                icon={item.icon}
                tone={item.tone}
                time={item.time}
                className={i === 0 ? "feed-in" : ""}
              >
                {item.text}
              </FeedItem>
            ))}
          </ul>
        </PreviewCard>
      </div>

      {/* Outstanding invoices */}
      <PreviewCard
        title="Outstanding invoices"
        hint="₹4.82L across 14 invoices"
        className="mt-2.5"
        action={
          <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-brand-deep">
            View all
            <Icon name="chevronRight" className="size-3.5" />
          </span>
        }
      >
        <ul className="divide-y divide-line">
          {INVOICES.map((inv) => (
            <li key={inv.id} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
              <span className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-paper text-mist">
                <Icon name="receipt" className="size-[14px]" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-medium text-ink">{inv.id}</p>
                <p className="hidden truncate text-[11px] text-mist sm:block">{inv.customer}</p>
              </div>
              <p className="ml-auto font-mono text-[12px] font-semibold tabular-nums">{inv.amount}</p>
              <span className="w-[92px] text-right">
                <Pill tone={inv.tone}>{inv.status}</Pill>
              </span>
            </li>
          ))}
        </ul>
      </PreviewCard>
    </AppFrame>
  );
}
