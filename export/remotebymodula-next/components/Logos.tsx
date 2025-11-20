"use client";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const brands = ["Acme", "Base", "Zenith", "Sol", "Omega", "Hubble", "Prism"];

export function Logos() {
  return (
    <section className="opacity-90">
      <Container className="py-2">
        <div className="text-center text-xs uppercase tracking-wider text-white/50">Trusted by remote teams</div>
        <div className="mt-4 grid grid-cols-3 gap-6 text-white/60 sm:grid-cols-7">
          {brands.map((b) => (
            <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center">
              <span className="text-sm sm:text-base">{b}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
