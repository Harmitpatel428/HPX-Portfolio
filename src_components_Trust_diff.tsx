--- src/components/Trust.tsx (原始)


+++ src/components/Trust.tsx (修改后)
import { Icon, type IconName } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

const PRINCIPLES: { icon: IconName; title: string; copy: string }[] = [
  { icon: "building", title: "Structured organization architecture", copy: "Business data lives inside an organization context — not in disconnected personal accounts." },
  { icon: "layers", title: "Centralized business data", copy: "Customers, deals, documents and financials share one operational record." },
  { icon: "flow", title: "Consistent workflows", copy: "Processes run the same way every time, with visible stages and ownership." },
  { icon: "eye", title: "Clear operational visibility", copy: "Managers see progress, bottlenecks and outstanding work without chasing updates." },
  { icon: "lock", title: "Role-aware access", copy: "Users see the workspace through the role and team they operate in." },
  { icon: "file", title: "Reliable record keeping", copy: "History, versions and status changes stay attached to the record they belong to." },
  { icon: "chart", title: "Scalable structure", copy: "Teams, processes and modules are organized to grow with the business." },
  { icon: "shield", title: "Designed for long-term use", copy: "A system built to be depended on daily, not replaced next quarter." },
];

export function Trust() {
  return (
    <section id="trust" className="section-y relative">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>07 — Reliability</Eyebrow>
            <h2 className="t-h2 mt-4">Built for businesses that depend on their operational data.</h2>
            <p className="t-lede mt-6 max-w-[48ch] text-mist">
              A CRM is only useful if it can be trusted as the record of the business. Every HPX
              Eigen CRM design decision starts from the same question: does this make the
              organization&rsquo;s operational picture more reliable?
            </p>
            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">
              Design principles — not marketing claims
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={(i % 2) * 90 + Math.floor(i / 2) * 60}>
                  <div className="group flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-ui border border-line bg-card text-brand-deep transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand-soft">
                      <Icon name={p.icon} className="size-[18px]" />
                    </span>
                    <div>
                      <h3 className="font-display text-[15.5px] font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist">{p.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
