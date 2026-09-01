import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle,
  UserCheck,
  Phone,
  ArrowRight,
} from "@phosphor-icons/react";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="py-18 sm:py-24 bg-slate-50/70 border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase / Project Images */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
                  <img
                    src="/assets/plumbing-fixtures.jpg"
                    alt="Plumbing fixtures and bathroom installation"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-bold text-slate-800">
                      Fixtures &amp; Hardware
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sourcing &amp; Rough-In
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
                  <img
                    src="/assets/copper-pipes.jpg"
                    alt="Piping infrastructure and copper plumbing fittings"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
                  <img
                    src="/assets/permit-blueprints.jpg"
                    alt="Architectural plans and municipal plumbing permits"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
                  <img
                    src="/assets/project-coordination.jpg"
                    alt="Reviewing construction plans and bid documents"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-bold text-slate-800">
                      Project Support
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Bids &amp; Permit Filing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content: Authentic, straightforward, sleek presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-medium">
              <UserCheck className="w-4 h-4 text-[#0284C7]" weight="bold" />
              <span>About Carlos &amp; Monica Ramos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B2545] tracking-tight leading-tight">
              Practical Plumbing Solutions &amp; Dependable Support
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Ramos Plumbing Services, Carlos and Monica Ramos help property
                owners, general contractors, and remodelers navigate their
                plumbing needs with clarity and dependability.
              </p>
              <p>
                We focus on sourcing quality plumbing fixtures, assisting with
                municipal permit pulling, preparing accurate bid schedules, and
                providing reliable on-site project coordination.
              </p>
              <p>
                Whether you need help selecting the right fixtures for a
                renovation, organizing city filings, or calculating a
                cost-effective bid for an upcoming build, we provide honest,
                direct service every step of the way.
              </p>
            </div>

            {/* Credibility Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <CheckCircle
                  className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5"
                  weight="fill"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Direct Point of Contact
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Speak directly with Carlos or Monica Ramos on every job.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <CheckCircle
                  className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5"
                  weight="fill"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Permit &amp; Code Familiarity
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Assistance preparing documentation for local city filings.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Banner */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                onClick={onOpenBooking}
                className="bg-[#0B2545] hover:bg-[#081b33] text-white font-medium px-6 h-11 rounded-full text-xs sm:text-sm shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-sky-400" weight="bold" />
                Schedule a Consultation
              </Button>

              <a
                href="tel:8324271674"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0284C7] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0284C7]" weight="fill" />
                <span>Call Carlos: (832) 427-1674</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
