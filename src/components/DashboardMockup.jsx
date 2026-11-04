import { Calendar, CheckCircle2, Circle, Home, Inbox, Layers, Search, Target } from "lucide-react";

// Sample UI content for illustration only.
const nav = [
  { icon: Home, label: "Today", active: true },
  { icon: Calendar, label: "Plan" },
  { icon: Inbox, label: "Inbox" },
  { icon: Layers, label: "Projects" },
  { icon: Target, label: "Goals" },
];

const blocks = [
  { time: "09:00", title: "Deep work: product brief", length: "90 min", focus: true },
  { time: "11:00", title: "Team sync", length: "30 min" },
  { time: "13:30", title: "Draft launch notes", length: "60 min", focus: true },
  { time: "15:30", title: "Review design handoff", length: "45 min" },
];

const tasks = [
  { title: "Outline Q4 roadmap", done: true },
  { title: "Review design handoff", done: true },
  { title: "Reply to partner thread", done: false },
  { title: "Prep Friday demo", done: false },
];

const week = [
  { d: "M", h: 45 }, { d: "T", h: 70 }, { d: "W", h: 55 }, { d: "T", h: 85 },
  { d: "F", h: 60 }, { d: "S", h: 25 }, { d: "S", h: 15 },
];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl" aria-hidden>
      {/* floating "next up" card */}
      <div className="absolute -right-3 -top-6 z-10 hidden rounded-2xl border border-line bg-surface p-3.5 shadow-card lg:block">
        <p className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">Next up</p>
        <p className="mt-1 text-sm font-medium">Deep work: product brief</p>
        <p className="mt-0.5 text-xs text-accent">Starts in 12 min</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-paper/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <div className="mx-auto hidden h-6 w-56 items-center justify-center rounded-md bg-surface text-[11px] text-ink-soft ring-1 ring-line sm:flex">
            app.flowpilot.example
          </div>
        </div>

        <div className="grid md:grid-cols-[190px_1fr]">
          {/* sidebar */}
          <aside className="hidden border-r border-line bg-paper/50 p-4 md:block">
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-xs text-ink-soft ring-1 ring-line">
              <Search size={13} /> Search
            </div>
            <ul className="space-y-1">
              {nav.map(({ icon: Icon, label, active }) => (
                <li
                  key={label}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] ${
                    active ? "bg-accent-soft font-medium text-accent-deep" : "text-ink-soft"
                  }`}
                >
                  <Icon size={15} /> {label}
                </li>
              ))}
            </ul>
          </aside>

          {/* main */}
          <div className="p-5 text-left sm:p-7">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-ink-soft">Sample day</p>
                <h3 className="text-xl font-medium tracking-tight">Good morning</h3>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
                4 focus hours planned
              </span>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-5">
              {/* timeline */}
              <div className="space-y-2.5 lg:col-span-3">
                {blocks.map((b) => (
                  <div
                    key={b.time}
                    className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                      b.focus ? "border-accent/25 bg-accent-soft/60" : "border-line bg-surface"
                    }`}
                  >
                    <span className="w-11 text-xs tabular-nums text-ink-soft">{b.time}</span>
                    <span className={`h-8 w-0.5 rounded-full ${b.focus ? "bg-accent" : "bg-ink/15"}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium">{b.title}</p>
                      <p className="text-xs text-ink-soft">{b.length}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* side panels */}
              <div className="space-y-4 lg:col-span-2">
                <div className="rounded-xl border border-line p-4">
                  <p className="mb-3 text-xs font-medium text-ink-soft">Tasks</p>
                  <ul className="space-y-2.5">
                    {tasks.map((t) => (
                      <li key={t.title} className="flex items-center gap-2.5 text-[13px]">
                        {t.done ? (
                          <CheckCircle2 size={16} className="shrink-0 text-accent" />
                        ) : (
                          <Circle size={16} className="shrink-0 text-ink/25" />
                        )}
                        <span className={t.done ? "text-ink-soft line-through" : ""}>{t.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-line p-4">
                  <p className="mb-3 text-xs font-medium text-ink-soft">Focus this week</p>
                  <div className="flex h-20 items-end justify-between gap-1.5">
                    {week.map((w, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                        <div
                          className={`w-full rounded-md ${i === 3 ? "bg-accent" : "bg-accent/20"}`}
                          style={{ height: `${w.h}%` }}
                        />
                        <span className="text-[10px] text-ink-soft">{w.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
