import { useState } from "react";
import { CalendarDays, Focus, Sun } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

// Sample content for illustration only.
const tabs = [
  {
    id: "today", label: "Today", icon: Sun,
    text: "One ordered list of what to do, and when. No tab-hopping between your task app and your calendar.",
    rows: [["09:00", "Deep work: product brief", true], ["11:00", "Team sync", false], ["13:30", "Draft launch notes", true], ["16:00", "Inbox review", false]],
  },
  {
    id: "plan", label: "Plan", icon: CalendarDays,
    text: "Drag tasks onto the week. FlowPilot shows how much room you actually have before you commit.",
    rows: [["Mon", "Roadmap outline · 2h", true], ["Tue", "Customer calls · 3h", false], ["Wed", "Design review · 1h", false], ["Thu", "Writing block · 3h", true]],
  },
  {
    id: "focus", label: "Focus", icon: Focus,
    text: "Start a focus block and everything except the task in front of you gets out of the way.",
    rows: [["Now", "Draft launch notes", true], ["Timer", "42:10 remaining", false], ["Next", "Review design handoff", false]],
  },
];

export default function ProductPreview() {
  const [active, setActive] = useState("today");
  const tab = tabs.find((t) => t.id === active);

  return (
    <section id="preview" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Product" title="One view for the whole day">
          Three focused views, each built around a single question.
        </SectionHeading>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div role="tablist" aria-label="Product views" className="space-y-2">
            {tabs.map(({ id, label, icon: Icon, text }) => (
              <button
                key={id} role="tab" aria-selected={active === id} onClick={() => setActive(id)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  active === id ? "border-line bg-surface shadow-card" : "border-transparent hover:bg-surface/60"
                }`}
              >
                <span className="flex items-center gap-3 font-medium">
                  <span className={`grid h-8 w-8 place-items-center rounded-lg ${active === id ? "bg-accent-soft text-accent" : "bg-ink/5 text-ink-soft"}`}>
                    <Icon size={16} />
                  </span>
                  {label}
                </span>
                {active === id && <span className="mt-3 block text-sm leading-relaxed text-ink-soft">{text}</span>}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-soft">{tab.label} · sample view</p>
            <ul className="space-y-2.5">
              {tab.rows.map(([k, v, hl]) => (
                <li key={k + v} className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 ${hl ? "border-accent/25 bg-accent-soft/60" : "border-line"}`}>
                  <span className="w-12 text-xs tabular-nums text-ink-soft">{k}</span>
                  <span className={`h-6 w-0.5 rounded-full ${hl ? "bg-accent" : "bg-ink/15"}`} />
                  <span className="text-sm font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
