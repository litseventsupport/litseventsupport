import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lits Event Support - Professional Event Organizer & Audio Visual Services",
  description: "Lits Event Support adalah perusahaan penyedia layanan event organizer profesional dengan pengalaman lebih dari 5 tahun. Kami menyediakan sound system, backdrop, lighting, dan semua kebutuhan event Anda.",
  keywords: [
    "event organizer",
    "audio visual",
    "sound system", 
    "backdrop",
    "event support",
    "jasa event",
    "organizer acara",
    "Lits Event Support",
    "event planning",
    "event management"
  ],
  authors: [{ name: "Lits Event Support" }],
  creator: "Lits Event Support",
  publisher: "Lits Event Support",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://litsevent.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lits Event Support - Professional Event Organizer",
    description: "Bikin acara event kamu makin seru dan berkesan bareng Lits Event Support. Kami siap bantu dari awal sampai acara selesai, tanpa ribet!",
    url: 'https://litsevent.com',
    siteName: 'Lits Event Support',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 200,
        alt: 'Lits Event Support Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lits Event Support - Professional Event Organizer",
    description: "Bikin acara event kamu makin seru dan berkesan bareng Lits Event Support",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://litsevent.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffaf5b" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
