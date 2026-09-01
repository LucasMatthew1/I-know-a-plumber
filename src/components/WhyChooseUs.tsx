import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Handshake,
  Clock,
  ChatCircleText,
  FileText,
  Wrench,
  Phone,
} from "@phosphor-icons/react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: "Reliable Follow-Through",
      description:
        "Consistent on-time communication, dependable service, and clear timelines for both small repairs and large construction projects.",
    },
    {
      icon: Handshake,
      title: "Contractor Coordination",
      description:
        "Collaborative project support with homeowners, builders, and general contractors to keep deliverables on schedule.",
    },
    {
      icon: Wrench,
      title: "Attention to Detail",
      description:
        "Careful review of fixture schedules, rough-in dimensions, and code requirements before work begins to avoid costly revisions.",
    },
    {
      icon: ChatCircleText,
      title: "Direct Owner Communication",
      description:
        "Speak directly with Carlos and Monica Ramos. No unreturned messages, hidden fees, or confusing runarounds.",
    },
    {
      icon: FileText,
      title: "Accurate Bids & Permits",
      description:
        "Itemized cost estimates, clear fixture takeoffs, and professional assistance preparing paperwork for city filings.",
    },
    {
      icon: Clock,
      title: "Customer-Focused Solutions",
      description:
        "We listen to your specific project needs, respect your budget, and provide practical recommendations.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-18 sm:py-24 bg-slate-50/70 border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 border border-blue-100 text-[#003c7a] text-xs font-semibold mb-3">
            <CheckCircle className="w-4 h-4 text-[#0060c0]" weight="bold" />
            <span>Why Choose I Know A Plumber</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#003c7a] tracking-tight">
            Built on Reliability &amp; Straightforward Service
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            We focus on doing the job right, keeping you informed at every step,
            and providing dependable support for all your plumbing needs.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/70 shadow-sm hover:border-blue-200 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0060c0] flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" weight="bold" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Pill Reference */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-slate-700">
              Ready to discuss an upcoming plumbing bid or permit filing?
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#003c7a]">
            <a
              href="tel:8324271674"
              className="hover:text-[#0060c0] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Carlos: (832) 427-1674</span>
            </a>
            <span className="text-slate-500">•</span>
            <a
              href="tel:8327459284"
              className="hover:text-[#0060c0] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Monica: (832) 745-9284</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
