import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const logoVariants = cva(
  [
    "group/logo relative inline-flex items-center font-medium tracking-tight whitespace-nowrap select-none",
    // Цвета вынесены в переменные, чтобы их можно было переопределить снаружи —
    // как утилитой в className, так и вариантом dark:.
    "[--logo-corner-color:var(--color-foreground)] [--logo-accent-color:var(--color-primary)]",
    "text-[color:var(--color-foreground)]",
    // Уголок сверху слева.
    "before:absolute before:top-0 before:left-0 before:content-['']",
    "before:size-[var(--logo-corner-size)] before:border-t-2 before:border-l-2",
    "before:border-[color:var(--logo-corner-color)]",
    // Уголок снизу справа.
    "after:absolute after:right-0 after:bottom-0 after:content-['']",
    "after:size-[var(--logo-corner-size)] after:border-r-2 after:border-b-2",
    "after:border-[color:var(--logo-corner-color)]",
  ],
  {
    variants: {
      size: {
        sm: "p-1.5 text-sm [--logo-corner-size:0.5rem]",
        default: "p-2 text-lg [--logo-corner-size:0.625rem]",
        lg: "p-3 text-2xl [--logo-corner-size:0.875rem]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export type LogoProps = ComponentProps<"span"> &
  VariantProps<typeof logoVariants> & {
    /** Классы для акцентной части «Lib». */
    accentClassName?: string;
  };

export function Logo({
  className,
  size,
  accentClassName,
  ...props
}: LogoProps) {
  return (
    <span
      data-slot="logo"
      className={cn(logoVariants({ size, className }))}
      {...props}
    >
      Project
      <span
        data-slot="logo-accent"
        className={cn("text-[color:var(--logo-accent-color)]", accentClassName)}
      >
        Lib
      </span>
    </span>
  );
}
