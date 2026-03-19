import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '954 Hauling | South Florida\'s Trusted Moving, Hauling & Junk Removal',
    template: '%s | 954 Hauling',
  },
  description:
    'Locally owned and fully licensed & insured hauling, moving, and junk removal company serving Broward, Miami-Dade, and Palm Beach counties. Call (954) 666-5517 for a free quote.',
  keywords: [
    'hauling',
    'moving company',
    'junk removal',
    'South Florida movers',
    'Broward County moving',
    'Miami-Dade hauling',
    'Palm Beach junk removal',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://954hauling.com',
    siteName: '954 Hauling',
    title: '954 Hauling | South Florida\'s Trusted Moving, Hauling & Junk Removal',
    description:
      'Locally owned and fully licensed & insured hauling, moving, and junk removal company serving all of South Florida.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
