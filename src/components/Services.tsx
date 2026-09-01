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
        "Assistance with selecting, sourcing, and installing quality residential and commercial plumbing fixtures including sinks, faucets, toilets, and valves.",
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
        "Accurate project cost estimating, fixture takeoff schedules, and transparent bid documentation for homeowners, contractors, and builders.",
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
        "Reviewing architectural plans and plumbing schematics to identify fixture specifications, rough-in requirements, and potential issues early.",
      icon: ClipboardText,
      image: "/assets/manifold-piping.jpg",
      highlight: "Blueprint & Layout Review",
    },
    {
      id: "maintenance-coordination",
      title: "Troubleshooting & Service Support",
      description:
        "Assessing plumbing concerns, fixture replacements, diagnostic walkthroughs, and practical solutions for home and property owners.",
      icon: ArrowsClockwise,
      image: "/assets/copper-pipes.jpg",
      highlight: "Consultation & Walkthroughs",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-white border-b border-slate-200 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-4 h-4 text-[#0369a1]" weight="bold" />
            <span>Our Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3155] tracking-tight">
            Plumbing Services &amp; Project Support
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Straightforward plumbing support tailored for homeowners, general
            contractors, and builders. Select any service to schedule an
            appointment.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3155]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#0D3155]/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0369a1] flex items-center justify-center shrink-0 border border-sky-100 group-hover:bg-[#0369a1] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" weight="bold" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0369a1] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0369a1] hover:text-[#075985] transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                  </button>

                  <a
                    href="tel:8324271674"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                    title="Inquire via phone"
                  >
                    (832) 427-1674
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner CTA */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#0D3155]">
              Need a Custom Plumbing Bid or Permit Assistance?
            </h3>
            <p className="text-sm text-slate-600">
              Reach out directly to Carlos or Monica Ramos to review your project
              scope and schedule an on-site consultation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              onClick={() => onOpenBooking("")}
              className="bg-[#0369a1] hover:bg-[#075985] text-white font-semibold text-sm px-5 h-11 rounded-lg w-full sm:w-auto"
            >
              <CalendarCheck className="w-4 h-4 mr-2" weight="bold" />
              Schedule Appointment
            </Button>
            <a
              href="tel:8324271674"
              className="hidden sm:inline-flex items-center justify-center gap-2 h-11 px-4 text-sm font-semibold text-[#0D3155] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0369a1]" weight="bold" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
