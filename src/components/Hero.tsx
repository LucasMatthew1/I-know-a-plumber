import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Phone,
  CheckCircle,
  Clock,
  Wrench,
} from "@phosphor-icons/react";

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative bg-white pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden border-b border-slate-200"
    >
      {/* Architectural grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0D3155 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear, Credible Message & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Trust badge / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#0369a1] motion-safe:animate-pulse" />
              <span>Carlos &amp; Monica Ramos • Plumbing Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-display font-extrabold text-[#0D3155] tracking-tight leading-[1.15] text-balance">
              Reliable Plumbing Services &amp; Project Support
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Professional assistance for residential and commercial needs. We
              provide quality plumbing fixtures, city permit pulling support,
              accurate bid preparation, and dependable project coordination.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                onClick={() => onOpenBooking()}
                size="lg"
                className="bg-[#0369a1] hover:bg-[#075985] text-white font-bold text-base h-12 px-6 shadow-sm rounded-lg flex items-center justify-center gap-2.5 transition-transform active:scale-[0.98]"
              >
                <CalendarCheck className="w-5 h-5" weight="bold" />
                <span>Book an Appointment</span>
              </Button>

              <div className="flex items-center gap-2">
                <a
                  href="tel:8324271674"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-5 text-sm sm:text-base font-bold text-[#0D3155] bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                  title="Call Carlos Ramos"
                >
                  <Phone className="w-4 h-4 text-[#0369a1]" weight="fill" />
                  <span>(832) 427-1674</span>
                </a>

                <a
                  href="tel:8327459284"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-5 text-sm sm:text-base font-bold text-[#0D3155] bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                  title="Call Monica Ramos"
                >
                  <Phone className="w-4 h-4 text-[#0369a1]" weight="fill" />
                  <span>(832) 745-9284</span>
                </a>
              </div>
            </div>

            {/* Bullet Proof Points */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0369a1] shrink-0" weight="fill" />
                <span>Plumbing Fixtures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0369a1] shrink-0" weight="fill" />
                <span>Permit Pulling Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0369a1] shrink-0" weight="fill" />
                <span>Estimates &amp; Bid Preparation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Imagery & Service Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="/assets/hero-plumbing.jpg"
                alt="Professional plumbing pipe fitting and installation"
                className="w-full h-[340px] sm:h-[400px] object-cover"
                loading="eager"
              />
              {/* Subtle readability gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3155]/85 via-[#0D3155]/25 to-transparent" />

              {/* Floating Information Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md text-left">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-[#0369a1] uppercase tracking-wider block">
                      Direct Owner Contact
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      Carlos Ramos &amp; Monica Ramos
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Dedicated plumbing support for homeowners &amp; contractors
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-50 text-[#0369a1] shrink-0">
                    <Wrench className="w-5 h-5" weight="bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative badge */}
            <div className="hidden sm:flex absolute -top-3 -right-3 bg-[#0D3155] text-white p-3 rounded-xl shadow-md border border-sky-400/30 items-center gap-2.5 text-xs font-semibold">
              <Clock className="w-4 h-4 text-sky-400" weight="bold" />
              <span>Straightforward Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
