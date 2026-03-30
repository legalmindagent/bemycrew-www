import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${
        highlighted
          ? 'bg-slate-900 text-white ring-2 ring-blue-600 shadow-xl shadow-blue-500/10'
          : 'bg-white border border-slate-200'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-lg font-semibold ${highlighted ? 'text-white' : 'text-slate-900'}`}>
          {name}
        </h3>
        <p className={`mt-1 text-sm ${highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-slate-900'}`}>
          {price}
        </span>
        <span className={`text-sm ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
          /{period}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${highlighted ? 'text-blue-400' : 'text-blue-600'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
          highlighted
            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
            : 'bg-slate-900 hover:bg-slate-800 text-white'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
