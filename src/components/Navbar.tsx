'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, PhoneCall, Menu, X, Users, Lock, ChevronLeft, Award } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0C]/90 backdrop-blur-xl border-b border-[#262B38]/80">
      {/* Top Tactical Status Bar */}
      <div className="w-full bg-[#12141A] border-b border-white/5 py-1 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>النظام الميداني نشط 24/7</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">قطاع القاهرة & الساحل الشمالي</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span dir="ltr">HOTLINE: +20 100 000 0000</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E2230] to-[#0E1017] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg shadow-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all">
              <Shield className="w-7 h-7 text-[#D4AF37] transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E63946] rounded-full border border-black" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-white">
                  CYBER<span className="text-[#D4AF37]">X</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                  VIP GUARDS
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                سايبر إكس للحراسات وتأمين النجوم
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              الرئيسية
            </Link>
            <a href="/#services" className="hover:text-[#D4AF37] transition-colors">
              خدمات النخبة
            </a>
            <a href="/#doctrine" className="hover:text-[#D4AF37] transition-colors">
              عقيدة الحراسة
            </a>
            <a href="/#founders" className="hover:text-[#D4AF37] transition-colors">
              القيادة والمؤسسون
            </a>
            <a href="/#gallery" className="hover:text-[#D4AF37] transition-colors">
              معرض العمليات
            </a>
            <a href="/#testimonials" className="hover:text-[#D4AF37] transition-colors">
              شركاء النجاح
            </a>
            <Link
              href="/join"
              className="text-[#D4AF37] hover:text-[#FFF1B8] flex items-center gap-1 font-bold py-1 px-2.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 transition-all hover:bg-[#D4AF37]/20"
            >
              <Users className="w-4 h-4" />
              <span>انضم للجاردات</span>
            </Link>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors text-xs"
              title="لوحة الإدارة للقيادة"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>الإدارة</span>
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-black" />
              <span>اطلب حراسة الآن</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#161922] text-slate-300 border border-white/10 hover:text-white"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1017] border-b border-[#262B38] px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white border-b border-white/5"
          >
            الرئيسية
          </Link>
          <a
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 border-b border-white/5"
          >
            خدمات النخبة
          </a>
          <a
            href="/#doctrine"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 border-b border-white/5"
          >
            عقيدة بطل العالم
          </a>
          <a
            href="/#founders"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 border-b border-white/5"
          >
            القيادة والمؤسسون
          </a>
          <a
            href="/#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 border-b border-white/5"
          >
            معرض الفعاليات
          </a>
          <Link
            href="/join"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-base font-bold text-[#D4AF37] border-b border-white/5"
          >
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              بوابة انضمام الجاردات (/join)
            </span>
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-base font-medium text-slate-400 border-b border-white/5"
          >
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              لوحة تحكم الإدارة (/admin)
            </span>
            <ChevronLeft className="w-4 h-4" />
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-extrabold text-center shadow-lg"
            >
              اطلب حراسة الآن
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
