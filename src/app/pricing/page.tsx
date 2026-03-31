import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Free & Open Source — BeMyCrew',
  description:
    'BeMyCrew is going open source. The entire platform — AI dispatch, voice agent, 30+ features — free for everyone.',
};

const includedFeatures = [
  { icon: 'Mic', label: 'AI Voice Agent' },
  { icon: 'Brain', label: 'AI Dispatch' },
  { icon: 'Layers', label: '30+ Features' },
  { icon: 'Smartphone', label: 'Mobile PWA' },
  { icon: 'Settings', label: 'Custom Workflows' },
  { icon: 'Phone', label: 'VoIP Phone' },
  { icon: 'MessageCircle', label: 'AI Chatbot' },
  { icon: 'Package', label: 'AI Inventory' },
  { icon: 'CalendarPlus', label: 'Scheduling & Dispatch' },
  { icon: 'FileText', label: 'Estimates & Invoicing' },
  { icon: 'Users', label: 'Customer CRM' },
  { icon: 'BarChart', label: 'Advanced Reporting' },
];

const whyOpenSource = [
  {
    icon: 'Heart',
    title: 'Affordable for Everyone',
    description:
      'No monthly fees. No per-technician pricing. Run it yourself or use our hosted version.',
  },
  {
    icon: 'Users',
    title: 'Community-Driven',
    description:
      'Submit features, fix bugs, build integrations. The best field service software is built by the people who use it.',
  },
  {
    icon: 'Eye',
    title: 'Full Transparency',
    description:
      'See exactly how your data is handled. Audit the code. No black boxes.',
  },
];

const pricingFaqs = [
  {
    question: 'What does open source mean for me?',
    answer:
      'It means you get the entire BeMyCrew platform — every feature, every AI engine — completely free. You can self-host it on your own servers, modify the code to fit your business, and never worry about subscription fees again.',
  },
  {
    question: 'Is there a hosted version?',
    answer:
      'Yes. We will offer a hosted version for businesses that prefer not to manage their own infrastructure. More details on hosted pricing coming soon.',
  },
  {
    question: 'Can I self-host?',
    answer:
      'Absolutely. The entire codebase will be available on GitHub. You can deploy it on your own servers, your own cloud infrastructure, or any hosting provider you prefer.',
  },
  {
    question: 'Will there be paid support?',
    answer:
      'We plan to offer optional paid support plans for businesses that want dedicated help with setup, customization, and ongoing maintenance. The software itself will always be free.',
  },
  {
    question: 'When is the full release?',
    answer:
      'We are actively building in the open. Star us on GitHub to follow progress and get notified when the full release is ready.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Free & Open Source"
        subtitle="BeMyCrew is going open source. The entire platform — AI dispatch, voice agent, 30+ features — free for everyone. More details coming soon."
        primaryCTA={{ text: 'Star Us on GitHub', href: 'https://github.com/legalmindagent/dispatchagent' }}
        secondaryCTA={{ text: 'Get Notified', href: '/demo' }}
      />

      {/* Everything Free Forever */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything. Free. Forever.
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We&apos;re open-sourcing the entire BeMyCrew platform. Self-host it, modify it, make it yours.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {includedFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                >
                  <Icon name={feature.icon} className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{feature.label}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 mb-8">And much more — the full platform with 30+ features.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/legalmindagent/dispatchagent"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-lg"
              >
                <Icon name="Code" className="w-5 h-5" />
                Star Us on GitHub
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-slate-700 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Open Source */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Why Open Source?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We believe field service software should be accessible to every business, not just the ones with big budgets.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyOpenSource.map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mx-auto">
                  <Icon name={card.icon} className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Welcome */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ideas Welcome
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We&apos;re building this in the open. Have ideas for features, integrations, or improvements? We want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
          >
            Share Your Ideas
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <FAQSection faqs={pricingFaqs} />

      <CTASection
        title="Join the Open Source Movement"
        subtitle="Star us on GitHub, contribute to the project, or just follow along as we build the future of field service software in the open."
        primaryCTA={{ text: 'Star Us on GitHub', href: 'https://github.com/legalmindagent/dispatchagent' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
