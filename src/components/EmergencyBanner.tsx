import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  WarningCircle,
  Drop,
  Flame,
  Chats,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  X,
  FileText,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

interface EmergencyBannerProps {
  onOpenBooking?: (service?: string) => void;
}

interface EmergencyIssue {
  id: string;
  title: string;
  icon: React.ElementType;
  urgentGuidance: string;
  smsMessage: string;
}

const emergencyIssues: EmergencyIssue[] = [
  {
    id: "burst-pipe",
    title: "Burst Pipe / Major Leak",
    icon: Drop,
    urgentGuidance: "Shut off your main water valve immediately. Keep valuables and electrical devices clear.",
    smsMessage: "EMERGENCY: I have a burst pipe / major water leak needing urgent plumbing dispatch.",
  },
  {
    id: "water-heater",
    title: "Water Heater Breakdown",
    icon: Flame,
    urgentGuidance: "Turn off the cold water shutoff valve above the tank. If smelling gas, vacate and ventilate.",
    smsMessage: "URGENT: Water heater failure / leaking unit needing fast inspection.",
  },
  {
    id: "sewer-backup",
    title: "Sewer Backup / Total Clog",
    icon: WarningCircle,
    urgentGuidance: "Avoid running sinks, showers, or washing machines to prevent further interior overflow.",
    smsMessage: "EMERGENCY: Sewer line backup / drain emergency at my property.",
  },
  {
    id: "permit-stop",
    title: "City Inspection / Red Tag",
    icon: FileText,
    urgentGuidance: "Keep your city inspection report handy. Carlos can quickly identify code violations and pull remedies.",
    smsMessage: "URGENT: Job red-tagged / municipal plumbing permit issue requiring swift resolution.",
  },
];

export const EmergencyBanner: React.FC<EmergencyBannerProps> = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>("burst-pipe");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  const selectedIssue =
    emergencyIssues.find((issue) => issue.id === selectedIssueId) || emergencyIssues[0];

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("8324271674");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Emergency Plumbing Hotline"
      className="relative z-20 bg-[#001f3f] text-white border-b border-blue-900/60 shadow-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Compact Single-Row Main Bar */}
        <div className="py-2.5 sm:py-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Left: Indicator & Headline */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sky-200 tracking-wide text-xs uppercase bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                24/7 Emergency Service
              </span>
              <span className="text-slate-200 font-medium truncate hidden md:inline">
                Burst pipes, major leaks &amp; urgent permit stops • Rapid response across Greater Houston
              </span>
            </div>
          </div>

          {/* Right: Actions & Expand Button */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Call Button */}
            <a
              href="tel:8324271674"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0060c0] hover:bg-[#0070e0] text-white font-semibold text-xs sm:text-sm transition-all shadow-xs hover:shadow-blue-500/20 active:scale-95"
            >
              <PhoneCall weight="fill" className="w-3.5 h-3.5 text-sky-200" />
              <span>(832) 427-1674</span>
            </a>

            {/* Expand / Troubleshoot Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-sky-100 text-xs font-medium transition-colors border border-white/10"
              title="Toggle emergency issue guidance"
              aria-expanded={isExpanded}
            >
              <span className="hidden sm:inline">
                {isExpanded ? "Hide Guide" : "Emergency Guide"}
              </span>
              <span className="sm:hidden">Guide</span>
              {isExpanded ? (
                <CaretUp weight="bold" className="w-3 h-3 text-sky-300" />
              ) : (
                <CaretDown weight="bold" className="w-3 h-3 text-sky-300" />
              )}
            </button>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Dismiss banner"
              title="Dismiss banner"
            >
              <X weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Collapsible Emergency Guidance & Fast Action Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-blue-900/80 pb-4 pt-3"
            >
              <div className="bg-[#00172e] rounded-xl p-3.5 sm:p-4 border border-blue-800/40">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-900/60">
                  <div className="flex items-center gap-2">
                    <ShieldCheck weight="fill" className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Select Your Urgent Plumbing Issue:
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-sky-300 font-medium">
                    <Clock weight="bold" className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Avg. Response: ~15-30 mins</span>
                  </div>
                </div>

                {/* 4 Interactive Issue Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3.5">
                  {emergencyIssues.map((issue) => {
                    const isSelected = selectedIssueId === issue.id;
                    const Icon = issue.icon;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssueId(issue.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs transition-all border ${
                          isSelected
                            ? "bg-blue-600/30 border-cyan-400 text-white shadow-xs"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-cyan-500/30 text-cyan-300"
                              : "bg-white/10 text-slate-400"
                          }`}
                        >
                          <Icon weight={isSelected ? "fill" : "regular"} className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold line-clamp-1">{issue.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Issue Guidance & Rapid Dispatch Triggers */}
                <div className="bg-[#001020] rounded-lg p-3 border border-blue-900/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-400">
                        Immediate Action:
                      </span>
                      <span className="text-xs text-slate-200">
                        {selectedIssue.urgentGuidance}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                    <a
                      href="tel:8324271674"
                      className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0060c0] hover:bg-[#0070e0] text-white text-xs font-semibold transition-colors shadow-xs"
                    >
                      <PhoneCall weight="fill" className="w-3.5 h-3.5 text-cyan-200" />
                      <span>Call Carlos</span>
                    </a>

                    <a
                      href={`sms:8324271674?&body=${encodeURIComponent(
                        selectedIssue.smsMessage
                      )}`}
                      className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sky-100 text-xs font-semibold transition-colors border border-white/10"
                    >
                      <Chats weight="fill" className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Text Details</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors border border-white/10"
                      title="Copy phone number"
                    >
                      {copied ? (
                        <>
                          <Check weight="bold" className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300 text-xs">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span className="hidden sm:inline text-xs">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};
