"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HOTEL_CONFIG, Room } from "@/lib/config";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/lib/bookingStore";
import { Users, BedDouble, ArrowUpRight, Sparkles, Check, Info } from "lucide-react";
import RoomModal from "./RoomModal";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const { setBooking } = useBookingStore();

  const handleQuickBook = (room: Room) => {
    setBooking({ roomType: room.name });
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="rooms"
      aria-label="Rooms and Suites at Haven House"
      className="py-24 sm:py-32 bg-[#F5F2EB]/60 border-y border-[#E8E2D8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            Rooms & Private Suites
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Four masterfully crafted residential configurations, each designed to foster
            stillness, restorative slumber, and unhurried coastal living.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEBE4] text-[#717E77] text-xs">
            <Info className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Sample demonstration rates shown in Nigerian Naira (NGN)</span>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {HOTEL_CONFIG.rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-xl overflow-hidden border border-[#E8E2D8] shadow-[0_4px_20px_rgba(26,38,33,0.04)] hover:shadow-[0_16px_40px_rgba(26,38,33,0.08)] transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={room.image}
                  alt={`${room.name} interior - Haven House`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge if present */}
                {room.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-[#1A2621]/90 backdrop-blur-xs text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-sm border border-[#C5A880]/30 shadow-xs">
                    {room.badge}
                  </div>
                )}

                {/* Price Tag Pill */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#FAF8F5]/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm shadow-md border border-[#E8E2D8]">
                  <div className="text-[10px] text-[#717E77] uppercase tracking-wider">Sample Rate</div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#1A2621]">
                    {formatCurrency(room.pricePerNight)}
                    <span className="text-xs font-normal text-[#5F6B64] font-sans"> / night</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3 className="font-serif text-2xl text-[#1A2621] group-hover:text-[#C5A880] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#717E77] font-medium tracking-wide mt-1">
                      {room.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4A5550] font-light leading-relaxed mb-5 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#F0EBE1] text-xs text-[#5F6B64] mb-5">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span className="truncate">{room.bed}</span>
                    </div>
                  </div>

                  {/* Key Amenities Preview */}
                  <div className="space-y-1.5 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#5F6B64]">
                        <Check className="w-3 h-3 text-[#C5A880] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-sm border border-[#D8D0C5] text-xs uppercase tracking-[0.14em] font-semibold text-[#1A2621] hover:bg-[#F5F2EB] hover:border-[#1A2621] transition-all cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickBook(room)}
                    className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-sm bg-[#1A2621] hover:bg-[#2A3B34] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <span>Book Suite</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Dialog with key to automatically reset internal state when switching rooms */}
      <RoomModal
        key={selectedRoom?.id || "empty"}
        room={selectedRoom}
        isOpen={Boolean(selectedRoom)}
        onClose={() => setSelectedRoom(null)}
      />
    </section>
  );
}
