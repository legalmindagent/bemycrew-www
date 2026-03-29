import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import {
  featuresByCategory,
  categoryLabels,
  categoryDescriptions,
  FeatureCategory,
} from '@/data/features';

export const metadata: Metadata = {
  title: 'Features — BeMyCrew',
  description:
    '27+ features built for field service companies. Scheduling, dispatching, invoicing, AI-powered tools, and more — all in one platform.',
};

const categoryOrder: FeatureCategory[] = ['office', 'field', 'customer', 'ai'];

const categoryIcons: Record<FeatureCategory, string> = {
  office: '🏢',
  field: '📱',
  customer: '⭐',
  ai: '🤖',
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        title="Everything You Need to Run Your Business"
        subtitle="27+ features built for field service companies — scheduling, dispatch, invoicing, payments, AI, and more. One platform, one price, no per-user fees."
        badge="Full Feature Suite"
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'View Pricing', href: '/pricing' }}
      />

      {categoryOrder.map((category) => (
        <section key={category} className="py-16 sm:py-24 even:bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-50 rounded-xl">
                {categoryIcons[category]}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {categoryLabels[category]}
              </h2>
            </div>
            <p className="text-lg text-slate-600 mb-10 max-w-3xl">
              {categoryDescriptions[category]}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresByCategory[category].map((feature) => (
                <FeatureCard
                  key={feature.slug}
                  icon={feature.icon}
                  title={feature.name}
                  description={feature.shortDescription}
                  href={`/features/${feature.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Ready to See It in Action?"
        subtitle="Start your free trial today — no credit card required. Set up in under 15 minutes."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
