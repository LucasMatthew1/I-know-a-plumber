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

  const imageSizes = {
    sm: "h-8 w-auto max-w-[120px]",
    md: "h-10 sm:h-11 w-auto max-w-[160px]",
    lg: "h-12 sm:h-14 w-auto max-w-[200px]",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Brand Logo Mark Image */}
      <div className={`relative shrink-0 flex items-center justify-center rounded-xl overflow-hidden ${
        isLight ? "bg-white p-1 shadow-sm" : ""
      }`}>
        <img
          src="/assets/i-know-a-plumber-logo.png"
          alt="I Know A Plumber Logo"
          className={`${imageSizes[size]} object-contain`}
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-bold tracking-tight leading-none ${
              isLight ? "text-white" : "text-[#005bb5]"
            } ${size === "lg" ? "text-xl sm:text-2xl" : size === "md" ? "text-lg sm:text-xl" : "text-base"}`}
          >
            I KNOW A
          </span>
          <span
            className={`font-display font-extrabold tracking-tight leading-none ${
              isLight ? "text-sky-300" : "text-[#0060c0]"
            } ${size === "lg" ? "text-xl sm:text-2xl" : size === "md" ? "text-lg sm:text-xl" : "text-base"}`}
          >
            PLUMBER
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-xs font-medium tracking-wider uppercase mt-1 ${
              isLight ? "text-sky-200/80" : "text-slate-500"
            }`}
          >
            Plumbing &amp; Project Support
          </span>
        )}
      </div>
    </div>
  );
};
