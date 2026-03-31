import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FeatureCard from '@/components/FeatureCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { features, getFeatureBySlug, Feature, FeatureCategory } from '@/data/features';
import { ReactNode } from 'react';

import DashboardMockup from '@/components/mockups/DashboardMockup';
import ScheduleMockup from '@/components/mockups/ScheduleMockup';
import MobileMockup from '@/components/mockups/MobileMockup';
import MapMockup from '@/components/mockups/MapMockup';
import InvoiceMockup from '@/components/mockups/InvoiceMockup';
import ChatMockup from '@/components/mockups/ChatMockup';
import PhoneMockup from '@/components/mockups/PhoneMockup';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getMockupForFeature(feature: Feature): ReactNode {
  const { slug, category } = feature;

  // Specific slug overrides
  if (slug === 'scheduling-and-dispatching') return <ScheduleMockup />;
  if (slug === 'gps-tracking') return <MapMockup />;
  if (slug === 'mobile-app') return <MobileMockup />;
  if (slug === 'invoicing-and-payments') return <InvoiceMockup />;
  if (slug === 'ai-phone-agent') return <PhoneMockup />;
  if (slug === 'ai-chatbot') return <ChatMockup />;

  // Category-based fallbacks
  switch (category) {
    case 'office':
      return <ScheduleMockup />;
    case 'field':
      return <MobileMockup />;
    case 'customer':
      return <InvoiceMockup />;
    case 'ai':
      return <ChatMockup />;
    default:
      return <DashboardMockup />;
  }
}

function getHeroMockupForFeature(feature: Feature): ReactNode {
  const { slug, category } = feature;

  if (slug === 'scheduling-and-dispatching') return <ScheduleMockup className="lg:scale-110 origin-left" />;
  if (slug === 'gps-tracking') return <MapMockup className="lg:scale-110 origin-left" />;
  if (slug === 'mobile-app') return <MobileMockup />;
  if (slug === 'invoicing-and-payments') return <InvoiceMockup />;
  if (slug === 'ai-phone-agent') return <PhoneMockup />;
  if (slug === 'ai-chatbot') return <ChatMockup />;

  switch (category) {
    case 'office':
      return <DashboardMockup className="lg:scale-110 origin-left" />;
    case 'field':
      return <MapMockup className="lg:scale-110 origin-left" />;
    case 'customer':
      return <InvoiceMockup />;
    case 'ai':
      return <ChatMockup />;
    default:
      return <DashboardMockup className="lg:scale-110 origin-left" />;
  }
}

function getRelatedFeatures(feature: Feature): Feature[] {
  const sameCategory = features.filter(
    (f) => f.category === feature.category && f.slug !== feature.slug
  );
  if (sameCategory.length >= 3) return sameCategory.slice(0, 3);

  // Pad with features from other categories
  const others = features.filter(
    (f) => f.slug !== feature.slug && !sameCategory.includes(f)
  );
  return [...sameCategory, ...others].slice(0, 3);
}

// Icons for quick benefits and highlight cards
const quickBenefitIcons = ['Zap', 'Clock', 'TrendingUp', 'Shield'];
const highlightIcons = ['CheckCircle', 'Settings', 'Smartphone', 'BarChart3'];

export async function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return { title: 'Feature Not Found — BeMyCrew' };

  return {
    title: `${feature.name} — BeMyCrew`,
    description: feature.longDescription.slice(0, 160),
  };
}

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const relatedFeatures = getRelatedFeatures(feature);
  const heroMockup = getHeroMockupForFeature(feature);

  // Split benefits for different sections
  const firstHalf = feature.benefits.slice(0, Math.ceil(feature.benefits.length / 2));
  const secondHalf = feature.benefits.slice(Math.ceil(feature.benefits.length / 2));

  // Quick benefit highlights (up to 4 from benefit titles)
  const quickBenefits = feature.benefits.slice(0, 4).map((b, i) => ({
    icon: quickBenefitIcons[i % quickBenefitIcons.length],
    title: b.title,
  }));

  // Highlight cards for "What's Included"
  const highlightCards = feature.benefits.slice(0, 4).map((b, i) => ({
    icon: highlightIcons[i % highlightIcons.length],
    title: b.title,
    description: b.description.length > 120 ? b.description.slice(0, 117) + '...' : b.description,
  }));

  return (
    <>
      {/* ─── Split Hero ────────────────────────────────────────────── */}
      <Hero
        title={feature.name}
        subtitle={feature.longDescription}
        badge="Feature"
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'View All Features', href: '/features' }}
      >
        {heroMockup}
      </Hero>

      {/* ─── Quick Benefits Bar ────────────────────────────────────── */}
      <section className="relative z-10 -mt-6 lg:-mt-8">
        <div className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/50 p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickBenefits.map((qb) => (
                <div key={qb.title} className="flex items-start gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-xl shrink-0">
                    <Icon name={qb.icon} className="w-5 h-5 text-blue-600" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900 leading-snug pt-2">
                    {qb.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Detailed Section 1 ────────────────────────────────────── */}
      <FeatureSection
        title={`Why ${feature.name} Matters`}
        description="See how this feature helps field service businesses save time, earn more, and deliver better customer experiences."
        benefits={firstHalf.map((b) => ({
          icon: 'CheckCircle',
          title: b.title,
          description: b.description,
        }))}
        mockup={getMockupForFeature(feature)}
      />

      {/* ─── Detailed Section 2 (dark, reversed) ──────────────────── */}
      {secondHalf.length > 0 && (
        <FeatureSection
          title="Built for the Way You Work"
          description="Every feature in BeMyCrew is designed around real field service workflows — not generic project management."
          benefits={secondHalf.map((b) => ({
            icon: 'Target',
            title: b.title,
            description: b.description,
          }))}
          mockup={getMockupForFeature(feature)}
          reversed
          dark
        />
      )}

      {/* ─── What's Included Grid ──────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              What&apos;s Included
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to run {feature.name.toLowerCase()} like a pro — built in, not bolted on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                  <Icon name={card.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Features ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Related Features
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {feature.name} works even better with these complementary tools.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFeatures.map((rf) => (
              <FeatureCard
                key={rf.slug}
                icon={rf.icon}
                title={rf.name}
                description={rf.shortDescription}
                href={`/features/${rf.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <FAQSection
        faqs={feature.faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <CTASection
        title={`Try ${feature.name} Free`}
        subtitle="Open source — details coming soon. Set up in under 15 minutes and see the difference today."
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
