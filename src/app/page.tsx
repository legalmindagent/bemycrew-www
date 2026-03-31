import Hero from '@/components/Hero';
import DashboardMockup from '@/components/mockups/DashboardMockup';
import ScheduleMockup from '@/components/mockups/ScheduleMockup';
import MobileMockup from '@/components/mockups/MobileMockup';
import Link from 'next/link';
import Icon from '@/components/Icon';

const SETUP_URL = 'https://dispatchagent.vercel.app/setup-voice';
const APP_URL = 'https://dispatchagent.vercel.app';

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

const costRows = [
  { need: 'AI Receptionist', industry: '$200-500/mo', bmc: '$5-13/mo' },
  { need: 'Field Dispatch', industry: '$100-500/mo', bmc: '$3-8/mo' },
  { need: 'Scheduling + Calendar', industry: '$50-200/mo', bmc: 'Included' },
  { need: 'Invoicing + Payments', industry: '$30-100/mo', bmc: 'Included' },
];

const voiceFeatures = [
  { icon: 'Phone', text: 'Answers calls 24/7 in a natural human voice' },
  { icon: 'Users', text: 'Collects caller name, phone, address, and service details' },
  { icon: 'ShieldCheck', text: 'Detects emergencies and dispatches your on-call tech instantly' },
  { icon: 'MessageSquare', text: 'Texts you full call details after every call' },
  { icon: 'ClipboardList', text: 'Automatically creates jobs in your dispatch dashboard' },
  { icon: 'CalendarPlus', text: 'Schedules appointments based on your real availability' },
  { icon: 'Mic', text: '8 AI voices to choose from, custom greeting, instant setup' },
  { icon: 'Navigation', text: 'Transfers to a real person when the caller needs one' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero ─── */}
      <Hero
        badge="Open Source — MIT License"
        title="Your AI Receptionist. Dispatches Your Crew. Runs Your Business."
        subtitle="BeMyCrew is a free, open-source field service platform with AI voice agent, smart dispatch, and automated everything. Setup takes 90 seconds. Costs $5-15/month to run."
        primaryCTA={{ text: 'Set Up AI Voice Agent — Free', href: SETUP_URL }}
        secondaryCTA={{ text: 'Try Full Platform', href: APP_URL }}
      >
        <div className="relative" style={{ perspective: '1000px' }}>
          <div className="lg:[transform:rotateY(-5deg)_rotateX(2deg)] shadow-2xl shadow-blue-500/20 rounded-xl overflow-hidden border border-white/10">
            <DashboardMockup />
          </div>
        </div>
      </Hero>

      {/* ─── 2. The Real Cost ─── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 tracking-tight">
            The Real Cost
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Stop paying $300/month for software that costs $10 to run.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 text-sm font-semibold text-slate-300">What You Need</th>
                  <th className="px-4 py-4 text-sm font-semibold text-slate-300 text-center">Industry Price</th>
                  <th className="px-4 py-4 text-sm font-semibold text-center text-green-400 bg-green-500/10 rounded-t-lg">BeMyCrew Cost</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.need} className="border-b border-white/5">
                    <td className="px-4 py-4 text-sm font-medium text-white">{row.need}</td>
                    <td className="px-4 py-4 text-sm text-slate-400 text-center">{row.industry}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-400 text-center bg-green-500/5">{row.bmc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-white/20">
                  <td className="px-4 py-4 text-base font-bold text-white">Total</td>
                  <td className="px-4 py-4 text-base font-bold text-red-400 text-center">$380-1,300/mo</td>
                  <td className="px-4 py-4 text-base font-bold text-green-400 text-center bg-green-500/5 rounded-b-lg">$5-15/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            You pay only the base cost of the services &mdash; Twilio for calls, hosting, Stripe fees. That&apos;s it.
            No markup. No SaaS tax.
          </p>
        </div>
      </section>

      {/* ─── 3. How It Works ─── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 tracking-tight">
            Live in 90 Seconds
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            No hardware. No training. No IT department. Three steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: 'Building',
                step: '1',
                title: 'Pick your industry',
                description: 'AI configures scripts, job types, and workflows automatically based on your trade.',
              },
              {
                icon: 'Mic',
                step: '2',
                title: 'Choose your AI voice',
                description: '8 professional voices, custom greeting, instant setup. Takes 30 seconds.',
              },
              {
                icon: 'Zap',
                step: '3',
                title: 'Go live',
                description: 'Forward your phone, AI answers calls, you get texts with every detail.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-6 shadow-lg shadow-blue-600/25">
                  <Icon name={item.icon} className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={SETUP_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg shadow-orange-500/25"
            >
              <Icon name="Mic" className="w-5 h-5" />
              Set Up AI Voice Agent — Free
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. Feature Showcase ─── */}

      {/* AI Voice Agent */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                <Icon name="Phone" className="w-3.5 h-3.5" />
                Lead Feature
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                AI Voice Agent
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Your AI receptionist answers every call, qualifies every lead, and books every job &mdash; even at 2 AM.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {voiceFeatures.map((f) => (
                  <div key={f.text} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={f.icon} className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-snug">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Dispatch & Scheduling */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                <Icon name="CalendarClock" className="w-3.5 h-3.5" />
                Scheduling
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Smart Dispatch &amp; Scheduling
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-xl">
                AI matches the right tech to every job. Drag-and-drop calendar, Kanban board, route optimization.
              </p>
              <ul className="space-y-3">
                {[
                  'AI auto-dispatch based on skills, location, and workload',
                  'Drag-and-drop calendar with day, week, and month views',
                  'Kanban board for pipeline management',
                  'Route optimization to cut drive time',
                  'Real-time technician GPS tracking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <ScheduleMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimates & Invoices */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                <Icon name="Receipt" className="w-3.5 h-3.5" />
                Billing
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Estimates &amp; Invoices
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-xl">
                Send professional estimates, collect signatures, and get paid &mdash; all from one place.
              </p>
              <ul className="space-y-3">
                {[
                  'Good / Better / Best tiered estimates',
                  'Digital signatures on any device',
                  'Stripe-powered payments and auto-reminders',
                  'One-click convert estimate to invoice',
                  'Automatic payment tracking and receipts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
              <div className="w-48 sm:w-56">
                <MobileMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-100 rounded-full">
                <Icon name="LayoutDashboard" className="w-3.5 h-3.5" />
                NEW
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Command Center
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-xl">
                A centralized memory across all your AI agents. Projects, tasks, and logs in one view &mdash; with a full REST API.
              </p>
              <ul className="space-y-3">
                {[
                  'Centralized memory shared across all AI agents',
                  'Projects, tasks, and activity log tabs',
                  'Full REST API for custom integrations',
                  'Real-time sync across all connected services',
                  'One dashboard to monitor your entire operation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Who It's For ─── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 tracking-tight">
            Built for Every Trade
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Pick your industry during setup and the AI adapts scripts, job types, and workflows automatically.
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

      {/* ─── 6. Social Proof Stats ─── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-blue-300 text-center text-sm font-medium uppercase tracking-wider mb-10">
            Every missed call is a lost customer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '$500-1,200', label: 'lost revenue per missed call' },
              { value: '68%', label: "of customers won't call back" },
              { value: '<2 sec', label: 'BeMyCrew answers every time' },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Kevin's Story ─── */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12 tracking-tight">
            Built by Kevin Palmer, Chattanooga, TN
          </h2>
          <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10">
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 text-5xl font-serif text-blue-500 leading-none select-none">&ldquo;</div>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                KP
              </div>
              <div>
                <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  I&apos;ve been an EMT, a truck driver, a flight student, a kayak instructor, a tree worker &mdash;
                  I&apos;ve done almost every kind of blue collar work. I know what it costs to run a small business.
                  I built these tools because I&apos;m tired of seeing hardworking people overcharged for software that
                  costs pennies to run. BeMyCrew is open source because the playing field should be even.
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-slate-900">Kevin Palmer</div>
                  <div className="text-sm text-slate-500">Founder, BeMyCrew &middot; Chattanooga, Tennessee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Need Help ─── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 tracking-tight">
            Need Help Getting Started?
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            BeMyCrew is free and open source. But if you want a hand, we&apos;ve got you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Do It Yourself',
                price: 'Free',
                description: 'Setup guides included. Full documentation, community support.',
                highlight: true,
              },
              {
                title: 'Setup Service',
                price: '$149 flat',
                description: 'We set everything up for you. Done in 48 hours.',
                highlight: false,
              },
              {
                title: 'Custom Build',
                price: 'Starting at $499',
                description: 'Custom integrations, workflows, and configurations for your business.',
                highlight: false,
              },
              {
                title: 'Monthly Support',
                price: '$49/month',
                description: 'Ongoing support, updates, and priority help when you need it.',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`p-6 rounded-xl border ${
                  plan.highlight
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-200'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.title}
                </h3>
                <div className={`text-2xl font-bold mb-3 ${plan.highlight ? 'text-blue-100' : 'text-blue-600'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Open Source CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse [animation-duration:4s]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse [animation-duration:5s]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Free. Open Source. MIT Licensed.
          </h2>
          <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
            Star us on GitHub. Follow us on social media. Send us an email. More details coming soon.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/legalmindagent/dispatchagent"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-lg transition-colors shadow-lg"
            >
              <Icon name="Star" className="w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="mailto:hello@bemycrew.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon name="Mail" className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <a href="https://github.com/legalmindagent/dispatchagent" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white transition-colors text-sm font-medium">
              GitHub
            </a>
            <span className="text-orange-300/50">|</span>
            <span className="text-orange-100 text-sm font-medium">
              Twitter/X
            </span>
            <span className="text-orange-300/50">|</span>
            <span className="text-orange-100 text-sm font-medium">
              LinkedIn
            </span>
          </div>

          <p className="mt-6 text-xs text-orange-200/70">
            Built by Kevin Palmer, Chattanooga, TN &middot; MIT License &middot; GitHub Sponsors welcome
          </p>
        </div>
      </section>
    </>
  );
}
