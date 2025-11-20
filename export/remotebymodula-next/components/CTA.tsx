"use client";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 text-center"
        >
          <h3 className="text-2xl font-semibold">Ready to go borderless?</h3>
          <p className="mt-2 text-white/70">Start free today and upgrade when you’re ready.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button>Start free</Button>
            <Button variant="ghost">Talk to sales</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
