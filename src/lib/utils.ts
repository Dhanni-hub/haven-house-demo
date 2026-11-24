/**
 * Utility functions for Haven House Hotels
 */

export function cn(...classes: (string | undefined | null | false | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDateString(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export interface BookingEnquiryParams {
  guestName: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message?: string;
}

export interface WhatsAppResult {
  url: string;
  isConfigured: boolean;
  messageText: string;
}

export function isWhatsAppConfigured(phoneNumber?: string): boolean {
  if (!phoneNumber) return false;
  const clean = phoneNumber.replace(/[^0-9]/g, "");
  // Must have at least 8 digits and not be all zeroes or standard dummy numbers
  if (clean.length < 8) return false;
  if (/^0+$/.test(clean)) return false;
  if (clean === "2348000000000" || clean === "2340000000000") return false;
  return true;
}

export function generateWhatsAppLink(
  phoneNumber: string,
  data: BookingEnquiryParams
): WhatsAppResult {
  const cleanPhone = phoneNumber ? phoneNumber.replace(/[^0-9]/g, "") : "";
  const isConfigured = isWhatsAppConfigured(phoneNumber);

  const messageText = `*HAVEN HOUSE HOTELS — RESERVATION ENQUIRY*

*Guest Details:*
• Name: ${data.guestName || "Guest"}
• Email: ${data.email || "Not specified"}
• Phone: ${data.phone || "Not specified"}

*Stay Details:*
• Room Category: ${data.roomType || "Best Available"}
• Check-In Date: ${data.checkIn || "Flexible"}
• Check-Out Date: ${data.checkOut || "Flexible"}
• Guests: ${data.guests || 2}

*Special Requests / Notes:*
${data.message ? data.message : "None specified"}

---
_(Simulated reservation enquiry from Haven House demo website)_`;

  const encoded = encodeURIComponent(messageText);
  const url = isConfigured ? `https://wa.me/${cleanPhone}?text=${encoded}` : "";

  return {
    url,
    isConfigured,
    messageText,
  };
}
