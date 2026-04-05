import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-surface-2)] text-[var(--color-ink-soft)]",
        complete:
          "bg-[color-mix(in_srgb,var(--color-primary)_14%,white)] text-[var(--color-primary-strong)]",
        progress: "bg-[var(--color-surface-2)] text-[var(--color-primary-strong)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
