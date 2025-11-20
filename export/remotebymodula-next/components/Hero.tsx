"use client";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="pt-16">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg_white/5 px-3 py-1 text-xs text-white/70"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Remote‑first productivity stack
        </motion.div>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Hire and manage remote talent without borders.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Source, onboard, and pay international teams from a single workspace. Compliance, payroll, and collaboration — finally together.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button>Start free</Button>
          <Button variant="ghost">Book a demo</Button>
        </div>
        <div className="relative mx-auto mt-12 h-[360px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(124,58,237,.25),transparent_40%),linear-gradient(300deg,rgba(59,130,246,.25),transparent_40%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <div className="grid h-full w-full grid-cols-2 gap-px p-px sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5" />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
