export default function SectionHeading({ index, label, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
          {index}
        </span>
        <span className="h-px w-8 bg-zinc-700" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
          {label}
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-slate-50 sm:text-3xl md:text-[2.1rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">{description}</p>
      )}
    </div>
  );
}