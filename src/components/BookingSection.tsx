import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Phone,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

interface BookingSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="booking"
      className="py-18 sm:py-24 bg-[#0B2545] text-white text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Booking details & phone contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-sky-200 text-xs font-medium">
              <CalendarCheck className="w-4 h-4 text-sky-400" weight="bold" />
              <span>Appointment Scheduling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Schedule a Service or Project Consultation
            </h2>

            <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed font-normal">
              Book a convenient time to discuss your plumbing fixtures, city
              permit assistance, bid preparation, or on-site support. Carlos or
              Monica Ramos will confirm your request promptly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Flexible Scheduling:</strong> Morning and afternoon
                  consultation windows available.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Direct Owner Response:</strong> Carlos or Monica Ramos
                  will personally follow up.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Integration Ready:</strong> Easily connected to your
                  existing appointment calendar.
                </span>
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-2">
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider block">
                Direct Contact Lines
              </span>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" weight="fill" />
                  <span>Carlos: (832) 427-1674</span>
                </a>
                <span className="text-white/30 hidden sm:inline">•</span>
                <a
                  href="tel:8327459284"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" weight="fill" />
                  <span>Monica: (832) 745-9284</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Scheduling Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 text-slate-900 shadow-2xl border border-slate-100 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    Select Your Service
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast 1-minute scheduling request
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4" weight="bold" />
                </div>
              </div>

              {/* Service Selection pills */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Plumbing Fixtures Sourcing",
                    "Permit Pulling Assistance",
                    "Bid Preparation & Estimates",
                    "Project Support & Coordination",
                  ].map((serviceName, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onOpenBooking(serviceName)}
                      className="text-left p-3.5 rounded-xl border border-slate-200/80 hover:border-slate-400 hover:bg-slate-50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between group"
                    >
                      <span>{serviceName}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] transition-colors"
                        weight="bold"
                      />
                    </button>
                  ))}
                </div>

                <div className="pt-3 space-y-3">
                  <Button
                    onClick={() => onOpenBooking()}
                    className="w-full h-11 bg-[#0B2545] hover:bg-[#081b33] text-white font-medium text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CalendarCheck className="w-4 h-4 text-sky-400" weight="bold" />
                    <span>Open Appointment Scheduler</span>
                  </Button>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-center">
                    <p className="text-xs text-slate-500">
                      Direct integration ready for external booking calendars.
                    </p>
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
