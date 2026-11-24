"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/config";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll
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

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Hotel photo gallery lightbox"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label="Close photo viewer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs tracking-widest font-mono border border-white/20">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label="View previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label="View next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Photo Frame */}
        <div
          className="relative w-full max-w-5xl max-h-[85vh] h-full mx-4 sm:mx-16 flex flex-col justify-center items-center select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-[65vh] sm:h-[72vh] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-contain sm:object-cover"
            />
          </motion.div>

          {/* Caption Bar */}
          <div className="w-full mt-3 px-2 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-white/90 gap-2">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>{currentItem.categoryLabel}</span>
              </div>
              <h4 className="font-serif text-lg text-white">{currentItem.title}</h4>
            </div>
            <p className="text-xs text-white/70 font-light max-w-md text-center sm:text-right">
              {currentItem.description}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
