export interface BodyguardApplication {
  id: string;
  tactical_code: string;
  full_name: string;
  age: number;
  phone: string;
  city: string;
  national_id: string;
  height_cm: number;
  weight_kg: number;
  fitness_level: 'مقاتل محترف' | 'ممتاز' | 'متقدم' | 'جيد جداً';
  martial_arts: string[];
  military_service: string;
  weapons_training: boolean;
  driving_license: boolean;
  experience_years: number;
  previous_events: string;
  photo_url: string;
  id_card_url?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  notes?: string;
}

export interface VIPBookingRequest {
  id: string;
  client_name: string;
  client_phone: string;
  client_category: 'فنان ومشاهير' | 'حفل ومهرجان جماهيري' | 'شخصية VIP ودبلوماسي' | 'مؤتمر ورجال أعمال';
  service_type: string;
  guards_count: number;
  mission_date: string;
  city: string;
  armored_vehicles: boolean;
  special_requirements?: string;
  created_at: string;
  status: 'new' | 'contacted' | 'confirmed';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'حفلات ومهرجانات' | 'تأمين فنانين ومشاهير' | 'مؤتمرات VIP' | 'تشكيلات وتدريبات';
  location: string;
  year: string;
  guardsCount: number;
  image: string;
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  iconName: string;
  features: string[];
  squadSize: string;
  responseTime: string;
  highlight?: boolean;
}
