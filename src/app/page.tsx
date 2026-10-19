'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import TacticalDoctrine from '@/components/TacticalDoctrine';
import FoundersSection from '@/components/FoundersSection';
import ShowcaseGallery from '@/components/ShowcaseGallery';
import TestimonialsMarquee from '@/components/TestimonialsMarquee';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';
import { PhoneCall, ShieldCheck, Users, ChevronLeft, Award } from 'lucide-react';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E2E8F0] flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Tactical Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Services Grid */}
        <ServicesSection onSelectService={(svc) => handleOpenBooking(svc)} />

        {/* 3. Tactical Doctrine (Batal El Alam Standards) */}
        <TacticalDoctrine />

        {/* 4. Founders & Strategic Leadership */}
        <FoundersSection />

        {/* 5. Showcase & Event Gallery */}
        <ShowcaseGallery />

        {/* 6. VIP Clients & Testimonials */}
        <TestimonialsMarquee />

        {/* 7. Fast Tactical Action Banner */}
        <section className="py-20 bg-gradient-to-b from-[#0E1017] to-[#07080A] relative border-b border-[#262B38]/60 overflow-hidden">
          <div className="absolute inset-0 tactical-grid opacity-20 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>جاهزية انتشار فوري 24 ساعة</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              هل تنظم حفلاً ضخماً أو تحتاج إلى{' '}
              <span className="gold-gradient-text">حراسة خاصة لنجم صف أول؟</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
              تواصل مباشرة مع غرفة العمليات التكتيكية لـ CyberX لتأكيد خطة التأمين، وتخصيص قوام الجاردات وسيارات الموكب المصفحة في أسرع وقت.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C5A059] text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4 text-black" />
                <span>طلب حراسة وتأمين VIP فوري</span>
              </button>

              <a
                href="tel:+201000000000"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#161922] hover:bg-[#1E2230] text-white border border-white/10 hover:border-[#D4AF37] font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span dir="ltr">اتصال بالخط الساخن: +20 100 000 0000</span>
              </a>

              <Link
                href="/join"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <Users className="w-4 h-4 text-[#D4AF37]" />
                <span>بوابة انضمام الجاردات</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer & CyberX Signature */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
