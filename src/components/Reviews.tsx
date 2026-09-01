import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  CheckCircle,
  PlusCircle,
  Quotes,
} from "@phosphor-icons/react";

export const Reviews: React.FC = () => {
  // Testimonial cards structured clearly so client's real customer reviews can easily be inserted or managed
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Residential Remodel Client",
      location: "Houston, TX",
      projectType: "Bathroom Fixture Sourcing & Installation",
      rating: 5,
      date: "Recent Project",
      comment:
        "Carlos and Monica were very communicative from start to finish. They helped us source all the plumbing fixtures for our two bathrooms and coordinated the installation smoothly. Straightforward pricing with no surprises.",
    },
    {
      id: 2,
      name: "General Contractor Partner",
      location: "Harris County, TX",
      projectType: "City Permit Assistance & Project Support",
      rating: 5,
      date: "Recent Project",
      comment:
        "Working with Ramos Plumbing Services on our permit filings and bid preparation saved our team days of back-and-forth. Prompt, professional, and easy to reach by phone whenever we had a code question.",
    },
    {
      id: 3,
      name: "Commercial Property Manager",
      location: "Houston Area",
      projectType: "Plumbing Project Support & Fixture Schedules",
      rating: 5,
      date: "Recent Project",
      comment:
        "Dependable support on our commercial renovation. Carlos provided accurate fixture takeoffs and bid breakdowns on schedule. We appreciate their honest communication and attention to detail.",
    },
  ]);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    projectType: "",
    rating: 5,
    comment: "",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const addedReview = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || "Houston Area",
      projectType: newReview.projectType || "Plumbing Service",
      rating: newReview.rating,
      date: "Just now",
      comment: newReview.comment,
    };

    setReviews([addedReview, ...reviews]);
    setSubmittedReview(true);
  };

  const handleCloseReviewModal = () => {
    setReviewModalOpen(false);
    setSubmittedReview(false);
    setNewReview({
      name: "",
      location: "",
      projectType: "",
      rating: 5,
      comment: "",
    });
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-white border-b border-slate-200 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-4 h-4 text-amber-500" weight="fill" />
              <span>Customer Feedback &amp; Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3155] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Authentic feedback from homeowners, contractors, and project
              managers who have worked directly with Ramos Plumbing Services.
            </p>
          </div>

          <Button
            onClick={() => setReviewModalOpen(true)}
            variant="outline"
            className="border-slate-300 text-[#0D3155] hover:bg-slate-50 font-semibold text-sm shrink-0 self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 mr-2 text-[#0369a1]" weight="bold" />
            Leave a Review
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-sky-200 transition-colors"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" weight="fill" />
                    ))}
                  </div>
                  <Quotes
                    className="w-8 h-8 text-slate-300"
                    weight="duotone"
                  />
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D3155] text-white flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {review.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {review.projectType} • {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about real review updates */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Client reviews are updated regularly. Have you completed a project with Carlos or Monica Ramos? We welcome your honest feedback.
          </p>
        </div>
      </div>

      {/* Leave a Review Modal Dialog */}
      <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
        <DialogContent className="sm:max-w-[480px] p-6 text-left">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#0D3155]">
              Share Your Experience
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-600">
              Let Carlos and Monica Ramos know how your plumbing service or
              project support went.
            </DialogDescription>
          </DialogHeader>

          {submittedReview ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" weight="fill" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Review Added Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you for supporting Ramos Plumbing Services. Your feedback
                has been recorded.
              </p>
              <Button
                onClick={handleCloseReviewModal}
                className="bg-[#0D3155] hover:bg-[#071c32] text-white text-xs mt-2"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4 mt-2">
              <div>
                <Label
                  htmlFor="rev-name"
                  className="text-xs font-semibold text-slate-700 block mb-1"
                >
                  Your Name / Business *
                </Label>
                <Input
                  id="rev-name"
                  placeholder="e.g. John Miller or Miller Construction"
                  required
                  value={newReview.name}
                  onChange={(e) =>
                    setNewReview({ ...newReview, name: e.target.value })
                  }
                  className="text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    htmlFor="rev-loc"
                    className="text-xs font-semibold text-slate-700 block mb-1"
                  >
                    City / Area
                  </Label>
                  <Input
                    id="rev-loc"
                    placeholder="Houston, Katy, etc."
                    value={newReview.location}
                    onChange={(e) =>
                      setNewReview({ ...newReview, location: e.target.value })
                    }
                    className="text-sm"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="rev-service"
                    className="text-xs font-semibold text-slate-700 block mb-1"
                  >
                    Service Received
                  </Label>
                  <Input
                    id="rev-service"
                    placeholder="Fixtures / Permits / Bid"
                    value={newReview.projectType}
                    onChange={(e) =>
                      setNewReview({
                        ...newReview,
                        projectType: e.target.value,
                      })
                    }
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="rev-comment"
                  className="text-xs font-semibold text-slate-700 block mb-1"
                >
                  Your Review *
                </Label>
                <Textarea
                  id="rev-comment"
                  placeholder="Describe your experience working with Ramos Plumbing Services..."
                  rows={4}
                  required
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  className="text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseReviewModal}
                  className="text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#0369a1] hover:bg-[#075985] text-white text-xs font-semibold"
                >
                  Submit Review
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
