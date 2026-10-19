'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function TestimonialsMarquee() {
  const testimonials = [
    {
      id: 1,
      name: 'م. أيمن عبد الفتاح',
      role: 'مدير عام مهرجانات الساحل الصيفية',
      event: 'تأمين مهرجان الساحل الأرينا (40 ألف حاضر)',
      quote: 'فريق سايبر إكس أثبت أنه الرقم واحد في مصر. تنظيم المسرح وتأمين الكواليس كان على مستوى عالمي، لم يحدث أي تدافع أو ارتباك أمني طوال 8 ساعات.',
      rating: 5,
    },
    {
      id: 2,
      name: 'الأستاذ / شريف منصور',
      role: 'مدير أعمال فنان صف أول عربي',
      event: 'مرافقة وحراسة لصيقة لمدة شهرين',
      quote: 'هيبة استثنائية، انضباط يشبه القوات الخاصة، واحترافية متناهية في التعامل مع الجمهور والمعجبين دون أي عنف غير مبرر. أفضل طاقم حراسة تعاملنا معه.',
      rating: 5,
    },
    {
      id: 3,
      name: 'د. حسام السويدي',
      role: 'الرئيس التنفيذي لمجموعة استثمارية قابضة',
      event: 'تأمين موكب القمة الاقتصادية ورجال الأعمال',
      quote: 'سيارات مصفحة مجهزة بأعلى تكنولوجيا وسائقون تكتيكيون ماهرون جداً. شعور كامل بالطمأنينة والأمان في كل تحرك من المطار وحتى مقر الإقامة.',
      rating: 5,
    },
    {
      id: 4,
      name: 'كريم الباز',
      role: 'منتج حفلات ورئيس شركة إنتاج فني',
      event: 'سلسلة حفلات رأس السنة بفنادق الـ 5 نجوم',
      quote: 'جاردات بمواصفات بدنية خارقة ووعي عالي جداً. بفضل الله ثم خطة سايبر إكس المحكمة خرجت كل الحفلات بأفضل صورة مشرفة ومبهرة.',
      rating: 5,
    },
  ];

  const partners = [
    'مهرجان العلمين الدولي',
    'روتانا للصوتيات والمرئيات',
    'كايرو فيستيفال سيتي',
    'أوبرا الإسكندرية',
    'مهرجان الجونة السينمائي',
    'فورسيزونز مصر',
    'بنش مارك للفعاليات',
    'زد بارك للأحداث الرياضية والفنية',
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0E1017] relative border-b border-[#262B38]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>ENDORSEMENTS & VIP TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            ثقة <span className="gold-gradient-text">النجوم وكبار المنظمين</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            شهادات وتوصيات موثقة من أكبر المنتجين ومديري أعمال النجوم وشركات الفعاليات الدولية.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="tactical-card rounded-2xl p-6 sm:p-7 relative group flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/30" />
                </div>

                {/* Quote Content */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Event Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-white">{t.name}</h4>
                  <div className="text-xs text-[#D4AF37] font-medium">{t.role}</div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 max-w-[180px] text-left" dir="ltr">
                  {t.event}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Marquee Strip */}
        <div className="p-6 rounded-2xl bg-[#12141A] border border-white/5 text-center">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            شركاء الفعاليات والتأمين الميداني المعتمدون
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-300">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-[#181B24] border border-white/5 hover:border-[#D4AF37]/40 hover:text-white transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
