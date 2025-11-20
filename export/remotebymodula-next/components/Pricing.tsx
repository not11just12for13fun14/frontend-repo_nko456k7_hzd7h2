"use client";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const tiers = [
  {
    name: "Contractor",
    price: "$29",
    period: "/contractor/mo",
    features: ["Local contracts", "Invoices + payouts", "Expense tracking", "Tax forms"]
  },
  {
    name: "Employer of Record",
    price: "$399",
    period: "/employee/mo",
    features: ["Full-time employment", "Benefits & payroll", "Local compliance", "Device provisioning"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Custom workflows", "SAML/SSO", "Security reviews", "Dedicated support"]
  }
];

export function Pricing() {
  return (
    <section id="pricing">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Pricing</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent plans</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--card))] p-6"
            >
              <div className="mb-2 text-sm text-white/60">{t.name}</div>
              <div className="mb-4 text-3xl font-semibold">
                {t.price} <span className="text-base font-normal text-white/50">{t.period}</span>
              </div>
              <ul className="mb-6 mt-1 flex-1 space-y-2 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose {t.name}</Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
