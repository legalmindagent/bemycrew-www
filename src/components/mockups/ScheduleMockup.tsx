interface ScheduleMockupProps {
  className?: string;
}

const techs = [
  { name: 'Jake M.', initials: 'JM', color: 'bg-blue-500' },
  { name: 'Sarah K.', initials: 'SK', color: 'bg-emerald-500' },
  { name: 'Mike R.', initials: 'MR', color: 'bg-purple-500' },
  { name: 'Ana L.', initials: 'AL', color: 'bg-orange-500' },
];

const hours = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

const blocks = [
  { tech: 0, start: 0, span: 2, label: 'AC Repair - Mitchell', color: 'bg-blue-100 border-blue-400 text-blue-800' },
  { tech: 0, start: 3, span: 2, label: 'HVAC Install - Garcia', color: 'bg-blue-100 border-blue-400 text-blue-800' },
  { tech: 0, start: 7, span: 2, label: 'Duct Cleaning - Kim', color: 'bg-blue-100 border-blue-400 text-blue-800' },
  { tech: 1, start: 0, span: 3, label: 'Plumbing - Wilson', color: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
  { tech: 1, start: 4, span: 2, label: 'Drain Repair - Lopez', color: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
  { tech: 1, start: 7, span: 1, label: 'Inspection - Park', color: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
  { tech: 2, start: 1, span: 2, label: 'Electrical - Baker', color: 'bg-purple-100 border-purple-400 text-purple-800' },
  { tech: 2, start: 4, span: 3, label: 'Panel Upgrade - Torres', color: 'bg-purple-100 border-purple-400 text-purple-800' },
  { tech: 3, start: 0, span: 2, label: 'Furnace Tune - Chen', color: 'bg-orange-100 border-orange-400 text-orange-800' },
  { tech: 3, start: 3, span: 2, label: 'Heat Pump - Davis', color: 'bg-orange-100 border-orange-400 text-orange-800' },
  { tech: 3, start: 6, span: 3, label: 'AC Install - Nguyen', color: 'bg-orange-100 border-orange-400 text-orange-800' },
];

export default function ScheduleMockup({ className = '' }: ScheduleMockupProps) {
  return (
    <div className={`${className}`}>
      <div className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-white" style={{ aspectRatio: '16/10' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded-md flex items-center justify-center">
              <span className="text-[6px] font-bold">BC</span>
            </div>
            <span className="text-[8px] font-semibold">Schedule</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-md px-2 py-0.5 gap-1">
              <svg className="w-2 h-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span className="text-[6px] text-slate-300">Mar 28, 2026</span>
              <svg className="w-2 h-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
            <div className="flex gap-1">
              <div className="px-1.5 py-0.5 bg-blue-600 rounded text-[5px] font-medium">Day</div>
              <div className="px-1.5 py-0.5 bg-slate-700 rounded text-[5px] font-medium text-slate-300">Week</div>
              <div className="px-1.5 py-0.5 bg-slate-700 rounded text-[5px] font-medium text-slate-300">Month</div>
            </div>
          </div>
        </div>

        {/* Schedule grid */}
        <div className="flex h-[calc(100%-32px)]">
          {/* Tech names column */}
          <div className="w-[12%] border-r border-slate-200 pt-6">
            {techs.map((tech) => (
              <div key={tech.initials} className="h-1/4 flex items-center gap-1 px-2 border-b border-slate-100">
                <div className={`w-4 h-4 ${tech.color} rounded-full flex items-center justify-center shrink-0`}>
                  <span className="text-[5px] font-bold text-white">{tech.initials}</span>
                </div>
                <span className="text-[6px] font-medium text-slate-700 truncate">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div className="flex-1 relative">
            {/* Hour headers */}
            <div className="flex border-b border-slate-200">
              {hours.map((hour) => (
                <div key={hour} className="flex-1 text-center py-1 border-r border-slate-100">
                  <span className="text-[5px] font-medium text-slate-500">{hour}</span>
                </div>
              ))}
            </div>

            {/* Grid rows */}
            <div className="relative">
              {techs.map((_, techIdx) => (
                <div key={techIdx} className="flex h-[calc((100%-0px)/1)] border-b border-slate-100" style={{ height: '56px' }}>
                  {hours.map((_, hourIdx) => (
                    <div key={hourIdx} className="flex-1 border-r border-slate-50" />
                  ))}
                </div>
              ))}

              {/* Job blocks */}
              {blocks.map((block, i) => (
                <div
                  key={i}
                  className={`absolute ${block.color} border-l-2 rounded-r-md px-1 py-0.5 overflow-hidden`}
                  style={{
                    top: `${block.tech * 56 + 2}px`,
                    left: `${(block.start / hours.length) * 100}%`,
                    width: `${(block.span / hours.length) * 100}%`,
                    height: '52px',
                  }}
                >
                  <div className="text-[6px] font-semibold truncate">{block.label}</div>
                  <div className="text-[5px] opacity-70">{hours[block.start]} - {hours[block.start + block.span] || '6PM'}</div>
                </div>
              ))}

              {/* Current time line */}
              <div
                className="absolute top-0 bottom-0 w-px bg-red-500 z-10"
                style={{ left: '35%' }}
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
