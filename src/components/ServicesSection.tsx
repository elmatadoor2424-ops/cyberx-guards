'use client';

import React from 'react';
import { 
  Mic2, 
  Sparkles, 
  UserCheck, 
  Car, 
  Building2, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      id: 'artists-protection',
      title: 'تأمين الفنانين والمشاهير',
      englishTitle: 'Celebrity & Artist Escort',
      icon: Mic2,
      badge: 'الخدمة الأكثر طلباً',
      highlight: true,
      description:
        'حماية لصيقة وشاملة لنجوم الصف الأول من لحظة الوصول حتى المغادرة. تأمين كواليس المسارح، حماية غرف الإقامة، تنظيم خروج آمن وتفادي تدافع الجماهير ببروتوكول احترافي.',
      features: [
        'طوق أمني ماسي حول الفنان أثناء التحرك',
        'تأمين الكواليس وبوابات الخروج السرية',
        'مرافقة سيارات دفع رباعي مظللة ومعتمة',
        'فريق تدخل سريع لفض التدافع الجماهيري'
      ],
      squadSize: '4 - 16 جارد نخبوي',
      responseTime: 'استجابة خلال 30 دقيقة',
    },
    {
      id: 'concerts-festivals',
      title: 'تأمين الحفلات والمهرجانات',
      englishTitle: 'Concert & Festival Security',
      icon: Sparkles,
      badge: 'تشكيلات ضخمة',
      highlight: false,
      description:
        'إدارة أمنية متكاملة للمهرجانات الكبرى وحفلات الاستاد والمسارح المفتوحة (الساحل، العلمين، القاهرة). تطويق مسرح الحفل بحواجز مدرعة وإدارة أجهزة التفتيش الإلكتروني.',
      features: [
        'تشكيلات عسكرية لتأمين محيط خشبة المسرح',
        'أجهزة كشف وتفتيش إلكتروني على البوابات',
        'تنظيم بوابات VIP والرعاة والإعلاميين',
        'فرق مكافحة الشغب والسيطرة على الحشود'
      ],
      squadSize: '20 - 100+ جارد ومنظم',
      responseTime: 'تخطيط مسبق + انتشار فوري',
    },
    {
      id: 'executive-protection',
      title: 'حراسة شخصية وتنفيذية VIP',
      englishTitle: 'Executive Close Protection',
      icon: UserCheck,
      badge: 'سرية مطلقة',
      highlight: false,
      description:
        'حراس شخصيون بأعلى معايير الهيبة والانضباط لحماية رجال الأعمال، الدبلوماسيين، والعائلات رفيعة المستوى. مظهر رسمي بالبدلة السوداء أو الزي التكتيكي الكامل.',
      features: [
        'حراس بأطوال تتجاوز 192 سم ولياقة مقاتل',
        'إتقان الرماية التكتيكية والإسعافات المتقدمة',
        'فحص جنائي واستخباراتي كامل (Zero-Risk)',
        'حماية لصيقة على مدار 24 ساعة يومياً'
      ],
      squadSize: '2 - 6 جاردات متخصصين',
      responseTime: 'جاهزية على مدار الساعة',
    },
    {
      id: 'convoy-control',
      title: 'إدارة وتأمين المواكب وتشتيت الحشود',
      englishTitle: 'Convoy & Tactical Escort',
      icon: Car,
      badge: 'مصفحات تكتيكية',
      highlight: false,
      description:
        'تجهيز وإدارة مواكب السيارات الفاخرة والمصفحة بمرافقة دراجات وسيارات رباعية الدفع. سائقون محترفون مدربون على المناورات الدفاعية والإخلاء التكتيكي تحت الخطر.',
      features: [
        'أسطول سيارات دفع رباعي أسود مجهز بالكامل',
        'تأمين مسارات السير وفتح الطرق الحيوية',
        'سائقون تكتيكيون مدربون على الهروب والمناورة',
        'اتصال لاسلكي مشفر بين سيارات الموكب'
      ],
      squadSize: '3 - 8 سيارات + 12 جارد',
      responseTime: 'تنسيق ميداني سريع',
    },
    {
      id: 'diplomatic-conferences',
      title: 'تأمين المؤتمرات والفعاليات الدبلوماسية',
      englishTitle: 'Diplomatic & Corporate Summits',
      icon: Building2,
      badge: 'بروتوكول دولي',
      highlight: false,
      description:
        'تأمين القمم الدبلوماسية، المؤتمرات الاقتصادية، ومعارض الشركات الكبرى. مسح تكتيكي للقاعات وأجهزة كشف التشويش والتنصت لضمان أقصى درجات الأمان والخصوصية.',
      features: [
        'مسح إلكتروني للقاعات لمنع التنصت والتصوير',
        'إدارة وتأمين صالات كبار الزوار (VIP Lounges)',
        'فحص أمني دقيق لقوائم المدعوين والحضور',
        'تنسيق مباشر مع الجهات الأمنية والسيادية'
      ],
      squadSize: '10 - 40 جارد مدرب',
      responseTime: 'وفق جدول أعمال المؤتمر',
    },
    {
      id: 'estate-defense',
      title: 'حراسة المقرات والقصور الفاخرة',
      englishTitle: 'Elite Estate & Compound Guarding',
      icon: ShieldCheck,
      badge: 'حماية مستمرة 365 يوم',
      highlight: false,
      description:
        'منظومة حراسة ثابتة ومتحركة للقصور، الفيلات الفاخرة، ومقرات الشركات العالمية. دمج التواجد البدني القوي للجاردات مع كاميرات الرؤية الليلية وكلاب الحراسة K9 المدربة.',
      features: [
        'نوبات حراسة وتبديل منتظم على مدار 24/7',
        'دوريات استطلاع وكلاب حراسة مدربة K9',
        'غرفة مراقبة وتحكم حراري متطورة',
        'بوابات تفتيش إلكترونية وحواجز هيدروليكية'
      ],
      squadSize: 'حسب مساحة المقر أو القصر',
      responseTime: 'تمركز دائم وثابت',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0E1017] relative border-b border-[#262B38]/60">
      <div className="absolute inset-0 tactical-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-4">
            <span>TACTICAL SERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            خدمات <span className="gold-gradient-text">النخبة الأمنية</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            حلول أمنية تكتيكية هندسية مصممة خصيصاً لأرقى الشخصيات العامة وأضخم الفعاليات الترفيهية والمهرجانات في الشرق الأوسط.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`tactical-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group ${
                  svc.highlight ? 'border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10' : ''
                }`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#1E2230] to-[#12141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1A1D26] text-[#D4AF37] border border-[#D4AF37]/30">
                    {svc.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {svc.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4 font-semibold" dir="ltr">
                    {svc.englishTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {svc.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs & Booking CTA */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      {svc.squadSize}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      {svc.responseTime}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1A1D28] hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-[#D4AF37] font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>طلب هذه الخدمة الآن</span>
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
