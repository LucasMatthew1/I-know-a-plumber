import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle,
  ShieldCheck,
  UserCheck,
  Phone,
  Clock,
  FileText,
  Wrench,
} from "@phosphor-icons/react";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      icon: UserCheck,
      title: "Direct Owner Contact",
      desc: "Speak directly with Carlos Ramos on every project without middle-management delays.",
    },
    {
      icon: FileText,
      title: "Permit & Code Assistance",
      desc: "Complete support pulling municipal permits and preparing compliance documentation.",
    },
    {
      icon: Wrench,
      title: "Fixture Sourcing",
      desc: "Commercial and residential fixture scheduling, specification review, and rough-in checks.",
    },
    {
      icon: Clock,
      title: "Accurate Bids & Timelines",
      desc: "Transparent, itemized estimating for remodelers, general contractors, and property owners.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-white">
              <img
                src="/assets/plumbing-fixtures.jpg"
                alt="Plumbing fixtures and quality installation by I Know A Plumber"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
              <div className="p-5 sm:p-6 bg-white space-y-1.5">
                <div className="flex items-center gap-2 text-[#0060c0] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" weight="fill" />
                  <span>Trade Reliability</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Carlos Ramos • I Know A Plumber
                </h3>
                <p className="text-xs text-slate-500">
                  Providing dedicated plumbing expertise, fixture coordination, and municipal permitting across the greater Houston region.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Story & Trust Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#003c7a] text-xs font-semibold">
              <UserCheck className="w-4 h-4 text-[#0060c0]" weight="bold" />
              <span>About &amp; Experience</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#003c7a] tracking-tight">
              Dependable Plumbing Solutions &amp; Direct Owner Support
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>I Know A Plumber</strong>, Carlos Ramos works directly with homeowners, builders, and general contractors to ensure plumbing fixtures, city permit filings, and project bids are handled right the first time.
            </p>

            {/* 4 Crisp Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0060c0] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fast Action CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                onClick={onOpenBooking}
                className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium px-6 h-11 rounded-full text-xs sm:text-sm shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-sky-300" weight="bold" />
                Book Consultation
              </Button>
              <a
                href="tel:8324271674"
                className="text-xs sm:text-sm font-bold text-[#003c7a] hover:text-[#0060c0] transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#0060c0]" weight="fill" />
                <span>(832) 427-1674</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
