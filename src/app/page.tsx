import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2621]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero & Booking Panel */}
        <Hero />

        {/* Editorial Introduction */}
        <Introduction />

        {/* Accommodations Showcase */}
        <Rooms />

        {/* Experiences & Amenities */}
        <Experiences />

        {/* Distinctive Features / Why Choose Us */}
        <WhyChooseUs />

        {/* Responsive Photographic Gallery with Lightbox */}
        <Gallery />

        {/* Editorial Demonstration Testimonials */}
        <Testimonials />

        {/* Location, Directions & Map */}
        <Location />

        {/* Booking Enquiry & Contact Form with WhatsApp Integration */}
        <BookingContact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
