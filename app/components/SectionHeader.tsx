interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  index?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  kicker,
  index,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 mb-10 sm:mb-14 ${className}`}>
      {(kicker || index) && (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
          {index && <span className="font-semibold text-zinc-500">{index} //</span>}
          <span>{kicker}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed text-zinc-500 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
