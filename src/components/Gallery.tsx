"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HOTEL_CONFIG, GalleryItem } from "@/lib/config";
import { Sparkles, Maximize2 } from "lucide-react";
import Lightbox from "./Lightbox";

type FilterKey = "all" | "rooms" | "dining" | "wellness" | "spaces";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Photographs" },
  { key: "rooms", label: "Suites & Rooms" },
  { key: "dining", label: "Dining & Bar" },
  { key: "wellness", label: "Wellness & Pool" },
  { key: "spaces", label: "Architecture & Grounds" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index in filteredItems or full gallery
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        (prev ?? 0) === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  return (
    <section
      id="gallery"
      aria-label="Haven House Photography Gallery"
      className="py-24 sm:py-32 bg-[#FAF8F5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            The Haven Visual Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Glimpses into our sunlit sanctuaries, culinary moments, and serene coastal architecture.
            Click any photograph to view in high resolution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1A2621] text-[#FAF8F5] shadow-xs"
                    : "bg-[#F5F2EB] text-[#5F6B64] hover:bg-[#EFEBE4] hover:text-[#1A2621] border border-[#E8E2D8]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-neutral-100 border border-[#E8E2D8] shadow-[0_4px_16px_rgba(26,38,33,0.04)] hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A17]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-0.5">
                        {item.categoryLabel}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
