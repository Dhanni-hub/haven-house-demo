"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOTEL_CONFIG } from "@/lib/config";
import { Sparkles, Clock, Check, Utensils, Waves, Flower2, Users } from "lucide-react";

const experienceIcons = {
  dining: Utensils,
  pool: Waves,
  wellness: Flower2,
  events: Users,
};

export default function Experiences() {
  return (
    <section
      id="experiences"
      aria-label="Hotel Experiences at Haven House"
      className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Lifestyle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
            Hotel Experiences & Rituals
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B64] font-light leading-relaxed">
            Beyond luxurious quarters, Haven House provides holistic sanctuary living:
            exceptional cuisine, restorative thermal hydrotherapy, and inspiring cultural spaces.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="space-y-16 lg:space-y-24">
          {HOTEL_CONFIG.experiences.map((exp, index) => {
            const isReversed = index % 2 === 1;
            const Icon = experienceIcons[exp.id as keyof typeof experienceIcons] || Sparkles;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-[#E8E2D8] shadow-[0_12px_36px_rgba(26,38,33,0.06)] group">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Subtle category badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm flex items-center gap-2 border border-[#E8E2D8] shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A2621]">
                        {exp.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-2">
                    <span>{exp.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A2621] mb-4">
                    {exp.title}
                  </h3>

                  <p className="text-base text-[#4A5550] leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D4742]">
                        <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operating Hours */}
                  <div className="pt-4 border-t border-[#E8E2D8] flex items-center gap-2 text-xs text-[#717E77]">
                    <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{exp.hours}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
