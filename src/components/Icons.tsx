import type { ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  One consistent, hand-drawn stroke icon system (24px grid, 1.7px).  */
/* ------------------------------------------------------------------ */

export type IconName =
  | "grid"
  | "funnel"
  | "building"
  | "users"
  | "flow"
  | "file"
  | "pulse"
  | "receipt"
  | "card"
  | "chart"
  | "sliders"
  | "bell"
  | "search"
  | "chevronDown"
  | "chevronRight"
  | "arrowRight"
  | "arrowUpRight"
  | "arrowDown"
  | "check"
  | "plus"
  | "close"
  | "menu"
  | "phone"
  | "send"
  | "note"
  | "calendar"
  | "tag"
  | "target"
  | "lock"
  | "shield"
  | "layers"
  | "eye"
  | "link"
  | "globe"
  | "clock";

const PATHS: Record<IconName, ReactNode> = {
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </>
  ),
  funnel: <path d="M4 5h16l-6.2 7.2v4.6L10.2 19v-6.8L4 5Z" />,
  building: (
    <>
      <path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h8A1.5 1.5 0 0 1 16 4.5V21" />
      <path d="M16 8.5h3A1.5 1.5 0 0 1 20.5 10v11" />
      <path d="M3 21h18" />
      <path d="M8.5 7h1.6M8.5 10.5h1.6M8.5 14h1.6M12 7h1.6M12 10.5h1.6M12 14h1.6" />
      <path d="M10 21v-3h3v3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.5-3.4 2.7-5.3 5.5-5.3s5 1.9 5.5 5.3" />
      <path d="M15.5 5.4a3.2 3.2 0 1 1 .6 6" />
      <path d="M16.7 14.9c2.2.5 3.5 2.2 3.9 4.8" />
    </>
  ),
  flow: (
    <>
      <circle cx="5.5" cy="6" r="2.4" />
      <circle cx="18.5" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M7.9 6h8.2M6.6 8.1l4.3 7.7M17.4 8.1l-4.3 7.7" />
    </>
  ),
  file: (
    <>
      <path d="M13.5 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V8L13.5 3Z" />
      <path d="M13.5 3v5h5" />
      <path d="M9 12.5h6M9 16h4" />
    </>
  ),
  pulse: <path d="M3 12h3.5l2.2-6 4.4 12 2.2-6H21" />,
  receipt: (
    <>
      <path d="M6 3h12v18l-2.4-1.6L13.2 21l-2.4-1.6L8.4 21 6 19.4V3Z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14.5h4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v15.5A.5.5 0 0 0 4.5 20H20" />
      <path d="M8.5 15.5v-4M13 15.5V7.5M17.5 15.5v-6" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1" />
      <circle cx="15" cy="7" r="1.9" />
      <circle cx="9" cy="12" r="1.9" />
      <circle cx="17" cy="17" r="1.9" />
    </>
  ),
  bell: (
    <>
      <path d="M18 15.5H6c1-1.4 1.3-3 1.3-5.5a4.7 4.7 0 0 1 9.4 0c0 2.5.3 4.1 1.3 5.5Z" />
      <path d="M10 18.5a2.1 2.1 0 0 0 4 0" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v15" />
      <path d="m6 13.5 6 6 6-6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h16" />,
  phone: (
    <path d="M8.4 3.5 6 5.9a2 2 0 0 0-.5 2c.8 3.5 2.4 6.6 5 9.2a17 17 0 0 0 4.7 3.3c.8.4 1.7.2 2.4-.4l2.3-2.3-3.7-3.2-2 1.6a12.7 12.7 0 0 1-4.4-4.4l1.6-2-3-4.1Z" />
  ),
  send: (
    <>
      <path d="M21 3 10 14" />
      <path d="M21 3l-7 18-4-9-9-4 20-5Z" />
    </>
  ),
  note: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9.5h8M8 13h5.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  tag: (
    <>
      <path d="M12.6 3H5a2 2 0 0 0-2 2v7.6a2 2 0 0 0 .6 1.4l7.4 7.4a2 2 0 0 0 2.8 0l7.6-7.6a2 2 0 0 0 0-2.8L14 3.6A2 2 0 0 0 12.6 3Z" />
      <circle cx="8" cy="8" r="1.1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  shield: <path d="M12 3 5 5.8v5.4c0 4.4 3 7.9 7 9.8 4-1.9 7-5.4 7-9.8V5.8L12 3Z" />,
  layers: (
    <>
      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  link: (
    <>
      <path d="M10.2 13.8a4.2 4.2 0 0 0 6 0l3-3a4.24 4.24 0 0 0-6-6l-1.4 1.4" />
      <path d="M13.8 10.2a4.2 4.2 0 0 0-6 0l-3 3a4.24 4.24 0 0 0 6 6l1.4-1.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5s1.3-6.2 3.8-8.5Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.7,
  ...rest
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}

/* Brand mark — hexagon "eigen" core on an ink tile; reads on light and dark. */
export function BrandMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path
        d="M16 6.5l8.2 4.75v9.5L16 25.5l-8.2-4.75v-9.5L16 6.5z"
        fill="none"
        stroke="var(--color-brand-bright)"
        strokeWidth="1.9"
      />
      <circle cx="16" cy="16" r="2.5" fill="var(--color-brand-bright)" />
    </svg>
  );
}
