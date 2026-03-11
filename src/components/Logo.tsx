export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30C0 13.4315 13.4315 0 30 0H100V70C100 86.5685 86.5685 100 70 100H0V30Z" fill="#1A103C"/>
      <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.6">
        {Array.from({ length: 24 }).map((_, i) => (
          <ellipse 
            key={i} 
            cx="50" 
            cy="50" 
            rx="32" 
            ry="12" 
            transform={`rotate(${i * 15} 50 50)`} 
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ variant = "light", className = "" }: { variant?: "light" | "dark", className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="w-12 h-12 shrink-0" />
      <div className="flex flex-col items-start justify-center">
        <span className={`text-2xl font-serif font-bold tracking-[0.15em] leading-none ${variant === "light" ? "text-white" : "text-brand-dark"}`}>
          FOVORSE
        </span>
        <span className={`text-xl font-cursive leading-none mt-1 ${variant === "light" ? "text-gray-300" : "text-gray-600"}`}>
          For us For universe
        </span>
      </div>
    </div>
  );
}
