interface DashboardMockupProps {
  className?: string;
}

const jobCards = [
  { customer: 'Sarah Mitchell', service: 'AC Repair', time: '8:00 AM', status: 'Complete', color: 'bg-emerald-500' },
  { customer: 'James Wilson', service: 'Plumbing', time: '9:30 AM', status: 'In Progress', color: 'bg-blue-500' },
  { customer: 'Maria Garcia', service: 'HVAC Install', time: '11:00 AM', status: 'En Route', color: 'bg-orange-500' },
  { customer: 'Tom Baker', service: 'Electrical', time: '1:00 PM', status: 'Scheduled', color: 'bg-yellow-500' },
  { customer: 'Lisa Chen', service: 'Furnace Tune-Up', time: '2:30 PM', status: 'Scheduled', color: 'bg-yellow-500' },
  { customer: 'Robert Kim', service: 'Duct Cleaning', time: '4:00 PM', status: 'Scheduled', color: 'bg-yellow-500' },
];

const navItems = [
  { label: 'Dashboard', color: 'bg-blue-500', active: true },
  { label: 'Jobs', color: 'bg-emerald-500', active: false },
  { label: 'Schedule', color: 'bg-purple-500', active: false },
  { label: 'Customers', color: 'bg-orange-500', active: false },
  { label: 'Invoices', color: 'bg-yellow-500', active: false },
  { label: 'Reports', color: 'bg-rose-500', active: false },
];

export default function DashboardMockup({ className = '' }: DashboardMockupProps) {
  return (
    <div className={`${className}`} style={{ perspective: '1200px' }}>
      <div
        className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-white"
        style={{ aspectRatio: '16/10', transform: 'rotateY(-2deg) rotateX(1deg)' }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded-md flex items-center justify-center">
              <span className="text-[6px] font-bold">BC</span>
            </div>
            <span className="text-[8px] font-semibold tracking-wide">BeMyCrew</span>
          </div>
          <div className="flex-1 max-w-[30%] mx-3">
            <div className="bg-slate-800 rounded-md px-2 py-0.5 flex items-center gap-1">
              <svg className="w-2 h-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[6px] text-slate-400">Search jobs, customers...</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-[5px] font-bold">KM</span>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100%-28px)]">
          {/* Sidebar */}
          <div className="w-[18%] bg-slate-50 border-r border-slate-200 py-2 px-1.5 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 px-1.5 py-1 rounded-md ${
                  item.active ? 'bg-blue-50 text-blue-700' : 'text-slate-600'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className="text-[6px] font-medium">{item.label}</span>
              </div>
            ))}
            <div className="mt-auto pt-2 border-t border-slate-200 px-1.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="text-[6px] text-slate-400">Settings</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-2 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-[9px] font-bold text-slate-900">Today&apos;s Jobs</h3>
                <p className="text-[6px] text-slate-500">March 28, 2026 &middot; 6 jobs scheduled</p>
              </div>
              <div className="flex gap-1">
                <div className="px-1.5 py-0.5 bg-blue-600 rounded text-[5px] text-white font-medium">+ New Job</div>
                <div className="px-1.5 py-0.5 bg-slate-100 rounded text-[5px] text-slate-600 font-medium">Filter</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {[
                { label: 'Completed', value: '1', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'In Progress', value: '1', color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'En Route', value: '1', color: 'text-orange-600', bg: 'bg-orange-50' },
                { label: 'Scheduled', value: '3', color: 'text-yellow-600', bg: 'bg-yellow-50' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.bg} rounded-md p-1.5`}>
                  <div className={`text-[10px] font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[5px] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Job cards grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {jobCards.map((job) => (
                <div key={job.customer} className="bg-white border border-slate-200 rounded-lg p-1.5 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[7px] font-semibold text-slate-900">{job.customer}</span>
                    <span className={`${job.color} text-white text-[4px] font-bold px-1 py-0.5 rounded-full`}>{job.status}</span>
                  </div>
                  <div className="text-[6px] text-slate-600">{job.service}</div>
                  <div className="text-[5px] text-slate-400 mt-0.5">{job.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="w-[22%] border-l border-slate-200 p-2">
            {/* Mini map */}
            <div className="bg-slate-100 rounded-lg p-1.5 mb-2 relative overflow-hidden" style={{ aspectRatio: '1' }}>
              {/* Grid lines suggesting streets */}
              <div className="absolute inset-0 opacity-20">
                {[20, 40, 60, 80].map((pos) => (
                  <div key={`h-${pos}`}>
                    <div className="absolute left-0 right-0 border-t border-slate-400" style={{ top: `${pos}%` }} />
                    <div className="absolute top-0 bottom-0 border-l border-slate-400" style={{ left: `${pos}%` }} />
                  </div>
                ))}
              </div>
              {/* Location pins */}
              {[
                { top: '25%', left: '30%', color: 'bg-emerald-500' },
                { top: '45%', left: '60%', color: 'bg-blue-500' },
                { top: '60%', left: '20%', color: 'bg-orange-500' },
                { top: '35%', left: '75%', color: 'bg-yellow-500' },
                { top: '70%', left: '50%', color: 'bg-yellow-500' },
              ].map((pin, i) => (
                <div key={i} className={`absolute w-2 h-2 ${pin.color} rounded-full border border-white shadow-sm`} style={{ top: pin.top, left: pin.left }} />
              ))}
              <div className="absolute bottom-1 left-1 text-[5px] text-slate-500 font-medium bg-white/80 px-1 rounded">Live Map</div>
            </div>

            <div className="bg-slate-50 rounded-lg p-1.5 mb-2">
              <div className="text-[6px] text-slate-500 mb-0.5">Team Online</div>
              <div className="text-[11px] font-bold text-slate-900">8<span className="text-slate-400 font-normal">/12</span></div>
              <div className="w-full bg-slate-200 rounded-full h-1 mt-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: '66%' }} />
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-1.5">
              <div className="text-[6px] text-slate-500 mb-0.5">Revenue Today</div>
              <div className="text-[11px] font-bold text-emerald-600">$3,847</div>
              <div className="text-[5px] text-emerald-500 mt-0.5">+12% vs last week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
