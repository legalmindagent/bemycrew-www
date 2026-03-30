import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function CTASection({ title, subtitle, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse [animation-duration:4s]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse [animation-duration:5s]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-lg transition-colors shadow-lg"
          >
            {primaryCTA.text}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-lg transition-colors"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
