import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Handshake,
  Clock,
  ChatCircleText,
  FileText,
  Wrench,
} from "@phosphor-icons/react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description:
        "Consistent follow-through on scheduled appointments, clear timeframes, and dependable assistance for both small jobs and extensive projects.",
    },
    {
      icon: Handshake,
      title: "Professional Project Support",
      description:
        "Collaborative coordination with homeowners, builders, and general contractors to keep plumbing deliverables aligned with project milestones.",
    },
    {
      icon: Wrench,
      title: "Attention to Detail",
      description:
        "Careful review of fixture specifications, connections, and code requirements before work begins to avoid costly rework.",
    },
    {
      icon: ChatCircleText,
      title: "Straightforward Communication",
      description:
        "Direct communication with Carlos and Monica Ramos. No unreturned calls, hidden fees, or confusing jargon.",
    },
    {
      icon: FileText,
      title: "Accurate Bids & Documentation",
      description:
        "Transparent estimates, organized fixture schedules, and proper assistance with permit documentation.",
    },
    {
      icon: Clock,
      title: "Customer-Focused Approach",
      description:
        "We listen to your specific needs, work around your project timeline, and offer practical solutions that fit your budget.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#0D3155] text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-4 h-4 text-[#0369a1]" weight="bold" />
            <span>Why Ramos Plumbing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3155] tracking-tight">
            Built on Reliability &amp; Direct Communication
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            We focus on doing things right the first time, keeping you informed
            at every step, and providing dependable support for all your plumbing
            requirements.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-sky-300 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0369a1] flex items-center justify-center mb-5 border border-sky-100">
                  <IconComponent className="w-6 h-6" weight="bold" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Reference */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <p className="text-sm font-medium text-slate-700">
              Ready to discuss an upcoming plumbing project or bid?
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold text-[#0D3155]">
            <a
              href="tel:8324271674"
              className="hover:text-[#0369a1] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Carlos: (832) 427-1674</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="tel:8327459284"
              className="hover:text-[#0369a1] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Monica: (832) 745-9284</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
