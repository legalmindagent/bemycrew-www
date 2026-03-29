import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — BeMyCrew',
  description:
    'BeMyCrew Cookie Policy. Learn about the cookies we use and how to manage your preferences.',
};

export default function CookiesPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: March 28, 2026
        </p>

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-base text-slate-600 leading-relaxed">
            This Cookie Policy explains how BeMyCrew (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) uses cookies and similar technologies when you visit our website
            and use our platform. By continuing to use our site, you consent to our use of
            cookies as described below.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website.
            They help websites remember your preferences, understand how you use the site,
            and improve your overall experience. Cookies can be &quot;session&quot; cookies
            (deleted when you close your browser) or &quot;persistent&quot; cookies (remain
            on your device for a set period).
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            Cookies We Use
          </h2>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 font-semibold text-slate-900">Category</th>
                  <th className="px-6 py-3 font-semibold text-slate-900">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Essential</td>
                  <td className="px-6 py-4 text-slate-600">
                    Required for the platform to function. These cookies handle
                    authentication, session management, and security. They cannot be
                    disabled.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Functional</td>
                  <td className="px-6 py-4 text-slate-600">
                    Remember your preferences such as language, timezone, and display
                    settings to provide a personalized experience.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Analytics</td>
                  <td className="px-6 py-4 text-slate-600">
                    Help us understand how visitors interact with our website so we can
                    improve performance and usability. We use privacy-friendly analytics
                    that do not track you across other sites.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Marketing</td>
                  <td className="px-6 py-4 text-slate-600">
                    Used to deliver relevant advertisements and measure campaign
                    effectiveness. These cookies may be set by our advertising partners.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Some cookies on our site are set by third-party services we use, such as
            analytics providers and payment processors. These third parties have their own
            privacy policies governing the use of cookies they set.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            How to Manage Cookies
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base text-slate-600">
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to block or delete
              cookies through their settings. Note that blocking essential cookies may
              prevent the platform from functioning properly.
            </li>
            <li>
              <strong>Opt-out links:</strong> Many analytics and advertising providers offer
              opt-out mechanisms on their websites.
            </li>
            <li>
              <strong>Device settings:</strong> On mobile devices, you can manage tracking
              preferences through your device&apos;s privacy settings.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our
            practices or applicable laws. We will post any updates on this page and update
            the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            If you have questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@bemycrew.com" className="text-blue-600 hover:underline">
              privacy@bemycrew.com
            </a>{' '}
            or visit our{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
