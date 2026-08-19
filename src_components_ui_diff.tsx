--- src/components/ui.tsx (原始)


+++ src/components/ui.tsx (修改后)
import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";
import { Icon, type IconName } from "./Icons";

/* ------------------------------- Reveal ------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "article" | "header";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------- Eyebrow ------------------------------ */

export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${onDark ? "eyebrow-on-dark" : "eyebrow-on-light"} ${className}`}>
      <span className="sq" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ----------------------------- Section head ---------------------------- */

export function SectionHead({
  eyebrow,
  title,
  lede,
  onDark = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-7">
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <h2 className={`t-h2 mt-4 ${onDark ? "text-paper" : "text-ink"}`}>{title}</h2>
      </div>
      {lede ? (
        <p
          className={`t-lede lg:col-span-5 max-w-xl lg:justify-self-end lg:pb-2 ${
            onDark ? "text-mist-dark" : "text-mist"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ------------------------------- Buttons ------------------------------- */

export function ArrowLink({
  href,
  children,
  onDark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
        onDark ? "text-brand-bright hover:text-paper" : "text-brand-deep hover:text-ink"
      } ${className}`}
    >
      {children}
      <Icon
        name="arrowRight"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}

/* -------------------------------- Checks ------------------------------- */

export function CheckItem({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`mt-[3px] grid size-[18px] shrink-0 place-items-center rounded-[5px] ${
          onDark ? "bg-brand/25 text-brand-bright" : "bg-brand-soft text-brand-deep"
        }`}
      >
        <Icon name="check" className="size-3" strokeWidth={2.2} />
      </span>
      <span className={`text-[14.5px] leading-snug ${onDark ? "text-paper/85" : "text-ink/85"}`}>
        {children}
      </span>
    </li>
  );
}

/* --------------------------------- Chip -------------------------------- */

export function Chip({
  children,
  tone = "slate",
}: {
  children: ReactNode;
  tone?: "slate" | "brand" | "amber" | "moss" | "rust" | "cobalt";
}) {
  const tones: Record<string, string> = {
    slate: "border-line bg-paper text-mist",
    brand: "border-brand/25 bg-brand-soft text-brand-deep",
    amber: "border-amber/30 bg-amber-soft text-[#8a5c14]",
    moss: "border-moss/25 bg-moss-soft text-[#1f6b42]",
    rust: "border-rust/25 bg-rust-soft text-[#8f3527]",
    cobalt: "border-cobalt/25 bg-cobalt-soft text-[#2b528a]",
  };
  return <span className={`chip ${tones[tone]}`}>{children}</span>;
}

/* ----------------------------- Square icon ----------------------------- */

export function IconSquare({
  name,
  tone = "brand",
  className = "",
}: {
  name: IconName;
  tone?: "brand" | "amber" | "moss" | "rust" | "cobalt" | "ink";
  className?: string;
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-soft text-brand-deep",
    amber: "bg-amber-soft text-[#8a5c14]",
    moss: "bg-moss-soft text-[#1f6b42]",
    rust: "bg-rust-soft text-[#8f3527]",
    cobalt: "bg-cobalt-soft text-[#2b528a]",
    ink: "bg-ink text-brand-bright",
  };
  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-ui border border-black/5 ${tones[tone]} ${className}`}
    >
      <Icon name={name} className="size-[18px]" />
    </span>
  );
}
