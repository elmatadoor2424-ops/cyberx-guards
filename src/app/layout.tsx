import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CYBERX VIP SECURITY | سايبر إكس للحراسات وتأمين كبار الشخصيات",
  description:
    "المنظومة التكتيكية النخبوية لتأمين النجوم، الحفلات الكبرى، والشخصيات شديدة الأهمية بروح بطل العالم. حراسة خبير.. تأمين بلا حدود.",
  keywords: [
    "حراسات خاصة",
    "بودي جارد مصر",
    "تأمين حفلات",
    "تأمين فنانين",
    "VIP Bodyguards",
    "CyberX Security",
    "بطل العالم",
  ],
  authors: [{ name: "CyberX" }],
  openGraph: {
    title: "CYBERX VIP SECURITY | حراسة خبير.. تأمين بلا حدود",
    description: "المنظومة التكتيكية النخبوية لحراسة النجوم وتأمين أضخم المهرجانات",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${montserrat.variable} dark`}>
      <head>
        <meta name="theme-color" content="#0A0A0C" />
      </head>
      <body className="min-h-screen bg-[#0A0A0C] text-[#E2E8F0] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
