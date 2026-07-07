"use client";

import Link from "next/link";

export default function HeroScroll() {
  return (
    <Link
      href="#properties"
      className="group absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
    >
      <span className="text-[11px] uppercase tracking-[5px] text-white/55 transition-colors duration-300 group-hover:text-[#C9A14A]">
        Scroll
      </span>

      <div className="mt-4 flex h-14 w-8 justify-center rounded-full border border-white/20">
        <span className="mt-2 h-2.5 w-2.5 animate-scroll rounded-full bg-[#C9A14A]" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }

          70% {
            transform: translateY(22px);
            opacity: .3;
          }

          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </Link>
  );
}