import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'AI Phone Agent for $25/mo — BeMyCrew',
  description:
    'Never miss a customer call again. BeMyCrew\'s AI phone agent answers your business calls 24/7, captures leads, and books jobs — starting at just $25/month.',
};

const painPoints = [
  { value: '85%', label: 'of customers won\'t call back if you don\'t answer' },
  { value: '62%', label: 'of calls to service businesses go unanswered' },
  { value: '$1,200', label: 'average value of a missed service call' },
];

const steps = [
  {
    icon: 'Phone',
    title: 'Forward Your Number',
    description:
      'Point your business line to BeMyCrew when you\'re busy, after hours, or all the time.',
  },
  {
    icon: 'Brain',
    title: 'AI Answers & Qualifies',
    description:
      'Our AI agent greets callers by your business name, captures their info, understands their service need, and qualifies the lead.',
  },
  {
    icon: 'MessageSquare',
    title: 'You Get the Lead',
    description:
      'Instant SMS + dashboard notification with caller name, number, service needed, and urgency level.',
  },
];

const features = [
  { icon: 'Phone', title: '24/7 Call Answering' },
  { icon: 'FileText', title: 'Call Transcription' },
  { icon: 'Users', title: 'Lead Qualification' },
  { icon: 'MessageSquare', title: 'SMS Notifications' },
  { icon: 'LayoutDashboard', title: 'Call Dashboard' },
  { icon: 'Navigation', title: 'Urgent Call Forwarding' },
  { icon: 'Mic', title: 'Custom Greeting' },
  { icon: 'ClipboardList', title: 'Caller History' },
];

const useCases = [
  {
    title: 'Solo Contractors',
    description: 'Can\'t answer while on a job? Your AI agent handles it.',
  },
  {
    title: 'After-Hours Coverage',
    description: 'Never lose an evening or weekend lead again.',
  },
  {
    title: 'Small Crews',
    description: 'Professional phone presence without hiring a receptionist.',
  },
  {
    title: 'Seasonal Businesses',
    description: 'Scale up call handling during your busy season.',
  },
];

const upgradePlans = [
  { name: 'Starter', price: '$99/mo' },
  { name: 'Professional', price: '$249/mo' },
  { name: 'Enterprise', price: '$499/mo' },
];

const faqs = [
  {
    question: 'How does the AI phone agent work?',
    answer:
      'When a customer calls your business and you can\'t answer — or you\'ve set it to always forward — BeMyCrew\'s AI agent picks up. It greets the caller using your business name, asks the right questions to understand their need, captures their contact info, and sends you the lead details instantly via SMS and your dashboard.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer:
      'Yes. You can set your business name, a custom greeting message, the types of services you offer, and how you\'d like calls to be handled. The AI adapts its conversation to match your business.',
  },
  {
    question: 'What happens if the caller needs to reach me urgently?',
    answer:
      'You can configure urgent call forwarding. If the AI determines the call is urgent — like a burst pipe or a lockout — it will immediately forward the call to your cell phone or an on-call number you specify.',
  },
  {
    question: 'How quickly do I get notified of a new lead?',
    answer:
      'Instantly. As soon as the AI finishes the call, you receive an SMS with the caller\'s name, phone number, service needed, and urgency level. You can also view all leads in your dashboard in real time.',
  },
  {
    question: 'What counts as a "call" for the 100 call limit?',
    answer:
      'Any inbound call that the AI agent answers counts as one call, regardless of duration. Missed calls, hang-ups before the AI answers, and spam calls that are filtered out do not count toward your limit.',
  },
  {
    question: 'Can I use my existing business phone number?',
    answer:
      'Yes. You don\'t need to change your business number. Simply set up call forwarding from your existing line to BeMyCrew — we\'ll provide the forwarding number during setup. You can forward all calls or just the ones you miss.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer:
      'No. BeMyCrew Voice is month-to-month. You can cancel anytime from your account settings — no cancellation fees, no hassle.',
  },
  {
    question: 'What if I need more than 100 calls per month?',
    answer:
      'Additional calls beyond the 100 included are just $0.25 each. If you consistently need higher volume, our Starter plan ($99/mo) includes more calls plus the full dispatch platform.',
  },
];

export default function VoiceAIPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        title="Never Miss a Call Again"
        subtitle="AI phone agent answers your business calls 24/7, captures leads, and books jobs — for just $25/month."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup?plan=voice' }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        badge="Starting at $25/mo"
      />

      {/* 2. Pain Point Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            What happens when you can&apos;t answer the phone?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Every missed call is a missed opportunity. Here&apos;s what the data says:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((stat) => (
              <div
                key={stat.value}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl sm:text-5xl font-bold text-red-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            Get set up in minutes. No hardware, no training, no hassle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Icon name={step.icon} className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What's Included */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            All included in your $25/month plan. No add-ons, no surprises.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-900">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Callout */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full">
            <Icon name="DollarSign" className="w-4 h-4" />
            Simple, transparent pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            $25/month. That&apos;s it.
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Up to 100 calls/month included. Additional calls just $0.25 each.
            <br />
            No contracts. Cancel anytime. Limitations apply.
          </p>
          <Link
            href="/signup?plan=voice"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg shadow-orange-500/25"
          >
            Start Your Free Trial
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* 6. Perfect For */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Perfect For
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Built for the businesses that can&apos;t afford to miss a single call.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {uc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Upgrade Path */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            When You&apos;re Ready for More
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Love the AI phone agent? Upgrade to the full BeMyCrew dispatch platform and
            get scheduling, invoicing, GPS tracking, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {upgradePlans.map((plan) => (
              <div
                key={plan.name}
                className="px-6 py-3 rounded-lg bg-slate-50 border border-slate-200"
              >
                <span className="text-sm font-medium text-slate-900">
                  {plan.name}
                </span>
                <span className="ml-2 text-sm text-slate-500">{plan.price}</span>
              </div>
            ))}
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-4"
          >
            View full pricing & plan comparison
          </Link>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection faqs={faqs} />

      {/* 9. CTA */}
      <CTASection
        title="Stop Missing Calls. Start Growing."
        subtitle="Join thousands of service businesses that never miss a lead. Start your free trial today."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup?plan=voice' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
      />
    </>
  );
}
