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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 border border-blue-100 text-[#003c7a] text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#0060c0] motion-safe:animate-pulse" />
              <span>I Know A Plumber • Carlos Ramos</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-[#003c7a] tracking-tight leading-[1.12] text-balance">
              Reliable Plumbing Services &amp; Project Support
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Need reliable plumbing work done right? At <strong>I Know A Plumber</strong>,
              Carlos Ramos provides dependable plumbing fixtures sourcing, municipal permit pulling assistance,
              accurate bid preparation, and practical on-site contractor coordination.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                onClick={() => onOpenBooking()}
                size="lg"
                className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium text-sm sm:text-base h-12 px-7 rounded-full shadow-sm flex items-center justify-center gap-2.5 transition-transform active:scale-[0.98]"
              >
                <CalendarCheck className="w-4 h-4 text-sky-300" weight="bold" />
                <span>Book an Appointment</span>
              </Button>

              <a
                href="tel:8324271674"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 text-sm font-semibold text-slate-800 bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200/80 rounded-full transition-colors group"
                title="Call Carlos Ramos - (832) 427-1674"
              >
                <Phone className="w-4 h-4 text-[#0060c0] group-hover:scale-110 transition-transform" weight="fill" />
                <span>Call (832) 427-1674</span>
              </a>
            </div>

            {/* Minimalist Feature Pillars */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-700 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-[#0060c0] shrink-0" weight="fill" />
                <span>Plumbing Fixtures</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-[#0060c0] shrink-0" weight="fill" />
                <span>Permit Pulling</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-[#0060c0] shrink-0" weight="fill" />
                <span>Bids &amp; Estimates</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Sleek Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <img
                src="/assets/hero-plumbing.jpg"
                alt="Professional plumbing pipe installation - I Know A Plumber"
                className="w-full h-[380px] sm:h-[430px] object-cover"
                loading="eager"
              />
              {/* Soft readability vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003c7a]/80 via-transparent to-transparent" />

              {/* Minimal floating banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#0060c0] uppercase tracking-wider block">
                      I Know A Plumber
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      Carlos Ramos
                    </h3>
                    <p className="text-xs text-slate-500">
                      Residential &amp; Commercial Plumbing Support
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0060c0] flex items-center justify-center shrink-0">
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
