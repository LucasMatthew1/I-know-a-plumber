import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarCheck,
  Phone,
  CheckCircle,
  Clock,
  User,
  EnvelopeSimple,
  ArrowSquareOut,
  CreditCard,
} from "@phosphor-icons/react";
import { SQUARE_BOOKING_URL, BOOKING_CONFIG } from "@/config/booking";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  open,
  onOpenChange,
  defaultService = "General Inquiry / Service",
}) => {
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning (8AM - 12PM)",
    notes: "",
  });

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "Morning (8AM - 12PM)",
      notes: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden border-slate-200 rounded-3xl">
        {/* Header */}
        <div className="bg-[#003c7a] p-6 text-white text-left">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
              <CalendarCheck className="w-4 h-4" weight="bold" />
              <span>I Know A Plumber</span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/15 px-2.5 py-0.5 rounded-full text-white border border-white/20">
              <CreditCard className="w-3 h-3 text-sky-300" />
              <span>Square Powered</span>
            </span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Schedule an Appointment
          </DialogTitle>
          <DialogDescription className="text-sky-100/80 text-xs sm:text-sm mt-1">
            Book online instantly via Square, or submit a request directly to Carlos and Monica Ramos.
          </DialogDescription>
        </div>

        <div className="p-6 pt-5 text-left space-y-5">
          {/* Direct Square Instant Booking Banner */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#003c7a]">
                <span>Instant Online Scheduling</span>
              </div>
              <p className="text-xs text-slate-600">
                Book and manage appointments directly on our Square portal.
              </p>
            </div>
            <a
              href={SQUARE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0060c0] hover:bg-[#0050a0] text-white text-xs font-bold rounded-full shadow-sm transition-all active:scale-[0.98] shrink-0 w-full sm:w-auto"
            >
              <span>Book on Square</span>
              <ArrowSquareOut className="w-3.5 h-3.5" weight="bold" />
            </a>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Or Send A Quick Booking Request
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" weight="fill" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>.
                  We will review your request for{" "}
                  <span className="font-semibold text-[#0060c0]">{service}</span>{" "}
                  and call you shortly at{" "}
                  <span className="font-semibold">{formData.phone}</span>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs sm:text-sm text-slate-700 space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-medium text-slate-900">{service}</span>
                </div>
                {formData.preferredDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Requested Date:</span>
                    <span className="font-medium text-slate-900">
                      {formData.preferredDate}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Window:</span>
                  <span className="font-medium text-slate-900">
                    {formData.preferredTime}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  onClick={handleReset}
                  className="bg-[#003c7a] hover:bg-[#002f60] text-white rounded-full text-xs"
                >
                  Done
                </Button>
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0060c0]" weight="bold" />
                  Call (832) 427-1674
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 gap-3.5">
                <div>
                  <Label
                    htmlFor="service-select"
                    className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 block"
                  >
                    Select Required Service
                  </Label>
                  <select
                    id="service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    required
                  >
                    {BOOKING_CONFIG.popularServices.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label
                      htmlFor="client-name"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Your Full Name *
                    </Label>
                    <div className="relative">
                      <Input
                        id="client-name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="pl-9 text-xs sm:text-sm rounded-lg"
                      />
                      <User
                        className="w-4 h-4 text-slate-400 absolute left-3 top-3"
                        weight="bold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="client-phone"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Input
                        id="client-phone"
                        type="tel"
                        placeholder="(832) 000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="pl-9 text-xs sm:text-sm rounded-lg"
                      />
                      <Phone
                        className="w-4 h-4 text-slate-400 absolute left-3 top-3"
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label
                      htmlFor="client-email"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Email (Optional)
                    </Label>
                    <div className="relative">
                      <Input
                        id="client-email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="pl-9 text-xs sm:text-sm rounded-lg"
                      />
                      <EnvelopeSimple
                        className="w-4 h-4 text-slate-400 absolute left-3 top-3"
                        weight="bold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="pref-date"
                      className="text-xs font-semibold text-slate-700 block mb-1"
                    >
                      Preferred Date
                    </Label>
                    <Input
                      id="pref-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="text-xs sm:text-sm rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="pref-time"
                    className="text-xs font-semibold text-slate-700 block mb-1"
                  >
                    Preferred Time Window
                  </Label>
                  <select
                    id="pref-time"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredTime: e.target.value,
                      })
                    }
                    className="w-full h-10 px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Morning (8AM - 12PM)">
                      Morning (8:00 AM – 12:00 PM)
                    </option>
                    <option value="Early Afternoon (12PM - 3PM)">
                      Early Afternoon (12:00 PM – 3:00 PM)
                    </option>
                    <option value="Late Afternoon (3PM - 6PM)">
                      Late Afternoon (3:00 PM – 6:00 PM)
                    </option>
                    <option value="Flexible / First Available">
                      Flexible / First Available Window
                    </option>
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="notes"
                    className="text-xs font-semibold text-slate-700 block mb-1"
                  >
                    Project Details (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Briefly describe what you need (e.g. fixture counts, permit questions)..."
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="text-xs sm:text-sm resize-none rounded-lg"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-11 bg-[#003c7a] hover:bg-[#002f60] text-white font-medium text-xs sm:text-sm rounded-full shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 mr-2 text-sky-300" weight="bold" />
                  Submit Booking Request
                </Button>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  Prefer direct phone scheduling? Call Carlos:{" "}
                  <a
                    href="tel:8324271674"
                    className="font-bold text-[#003c7a] hover:underline"
                  >
                    (832) 427-1674
                  </a>{" "}
                  or Monica:{" "}
                  <a
                    href="tel:8327459284"
                    className="font-bold text-[#003c7a] hover:underline"
                  >
                    (832) 745-9284
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
