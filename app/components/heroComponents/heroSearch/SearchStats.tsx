interface SearchStat {
  value: string;
  label: string;
}

interface SearchStatsProps {
  stats: SearchStat[];
}

export default function SearchStats({
  stats,
}: SearchStatsProps) {
  return (
    <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
      <div className="grid grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative flex flex-col items-center justify-center px-6 py-8 ${
              index !== stats.length - 1
                ? "border-r border-white/10"
                : ""
            }`}
          >
            <span className="text-[38px] font-semibold tracking-tight text-[#FAFAF8]">
              {stat.value}
            </span>

            <span className="mt-2 text-[11px] uppercase tracking-[3px] text-white/45">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}