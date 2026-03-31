import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Resources — BeMyCrew',
  description:
    'Guides, FAQs, blog articles, and help center resources for BeMyCrew field service management software.',
};

const resources = [
  {
    icon: 'FileText',
    title: 'Blog',
    description:
      'Tips, guides, and industry insights to help you run a more profitable field service business.',
    href: '/blog',
    cta: 'Read Articles',
  },
  {
    icon: 'HelpCircle',
    title: 'FAQ',
    description:
      'Quick answers to the most common questions about BeMyCrew features, setup, and open-source licensing.',
    href: '/faq',
    cta: 'View FAQs',
  },
  {
    icon: 'GraduationCap',
    title: 'Help Center',
    description:
      'Step-by-step tutorials, video walkthroughs, and documentation to get the most out of BeMyCrew.',
    href: '/help',
    cta: 'Get Help',
  },
  {
    icon: 'ArrowLeftRight',
    title: 'Competitor Comparisons',
    description:
      'See how BeMyCrew stacks up against FieldPulse, ServiceTitan, Jobber, and Housecall Pro.',
    href: '/comparisons',
    cta: 'Compare Now',
  },
  {
    icon: 'Factory',
    title: 'Industry Solutions',
    description:
      'Discover how BeMyCrew is built for your specific trade — HVAC, plumbing, electrical, and more.',
    href: '/solutions',
    cta: 'Find Your Industry',
  },
  {
    icon: 'DollarSign',
    title: 'Open Source',
    description:
      'BeMyCrew is free and open source under the MIT License. You pay only the base cost of services you use.',
    href: '/about',
    cta: 'Learn More',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Resources & Support"
        subtitle="Everything you need to evaluate, set up, and succeed with BeMyCrew field service management software."
        badge="Resources Hub"
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group block p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-colors mb-5">
                  <Icon name={resource.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-blue-600">
                  {resource.cta}
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our team is here to help. Book a free demo or get started — open source, MIT License."
        primaryCTA={{ text: 'Book a Demo', href: '/demo' }}
        secondaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
      />
    </>
  );
}
