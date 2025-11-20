"use client";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span>Modula</span>
          <span className="text-white/30">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
