import { Check } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

// Placeholder pricing for a fictional product.
const plans = [
  { name: "Free", price: "$0", note: "For trying it out", cta: "Start free", features: ["Daily plan", "Quick capture", "Up to 3 projects"] },
  { name: "Pro", price: "$12", note: "per month", cta: "Choose Pro", featured: true, features: ["Everything in Free", "Unlimited projects", "Calendar sync", "Focus blocks", "Weekly review"] },
  { name: "Team", price: "$24", note: "per seat / month", cta: "Choose Team", features: ["Everything in Pro", "Shared projects", "Team planning view", "Priority support"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-surface/50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Pricing" title="Simple, honest plans">
          Start free and upgrade when you need more.
        </SectionHeading>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-3xl border bg-surface p-7 ${p.featured ? "border-accent shadow-float" : "border-line shadow-card"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.name}</h3>
                {p.featured && <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-deep">Most popular</span>}
              </div>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-medium tracking-tight">{p.price}</span>
                <span className="text-sm text-ink-soft">{p.note}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <Button href="#" variant={p.featured ? "primary" : "secondary"} size="lg" className="mt-8 w-full">{p.cta}</Button>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">FlowPilot is a fictional product; prices are placeholders.</p>
      </Container>
    </section>
  );
}
