import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Phone,
  CheckCircle,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "@phosphor-icons/react";

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Refined Typography & High-Conversion CTAs */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Subtle Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium">
              <span className="flex h-2 w-2 rounded-full bg-[#0284C7] motion-safe:animate-pulse" />
              <span>Carlos &amp; Monica Ramos • Plumbing Services</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-[#0B2545] tracking-tight leading-[1.12] text-balance">
              Reliable Plumbing Services &amp; Project Support
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Straightforward, dependable plumbing support. We specialize in
              plumbing fixtures, city permit pulling assistance, bid preparation,
              and professional project coordination.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button
                onClick={() => onOpenBooking()}
                size="lg"
                className="bg-[#0B2545] hover:bg-[#081b33] text-white font-medium text-sm sm:text-base h-12 px-7 rounded-full shadow-sm flex items-center justify-center gap-2.5 transition-transform active:scale-[0.98]"
              >
                <CalendarCheck className="w-4 h-4 text-sky-400" weight="bold" />
                <span>Book an Appointment</span>
              </Button>

              <div className="flex items-center gap-2">
                <a
                  href="tel:8324271674"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full transition-colors"
                  title="Call Carlos Ramos"
                >
                  <Phone className="w-4 h-4 text-[#0284C7]" weight="fill" />
                  <span>(832) 427-1674</span>
                </a>

                <a
                  href="tel:8327459284"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full transition-colors"
                  title="Call Monica Ramos"
                >
                  <Phone className="w-4 h-4 text-[#0284C7]" weight="fill" />
                  <span>(832) 745-9284</span>
                </a>
              </div>
            </div>

            {/* Minimalist Feature Pillars */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" weight="fill" />
                <span>Plumbing Fixtures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" weight="fill" />
                <span>Permit Pulling Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" weight="fill" />
                <span>Itemized Bids &amp; Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Sleek Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <img
                src="/assets/hero-plumbing.jpg"
                alt="Professional plumbing pipe installation"
                className="w-full h-[380px] sm:h-[430px] object-cover"
                loading="eager"
              />
              {/* Soft readability vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />

              {/* Minimal floating banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#0369a1] uppercase tracking-wider block">
                      Direct Support
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      Carlos &amp; Monica Ramos
                    </h3>
                    <p className="text-xs text-slate-500">
                      Residential &amp; Commercial Plumbing Assistance
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" weight="bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
