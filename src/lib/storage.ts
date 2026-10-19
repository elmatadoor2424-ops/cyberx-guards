import { BodyguardApplication, VIPBookingRequest } from '@/types';
import { supabase, isSupabaseConfigured } from './supabase';

const APPLICATIONS_KEY = 'cyberx_bodyguard_applications';
const BOOKINGS_KEY = 'cyberx_vip_bookings';

export const INITIAL_DEMO_APPLICATIONS: BodyguardApplication[] = [
  {
    id: 'app-001',
    tactical_code: 'CXG-9102',
    full_name: 'إسلام منصور القاضي',
    age: 28,
    phone: '201012345678',
    city: 'القاهرة - المعادي',
    national_id: '29604150102345',
    height_cm: 194,
    weight_kg: 105,
    fitness_level: 'مقاتل محترف',
    martial_arts: ['MMA', 'ملاكمة', 'كراف ماجا'],
    military_service: 'قوات الصاعقة 777 (قدوة حسنة)',
    weapons_training: true,
    driving_license: true,
    experience_years: 6,
    previous_events: 'تأمين حفل مهرجان العلمين 2024، مرافقة فنان صف أول بالساحل الشمالي، موكب سفارة أجنبية.',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    status: 'approved',
    created_at: '2026-10-18T10:30:00Z',
    notes: 'بنية جسدية جبارة، رد فعل سريع جداً، حاصل على دورة حماية كبار الشخصيات VIP.',
  },
  {
    id: 'app-002',
    tactical_code: 'CXG-8471',
    full_name: 'أحمد سعيد الرفاعي',
    age: 26,
    phone: '201198765432',
    city: 'الإسكندرية - سموحة',
    national_id: '29811200201298',
    height_cm: 191,
    weight_kg: 98,
    fitness_level: 'ممتاز',
    martial_arts: ['كيك بوكسينغ', 'جودو'],
    military_service: 'الحرس الجمهوري (كتيبة التأمين الرئاسي)',
    weapons_training: true,
    driving_license: true,
    experience_years: 4,
    previous_events: 'تأمين فعاليات أوبرا الإسكندرية ومؤتمرات رجال أعمال بفورسيزونز.',
    photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    status: 'pending',
    created_at: '2026-10-19T08:15:00Z',
    notes: 'هادئ تحت الضغط، لغة إنجليزية ممتازة، مظهر رسمي فخم.',
  },
  {
    id: 'app-003',
    tactical_code: 'CXG-7390',
    full_name: 'محمود جلال الدسوقي',
    age: 31,
    phone: '201234567890',
    city: 'الجيزة - الشيخ زايد',
    national_id: '29307050104567',
    height_cm: 196,
    weight_kg: 112,
    fitness_level: 'مقاتل محترف',
    martial_arts: ['مصارعة رومانية', 'مواي تاي', 'ملاكمة'],
    military_service: 'الشرطة العسكرية / المظلات',
    weapons_training: true,
    driving_license: true,
    experience_years: 8,
    previous_events: 'حراسة لصيقة لكبار نجوم السينما المصرية بمهرجان الجونة 3 دورات متتالية.',
    photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    status: 'pending',
    created_at: '2026-10-19T14:20:00Z',
    notes: 'قائد تشكيل حراسة كواليس ومسارح، خبير إخلاء طوارئ.',
  },
  {
    id: 'app-004',
    tactical_code: 'CXG-6215',
    full_name: 'يوسف رجب عبد العظيم',
    age: 24,
    phone: '201501239874',
    city: 'الشرقية - الزقازيق',
    national_id: '30002151301987',
    height_cm: 184,
    weight_kg: 82,
    fitness_level: 'جيد جداً',
    martial_arts: ['كاراتيه'],
    military_service: 'خدمة عامة',
    weapons_training: false,
    driving_license: true,
    experience_years: 1,
    previous_events: 'حراسة بوابات في مول تجاري.',
    photo_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    status: 'rejected',
    created_at: '2026-10-17T11:00:00Z',
    notes: 'الطول والخبرة الميدانية التكتيكية دون الحد الأدنى المطلوب لفرق VIP.',
  }
];

export async function getApplications(): Promise<BodyguardApplication[]> {
  if (typeof window === 'undefined') return INITIAL_DEMO_APPLICATIONS;

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('bodyguard_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data as BodyguardApplication[];
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local storage:', e);
    }
  }

  // Local Storage Fallback
  const stored = localStorage.getItem(APPLICATIONS_KEY);
  if (!stored) {
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(INITIAL_DEMO_APPLICATIONS));
    return INITIAL_DEMO_APPLICATIONS;
  }

  try {
    return JSON.parse(stored);
  } catch {
    return INITIAL_DEMO_APPLICATIONS;
  }
}

export async function createApplication(
  appData: Omit<BodyguardApplication, 'id' | 'created_at' | 'status' | 'tactical_code'>
): Promise<BodyguardApplication> {
  const tactical_code = `CXG-${Math.floor(1000 + Math.random() * 9000)}`;
  const newApp: BodyguardApplication = {
    ...appData,
    id: `app-${Date.now()}`,
    tactical_code,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('bodyguard_applications')
        .insert([newApp])
        .select()
        .single();

      if (!error && data) {
        return data as BodyguardApplication;
      }
    } catch (e) {
      console.warn('Supabase insert failed, storing locally:', e);
    }
  }

  // Local Storage save
  if (typeof window !== 'undefined') {
    const apps = await getApplications();
    const updated = [newApp, ...apps];
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
  }

  return newApp;
}

export async function updateApplicationStatus(
  id: string,
  status: 'approved' | 'rejected' | 'pending'
): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('bodyguard_applications')
        .update({ status })
        .eq('id', id);

      if (!error) return true;
    } catch (e) {
      console.warn('Supabase update failed, updating locally:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const apps = await getApplications();
    const updated = apps.map((a) => (a.id === id ? { ...a, status } : a));
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
    return true;
  }

  return false;
}

export async function deleteApplication(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('bodyguard_applications')
        .delete()
        .eq('id', id);

      if (!error) return true;
    } catch (e) {
      console.warn('Supabase delete failed, deleting locally:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const apps = await getApplications();
    const updated = apps.filter((a) => a.id !== id);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
    return true;
  }

  return false;
}

export function resetDemoApplications(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(INITIAL_DEMO_APPLICATIONS));
  }
}

// VIP Booking Requests
export async function saveBookingRequest(
  bookingData: Omit<VIPBookingRequest, 'id' | 'created_at' | 'status'>
): Promise<VIPBookingRequest> {
  const newBooking: VIPBookingRequest = {
    ...bookingData,
    id: `book-${Date.now()}`,
    status: 'new',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('vip_bookings').insert([newBooking]);
    } catch (e) {
      console.warn('Supabase booking save failed:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem(BOOKINGS_KEY);
    const bookings = existing ? JSON.parse(existing) : [];
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify([newBooking, ...bookings]));
  }

  return newBooking;
}
