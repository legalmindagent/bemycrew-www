import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'AI Voice Agent — Your AI Receptionist | BeMyCrew',
  description:
    'Stop missing calls. BeMyCrew\'s AI voice agent answers your phone 24/7, handles emergencies, schedules appointments, and texts you every detail. Setup takes 90 seconds.',
};

const steps = [
  {
    icon: 'Building',
    title: 'Tell us your business',
    description: 'Pick your industry, enter your business name and phone. 30 seconds.',
    time: '30 sec',
  },
  {
    icon: 'Mic',
    title: 'Choose your AI voice',
    description: 'Pick from 8 professional voices, customize your greeting. 30 seconds.',
    time: '30 sec',
  },
  {
    icon: 'Zap',
    title: 'Go live',
    description: 'Forward your phone number to your new AI line. Calls answered instantly.',
    time: '30 sec',
  },
];

const aiFeatures = [
  { icon: 'Phone', text: 'Answers calls 24/7 in a natural human voice' },
  { icon: 'Users', text: 'Collects caller name, phone, address, and service issue' },
  { icon: 'ShieldCheck', text: 'Detects emergencies and dispatches your on-call tech' },
  { icon: 'MessageSquare', text: 'Texts you full call details after every call' },
  { icon: 'ClipboardList', text: 'Automatically creates jobs in your dispatch dashboard' },
  { icon: 'CalendarPlus', text: 'Schedules appointments based on your availability' },
  { icon: 'Mic', text: 'Speaks naturally using ElevenLabs AI voice technology' },
  { icon: 'Navigation', text: 'Transfers to a real person when the caller needs one' },
];

const industries = [
  { icon: 'Droplets', name: 'Plumbing' },
  { icon: 'Thermometer', name: 'HVAC' },
  { icon: 'Zap', name: 'Electrical' },
  { icon: 'KeyRound', name: 'Locksmith' },
  { icon: 'Home', name: 'Cleaning' },
  { icon: 'Wrench', name: 'Appliance Repair' },
  { icon: 'HardHat', name: 'Roofing' },
  { icon: 'Building', name: 'General Contractor' },
  { icon: 'ShieldCheck', name: 'Pest Control' },
  { icon: 'House', name: 'Landscaping' },
];

const painStats = [
  { value: '$500–1,200', label: 'lost revenue per missed call' },
  { value: '68%', label: 'of customers won\'t leave a voicemail — they call your competitor' },
  { value: '<2 sec', label: 'BeMyCrew answers, every time' },
];

const faqs = [
  {
    question: 'How do I connect my phone number?',
    answer:
      'Forward your existing business number to the AI number we give you. Takes 2 minutes in your phone carrier settings. We provide step-by-step instructions for AT&T, Verizon, T-Mobile, and all major carriers.',
  },
  {
    question: 'What happens during an emergency call?',
    answer:
      'Our AI detects emergency keywords (flooding, gas leak, fire, etc.) and immediately texts your on-call technician with the caller\'s info and address. Response time: under 10 seconds.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer:
      'Yes. You write the greeting, choose the voice, and set custom instructions. The AI adapts its conversation based on your industry automatically.',
  },
  {
    question: 'Where do I see my calls?',
    answer:
      'Three places: (1) instant SMS to your phone, (2) email summary, (3) your BeMyCrew dashboard with full transcripts, recordings, and analytics.',
  },
  {
    question: 'What if the caller needs a real person?',
    answer:
      'The AI can transfer to your phone or any team member\'s phone if the caller requests it, or if the situation requires human judgment.',
  },
  {
    question: 'Do I need any technical setup?',
    answer:
      'No. The entire setup is a 3-step wizard that takes 90 seconds. No coding, no hardware, no IT person needed.',
  },
];

const SETUP_URL = 'https://dispatchagent.vercel.app/setup-voice';

export default function VoiceAIPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Your AI Receptionist. Answers Every Call. Books Every Job."
        subtitle="Stop missing calls. BeMyCrew's AI voice agent answers your phone 24/7, handles emergencies, schedules appointments, and texts you every detail. Setup takes 90 seconds."
        primaryCTA={{ text: 'Get Started Free', href: SETUP_URL }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        badge="Setup in 90 Seconds"
      />

      {/* How It Works */}
      <section id="how-it-works" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Live in 90 Seconds. Seriously.
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            No hardware. No training. No IT department. Just three quick steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-blue-100" />
                )}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-6 shadow-lg shadow-blue-600/25">
                  <Icon name={step.icon} className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto mb-3">
                  {step.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your AI Does */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            What Your AI Does
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            More than a voicemail. It&apos;s a full AI receptionist.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiFeatures.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon name={feature.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-800">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Flow Diagram */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Where Do Calls Go?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            {[
              { icon: 'Phone', label: 'Customer Calls', color: 'bg-slate-100 text-slate-600' },
              { icon: 'Brain', label: 'AI Answers', color: 'bg-blue-100 text-blue-600' },
              { icon: 'ClipboardList', label: 'Collects Info', color: 'bg-blue-100 text-blue-600' },
              { icon: 'MessageSquare', label: 'SMS to You', color: 'bg-green-100 text-green-600' },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-3 md:gap-0">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-2`}>
                    <Icon name={step.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <svg className="w-6 h-6 text-slate-300 mx-3 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['SMS Text', 'Email Summary', 'Dashboard Entry', 'Job Auto-Created'].map((item) => (
              <div key={item} className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <Icon name="CheckCircle" className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Built for Every Trade
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            AI answering for any field service business. Pick your industry during setup and the AI adapts automatically.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Icon name={ind.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-800">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free & Open Source */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Free & Open Source
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            The AI Voice Agent is part of the BeMyCrew open-source platform. Set it up for free. Self-host or use our hosted version. More details coming soon.
          </p>
          <Link
            href={SETUP_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
          >
            Set Up Your AI Voice Agent
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-blue-300 text-center text-sm font-medium uppercase tracking-wider mb-8">
            Built for small field service businesses who can&apos;t afford to miss a single call
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Free. Open Source. Yours.
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Set up your AI voice agent in 90 seconds. No fees, no limits.
          </p>
          <Link
            href={SETUP_URL}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-colors shadow-lg"
          >
            Set Up Your AI Voice Agent
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-xs text-blue-200 mt-4">
            Open source. Self-host or use our hosted version.
          </p>
        </div>
      </section>
    </>
  );
}
