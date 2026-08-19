--- src/components/Closing.tsx (原始)


+++ src/components/Closing.tsx (修改后)
import { useEffect, useState } from "react";
import { BrandMark, Icon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

/* ------------------------------ legal dialog ------------------------------ */

const LEGAL_COPY: Record<"privacy" | "terms", { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This page is the marketing website for HPX Eigen CRM. It does not collect account data and the product previews shown are illustrative demo data, not records of any real business.",
      "When the product is in use, business data is managed within your organization workspace. We treat customer and operational data as confidential records of your organization.",
      "For questions about how data is handled, contact us at hello@hpxeigen.com and we will respond with the details that apply to your setup.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "HPX Eigen CRM is provided as an organization-level CRM covering sales, documentation, processes, activities, invoices and payments.",
      "Plans are licensed per organization workspace. Pricing, included users and module availability are described on the Subscriptions section of this site and in your order confirmation.",
      "These summary terms are provided for orientation. The definitive agreement is the one issued with your subscription — contact hello@hpxeigen.com to request it.",
    ],
  },
};

function LegalDialog({ kind, onClose }: { kind: "privacy" | "terms"; onClose: () => void }) {
  const { title, body } = LEGAL_COPY[kind];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-ink/60 p-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-panel border border-line bg-card p-7 shadow-frame"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-deep">
              hpxeigen.com
            </p>
            <h3 id="legal-title" className="mt-1 font-display text-[22px] font-semibold tracking-tight">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid size-10 shrink-0 place-items-center rounded-ui border border-line bg-paper text-mist transition-colors hover:text-ink"
          >
            <Icon name="close" className="size-4" />
          </button>
        </div>
        <div className="mt-4 space-y-3.5">
          {body.map((p, i) => (
            <p key={i} className="text-[14px] leading-relaxed text-mist">
              {p}
            </p>
          ))}
        </div>
        <a href="mailto:hello@hpxeigen.com" className="btn-ghost mt-6 w-full">
          Contact us
          <Icon name="send" className="size-4" />
        </a>
      </div>
    </div>
  );
}

/* -------------------------------- final CTA ------------------------------- */

export function Closing() {
  const [legal, setLegal] = useState<null | "privacy" | "terms">(null);

  return (
    <>
      {/* Final CTA */}
      <section id="get-started" className="section-y noise relative overflow-hidden bg-ink text-paper">
        <div className="grid-lines-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_80%_at_30%_40%,black,transparent)]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -bottom-40 right-[5%] h-[480px] w-[620px] rounded-full opacity-[0.16] blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow onDark>09 — Next step</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="t-hero mt-4">
                Bring your customer operations into{" "}
                <span className="text-brand-bright">one system.</span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="t-lede mt-6 max-w-[54ch] text-mist-dark">
                Sales, processes, documentation, activities, invoices and payments — connected
                through one organization-focused CRM. One record your whole business can run on.
              </p>
            </Reveal>
          </div>

          <Reveal delay={220} className="lg:col-span-5">
            <div className="rounded-panel border border-ink-line bg-ink-soft p-6 sm:p-7">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dark">
                <span className="pulse-dot size-[7px] rounded-full bg-brand-bright" aria-hidden="true" />
                Ready when you are
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href="#top" className="btn-brand justify-between">
                  <span className="blink-cursor">Explore HPX Eigen CRM</span>
                  <Icon name="arrowRight" className="size-4" />
                </a>
                <a
                  href="mailto:hello@hpxeigen.com?subject=Getting%20started%20with%20HPX%20Eigen%20CRM"
                  className="btn-dark-ghost justify-between"
                >
                  Get started — request a demo
                  <Icon name="send" className="size-4" />
                </a>
              </div>
              <ul className="mt-6 space-y-2 border-t border-ink-line pt-5">
                {["Organization workspace for your whole team", "Six connected systems from day one", "Demo data on this site is illustrative"].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[13px] text-mist-dark">
                    <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-brand-bright" strokeWidth={2.2} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-line bg-[#08111b] text-paper">
        <div className="container-x grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="text-ink-mist">
                <BrandMark className="size-8" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[15px] font-semibold tracking-tight">HPX Eigen</span>
                <span className="mt-0.5 block font-mono text-[8.5px] uppercase tracking-[0.32em] text-mist-dark">CRM</span>
              </span>
            </a>
            <p className="mt-5 max-w-[34ch] text-[13.5px] leading-relaxed text-mist-dark">
              A connected CRM for modern business operations.
            </p>
            <a
              href="https://hpxeigen.com"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-bright transition-colors hover:text-paper"
            >
              <Icon name="link" className="size-3.5" />
              hpxeigen.com
            </a>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8 [&_a]:py-0.5 [&_button]:py-0.5"
            aria-label="Footer"
          >
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-dark">Product</h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                {[
                  ["Platform", "#platform"],
                  ["Sales", "#systems"],
                  ["Processes", "#systems"],
                  ["Documentation", "#systems"],
                  ["Activity tracking", "#systems"],
                  ["Invoices", "#systems"],
                  ["Payments", "#systems"],
                  ["Subscriptions", "#pricing"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-paper/75 transition-colors hover:text-brand-bright">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-dark">Company</h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                <li>
                  <a href="#trust" className="text-paper/75 transition-colors hover:text-brand-bright">About</a>
                </li>
                <li>
                  <a href="mailto:hello@hpxeigen.com" className="text-paper/75 transition-colors hover:text-brand-bright">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-dark">Resources</h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                <li>
                  <a href="#platform" className="text-paper/75 transition-colors hover:text-brand-bright">Documentation</a>
                </li>
                <li>
                  <a href="#faq" className="text-paper/75 transition-colors hover:text-brand-bright">Help</a>
                </li>
                <li>
                  <a href="#faq" className="text-paper/75 transition-colors hover:text-brand-bright">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-dark">Legal</h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                <li>
                  <button type="button" onClick={() => setLegal("privacy")} className="text-paper/75 transition-colors hover:text-brand-bright">
                    Privacy
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setLegal("terms")} className="text-paper/75 transition-colors hover:text-brand-bright">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="border-t border-ink-line/60">
          <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2 py-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist-dark">
              © 2026 HPX Eigen CRM
            </p>
            <p className="hidden font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist-dark/70 md:block">
              Product previews show illustrative demo data
            </p>
            <a
              href="#top"
              className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist-dark transition-colors hover:text-brand-bright"
            >
              Back to top
              <Icon name="arrowDown" className="size-3.5 rotate-180" />
            </a>
          </div>
        </div>
      </footer>

      {legal ? <LegalDialog kind={legal} onClose={() => setLegal(null)} /> : null}
    </>
  );
}
