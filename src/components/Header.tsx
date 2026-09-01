import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CalendarCheck,
  List,
  X,
  Clock,
  ShieldCheck,
} from "@phosphor-icons/react";

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm transition-all duration-200">
      {/* Top Professional Contact Ribbon */}
      <div className="bg-[#0D3155] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-sky-100">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-400" weight="bold" />
              Plumbing Services &amp; Project Support
            </span>
            <span className="hidden md:inline-block text-sky-400/60">•</span>
            <span className="inline-flex items-center gap-1.5 text-sky-200">
              <Clock className="w-3.5 h-3.5 text-sky-400" weight="bold" />
              Prompt Response &amp; Consultations
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto text-xs">
            <span className="text-slate-300 hidden lg:inline">Direct Contact:</span>
            <a
              href="tel:8324271674"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition-colors"
              title="Call Carlos Ramos"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" weight="fill" />
              <span>Carlos: (832) 427-1674</span>
            </a>
            <span className="text-slate-400 hidden xs:inline">|</span>
            <a
              href="tel:8327459284"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition-colors"
              title="Call Monica Ramos"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" weight="fill" />
              <span>Monica: (832) 745-9284</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          aria-label="Ramos Plumbing Services Home"
        >
          <Logo variant="navy" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-semibold text-slate-700 hover:text-[#0369a1] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0369a1] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:8324271674"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#0D3155] hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            <Phone className="w-4 h-4 text-[#0369a1]" weight="bold" />
            <span className="hidden xl:inline">Call Now</span>
            <span className="xl:hidden">Call</span>
          </a>

          <Button
            onClick={() => onOpenBooking()}
            className="bg-[#0369a1] hover:bg-[#075985] text-white font-semibold px-4 py-2 text-sm shadow-sm rounded-lg flex items-center gap-2 transition-transform active:scale-[0.98]"
          >
            <CalendarCheck className="w-4 h-4" weight="bold" />
            <span>Book an Appointment</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            onClick={() => onOpenBooking()}
            size="sm"
            className="bg-[#0369a1] hover:bg-[#075985] text-white font-semibold text-xs px-3 sm:hidden"
          >
            Book
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0D3155] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
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

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-[#0369a1] rounded-md transition-colors text-left"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Direct Phone Lines
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:8324271674"
                    className="flex items-center justify-between text-sm font-bold text-[#0D3155] hover:text-sky-700"
                  >
                    <span>Carlos Ramos:</span>
                    <span className="text-[#0369a1]">(832) 427-1674</span>
                  </a>
                  <a
                    href="tel:8327459284"
                    className="flex items-center justify-between text-sm font-bold text-[#0D3155] hover:text-sky-700"
                  >
                    <span>Monica Ramos:</span>
                    <span className="text-[#0369a1]">(832) 745-9284</span>
                  </a>
                </div>
              </div>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#0369a1] hover:bg-[#075985] text-white font-semibold py-2.5 text-sm rounded-lg"
              >
                <CalendarCheck className="w-4 h-4 mr-2" weight="bold" />
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
