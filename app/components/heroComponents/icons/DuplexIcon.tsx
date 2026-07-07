type DuplexIconProps = {
  className?: string;
};

export default function DuplexIcon({
  className = "h-7 w-7",
}: DuplexIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tejado */}

      <path
        d="M4 10L12 4L20 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Planta superior */}

      <rect
        x="7"
        y="8"
        width="10"
        height="5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Planta inferior */}

      <rect
        x="5"
        y="13"
        width="14"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Ventanas superiores */}

      <path
        d="M10 10H10.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14 10H14.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Puerta */}

      <path
        d="M11 20V16.8C11 16 11.65 15.4 12.45 15.4H12.55C13.35 15.4 14 16 14 16.8V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}