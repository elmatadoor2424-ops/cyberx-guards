'use client';

import React from 'react';
import { Shield, Zap, Target, Crosshair, Award, Radio } from 'lucide-react';

export default function TacticalDoctrine() {
  const pillars = [
    {
      icon: Crosshair,
      title: 'المواصفات الجسدية الخارقة',
      englishTitle: 'Elite Physical Standards',
      desc: 'طول لا يقل عن 188 سم، كتلة عضلية متناسقة، وقوة بدنية مع مرونة وسرعة رد فعل فائقة لتحييد أي خطر خلال أجزاء من الثانية.',
      stat: '+190 سم',
      statLabel: 'متوسط أطوال الجاردات',
    },
    {
      icon: Target,
      title: 'كفاءة الاشتباك القريب CQC',
      englishTitle: 'Close Quarters Combat',
      desc: 'إتقان متقدم لفنون الدفاع عن النفس (MMA، كراف ماجا، وملاكمة) والقدرة على شل حركة المعتدي وتثبيته دون الإخلال بسلامة الشخصية المحمية.',
      stat: '100%',
      statLabel: 'مقاتلون معتمدون',
    },
    {
      icon: Shield,
      title: 'الفحص الجنائي والاستخباراتي',
      englishTitle: 'Zero-Risk Clearance',
      desc: 'تحريات أمنية وجنائية دقيقة وشاملة بنسبة 100% لكل عنصر، مع اختبارات نفسية وسلوكية صارمة لقياس الثبات الانفعالي تحت الضغوط القصوى.',
      stat: '0 ثغرات',
      statLabel: 'سجل أمني ناصع',
    },
    {
      icon: Zap,
      title: 'بروتوكول الهيبة والبدلة السوداء',
      englishTitle: 'The Black Suit Protocol',
      desc: 'مظهر رسمي أنيق يجمع بين فخامة البدلة السوداء الإيطالية، وسماعات الأذن الصوتية التكتيكية، ونظارات الحماية، بما يضفي وقاراً وهيبة لا تخطئها العين.',
      stat: 'VIP Rank',
      statLabel: 'مظهر رئاسي فاخر',
    },
  ];

  return (
    <section id="doctrine" className="py-24 bg-[#0A0A0C] relative border-b border-[#262B38]/60 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 tactical-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30 text-xs font-mono font-bold mb-4">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>THE CHAMPION TACTICAL DOCTRINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            عقيدة <span className="gold-gradient-text">"بطل العالم"</span> في الحراسات
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            لا مكان للعشوائية في حماية الأرواح. نطبق أشد المعايير انضباطاً وقسوة لضمان حماية مطلقة تتعدى حدود المألوف.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="tactical-card rounded-2xl p-6 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1D28] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1} //
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 mb-3" dir="ltr">
                    {pillar.englishTitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Metric Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black text-[#D4AF37] font-mono">
                      {pillar.stat}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {pillar.statLabel}
                    </div>
                  </div>
                  <Award className="w-5 h-5 text-slate-600 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
