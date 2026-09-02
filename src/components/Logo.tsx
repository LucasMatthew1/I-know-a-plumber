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
    sm: "h-12 sm:h-14 w-auto max-w-[170px]",
    md: "h-16 sm:h-20 md:h-22 w-auto max-w-[280px]",
    lg: "h-22 sm:h-26 md:h-30 w-auto max-w-[340px]",
    xl: "h-28 sm:h-36 md:h-40 w-auto max-w-[440px]",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official Brand Logo Mark Image */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.03] ${
          isLight ? "bg-white/95 p-2 shadow-md" : "p-1"
        }`}
      >
        <img
          src="/assets/i-know-a-plumber-logo.png"
          alt="I Know A Plumber"
          className={`${imageSizes[size]} object-contain drop-shadow-md`}
          loading="eager"
        />
      </div>
    </div>
  );
};
