import { Icon } from "./Icons";
import { AppFrame, Avatar, FeedItem, Pill } from "./chrome";
import { Chip, Reveal, SectionHead } from "./ui";

const CONTACTS = [
  { initials: "PN", tone: "brand" as const, name: "Priya Nair", role: "Head of Procurement", meta: "+91 98···4421" },
  { initials: "RM", tone: "cobalt" as const, name: "Rohan Mehta", role: "Finance Lead", meta: "rohan@meridian··" },
  { initials: "SK", tone: "amber" as const, name: "Sara Khan", role: "Operations Manager", meta: "+91 99···7802" },
];

const ACTIVITY = [
  { icon: "phone" as const, tone: "cobalt" as const, text: "Call — renewal terms discussed · 14 min", time: "Today · 11:20" },
  { icon: "send" as const, tone: "amber" as const, text: "Proposal sent — ₹6.2L annual expansion", time: "Yesterday · 16:44" },
  { icon: "flow" as const, tone: "brand" as const, text: "Process — onboarding review completed", time: "Mon · 10:05" },
  { icon: "receipt" as const, tone: "moss" as const, text: "INV-2038 paid — ₹2.36L received", time: "02 Feb · 09:31" },
];

const DOCS = [
  { name: "MSA — Meridian Textiles.pdf", meta: "v4 · Approved" },
  { name: "Rate Card FY26.xlsx", meta: "v2 · Shared" },
  { name: "Onboarding Checklist.docx", meta: "v1 · Done" },
];

const INVOICES = [
  { id: "INV-2042", amt: "₹1.42L", status: "Overdue", tone: "rust" as const },
  { id: "INV-2038", amt: "₹2.36L", status: "Paid", tone: "moss" as const },
  { id: "INV-2031", amt: "₹1.18L", status: "Paid", tone: "moss" as const },
];

export function Customer360() {
  return (
    <section id="customer-360" className="section-y relative overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="03 — Customer 360"
          title={<>Every customer interaction, in&nbsp;context.</>}
          lede="Open one customer and see the whole relationship — contacts, opportunities, activity, documents, processes, invoices and payments — instead of six tabs across six tools."
        />

        <Reveal delay={140} className="relative mt-12">
          <AppFrame active="Contacts">
            {/* customer header */}
            <div className="rounded-[10px] border border-line bg-card p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-[10px] bg-ink font-display text-[16px] font-bold text-brand-bright">
                  MT
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-[19px] font-semibold tracking-tight">
                      Meridian Textiles Pvt Ltd
                    </h3>
                    <Pill tone="brand">Customer</Pill>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <Chip tone="slate">Since 2022</Chip>
                    <Chip tone="slate">Manufacturing</Chip>
                    <Chip tone="slate">Mumbai</Chip>
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-4 sm:ml-auto sm:w-auto sm:border-0 sm:pt-0 lg:gap-10">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist">Lifetime value</p>
                    <p className="font-display text-[18px] font-semibold tabular-nums">₹18.4L</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist">Open opportunity</p>
                    <p className="font-display text-[18px] font-semibold tabular-nums text-brand-deep">₹6.2L</p>
                  </div>
                  <div className="flex items-center gap-2 border-l border-line pl-5 sm:pl-6 lg:pl-8">
                    <Avatar initials="AR" tone="brand" />
                    <div className="leading-tight">
                      <p className="text-[11.5px] font-semibold">Aarav Rathi</p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-mist">Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* three columns */}
            <div className="mt-2.5 grid gap-2.5 lg:grid-cols-3">
              <section className="rounded-[10px] border border-line bg-card p-3.5" aria-label="Contacts and financial summary">
                <h4 className="mb-2.5 font-display text-[13px] font-semibold">Contacts</h4>
                <ul className="space-y-2.5">
                  {CONTACTS.map((c) => (
                    <li key={c.name} className="flex items-center gap-2.5">
                      <Avatar initials={c.initials} tone={c.tone} />
                      <div className="min-w-0">
                        <p className="truncate text-[12.5px] font-semibold leading-tight">{c.name}</p>
                        <p className="font-mono text-[9.5px] uppercase tracking-wider text-mist">{c.role}</p>
                      </div>
                      <span className="ml-auto font-mono text-[10px] text-mist">{c.meta}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mb-2 mt-4 border-t border-line pt-3.5 font-display text-[13px] font-semibold">
                  Financial summary
                </h4>
                <ul className="space-y-1.5 text-[12px]">
                  <li className="flex justify-between">
                    <span className="text-mist">Paid to date</span>
                    <span className="font-mono font-semibold text-[#1f6b42]">₹16.9L</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-mist">Outstanding</span>
                    <span className="font-mono font-semibold text-[#8a5c14]">₹1.42L</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-mist">Next invoice</span>
                    <span className="font-mono font-semibold">01 Mar 2026</span>
                  </li>
                </ul>
              </section>

              <section className="rounded-[10px] border border-line bg-card p-3.5" aria-label="Recent activity">
                <h4 className="mb-3 font-display text-[13px] font-semibold">Recent activity</h4>
                <ul className="space-y-3">
                  {ACTIVITY.map((a) => (
                    <FeedItem key={a.text} icon={a.icon} tone={a.tone} time={a.time}>
                      {a.text}
                    </FeedItem>
                  ))}
                </ul>
                <p className="mt-3 flex items-center gap-1.5 border-t border-line pt-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-mist">
                  <Icon name="pulse" className="size-3.5 text-brand-deep" />
                  46 events · full timeline in Activities
                </p>
              </section>

              <section className="rounded-[10px] border border-line bg-card p-3.5" aria-label="Documents and invoices">
                <h4 className="mb-2.5 font-display text-[13px] font-semibold">Documents</h4>
                <ul className="space-y-2">
                  {DOCS.map((d) => (
                    <li key={d.name} className="flex items-center gap-2.5 rounded-[7px] border border-line bg-paper px-2.5 py-2">
                      <Icon name="file" className="size-4 shrink-0 text-mist" />
                      <p className="min-w-0 truncate text-[11.5px] font-medium">{d.name}</p>
                      <span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-wider text-mist">{d.meta}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mb-2 mt-4 border-t border-line pt-3.5 font-display text-[13px] font-semibold">Invoices</h4>
                <ul className="space-y-1.5">
                  {INVOICES.map((i) => (
                    <li key={i.id} className="flex items-center gap-2.5">
                      <span className="font-mono text-[10.5px] text-mist">{i.id}</span>
                      <span className="ml-auto font-mono text-[11.5px] font-semibold tabular-nums">{i.amt}</span>
                      <Pill tone={i.tone}>{i.status}</Pill>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </AppFrame>

          {/* annotation */}
          <div className="pointer-events-none absolute -bottom-6 -right-4 hidden xl:block" aria-hidden="true">
            <div className="flex items-center gap-3 rounded-panel bg-ink px-5 py-3.5 text-paper shadow-frame">
              <Icon name="arrowUpRight" className="size-4 text-brand-bright" />
              <p className="text-[13px] font-medium">
                No more fragmented customer information.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
