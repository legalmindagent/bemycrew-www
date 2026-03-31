import Link from 'next/link';
import Icon from './Icon';

interface IndustryHeroProps {
  industry: string;
  description: string;
  icon: string;
}

export default function IndustryHero({ industry, description, icon }: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse [animation-duration:4s]" />
      <div className="absolute -bottom-32 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-duration:5s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="relative w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur rounded-xl border border-white/10">
              <span className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg" />
              <Icon name={icon} className="relative w-9 h-9 text-white" />
            </span>
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
              {industry} Software
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Field Service Management
            <br />
            <span className="text-blue-400">Built for {industry}</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://dispatchagent.vercel.app"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg shadow-orange-500/25"
            >
              Get Started Free
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-slate-600 hover:border-slate-500 hover:bg-white/5 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
