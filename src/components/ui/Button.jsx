const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-ink text-white hover:bg-[#1b2750] shadow-card",
  secondary: "bg-surface text-ink border border-line hover:border-ink/30",
  ghost: "text-ink-soft hover:text-ink",
};

const sizes = { md: "h-10 px-5", lg: "h-12 px-7 text-[15px]" };

export default function Button({ as: Tag = "a", variant = "primary", size = "md", className = "", ...props }) {
  return <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
