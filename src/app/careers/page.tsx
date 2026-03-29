import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Careers — BeMyCrew',
  description:
    'Join the BeMyCrew team. We are building the future of AI-powered field service management for small businesses.',
};

const values = [
  {
    title: 'Ship Fast, Learn Faster',
    description:
      'We move quickly, test ideas in the real world, and iterate based on what our customers tell us.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Small Team, Big Impact',
    description:
      'Every person on the team has real ownership and a direct impact on the product and our customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Obsessed',
    description:
      'We build for real tradespeople running real businesses. Their success is our success.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'AI-First Thinking',
    description:
      'We leverage AI to automate the tedious and empower small businesses to compete with the big guys.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Join the Crew"
        subtitle="We're building affordable, AI-powered field service software that helps small businesses compete. Come help us change an industry."
        primaryCTA={{ text: 'See Open Roles', href: '#open-roles' }}
        secondaryCTA={{ text: 'Learn About Us', href: '/about' }}
        badge="We're Hiring"
      />

      {/* Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              What We Value
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We are a small, focused team building something meaningful for the
              trades. Here is what drives us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Open Positions
          </h2>
          <div className="mt-8 p-8 bg-white rounded-2xl border border-slate-200">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-50 text-blue-500 rounded-full mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              No open positions right now
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
              We do not have any open roles at the moment, but we are always looking
              for great people. If you are passionate about field service, AI, or
              building tools for small businesses, we would love to hear from you.
            </p>
            <p className="mt-6 text-base text-slate-600">
              Send your resume to{' '}
              <a
                href="mailto:careers@bemycrew.com"
                className="font-medium text-blue-600 hover:underline"
              >
                careers@bemycrew.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        subtitle="Even if there are no open positions listed, drop us a line. Great people are always welcome."
        primaryCTA={{ text: 'Email Us', href: 'mailto:careers@bemycrew.com' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
      />
    </>
  );
}
