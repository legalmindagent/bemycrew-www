import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BeMyCrew',
  description:
    'BeMyCrew Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: March 28, 2026
        </p>

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-base text-slate-600 leading-relaxed">
            BeMyCrew (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our field service
            management platform, website, and related services.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base text-slate-600">
            <li>Account information such as your name, email address, phone number, and company name</li>
            <li>Billing information including payment method details and billing address</li>
            <li>Business data you enter into the platform, such as customer records, job details, invoices, and scheduling information</li>
            <li>Communications you send to us, including support requests and feedback</li>
            <li>Usage data collected automatically, such as device information, IP address, browser type, and interaction patterns</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base text-slate-600">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Power AI-driven features such as smart dispatch, voice AI, and automated scheduling</li>
            <li>Monitor and analyze trends, usage, and activities to improve user experience</li>
            <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            3. Data Security
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We implement industry-standard security measures to protect your personal
            information. All data is encrypted in transit using TLS and at rest using
            AES-256 encryption. We conduct regular security audits and maintain strict
            access controls. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We use cookies and similar tracking technologies to collect and track
            information about your activity on our website and platform. Cookies help us
            provide a better experience by remembering your preferences, understanding how
            you use our services, and serving relevant content. You can control cookies
            through your browser settings. For more details, see our{' '}
            <a href="/cookies" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We may share your information with third-party service providers who assist us
            in operating our platform, processing payments, sending communications, and
            analyzing usage. These providers are contractually obligated to use your
            information only for the purposes we specify and to maintain appropriate
            security measures. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            6. Your Rights
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            Depending on your location, you may have the following rights regarding your
            personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base text-slate-600">
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Data portability — receive your data in a structured, machine-readable format</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p className="text-base text-slate-600 leading-relaxed mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@bemycrew.com" className="text-blue-600 hover:underline">
              privacy@bemycrew.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            7. Data Retention
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We retain your personal information for as long as your account is active or as
            needed to provide you services. We will also retain and use your information as
            necessary to comply with legal obligations, resolve disputes, and enforce our
            agreements.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any
            material changes by posting the new policy on this page and updating the
            &quot;Last updated&quot; date. We encourage you to review this policy
            periodically.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            9. Contact Us
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <div className="mt-4 p-6 bg-slate-50 rounded-xl text-base text-slate-600">
            <p className="font-medium text-slate-900">BeMyCrew</p>
            <p>Email: <a href="mailto:privacy@bemycrew.com" className="text-blue-600 hover:underline">privacy@bemycrew.com</a></p>
            <p>Web: <a href="/contact" className="text-blue-600 hover:underline">bemycrew.com/contact</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
