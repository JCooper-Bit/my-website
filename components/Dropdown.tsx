"use client";

import { useId, useMemo, useState } from "react";

type DropdownProps = {
  title?: string; // e.g. "Solution"
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function Dropdown({
  title = "Solution",
  defaultOpen = false,
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  const label = useMemo(() => (open ? "Hide" : "Show"), [open]);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transitio"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight ">
            {title}
          </span>
          <span className="text-xs text-white/50">(click to {label.toLowerCase()})</span>
        </div>

        <span
          className={[
            "text-white/60 transition-transform duration-200",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          ▾
        </span>
      </button>

      {/* Animated container */}
      <div
        id={id}
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="border-t px-4 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
