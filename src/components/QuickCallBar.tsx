import React from "react";
import { Phone, CalendarCheck } from "@phosphor-icons/react";

interface QuickCallBarProps {
  onOpenBooking: () => void;
}

export const QuickCallBar: React.FC<QuickCallBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-2 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:8324271674"
          className="inline-flex items-center justify-center gap-1.5 h-10 px-3 text-xs font-semibold text-slate-800 bg-blue-50/70 hover:bg-blue-100 border border-blue-100 rounded-full transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#0060c0]" weight="fill" />
          <span>(832) 427-1674</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-1.5 h-10 px-3 text-xs font-medium text-white bg-[#003c7a] hover:bg-[#002f60] rounded-full shadow-sm transition-colors"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-sky-300" weight="bold" />
          <span>Book Appt</span>
        </button>
      </div>
    </aside>
  );
};
