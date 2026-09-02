import React from "react";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  FileText,
  Calculator,
  Handshake,
  ClipboardText,
  ArrowsClockwise,
  ArrowRight,
  Phone,
  CalendarCheck,
} from "@phosphor-icons/react";

interface ServicesProps {
  onOpenBooking: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const servicesList = [
    {
      id: "plumbing-fixtures",
      title: "Plumbing Fixtures",
      description:
        "Assistance with selecting, sourcing, and installing residential and commercial fixtures including sinks, faucets, toilets, and trim.",
      icon: Wrench,
      image: "/assets/plumbing-fixtures.jpg",
      highlight: "Sinks, Faucets & Hardware",
    },
    {
      id: "permit-pulling",
      title: "Permit Pulling",
      description:
        "Assistance with filing paperwork, preparing submittals, and pulling required municipal plumbing permits to keep your project compliant.",
      icon: FileText,
      image: "/assets/permit-blueprints.jpg",
      highlight: "Municipal & City Filings",
    },
    {
      id: "bid-preparation",
      title: "Bid Preparation",
      description:
        "Accurate project cost estimating, fixture takeoff schedules, and transparent bid documentation for homeowners and builders.",
      icon: Calculator,
      image: "/assets/bid-preparation.jpg",
      highlight: "Itemized Cost Estimates",
    },
    {
      id: "project-support",
      title: "Plumbing Project Support",
      description:
        "Job-site plumbing consultation, coordination with general contractors, and ongoing technical support through project completion.",
      icon: Handshake,
      image: "/assets/project-coordination.jpg",
      highlight: "GC & On-Site Coordination",
    },
    {
      id: "plan-review",
      title: "Plan Review & Fixture Schedules",
      description:
        "Reviewing architectural plans and plumbing schematics to identify fixture specifications, rough-in requirements, and layout details.",
      icon: ClipboardText,
      image: "/assets/manifold-piping.jpg",
      highlight: "Blueprint & Layout Review",
    },
    {
      id: "maintenance-coordination",
      title: "Troubleshooting & Service Support",
      description:
        "Assessing plumbing concerns, fixture replacements, diagnostic walkthroughs, and practical solutions for property owners.",
      icon: ArrowsClockwise,
      image: "/assets/copper-pipes.jpg",
      highlight: "Consultation & Walkthroughs",
    },
  ];

  return (
    <section
      id="services"
      className="py-18 sm:py-24 bg-white border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 border border-blue-100 text-[#003c7a] text-xs font-semibold mb-3">
            <Wrench className="w-4 h-4 text-[#0060c0]" weight="bold" />
            <span>Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#003c7a] tracking-tight">
            Plumbing Services &amp; Project Support
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Straightforward plumbing services and contractor support from <strong>I Know A Plumber</strong>. Choose a
            service below to request a bid or schedule a consultation.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003c7a]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-[#003c7a]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0060c0] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" weight="bold" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0060c0] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0060c0] hover:text-[#003c7a] transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                  </button>

                  <a
                    href="tel:8324271674"
                    className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                    title="Inquire via phone"
                  >
                    (832) 427-1674
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Banner */}
        <div className="mt-12 bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#003c7a]">
              Need a Custom Plumbing Bid or Permit Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Reach out directly to Carlos Ramos to review your project
              scope and schedule a consultation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              onClick={() => onOpenBooking("")}
              className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium text-xs sm:text-sm px-5 h-10 rounded-full w-full sm:w-auto shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 mr-2 text-sky-300" weight="bold" />
              Schedule Appointment
            </Button>
            <a
              href="tel:8324271674"
              className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-4 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0060c0]" weight="fill" />
              <span>(832) 427-1674</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
