import React from "react";
import { Phone, CalendarCheck } from "@phosphor-icons/react";

interface QuickCallBarProps {
  onOpenBooking: () => void;
}

export const QuickCallBar: React.FC<QuickCallBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:8324271674"
          className="inline-flex items-center justify-center gap-1.5 h-11 px-3 text-xs font-bold text-[#0D3155] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
        >
          <Phone className="w-4 h-4 text-[#0369a1]" weight="fill" />
          <span>Call (832) 427-1674</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-1.5 h-11 px-3 text-xs font-bold text-white bg-[#0369a1] hover:bg-[#075985] rounded-lg shadow-sm transition-colors"
        >
          <CalendarCheck className="w-4 h-4" weight="bold" />
          <span>Book Appointment</span>
        </button>
      </div>
    </aside>
  );
};
