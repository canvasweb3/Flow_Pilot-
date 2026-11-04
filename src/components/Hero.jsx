import { ArrowRight, Play } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      {/* soft violet glow + faint dot grid, fading out downward */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgb(107 78 255 / 0.12), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgb(14 23 56 / 0.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
        }}
      />

      <Container className="text-center">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card transition hover:border-accent/40"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Tasks and calendar, finally in one place
          <ArrowRight size={12} />
        </a>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance text-[2.6rem] font-medium leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          Your day, on a clear{" "}
          <span className="font-serif font-normal italic text-accent">flight path</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          FlowPilot turns your tasks and calendar into one calm daily plan, so you
          spend less time deciding what&rsquo;s next and more time doing the work that matters.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" href="#pricing" className="w-full sm:w-auto">
            Start free <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="secondary" href="#how-it-works" className="w-full sm:w-auto">
            <Play size={14} className="text-accent" /> See how it works
          </Button>
        </div>
        <p className="mt-4 text-xs text-ink-soft">Free plan available. No credit card required.</p>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <DashboardMockup />
      </Container>
    </section>
  );
}
