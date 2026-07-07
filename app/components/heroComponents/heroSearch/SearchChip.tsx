import type { ComponentType } from "react";

interface SearchChipProps {
  label: string;
  description: string;
  icon: ComponentType<{
    className?: string;
  }>;
  active: boolean;
  onClick: () => void;
}

export default function SearchChip({
  label,
  description,
  icon: Icon,
  active,
  onClick,
}: SearchChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[28px] border p-8 transition-all duration-500 lg:p-9 ${
        active
          ? "border-[#C9A14A] bg-[#C9A14A] text-white shadow-[0_25px_80px_rgba(201,161,74,.30)]"
          : "border-white/10 bg-white/[0.04] text-white hover:-translate-y-1 hover:border-[#C9A14A]/40 hover:bg-white/[0.08]"
      }`}
    >
      {/* Glow */}

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Content */}

      <div className="relative z-10 flex items-center gap-7">

        {/* Icon */}

        <div
          className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
            active
              ? "bg-white/15"
              : "bg-white/5 group-hover:bg-[#C9A14A]/10"
          }`}
        >
          <Icon
            className={`h-8 w-8 transition-all duration-500 ${
              active
                ? "text-white"
                : "text-[#C9A14A]"
            }`}
          />
        </div>

        {/* Text */}

        <div className="min-w-0 flex-1 text-left">

          <h3 className="text-[21px] font-semibold leading-tight">
            {label}
          </h3>

          <p
            className={`mt-2.5 text-[15px] leading-relaxed ${
              active
                ? "text-white/80"
                : "text-white/55"
            }`}
          >
            {description}
          </p>

        </div>

      </div>

      {/* Border */}

      <div
        className={`pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-500 ${
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute inset-0 rounded-[28px] border border-[#C9A14A]/40" />
      </div>
    </button>
  );
}