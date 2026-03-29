import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { features, getFeatureBySlug } from '@/data/features';

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

  return (
    <>
      <Hero
        title={feature.name}
        subtitle={feature.longDescription}
        badge={feature.icon + ' Feature'}
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'View All Features', href: '/features' }}
      />

      <FeatureSection
        title={`Why ${feature.name} Matters`}
        description="See how this feature helps field service businesses save time, earn more, and deliver better customer experiences."
        benefits={feature.benefits.map((b) => ({
          icon: 'CheckCircle',
          text: `${b.title}: ${b.description}`,
        }))}
        imageAlt={`${feature.name} screenshot`}
      />

      {feature.benefits.length > 2 && (
        <FeatureSection
          title="Built for the Way You Work"
          description="Every feature in BeMyCrew is designed around real field service workflows — not generic project management."
          benefits={feature.benefits.slice(0, 3).map((b) => ({
            icon: 'Target',
            text: b.description,
          }))}
          imageAlt={`${feature.name} in action`}
          reversed
        />
      )}

      <FAQSection
        faqs={feature.faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      <CTASection
        title={`Try ${feature.name} Free`}
        subtitle="No credit card required. Set up in under 15 minutes and see the difference today."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
