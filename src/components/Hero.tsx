'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Users, Award, Radio, ArrowUpLeft, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#262B38]/60">
      {/* Background Image with Tactical Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-guard.jpg"
          alt="CyberX VIP Security Guards - بطل العالم"
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-125 scale-105 transition-transform duration-1000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C]/90" />
        <div className="absolute inset-0 tactical-grid opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Tactical Badge & HUD Header */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161922]/90 border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/10 backdrop-blur-md mb-8 animate-fade-in">
          <Radio className="w-4 h-4 text-[#E63946] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            مستوحى من عقيدة وهيبة <span className="text-[#D4AF37]">"بطل العالم"</span> | Elite Tactical Guarding
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="hidden md:inline-block text-xs font-mono text-slate-400">
            EGY // SEC-ALPHA
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.2] max-w-5xl mb-6">
          حراسة خبير.. <span className="gold-gradient-text">تأمين بلا حدود</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-300 mt-3 font-mono">
            VIP Protection & Mega Event Security
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
          المنظومة التكتيكية النخبوية الأقوى لحراسة نجوم الفن، كبار الشخصيات، وأضخم المهرجانات والحفلات في مصر والشرق الأوسط. أطقم حراسة مدربة على أرقى بروتوكولات الحماية اللصيقة والتدخل السريع بهيبة استثنائية وأعلى درجات الانضباط.
        </p>

        {/* Dynamic CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-black text-base shadow-2xl shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            <ShieldCheck className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
            <span>اطلب حراسة وتأمين VIP الآن</span>
            <ChevronLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" />
          </button>

          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#161922]/90 hover:bg-[#1E2230] text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] font-bold text-base shadow-xl backdrop-blur-md transition-all flex items-center justify-center gap-3 group"
          >
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <span>انضم لفريق الجاردات</span>
            <ArrowUpLeft className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Counter Badges (Grid 4 items) */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
          {/* Stat 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12141A]/70 border border-[#262B38] backdrop-blur-md hover:border-[#D4AF37]/50 transition-all">
            <div className="text-2xl sm:text-4xl font-black text-[#D4AF37] font-mono mb-1">
              +100
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
              حفل وفنان مؤمن بالكامل
            </div>
            <div className="text-[11px] text-slate-400">
              أضخم المهرجانات وحفلات الساحل
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12141A]/70 border border-[#262B38] backdrop-blur-md hover:border-[#D4AF37]/50 transition-all">
            <div className="text-2xl sm:text-4xl font-black text-white font-mono mb-1">
              +500
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
              طاقم احترافي وجارد مقاتل
            </div>
            <div className="text-[11px] text-slate-400">
              أطوال +190 سم وتدريب صاعقة
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12141A]/70 border border-[#262B38] backdrop-blur-md hover:border-[#D4AF37]/50 transition-all">
            <div className="text-2xl sm:text-4xl font-black text-[#E63946] font-mono mb-1">
              0%
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
              نسبة الثغرات الأمنية
            </div>
            <div className="text-[11px] text-slate-400">
              سجل ذهبي خالٍ من أي خرق
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12141A]/70 border border-[#262B38] backdrop-blur-md hover:border-[#D4AF37]/50 transition-all">
            <div className="text-2xl sm:text-4xl font-black text-[#00F2FE] font-mono mb-1">
              24/7
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
              غرفة عمليات وتدخل سريع
            </div>
            <div className="text-[11px] text-slate-400">
              جاهزية انتشار خلال دقائق
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
