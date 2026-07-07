type TerrenoIconProps = {
  className?: string;
};

export default function TerrenoIcon({
  className = "h-7 w-7",
}: TerrenoIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Parcela */}

      <path
        d="M6 5L18 7V19L6 17V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Líneas topográficas */}

      <path
        d="M8 9C9.5 8.4 11 8.4 12.5 9C14 9.6 15.5 9.6 17 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8 12C9.5 11.4 11 11.4 12.5 12C14 12.6 15.5 12.6 17 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8 15C9.5 14.4 11 14.4 12.5 15C14 15.6 15.5 15.6 17 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Punto de parcela */}

      <circle
        cx="12"
        cy="12"
        r="1.3"
        fill="currentColor"
      />
    </svg>
  );
}