"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HOTEL_CONFIG } from "@/lib/config";
import { useBookingStore } from "@/lib/bookingStore";
import { generateWhatsAppLink, formatCurrency, WhatsAppResult } from "@/lib/utils";
import {
  Calendar,
  Users,
  BedDouble,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Info,
} from "lucide-react";

interface FormErrors {
  guestName?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  roomType?: string;
}

export default function BookingContact() {
  const { state, setBooking } = useBookingStore();

  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<WhatsAppResult | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!guestName.trim() || guestName.trim().length < 2) {
      newErrors.guestName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim() || phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid telephone number.";
    }

    if (!state.checkIn) {
      newErrors.checkIn = "Please choose a check-in date.";
    }

    if (!state.checkOut) {
      newErrors.checkOut = "Please choose a check-out date.";
    } else if (state.checkIn && new Date(state.checkOut) <= new Date(state.checkIn)) {
      newErrors.checkOut = "Check-out must be after check-in.";
    }

    if (!state.roomType) {
      newErrors.roomType = "Please select a room category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const result = generateWhatsAppLink(HOTEL_CONFIG.contact.whatsappNumber, {
      guestName,
      email,
      phone,
      roomType: state.roomType,
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      guests: state.guests,
      message,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult(result);
      if (result.isConfigured && result.url) {
        try {
          window.open(result.url, "_blank", "noopener,noreferrer");
        } catch {
          // Handled via modal fallback
        }
      }
    }, 400);
  };

  const handleCopySummary = () => {
    if (!submissionResult) return;
    navigator.clipboard.writeText(submissionResult.messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedRoomDetails = HOTEL_CONFIG.rooms.find((r) => r.name === state.roomType);

  return (
    <section
      id="booking"
      aria-label="Reservation Enquiry and Contact"
      className="py-24 sm:py-32 bg-[#F5F2EB]/40 border-t border-[#E8E2D8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservations & Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            Plan Your Haven Stay
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Begin your reservation enquiry. Our concierge will curate every element of your
            itinerary. Enquiries generate a direct reservation message.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEBE4] text-[#717E77] text-xs border border-[#E8E2D8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Demonstration Enquiry Simulation &bull; No live payment or room holds</span>
          </div>
        </div>

        {/* Form & Summary Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-xl border border-[#E8E2D8] shadow-[0_8px_30px_rgba(26,38,33,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#F5F2EB] pb-4">
                <h3 className="font-serif text-xl text-[#1A2621]">Guest Details</h3>
                <p className="text-xs text-[#717E77] mt-0.5">Please provide your contact information.</p>
              </div>

              {/* Guest Information Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="guestName"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Full Name <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <input
                      id="guestName"
                      type="text"
                      placeholder="e.g. Dr. Olumide Adeleke"
                      value={guestName}
                      onChange={(e) => {
                        setGuestName(e.target.value);
                        if (errors.guestName) setErrors({ ...errors, guestName: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border text-sm text-[#1A2621] focus:outline-none focus:ring-1 transition-colors ${
                        errors.guestName
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-[#D8D0C5] focus:border-[#C5A880] focus:ring-[#C5A880]"
                      }`}
                    />
                  </div>
                  {errors.guestName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.guestName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Email Address <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <input
                      id="email"
                      type="email"
                      placeholder="olumide@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border text-sm text-[#1A2621] focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-[#D8D0C5] focus:border-[#C5A880] focus:ring-[#C5A880]"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                >
                  Telephone / WhatsApp Number <span className="text-[#C5A880]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 123 4567"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border text-sm text-[#1A2621] focus:outline-none focus:ring-1 transition-colors ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                        : "border-[#D8D0C5] focus:border-[#C5A880] focus:ring-[#C5A880]"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Stay Preferences */}
              <div className="border-b border-[#F5F2EB] pb-4 pt-4">
                <h3 className="font-serif text-xl text-[#1A2621]">Stay Specifications</h3>
                <p className="text-xs text-[#717E77] mt-0.5">Customize your desired accommodations.</p>
              </div>

              {/* Room & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Room Category */}
                <div>
                  <label
                    htmlFor="formRoomType"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Room Category <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <BedDouble className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <select
                      id="formRoomType"
                      value={state.roomType}
                      onChange={(e) => setBooking({ roomType: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors cursor-pointer"
                    >
                      {HOTEL_CONFIG.rooms.map((room) => (
                        <option key={room.id} value={room.name}>
                          {room.name} ({formatCurrency(room.pricePerNight)} / night sample)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="formGuests"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Number of Guests <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <select
                      id="formGuests"
                      value={state.guests}
                      onChange={(e) => setBooking({ guests: Number(e.target.value) })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors cursor-pointer"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5 Guests</option>
                      <option value={6}>6 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Check In */}
                <div>
                  <label
                    htmlFor="formCheckIn"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Check-In Date <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <input
                      id="formCheckIn"
                      type="date"
                      value={state.checkIn}
                      onChange={(e) => {
                        setBooking({ checkIn: e.target.value });
                        if (errors.checkIn) setErrors({ ...errors, checkIn: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border text-sm text-[#1A2621] focus:outline-none focus:ring-1 transition-colors ${
                        errors.checkIn
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-[#D8D0C5] focus:border-[#C5A880] focus:ring-[#C5A880]"
                      }`}
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                {/* Check Out */}
                <div>
                  <label
                    htmlFor="formCheckOut"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                  >
                    Check-Out Date <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                    <input
                      id="formCheckOut"
                      type="date"
                      value={state.checkOut}
                      onChange={(e) => {
                        setBooking({ checkOut: e.target.value });
                        if (errors.checkOut) setErrors({ ...errors, checkOut: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border text-sm text-[#1A2621] focus:outline-none focus:ring-1 transition-colors ${
                        errors.checkOut
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-[#D8D0C5] focus:border-[#C5A880] focus:ring-[#C5A880]"
                      }`}
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1.5"
                >
                  Special Requests / Dietary Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#86928B] absolute left-3 top-3" />
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. Chauffeured transfer coordination, late check-in, champagne in suite upon arrival..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#FAF8F5] border border-[#D8D0C5] text-sm text-[#1A2621] focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#1A2621] hover:bg-[#2A3B34] text-[#FAF8F5] rounded-sm text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Formatting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C5A880]" />
                      <span>Submit Demonstration Enquiry</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#717E77] text-center mt-2.5">
                  Formats your reservation enquiry. Dispatches via WhatsApp when a hotel business number is configured.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Reservation Summary & Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Live Stay Summary Card */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] shadow-[0_4px_20px_rgba(26,38,33,0.03)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enquiry Summary</span>
              </div>

              <h4 className="font-serif text-xl text-[#1A2621] mb-3">
                {selectedRoomDetails?.name || state.roomType}
              </h4>

              <div className="space-y-3 py-4 border-y border-[#F5F2EB] text-xs">
                <div className="flex justify-between text-[#5F6B64]">
                  <span>Sample Nightly Tariff:</span>
                  <span className="font-semibold text-[#1A2621]">
                    {selectedRoomDetails ? formatCurrency(selectedRoomDetails.pricePerNight) : "Custom"}
                  </span>
                </div>
                <div className="flex justify-between text-[#5F6B64]">
                  <span>Selected Dates:</span>
                  <span className="font-medium text-[#1A2621]">
                    {state.checkIn || "Flexible"} &rarr; {state.checkOut || "Flexible"}
                  </span>
                </div>
                <div className="flex justify-between text-[#5F6B64]">
                  <span>Guest Count:</span>
                  <span className="font-medium text-[#1A2621]">{state.guests} Guest{state.guests > 1 ? "s" : ""}</span>
                </div>
              </div>

              <div className="pt-3 text-[11px] text-[#86928B] leading-relaxed">
                Demonstration rates include breakfast preview, Wi-Fi 6,
                and full access to Azure Pool and wellness pavilion.
              </div>
            </div>

            {/* Direct Reservation Desk Information */}
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E8E2D8]">
              <h4 className="font-serif text-lg text-[#1A2621] mb-2">
                Personal Concierge Assistance
              </h4>
              <p className="text-xs text-[#5F6B64] font-light mb-4">
                Demonstration contact coordinates configured in <code className="bg-[#EFEBE4] px-1 py-0.5 rounded text-[11px]">src/lib/config.ts</code>:
              </p>

              <div className="space-y-3 text-xs text-[#3D4742]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{HOTEL_CONFIG.contact.displayPhone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{HOTEL_CONFIG.contact.email}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E8E2D8] text-[10px] text-[#86928B]">
                WhatsApp Status:{" "}
                <span className="font-medium text-[#5F6B64]">
                  {HOTEL_CONFIG.contact.whatsappNumber
                    ? HOTEL_CONFIG.contact.whatsappNumber
                    : "Demo Mode (Ready for client phone number)"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Submission Modal Dialog (Safe for Demo & Production) */}
      <AnimatePresence>
        {submissionResult && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E2D8] relative text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-2xl text-[#1A2621] mb-2">
                {submissionResult.isConfigured
                  ? "WhatsApp Enquiry Prepared"
                  : "Demonstration Enquiry Formatted"}
              </h3>

              <p className="text-sm text-[#5F6B64] font-light leading-relaxed mb-6">
                {submissionResult.isConfigured ? (
                  <>
                    Your reservation summary for <strong>{state.roomType}</strong> has been generated.
                    Click below to launch WhatsApp and finalize your consultation with the Haven House reservation desk.
                  </>
                ) : (
                  <>
                    Enquiry for <strong>{state.roomType}</strong> successfully formatted. In a live client
                    deployment, this instantly routes to your hotel&apos;s WhatsApp or reservations desk. Below is the generated message ready for client integration.
                  </>
                )}
              </p>

              {/* Formatted summary preview */}
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E8E2D8] text-left text-xs text-[#3D4742] space-y-1 mb-6 font-mono whitespace-pre-line max-h-48 overflow-y-auto">
                {submissionResult.messageText}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {submissionResult.isConfigured ? (
                  <a
                    href={submissionResult.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] rounded-sm text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                  >
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                  </a>
                ) : (
                  <div className="flex-1 p-2.5 rounded bg-[#F5F2EB] border border-[#E8E2D8] text-[11px] text-[#5F6B64] flex items-center gap-2 text-left">
                    <Info className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>WhatsApp business number can be set in <code className="font-semibold text-[#1A2621]">config.ts</code></span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Enquiry Copied" : "Copy Enquiry Details"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSubmissionResult(null)}
                className="mt-5 text-xs text-[#717E77] hover:text-[#1A2621] underline cursor-pointer"
              >
                Close and return to page
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
