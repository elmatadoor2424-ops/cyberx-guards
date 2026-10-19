'use client';

import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, Send, Car, Calendar, MapPin, Users, Award } from 'lucide-react';
import { saveBookingRequest } from '@/lib/storage';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCategory, setClientCategory] = useState<'فنان ومشاهير' | 'حفل ومهرجان جماهيري' | 'شخصية VIP ودبلوماسي' | 'مؤتمر ورجال أعمال'>('فنان ومشاهير');
  const [serviceType, setServiceType] = useState(defaultService || 'تأمين الفنانين والمشاهير');
  const [guardsCount, setGuardsCount] = useState(6);
  const [missionDate, setMissionDate] = useState('');
  const [city, setCity] = useState('القاهرة');
  const [armoredVehicles, setArmoredVehicles] = useState(false);
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await saveBookingRequest({
        client_name: clientName,
        client_phone: clientPhone,
        client_category: clientCategory,
        service_type: serviceType,
        guards_count: guardsCount,
        mission_date: missionDate || 'تنسيق فوري',
        city,
        armored_vehicles: armoredVehicles,
        special_requirements: specialRequirements,
      });

      setBookingRef(res.id.replace('book-', 'CXB-'));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `*طلب تأمين وحراسة خاصة VIP - CyberX Guards*
---------------------------------------
رقم الطلب: ${bookingRef || 'جديد'}
الجهة / العميل: ${clientName}
رقم الهاتف: ${clientPhone}
فئة المهمة: ${clientCategory}
نوع الخدمة: ${serviceType}
عدد الجاردات المطلوب: ${guardsCount} جارد
التاريخ: ${missionDate || 'عاجل / فوري'}
المدينة / الموقع: ${city}
سيارات مصفحة: ${armoredVehicles ? 'نعم (مطلوبة)' : 'غير مطلوبة'}
ملاحظات خاصة: ${specialRequirements || 'لا يوجد'}
---------------------------------------
أرجو التواصل لتأكيد التعاقد وخطة التأمين الميداني.`;

    return `https://wa.me/201000000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#12141A] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-lg bg-[#1E2230] text-slate-400 hover:text-white hover:bg-red-500/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  طلب حراسة وتأمين VIP فوري
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  تنسيق مباشر مع غرفة عمليات سايبر إكس وجاهزية للتحرك خلال دقائق
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    الاسم بالكامل / اسم المؤسسة أو النجم *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="مثال: إدارة أعمال الفنان / شركة الإنتاج"
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    رقم الهاتف / واتساب للتواصل المباشر *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="010XXXXXXXX"
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Category & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    فئة العميل / الحدث
                  </label>
                  <select
                    value={clientCategory}
                    onChange={(e) => setClientCategory(e.target.value as any)}
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                  >
                    <option value="فنان ومشاهير">فنان / نجم مشهور</option>
                    <option value="حفل ومهرجان جماهيري">حفل غنائي / مهرجان جماهيري</option>
                    <option value="شخصية VIP ودبلوماسي">شخصية دبلوماسية / رجل أعمال VIP</option>
                    <option value="مؤتمر ورجال أعمال">مؤتمر دولي / حفل افتتاح ضخم</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                  >
                    <option value="تأمين الفنانين والمشاهير">تأمين الفنانين والمشاهير (Celebrity Escort)</option>
                    <option value="تأمين الحفلات والمهرجانات">تأمين الحفلات والمهرجانات (Concert Security)</option>
                    <option value="حراسة شخصية VIP">حراسة شخصية لصيقة VIP (Close Protection)</option>
                    <option value="إدارة المواكب وتشتيت الحشود">إدارة الموكب وتشتيت الحشود (Convoy Security)</option>
                    <option value="تأمين المقرات والقصور الفاخرة">تأمين القصور والمنشآت الفاخرة</option>
                  </select>
                </div>
              </div>

              {/* Guards Count & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#181B24] border border-[#262B38] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      <span>قوام طاقم الجاردات المطلوب</span>
                    </label>
                    <span className="text-sm font-extrabold text-[#D4AF37] font-mono">
                      {guardsCount} جارد
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="50"
                    step="2"
                    value={guardsCount}
                    onChange={(e) => setGuardsCount(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>2 (مرافقة خاصة)</span>
                    <span>20 (حفل متوسط)</span>
                    <span>50+ (مهرجان ضخم)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>موقع الفعالية / المحافظة</span>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                    >
                      <option value="القاهرة الكبرى (التجمع / الشيخ زايد / الزمالك)">القاهرة الكبرى</option>
                      <option value="الساحل الشمالي (العلمين ومارينا)">الساحل الشمالي (العلمين / مارينا)</option>
                      <option value="الجونة والغردقة">الجونة / الغردقة</option>
                      <option value="الإسكندرية">الإسكندرية</option>
                      <option value="شرم الشيخ">شرم الشيخ</option>
                      <option value="خارج جمهورية مصر العربية">خارج مصر (تنسيق دولي)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Armored Vehicle Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>تاريخ المهمة / الحفل</span>
                  </label>
                  <input
                    type="date"
                    value={missionDate}
                    onChange={(e) => setMissionDate(e.target.value)}
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg px-3.5 py-2 text-sm text-white outline-none"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#181B24] border border-[#262B38] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#D4AF37]" />
                    <div className="text-right">
                      <span className="block text-xs font-bold text-white">سيارات دفع رباعي مصفحة</span>
                      <span className="text-[11px] text-slate-400">تجهيز موكب بمصفحات ومرافقة تكتيكية</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={armoredVehicles}
                    onChange={(e) => setArmoredVehicles(e.target.checked)}
                    className="w-5 h-5 accent-[#D4AF37] cursor-pointer rounded"
                  />
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  متطلبات أمنية إضافية (اختياري)
                </label>
                <textarea
                  rows={2}
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder="مثال: تأمين كواليس مسرح، مرافقة مسلحة، خطة إخلاء سرية، أجهزة كشف متفجرات..."
                  className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Award className="w-5 h-5 text-black" />
                  <span>{isSubmitting ? 'جاري إرسال الطلب...' : 'إرسال طلب التأمين لغرفة العمليات'}</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                رمز الحجز التكتيكي: {bookingRef}
              </span>
              <h3 className="text-2xl font-black text-white mt-3">
                تم استلام طلب الحراسة بنجاح!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                تم تحويل طلبك لغرفة العمليات الميدانية لشركة <span className="text-[#D4AF37] font-bold">CyberX</span>. سيقوم قائد التشكيل الأمني بالتواصل معك خلال 10 دقائق لتأكيد المخطط التكتيكي.
              </p>
            </div>

            <div className="p-4 bg-[#181B24] border border-white/10 rounded-xl text-right text-xs space-y-1.5 text-slate-300 font-mono">
              <div><strong className="text-white">العميل:</strong> {clientName}</div>
              <div><strong className="text-white">الخدمة:</strong> {serviceType} ({guardsCount} جارد)</div>
              <div><strong className="text-white">الموقع والتاريخ:</strong> {city} | {missionDate || 'فوري'}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>تأكيد فوري عبر واتساب غرفة العمليات</span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-[#1E2230] text-slate-300 hover:text-white text-sm font-semibold transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
