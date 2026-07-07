import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "gold" | "glass";
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "gold",
  fullWidth = false,
  icon,
  className = "",
}: ButtonProps) {
  const variants = {
    gold:
      "bg-[#C9A14A] text-white hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(201,161,74,.35)]",

    glass:
      "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white hover:text-[#111111]",
  };

  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        h-[72px]
        items-center
        justify-center
        rounded-full
        px-12
        text-lg
        font-semibold
        transition-all
        duration-500
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      <span className={icon ? "mr-4" : ""}>{children}</span>

      {icon && (
        <span className="ml-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </Link>
  );
}