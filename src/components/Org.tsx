import { Icon, type IconName } from "./Icons";
import { AvatarStack, type AvatarTone } from "./chrome";
import { CheckItem, Eyebrow, Reveal } from "./ui";

const TEAMS: { name: string; users: number; people: { initials: string; tone: AvatarTone }[] }[] = [
  { name: "Sales", users: 6, people: [{ initials: "AR", tone: "brand" }, { initials: "SN", tone: "amber" }, { initials: "PK", tone: "cobalt" }] },
  { name: "Operations", users: 4, people: [{ initials: "RM", tone: "moss" }, { initials: "VK", tone: "ink" }, { initials: "AD", tone: "brand" }] },
  { name: "Finance", users: 3, people: [{ initials: "NI", tone: "cobalt" }, { initials: "GS", tone: "amber" }, { initials: "TP", tone: "moss" }] },
];

const MODULES: { icon: IconName; label: string }[] = [
  { icon: "users", label: "Customers" },
  { icon: "funnel", label: "Sales" },
  { icon: "flow", label: "Processes" },
  { icon: "file", label: "Documents" },
  { icon: "pulse", label: "Activities" },
  { icon: "receipt", label: "Billing" },
];

const PATH = ["Platform", "Organization", "Teams", "Operational data"];

export function Org() {
  return (
    <section id="organizations" className="section-y noise relative overflow-hidden bg-ink text-paper">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(75%_80%_at_60%_30%,black,transparent)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-[10%] h-[420px] w-[560px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Copy */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow onDark>04 — Organization architecture</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="t-h2 mt-4">Built around organizations, not scattered accounts.</h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="t-lede mt-6 max-w-[54ch] text-mist-dark">
              HPX Eigen CRM provides a structured environment where business data, users,
              workflows, documents, sales activity and financial operations are managed within the
              context of an organization — not as isolated personal accounts that have to be
              stitched together.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <CheckItem onDark>Organization-level separation</CheckItem>
              <CheckItem onDark>Structured team workspaces</CheckItem>
              <CheckItem onDark>Role-aware access to records</CheckItem>
              <CheckItem onDark>Centralized operational data</CheckItem>
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist-dark">
              {PATH.map((p, i) => (
                <span key={p} className="flex items-center gap-2">
                  <span className={`rounded-[5px] border px-2 py-1 ${i === 1 ? "border-brand-bright/50 bg-brand/15 text-brand-bright" : "border-ink-line bg-ink-soft"}`}>
                    {p}
                  </span>
                  {i < PATH.length - 1 ? <Icon name="chevronRight" className="size-3 text-mist-dark/60" /> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Architecture visual */}
        <Reveal delay={160} className="lg:col-span-7">
          <div className="rounded-panel border border-ink-line bg-ink-soft p-4 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.8)] sm:p-5">
            {/* platform layer */}
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-mist-dark">
                HPX Eigen Platform
              </p>
              <Icon name="layers" className="size-4 text-brand-bright" />
            </div>

            {/* organization layer */}
            <div className="rounded-[10px] border border-brand/35 bg-ink p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-9 place-items-center rounded-ui bg-brand/20 text-brand-bright">
                  <Icon name="building" className="size-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold">Eigen Dynamics Pvt Ltd</p>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mist-dark">
                    Organization workspace
                  </p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-[5px] border border-brand-bright/40 bg-brand/15 px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand-bright">
                  <span className="pulse-dot size-[6px] rounded-full bg-brand-bright" aria-hidden="true" />
                  Active
                </span>
              </div>

              {/* teams */}
              <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-mist-dark">
                Teams &amp; users
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {TEAMS.map((t) => (
                  <div
                    key={t.name}
                    className="group rounded-[8px] border border-ink-line bg-ink-soft px-3 py-2.5 transition-colors hover:border-brand/40"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[12.5px] font-semibold">{t.name}</p>
                      <span className="font-mono text-[9.5px] text-mist-dark">{t.users} users</span>
                    </div>
                    <div className="mt-2">
                      <AvatarStack people={t.people} />
                    </div>
                  </div>
                ))}
              </div>

              {/* operational data */}
              <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-mist-dark">
                Operational data
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {MODULES.map((m) => (
                  <span
                    key={m.label}
                    className="inline-flex items-center gap-1.5 rounded-[6px] border border-ink-line bg-ink px-2.5 py-1.5 text-[11px] font-medium text-paper/80 transition-colors hover:border-brand/40 hover:text-brand-bright"
                  >
                    <Icon name={m.icon} className="size-3.5" />
                    {m.label}
                  </span>
                ))}
              </div>
            </div>

            {/* isolated second organization */}
            <div className="mt-3 flex flex-wrap items-center gap-3 rounded-[10px] border border-dashed border-ink-line bg-ink/60 px-4 py-3">
              <Icon name="lock" className="size-4 shrink-0 text-mist-dark" />
              <p className="min-w-0 truncate text-[12px] font-medium text-mist-dark">
                Northgate Retail Group — separate organization
              </p>
              <span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-mist-dark/70">
                Fully isolated workspace
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
