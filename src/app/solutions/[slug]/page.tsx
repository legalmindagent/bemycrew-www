import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryHero from '@/components/IndustryHero';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import { industries, getIndustryBySlug } from '@/data/industries';
import { getFeatureBySlug } from '@/data/features';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Solution Not Found — BeMyCrew' };

  return {
    title: `${industry.name} Field Service Software — BeMyCrew`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relevantFeatures = industry.features
    .map((featureSlug) => getFeatureBySlug(featureSlug))
    .filter(Boolean);

  return (
    <>
      <IndustryHero
        industry={industry.name}
        description={industry.heroDescription}
        icon={industry.icon}
      />

      {/* Pain Points */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Challenges {industry.name} Companies Face
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We built BeMyCrew to solve the real problems that keep {industry.name.toLowerCase()} business owners up at night.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {industry.painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200"
              >
                <span className="w-8 h-8 flex items-center justify-center text-sm font-bold text-red-600 bg-red-50 rounded-lg shrink-0">
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Features Built for {industry.name}
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every feature below is included in your BeMyCrew subscription — no add-ons, no hidden fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantFeatures.map(
              (feature) =>
                feature && (
                  <FeatureCard
                    key={feature.slug}
                    icon={feature.icon}
                    title={feature.name}
                    description={feature.shortDescription}
                    href={`/features/${feature.slug}`}
                  />
                )
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Transform Your ${industry.name} Business?`}
        subtitle="Start your free trial today. No credit card required, no contracts, set up in under 15 minutes."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
