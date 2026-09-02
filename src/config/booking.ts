/**
 * Square Appointments & Booking Configuration
 *
 * Direct URL for I Know A Plumber's Square booking & transaction platform.
 */
export const SQUARE_BOOKING_URL =
  "https://app.squareup.com/dashboard/sales/transactions";

export const BOOKING_CONFIG = {
  providerName: "Square Appointments",
  directBookingUrl: SQUARE_BOOKING_URL,
  phoneNumbers: {
    carlos: "(832) 427-1674",
    carlosTel: "tel:8324271674",
  },
  popularServices: [
    "Plumbing Fixtures Sourcing & Installation",
    "Permit Pulling Assistance",
    "Bid Preparation & Estimates",
    "Plumbing Project Support & GC Coordination",
    "Plan Review & Fixture Schedules",
    "Plumbing Troubleshooting & Consultation",
  ],
};
