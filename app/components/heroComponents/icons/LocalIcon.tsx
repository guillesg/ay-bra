type LocalIconProps = {
  className?: string;
};

export default function LocalIcon({
  className = "h-7 w-7",
}: LocalIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Toldo */}

      <path
        d="M4 8H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M5 8L6.2 4H17.8L19 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Fachada */}

      <rect
        x="5"
        y="8"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Escaparate */}

      <rect
        x="7"
        y="11"
        width="5"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Puerta */}

      <path
        d="M15 20V13.5C15 12.67 15.67 12 16.5 12C17.33 12 18 12.67 18 13.5V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tirador */}

      <path
        d="M16.7 16H16.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}