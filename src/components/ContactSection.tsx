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
} from "@phosphor-icons/react";

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
    subject: "Plumbing Service Inquiry",
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
      className="py-16 sm:py-24 bg-white border-b border-slate-200 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Phone Numbers & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4 text-[#0369a1]" weight="bold" />
              <span>Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3155] tracking-tight">
              Get in Touch Directly
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              We are ready to assist with your plumbing fixtures, permit pulling,
              project estimates, and service inquiries. Reach out to Carlos or
              Monica Ramos directly by phone or submit the quick contact form.
            </p>

            {/* Prominent Direct Phone Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Primary Contact / Project Inquiries
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Carlos Ramos
                    </h4>
                    <p className="text-xs text-slate-500">
                      Plumbing Services &amp; Project Support
                    </p>
                  </div>
                  <a
                    href="tel:8324271674"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D3155] text-white hover:bg-sky-700 font-bold text-xs transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-300" weight="fill" />
                    <span>(832) 427-1674</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Secondary Line / Scheduling &amp; Support
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Monica Ramos
                    </h4>
                    <p className="text-xs text-slate-500">
                      Customer Coordination &amp; Administration
                    </p>
                  </div>
                  <a
                    href="tel:8327459284"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D3155] text-white hover:bg-sky-700 font-bold text-xs transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-300" weight="fill" />
                    <span>(832) 745-9284</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick appointment prompt */}
            <div className="pt-2">
              <Button
                onClick={onOpenBooking}
                className="w-full bg-[#0369a1] hover:bg-[#075985] text-white font-semibold h-11 text-sm rounded-lg"
              >
                <CalendarCheck className="w-4 h-4 mr-2" weight="bold" />
                Schedule an Appointment Online
              </Button>
            </div>
          </div>

          {/* Right Column: Clean, Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-[#0D3155] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the fields below and we will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" weight="fill" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Received
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>.
                    Carlos or Monica Ramos will review your inquiry and reach out
                    to you at{" "}
                    <span className="font-semibold">{formData.phone}</span> as
                    soon as possible.
                  </p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "Plumbing Service Inquiry",
                        message: "",
                      });
                    }}
                    className="bg-[#0D3155] hover:bg-[#071c32] text-white text-xs font-semibold"
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
                        className="bg-white text-sm"
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
                        className="bg-white text-sm"
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
                        className="bg-white text-sm"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="cnt-subject"
                        className="text-xs font-semibold text-slate-700 block mb-1"
                      >
                        Inquiry Topic
                      </Label>
                      <select
                        id="cnt-subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                      >
                        <option value="Plumbing Fixtures Sourcing">
                          Plumbing Fixtures Sourcing
                        </option>
                        <option value="City Permit Pulling">
                          Permit Pulling Assistance
                        </option>
                        <option value="Bid Preparation / Estimate">
                          Bid Preparation / Project Estimate
                        </option>
                        <option value="General Project Support">
                          General Project Support
                        </option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="cnt-msg"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Message / Project Details *
                    </Label>
                    <Textarea
                      id="cnt-msg"
                      placeholder="Please share details about your plumbing service needs, timeline, or questions..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-[#0D3155] hover:bg-[#08223c] text-white font-semibold text-sm h-11 px-6 shadow-sm"
                    >
                      <EnvelopeSimple className="w-4 h-4 mr-2" weight="bold" />
                      Send Message
                    </Button>
                    <span className="text-xs text-slate-500">
                      * Required fields
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
