import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  { title: "Collect", text: "Add tasks and connect your calendar. Everything lands in one place." },
  { title: "Plan", text: "Review the suggested plan for today, adjust it, and commit." },
  { title: "Fly", text: "Work through your day one block at a time, then review the week." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How it works" title="Three steps, then you're moving" />

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* dotted route between steps */}
          <div aria-hidden className="absolute left-[16.6%] right-[16.6%] top-6 hidden border-t-2 border-dashed border-accent/30 md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-paper font-serif text-xl italic text-accent">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
