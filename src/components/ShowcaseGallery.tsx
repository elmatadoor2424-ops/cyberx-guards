'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { MapPin, Users, Calendar, Eye, X, Shield, Sparkles } from 'lucide-react';

export default function ShowcaseGallery() {
  const [activeTab, setActiveTab] = useState<string>('الكل');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'تأمين المهرجان الصيفي الأضخم بالساحل الشمالي',
      category: 'حفلات ومهرجانات',
      location: 'العلمين الجديدة - الساحل الشمالي',
      year: 'صيف 2024 / 2025',
      guardsCount: 45,
      image: '/images/concert-guard.jpg',
      badge: 'تأمين مسرح كامل',
      description: 'نشر طوق أمني مدرع لحماية المسرح الرئيسي في حفل جماهيري ضخم تخطى 35,000 حاضر مع مرافقة كبار النجوم وتأمين المخرج الآمن.',
    },
    {
      id: 'gal-2',
      title: 'موكب الحراسة اللصيقة لنجوم الريد كاربت',
      category: 'تأمين فنانين ومشاهير',
      location: 'دار الأوبرا المصرية - القاهرة',
      year: '2025',
      guardsCount: 18,
      image: '/images/hero-guard.jpg',
      badge: 'طاقم البدلة الرسمية VIP',
      description: 'تشكيل الحراسة الماسي بالبدلات السوداء الرسمية لتأمين وفود الفنانين العرب والأجانب أثناء دخول السجادة الحمراء.',
    },
    {
      id: 'gal-3',
      title: 'تأمين فعاليات مهرجان الجونة السينمائي',
      category: 'تأمين فنانين ومشاهير',
      location: 'الجونة - البحر الأحمر',
      year: '2024',
      guardsCount: 30,
      image: '/images/hero-guard.jpg',
      badge: 'تأمين نخبة VIP',
      description: 'إشراف ميداني كامل على بوابات كبار الزوار، غرف الإقامة الفندقية، وتأمين تحركات النجوم على مدار 7 أيام متواصلة.',
    },
    {
      id: 'gal-4',
      title: 'تطويق أمني ومكافحة التدافع في حفل أرينا القاهرة',
      category: 'حفلات ومهرجانات',
      location: 'كايرو فيستيفال سيتي - التجمع',
      year: '2025',
      guardsCount: 50,
      image: '/images/concert-guard.jpg',
      badge: 'قوات التدخل السريع',
      description: 'السيطرة الفورية والتنظيم التكتيكي لآلاف الحاضرين وتأمين منصة الصوت والإضاءة ومنع أي اختراق لحرم المسرح.',
    },
    {
      id: 'gal-5',
      title: 'تأمين القمة الاقتصادية لمنتدى كبار المستثمرين',
      category: 'مؤتمرات VIP',
      location: 'فندق سانت ريجيس - القاهرة',
      year: '2025',
      guardsCount: 22,
      image: '/images/hero-guard.jpg',
      badge: 'مسح إلكتروني وتأمين قاعات',
      description: 'بروتوكول حراسة مشدد لمرافقة رؤساء الوفود وكبار رجال الأعمال مع أجهزة كشف تشويش ومسح هوائي.',
    },
    {
      id: 'gal-6',
      title: 'مناورات الرماية التكتيكية والاشتباك المباشر CQC',
      category: 'تشكيلات وتدريبات',
      location: 'المركز التدريبي التكتيكي لـ CyberX',
      year: '2026',
      guardsCount: 60,
      image: '/images/concert-guard.jpg',
      badge: 'تدريب قتالي نخبوي',
      description: 'دورة تدريبية مكثفة للجاردات الجدد على تكتيكات الاشتباك القريب، الرماية تحت الضغط، ومناورات إخلاء الشخصية المحمية.',
    },
  ];

  const tabs = ['الكل', 'حفلات ومهرجانات', 'تأمين فنانين ومشاهير', 'مؤتمرات VIP', 'تشكيلات وتدريبات'];

  const filteredItems = activeTab === 'الكل'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#0E1017] relative border-b border-[#262B38]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>OPERATIONAL MISSION ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            معرض <span className="gold-gradient-text">العمليات والفعاليات الكبرى</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            توثيق ميداني لأضخم الحفلات والمهرجانات والمؤتمرات التي تولت كوادر سايبر إكس تأمينها بنجاح تام وسجل خالي من أي خرق.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#161922] text-slate-400 hover:text-white hover:bg-[#1E2230] border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="tactical-card rounded-2xl overflow-hidden group cursor-pointer border border-[#262B38] hover:border-[#D4AF37]/60"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/40 to-transparent" />

                {/* Badge Overlay */}
                {item.badge && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0A0A0C]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold backdrop-blur-md">
                    {item.badge}
                  </div>
                )}

                {/* Eye Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Location and Guards Info */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-[#E63946] font-bold">
                    <Users className="w-3.5 h-3.5" />
                    {item.guardsCount} جارد
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5">
                <div className="text-[11px] text-[#D4AF37] font-mono mb-1 font-semibold">
                  {item.category} • {item.year}
                </div>
                <h3 className="text-base font-black text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-[#12141A] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/80 text-white hover:bg-[#E63946] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-black/30" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#D4AF37] block font-bold">
                      {selectedItem.category} • {selectedItem.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      {selectedItem.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#E63946] font-bold">
                      <Shield className="w-4 h-4" />
                      {selectedItem.guardsCount} جارد تكتيكي
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
