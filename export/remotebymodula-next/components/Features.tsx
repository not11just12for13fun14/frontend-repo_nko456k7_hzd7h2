"use client";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const features = [
  { title: "Global payroll", desc: "Run compliant payroll in 150+ countries with local taxes handled.", badge: "Finance" },
  { title: "EOR & contracts", desc: "Hire full-time without entities. Generate localized contracts.", badge: "Compliance" },
  { title: "Time & attendance", desc: "Track time, PTO, and approvals in one place.", badge: "Operations" },
  { title: "Expenses", desc: "Reimburse in local currencies with real-time control.", badge: "Finance" },
  { title: "Equipment", desc: "Provision laptops and peripherals globally.", badge: "Logistics" },
  { title: "Security", desc: "SOC2-ready workflows and least-privilege roles.", badge: "Security" }
];

export function Features() {
  return (
    <section id="features">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Why choose Modula</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to run remote teams</h2>
          <p className="mt-2 text-white/70">Beautifully simple tools for hiring, paying, and scaling — all in one place.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--card))] p-5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-white/5 to-white/0" />
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="rounded-full bg-white/10 px-2 py-0.5">{f.badge}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
