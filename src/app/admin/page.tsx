'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BodyguardApplication } from '@/types';
import { 
  getApplications, 
  updateApplicationStatus, 
  deleteApplication, 
  resetDemoApplications 
} from '@/lib/storage';
import { 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Users, 
  Search, 
  Filter, 
  Check, 
  X, 
  Trash2, 
  Send, 
  Eye, 
  Award, 
  Activity, 
  RefreshCw, 
  Download, 
  FileSpreadsheet, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [applications, setApplications] = useState<BodyguardApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minHeightFilter, setMinHeightFilter] = useState<number>(0);

  const [selectedApp, setSelectedApp] = useState<BodyguardApplication | null>(null);

  useEffect(() => {
    // Check if session stored
    const authSession = sessionStorage.getItem('cyberx_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
    loadApplications();
  }, []);

  const loadApplications = async () => {
    setLoading(true);
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Default passcodes
    if (passcode === 'cyberx2026' || passcode === '123456' || passcode === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('cyberx_admin_auth', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'approved' | 'rejected' | 'pending') => {
    await updateApplicationStatus(id, newStatus);
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا الطلب نهائياً من قاعدة البيانات؟')) {
      await deleteApplication(id);
      setApplications((prev) => prev.filter((app) => app.id !== id));
      if (selectedApp?.id === id) setSelectedApp(null);
    }
  };

  const handleResetDemo = () => {
    if (confirm('إعادة تعيين البيانات النموذجية للتجربة؟')) {
      resetDemoApplications();
      loadApplications();
    }
  };

  const exportCSV = () => {
    const headers = ['الكود,الاسم,العمر,الهاتف,المحافظة,الطول,الوزن,اللياقة,السلاح,الخبرة,الحالة\n'];
    const rows = applications.map((a) =>
      `"${a.tactical_code}","${a.full_name}","${a.age}","${a.phone}","${a.city}","${a.height_cm}","${a.weight_kg}","${a.fitness_level}","${a.military_service}","${a.experience_years}","${a.status}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `cyberx_bodyguards_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp acceptance message generator
  const getWhatsAppInterviewLink = (app: BodyguardApplication) => {
    const text = `تحية تكتيكية من قيادة CyberX VIP Security.
--------------------------------------------
كابتن: ${app.full_name} (كود: ${app.tactical_code})
يسرنا إبلاغك بقبول ملفك الأمني والبدني المبدئي للانضمام لطاقم حراسات النخبة.
المواصفة المسجلة: الطول ${app.height_cm} سم | السلاح: ${app.military_service}.
نرجو التكرم بالحضور لمقر العمليات بالزمالك لإجراء الاختبار الميداني واختبار البدلة الرسمية.
يرجى تأكيد موعد الحضور.`;

    // Clean phone number
    const cleanPhone = app.phone.replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone.startsWith('0') ? '2' + cleanPhone : cleanPhone;
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  // Filtered List
  const filteredApps = applications.filter((app) => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesHeight = minHeightFilter === 0 || app.height_cm >= minHeightFilter;
    const matchesSearch =
      app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      app.tactical_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.martial_arts.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesHeight && matchesSearch;
  });

  // Stats calculation
  const totalCount = applications.length;
  const pendingCount = applications.filter((a) => a.status === 'pending').length;
  const approvedCount = applications.filter((a) => a.status === 'approved').length;
  const rejectedCount = applications.filter((a) => a.status === 'rejected').length;
  const avgHeight = totalCount > 0
    ? Math.round(applications.reduce((acc, a) => acc + (a.height_cm || 0), 0) / totalCount)
    : 190;

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E2E8F0] flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-bold mb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>CYBERX COMMAND & RECRUITMENT PORTAL</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white">
                لوحة تحكم القيادة <span className="gold-gradient-text">وإدارة الجاردات</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                فرز ومراجعة واعتماد طلبات حراسات النخبة والتواصل الميداني المباشر.
              </p>
            </div>

            {isAuthenticated && (
              <div className="flex items-center gap-2">
                <button
                  onClick={exportCSV}
                  className="px-4 py-2 rounded-xl bg-[#161922] border border-white/10 hover:border-[#D4AF37] text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                  title="تصدير كشوف Excel / CSV"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>تصدير كشف الجاردات</span>
                </button>

                <button
                  onClick={handleResetDemo}
                  className="p-2 rounded-xl bg-[#161922] border border-white/10 hover:border-[#D4AF37] text-slate-400 hover:text-white transition-all"
                  title="استعادة البيانات النموذجية"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    sessionStorage.removeItem('cyberx_admin_auth');
                    setIsAuthenticated(false);
                  }}
                  className="px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-colors"
                >
                  خروج
                </button>
              </div>
            )}
          </div>

          {!isAuthenticated ? (
            /* Passcode Protection Screen */
            <div className="tactical-card max-w-md mx-auto rounded-2xl p-8 sm:p-10 text-center my-12 border border-[#D4AF37]/40">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/50 flex items-center justify-center mx-auto text-[#D4AF37] mb-6">
                <Lock className="w-8 h-8" />
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                الوصول محمي لقيادة CyberX
              </h2>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                يرجى إدخال رمز الأمان التكتيكي (Passcode) لفتح لوحة التحكم وقاعدة بيانات المتقدمين.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    autoFocus
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setAuthError(false);
                    }}
                    placeholder="رمز المرور (الافتراضي: cyberx2026)"
                    className="w-full bg-[#12141A] border border-[#262B38] focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-center text-white tracking-widest outline-none font-mono"
                  />
                  {authError && (
                    <span className="text-xs text-red-400 mt-2 block">
                      رمز المرور غير صحيح. (يمكنك استخدام: cyberx2026)
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all"
                >
                  تسجيل الدخول للوحة القيادة
                </button>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPasscode('cyberx2026');
                      setIsAuthenticated(true);
                      sessionStorage.setItem('cyberx_admin_auth', 'true');
                    }}
                    className="text-[11px] text-[#D4AF37] underline hover:text-white"
                  >
                    دخول سريع بكلمة السر التجريبية (Demo Access)
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Dashboard View */
            <div className="space-y-6">
              {/* Stat Widgets */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="tactical-card rounded-xl p-4">
                  <div className="flex justify-between items-center text-slate-400 text-xs mb-1 font-mono">
                    <span>إجمالي المتقدمين</span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">{totalCount}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">ملف أمني مسجل</div>
                </div>

                <div className="tactical-card rounded-xl p-4 border-[#D4AF37]/40">
                  <div className="flex justify-between items-center text-[#D4AF37] text-xs mb-1 font-mono">
                    <span>قيد المراجعة</span>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-[#D4AF37] font-mono">{pendingCount}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">بانتظار الفحص</div>
                </div>

                <div className="tactical-card rounded-xl p-4 border-emerald-500/40">
                  <div className="flex justify-between items-center text-emerald-400 text-xs mb-1 font-mono">
                    <span>المقبولون المعتمدون</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">{approvedCount}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">جاهزون للمهام VIP</div>
                </div>

                <div className="tactical-card rounded-xl p-4 border-red-500/40">
                  <div className="flex justify-between items-center text-red-400 text-xs mb-1 font-mono">
                    <span>المرفوضون</span>
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-red-400 font-mono">{rejectedCount}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">دون المعايير</div>
                </div>

                <div className="tactical-card rounded-xl p-4 col-span-2 lg:col-span-1">
                  <div className="flex justify-between items-center text-cyan-400 text-xs mb-1 font-mono">
                    <span>متوسط الطول</span>
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">{avgHeight} سم</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">معيار بطل العالم</div>
                </div>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="p-4 rounded-xl bg-[#12141A] border border-[#262B38] flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="بحث بالاسم، الكود، المحافظة، الفنون..."
                    className="w-full bg-[#181B24] border border-[#262B38] focus:border-[#D4AF37] rounded-lg pr-10 pl-3 py-2 text-xs text-white placeholder-slate-500 outline-none"
                  />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      statusFilter === 'all'
                        ? 'bg-white text-black'
                        : 'bg-[#181B24] text-slate-400 hover:text-white'
                    }`}
                  >
                    الكل ({totalCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('pending')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      statusFilter === 'pending'
                        ? 'bg-[#D4AF37] text-black'
                        : 'bg-[#181B24] text-slate-400 hover:text-white'
                    }`}
                  >
                    قيد المراجعة ({pendingCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('approved')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      statusFilter === 'approved'
                        ? 'bg-emerald-500 text-black'
                        : 'bg-[#181B24] text-slate-400 hover:text-white'
                    }`}
                  >
                    المعتمدون ({approvedCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('rejected')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      statusFilter === 'rejected'
                        ? 'bg-red-500 text-white'
                        : 'bg-[#181B24] text-slate-400 hover:text-white'
                    }`}
                  >
                    المرفوضون ({rejectedCount})
                  </button>
                </div>

                {/* Height Filter */}
                <div className="flex items-center gap-2 text-xs text-slate-300 w-full md:w-auto justify-end">
                  <span className="font-mono text-slate-400">طول نخبوي:</span>
                  <select
                    value={minHeightFilter}
                    onChange={(e) => setMinHeightFilter(Number(e.target.value))}
                    className="bg-[#181B24] border border-[#262B38] text-white rounded-lg px-2.5 py-1.5 text-xs outline-none"
                  >
                    <option value="0">جميع الأطوال</option>
                    <option value="190">190+ سم فقط</option>
                    <option value="193">193+ سم عملاق</option>
                  </select>
                </div>
              </div>

              {/* Data Table */}
              <div className="tactical-card rounded-2xl overflow-hidden border border-[#262B38]">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-[#141720] border-b border-[#262B38] text-slate-400 font-mono">
                      <tr>
                        <th className="py-3.5 px-4 font-bold">الكود والصورة</th>
                        <th className="py-3.5 px-4 font-bold">الاسم والسن</th>
                        <th className="py-3.5 px-4 font-bold">المواصفة البدنية</th>
                        <th className="py-3.5 px-4 font-bold">السلاح والتدريب</th>
                        <th className="py-3.5 px-4 font-bold">الفنون القتالية</th>
                        <th className="py-3.5 px-4 font-bold">الحالة</th>
                        <th className="py-3.5 px-4 font-bold text-center">إجراءات القيادة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredApps.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-500">
                            لا توجد طلبات تطابق الفلتر المحدد.
                          </td>
                        </tr>
                      ) : (
                        filteredApps.map((app) => (
                          <tr
                            key={app.id}
                            className="hover:bg-[#181B26]/60 transition-colors group"
                          >
                            {/* Code & Photo */}
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-10 h-12 rounded-lg bg-[#12141A] border border-white/10 overflow-hidden shrink-0">
                                  <img
                                    src={app.photo_url}
                                    alt={app.full_name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <span className="font-mono text-[#D4AF37] font-bold block">
                                    {app.tactical_code}
                                  </span>
                                  <span className="text-[10px] text-slate-500 font-mono">
                                    {app.created_at ? app.created_at.slice(0, 10) : ''}
                                  </span>
                                </div>
                              </div>
                            </td>

                            {/* Name & Age */}
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-white text-sm">{app.full_name}</div>
                              <div className="text-[11px] text-slate-400">
                                {app.age} سنة • {app.city}
                              </div>
                            </td>

                            {/* Physical Metrics */}
                            <td className="py-3.5 px-4">
                              <div className="font-mono font-bold text-white">
                                <span className={app.height_cm >= 190 ? 'text-emerald-400' : 'text-slate-300'}>
                                  {app.height_cm} سم
                                </span>
                                {' '}/ {app.weight_kg} كجم
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">
                                لياقة: {app.fitness_level}
                              </div>
                            </td>

                            {/* Military & Weapons */}
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-slate-200">{app.military_service}</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                {app.weapons_training && (
                                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                                    رماية
                                  </span>
                                )}
                                {app.driving_license && (
                                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    قيادة
                                  </span>
                                )}
                                <span className="text-[10px] text-slate-400 font-mono">
                                  خبرة {app.experience_years} سنوات
                                </span>
                              </div>
                            </td>

                            {/* Martial Arts */}
                            <td className="py-3.5 px-4">
                              <div className="flex flex-wrap gap-1 max-w-[180px]">
                                {app.martial_arts.slice(0, 2).map((m, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[10px] px-1.5 py-0.5 rounded bg-[#1C202C] text-slate-300"
                                  >
                                    {m}
                                  </span>
                                ))}
                                {app.martial_arts.length > 2 && (
                                  <span className="text-[10px] text-slate-500 font-mono">
                                    +{app.martial_arts.length - 2}
                                  </span>
                                )}
                              </div>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4">
                              {app.status === 'approved' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                                  <Check className="w-3 h-3" />
                                  معتمد VIP
                                </span>
                              )}
                              {app.status === 'pending' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-bold">
                                  <Clock className="w-3 h-3" />
                                  قيد الفحص
                                </span>
                              )}
                              {app.status === 'rejected' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-[11px] font-bold">
                                  <X className="w-3 h-3" />
                                  مرفوض
                                </span>
                              )}
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                {/* Inspect Full Card */}
                                <button
                                  onClick={() => setSelectedApp(app)}
                                  className="p-1.5 rounded-lg bg-[#1F2432] text-slate-300 hover:text-white hover:bg-[#2A3144] transition-colors"
                                  title="معاينة الملف الكامل"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>

                                {/* Direct WhatsApp */}
                                <a
                                  href={getWhatsAppInterviewLink(app)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                                  title="مراسلة ودعوة للمقابلة عبر واتساب"
                                >
                                  <Send className="w-4 h-4" />
                                </a>

                                {/* Approve */}
                                {app.status !== 'approved' && (
                                  <button
                                    onClick={() => handleStatusChange(app.id, 'approved')}
                                    className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"
                                    title="قبول واعتماد"
                                  >
                                    <Check className="w-4 h-4" />
                                  </button>
                                )}

                                {/* Reject */}
                                {app.status !== 'rejected' && (
                                  <button
                                    onClick={() => handleStatusChange(app.id, 'rejected')}
                                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                                    title="رفض الطلب"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                )}

                                {/* Delete */}
                                <button
                                  onClick={() => handleDelete(app.id)}
                                  className="p-1.5 rounded-lg bg-[#1A1D26] text-slate-500 hover:text-red-400 transition-colors"
                                  title="حذف نهائي"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Candidate Detail Modal */}
              {selectedApp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
                  <div className="relative w-full max-w-2xl bg-[#12141A] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
                    <button
                      onClick={() => setSelectedApp(null)}
                      className="absolute top-5 left-5 p-2 rounded-lg bg-[#1E2230] text-slate-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                      <div className="w-28 h-36 rounded-xl bg-black border-2 border-[#D4AF37]/40 overflow-hidden shrink-0 shadow-lg">
                        <img
                          src={selectedApp.photo_url}
                          alt={selectedApp.full_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-right">
                        <span className="text-xs font-mono text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                          {selectedApp.tactical_code}
                        </span>
                        <h3 className="text-2xl font-black text-white mt-2">
                          {selectedApp.full_name}
                        </h3>
                        <div className="text-xs text-slate-400 mt-1">
                          الرقم القومي: <span className="font-mono text-slate-300">{selectedApp.national_id || 'مرفق بالطلب'}</span>
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          رقم الهاتف: <span className="font-mono text-white">{selectedApp.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#181B26] border border-white/5 mb-6 text-center">
                      <div>
                        <div className="text-[11px] text-slate-400">الطول</div>
                        <div className="text-lg font-black text-white font-mono">{selectedApp.height_cm} سم</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">الوزن</div>
                        <div className="text-lg font-black text-white font-mono">{selectedApp.weight_kg} كجم</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">اللياقة</div>
                        <div className="text-xs font-bold text-[#D4AF37] mt-1">{selectedApp.fitness_level}</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">سنوات الخبرة</div>
                        <div className="text-lg font-black text-white font-mono">{selectedApp.experience_years} سنين</div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-3 text-xs text-slate-300 mb-6">
                      <div>
                        <strong className="text-white">سلاح الخدمة العسكرية:</strong> {selectedApp.military_service}
                      </div>
                      <div>
                        <strong className="text-white">الفنون القتالية:</strong> {selectedApp.martial_arts.join(' • ')}
                      </div>
                      <div>
                        <strong className="text-white">سوابق العمل والحفلات:</strong>{' '}
                        <p className="mt-1 p-2.5 rounded-lg bg-[#181B26] text-slate-300 leading-relaxed">
                          {selectedApp.previous_events || 'لا توجد ملاحظات إضافية'}
                        </p>
                      </div>
                      {selectedApp.notes && (
                        <div>
                          <strong className="text-white">ملاحظات الفحص التكتيكي:</strong>{' '}
                          <p className="mt-1 p-2.5 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] leading-relaxed">
                            {selectedApp.notes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStatusChange(selectedApp.id, 'approved')}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>اعتماد وقبول الجارد</span>
                        </button>
                        <button
                          onClick={() => handleStatusChange(selectedApp.id, 'rejected')}
                          className="px-4 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>رفض الملف</span>
                        </button>
                      </div>

                      <a
                        href={getWhatsAppInterviewLink(selectedApp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>دعوة للمقابلة عبر واتساب</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
