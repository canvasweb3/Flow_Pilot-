import { Navigation } from "lucide-react";
import Container from "./ui/Container";

const cols = [
  ["Product", [["Preview", "#preview"], ["Features", "#features"], ["Pricing", "#pricing"]]],
  ["Learn", [["How it works", "#how-it-works"], ["FAQ", "#faq"]]],
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-white"><Navigation size={14} strokeWidth={2.5} /></span>
            FlowPilot
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">A calm planner for focused days.</p>
        </div>
        {cols.map(([title, links]) => (
          <nav key={title} aria-label={title}>
            <p className="text-sm font-medium">{title}</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              {links.map(([l, h]) => <li key={l}><a href={h} className="transition hover:text-ink">{l}</a></li>)}
            </ul>
          </nav>
        ))}
      </Container>
      <Container className="mt-10 border-t border-line pt-6 text-xs text-ink-soft">
        © {new Date().getFullYear()} FlowPilot. A fictional product created as a design project.
      </Container>
    </footer>
  );
}
