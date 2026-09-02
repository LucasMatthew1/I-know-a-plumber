import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  CheckCircle,
  ShieldCheck,
  Buildings,
  House,
  Wrench,
  ThumbsUp,
} from "@phosphor-icons/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  category: "contractor" | "homeowner" | "emergency";
  serviceTag: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    role: "Lead Builder & General Contractor",
    company: "Vance Design & Build",
    location: "Houston / The Heights",
    category: "contractor",
    serviceTag: "Permit Pulling & Rough-In",
    rating: 5,
    date: "2 weeks ago",
    quote:
      "Carlos is our go-to for every high-stakes job. When our previous sub delayed a major permit filing with the city, Carlos stepped in, reviewed the schematics, pulled the required municipal permit in record time, and kept our framing schedule on track. Flawless execution.",
    highlight: "Saved our project timeline by fast-tracking municipal permits.",
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "Homeowner",
    location: "Memorial, Houston",
    category: "homeowner",
    serviceTag: "Architectural Fixtures Installation",
    rating: 5,
    date: "1 month ago",
    quote:
      "We ordered specialty European brass fixtures for our master bath remodel that other plumbers refused to touch. Carlos sourced the correct rough-in adaptors, aligned everything with millimeter precision, and tested all pressure lines thoroughly. The bathroom looks like a luxury showroom.",
    highlight: "Expert handling of luxury architectural fixtures with zero leaks.",
  },
  {
    id: "rev-3",
    name: "David Chen",
    role: "Senior Property Manager",
    company: "MetroStar Properties",
    location: "Galleria / Midtown",
    category: "emergency",
    serviceTag: "Emergency Main Line Backup",
    rating: 5,
    date: "3 weeks ago",
    quote:
      "Had a major water supply issue on a multi-unit property on a Sunday afternoon. Called Carlos at I Know A Plumber, and he answered immediately. He was on site within 40 minutes, diagnosed the line failure, and had water safely restored before evening. Truly dependable emergency service.",
    highlight: "40-minute arrival on a weekend emergency. Total lifesaver.",
  },
  {
    id: "rev-4",
    name: "Robert Martinez",
    role: "Remodeling Contractor",
    company: "R&M Renovations",
    location: "Katy & West Houston",
    category: "contractor",
    serviceTag: "Bid Estimating & Coordination",
    rating: 5,
    date: "Last month",
    quote:
      "Carlos's bid preparation and material takeoffs are the sharpest in the business. He gives us realistic, itemized numbers that pass owner review on the first round without surprise change orders. Working with I Know A Plumber makes our estimating look world-class.",
    highlight: "Dead-accurate bid estimates with transparent itemization.",
  },
  {
    id: "rev-5",
    name: "Sarah Jenkins",
    role: "Homeowner",
    location: "Sugar Land, TX",
    category: "homeowner",
    serviceTag: "Tankless Water Heater Upgrade",
    rating: 5,
    date: "2 months ago",
    quote:
      "Carlos helped us pick the right high-efficiency tankless water heater, took care of the gas line sizing, and handled the full inspection process with the city. Clean, polite, fair pricing, and left our garage cleaner than he found it!",
    highlight: "Seamless tankless install and city inspection passed on first visit.",
  },
  {
    id: "rev-6",
    name: "Anthony Brooks",
    role: "Commercial Project Superintendent",
    company: "Apex Construction Group",
    location: "The Woodlands, TX",
    category: "contractor",
    serviceTag: "Commercial Subcontractor Coordination",
    rating: 5,
    date: "1 month ago",
    quote:
      "If you need someone who understands commercial code, backflow prevention, and contractor coordination, Carlos is that guy. Reliable communication, shows up when promised, and always answers his phone. Highly recommended for any general contractor.",
    highlight: "Unmatched trade reliability and commercial code compliance.",
  },
];

