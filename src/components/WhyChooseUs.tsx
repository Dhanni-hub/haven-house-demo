"use client";

import { motion } from "framer-motion";
import { HOTEL_CONFIG } from "@/lib/config";
import { HeartHandshake, BedDouble, Compass, Sparkles } from "lucide-react";

const iconMap = {
  HeartHandshake: HeartHandshake,
  BedDouble: BedDouble,
  Compass: Compass,
  Sparkles: Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Haven House"
      className="py-24 sm:py-32 bg-[#F5F2EB]/50 border-t border-[#E8E2D8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Haven Distinctions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            Why Choose Haven House
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Every operational decision, architectural line, and guest ritual is guided
            by four enduring commitments to hospitality perfection.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOTEL_CONFIG.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName] || Sparkles;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white p-7 rounded-xl border border-[#E8E2D8] shadow-[0_4px_16px_rgba(26,38,33,0.03)] hover:shadow-[0_12px_32px_rgba(26,38,33,0.06)] hover:border-[#C5A880]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] text-[#1A2621] group-hover:bg-[#1A2621] group-hover:text-[#C5A880] group-hover:border-[#1A2621] flex items-center justify-center transition-all duration-300 mb-6 shadow-2xs">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#1A2621] mb-3 group-hover:text-[#C5A880] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A5550] font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle border bottom marker */}
                <div className="pt-6 mt-6 border-t border-[#F5F2EB] flex items-center justify-between text-[11px] text-[#86928B]">
                  <span>0{index + 1}</span>
                  <span className="w-8 h-[1px] bg-[#E8E2D8] group-hover:bg-[#C5A880] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
