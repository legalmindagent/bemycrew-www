import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "What's New — BeMyCrew",
  description:
    'See the latest updates and new features in BeMyCrew. We ship improvements every week.',
};

const updates = [
  {
    date: 'March 28, 2026',
    title: 'Platform Launch: 27 Features at Once',
    description:
      'BeMyCrew officially launches with a full suite of 27 field service management features — from scheduling and dispatch to invoicing, estimates, customer management, and reporting. Everything a small field service business needs, built from the ground up.',
    tags: ['Launch', 'Platform'],
    highlights: [
      'Job scheduling and calendar management',
      'Customer database with full history',
      'Invoicing and payment processing',
      'Estimates and proposal builder',
      'Team management and permissions',
      'Reporting and analytics dashboard',
    ],
  },
  {
    date: 'March 28, 2026',
    title: 'AI-Powered Smart Dispatch',
    description:
      'Our AI dispatch engine automatically assigns the right technician to the right job based on skills, location, availability, and workload. Reduce drive time, improve response times, and keep your team balanced — without the manual scheduling headaches.',
    tags: ['AI', 'Dispatch'],
    highlights: [
      'Automatic technician matching based on skills and certifications',
      'Route optimization to minimize drive time',
      'Real-time availability and workload balancing',
      'Override suggestions with manual control anytime',
    ],
  },
  {
    date: 'March 28, 2026',
    title: 'Voice AI for Inbound Calls',
    description:
      'Never miss a call again. Our Voice AI answers your business phone, books appointments, gathers customer information, and handles common questions — 24/7. It sounds natural, knows your services, and seamlessly hands off to your team when needed.',
    tags: ['AI', 'Voice'],
    highlights: [
      '24/7 automated call answering',
      'Natural-sounding AI voice agent',
      'Appointment booking and confirmation',
      'Seamless handoff to live staff',
    ],
  },
  {
    date: 'March 28, 2026',
    title: 'Built-in VoIP Phone System',
    description:
      'A full business phone system built right into BeMyCrew. Get local and toll-free numbers, call routing, voicemail, call recording, and SMS — all connected to your customer records. No third-party phone service needed.',
    tags: ['VoIP', 'Communication'],
    highlights: [
      'Local and toll-free business numbers',
      'Call routing and auto-attendant',
      'Voicemail with transcription',
      'SMS messaging linked to customer records',
      'Call recording for quality and training',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Hero
        title="What's New"
        subtitle="We ship improvements every week. Here's what we've been building to help your field service business grow."
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'View All Features', href: '/features' }}
        badge="Changelog"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" style={{ left: '7px' }} />

            <div className="space-y-12">
              {updates.map((update, index) => (
                <div key={index} className="relative sm:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] bg-blue-600 rounded-full border-[3px] border-white shadow-sm hidden sm:block" />

                  <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <time className="text-sm font-medium text-slate-500">
                        {update.date}
                      </time>
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {update.title}
                    </h3>

                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      {update.description}
                    </p>

                    {update.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {update.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg
                              className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Try These Features?"
        subtitle="BeMyCrew is free and open source. See what it can do for your business."
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
