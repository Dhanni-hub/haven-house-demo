"use client";

import { motion } from "framer-motion";
import { HOTEL_CONFIG } from "@/lib/config";
import { MapPin, Compass, ExternalLink, Sparkles, Building2, Layers } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      aria-label="Haven House Location and Surroundings"
      className="py-24 sm:py-32 bg-[#FAF8F5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Client Customization Framework */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Location Showcase</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A2621] tracking-tight mb-4">
              Prime Enclave & Surroundings
            </h2>

            <p className="text-base text-[#4A5550] leading-relaxed font-light mb-6">
              {HOTEL_CONFIG.location.description}
            </p>

            {/* Address Placeholder Box */}
            <div className="bg-[#F5F2EB] p-5 rounded-lg border border-[#E8E2D8] mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A2621] mb-1">
                    Demonstration Location Placeholder
                  </h4>
                  <p className="text-sm text-[#3D4742] font-medium">
                    {HOTEL_CONFIG.location.displayAddress}
                  </p>
                  <p className="text-xs text-[#717E77] mt-1">
                    {HOTEL_CONFIG.location.addressNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Configurable Landmark Features (Replacing fabricated travel times) */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1A2621] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Customizable Property Proximity Slots</span>
              </h4>
              {HOTEL_CONFIG.location.landmarkHighlights.map((slot, i) => (
                <div
                  key={i}
                  className="py-2.5 border-b border-[#EFEBE4] text-xs"
                >
                  <div className="font-semibold text-[#1A2621] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{slot.title}</span>
                  </div>
                  <p className="text-[#5F6B64] font-light mt-0.5 ml-5">
                    {slot.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <div className="flex items-center gap-4">
              <a
                href={HOTEL_CONFIG.location.googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-all shadow-xs hover:shadow-md"
              >
                <span>Preview Regional Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
              <span className="text-[11px] text-[#717E77] italic">
                * Links to client&apos;s verified Google Business listing upon commissioning
              </span>
            </div>
          </motion.div>

          {/* Right Column: Styled Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden border border-[#E8E2D8] shadow-[0_16px_40px_rgba(26,38,33,0.06)] bg-[#F5F2EB]">
              {/* Google Maps Embed iframe with graceful styling */}
              <iframe
                title="Demonstration Regional Map for Victoria Island"
                src={HOTEL_CONFIG.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02] grayscale-[20%]"
              />

              {/* Floating Map Pin Card */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-[#E8E2D8] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-pulse" />
                  <span className="font-serif text-sm font-semibold text-[#1A2621]">
                    Regional Map Placeholder
                  </span>
                </div>
                <p className="text-xs text-[#5F6B64]">
                  {HOTEL_CONFIG.location.displayAddress}
                </p>
                <div className="mt-2 pt-2 border-t border-[#F5F2EB] flex items-center gap-1.5 text-[10px] text-[#C5A880] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Configured via src/lib/config.ts</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
