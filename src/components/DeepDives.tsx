import type { ReactNode } from "react";
import { Icon } from "./Icons";
import { Avatar, Pill, StageBars } from "./chrome";
import { ArrowLink, CheckItem, Eyebrow, Reveal, SectionHead } from "./ui";

function DivePanel({
  eyebrow,
  title,
  copy,
  checks,
  link,
  linkLabel,
  children,
  className = "",
  delay = 0,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  checks: string[];
  link: string;
  linkLabel: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <article className="group flex h-full flex-col rounded-panel border border-line bg-card p-5 shadow-[0_1px_0_rgb(12_24_38/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift sm:p-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="t-h3 mt-3">{title}</h3>
        <p className="mt-2.5 max-w-[58ch] text-[14px] leading-relaxed text-mist">{copy}</p>

        <div className="mt-5 flex-1 rounded-[10px] border border-line bg-paper/70 p-3.5 sm:p-4">{children}</div>

        <ul className="mt-5 space-y-2">
          {checks.map((c) => (
            <CheckItem key={c}>{c}</CheckItem>
          ))}
        </ul>

        <div className="mt-5 border-t border-line pt-4">
          <ArrowLink href={link}>{linkLabel}</ArrowLink>
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------ panel content ----------------------------- */

function SalesCommand() {
  const deals = [
    { name: "Vantage Logistics", amt: "₹7.8L", stage: "Negotiation", tone: "amber" as const, init: "VL", atone: "brand" as const },
    { name: "Meridian Textiles", amt: "₹6.2L", stage: "Qualified", tone: "cobalt" as const, init: "MT", atone: "brand" as const },
    { name: "Kestrel Manufacturing", amt: "₹5.6L", stage: "Proposal", tone: "brand" as const, init: "KM", atone: "cobalt" as const },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-5">
      <div className="md:col-span-3">
        <StageBars
          height="h-24"
          stages={[
            { label: "Lead", count: 42, amt: "₹18.2L" },
            { label: "Qual", count: 31, amt: "₹22.6L" },
            { label: "Prop", count: 22, amt: "₹19.8L" },
            { label: "Neg", count: 18, amt: "₹14.6L" },
            { label: "Won", count: 15, amt: "₹11.2L", won: true },
          ]}
        />
      </div>
      <div className="md:col-span-2">
        <p className="mb-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-mist">Top open deals</p>
        <ul className="space-y-2">
          {deals.map((d) => (
            <li key={d.name} className="flex items-center gap-2.5 rounded-[8px] border border-line bg-card px-2.5 py-2">
              <Avatar initials={d.init} tone={d.atone} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-[11.5px] font-semibold leading-tight">{d.name}</p>
                <Pill tone={d.tone}>{d.stage}</Pill>
              </div>
              <span className="ml-auto font-mono text-[11px] font-semibold tabular-nums">{d.amt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OrgControl() {
  const users = [
    { init: "AR", tone: "brand" as const, name: "Aarav Rathi", role: "Admin", rt: "brand" as const, team: "Sales", state: "Active", st: "moss" as const },
    { init: "SN", tone: "amber" as const, name: "Sneha Nair", role: "Manager", rt: "cobalt" as const, team: "Operations", state: "Active", st: "moss" as const },
    { init: "RM", tone: "moss" as const, name: "Rohan Mehta", role: "Member", rt: "slate" as const, team: "Finance", state: "Active", st: "moss" as const },
    { init: "PK", tone: "cobalt" as const, name: "Priya Kulkarni", role: "Member", rt: "slate" as const, team: "Sales", state: "Invited", st: "amber" as const },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5 rounded-[8px] border border-line bg-card px-3 py-2.5">
        <Icon name="building" className="size-4 text-brand-deep" />
        <span className="truncate text-[12.5px] font-semibold">Eigen Dynamics Pvt Ltd</span>
        <Icon name="chevronDown" className="size-3.5 text-mist" />
        <span className="ml-auto shrink-0 font-mono text-[9.5px] uppercase tracking-wider text-mist">2 organizations</span>
      </div>
      <ul className="divide-y divide-line">
        {users.map((u) => (
          <li key={u.name} className="flex items-center gap-2.5 py-2 first:pt-0 last:pb-0">
            <Avatar initials={u.init} tone={u.tone} size="sm" />
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold leading-tight">{u.name}</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-mist">{u.team}</p>
            </div>
            <span className="ml-auto"><Pill tone={u.rt}>{u.role}</Pill></span>
            <span className="hidden sm:block"><Pill tone={u.st}>{u.state}</Pill></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpsWorkspace() {
  const processes = [
    { name: "Customer Onboarding · Northgate", owner: "PK", tone: "cobalt" as const, pct: 62, tasks: "2 open", late: false },
    { name: "Renewal · Meridian Textiles", owner: "AR", tone: "brand" as const, pct: 38, tasks: "4 open", late: true },
    { name: "Vendor KYC · BlueRock", owner: "SN", tone: "amber" as const, pct: 85, tasks: "1 open", late: false },
  ];
  return (
    <ul className="space-y-2.5">
      {processes.map((p) => (
        <li key={p.name} className="rounded-[8px] border border-line bg-card px-3 py-2.5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-6 shrink-0 place-items-center rounded-[6px] bg-paper text-brand-deep">
              <Icon name="flow" className="size-3.5" />
            </span>
            <p className="min-w-0 truncate text-[12px] font-semibold">{p.name}</p>
            <span className="ml-auto shrink-0"><Avatar initials={p.owner} tone={p.tone} size="sm" /></span>
          </div>
          <div className="mt-2 flex items-center gap-2.5">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-brand transition-[width] duration-700" style={{ width: `${p.pct}%` }} />
            </div>
            <span className="shrink-0 font-mono text-[10px] tabular-nums text-mist">{p.pct}%</span>
            <Pill tone={p.late ? "rust" : "slate"}>{p.late ? "Overdue" : p.tasks}</Pill>
          </div>
        </li>
      ))}
    </ul>
  );
}

function FinOps() {
  const rows = [
    { icon: "receipt" as const, id: "INV-2044", who: "Vantage Logistics", amt: "₹86,400", status: "Pending", tone: "amber" as const },
    { icon: "card" as const, id: "PAY-1187", who: "Vantage Logistics", amt: "₹1,18,000", status: "Received", tone: "moss" as const },
    { icon: "receipt" as const, id: "INV-2042", who: "Meridian Textiles", amt: "₹1,42,000", status: "Overdue", tone: "rust" as const },
    { icon: "card" as const, id: "PAY-1182", who: "Kestrel Manufacturing", amt: "₹64,200", status: "Received", tone: "moss" as const },
  ];
  return (
    <div>
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[
          { label: "Collected · MTD", value: "₹18.6L", cls: "text-[#1f6b42]" },
          { label: "Outstanding", value: "₹4.82L", cls: "text-[#8a5c14]" },
          { label: "Overdue", value: "₹1.42L", cls: "text-[#8f3527]" },
        ].map((s) => (
          <div key={s.label} className="rounded-[8px] border border-line bg-card px-2.5 py-2">
            <p className="truncate font-mono text-[8.5px] uppercase tracking-[0.12em] text-mist">{s.label}</p>
            <p className={`mt-0.5 font-display text-[15px] font-semibold tabular-nums ${s.cls}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-line rounded-[8px] border border-line bg-card px-3">
        {rows.map((r) => (
          <li key={r.id} className="flex items-center gap-2.5 py-2">
            <span className="grid size-6 shrink-0 place-items-center rounded-[6px] bg-paper text-mist">
              <Icon name={r.icon} className="size-3.5" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10.5px] font-medium">{r.id}</p>
              <p className="hidden truncate text-[11px] text-mist sm:block">{r.who}</p>
            </div>
            <span className="ml-auto font-mono text-[11.5px] font-semibold tabular-nums">{r.amt}</span>
            <Pill tone={r.tone}>{r.status}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------- section -------------------------------- */

export function DeepDives() {
  return (
    <section id="platform" className="section-y relative border-t border-line bg-paper-deep/60">
      <div className="container-x">
        <SectionHead
          eyebrow="05 — The platform in practice"
          title={<>A command center for customer-facing operations.</>}
          lede="The same workspace your teams already use for sales carries the operational and financial picture with it — one place to run the business day."
        />

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12">
          <DivePanel
            className="lg:col-span-7"
            delay={0}
            eyebrow="Sales · Pipeline"
            title="Sales Command Center"
            copy="See the pipeline the way sales actually works — stages, values and owners at a glance, with the activity behind every number."
            checks={["Pipeline stage values update as deals move", "Top deals surfaced with owner and next step", "Activity tied to every opportunity"]}
            link="#systems"
            linkLabel="Explore the sales system"
          >
            <SalesCommand />
          </DivePanel>

          <DivePanel
            className="lg:col-span-5"
            delay={110}
            eyebrow="Organization · Access"
            title="Organization Control"
            copy="Manage who belongs to the organization, what role they hold, and which team they work in — with workspace context always visible."
            checks={["Users, roles and team membership in one place", "Organization switching for multi-org operators", "Invitations and access states tracked"]}
            link="#organizations"
            linkLabel="See organization architecture"
          >
            <OrgControl />
          </DivePanel>

          <DivePanel
            className="lg:col-span-5"
            delay={0}
            eyebrow="Processes · Tasks"
            title="Operational Workspace"
            copy="Processes show real progress — percentage complete, open tasks, owners and escalations — so operational work is never a black box."
            checks={["Progress and ownership on every process", "Overdue work escalated visibly", "Tasks due across teams in one view"]}
            link="#systems"
            linkLabel="Explore the process system"
          >
            <OpsWorkspace />
          </DivePanel>

          <DivePanel
            className="lg:col-span-7"
            delay={110}
            eyebrow="Invoices · Payments"
            title="Financial Operations"
            copy="Invoices issued and payments received sit in one operational ledger — with pending and overdue balances surfaced before they become problems."
            checks={["Invoices and payments in one continuous view", "Outstanding balances by state, always current", "Financial records linked to the customer"]}
            link="#customer-360"
            linkLabel="See it on a customer record"
          >
            <FinOps />
          </DivePanel>
        </div>
      </div>
    </section>
  );
}
