import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Button({
  children,
  variant = "primary",
  className = "",
  href
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors";
  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-200",
    ghost:
      "bg-transparent text-white/90 hover:text-white hover:bg-white/10 border border-white/10",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/10"
  } as const;

  const Comp: any = href ? "a" : motion.button;

  return (
    <Comp
      href={href}
      className={cn(base, variants[variant], className)}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
    >
      {children}
    </Comp>
  );
}
