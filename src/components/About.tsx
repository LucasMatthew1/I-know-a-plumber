import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle,
  UserCheck,
} from "@phosphor-icons/react";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase / Project Images */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-3.5">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/assets/plumbing-fixtures.jpg"
                    alt="Plumbing fixtures and bathroom installation"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-xs font-bold text-slate-800">
                      Fixtures &amp; Sinks
                    </p>
                    <p className="text-xs text-slate-500">
                      Sourcing &amp; Setup
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/assets/copper-pipes.jpg"
                    alt="Piping infrastructure and copper plumbing fittings"
                    className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-3.5 pt-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/assets/permit-blueprints.jpg"
                    alt="Architectural plans and municipal plumbing permits"
                    className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/assets/project-coordination.jpg"
                    alt="Reviewing construction plans and bid documents"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-xs font-bold text-slate-800">
                      Project Support
                    </p>
                    <p className="text-xs text-slate-500">
                      Bids &amp; Permits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content: Authentic, straightforward introduction */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#0D3155] text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-[#0369a1]" weight="bold" />
              <span>About Ramos Plumbing Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#0D3155] tracking-tight">
              Practical Plumbing Solutions &amp; Dependable Support
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Ramos Plumbing Services, operated by Carlos and Monica Ramos,
                we help property owners, general contractors, and remodelers
                navigate their plumbing needs without the typical complications.
              </p>
              <p>
                Our core focus is providing plumbing-related services including
                sourcing quality plumbing fixtures, assisting with city permit
                pulling, preparing thorough project bids, and offering practical
                job-site coordination.
              </p>
              <p>
                Whether you need assistance selecting the right fixtures for a
                renovation, getting city permits organized, or calculating a
                reliable bid for an upcoming project, we are here to provide
                direct, honest, and prompt service.
              </p>
            </div>

            {/* Credibility Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle
                  className="w-5 h-5 text-[#0369a1] shrink-0 mt-0.5"
                  weight="fill"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Direct Point of Contact
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Speak directly with Carlos or Monica Ramos on every job.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle
                  className="w-5 h-5 text-[#0369a1] shrink-0 mt-0.5"
                  weight="fill"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Permit &amp; Code Familiarity
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Assistance preparing documentation for local city filings.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Banner */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={onOpenBooking}
                className="bg-[#0D3155] hover:bg-[#071c32] text-white font-semibold px-5 h-11 rounded-lg text-sm"
              >
                <CalendarCheck className="w-4 h-4 mr-2" weight="bold" />
                Schedule a Consultation
              </Button>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <span>Call Carlos:</span>
                <a
                  href="tel:8324271674"
                  className="text-[#0369a1] hover:underline font-bold"
                >
                  (832) 427-1674
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
