"use client";

import { useState } from "react";
import { Calendar, Users, BedDouble, Search, AlertCircle, ArrowRight } from "lucide-react";
import { HOTEL_CONFIG } from "@/lib/config";
import { useBookingStore } from "@/lib/bookingStore";

interface BookingBarProps {
  variant?: "hero" | "standalone";
}

export default function BookingBar({ variant = "hero" }: BookingBarProps) {
  const { state, setBooking } = useBookingStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!state.checkIn) {
      setErrorMessage("Please select a check-in date.");
      return;
    }
    if (!state.checkOut) {
      setErrorMessage("Please select a check-out date.");
      return;
    }

    const inDate = new Date(state.checkIn);
    const outDate = new Date(state.checkOut);

    if (outDate <= inDate) {
      setErrorMessage("Check-out date must be after check-in date.");
      return;
    }

    if (state.guests < 1) {
      setErrorMessage("Please select at least 1 guest.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const target = document.getElementById("booking");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div
      className={`w-full max-w-5xl mx-auto rounded-xl transition-all duration-300 ${
        variant === "hero"
          ? "bg-[#FAF8F5]/96 backdrop-blur-md p-4 sm:p-6 shadow-[0_20px_50px_rgba(26,38,33,0.18)] border border-[#E8E2D8]"
          : "bg-white p-6 shadow-md border border-[#E8E2D8]"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Top subtle indicator */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#5F6B64] pb-2 border-b border-[#EFEBE4] gap-2">
          <span className="font-medium flex items-center gap-1.5 text-[#1A2621]">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] inline-block animate-pulse" />
            Check Availability & Sample Tariffs
          </span>
          <span className="text-[11px] text-[#86928B] italic">
            Demonstration Rates in NGN (₦)
          </span>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Check-In */}
          <div className="flex flex-col">
            <label
              htmlFor="checkInDate"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              Check-In Date
            </label>
            <input
              id="checkInDate"
              type="date"
              value={state.checkIn}
              onChange={(e) => {
                setBooking({ checkIn: e.target.value });
                if (errorMessage) setErrorMessage(null);
              }}
              className="w-full px-3 py-2.5 rounded-sm bg-[#F5F2EB]/80 border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col">
            <label
              htmlFor="checkOutDate"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              Check-Out Date
            </label>
            <input
              id="checkOutDate"
              type="date"
              value={state.checkOut}
              onChange={(e) => {
                setBooking({ checkOut: e.target.value });
                if (errorMessage) setErrorMessage(null);
              }}
              className="w-full px-3 py-2.5 rounded-sm bg-[#F5F2EB]/80 border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label
              htmlFor="guestsCount"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5 flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#C5A880]" />
              Guests
            </label>
            <select
              id="guestsCount"
              value={state.guests}
              onChange={(e) => setBooking({ guests: Number(e.target.value) })}
              className="w-full px-3 py-2.5 rounded-sm bg-[#F5F2EB]/80 border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors cursor-pointer"
            >
              <option value={1}>1 Guest (Solo Traveler)</option>
              <option value={2}>2 Guests (Standard)</option>
              <option value={3}>3 Guests (Executive)</option>
              <option value={4}>4 Guests (Family/Group)</option>
              <option value={6}>5–6 Guests (Penthouse)</option>
            </select>
          </div>

          {/* Room Category */}
          <div className="flex flex-col">
            <label
              htmlFor="roomSelect"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5 flex items-center gap-1.5"
            >
              <BedDouble className="w-3.5 h-3.5 text-[#C5A880]" />
              Room / Suite
            </label>
            <select
              id="roomSelect"
              value={state.roomType}
              onChange={(e) => setBooking({ roomType: e.target.value })}
              className="w-full px-3 py-2.5 rounded-sm bg-[#F5F2EB]/80 border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors cursor-pointer"
            >
              <option value="">All Rooms & Suites</option>
              {HOTEL_CONFIG.rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Validation Error Alert */}
        {errorMessage && (
          <div className="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action button and disclaimer notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-[11px] text-[#717E77] text-center sm:text-left">
            * This form initiates an enquiry simulation and will prefill your reservation details below.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] active:scale-[0.99] rounded-sm text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <Search className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Explore Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
