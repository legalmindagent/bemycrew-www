interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: '27+', label: 'Features' },
  { value: '4', label: 'AI Engines' },
  { value: '$99/mo', label: 'Starting Price' },
  { value: '100%', label: 'Offline Ready' },
];

export default function StatsSection({ stats = defaultStats }: StatsSectionProps) {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
