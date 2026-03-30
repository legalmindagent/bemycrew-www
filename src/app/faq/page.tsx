import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'FAQ — BeMyCrew',
  description:
    'Frequently asked questions about BeMyCrew. Learn about pricing, features, free trial, setup, and more.',
};

const faqs = [
  {
    question: 'What is BeMyCrew?',
    answer:
      'BeMyCrew is an AI-powered field service management platform built specifically for small businesses in the trades. It helps you manage scheduling, dispatch, invoicing, customer communication, and more — all from one place. We combine powerful features with affordable pricing so you can compete with larger companies without breaking the bank.',
  },
  {
    question: 'How much does BeMyCrew cost?',
    answer:
      'BeMyCrew starts at $99/month for our Starter plan, which includes all the core features most small businesses need. We also offer Professional and Enterprise plans with additional features like AI dispatch, VoIP phone systems, and advanced reporting. Visit our pricing page for full details.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the entire platform, set up your business, and see how BeMyCrew works before committing.',
  },
  {
    question: 'How long does it take to get set up?',
    answer:
      'Most businesses are up and running within 30 minutes. Our onboarding wizard walks you through setting up your company profile, adding team members, and importing existing customer data. If you need help, our support team is available to assist with setup at no extra cost.',
  },
  {
    question: 'Does BeMyCrew work on mobile devices?',
    answer:
      'Absolutely. BeMyCrew is fully mobile-responsive and works great on phones and tablets through any modern web browser. Your field technicians can view their schedules, update job statuses, capture signatures, take photos, and create invoices right from their phones.',
  },
  {
    question: 'What integrations does BeMyCrew support?',
    answer:
      'BeMyCrew integrates with popular tools including QuickBooks for accounting, Stripe for payment processing, Google Calendar for scheduling, and more. We are constantly adding new integrations based on customer feedback.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We take security seriously. All data is encrypted in transit with TLS and at rest with AES-256 encryption. We conduct regular security audits, maintain strict access controls, and follow industry best practices. Your business data is yours — we never sell it to third parties.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Yes, you can cancel your subscription at any time with no cancellation fees or long-term contracts. If you cancel, you will retain access to your account through the end of your current billing period. We also provide a 30-day window to export all your data after cancellation.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer email and chat support Monday through Friday, 8am to 6pm CT, and Saturday 9am to 1pm CT. Professional and Enterprise plan customers also get priority support with faster response times. We also have a growing library of help articles and video tutorials.',
  },
  {
    question: 'How is BeMyCrew different from other field service software?',
    answer:
      'BeMyCrew is built from the ground up with AI at its core and designed specifically for small businesses. While competitors like ServiceTitan target large enterprises with complex (and expensive) setups, BeMyCrew delivers powerful features — including AI-powered dispatch, voice AI, and smart scheduling — at a price small businesses can actually afford.',
  },
  {
    question: 'Can I import my existing data?',
    answer:
      'Yes. BeMyCrew supports importing customer lists, job history, and other data from CSV files. If you are migrating from another platform, our support team can help you transfer your data smoothly.',
  },
  {
    question: 'What trades does BeMyCrew work for?',
    answer:
      'BeMyCrew works for virtually any field service trade, including HVAC, plumbing, electrical, garage door, locksmith, appliance repair, fire and security, landscaping, cleaning services, pest control, general contracting, and more. If your business sends people out to do work, BeMyCrew can help.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about BeMyCrew. Can't find what you're looking for? Reach out to our team."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ text: 'View Pricing', href: '/pricing' }}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        title="Still Have Questions?"
        subtitle="Our team is happy to help. Book a demo or send us a message and we will get back to you within one business day."
        primaryCTA={{ text: 'Book a Demo', href: '/demo' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
