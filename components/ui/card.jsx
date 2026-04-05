import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] bg-[var(--color-card)] text-[var(--color-card-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-3", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "text-[1.125rem] font-semibold tracking-[-0.03em] text-[var(--color-ink)]",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm leading-6 text-[var(--color-ink-muted)]", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
