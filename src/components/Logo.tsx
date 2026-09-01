import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "navy";
  showSubtitle?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "navy",
  showSubtitle = true,
  className = "",
  size = "md",
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const currentIconSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Logo Mark: Interlocking Pipes & Hydro Dynamic */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-label="Ramos Plumbing Services Logo Mark"
        >
          {/* Outer Shield / Geometric Frame */}
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill={isLight ? "rgba(255,255,255,0.15)" : "#0D3155"}
            stroke={isLight ? "#38BDF8" : "#0284C7"}
            strokeWidth="2.5"
          />

          {/* Pipe Union Horizontal & Vertical Plumbing Line */}
          {/* Main Horizontal Pipe Channel */}
          <path
            d="M14 26H50V34H14V26Z"
            fill={isLight ? "#FFFFFF" : "#FFFFFF"}
            opacity="0.9"
          />
          {/* Pipe Flanges */}
          <rect x="12" y="24" width="4" height="12" rx="1.5" fill="#38BDF8" />
          <rect x="48" y="24" width="4" height="12" rx="1.5" fill="#38BDF8" />

          {/* Vertical Tee Downward Pipe */}
          <path
            d="M28 34H36V48C36 49.1 35.1 50 34 50H30C28.9 50 28 49.1 28 48V34Z"
            fill="#0284C7"
          />
          <rect x="26" y="46" width="12" height="4" rx="1" fill="#38BDF8" />

          {/* Precision Water Droplet & Flow Accent */}
          <path
            d="M32 14C32 14 24 24 24 28C24 32.4 27.6 36 32 36C36.4 36 40 32.4 40 28C40 24 32 14 32 14Z"
            fill="#0284C7"
          />
          <path
            d="M32 17C32 17 26 25 26 28C26 31.3 28.7 34 32 34C35.3 34 38 31.3 38 28C38 25 32 17 32 17Z"
            fill={isLight ? "#7DD3FC" : "#38BDF8"}
          />
          {/* Water Highlight glint */}
          <circle cx="29" cy="27" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Block */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-extrabold tracking-tight leading-none ${
              isLight ? "text-white" : "text-[#0D3155]"
            } ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-lg"}`}
          >
            RAMOS
          </span>
          <span
            className={`font-display font-bold tracking-tight leading-none ${
              isLight ? "text-sky-400" : "text-sky-600"
            } ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-lg"}`}
          >
            PLUMBING
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-xs font-semibold tracking-wider uppercase mt-1 ${
              isLight ? "text-sky-200" : "text-slate-600"
            }`}
          >
            Services & Project Support
          </span>
        )}
      </div>
    </div>
  );
};
