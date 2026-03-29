interface Advantage {
  area: string;
  bemycrew: string;
  competitor: string;
}

interface ComparisonTableProps {
  competitorName: string;
  advantages: Advantage[];
}

export default function ComparisonTable({ competitorName, advantages }: ComparisonTableProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
        BeMyCrew vs {competitorName}
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        See how BeMyCrew compares feature-by-feature.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left px-6 py-4 font-semibold text-slate-900 w-1/3">
                Feature Area
              </th>
              <th className="text-left px-6 py-4 font-semibold text-blue-600 w-1/3">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BeMyCrew
                </span>
              </th>
              <th className="text-left px-6 py-4 font-semibold text-slate-500 w-1/3">
                {competitorName}
              </th>
            </tr>
          </thead>
          <tbody>
            {advantages.map((row, i) => (
              <tr
                key={row.area}
                className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
              >
                <td className="px-6 py-4 font-medium text-slate-900">
                  {row.area}
                </td>
                <td className="px-6 py-4 text-slate-700">
                  <span className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {row.bemycrew}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
