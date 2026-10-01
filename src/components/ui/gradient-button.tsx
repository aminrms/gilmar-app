import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type GradientButtonProps = Omit<
  React.ComponentProps<"button">,
  "color" | "value"
> &
  Omit<VariantProps<typeof buttonVariants>, "variant"> & {
    asChild?: boolean;
  };

/**
 * Brand gradient button — extends the shadcn `Button` with the locked
 * `gradient` variant (linear #02ADF7 → #26E05A + white top-gloss, sourced
 * from the `--color-brand-*` palette tokens via `.btn-brand-gradient`).
 *
 * Accepts the same `size` / `asChild` API as the shadcn button, so it can
 * wrap a locale-aware `Link`:
 *
 *   <GradientButton asChild className="h-[52px] w-[min(191px,100%)]">
 *     <Link href="/booking">…</Link>
 *   </GradientButton>
 */
function GradientButton({
  className,
  size,
  asChild = false,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="gradient-button"
      className={cn(buttonVariants({ variant: "gradient", size, className }))}
      {...props}
    />
  );
}

export { GradientButton, type GradientButtonProps };