interface TestimonialSliderProps {
  onOpenBooking?: (service?: string) => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "contractor" | "homeowner" | "emergency"
  >("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const filteredReviews =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const totalReviews = filteredReviews.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Handle autoplay with safety bounds
  useEffect(() => {
    if (!isAutoPlaying || totalReviews <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide, totalReviews]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const currentReview = filteredReviews[currentIndex] || testimonials[0];

  return (
    <section
      id="reviews"
      aria-label="Client Reviews and Testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-200/80 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Trust Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#003c7a] text-xs font-semibold">
              <Star weight="fill" className="w-3.5 h-3.5 text-amber-500" />
              <span>Verified Client Experiences &amp; Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003c7a] tracking-tight">
              Trusted by Homeowners &amp; Top Contractors
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Read how Carlos Ramos delivers dependable plumbing solutions, permit fast-tracking, and accurate bidding across Greater Houston.
            </p>
          </div>

          {/* Aggregate Rating Scorecard */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-center justify-center bg-blue-50/80 border border-blue-200/60 w-16 h-16 rounded-xl text-[#003c7a]">
              <span className="text-2xl font-display font-extrabold leading-none">4.9</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-2.5 h-2.5" />
                ))}
              </div>
            </div>
            <div className="text-left space-y-0.5">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span>100% Code Approval</span>
                <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                85+ Projects Completed in Houston
              </p>
              <span className="text-xs font-semibold text-[#0060c0] flex items-center gap-1">
                <ShieldCheck weight="fill" className="w-3.5 h-3.5" />
                Licensed &amp; Insured Project Support
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 ${
              activeCategory === "all"
                ? "bg-[#003c7a] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
            }`}
          >
            <ThumbsUp weight={activeCategory === "all" ? "fill" : "bold"} className="w-4 h-4" />
            <span>All Reviews ({testimonials.length})</span>
          </button>
          <button
            onClick={() => setActiveCategory("contractor")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 ${
              activeCategory === "contractor"
                ? "bg-[#003c7a] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
            }`}
          >
            <Buildings weight={activeCategory === "contractor" ? "fill" : "bold"} className="w-4 h-4" />
            <span>Contractors &amp; Builders</span>
          </button>
          <button
            onClick={() => setActiveCategory("homeowner")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 ${
              activeCategory === "homeowner"
                ? "bg-[#003c7a] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
            }`}
          >
            <House weight={activeCategory === "homeowner" ? "fill" : "bold"} className="w-4 h-4" />
            <span>Homeowners</span>
          </button>
          <button
            onClick={() => setActiveCategory("emergency")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 ${
              activeCategory === "emergency"
                ? "bg-[#003c7a] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
            }`}
          >
            <Wrench weight={activeCategory === "emergency" ? "fill" : "bold"} className="w-4 h-4 text-red-500" />
            <span>Emergency &amp; Rapid Fix</span>
          </button>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="relative bg-white rounded-3xl border border-blue-100/80 shadow-lg p-6 sm:p-10 md:p-12 overflow-hidden">
          {/* Subtle Decorative Quote Icon */}
          <Quotes
            weight="fill"
            className="absolute top-6 right-8 w-24 h-24 sm:w-32 sm:h-32 text-blue-50/80 -z-0 select-none pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Review Content */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  {/* Rating Stars & Service Tag */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} weight="fill" className="w-5 h-5" />
                      ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0060c0] px-3 py-1 rounded-full border border-blue-100">
                      {currentReview.serviceTag}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {currentReview.date}
                    </span>
                  </div>

                  {/* Highlight Callout */}
                  <div className="text-lg sm:text-xl font-display font-bold text-[#003c7a] leading-snug">
                    &ldquo;{currentReview.highlight}&rdquo;
                  </div>

                  {/* Full Body Review Quote */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                    &ldquo;{currentReview.quote}&rdquo;
                  </p>

                  {/* Author Information */}
                  <div className="pt-2 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003c7a] to-[#0060c0] text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0">
                      {currentReview.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {currentReview.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        {currentReview.role}
                        {currentReview.company && ` • ${currentReview.company}`}
                      </p>
                      <p className="text-xs text-[#0060c0] font-semibold">
                        📍 {currentReview.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Callout Box / Action */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#003c7a] to-[#002f60] text-white p-6 rounded-2xl shadow-inner space-y-4 text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                      Need Similar Results?
                    </span>
                    <h4 className="text-lg font-display font-bold text-white leading-tight">
                      Talk Directly with Carlos Ramos
                    </h4>
                    <p className="text-xs text-blue-100/90 leading-relaxed">
                      Whether you are an owner planning a project or a contractor needing permit &amp; plumbing estimating support.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:8324271674"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-[#003c7a] text-xs sm:text-sm font-bold shadow-sm hover:bg-blue-50 transition active:scale-[0.98]"
                    >
                      <span>Call (832) 427-1674</span>
                    </a>
                    {onOpenBooking && (
                      <button
                        onClick={() => onOpenBooking(currentReview.serviceTag)}
                        className="w-full py-2.5 px-4 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-white/20 text-white text-xs sm:text-sm font-semibold transition text-center"
                      >
                        Request Quote / Consultation
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Navigation Buttons & Pagination Indicators */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Step Dots */}
            <div className="flex items-center gap-2">
              {filteredReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-[#0060c0]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="text-xs text-slate-600 ml-2 font-medium">
                {currentIndex + 1} of {totalReviews}
              </span>
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#003c7a] text-slate-700 flex items-center justify-center border border-slate-200 transition active:scale-95"
                aria-label="Previous testimonial"
              >
                <CaretLeft weight="bold" className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-[#003c7a] hover:bg-[#002f60] text-white flex items-center justify-center shadow-sm transition active:scale-95"
                aria-label="Next testimonial"
              >
                <CaretRight weight="bold" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
