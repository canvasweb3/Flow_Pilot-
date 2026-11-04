import { BarChart3, CalendarDays, Command, Inbox, Sparkles, Timer } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const features = [
  { icon: Sparkles, title: "A daily plan, drafted for you", text: "FlowPilot lines up your tasks around your meetings and suggests an order. You stay in control and can change any of it.", wide: true },
  { icon: CalendarDays, title: "Calendar-aware", text: "See real free time before you say yes to more." },
  { icon: Timer, title: "Protected focus blocks", text: "Reserve time for deep work and keep it intact." },
  { icon: Inbox, title: "Quick capture", text: "Drop a thought into your inbox now, sort it later." },
  { icon: BarChart3, title: "Weekly review", text: "A short look back at what got done and what slipped.", },
  { icon: Command, title: "Keyboard first", text: "Move through your day without reaching for the mouse.", wide: true },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-y border-line bg-surface/50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Features" title="Everything you need to stay on course">
          Fewer features, done well. Each one exists to make the next hour clearer.
        </SectionHeading>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text, wide }) => (
            <article
              key={title}
              className={`group rounded-3xl border border-line bg-surface p-7 shadow-card transition hover:-translate-y-0.5 hover:border-accent/30 ${wide ? "md:col-span-2" : ""}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon size={19} />
              </span>
              <h3 className="mt-8 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
