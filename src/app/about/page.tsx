import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'About — BeMyCrew',
  description:
    'BeMyCrew is on a mission to make enterprise-grade field service software affordable for every small business.',
};

const values = [
  {
    icon: 'Brain',
    title: 'AI-First',
    description:
      'We build AI into everything — not as an add-on. From dispatch optimization to voice answering, our four AI engines work behind the scenes so you can focus on your craft.',
  },
  {
    icon: 'DollarSign',
    title: 'Open Source for Everyone',
    description:
      'Enterprise tools, free for every business. BeMyCrew is open source — self-host it or use our hosted version. You just pay the base cost of the services you use.',
  },
  {
    icon: 'Wrench',
    title: 'Complete Platform',
    description:
      'One login for scheduling, dispatch, estimates, invoicing, CRM, payments, and more. No duct-taping five different tools together and hoping they sync.',
  },
  {
    icon: 'Smartphone',
    title: 'Built for the Field',
    description:
      'Our PWA works on any device, online or offline. Technicians get the tools they need without downloading a massive app or burning through data.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Making Enterprise Software Affordable for Every Small Business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              BeMyCrew was built by people who saw a broken market — and decided to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Story</h2>
          <div className="prose prose-slate prose-lg max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p>
              I&apos;m Kevin Palmer — EMT, truck driver, flight student, kayak instructor,
              tree worker. I&apos;ve spent my career doing blue collar work alongside people
              who bust their backs every day to keep their businesses running. And I got
              tired of watching them get overcharged for basic software.
            </p>
            <p>
              Field service software has a pricing problem. The big platforms charge $150+
              per technician per month, locking out the small businesses that need help the
              most. A five-person HVAC company shouldn&apos;t pay $750/month just to schedule
              jobs and send invoices.
            </p>
            <p>
              So I built BeMyCrew — an enterprise-grade platform with 27+ features and
              four AI engines — and then decided to open source the whole thing. Every
              plumber, electrician, and HVAC tech deserves the same powerful tools that
              enterprises use, without the enterprise price tag.
            </p>
            <p>
              You pay only the base cost of the services you use — hosting, Twilio for
              calls, Stripe for payments. Typically $5-15/month. The software itself is
              free and open source under the MIT License. Details coming soon.
            </p>
            <p>
              Look around, email us at hello@bemycrew.com, and follow us on social media.
              We&apos;re building this in the open.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What We Stand For</h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide every product decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-slate-200 p-8 text-center"
              >
                <div className="mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
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

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium">
            To give every small field service business the AI-powered tools they need to
            dispatch smarter, grow faster, and compete with companies ten times their size
            — without breaking the bank.
          </p>
        </div>
      </section>

      <CTASection
        title="Join the BeMyCrew Community"
        subtitle="We're open sourcing everything. Look around, and follow us on social media or email hello@bemycrew.com for updates."
        primaryCTA={{ text: 'Get Started Free', href: 'https://dispatchagent.vercel.app' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
