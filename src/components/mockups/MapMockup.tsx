interface MapMockupProps {
  className?: string;
}

const techs = [
  { initials: 'JM', x: '22%', y: '30%', color: 'bg-blue-500', name: 'Jake M.' },
  { initials: 'SK', x: '55%', y: '20%', color: 'bg-emerald-500', name: 'Sarah K.' },
  { initials: 'MR', x: '75%', y: '45%', color: 'bg-purple-500', name: 'Mike R.' },
  { initials: 'AL', x: '40%', y: '60%', color: 'bg-orange-500', name: 'Ana L.' },
  { initials: 'DW', x: '65%', y: '70%', color: 'bg-rose-500', name: 'Dan W.' },
  { initials: 'RC', x: '30%', y: '78%', color: 'bg-cyan-500', name: 'Ray C.' },
];

const routePoints = [
  { x: 22, y: 30 },
  { x: 32, y: 42 },
  { x: 40, y: 60 },
  { x: 55, y: 55 },
  { x: 65, y: 70 },
  { x: 75, y: 45 },
];

export default function MapMockup({ className = '' }: MapMockupProps) {
  const routePath = routePoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className={`${className}`}>
      <div className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-white" style={{ aspectRatio: '16/10' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded-md flex items-center justify-center">
              <span className="text-[6px] font-bold">BC</span>
            </div>
            <span className="text-[8px] font-semibold">GPS Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-[6px] text-emerald-400">Live</span>
            </div>
            <div className="px-1.5 py-0.5 bg-slate-800 rounded text-[5px] text-slate-300">Optimize Routes</div>
          </div>
        </div>

        {/* Map area */}
        <div className="relative h-[calc(100%-28px)] bg-gradient-to-br from-green-50 via-slate-50 to-green-50 overflow-hidden">
          {/* Street grid */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Major roads */}
            <line x1="15" y1="0" x2="15" y2="100" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="45" y1="0" x2="45" y2="100" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="70" y1="0" x2="70" y2="100" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="90" y1="0" x2="90" y2="100" stroke="#cbd5e1" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="#cbd5e1" strokeWidth="0.8" />
            {/* Minor roads */}
            <line x1="30" y1="0" x2="30" y2="100" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="58" y1="0" x2="58" y2="100" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="82" y1="0" x2="82" y2="100" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="0" y1="12" x2="100" y2="12" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="0" y1="38" x2="100" y2="38" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="0" y1="62" x2="100" y2="62" stroke="#e2e8f0" strokeWidth="0.4" />
            <line x1="0" y1="88" x2="100" y2="88" stroke="#e2e8f0" strokeWidth="0.4" />
            {/* Green blocks (parks) */}
            <rect x="8" y="40" width="6" height="8" rx="1" fill="#bbf7d0" opacity="0.6" />
            <rect x="48" y="80" width="10" height="6" rx="1" fill="#bbf7d0" opacity="0.6" />
            <rect x="78" y="10" width="8" height="5" rx="1" fill="#bbf7d0" opacity="0.6" />
            {/* Route path */}
            <path d={routePath} fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2,1" opacity="0.7" />
          </svg>

          {/* Technician pins */}
          {techs.map((tech) => (
            <div
              key={tech.initials}
              className="absolute flex flex-col items-center"
              style={{ left: tech.x, top: tech.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`${tech.color} w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg z-10`}>
                <span className="text-[5px] font-bold text-white">{tech.initials}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded px-1 py-0.5 shadow-sm mt-0.5 border border-slate-200">
                <span className="text-[5px] font-medium text-slate-700">{tech.name}</span>
              </div>
            </div>
          ))}

          {/* Job pin markers */}
          {[
            { x: '32%', y: '42%' },
            { x: '55%', y: '55%' },
            { x: '85%', y: '35%' },
          ].map((pin, i) => (
            <div key={i} className="absolute" style={{ left: pin.x, top: pin.y, transform: 'translate(-50%, -100%)' }}>
              <svg className="w-3 h-4" viewBox="0 0 24 32" fill="none">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="#ef4444" />
                <circle cx="12" cy="12" r="4" fill="white" />
              </svg>
            </div>
          ))}

          {/* Legend overlay */}
          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-slate-200">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-[7px] font-bold text-slate-800">8 techs active</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1">
                <div className="w-2 h-0.5 bg-blue-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #3b82f6 0px, #3b82f6 3px, transparent 3px, transparent 5px)' }} />
                <span className="text-[5px] text-slate-500">Optimized Route</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-2 h-2" viewBox="0 0 24 32"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="#ef4444" /></svg>
                <span className="text-[5px] text-slate-500">Job Location</span>
              </div>
            </div>
          </div>

          {/* Search bar overlay */}
          <div className="absolute top-2 left-2 right-2 flex gap-1.5">
            <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border border-slate-200 flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[6px] text-slate-400">Search technicians or jobs...</span>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border border-slate-200 flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              <span className="text-[6px] text-slate-600">Filter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
