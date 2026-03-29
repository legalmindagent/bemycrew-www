import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';
import { comparisons, getComparisonBySlug } from '@/data/comparisons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return { title: 'Comparison Not Found — BeMyCrew' };

  return {
    title: `${comparison.name} — BeMyCrew`,
    description: comparison.tagline,
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  // Extract competitor name (everything after "vs ")
  const competitorName = comparison.name.replace('BeMyCrew vs ', '');

  // Pick top 3 advantages for the highlights section
  const highlights = comparison.advantages.slice(0, 3);

  return (
    <>
      <Hero
        title={comparison.name}
        subtitle={comparison.tagline}
        badge="Competitor Comparison"
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'View All Comparisons', href: '/comparisons' }}
      />

      {/* Key Advantages */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Key Advantages Over {competitorName}
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Here is why field service businesses are switching from {competitorName} to BeMyCrew.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((advantage) => (
              <div
                key={advantage.area}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {advantage.area}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {advantage.bemycrew}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable
        competitorName={competitorName}
        advantages={comparison.advantages}
      />

      <CTASection
        title={`Ready to Leave ${competitorName} Behind?`}
        subtitle="Start your free trial and see the difference. We will even help you migrate your data."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
