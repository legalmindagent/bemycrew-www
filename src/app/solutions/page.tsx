import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Solutions by Industry — BeMyCrew',
  description:
    'Specialized field service management solutions for every trade — HVAC, plumbing, electrical, garage door, locksmith, property management, and more.',
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Built for Your Industry"
        subtitle="Specialized solutions for every trade. BeMyCrew adapts to the way your business works — not the other way around."
        badge="Industry Solutions"
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'View Features', href: '/features' }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Choose Your Industry
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every trade has unique challenges. See how BeMyCrew solves the specific problems your business faces every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/solutions/${industry.slug}`}
                className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-colors mb-4">
                  <Icon name={industry.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
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
        title="Not Sure Which Solution Fits?"
        subtitle="Book a free demo and we will walk you through the features that matter most for your trade."
        primaryCTA={{ text: 'Book a Demo', href: '/demo' }}
        secondaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
      />
    </>
  );
}
