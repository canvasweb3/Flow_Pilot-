import { ChevronDown } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const faqs = [
  ["Do I need to connect my calendar?", "No. FlowPilot works with tasks alone, but connecting a calendar lets it plan around your meetings."],
  ["Can I change the suggested plan?", "Yes. The plan is a starting point. Reorder, resize or remove anything."],
  ["Is there a free plan?", "Yes. The Free plan covers daily planning and quick capture with no time limit."],
  ["Can I cancel anytime?", "Yes. Paid plans are monthly and you can cancel whenever you like."],
  ["Does it work on my phone?", "The interface is responsive, so it works in any modern mobile browser."],
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 divide-y divide-line rounded-3xl border border-line bg-surface shadow-card">
          {faqs.map(([q, a]) => (
            <details key={q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown size={18} className="shrink-0 text-ink-soft transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
