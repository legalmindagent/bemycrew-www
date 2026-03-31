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
    'Free, open-source AI-powered field service management. Voice agent, smart dispatch, scheduling, invoicing — costs $5-15/month to run. MIT License.',
  openGraph: {
    title: 'BeMyCrew — Dispatch Smarter. Grow Faster.',
    description:
      'Free, open-source AI-powered field service management. Voice agent, smart dispatch, scheduling, invoicing — costs $5-15/month to run. MIT License.',
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
