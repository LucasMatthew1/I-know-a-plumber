import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { BookingSection } from "@/components/BookingSection";
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
      {/* Primary Header with Dual Phone Contact Ribbon and Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Hero Section with Direct Phone CTAs & Trust Badges */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Carlos & Monica Ramos / Authentic Company Background */}
        <About onOpenBooking={() => handleOpenBooking("General Consultation")} />

        {/* 6 Clean Plumbing Services Cards */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Why Choose Us Credibility Highlights */}
        <WhyChooseUs />

        {/* Real Customer Reviews & Feedback Structure */}
        <Reviews />

        {/* Dedicated Appointment Booking Section & Integration Bridge */}
        <BookingSection onOpenBooking={handleOpenBooking} />

        {/* Contact Section with Dual Phone Numbers & Simple Message Form */}
        <ContactSection onOpenBooking={() => handleOpenBooking("Direct Inquiry")} />
      </main>

      {/* Professional Footer */}
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
