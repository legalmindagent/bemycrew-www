import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing — BeMyCrew',
  description:
    'Simple, flat-rate pricing starting at $99/mo. No per-technician fees. No surprises. Choose Starter, Professional, or Enterprise.',
};

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: 'mo',
    description: 'Everything a small crew needs to go digital.',
    features: [
      'Up to 3 technicians',
      'Scheduling & dispatch board',
      'Work order management',
      'Estimates & invoicing',
      'Customer CRM',
      'Mobile PWA app',
      'Two-way SMS notifications',
    ],
    highlighted: false,
    ctaText: 'Start Free Trial',
    ctaHref: '/signup?plan=starter',
  },
  {
    name: 'Professional',
    price: '$249',
    period: 'mo',
    description: 'AI-powered tools for growing businesses.',
    features: [
      'Up to 10 technicians',
      'Everything in Starter, plus:',
      'AI dispatch & technician matching',
      'Route optimization',
      'Custom workflows',
      'Online booking portal',
      'Project management',
      'Advanced reporting & KPIs',
      'Consumer financing',
    ],
    highlighted: true,
    ctaText: 'Start Free Trial',
    ctaHref: '/signup?plan=professional',
  },
  {
    name: 'Enterprise',
    price: '$499',
    period: 'mo',
    description: 'Unlimited scale with full AI suite.',
    features: [
      'Unlimited technicians',
      'Everything in Professional, plus:',
      'Voice AI phone agent',
      'AI chatbot for your website',
      'VoIP phone system',
      'Multi-location management',
      'White-label branding',
      'API access',
      'Dedicated support manager',
    ],
    highlighted: false,
    ctaText: 'Start Free Trial',
    ctaHref: '/signup?plan=enterprise',
  },
];

const allPlansInclude = [
  { icon: '🎓', label: 'Free onboarding & setup' },
  { icon: '📱', label: 'PWA mobile app (iOS & Android)' },
  { icon: '🔒', label: 'SSL encryption & data security' },
  { icon: '✅', label: '99.9% uptime SLA' },
  { icon: '📧', label: 'Email & chat support' },
];

const pricingFaqs = [
  {
    question: 'Are there any per-technician fees?',
    answer:
      'No. BeMyCrew uses flat monthly pricing. Your Starter plan covers up to 3 technicians, Professional covers up to 10, and Enterprise is unlimited — all at one predictable price.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or downgrade at any time. When you upgrade, the new features are available immediately. Downgrades take effect at your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Every plan comes with a 14-day free trial. No credit card required to start. You get full access to all features in your chosen plan.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for annual plans.',
  },
  {
    question: 'Do you offer annual billing discounts?',
    answer:
      'Yes. Pay annually and save 20% — that brings Starter to $79/mo, Professional to $199/mo, and Enterprise to $399/mo.',
  },
  {
    question: 'What happens when I hit my technician limit?',
    answer:
      'You will get a notification when you are close to your limit. You can upgrade to the next plan at any time to add more technicians without losing any data.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Flat monthly rate. No per-technician fees. No surprises."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            All Plans Include
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto lg:max-w-none">
            {allPlansInclude.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl"
              >
                <span className="text-2xl mb-3">{item.icon}</span>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={pricingFaqs} />

      <CTASection
        title="Ready to Get Started?"
        subtitle="Start your 14-day free trial today. No credit card required."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Talk to Sales', href: '/contact' }}
      />
    </>
  );
}
