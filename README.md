# 🛡️ CYBERX VIP SECURITY & BODYGUARD AGENCY
### حراسة خبير.. تأمين بلا حدود | VIP Protection & Event Security
**Inspired by the elite bodyguard aesthetic of the TV show "بطل العالم" (Batal El Alam)**

---

## 🌟 Overview & Architecture
**CYBERX VIP SECURITY** is a high-end, dark luxury tactical web application engineered for elite VIP bodyguards, concert and festival protection, and celebrity escort services.

Developed with:
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a custom Dark Luxury Tactical design system (`#0A0A0C` deep onyx, `#12141A` dark slate, `#D4AF37` tactical gold, `#E63946` cyber crimson).
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/) with zero-downtime **Hybrid Local Storage Engine** fallback (runs immediately out-of-the-box even before setting up Supabase keys).
- **RTL**: 100% native Right-to-Left Arabic layout using Google Font **Cairo**.
- **Interactive Features**: Dynamic VIP Booking / Fast Quote Modal, Bodyguard Recruitment Portal (`/join`) with physical metrics and document preview, and Protected Founders Command Dashboard (`/admin`).

---

## 🚀 Key Pages & Features

### 1. Landing Page (`/`)
- **Cinematic Hero**: 8K tactical photography featuring VIP bodyguards in tailored black suits, sunglasses, and acoustic earpieces at a Cairo night concert with luxury SUVs.
- **Dynamic Counters**: +100 secured concerts, +500 elite guards (+190 cm), 0% security breaches, 24/7 tactical dispatch.
- **Services Grid**: 6 interactive service cards with squad sizes, response times, and 1-click booking:
  1. Celebrity & Artist Escort (تأمين الفنانين والمشاهير)
  2. Concert & Festival Security (تأمين الحفلات والمهرجانات)
  3. Executive Protection (حراسة شخصية VIP)
  4. Convoy & Crowd Control (إدارة المواكب وتشتيت الحشود)
  5. Diplomatic Conferences (تأمين المؤتمرات والفعاليات)
  6. Luxury Estate Defense (حراسة القصور والمقرات)
- **Tactical Doctrine**: The 4 pillars of "بطل العالم" (Elite physical standards +190 cm, CQC combat, zero-risk vetting, black suit protocol).
- **Founders & Leadership**: Dedicated cards for **الكابتن / كريم شاهين** and **الرائد م. / طارق الزيات** with credentials, military background, and direct contact buttons.
- **Showcase Gallery**: Tabbed portfolio (Concerts, Celebrity Escort, VIP Conferences, Tactical Formations) with lightbox zoom.
- **VIP Clients & Endorsements**: Testimonials from festival directors, celebrity managers, and producers.
- **Interactive Booking Modal**: Instant squad sizing slider (2 to 50+ guards), armored SUV option, and direct WhatsApp booking dispatch generator.

### 2. Bodyguard Recruitment Portal (`/join`)
- 4-step tactical intake form:
  - Personal details & National ID.
  - Physical metrics (Height with +190cm feedback, Weight, Fitness level, Martial Arts tags).
  - Military background (قوات الصاعقة، حرس جمهوري، شرطة عسكرية، مظلات) & weapons training.
  - Photo upload with live preview (suit photo + National ID).
- Automated generation of a unique tactical code (e.g. `CXG-9102`).
- Direct WhatsApp link to the recruitment officer with application code.

### 3. Founders Admin Portal (`/admin`)
- Protected by PIN / Passcode (Default: `cyberx2026`).
- Overview metric widgets (Total Applicants, Pending Review, Approved Squad, Rejected, Average Height).
- Interactive filterable table with search, status filters (All, Pending, Approved, Rejected), and height threshold (+190 cm).
- Candidate detail modal with photo inspection and military profile.
- One-click actions:
  - **Approve**: Marks guard as VIP Approved.
  - **Reject**: Marks guard as Rejected.
  - **Direct WhatsApp**: Auto-opens WhatsApp to message the applicant with an official interview invitation template.
- Export all bodyguard records to **CSV / Excel**.

---

## 🛠️ Getting Started (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/your-username/cyberx-guards.git
cd cyberx-guards

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase Setup (Optional)

1. Create a free project on [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in Supabase and run the script in `supabase_schema.sql`.
3. Copy your project URL and anon public key into `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
*Note: If these environment variables are omitted, the application uses its built-in LocalStorage engine with pre-seeded demo guards so everything is 100% testable right away.*

---

## 🚀 Deployment to Vercel

1. Push this project to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Next.js will be automatically detected.
4. (Optional) Add your Supabase environment variables if you set up Supabase.
5. Click **Deploy**. Your app will be live with high availability and CDN optimization!

---

## 🛡️ Mandatory Signature
**Developed & Engineered by CyberX | جميع الحقوق محفوظة لـ CyberX ©**
