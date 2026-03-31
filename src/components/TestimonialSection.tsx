import Icon from './Icon';

const proofCards = [
  {
    icon: 'Brain',
    headline: '4 AI Engines Included',
    description:
      'The only field service platform with AI dispatch, voice AI, chatbot, and inventory AI \u2014 all included in Professional and Enterprise plans.',
    borderColor: 'border-t-blue-500',
  },
  {
    icon: 'DollarSign',
    headline: 'Flat-Rate Pricing',
    description:
      'No per-technician fees. Know exactly what you\u2019ll pay every month. Start at $49/mo for Voice AI or $99/mo for the full platform.',
    borderColor: 'border-t-orange-500',
  },
  {
    icon: 'Layers',
    headline: '30+ Features, One Platform',
    description:
      'Scheduling, dispatch, invoicing, GPS tracking, time clock, inventory, custom forms, and more \u2014 everything you need without the enterprise price tag.',
    borderColor: 'border-t-emerald-500',
  },
];

const businessTypes = [
  { icon: 'Users', label: 'Solo Operators' },
  { icon: 'HardHat', label: 'Small Crews' },
  { icon: 'Building2', label: 'Growing Companies' },
  { icon: 'MapPin', label: 'Multi-Location Teams' },
];

export default function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Props */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Service Businesses Choose BeMyCrew
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Real capabilities, honest pricing, no gimmicks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {proofCards.map((card) => (
            <div
              key={card.headline}
              className={`bg-white rounded-xl p-8 border border-slate-200 border-t-4 ${card.borderColor} shadow-sm flex flex-col items-center text-center transition-shadow hover:shadow-md`}
            >
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-blue-50">
                <Icon name={card.icon} className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {card.headline}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-8">
            Built for service businesses of every size
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {businessTypes.map((bt) => (
              <div key={bt.label} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-slate-200">
                  <Icon name={bt.icon} className="w-6 h-6 text-slate-500" />
                </div>
                <span className="text-sm font-medium text-slate-600">
                  {bt.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
