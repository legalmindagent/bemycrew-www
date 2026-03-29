interface Benefit {
  icon: string;
  text: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  imageAlt: string;
  reversed?: boolean;
}

export default function FeatureSection({
  title,
  description,
  benefits,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start gap-3">
                  <span className="w-8 h-8 flex items-center justify-center text-lg bg-blue-50 rounded-lg shrink-0">
                    {benefit.icon}
                  </span>
                  <span className="text-slate-700 pt-1">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image placeholder */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border border-slate-200 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-500">{imageAlt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
