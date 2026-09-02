import React from "react";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  FileText,
  Calculator,
  Handshake,
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
        "Sourcing and rough-in installation for residential and commercial fixtures, sinks, faucets, and trim.",
      icon: Wrench,
      image: "/assets/plumbing-fixtures.jpg",
      badge: "Fixtures & Hardware",
    },
    {
      id: "permit-pulling",
      title: "Permit Pulling",
      description:
        "Filing municipal documentation, submittals, and pulling required plumbing permits for local city compliance.",
      icon: FileText,
      image: "/assets/permit-blueprints.jpg",
      badge: "City & Municipal Permits",
    },
    {
      id: "bid-preparation",
      title: "Bids & Estimating",
      description:
        "Accurate project estimating, itemized takeoffs, and transparent cost schedules for contractors and homeowners.",
      icon: Calculator,
      image: "/assets/bid-preparation.jpg",
      badge: "Cost Takeoffs & Bids",
    },
    {
      id: "project-support",
      title: "Contractor Coordination",
      description:
        "On-site plumbing project support, architectural plan reviews, and ongoing trade coordination.",
      icon: Handshake,
      image: "/assets/project-coordination.jpg",
      badge: "Project Support",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-white border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#003c7a] text-xs font-semibold mb-2.5">
            <Wrench className="w-4 h-4 text-[#0060c0]" weight="bold" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#003c7a] tracking-tight">
            Plumbing Services &amp; Project Support
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Focused, reliable plumbing services for homeowners, remodelers, and general contractors.
          </p>
        </div>

        {/* 4 Focused Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003c7a]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-xs font-semibold text-white bg-[#003c7a]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0060c0] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" weight="bold" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0060c0] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0060c0] hover:text-[#003c7a] transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                  </button>

                  <a
                    href="tel:8324271674"
                    className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                    title="Direct call"
                  >
                    (832) 427-1674
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
