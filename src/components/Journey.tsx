import { Icon, type IconName } from "./Icons";
import { ArrowLink, Reveal, SectionHead } from "./ui";

type Stage = {
  step: string;
  icon: IconName;
  title: string;
  module: string;
  copy: string;
};

const STAGES: Stage[] = [
  { step: "01", icon: "funnel", title: "Lead", module: "Sales", copy: "Enquiries captured with source and owner." },
  { step: "02", icon: "building", title: "Customer", module: "Contacts", copy: "A structured record with people and context." },
  { step: "03", icon: "target", title: "Opportunity", module: "Sales", copy: "Value, stage and next action on every deal." },
  { step: "04", icon: "flow", title: "Process", module: "Processes", copy: "Operational work moves through defined steps." },
  { step: "05", icon: "file", title: "Documentation", module: "Documents", copy: "Agreements stay attached to the work." },
  { step: "06", icon: "receipt", title: "Invoice", module: "Invoices", copy: "Billing issued against delivered work." },
  { step: "07", icon: "card", title: "Payment", module: "Payments", copy: "Financial activity recorded per customer." },
  { step: "08", icon: "pulse", title: "Relationship", module: "Activities", copy: "Follow-ups keep the account moving." },
];

function StageNode({ stage, delay }: { stage: Stage; delay: number }) {
  return (
    <Reveal delay={delay} className="relative">
      <div className="group rounded-panel border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-ui border border-line bg-paper text-brand-deep transition-colors group-hover:border-brand/40 group-hover:bg-brand-soft">
            <Icon name={stage.icon} className="size-[19px]" />
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-mist">
            {stage.step}
          </span>
        </div>
        <h3 className="mt-4 font-display text-[17px] font-semibold tracking-tight">{stage.title}</h3>
        <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-brand-deep">
          {stage.module}
        </p>
        <p className="mt-2.5 text-[13px] leading-relaxed text-mist">{stage.copy}</p>
      </div>
    </Reveal>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section-y relative overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="02 — The customer lifecycle"
          title={<>From lead to payment — connected.</>}
          lede="HPX Eigen CRM keeps the customer lifecycle connected from first interaction through operational execution and payment. Each stage hands context to the next."
        />

        {/* desktop: serpentine two-row track */}
        <Reveal className="relative mt-14 hidden lg:block">
          <div className="relative">
            <div className="track-line absolute left-0 right-0 top-[21px] h-px bg-line" aria-hidden="true" />
            <span className="travel-dot absolute top-[17.5px] hidden size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgb(14_130_113/0.15)] lg:block" aria-hidden="true" />
            <div className="relative grid grid-cols-4 gap-5">
              {STAGES.slice(0, 4).map((s, i) => (
                <div key={s.step}>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="relative z-10 grid size-[42px] place-items-center rounded-full border border-line bg-card text-brand-deep shadow-[0_1px_0_rgb(12_24_38/0.05)]">
                      <Icon name={s.icon} className="size-[18px]" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-mist">{s.step}</span>
                    {i < 3 ? <Icon name="arrowRight" className="ml-auto size-4 text-line" /> : null}
                  </div>
                  <StageNode stage={s} delay={i * 90} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pr-[12.5%]">
            <div className="flex flex-col items-center py-2 text-mist">
              <span className="v-line h-7 w-px bg-line" aria-hidden="true" />
              <Icon name="arrowDown" className="-mt-1 size-4" />
            </div>
          </div>

          <div className="relative">
            <div className="track-line from-right absolute left-0 right-0 top-[21px] h-px bg-line" aria-hidden="true" />
            <div className="relative grid grid-cols-4 gap-5">
              {STAGES.slice(4).map((s, i) => (
                <div key={s.step}>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="relative z-10 grid size-[42px] place-items-center rounded-full border border-line bg-card text-brand-deep shadow-[0_1px_0_rgb(12_24_38/0.05)]">
                      <Icon name={s.icon} className="size-[18px]" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-mist">{s.step}</span>
                    {i < 3 ? <Icon name="arrowRight" className="ml-auto size-4 text-line" /> : null}
                  </div>
                  <StageNode stage={s} delay={i * 90} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* mobile / tablet: vertical timeline */}
        <div className="mt-10 lg:hidden">
          <ol className="relative ml-4 space-y-5 border-l border-line pl-6">
            {STAGES.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 60} className="relative">
                <span className="absolute -left-[37px] grid size-8 place-items-center rounded-full border border-line bg-card text-brand-deep">
                  <Icon name={s.icon} className="size-4" />
                </span>
                <div className="rounded-panel border border-line bg-card p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-[16px] font-semibold tracking-tight">{s.title}</h3>
                    <span className="font-mono text-[9.5px] tracking-[0.16em] text-mist">{s.step}</span>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-deep">{s.module}</p>
                  <p className="mt-1.5 text-[12.5px] text-mist">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="max-w-[58ch] text-[14.5px] leading-relaxed text-mist">
            <strong className="font-semibold text-ink">One continuous record.</strong> The deal that
            closes becomes the customer that gets onboarded, documented, invoiced and paid —
            without re-keying data between tools.
          </p>
          <ArrowLink href="#platform">See the platform in practice</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
