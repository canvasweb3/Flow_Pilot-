import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";

export default function FinalCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div
          className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:py-24"
          style={{ backgroundImage: "radial-gradient(60% 80% at 50% 0%, rgb(107 78 255 / 0.45), transparent 70%)" }}
        >
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium tracking-[-0.025em] sm:text-5xl">
            Ready for a calmer <span className="font-serif font-normal italic text-[#c9bdff]">Monday</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/70">Plan your first day in a couple of minutes.</p>
          <a href="#pricing" className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-ink transition hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Start free <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
