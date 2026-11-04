export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.025em] sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-pretty leading-relaxed text-ink-soft sm:text-lg">{children}</p>}
    </div>
  );
}
