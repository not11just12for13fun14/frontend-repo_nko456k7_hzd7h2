"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";

const items = [
  { q: "Which countries do you support?", a: "150+ countries for payroll, benefits, and compliance." },
  { q: "Do you handle taxes and filings?", a: "Yes — we automate withholdings, filings, and year-end forms." },
  { q: "Can I bring my own entities?", a: "Absolutely. Mix EOR with your entities and manage in one place." },
  { q: "Is there an annual contract?", a: "Monthly plans, cancel anytime. Enterprise options available." }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">FAQ</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Answers to common questions</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-[hsl(var(--card))]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24" fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-4 text-sm text-white/70"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
