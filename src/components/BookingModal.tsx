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
  Wrench,
} from "@phosphor-icons/react";

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
      <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden border-slate-200">
        <div className="bg-[#0D3155] p-6 text-white text-left">
          <div className="flex items-center gap-2.5 text-sky-400 text-sm font-semibold mb-1">
            <CalendarCheck className="w-5 h-5" weight="bold" />
            <span>Ramos Plumbing Services</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-white tracking-tight">
            Schedule an Appointment
          </DialogTitle>
          <DialogDescription className="text-sky-100/90 text-sm mt-1">
            Select your service needs or consultation time. We will promptly
            confirm your appointment.
          </DialogDescription>
        </div>

        <div className="p-6 pt-4 text-left">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" weight="fill" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>.
                  Carlos or Monica Ramos will review your request for{" "}
                  <span className="font-semibold text-sky-700">{service}</span>{" "}
                  and call you shortly at{" "}
                  <span className="font-semibold">{formData.phone}</span>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-sm text-slate-700 space-y-1.5 max-w-md mx-auto">
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
                  className="bg-[#0D3155] hover:bg-[#09223c] text-white"
                >
                  Done
                </Button>
                <a
                  href="tel:8324271674"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-sky-600" weight="bold" />
                  Call Carlos: (832) 427-1674
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label
                    htmlFor="service-select"
                    className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block"
                  >
                    Select Required Service
                  </Label>
                  <select
                    id="service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3 py-2 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    required
                  >
                    <option value="Plumbing Fixtures Sourcing & Installation">
                      Plumbing Fixtures (Sinks, Faucets, Showers, Toilets)
                    </option>
                    <option value="Permit Pulling Assistance">
                      Permit Pulling & City Filing Assistance
                    </option>
                    <option value="Bid Preparation & Estimating">
                      Bid Preparation & Project Estimating
                    </option>
                    <option value="Plumbing Project Support & Contractor Coordination">
                      Plumbing Project Support & GC Coordination
                    </option>
                    <option value="Plan Review & Fixture Schedules">
                      Plan Review & Fixture Schedule Consultation
                    </option>
                    <option value="Plumbing Troubleshooting & Consultation">
                      Plumbing Consultation / On-Site Inspection
                    </option>
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
                        placeholder="Carlos Ramirez"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="pl-9 text-sm"
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
                        className="pl-9 text-sm"
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
                      Email Address (Optional)
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
                        className="pl-9 text-sm"
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
                      className="text-sm"
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
                    className="w-full h-10 px-3 py-2 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                    Project Details or Scope (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Briefly describe what you need (e.g. fixture counts, project timeline, permit questions)..."
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="text-sm resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  type="submit"
                  className="w-full sm:flex-1 h-11 bg-[#0284C7] hover:bg-[#0369a1] text-white font-semibold text-sm shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 mr-2" weight="bold" />
                  Confirm Appointment Request
                </Button>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  Prefer direct phone scheduling? Call Carlos:{" "}
                  <a
                    href="tel:8324271674"
                    className="font-bold text-[#0D3155] hover:underline"
                  >
                    (832) 427-1674
                  </a>{" "}
                  or Monica:{" "}
                  <a
                    href="tel:8327459284"
                    className="font-bold text-[#0D3155] hover:underline"
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
