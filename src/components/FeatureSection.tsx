import Icon from './Icon';
import { ReactNode } from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  mockup?: ReactNode;
  reversed?: boolean;
  dark?: boolean;
}

export default function FeatureSection({
  title,
  description,
  benefits,
  mockup,
  reversed = false,
  dark = false,
}: FeatureSectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${dark ? 'bg-slate-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="flex-1">
            <h2 className={`text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
              {title}
            </h2>
            <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              {description}
            </p>
            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <span className={`w-10 h-10 flex items-center justify-center rounded-xl shrink-0 ${dark ? 'bg-blue-500/20' : 'bg-blue-50'}`}>
                    <Icon name={benefit.icon} className={`w-5 h-5 ${dark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </span>
                  <div>
                    <h3 className={`font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{benefit.title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-1 w-full">
            {mockup || (
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-200/50" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
