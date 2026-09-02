import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Phone,
  CheckCircle,
  ArrowRight,
  ArrowSquareOut,
  CreditCard,
} from "@phosphor-icons/react";
import { SQUARE_BOOKING_URL, BOOKING_CONFIG } from "@/config/booking";

interface BookingSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="booking"
      className="py-18 sm:py-24 bg-[#003c7a] text-white text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Booking details & phone contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-sky-200 text-xs font-medium">
              <CalendarCheck className="w-4 h-4 text-sky-300" weight="bold" />
              <span>Square Appointments</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Schedule a Service or Project Consultation
            </h2>

            <p className="text-sky-100/85 text-sm sm:text-base leading-relaxed font-normal">
              Book a convenient time with <strong>I Know A Plumber</strong> directly through our Square online booking system, or submit a request to Carlos Ramos.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-300 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Square Online Scheduling:</strong> Real-time calendar availability and instant appointment confirmation.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-300 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Direct Owner Response:</strong> Carlos Ramos will personally confirm project details.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-sky-100/90">
                <CheckCircle
                  className="w-4 h-4 text-sky-300 shrink-0 mt-0.5"
                  weight="fill"
                />
                <span>
                  <strong>Flexible Consultation Windows:</strong> Morning, afternoon, and on-site scheduling available.
                </span>
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-2">
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider block">
                Direct Contact Line
              </span>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-300" weight="fill" />
                  <span>Carlos Ramos: (832) 427-1674</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Scheduling Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 text-slate-900 shadow-2xl border border-slate-100 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#003c7a]">
                      Book Appointment
                    </h3>
                    <span className="px-2 py-0.5 bg-blue-50 text-[#0060c0] text-xs font-bold rounded-full border border-blue-100">
                      Square Online
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Choose a service or launch our Square calendar
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0060c0] flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4" weight="bold" />
                </div>
              </div>

              {/* Service Selection pills */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BOOKING_CONFIG.popularServices.slice(0, 4).map((serviceName, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onOpenBooking(serviceName)}
                      className="text-left p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between group"
                    >
                      <span>{serviceName}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0060c0] transition-colors"
                        weight="bold"
                      />
                    </button>
                  ))}
                </div>

                <div className="pt-3 space-y-3">
                  {/* Square Primary Action */}
                  <a
                    href={SQUARE_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-[#0060c0] hover:bg-[#0050a0] text-white font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
                  >
                    <span>Book Instantly on Square</span>
                    <ArrowSquareOut className="w-4 h-4" weight="bold" />
                  </a>

                  {/* In-app scheduler trigger */}
                  <Button
                    onClick={() => onOpenBooking()}
                    variant="outline"
                    className="w-full h-11 border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#0060c0]" weight="bold" />
                    <span>Open Request Form</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
