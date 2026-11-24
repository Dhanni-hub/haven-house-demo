"use client";

import { motion } from "framer-motion";
import { HOTEL_CONFIG } from "@/lib/config";
import { Star, Quote, Sparkles, AlertCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Guest Testimonials"
      className="py-24 sm:py-32 bg-[#F5F2EB]/50 border-t border-[#E8E2D8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reflections & Accolades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            Guest Impressions
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Exemplary reflections illustrating the quiet refinement and intuitive care
            that define our residence.
          </p>

          {/* Demonstration Notice Badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEBE4] text-[#717E77] text-xs border border-[#E8E2D8]">
            <AlertCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Fictional Demonstration Reviews &bull; Portfolio Sample Content</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTEL_CONFIG.testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white p-8 rounded-xl border border-[#E8E2D8] shadow-[0_4px_20px_rgba(26,38,33,0.03)] hover:shadow-[0_12px_32px_rgba(26,38,33,0.06)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Subtle Quote Icon */}
              <div className="absolute top-6 right-6 text-[#EFEBE4] group-hover:text-[#C5A880]/30 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#C5A880] mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg text-[#1A2621] leading-relaxed italic mb-8 relative z-10">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author & Stay Details */}
              <div className="pt-6 border-t border-[#F5F2EB]">
                <h4 className="text-sm font-semibold text-[#1A2621]">
                  {test.author}
                </h4>
                <p className="text-xs text-[#717E77] mt-0.5">{test.role}</p>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#86928B]">
                  <span className="font-medium text-[#5F6B64]">{test.roomStayed}</span>
                  <span>{test.stayDate}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
