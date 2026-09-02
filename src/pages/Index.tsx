import React, { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { QuickCallBar } from "@/components/QuickCallBar";
import { BookingModal } from "@/components/BookingModal";

const Index: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "General Inquiry / Service"
  );

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-blue-500/20 selection:text-[#003c7a] pb-24 sm:pb-0">
      {/* Brand Preloader Animation */}
      <Preloader />

      {/* Sleek Header with Prominently Sized Logo & Direct Call Pill */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* High-Impact Hero with Direct Call CTA & Core Badges */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4 Core Plumbing & Contractor Services */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Authentic Background & Key Highlights */}
        <About onOpenBooking={() => handleOpenBooking("General Consultation")} />

        {/* Unified Contact & Instant Square Booking Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking("Direct Inquiry")} />
      </main>

      {/* Elegant Navy Footer with Large Logo */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky 1-Tap Call & Book Bar */}
      <QuickCallBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal Dialog */}
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultService={selectedService}
      />
    </div>
  );
};

export default Index;
