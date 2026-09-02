import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Drop, Wrench, CheckCircle } from "@phosphor-icons/react";

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  minDuration = 1800,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing plumbing services...");
  const [isDone, setIsDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, complete instantly
    if (reduceMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      setProgress(pct);

      if (pct < 35) {
        setStatusText("Loading fixtures & contractor tools...");
      } else if (pct < 70) {
        setStatusText("Preparing permit & bidding systems...");
      } else if (pct < 95) {
        setStatusText("Connecting to Carlos Ramos...");
      } else {
        setStatusText("Ready!");
      }

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = originalOverflow || "";
          if (onComplete) onComplete();
        }, 300);
      }
    }, 30);

    // Fallback safety timeout (2.5s maximum) to guarantee dismissal
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      setIsDone(true);
      document.body.style.overflow = originalOverflow || "";
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = originalOverflow || "";
    };
  }, [minDuration, onComplete, reduceMotion]);

  const handleSkip = () => {
    setIsDone(true);
    document.body.style.overflow = "";
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#001f3f] text-white px-4 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading I Know A Plumber"
        >
          {/* Ambient Glowing Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0060c0]/25 rounded-full blur-[110px] animate-pulse" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#003c7a]/40 rounded-full blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-[90px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo Container with Water Ripple Effect */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Concentric Pulse Rings */}
              <motion.div
                animate={{
                  scale: [1, 1.35, 1.5],
                  opacity: [0.6, 0.25, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-36 h-36 rounded-full border border-sky-400/40"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.35],
                  opacity: [0.8, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-44 h-44 rounded-full border border-[#0060c0]/50"
              />

              {/* Logo Card */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/20"
              >
                <img
                  src="/assets/i-know-a-plumber-logo.png"
                  alt="I Know A Plumber"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Brand Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-1.5 mb-7"
            >
              <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white flex items-center justify-center gap-2">
                <span>I Know A Plumber</span>
                <span className="inline-flex text-sky-400">
                  <Drop weight="fill" className="w-5 h-5 animate-bounce" />
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-sky-200/80 font-medium">
                Carlos Ramos • Plumbing &amp; Project Support
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-800/80 rounded-full h-2.5 p-0.5 border border-white/10 shadow-inner mb-3 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-[#0060c0] to-blue-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="w-full flex items-center justify-between text-xs text-sky-200/90 font-mono font-medium px-1">
              <span className="flex items-center gap-1.5 truncate max-w-[240px]">
                {progress >= 100 ? (
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Wrench weight="duotone" className="w-3.5 h-3.5 text-sky-400 animate-spin shrink-0" />
                )}
                <span className="truncate">{statusText}</span>
              </span>
              <span className="font-bold text-sky-300 ml-2 tabular-nums">
                {progress}%
              </span>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              type="button"
              className="mt-8 text-xs text-sky-300/60 hover:text-sky-200 hover:underline transition-colors px-3 py-1 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
            >
              Skip intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
