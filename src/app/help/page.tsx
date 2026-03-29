import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Help Center — BeMyCrew',
  description:
    'Get help with BeMyCrew. Browse our help categories or contact our support team.',
};

const categories = [
  {
    title: 'Getting Started',
    description: 'Set up your account, add your team, and learn the basics of BeMyCrew.',
    href: '/faq',
    icon: 'Zap',
  },
  {
    title: 'Account & Billing',
    description: 'Manage your subscription, update payment methods, and view invoices.',
    href: '/faq',
    icon: 'CreditCard',
  },
  {
    title: 'Features & Tools',
    description: 'Learn how to use scheduling, dispatch, invoicing, estimates, and more.',
    href: '/faq',
    icon: 'Wrench',
  },
  {
    title: 'Mobile App',
    description: 'Using BeMyCrew on your phone or tablet in the field.',
    href: '/faq',
    icon: 'Smartphone',
  },
  {
    title: 'Integrations',
    description: 'Connect BeMyCrew with QuickBooks, Stripe, Google Calendar, and more.',
    href: '/faq',
    icon: 'Workflow',
  },
  {
    title: 'Contact Support',
    description: 'Can\'t find what you need? Get in touch with our support team directly.',
    href: '/contact',
    icon: 'MessageCircle',
  },
];

export default function HelpPage() {
  return (
    <>
      <Hero
        title="How Can We Help?"
        subtitle="Browse our help topics below or search for answers to your questions. Our support team is always here to help."
        primaryCTA={{ text: 'Contact Support', href: '/contact' }}
        secondaryCTA={{ text: 'View FAQ', href: '/faq' }}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon name={category.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Support Hours
          </h2>
          <div className="inline-block text-left bg-white rounded-xl border border-slate-200 p-6">
            <div className="space-y-2 text-base text-slate-600">
              <p><span className="font-medium text-slate-900">Monday - Friday:</span> 8am - 6pm CT</p>
              <p><span className="font-medium text-slate-900">Saturday:</span> 9am - 1pm CT</p>
              <p><span className="font-medium text-slate-900">Sunday:</span> Closed</p>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Email: <a href="mailto:support@bemycrew.com" className="text-blue-600 hover:underline">support@bemycrew.com</a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Can't Find What You Need?"
        subtitle="Our support team typically responds within one business day. We're here to help you get the most out of BeMyCrew."
        primaryCTA={{ text: 'Contact Support', href: '/contact' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
