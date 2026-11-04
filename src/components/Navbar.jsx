import { useState } from "react";
import { Menu, Navigation, X } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const links = [
  { label: "Product", href: "#preview" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-white">
            <Navigation size={14} strokeWidth={2.5} />
          </span>
          FlowPilot
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-soft transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" href="#">Log in</Button>
          <Button href="#pricing">Start free</Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-ink-soft hover:bg-surface hover:text-ink">
                {l.label}
              </a>
            ))}
            <Button href="#pricing" className="mt-2" size="lg">Start free</Button>
          </Container>
        </div>
      )}
    </header>
  );
}
