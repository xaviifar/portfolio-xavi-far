interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  kicker,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col mb-5 sm:mb-6 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          {kicker && (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#161616]/40 font-medium">
              {kicker}
            </span>
          )}
          <h2 className="text-[19px] sm:text-[22px] font-medium tracking-[-0.035em] text-[#161616]">
            {title}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#161616]/25 select-none hidden sm:inline-block">
          +
        </span>
      </div>

      {subtitle && (
        <p className="mt-1 text-[13.5px] leading-[1.55] text-[#161616]/60 max-w-[560px]">
          {subtitle}
        </p>
      )}

      {/* Clean compact divider */}
      <div className="relative mt-2.5 flex items-center">
        <div className="h-[1px] w-full bg-[#161616]/10" />
      </div>
    </div>
  );
}
