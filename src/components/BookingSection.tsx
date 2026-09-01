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
      className="py-16 sm:py-24 bg-[#0D3155] text-white text-left relative overflow-hidden"
    >
      {/* Background geometric accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Booking details & phone contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <CalendarCheck className="w-4 h-4" weight="bold" />
              <span>Easy Appointment Scheduling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Schedule an Appointment or Project Consultation
            </h2>

            <p className="text-sky-100/90 text-base sm:text-lg leading-relaxed">
              Book a convenient time to discuss your plumbing fixtures, city
              permit assistance, bid preparation, or job-site support. We review
              every request promptly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-sky-100">
                <CheckCircle
                  className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Flexible Scheduling:</strong> Morning, afternoon, and
                  consultation windows available.
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-sky-100">
                <CheckCircle
                  className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Direct Owner Review:</strong> Carlos or Monica Ramos
                  will personally confirm your appointment.
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-sky-100">
                <CheckCircle
                  className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Integration Ready:</strong> Built to connect directly
                  to existing scheduling platforms.
                </span>
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15 space-y-2">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                Need Immediate Assistance?
              </span>
              <p className="text-xs text-sky-100">
                Call our direct lines to speak with us right away:
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" weight="fill" />
                  <span>Carlos: (832) 427-1674</span>
                </a>
                <span className="text-white/30 hidden sm:inline">|</span>
                <a
                  href="tel:8327459284"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" weight="fill" />
                  <span>Monica: (832) 745-9284</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Card / Ready-to-use booking widget bridge */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0D3155]">
                    Book Your Service Online
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast 1-minute scheduling request
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0369a1] flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5" weight="bold" />
                </div>
              </div>

              {/* Quick Service Selection previews */}
              <div className="space-y-4">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Popular Consultation Services:
                </p>

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
                      className="text-left p-3 rounded-lg border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between group"
                    >
                      <span>{serviceName}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0369a1] transition-colors"
                        weight="bold"
                      />
                    </button>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    onClick={() => onOpenBooking()}
                    className="w-full h-12 bg-[#0369a1] hover:bg-[#075985] text-white font-bold text-sm shadow-md rounded-lg flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-5 h-5" weight="bold" />
                    <span>Open Appointment Scheduler</span>
                  </Button>

                  {/* Booking App Bridge Notice for Client integration */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <p className="text-xs text-slate-600">
                      <strong>Client Booking Platform Bridge:</strong> Directly
                      integrated for seamless appointment confirmation.
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
