import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — BeMyCrew',
  description:
    'BeMyCrew Terms of Service. Read our terms and conditions for using the BeMyCrew field service management platform.',
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: March 28, 2026
        </p>

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-base text-slate-600 leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            BeMyCrew platform, website, and related services (collectively, the
            &quot;Services&quot;) provided by BeMyCrew (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). By accessing or using the Services, you agree to be bound by
            these Terms.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            By creating an account or using our Services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and our Privacy Policy.
            If you are using the Services on behalf of a business, you represent that you
            have the authority to bind that business to these Terms.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            2. Description of Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            BeMyCrew provides an AI-powered field service management platform that includes
            features such as job scheduling, dispatch, invoicing, customer management,
            estimates, VoIP phone systems, voice AI, and related tools designed to help
            small field service businesses operate more efficiently. We may update, modify,
            or discontinue features at any time.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            3. User Accounts
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account. You must
            provide accurate, current, and complete information during registration and keep
            your account information up to date. You agree to notify us immediately of any
            unauthorized use of your account.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            4. Costs and Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            BeMyCrew is open-source software provided under the MIT License. The software
            itself is free. Certain third-party services used by the platform (such as
            Twilio for voice/SMS, hosting providers, and payment processors) may incur
            costs that are your responsibility. These costs are determined by the
            third-party providers, not by BeMyCrew. If you use our hosted version, any
            applicable fees will be clearly described before you incur them.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            5. Acceptable Use
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            You agree not to use the Services to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base text-slate-600">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others, including intellectual property rights</li>
            <li>Upload or transmit malicious code, viruses, or harmful data</li>
            <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
            <li>Use the platform for any purpose other than managing legitimate field service business operations</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The Services, including all software, designs, text, graphics, and other
            content, are owned by BeMyCrew and protected by intellectual property laws. You
            retain ownership of all data you input into the platform. By using the Services,
            you grant us a limited license to use your data solely for the purpose of
            providing and improving the Services.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            To the maximum extent permitted by law, BeMyCrew shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss
            of profits or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses resulting from your use of the
            Services. Our total liability for any claims under these Terms shall not exceed
            the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            8. Disclaimer of Warranties
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The Services are provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, either express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Services will be uninterrupted,
            secure, or error-free.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            9. Termination
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            You may terminate your account at any time by contacting us. We may suspend or
            terminate your access to the Services if you violate these Terms or for any
            other reason with reasonable notice. Upon termination, your right to use the
            Services will cease immediately. We will make your data available for export for
            30 days following termination.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            10. Governing Law
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of
            the State of Texas, without regard to its conflict of law provisions. Any
            disputes arising under these Terms shall be subject to the exclusive
            jurisdiction of the courts located in Travis County, Texas.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            11. Changes to These Terms
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will provide notice
            of material changes by posting the updated Terms on our website and updating the
            &quot;Last updated&quot; date. Your continued use of the Services after changes
            are posted constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
            12. Contact Us
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-slate-50 rounded-xl text-base text-slate-600">
            <p className="font-medium text-slate-900">BeMyCrew</p>
            <p>Email: <a href="mailto:legal@bemycrew.com" className="text-blue-600 hover:underline">legal@bemycrew.com</a></p>
            <p>Web: <a href="/contact" className="text-blue-600 hover:underline">bemycrew.com/contact</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
