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
    <div className={`flex flex-col mb-6 sm:mb-7 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          {(kicker || index) && (
            <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] text-[#161616]/45 font-semibold">
              {index && <span className="text-[#161616]/75 mr-1.5">{index} //</span>}
              {kicker}
            </span>
          )}
          <h2 className="text-[20px] sm:text-[23px] font-semibold tracking-[-0.035em] text-[#161616]">
            {title}
          </h2>
        </div>
        <span className="font-mono text-[12px] text-[#161616]/25 select-none hidden sm:inline-block">
          +
        </span>
      </div>

      {subtitle && (
        <p className="mt-1.5 text-[13.5px] sm:text-[14px] leading-[1.6] text-[#161616]/65 max-w-[620px]">
          {subtitle}
        </p>
      )}

      {/* Structural Hairline Divider with Cross Marker */}
      <div className="relative mt-3 flex items-center">
        <div className="h-[1px] w-full bg-[#161616]/10" />
      </div>
    </div>
  );
}
