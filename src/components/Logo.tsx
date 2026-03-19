export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded square background */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="25"
        fill="#1A103C"
      />

      {/* Circular line pattern */}
      <g stroke="white" strokeWidth="0.6" fill="none" opacity="0.7">
        {Array.from({ length: 36 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="50"
            rx="28"
            ry="10"
            transform={`rotate(${i * 10} 50 50)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <LogoMark className="w-16 h-16 mb-3" />

      {/* Brand Name */}
      <span
        className={`text-2xl font-serif font-bold tracking-[0.3em] ${
          variant === "light" ? "text-white" : "text-brand-dark"
        }`}
      >
        FOVORSE
      </span>

      {/* Tagline */}
      <span
        className={`text-sm italic mt-1 ${
          variant === "light" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        For us For universe
      </span>
    </div>
  );
}
