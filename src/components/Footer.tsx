'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, PhoneCall, Mail, MapPin, Send, Lock, ChevronLeft, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-slate-400 border-t border-[#262B38] relative overflow-hidden">
      {/* Tactical Glow Effect on Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E2230] to-[#0E1017] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider block">
                  CYBER<span className="text-[#D4AF37]">X</span> GUARDS
                </span>
                <span className="text-[11px] text-slate-400">حراسة خبير.. تأمين بلا حدود</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              الوكالة الأمنية التكتيكية الأولى المتخصصة في حراسة المشاهير، أضخم الفعاليات، والمواكب الخاصة بهيبة وانضباط 'بطل العالم'.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>غرفة العمليات المركزية في حالة تأهب</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-r-2 border-[#D4AF37] pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>خدمات الحراسة VIP</span>
                </a>
              </li>
              <li>
                <a href="/#doctrine" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>عقيدة بطل العالم التكتيكية</span>
                </a>
              </li>
              <li>
                <a href="/#founders" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>القيادة والمؤسسون</span>
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>معرض الفعاليات والحفلات</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Recruitment & Portal */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-r-2 border-[#D4AF37] pr-2">
              بوابات المنظومة
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/join"
                  className="text-[#D4AF37] hover:text-[#FFF1B8] font-bold transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>بوابة تجنيد وانضمام الجاردات (/join)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>لوحة تحكم القيادة والإدارة (/admin)</span>
                </Link>
              </li>
              <li>
                <span className="text-slate-500 text-[11px] block mt-2">
                  * التقديم متاح لمن تتوفر فيهم المواصفات البدنية والقتالية العالية فقط (+188 سم).
                </span>
              </li>
            </ul>
          </div>

          {/* Emergency Hotline & Headquarter */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-r-2 border-[#D4AF37] pr-2">
              الاتصال والطوارئ VIP
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#12141A] border border-[#D4AF37]/30 flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-mono">خط الطوارئ والتعاقدات 24/7</span>
                  <a href="tel:+201000000000" className="text-sm font-extrabold text-white font-mono hover:text-[#D4AF37]" dir="ltr">
                    +20 100 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>المقر الرئيسي: برج النيل التكتيكي - الزمالك، القاهرة | قطاع الساحل الشمالي والعلمين</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono">vip@cyberx-guards.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Mandatory Signature */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-right">
            <span>جميع الحقوق محفوظة لوكالة سايبر إكس للحراسات وتأمين كبار الشخصيات © 2026</span>
          </div>

          {/* Mandatory Signature with Metallic Glow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#161922] via-[#1A1D28] to-[#161922] border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/10">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
              Developed & Engineered by{' '}
              <span className="text-[#D4AF37] font-black hover:text-[#FFF1B8] transition-colors">
                CyberX
              </span>
              {' '}| جميع الحقوق محفوظة لـ CyberX ©
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#161922] text-slate-300 hover:text-white hover:bg-[#D4AF37] hover:text-black transition-all"
            title="الصعود للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
