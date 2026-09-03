interface SectionHeaderProps {
  index?: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  index,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-4 mb-8 sm:mb-10 ${className}`}>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#161616]/50 flex items-center gap-2">
        {index && <span className="text-indigo-600 font-semibold">{index} /</span>}
        <span>{title}</span>
      </h2>
      <div className="h-[1px] flex-1 bg-[#161616]/10" />
    </div>
  );
}
