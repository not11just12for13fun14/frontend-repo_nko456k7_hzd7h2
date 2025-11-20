"use client";
import { useState } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="font-semibold tracking-tight">Modula</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#workflow" className="hover:text-white">Workflow</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Log in</Button>
          <Button>Get started</Button>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg_WHITE/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-white"><path fill="currentColor" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <Container className="flex flex-col py-4 gap-2 text-sm">
              <a href="#features" className="py-2">Features</a>
              <a href="#workflow" className="py-2">Workflow</a>
              <a href="#pricing" className="py-2">Pricing</a>
              <a href="#faq" className="py-2">FAQ</a>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="flex-1">Log in</Button>
                <Button className="flex-1">Get started</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
