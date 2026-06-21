import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-300 select-none cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-foreground text-background shadow-lg",
          "hover:shadow-xl hover:shadow-electric/20 hover:-translate-y-0.5",
        ].join(" "),
        gradient: [
          "text-white shadow-lg shadow-electric/25",
          "bg-gradient-to-r from-emeraldine via-electric to-amberglow",
          "bg-[length:150%_auto] hover:bg-right hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-0.5",
        ].join(" "),
        outline: [
          "glass text-foreground",
          "hover:border-electric/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-electric/10",
        ].join(" "),
        ghost: "text-muted hover:text-foreground hover:bg-subtle",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: ReactNode;
};

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
