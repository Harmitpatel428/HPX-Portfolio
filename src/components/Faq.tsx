import { useState } from "react";
import { Icon } from "./Icons";
import { ArrowLink, Eyebrow, Reveal } from "./ui";

const FAQS = [
  {
    q: "What is HPX Eigen CRM?",
    a: "HPX Eigen CRM is a connected CRM for modern business operations. It gives an organization one reliable system to manage customers, sales, processes, documentation, activities, invoices and payments — with the operational visibility that comes from keeping all of it in one place.",
  },
  {
    q: "What does HPX Eigen CRM manage?",
    a: "Six core systems share one record: sales (leads, opportunities and pipeline), documentation tied to customers and processes, structured business processes, a complete activity timeline, invoices, and payments. Because they share the same customer context, work in one system is visible from the others.",
  },
  {
    q: "Is HPX Eigen CRM designed for organizations?",
    a: "Yes — organizations are the core building block. Your business operates inside an organization workspace where users, teams, customers, workflows, documents and financial operations are managed together, rather than as scattered individual accounts.",
  },
  {
    q: "Can different teams use the same organization?",
    a: "That is the intended model. Teams such as sales, operations and finance work inside the same organization workspace, each with role-aware access, while sharing the same underlying customer and operational data.",
  },
  {
    q: "How does subscription pricing work?",
    a: "Plans are priced per organization, not per seat — Essentials, Growth and Scale. One plan covers your whole organization workspace: the included users, the modules you unlock, and unlimited customer records. Annual billing saves the equivalent of two months.",
  },
  {
    q: "Is HPX Eigen CRM suitable for growing businesses?",
    a: "The architecture is structured for growth conceptually: organizations contain teams and users, and the six core systems scale with your records — customers, deals, processes and invoices — without requiring a migration to a different way of working.",
  },
  {
    q: "Does it support payments and invoices?",
    a: "Yes. HPX Eigen CRM tracks invoices through their lifecycle — issued, sent, viewed, pending, paid — and records payment activity, outstanding balances and transaction history against the customer, keeping billing visible inside the customer lifecycle.",
  },
  {
    q: "How do I get started?",
    a: "Start by exploring the platform on this page — the product previews above show the actual modules and workflow. When you are ready, reach out via the contact below and we will help you set up your organization workspace.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-a-${index}`;
  return (
    <Reveal as="li" delay={index * 50} className="border-b border-line">
      <h3>
        <button
          type="button"
          className="flex w-full items-center gap-4 py-5 text-left"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-[10.5px] font-semibold text-mist">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 font-display text-[16px] font-semibold tracking-tight sm:text-[17px]">
            {q}
          </span>
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-ui border transition-all duration-300 sm:size-8 ${
              open ? "rotate-45 border-brand bg-brand-soft text-brand-deep" : "border-line bg-card text-mist"
            }`}
          >
            <Icon name="plus" className="size-4" />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        aria-label={q}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-6 pl-10 text-[14.5px] leading-relaxed text-mist sm:pl-[38px]">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section-y border-t border-line bg-paper-deep/50">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>08 — Questions</Eyebrow>
              <h2 className="t-h2 mt-4">Straight answers, before you commit.</h2>
              <p className="mt-5 max-w-[40ch] text-[14.5px] leading-relaxed text-mist">
                The questions business owners and operations leads ask us most — answered plainly.
              </p>
              <div className="mt-7">
                <ArrowLink href="mailto:hello@hpxeigen.com">Ask us directly — hello@hpxeigen.com</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
        <ul className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
