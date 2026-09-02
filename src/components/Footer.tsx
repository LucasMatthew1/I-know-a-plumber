import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import {
  Phone,
  CalendarCheck,
} from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenBooking: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(
    null
  );

  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#002f60] text-white text-left pt-14 pb-20 sm:pb-12 border-t border-[#00244a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-white/10 items-start">
          {/* Col 1: Brand & Direct Line */}
          <div className="md:col-span-6 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sky-100/75 text-xs sm:text-sm leading-relaxed max-w-md">
              Dependable plumbing services, architectural fixture sourcing, municipal permit pulling assistance, and contractor project support.
            </p>

            <div className="pt-1">
              <a
                href="tel:8324271674"
                className="hover:text-sky-300 transition-colors inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Phone className="w-4 h-4 text-sky-300" weight="fill" />
                <span>Carlos Ramos: (832) 427-1674</span>
              </a>
            </div>
          </div>

          {/* Col 2: Concise Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-100/80 font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#reviews");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#about");
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Carlos Ramos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Book
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Appointment Trigger */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
              Appointments
            </h4>
            <p className="text-xs text-sky-100/75 leading-relaxed">
              Book a consultation or request an itemized bid for your project.
            </p>

            <Button
              onClick={() => onOpenBooking()}
              className="w-full bg-white hover:bg-slate-100 text-[#003c7a] font-semibold text-xs sm:text-sm h-10 rounded-full flex items-center justify-center gap-2 shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-[#0060c0]" weight="bold" />
              <span>Book Appointment</span>
            </Button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/60">
          <p>
            &copy; {currentYear} I Know A Plumber. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Dialog */}
      <Dialog
        open={legalModal !== null}
        onOpenChange={(open) => !open && setLegalModal(null)}
      >
        <DialogContent className="sm:max-w-[500px] text-left p-6 rounded-2xl max-h-[90dvh] overflow-y-auto overscroll-contain">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-xl font-bold text-[#003c7a]">
              {legalModal === "privacy"
                ? "Privacy Policy"
                : "Terms of Service"}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              I Know A Plumber • Last updated {currentYear}
            </DialogDescription>
          </DialogHeader>

          <div className="text-xs text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {legalModal === "privacy" ? (
              <>
                <p>
                  At I Know A Plumber, we respect your privacy.
                  Information collected through this website (such as name, phone
                  number, email, and service requests) is used solely to respond
                  to your inquiries, schedule appointments, and coordinate
                  plumbing project services.
                </p>
                <p>
                  We do not sell, rent, or distribute your personal contact
                  information to third-party marketers.
                </p>
              </>
            ) : (
              <>
                <p>
                  All services, fixture consultations, permit assistance, and
                  project bids provided by I Know A Plumber are subject
                  to mutual agreement and project specifications.
                </p>
                <p>
                  For immediate service questions or appointment updates, please
                  contact Carlos Ramos at (832) 427-1674.
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};
