'use client';

import React from 'react';
import { Award, ShieldAlert, Phone, Send, CheckCircle2, UserCheck } from 'lucide-react';

export default function FoundersSection() {
  const founders = [
    {
      name: 'الكابتن / كريم شاهين',
      role: 'المؤسس ورئيس مجلس الإدارة',
      titleEnglish: 'Founder & Chief Executive Officer',
      specialty: 'خبير الحماية اللصيقة وتأمين كبرى الفعاليات الدولية',
      bio: 'قاد وأشرف على تأمين أكثر من 120 حفلاً غنائياً ومهرجاناً دولياً في مصر والخليج. متخصص في هندسة الطوق الأمني لنجوم الصف الأول، وإدارة فرق التدخل السريع.',
      badges: [
        'معتمد دولياً في الحماية اللصيقة (VIP Close Protection)',
        'خبير استراتيجيات تشتيت الحشود وتأمين المسارح',
        '+14 سنة خبرة أمنية رفيعة المستوى'
      ],
      whatsapp: '201000000001',
      avatarBg: 'from-[#D4AF37]/30 to-[#12141A]',
    },
    {
      name: 'الرائد م. / طارق الزيات',
      role: 'شريك مؤسس ورئيس قطاع العمليات الميدانية',
      titleEnglish: 'Co-Founder & Head of Tactical Operations',
      specialty: 'قائد تشكيلات التدخل السريع والتدريب القتالي التكتيكي',
      bio: 'ضابط سابق بقوات النخبة، مصمم برامج التدريب البدني والاشتباك المباشر للجاردات. يشرف ميدانياً على إدارة العمليات والمواكب وتمركزات الحراسة الحيوية.',
      badges: [
        'خلفية عسكرية في القوات الخاصة وتكتيكات CQC',
        'مدرب رماية دفاعية ومناورات إخلاء المواكب',
        'إشراف ميداني مباشر على غرف العمليات 24/7'
      ],
      whatsapp: '201000000002',
      avatarBg: 'from-[#E63946]/30 to-[#12141A]',
    },
  ];

  return (
    <section id="founders" className="py-24 bg-[#0A0A0C] relative border-b border-[#262B38]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>FOUNDERS & STRATEGIC COMMAND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            القيادة <span className="gold-gradient-text">والمؤسسون</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            خبرة ميدانية عسكرية واستراتيجية متراكمة تقود أقوى منظومة حراسات خاصة في الشرق الأوسط، مستلهمة من روح الانضباط والبطولة المطلقة.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="tactical-card rounded-2xl p-7 sm:p-9 relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Profile Info */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Icon */}
                  <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${founder.avatarBg} border border-[#D4AF37]/50 flex items-center justify-center shadow-lg text-[#D4AF37] shrink-0`}>
                    <UserCheck className="w-9 h-9" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider block">
                      {founder.role}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {founder.name}
                    </h3>
                    <div className="text-[11px] font-mono text-slate-400" dir="ltr">
                      {founder.titleEnglish}
                    </div>
                  </div>
                </div>

                {/* Specialty Banner */}
                <div className="p-3 rounded-xl bg-[#1A1D28] border border-white/5 mb-5 text-xs font-semibold text-slate-200">
                  <span className="text-[#D4AF37] ml-1">التخصص الميداني:</span>
                  {founder.specialty}
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>

                {/* Badges / Credentials */}
                <div className="space-y-2 mb-8">
                  {founder.badges.map((badge, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Leadership Contact Actions */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`https://wa.me/${founder.whatsapp}?text=${encodeURIComponent('مرحباً كابتن، أود الاستفسار والتنسيق بخصوص خدمات التأمين والحراسات الخاصة لدى CyberX.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C5A059] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/15 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>تواصل عبر واتساب المباشر</span>
                </a>

                <a
                  href="tel:+201000000000"
                  className="p-3 rounded-xl bg-[#181B24] border border-white/10 text-slate-300 hover:text-white hover:border-[#D4AF37] transition-all"
                  title="اتصال هاتفي مباشر"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Commitment Quote */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#12141A] border border-[#D4AF37]/30 text-center relative overflow-hidden">
          <div className="text-2xl sm:text-3xl text-[#D4AF37]/40 font-serif mb-2">“</div>
          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic max-w-2xl mx-auto">
            "الأمن الحقيقي ليس مجرد استعراض للقوة، بل هو حساب دقيق للثواني، وهيبة ميدانية تلجم أي تهديد، وعين ساهرة لا تغفل.. تلك هي عقيدتنا في سايبر إكس."
          </p>
          <div className="mt-3 text-xs font-mono text-[#D4AF37] font-bold">
            — القيادة العامة لقطاع الحراسات | CYBERX SECURITY COMMAND
          </div>
        </div>
      </div>
    </section>
  );
}
