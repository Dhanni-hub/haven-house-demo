"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Room } from "@/lib/config";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/lib/bookingStore";
import { X, Users, BedDouble, Maximize2, Eye, Check, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { setBooking } = useBookingStore();

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!room) return null;

  const allImages = [room.image, ...(room.additionalImages || [])];

  const handleBookRoom = () => {
    setBooking({ roomType: room.name });
    onClose();
    setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="room-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#1A2621] rounded-xl shadow-2xl border border-[#E8E2D8] overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
          >
            {/* Header Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#1A2621] shadow-md border border-[#E8E2D8] transition-all hover:scale-105"
              aria-label="Close suite details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
              {/* Photo Showcase with Thumbnails */}
              <div className="space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#E8E2D8] shadow-sm bg-neutral-100">
                  <Image
                    src={allImages[activeImageIndex]}
                    alt={`${room.name} interior photography`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover transition-all duration-300"
                  />
                  {room.badge && (
                    <div className="absolute top-3 left-3 bg-[#1A2621]/90 backdrop-blur-xs text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-sm border border-[#C5A880]/30">
                      {room.badge}
                    </div>
                  )}
                </div>

                {/* Thumbnail strip */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-14 rounded-sm overflow-hidden shrink-0 border-2 transition-all ${
                          activeImageIndex === idx
                            ? "border-[#C5A880] scale-95"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`View photo ${idx + 1} of ${room.name}`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Pricing Banner */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E8E2D8]">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Luxury Suite Collection</span>
                  </div>
                  <h3
                    id="room-modal-title"
                    className="font-serif text-2xl sm:text-3xl text-[#1A2621]"
                  >
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#717E77] mt-1">{room.tagline}</p>
                </div>

                <div className="text-left md:text-right bg-[#F5F2EB] p-3 rounded-lg border border-[#E8E2D8] shrink-0">
                  <div className="text-xs text-[#717E77]">From (Sample Rate)</div>
                  <div className="font-serif text-2xl font-bold text-[#1A2621]">
                    {formatCurrency(room.pricePerNight)}
                  </div>
                  <div className="text-[10px] text-[#86928B] uppercase tracking-wider">
                    Per Night &bull; Non-binding Demonstration
                  </div>
                </div>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D8]">
                  <Users className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#717E77] block">Capacity</span>
                    <span className="text-xs font-semibold text-[#1A2621]">{room.capacity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D8]">
                  <BedDouble className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#717E77] block">Bedding</span>
                    <span className="text-xs font-semibold text-[#1A2621]">{room.bed}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D8]">
                  <Maximize2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#717E77] block">Room Size</span>
                    <span className="text-xs font-semibold text-[#1A2621]">{room.size}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D8]">
                  <Eye className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#717E77] block">View</span>
                    <span className="text-xs font-semibold text-[#1A2621]">{room.view}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1A2621] mb-2">
                  Suite Architecture & Concept
                </h4>
                <p className="text-sm text-[#4A5550] leading-relaxed font-light">
                  {room.longDescription || room.description}
                </p>
              </div>

              {/* Amenities Grid */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1A2621] mb-3">
                  Included Luxury Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-xs text-[#3D4742] bg-white/80 p-2.5 rounded border border-[#E8E2D8]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-[#717E77] text-center sm:text-left">
                  Selecting this suite will configure your enquiry form below.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-sm border border-[#D8D0C5] text-xs uppercase tracking-wider font-semibold text-[#1A2621] hover:bg-[#F5F2EB]"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleBookRoom}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#1A2621] hover:bg-[#2A3B34] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Select & Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
