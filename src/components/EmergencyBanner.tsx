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
    title: "Burst Pipe or Major Water Leak",
    icon: Drop,
    urgentGuidance: "Shut off your main water valve immediately. Keep electronics and valuables clear.",
    smsMessage: "EMERGENCY: I have a burst pipe / major water leak needing urgent plumbing support.",
  },
  {
    id: "water-heater",
    title: "Water Heater Rupture / Gas Leak",
    icon: Flame,
    urgentGuidance: "Turn off water supply line to heater. If smelling gas, exit building and ventilate.",
    smsMessage: "URGENT: Water heater breakdown/leak requires rapid plumbing dispatch.",
  },
  {
    id: "sewer-backup",
    title: "Sewer Backup / Total Drain Clog",
    icon: WarningCircle,
    urgentGuidance: "Avoid running any sinks, toilets, or dishwashers to prevent overflow.",
    smsMessage: "EMERGENCY: Sewer line backup / drain emergency at my property.",
  },
  {
    id: "permit-stop",
    title: "Urgent Permit Stop / Red Tag Issue",
    icon: FileText,
    urgentGuidance: "Have your city inspection ticket ready. Carlos can review code violations promptly.",
    smsMessage: "URGENT: Contractor job red-tagged / permit issue requiring immediate code resolution.",
  },
];

export const EmergencyBanner: React.FC<EmergencyBannerProps> = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>("burst-pipe");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  const selectedIssue =
    emergencyIssues.find((issue) => issue.id === selectedIssueId) || emergencyIssues[0];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("8324271674");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  if (isDismissed) {
    return (
      <div className="bg-amber-500/10 border-b border-amber-200/80 py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm text-amber-900 font-medium">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-ping" />
            <span>24/7 Priority Emergency Plumbing Available</span>
          </div>
          <button
            onClick={() => setIsDismissed(false)}
            className="text-amber-800 font-bold underline hover:text-amber-950 text-xs ml-3"
          >
            Show Emergency Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <section aria-label="Emergency Plumbing Response" className="relative z-20 bg-gradient-to-r from-red-700 via-red-600 to-amber-700 text-white shadow-lg border-b border-red-800">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Header & Status Indicator */}
          <div className="flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-inner">
                <WarningCircle weight="fill" className="w-6 h-6 animate-pulse text-amber-200" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-black/25 px-2 py-0.5 rounded text-amber-300 border border-amber-300/30">
                    Emergency Dispatch
                  </span>
                  <span className="text-xs text-red-100 flex items-center gap-1 font-medium">
                    <Clock weight="bold" className="w-3.5 h-3.5 text-amber-300" />
                    Priority Callback ~15 mins
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-extrabold tracking-tight text-white leading-tight">
                  Plumbing Emergency or Job Site Halt?
                </h2>
              </div>
            </div>

            {/* Mobile Expand / Dismiss Controls */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg bg-black/20 hover:bg-black/30 text-white text-xs flex items-center gap-1 font-medium transition"
                aria-label={isExpanded ? "Collapse emergency panel" : "Expand emergency panel"}
              >
                {isExpanded ? <CaretUp weight="bold" className="w-4 h-4" /> : <CaretDown weight="bold" className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-lg bg-black/20 hover:bg-black/30 text-white/80 hover:text-white transition"
                aria-label="Dismiss banner"
              >
                <X weight="bold" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Direct Call Button */}
            <a
              href="tel:8324271674"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-red-700 font-bold text-sm shadow-md hover:bg-amber-50 active:scale-[0.98] transition-all"
            >
              <PhoneCall weight="fill" className="w-4 h-4 text-red-600 animate-bounce" />
              <span>Call Carlos: (832) 427-1674</span>
            </a>

            {/* Direct SMS with prefilled emergency issue */}
            <a
              href={`sms:8324271674?body=${encodeURIComponent(selectedIssue.smsMessage)}`}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/25 hover:bg-black/35 border border-white/20 text-white font-semibold text-sm transition active:scale-[0.98]"
            >
              <Chats weight="bold" className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Text Emergency</span>
              <span className="sm:hidden">SMS</span>
            </a>

            {/* Copy Number Button */}
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/15 text-white/90 text-xs font-semibold transition"
              title="Copy phone number to clipboard"
            >
              {copied ? (
                <>
                  <Check weight="bold" className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy weight="bold" className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>

            {/* Desktop Dismiss */}
            <button
              onClick={() => setIsDismissed(true)}
              className="hidden lg:flex p-2 rounded-lg bg-black/15 hover:bg-black/25 text-white/70 hover:text-white transition ml-1"
              title="Hide emergency banner"
            >
              <X weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Issue Selection & Immediate Guidance Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 pt-3 border-t border-white/15 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                {/* Issue Selection Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-white/80 font-medium mr-1 hidden sm:inline">Select issue:</span>
                  {emergencyIssues.map((issue) => {
                    const IconComponent = issue.icon;
                    const isSelected = issue.id === selectedIssueId;
                    return (
                      <button
                        key={issue.id}
                        onClick={() => setSelectedIssueId(issue.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                          isSelected
                            ? "bg-white text-red-700 shadow-sm font-bold"
                            : "bg-black/20 hover:bg-black/30 text-white/90"
                        }`}
                      >
                        <IconComponent weight={isSelected ? "fill" : "bold"} className="w-3.5 h-3.5" />
                        <span>{issue.title.split(" or ")[0]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Action Guidance */}
                <div className="bg-black/25 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 text-amber-100">
                  <ShieldCheck weight="fill" className="w-4 h-4 shrink-0 text-amber-300" />
                  <span className="truncate max-w-md">
                    <strong className="text-white">Action:</strong> {selectedIssue.urgentGuidance}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
