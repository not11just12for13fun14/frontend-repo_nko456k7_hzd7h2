"use client";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const steps = [
  { title: "Invite", desc: "Add a contractor or employee in seconds — globally.", num: "01" },
  { title: "Onboard", desc: "Collect KYC, taxes, equipment, and permissions.", num: "02" },
  { title: "Run", desc: "Automate payroll, PTO, and expenses every month.", num: "03" }
];

export function Workflow() {
  return (
    <section id="workflow">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">How it works</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From invite to pay — in three steps</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-white/10">{s.num}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
