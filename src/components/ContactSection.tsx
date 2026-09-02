import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  CalendarCheck,
  EnvelopeSimple,
  CheckCircle,
  ArrowSquareOut,
  CreditCard,
} from "@phosphor-icons/react";
import { SQUARE_BOOKING_URL } from "@/config/booking";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Plumbing Fixtures & Sourcing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Phone & Instant Square Appointments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#003c7a] text-xs font-semibold">
              <Phone className="w-4 h-4 text-[#0060c0]" weight="bold" />
              <span>Contact &amp; Booking</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#003c7a] tracking-tight">
              Get in Touch or Book Online
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Reach out directly to Carlos Ramos for plumbing fixtures sourcing, permit pulling assistance, bid estimates, or project consultation.
            </p>

            {/* Direct Call Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Direct Contact
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Carlos Ramos
                  </h4>
                  <p className="text-xs text-slate-500">
                    Owner &amp; Project Lead
                  </p>
                </div>
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#003c7a] text-white hover:bg-[#002f60] font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-300" weight="fill" />
                  <span>(832) 427-1674</span>
                </a>
              </div>
            </div>

            {/* Instant Square Booking Card */}
            <div className="p-5 rounded-2xl bg-[#003c7a] text-white space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-200 uppercase tracking-wider">
                  Square Appointments
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20">
                  Instant Online
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                Schedule a consultation or service appointment directly on our Square portal.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href={SQUARE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#0060c0] hover:bg-[#0050a0] text-white text-xs font-bold transition-transform active:scale-[0.98]"
                >
                  <span>Book on Square</span>
                  <ArrowSquareOut className="w-3.5 h-3.5" weight="bold" />
                </a>

                <Button
                  onClick={onOpenBooking}
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs h-10 rounded-full"
                >
                  <CalendarCheck className="w-3.5 h-3.5 mr-1.5 text-sky-300" weight="bold" />
                  Quick Form
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Minimalist Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#003c7a] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below and Carlos Ramos will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" weight="fill" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Carlos Ramos will contact you at{" "}
                    <span className="font-semibold">{formData.phone}</span>.
                  </p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "Plumbing Fixtures & Sourcing",
                        message: "",
                      });
                    }}
                    className="bg-[#003c7a] hover:bg-[#002f60] text-white text-xs rounded-full mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="cnt-name"
                        className="text-xs font-semibold text-slate-700 block mb-1"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="cnt-name"
                        placeholder="Full name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-slate-50/60 text-sm rounded-xl"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="cnt-phone"
                        className="text-xs font-semibold text-slate-700 block mb-1"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="cnt-phone"
                        type="tel"
                        placeholder="(832) 000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-slate-50/60 text-sm rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="cnt-email"
                        className="text-xs font-semibold text-slate-700 block mb-1"
                      >
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="cnt-email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-slate-50/60 text-sm rounded-xl"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="cnt-subject"
                        className="text-xs font-semibold text-slate-700 block mb-1"
                      >
                        Service Required
                      </Label>
                      <select
                        id="cnt-subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full h-10 px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      >
                        <option value="Plumbing Fixtures & Sourcing">
                          Plumbing Fixtures &amp; Sourcing
                        </option>
                        <option value="City Permit Pulling Assistance">
                          City Permit Pulling Assistance
                        </option>
                        <option value="Bid Preparation & Estimates">
                          Bid Preparation &amp; Estimates
                        </option>
                        <option value="Contractor & Project Support">
                          Contractor &amp; Project Support
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="cnt-msg"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Project Details / Scope *
                    </Label>
                    <Textarea
                      id="cnt-msg"
                      placeholder="Briefly describe your plumbing project, fixture schedule, or permit needs..."
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-slate-50/60 text-sm resize-none rounded-xl"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="submit"
                      className="bg-[#003c7a] hover:bg-[#002f60] text-white font-medium text-xs sm:text-sm h-11 px-7 rounded-full shadow-sm"
                    >
                      <EnvelopeSimple className="w-4 h-4 mr-2 text-sky-300" weight="bold" />
                      Send Message
                    </Button>
                    <span className="text-xs text-slate-500">
                      * Required
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
