"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, checked = false, ...props }) {
  return (
    <button
      aria-pressed={checked}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--color-outline)_15%,transparent)] bg-[var(--color-card)] text-transparent transition-colors duration-200",
        checked &&
          "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
        className,
      )}
      type="button"
      {...props}
    >
      <Check className="h-4 w-4" />
    </button>
  );
}

export { Checkbox };
