import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  badge?: string;
  children?: ReactNode;
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, badge, children }: HeroProps) {
  const hasMockup = !!children;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${hasMockup ? 'py-16 sm:py-20 lg:py-24' : 'py-24 sm:py-32 lg:py-40'}`}>
        <div className={hasMockup ? 'flex flex-col lg:flex-row items-center gap-12 lg:gap-16' : ''}>
          {/* Text content */}
          <div className={`${hasMockup ? 'flex-1 text-center lg:text-left' : 'max-w-3xl mx-auto text-center'} animate-[fadeInUp_0.6s_ease-out_both]`}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                {badge}
              </div>
            )}

            <h1 className={`font-bold text-white tracking-tight leading-tight ${hasMockup ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}>
              {title}
            </h1>

            <p className={`mt-6 text-slate-300 leading-relaxed ${hasMockup ? 'text-base sm:text-lg max-w-xl' : 'text-lg sm:text-xl max-w-2xl mx-auto'}`}>
              {subtitle}
            </p>

            <div className={`mt-8 flex flex-col sm:flex-row items-center gap-4 ${hasMockup ? 'lg:justify-start justify-center' : 'justify-center'}`}>
              <Link
                href={primaryCTA.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg shadow-orange-500/25"
              >
                {primaryCTA.text}
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-slate-600 hover:border-slate-500 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </div>

          {/* Mockup visual */}
          {hasMockup && (
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
