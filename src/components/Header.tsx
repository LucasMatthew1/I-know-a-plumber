import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CalendarCheck,
  List,
  X,
  CaretRight,
} from "@phosphor-icons/react";

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact & Book", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-22 sm:h-24 md:h-26 flex items-center justify-between">
        {/* Prominent Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl py-1"
          aria-label="I Know A Plumber Home"
        >
          <Logo variant="navy" size="md" />
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-semibold text-slate-600 hover:text-[#003c7a] transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0060c0] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Direct Contact Pill & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:8324271674"
            className="flex items-center bg-blue-50/90 hover:bg-blue-100/80 border border-blue-200/80 rounded-full px-4 py-2 text-xs text-slate-800 transition-colors shadow-xs group"
            title="Call Carlos Ramos - (832) 427-1674"
          >
            <Phone className="w-3.5 h-3.5 text-[#0060c0] mr-2 shrink-0 group-hover:scale-110 transition-transform" weight="fill" />
            <span className="text-slate-700 mr-1.5 font-medium">Call Carlos:</span>
            <span className="font-bold text-[#003c7a]">(832) 427-1674</span>
          </a>

          <Button
            onClick={() => onOpenBooking()}
            className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium px-5 py-2.5 text-xs sm:text-sm rounded-full shadow-sm flex items-center gap-2 transition-transform active:scale-[0.98]"
          >
            <CalendarCheck className="w-4 h-4 text-sky-300" weight="bold" />
            <span>Book Appt</span>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            onClick={() => onOpenBooking()}
            size="sm"
            className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium text-xs px-3.5 rounded-full"
          >
            Book
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#003c7a] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" weight="bold" />
            ) : (
              <List className="w-6 h-6" weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 text-left">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-[#0060c0] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <CaretRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Direct Line
                </span>
                <a
                  href="tel:8324271674"
                  className="flex items-center justify-between text-sm font-bold text-slate-900 hover:text-[#0060c0]"
                >
                  <span>Carlos Ramos</span>
                  <span className="text-[#0060c0]">(832) 427-1674</span>
                </a>
              </div>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#003c7a] hover:bg-[#002f60] text-white font-medium py-2.5 text-xs rounded-xl shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-sky-300" weight="bold" />
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
