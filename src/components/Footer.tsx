"use client";

import { useState } from "react";
import Link from "next/link";
import { HOTEL_CONFIG } from "@/lib/config";
import { Mail, Phone, MapPin, ArrowRight, Info } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [demoFeedback, setDemoFeedback] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setDemoFeedback(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#121A17] text-[#FAF8F5] pt-20 pb-12 border-t border-[#1F2B25] relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#232F2A]">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="#hero" className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-sm bg-[#FAF8F5] text-[#121A17] flex items-center justify-center font-serif text-lg font-bold">
                  H
                </div>
                <div>
                  <span className="font-serif text-lg font-semibold tracking-[0.2em] uppercase block text-white">
                    Haven House
                  </span>
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#C5A880] block">
                    Hotels & Residences
                  </span>
                </div>
              </Link>

              <p className="text-sm text-[#A0ACA5] font-light leading-relaxed mb-6 max-w-sm">
                An intimate architectural retreat in Victoria Island, Lagos. Blending
                quiet luxury, restorative wellness, and bespoke hospitality.
              </p>

              {/* Social Media Placeholders using clean SVG icons */}
              <div className="flex items-center gap-3">
                <a
                  href={HOTEL_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haven House Instagram (Configurable)"
                  className="w-8 h-8 rounded-full bg-[#1A2621] border border-[#2A3B34] flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#121A17] hover:border-[#C5A880] transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href={HOTEL_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haven House LinkedIn (Configurable)"
                  className="w-8 h-8 rounded-full bg-[#1A2621] border border-[#2A3B34] flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#121A17] hover:border-[#C5A880] transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href={HOTEL_CONFIG.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haven House X / Twitter (Configurable)"
                  className="w-8 h-8 rounded-full bg-[#1A2621] border border-[#2A3B34] flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#121A17] hover:border-[#C5A880] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={HOTEL_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haven House Facebook (Configurable)"
                  className="w-8 h-8 rounded-full bg-[#1A2621] border border-[#2A3B34] flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#121A17] hover:border-[#C5A880] transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1F2B25] text-[11px] text-[#717E77]">
              Demonstration Website Prototype &bull; Centralized via <code className="text-[#A0ACA5]">config.ts</code>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#A0ACA5]">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  The Haven Story
                </Link>
              </li>
              <li>
                <Link href="#rooms" className="hover:text-white transition-colors">
                  Suites & Rooms
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Why Haven House
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  Location & Map
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-white transition-colors">
                  Reservation Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-5">
              Reservations & Location
            </h4>
            <div className="space-y-3.5 text-xs text-[#A0ACA5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{HOTEL_CONFIG.location.displayAddress}</p>
                  <p className="text-[11px] text-[#717E77]">{HOTEL_CONFIG.location.addressNote}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{HOTEL_CONFIG.contact.displayPhone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{HOTEL_CONFIG.contact.email}</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded bg-[#1A2621]/60 border border-[#232F2A] text-[10px] text-[#717E77]">
              * Note: Contact numbers & addresses are sample demonstration details.
            </div>
          </div>

          {/* Newsletter / The Haven Gazette Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-3">
              The Haven Gazette
            </h4>
            <p className="text-xs text-[#A0ACA5] font-light leading-relaxed mb-4">
              Receive periodic private invitationals, seasonal tasting menu previews, and cultural events.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#1A2621] border border-[#2A3B34] text-xs text-white placeholder-[#717E77] rounded-l-sm focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="px-4 bg-[#C5A880] hover:bg-[#D4B993] text-[#121A17] font-semibold text-xs rounded-r-sm transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {demoFeedback && (
                <p className="text-[11px] text-[#C5A880] flex items-center gap-1.5 pt-1">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>Demonstration Preview: Connects to your email marketing system on client launch.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#717E77] gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {HOTEL_CONFIG.copyrightYear} {HOTEL_CONFIG.brandName}. All rights reserved.</p>
            <p className="text-[10px] text-[#55635C] mt-1">
              Fictional hotel brand website demonstration created for client presentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy (Demo)
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              Guest Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
