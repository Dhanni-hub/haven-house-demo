"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function Introduction() {
  return (
    <section
      id="about"
      aria-label="About Haven House"
      className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5F2EB] rounded-full blur-3xl opacity-60 pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(26,38,33,0.1)] border border-[#E8E2D8]">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Haven House bespoke bedroom suite architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-lg shadow-xl border border-[#E8E2D8] max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A2621]">
                    The Haven Philosophy
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#1A2621] italic leading-snug">
                  &ldquo;A tranquil haven where architectural stillness meets bespoke West African warmth.&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-[#F5F2EB] flex items-center justify-between text-[11px] text-[#717E77]">
                  <span>Victoria Island, Lagos</span>
                  <span className="font-medium text-[#C5A880]">Est. 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A880] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Invitation</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] leading-[1.18] mb-6">
              Hospitality, Thoughtfully Redefined.
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-base sm:text-lg text-[#4A5550] leading-relaxed font-light">
              <p>
                Haven House was conceived as an antidote to formulaic city hotels.
                Nestled within a private, guarded garden enclave in Victoria Island,
                we curate an intimate residential experience where privacy, silence,
                and sensory ease are prioritized above all else.
              </p>
              <p>
                Every element — from the acoustic insulation of our suites to the
                gentle aroma of indigenous cedarwood and wild mint — has been
                calibrated to quiet the mind and rejuvenate the spirit.
              </p>
            </div>

            {/* Key Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 pt-6 border-t border-[#E8E2D8]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A2621] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A2621]">Acoustic Sanctuary</h4>
                  <p className="text-xs text-[#717E77] mt-0.5">Triple-glazed soundproofing for deep, restful sleep.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A2621] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A2621]">Personalized Concierge</h4>
                  <p className="text-xs text-[#717E77] mt-0.5">Discrete 24/7 dedicated assistance tailored to your agenda.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A2621] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A2621]">Culinary Excellence</h4>
                  <p className="text-xs text-[#717E77] mt-0.5">West African seasonal produce elevated to haute cuisine.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A2621] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A2621]">Restorative Wellness</h4>
                  <p className="text-xs text-[#717E77] mt-0.5">Infinity pool, cedar thermal suite, and holistic spa treatments.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#1A2621] hover:text-[#C5A880] transition-colors group"
              >
                <span>View Accommodations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C5A880]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
