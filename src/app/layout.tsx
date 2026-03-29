import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BeMyCrew — Dispatch Smarter. Grow Faster.',
  description:
    'AI-powered field service management software built for small businesses. Scheduling, dispatch, estimates, invoicing, CRM, and 4 AI engines — starting at $99/mo with no per-technician fees.',
  openGraph: {
    title: 'BeMyCrew — Dispatch Smarter. Grow Faster.',
    description:
      'AI-powered field service management software built for small businesses. Scheduling, dispatch, estimates, invoicing, CRM, and 4 AI engines — starting at $99/mo.',
    url: 'https://bemycrew.com',
    siteName: 'BeMyCrew',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
