'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { createApplication } from '@/lib/storage';
import { 
  ShieldCheck, 
  Upload, 
  Award, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Activity, 
  User, 
  FileText, 
  Camera, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState<number | ''>(26);
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('القاهرة');
  const [nationalId, setNationalId] = useState('');
  const [heightCm, setHeightCm] = useState<number | ''>(192);
  const [weightKg, setWeightKg] = useState<number | ''>(100);
  const [fitnessLevel, setFitnessLevel] = useState<'مقاتل محترف' | 'ممتاز' | 'متقدم' | 'جيد جداً'>('مقاتل محترف');
  const [selectedMartialArts, setSelectedMartialArts] = useState<string[]>(['MMA', 'ملاكمة']);
  const [militaryService, setMilitaryService] = useState('قوات الصاعقة (قدوة حسنة)');
  const [weaponsTraining, setWeaponsTraining] = useState(true);
  const [drivingLicense, setDrivingLicense] = useState(true);
  const [experienceYears, setExperienceYears] = useState<number | ''>(4);
  const [previousEvents, setPreviousEvents] = useState('');
  
  // Photo Upload State
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [idCardPreview, setIdCardPreview] = useState<string>('');

  // Submit status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const martialArtsOptions = [
    'ملاكمة (Boxing)',
    'MMA (فنون قتالية مختلطة)',
    'كيك بوكسينغ (Kickboxing)',
    'كراف ماجا (Krav Maga)',
    'مواي تاي (Muay Thai)',
    'جودو / مصارعة رومانية',
    'كمال أجسام ولياقة بدنية',
    'بدون (لياقة بدنية عامة)'
  ];

  const handleMartialArtToggle = (art: string) => {
    if (selectedMartialArts.includes(art)) {
      setSelectedMartialArts(selectedMartialArts.filter((a) => a !== art));
    } else {
      setSelectedMartialArts([...selectedMartialArts, art]);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, isIdCard = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isIdCard) {
          setIdCardPreview(reader.result as string);
        } else {
          setPhotoPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createApplication({
        full_name: fullName,
        age: Number(age),
        phone,
        city,
        national_id: nationalId,
        height_cm: Number(heightCm),
        weight_kg: Number(weightKg),
        fitness_level: fitnessLevel,
        martial_arts: selectedMartialArts,
        military_service: militaryService,
        weapons_training: weaponsTraining,
        driving_license: drivingLicense,
        experience_years: Number(experienceYears) || 0,
        previous_events: previousEvents || 'لا توجد سوابق عمل مسجلة',
        photo_url: photoPreview || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
        id_card_url: idCardPreview || '',
      });

      setSubmittedCode(result.tactical_code);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#E63946', '#FFFFFF'],
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('حدث خطأ أثناء حفظ الطلب، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E2E8F0] flex flex-col">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 tactical-grid opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#D4AF37] mb-8 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>

          {!submittedCode ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ELITE BODYGUARDS RECRUITMENT PORTAL</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                  بوابة انضمام <span className="gold-gradient-text">جاردات النخبة</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  انضم إلى كتيبة حراسات 'بطل العالم' لدى سايبر إكس لتأمين أكبر النجوم وأقوى الفعاليات والمواكب في مصر والشرق الأوسط.
                </p>

                {/* Tactical Alert Banner */}
                <div className="mt-6 p-4 rounded-xl bg-[#161922] border border-[#D4AF37]/40 max-w-2xl mx-auto text-right flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-0.5">معايير القبول المبدئي الصارمة:</strong>
                    الحد الأدنى للطول 188 سم، بنية بدنية قوية، خلو السجل الجنائي من أي قضايا، والجاهزية التامة للالتزام ببروتوكول البدلة الرسمية والانضباط التكتيكي.
                  </div>
                </div>
              </div>

              {/* Recruitment Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Personal Information */}
                <div className="tactical-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-base font-black text-white mb-6 border-b border-white/10 pb-3">
                    <User className="w-5 h-5 text-[#D4AF37]" />
                    <span>1. البيانات الشخصية الأساسية</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الاسم الرباعي كما في بطاقة الرقم القومي *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: أحمد محمد طارق السيوفي"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        العمر (بالسنوات) *
                      </label>
                      <input
                        type="number"
                        min="20"
                        max="45"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="26"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        رقم الهاتف المحمول (واتساب نشط) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01012345678"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        المحافظة / محل السكن الحالي *
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                      >
                        <option value="القاهرة">القاهرة</option>
                        <option value="الجيزة">الجيزة</option>
                        <option value="الإسكندرية">الإسكندرية</option>
                        <option value="الشرقية">الشرقية</option>
                        <option value="الدقهلية">الدقهلية</option>
                        <option value="الغربية">الغربية</option>
                        <option value="البحيرة">البحيرة</option>
                        <option value="المنوفية">المنوفية</option>
                        <option value="القليوبية">القليوبية</option>
                        <option value="الساحل الشمالي / مطروح">الساحل الشمالي / مطروح</option>
                        <option value="البحر الأحمر (الغردقة / الجونة)">البحر الأحمر (الغردقة / الجونة)</option>
                        <option value="محافظة أخرى">محافظة أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الرقم القومي (14 رقم) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={14}
                        minLength={14}
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        placeholder="298XXXXXXXXXXXX"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Physical & Tactical Attributes */}
                <div className="tactical-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-base font-black text-white mb-6 border-b border-white/10 pb-3">
                    <Activity className="w-5 h-5 text-[#D4AF37]" />
                    <span>2. المواصفات البدنية والقتالية</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold text-slate-300">
                          الطول الفعلي (سم) *
                        </label>
                        <span className={`text-xs font-mono font-bold ${Number(heightCm) >= 190 ? 'text-emerald-400' : 'text-[#D4AF37]'}`}>
                          {Number(heightCm) >= 190 ? 'مواصفة نخبوية ممتازة (+190)' : 'مواصفة مقبولة'}
                        </span>
                      </div>
                      <input
                        type="number"
                        min="180"
                        max="220"
                        required
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="192"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الوزن (كجم) *
                      </label>
                      <input
                        type="number"
                        min="75"
                        max="160"
                        required
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="100"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        مستوى اللياقة البدنية العام *
                      </label>
                      <select
                        value={fitnessLevel}
                        onChange={(e) => setFitnessLevel(e.target.value as any)}
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                      >
                        <option value="مقاتل محترف">مقاتل محترف (بطولات / تدريب يومي شاق)</option>
                        <option value="ممتاز">ممتاز (لياقة بدنية وحديد مستمر)</option>
                        <option value="متقدم">متقدم</option>
                        <option value="جيد جداً">جيد جداً</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        سنوات الخبرة في مجال الـ Security / VIP *
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="25"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="4"
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Martial Arts Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      الفنون القتالية والرياضات التي تتقنها (اختر كل ما ينطبق) *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {martialArtsOptions.map((art) => {
                        const isSelected = selectedMartialArts.includes(art);
                        return (
                          <button
                            type="button"
                            key={art}
                            onClick={() => handleMartialArtToggle(art)}
                            className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-right flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-sm'
                                : 'bg-[#12141A] border-[#262B38] text-slate-400 hover:border-slate-500'
                            }`}
                          >
                            <span>{art}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. Military Background & Experience */}
                <div className="tactical-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-base font-black text-white mb-6 border-b border-white/10 pb-3">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                    <span>3. الموقف العسكري والتدريب الميداني</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        سلاح الخدمة العسكرية / الموقف التجنيدي *
                      </label>
                      <select
                        value={militaryService}
                        onChange={(e) => setMilitaryService(e.target.value)}
                        className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                      >
                        <option value="قوات الصاعقة (قدوة حسنة)">قوات الصاعقة المصرية (قدوة حسنة)</option>
                        <option value="الحرس الجمهوري (تأمين رئاسي)">الحرس الجمهوري (تأمين رئاسي)</option>
                        <option value="الشرطة العسكرية / المظلات">الشرطة العسكرية / المظلات</option>
                        <option value="قوات التدخل السريع / العمليات الخاصة">قوات التدخل السريع / العمليات الخاصة</option>
                        <option value="سلاح عام (قدوة حسنة)">سلاح عام (قدوة حسنة)</option>
                        <option value="إعفاء نهائي / وحيد">إعفاء نهائي / وحيد</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-4 bg-[#12141A] border border-[#262B38] rounded-xl p-3 justify-around">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={weaponsTraining}
                          onChange={(e) => setWeaponsTraining(e.target.checked)}
                          className="w-4 h-4 accent-[#D4AF37] rounded"
                        />
                        <span className="text-xs text-white font-bold">تدريب رماية وسلاح</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={drivingLicense}
                          onChange={(e) => setDrivingLicense(e.target.checked)}
                          className="w-4 h-4 accent-[#D4AF37] rounded"
                        />
                        <span className="text-xs text-white font-bold">رخصة قيادة خاصة/مهنية</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      أهم الحفلات أو النجوم أو الفعاليات التي شاركت في تأمينها سابقاً (اختياري)
                    </label>
                    <textarea
                      rows={3}
                      value={previousEvents}
                      onChange={(e) => setPreviousEvents(e.target.value)}
                      placeholder="مثال: تأمين مسرح مهرجان العلمين، مرافقة فنان، حراسة كواليس حفل..."
                      className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>

                {/* 4. Photo & Documents Upload */}
                <div className="tactical-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-base font-black text-white mb-6 border-b border-white/10 pb-3">
                    <Camera className="w-5 h-5 text-[#D4AF37]" />
                    <span>4. الصورة الشخصية والمستندات</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Guard Full/Suit Photo */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-300">
                        صورة واضحة كاملة (يفضل بالبدلة السوداء أو مظهر رياضي) *
                      </label>
                      <div className="border-2 border-dashed border-[#262B38] hover:border-[#D4AF37] rounded-2xl p-4 text-center bg-[#12141A] transition-all relative">
                        {photoPreview ? (
                          <div className="relative w-36 h-48 mx-auto rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-md">
                            <img src={photoPreview} alt="معاينة الصورة" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="py-6 flex flex-col items-center justify-center text-slate-400">
                            <Camera className="w-10 h-10 text-[#D4AF37] mb-2" />
                            <span className="text-xs font-bold text-white mb-1">اضغط لرفع الصورة الشخصية</span>
                            <span className="text-[11px] text-slate-500">PNG, JPG حتى 5 ميجابايت</span>
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handlePhotoUpload(e, false)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* ID Card / CV Photo */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-300">
                        صورة بطاقة الرقم القومي (وجه أمامي) أو السيرة الذاتية
                      </label>
                      <div className="border-2 border-dashed border-[#262B38] hover:border-[#D4AF37] rounded-2xl p-4 text-center bg-[#12141A] transition-all relative">
                        {idCardPreview ? (
                          <div className="relative w-48 h-32 mx-auto rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-md">
                            <img src={idCardPreview} alt="معاينة البطاقة" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="py-6 flex flex-col items-center justify-center text-slate-400">
                            <FileText className="w-10 h-10 text-slate-400 mb-2" />
                            <span className="text-xs font-bold text-white mb-1">اضغط لرفع بطاقة الرقم القومي</span>
                            <span className="text-[11px] text-slate-500">حفظ مشفر وآمن 100%</span>
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handlePhotoUpload(e, true)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[320px] py-4 px-8 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-black text-base shadow-2xl shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 text-black" />
                    <span>{isSubmitting ? 'جاري تسجيل واعتماد الطلب...' : 'إرسال طلب الانضمام لكتيبة الجاردات'}</span>
                  </button>
                  <p className="text-xs text-slate-500 mt-3">
                    بإرسال هذا النموذج، تؤكد صحة كافة البيانات الشخصية والبدنية وموافقتك على إجراءات الفحص الأمني.
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Success & Confirmation View */
            <div className="tactical-card rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold">
                  الكود التكتيكي للجارد: {submittedCode}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white mt-4">
                  تم تسجيل طلبك في منظومة سايبر إكس بنجاح!
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-3 leading-relaxed">
                  تم إدراج ملفك البدني والقتالي في قاعدة بيانات جاردات النخبة بحالة <span className="text-[#D4AF37] font-bold">قيد الفحص والمراجعة (Pending)</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#12141A] border border-white/10 text-right text-xs space-y-2 text-slate-300 font-mono">
                <div><strong className="text-white">الاسم المسجل:</strong> {fullName}</div>
                <div><strong className="text-white">الطول والوزن:</strong> {heightCm} سم | {weightKg} كجم</div>
                <div><strong className="text-white">السلاح:</strong> {militaryService}</div>
                <div><strong className="text-white">الفنون القتالية:</strong> {selectedMartialArts.join('، ')}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/201000000000?text=${encodeURIComponent(
                    `مرحباً، تم تسجيلي في بوابة جاردات CyberX بكود تكتيكي: ${submittedCode}. الاسم: ${fullName}، الطول: ${heightCm} سم. أرجو تحديد موعد الاختبار البدني والميداني.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>تواصل مباشر مع مسؤول التجنيد عبر واتساب</span>
                </a>

                <Link
                  href="/"
                  className="py-3.5 px-6 rounded-xl bg-[#161922] hover:bg-[#1E2230] text-slate-300 hover:text-white text-sm font-semibold border border-white/10 transition-colors"
                >
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
