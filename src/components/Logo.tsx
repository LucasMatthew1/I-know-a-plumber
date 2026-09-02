import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "navy";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "navy",
  className = "",
  size = "md",
}) => {
  const isLight = variant === "light";

  const imageSizes = {
    sm: "h-10 sm:h-11 w-auto max-w-[140px]",
    md: "h-13 sm:h-15 md:h-16 w-auto max-w-[200px]",
    lg: "h-16 sm:h-20 md:h-22 w-auto max-w-[260px]",
    xl: "h-20 sm:h-24 md:h-28 w-auto max-w-[320px]",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official Brand Logo Mark Image */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] ${
          isLight ? "bg-white/95 p-1.5 shadow-md" : ""
        }`}
      >
        <img
          src="/assets/i-know-a-plumber-logo.png"
          alt="I Know A Plumber"
          className={`${imageSizes[size]} object-contain drop-shadow-sm`}
          loading="eager"
        />
      </div>
    </div>
  );
};
