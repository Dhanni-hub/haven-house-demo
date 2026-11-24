"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HOTEL_CONFIG } from "@/lib/config";
import { Menu, X, Calendar, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Rooms & Suites", href: "#rooms" },
  { name: "Experiences", href: "#experiences" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for subtle active highlight
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D8] shadow-[0_4px_24px_rgba(26,38,33,0.06)] py-3.5"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <Link
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded"
            >
              <div
                className={`w-9 h-9 rounded-sm flex items-center justify-center border transition-colors duration-300 ${
                  isScrolled
                    ? "bg-[#1A2621] border-[#1A2621] text-[#FAF8F5]"
                    : "bg-white/10 backdrop-blur-xs border-white/30 text-white"
                }`}
              >
                <span className="font-serif text-lg font-semibold tracking-wider">H</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-[#1A2621]" : "text-white"
                  }`}
                >
                  Haven House
                </span>
                <span
                  className={`text-[9px] tracking-[0.28em] uppercase font-medium transition-colors duration-300 ${
                    isScrolled ? "text-[#717E77]" : "text-white/80"
                  }`}
                >
                  Hotels & Residences
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 py-1 relative focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880] ${
                      isScrolled
                        ? isActive
                          ? "text-[#1A2621] font-semibold"
                          : "text-[#4A5550] hover:text-[#1A2621]"
                        : isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                          isScrolled ? "bg-[#C5A880]" : "bg-white"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Contact Link */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#booking"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                  isScrolled
                    ? "bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] hover:shadow-md"
                    : "bg-[#C5A880] text-[#121A17] hover:bg-[#D4B993] hover:shadow-lg"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Stay</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="#booking"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-semibold ${
                  isScrolled
                    ? "bg-[#1A2621] text-[#FAF8F5]"
                    : "bg-[#C5A880] text-[#121A17]"
                }`}
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </a>

              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`p-2 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                  isScrolled
                    ? "text-[#1A2621] hover:bg-[#EFEBE4]"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#FAF8F5] text-[#1A2621] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D8]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-sm bg-[#1A2621] text-[#FAF8F5] flex items-center justify-center font-serif text-base font-semibold">
                      H
                    </div>
                    <div>
                      <span className="font-serif text-base font-semibold tracking-wider uppercase block text-[#1A2621]">
                        Haven House
                      </span>
                      <span className="text-[8px] tracking-[0.24em] uppercase text-[#717E77] block">
                        Hotels & Residences
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 rounded-sm text-[#1A2621] hover:bg-[#EFEBE4]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="py-6 flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`px-3 py-3 rounded-sm text-sm uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-between ${
                          isActive
                            ? "bg-[#EFEBE4] text-[#1A2621] font-semibold"
                            : "text-[#3D4742] hover:bg-[#F5F2EB] hover:text-[#1A2621]"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#E8E2D8] flex flex-col gap-4">
                <a
                  href="#booking"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1A2621] text-[#FAF8F5] hover:bg-[#2A3B34] rounded-sm text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Reserve a Stay</span>
                </a>

                <div className="bg-[#F5F2EB] rounded-sm p-3.5 border border-[#E8E2D8]">
                  <div className="flex items-center gap-2 text-xs text-[#5F6B64] mb-1">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="font-medium text-[#1A2621]">Concierge Desk</span>
                  </div>
                  <p className="text-xs text-[#5F6B64]">{HOTEL_CONFIG.contact.displayPhone}</p>
                  <p className="text-[10px] text-[#86928B] mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span>Demonstration hospitality presentation</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
