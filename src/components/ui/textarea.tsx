import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[80px] w-full resize-y rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
