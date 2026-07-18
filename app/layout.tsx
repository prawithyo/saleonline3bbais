import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saleonline3bbais.com"),

  title: {
    default: "สมัคร AIS 3BB FIBRE3 สุรินทร์ | ติดตั้งฟรี เช็กพื้นที่ออนไลน์",
    template: "%s | SaleOnline 3BB AIS",
  },

  description:
    "สมัครอินเทอร์เน็ตบ้าน AIS 3BB FIBRE3 ออนไลน์ เช็กพื้นที่ฟรี ติดตั้งฟรี รองรับลูกค้าจังหวัดสุรินทร์ พร้อมบริการหลังการขาย",

  keywords: [
    "AIS Fibre",
    "3BB Fibre3",
    "AIS 3BB",
    "สมัครเน็ตบ้าน",
    "ติดตั้งอินเทอร์เน็ต",
    "อินเทอร์เน็ตสุรินทร์",
    "AIS Fibre สุรินทร์",
    "3BB สุรินทร์",
    "Fiber Internet",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "สมัคร AIS 3BB FIBRE3",
    description:
      "สมัครออนไลน์ ติดตั้งฟรี เช็กพื้นที่ให้บริการฟรี",
    url: "https://saleonline3bbais.com",
    siteName: "SaleOnline 3BB AIS",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "AIS 3BB FIBRE3",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-ZW5D66CVYZ"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZW5D66CVYZ');
      
gtag('config', 'AW-8712767547');
    `}
  </Script>

  {children}

</body>
    </html>
  );
}
