import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeatureCard from '@/components/FeatureCard';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import DashboardMockup from '@/components/mockups/DashboardMockup';
import MobileMockup from '@/components/mockups/MobileMockup';
import ScheduleMockup from '@/components/mockups/ScheduleMockup';
import {
  featuresByCategory,
  categoryLabels,
  categoryDescriptions,
  type FeatureCategory,
} from '@/data/features';
import Link from 'next/link';
import Icon from '@/components/Icon';

const categoriesToShow: FeatureCategory[] = ['office', 'field', 'customer', 'ai'];

const aiHighlights = [
  {
    icon: 'Brain',
    title: 'AI Dispatch',
    description:
      'ML-powered technician scoring matches the right tech to every job based on skills, location, and workload.',
    href: '/features/ai-dispatch',
  },
  {
    icon: 'MessageCircle',
    title: 'AI Chatbot',
    description:
      'Claude-powered website chatbot handles customer questions, books appointments, and generates leads 24/7.',
    href: '/features/ai-chatbot',
  },
  {
    icon: 'Mic',
    title: 'Voice AI',
    description:
      'AI phone agent answers calls, qualifies leads, and books jobs — even after hours when you can\'t pick up.',
    href: '/features/voice-ai',
  },
  {
    icon: 'Package',
    title: 'AI Inventory',
    description:
      'Snap a photo of any part and AI identifies it, checks stock levels, and suggests reorder quantities.',
    href: '/features/ai-inventory',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Now in Early Access"
        title="Dispatch Smarter. Grow Faster."
        subtitle="AI-powered field service management that's affordable for every small business. From voice AI to complete enterprise systems."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      >
        <div className="relative" style={{ perspective: '1000px' }}>
          <div style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }} className="shadow-2xl shadow-blue-500/20 rounded-xl overflow-hidden border border-white/10">
            <DashboardMockup />
          </div>
        </div>
      </Hero>

      <StatsSection />

      {/* Voice AI Standalone Callout */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-full">
            <Icon name="Phone" className="w-4 h-4" />
            Standalone Product
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Just need a phone agent? Start at $25/mo
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Not ready for the full platform? Our AI phone agent answers your calls 24/7, captures leads, and sends you notifications — for just $25/month. No commitment. Upgrade anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/voice-ai"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg shadow-orange-500/25"
            >
              <Icon name="Mic" className="w-5 h-5" />
              Learn More
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-colors"
            >
              See All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Limitations apply. Includes 100 minutes/mo. Additional minutes billed at usage rates.
          </p>
        </div>
      </section>

      {/* Features by Category */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Everything You Need to Run Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              27+ features across four categories — from office operations to AI-powered automation.
            </p>
          </div>

          {categoriesToShow.map((category) => {
            const categoryFeatures = featuresByCategory[category].slice(0, 3);
            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {categoryLabels[category]}
                  </h3>
                  <p className="mt-2 text-slate-600">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryFeatures.map((feature) => (
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
            );
          })}
        </div>
      </section>

      {/* See It In Action */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">See It In Action</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">A complete platform that works on desktop and mobile — even offline.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <ScheduleMockup />
              </div>
              <p className="text-center text-sm font-medium text-slate-700">Drag-and-Drop Scheduling</p>
            </div>
            <div className="space-y-4 lg:-mt-8">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <DashboardMockup />
              </div>
              <p className="text-center text-sm font-medium text-slate-700">Dispatch Dashboard</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-48 sm:w-56">
                <MobileMockup />
              </div>
              <p className="text-center text-sm font-medium text-slate-700">Technician Mobile App</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-First Platform */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              AI-First Platform
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Four AI Engines. Zero Extra Cost.
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Every competitor charges extra for AI. BeMyCrew includes all four engines in
              the Professional and Enterprise plans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="mb-4">
                  <Icon name={item.icon} className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection
        title="Ready to Dispatch Smarter?"
        subtitle="Join thousands of field service businesses growing with BeMyCrew. Start your free trial today — no credit card required."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
