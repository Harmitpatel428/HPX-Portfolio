import { useEffect, useState } from "react";
import { useScrolled } from "../lib/hooks";
import { BrandMark, Icon } from "./Icons";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#systems" },
  { label: "Organizations", href: "#organizations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export function Nav() {
  const scrolled = useScrolled(14);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/92 shadow-[0_8px_30px_-18px_rgb(12_24_38/0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[68px] items-center gap-6">
        <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="HPX Eigen CRM — home">
          <BrandMark className="size-8" />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-tight">
              HPX Eigen
            </span>
            <span className="mt-0.5 block font-mono text-[8.5px] uppercase tracking-[0.32em] text-mist">
              CRM
            </span>
          </span>
        </a>

        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-ui px-3 py-2 text-[13.5px] font-medium text-mist transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <a href="#get-started" className="btn h-9 px-4 text-[13px] text-ink hover:bg-ink/5">
            Sign in
          </a>
          <a href="#get-started" className="btn-primary h-9 px-4 text-[13px]">
            Get started
            <Icon name="arrowRight" className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="ml-auto grid size-11 place-items-center rounded-ui border border-line bg-card text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-line bg-paper`}
      >
        <nav
          className="container-x flex max-h-[calc(100dvh-68px)] flex-col overflow-y-auto py-3"
          aria-label="Mobile"
        >
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/70 py-4 font-display text-[17px] font-semibold tracking-tight transition-colors active:bg-paper-deep last:border-0"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
              <Icon name="arrowUpRight" className="size-4 text-mist" />
            </a>
          ))}
          <div className="mt-4 flex gap-2.5">
            <a href="#get-started" onClick={() => setOpen(false)} className="btn-ghost flex-1">
              Sign in
            </a>
            <a href="#get-started" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Get started
            </a>
          </div>
          <p className="mt-4 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
            hpxeigen.com · connected CRM
          </p>
        </nav>
      </div>
    </header>
  );
}
