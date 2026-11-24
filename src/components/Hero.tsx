"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Compass, Key } from "lucide-react";
import BookingBar from "./BookingBar";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Welcome to Haven House Hotels"
      className="relative min-h-[100vh] lg:min-h-[105vh] flex flex-col justify-between pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Photography with Sophisticated Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85"
          alt="Haven House Luxury Hotel Facade and Reflecting Pool at Twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
        />
        {/* Multilayered subtle gradient overlay: ensures high contrast for typography while keeping warm tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121A17]/95 via-[#121A17]/55 to-black/40" />
        <div className="absolute inset-0 bg-[#121A17]/20 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center my-auto pt-12 pb-8 sm:py-16">
        {/* Subtle Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#FAF8F5] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <span>YOUR PRIVATE ESCAPE</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF8F5] tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          A Better Way to Stay.
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#E8E2D8]/90 max-w-2xl mx-auto font-light leading-relaxed mb-8 sm:mb-10"
        >
          An architectural sanctuary blending quiet luxury, mindful residential
          design, and bespoke Nigerian hospitality in an intimate coastal enclave.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#C5A880] text-[#121A17] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#D4B993] hover:shadow-[0_8px_24px_rgba(197,168,128,0.35)] active:scale-[0.98]"
          >
            <Key className="w-4 h-4" />
            <span>Explore Our Rooms</span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/25 text-white font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white/20 hover:border-white/40 active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#C5A880]" />
            <span>Discover Haven House</span>
          </a>
        </motion.div>
      </div>

      {/* Booking Bar Component Positioned at Bottom of Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-20 w-full mt-4"
      >
        <BookingBar variant="hero" />
      </motion.div>

      {/* Subtle Scroll Hint */}
      <div className="hidden md:flex justify-center items-center mt-3 relative z-10">
        <a
          href="#about"
          aria-label="Scroll down to introduction"
          className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-light"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
