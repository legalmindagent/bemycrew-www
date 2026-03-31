import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'FAQ — BeMyCrew',
  description:
    'Frequently asked questions about BeMyCrew. Learn about features, open source, setup, and more.',
};

const faqs = [
  {
    question: 'What is BeMyCrew?',
    answer:
      'BeMyCrew is an open-source, AI-powered field service management platform built specifically for small businesses in the trades. It helps you manage scheduling, dispatch, invoicing, customer communication, and more — all from one place. We are open sourcing the entire platform so every small business can access enterprise-grade tools for free.',
  },
  {
    question: 'How much does BeMyCrew cost?',
    answer:
      'BeMyCrew is open source. You pay only the base cost of services — typically $5-15/month for Twilio, hosting, etc. No SaaS markup.',
  },
  {
    question: 'Is BeMyCrew really free?',
    answer:
      'BeMyCrew is free and open source under the MIT License. You can self-host the entire platform for free. A hosted version is coming soon. Email hello@bemycrew.com or follow us for details.',
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
      'BeMyCrew is open source — there is nothing to cancel. You own the software. If you use our hosted version, you can leave at any time with no fees or contracts. We also provide a full data export so your data is always yours.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer community support via GitHub and email support at hello@bemycrew.com. We also have a growing library of help articles and video tutorials.',
  },
  {
    question: 'How is BeMyCrew different from other field service software?',
    answer:
      'BeMyCrew is open source and built from the ground up with AI at its core. While competitors like ServiceTitan charge hundreds per technician per month, BeMyCrew is free to self-host. We deliver powerful features — including AI-powered dispatch, voice AI, and smart scheduling — without the enterprise price tag. Open source means you own your tools and your data.',
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
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
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
