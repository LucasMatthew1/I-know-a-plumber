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
    md: "h-9",
    lg: "h-11",
  };

  const iconSizes = {
    sm: 30,
    md: 36,
    lg: 44,
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
          className="transition-transform duration-200 group-hover:scale-105"
          aria-label="Ramos Plumbing Services Logo"
        >
          {/* Outer Shield / Minimal Geometric Frame */}
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill={isLight ? "rgba(255,255,255,0.12)" : "#0B2545"}
            stroke={isLight ? "#38BDF8" : "#0284C7"}
            strokeWidth="2"
          />

          {/* Clean Horizontal Pipe Channel */}
          <rect
            x="14"
            y="27"
            width="36"
            height="7"
            rx="1.5"
            fill="#FFFFFF"
          />
          {/* Pipe Flanges */}
          <rect x="12" y="25" width="4" height="11" rx="1.5" fill="#38BDF8" />
          <rect x="48" y="25" width="4" height="11" rx="1.5" fill="#38BDF8" />

          {/* Vertical Tee Downward Pipe */}
          <path
            d="M28 34H36V47C36 48.1 35.1 49 34 49H30C28.9 49 28 48.1 28 47V34Z"
            fill="#0284C7"
          />
          <rect x="26" y="45" width="12" height="4" rx="1" fill="#38BDF8" />

          {/* Precision Water Droplet Accent */}
          <path
            d="M32 14C32 14 24.5 23.5 24.5 27.5C24.5 31.6 27.9 35 32 35C36.1 35 39.5 31.6 39.5 27.5C39.5 23.5 32 14 32 14Z"
            fill="#0284C7"
          />
          <path
            d="M32 17C32 17 26.5 24.5 26.5 27.5C26.5 30.5 29 33 32 33C35 33 37.5 30.5 37.5 27.5C37.5 24.5 32 17 32 17Z"
            fill={isLight ? "#7DD3FC" : "#38BDF8"}
          />
          {/* Water Highlight glint */}
          <circle cx="29.5" cy="26.5" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Block */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-bold tracking-tight leading-none ${
              isLight ? "text-white" : "text-[#0B2545]"
            } ${size === "lg" ? "text-2xl" : size === "md" ? "text-lg sm:text-xl" : "text-base"}`}
          >
            RAMOS
          </span>
          <span
            className={`font-display font-semibold tracking-tight leading-none ${
              isLight ? "text-sky-400" : "text-[#0369a1]"
            } ${size === "lg" ? "text-2xl" : size === "md" ? "text-lg sm:text-xl" : "text-base"}`}
          >
            PLUMBING
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-xs font-medium tracking-wider uppercase mt-1 ${
              isLight ? "text-sky-200/80" : "text-slate-500"
            }`}
          >
            Services &amp; Project Support
          </span>
        )}
      </div>
    </div>
  );
};
