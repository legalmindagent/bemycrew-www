import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { comparisons } from '@/data/comparisons';

export const metadata: Metadata = {
  title: 'Compare BeMyCrew to Competitors — BeMyCrew',
  description:
    'See how BeMyCrew compares to FieldPulse, ServiceTitan, Jobber, and Housecall Pro. More features, AI-powered tools, and open source.',
};

export default function ComparisonsPage() {
  return (
    <>
      <Hero
        title="See How BeMyCrew Compares"
        subtitle="More features, four AI capabilities no competitor can match, and open source — free forever."
        badge="Competitor Comparisons"
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Pick a Competitor
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We break down every comparison feature-by-feature so you can make an informed decision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/comparisons/${comparison.slug}`}
                className="group block p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 rounded-xl transition-colors mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {comparison.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {comparison.tagline}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  See full comparison
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Switch?"
        subtitle="BeMyCrew is open source. See the difference for yourself — details coming soon."
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
