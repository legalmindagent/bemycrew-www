interface MobileMockupProps {
  className?: string;
}

const jobs = [
  { customer: 'Sarah Mitchell', address: '1423 Oak Street, Apt 4B', time: '8:00 AM - 9:30 AM', status: 'Complete', color: 'bg-emerald-500', textColor: 'text-emerald-700', bgColor: 'bg-emerald-50' },
  { customer: 'James Wilson', address: '892 Maple Drive', time: '10:00 AM - 11:30 AM', status: 'In Progress', color: 'bg-blue-500', textColor: 'text-blue-700', bgColor: 'bg-blue-50' },
  { customer: 'Maria Garcia', address: '567 Pine Avenue, Suite 12', time: '1:00 PM - 2:30 PM', status: 'Up Next', color: 'bg-orange-500', textColor: 'text-orange-700', bgColor: 'bg-orange-50' },
];

export default function MobileMockup({ className = '' }: MobileMockupProps) {
  return (
    <div className={`inline-flex justify-center ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-slate-900 rounded-[2rem] p-2 shadow-2xl" style={{ width: '220px' }}>
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-10 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <div className="w-6 h-1 rounded-full bg-slate-700" />
        </div>

        {/* Screen */}
        <div className="bg-white rounded-[1.5rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-5 pb-1">
            <span className="text-[7px] font-medium text-slate-900">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-0.5 rounded-full ${i <= 3 ? 'bg-slate-900' : 'bg-slate-300'}`} style={{ height: `${4 + i * 1.5}px` }} />
                ))}
              </div>
              <svg className="w-2.5 h-2.5 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2" /><rect x="20" y="9" width="3" height="6" rx="1" /></svg>
            </div>
          </div>

          {/* Header */}
          <div className="px-3 pt-1 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <div className="flex-1" />
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-[5px] font-bold text-white">BC</span>
              </div>
            </div>
            <h2 className="text-[11px] font-bold text-slate-900">My Jobs Today</h2>
            <p className="text-[7px] text-slate-500">March 28 &middot; 3 jobs</p>
          </div>

          {/* Job cards */}
          <div className="px-3 space-y-2">
            {jobs.map((job) => (
              <div key={job.customer} className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[8px] font-semibold text-slate-900">{job.customer}</span>
                  <span className={`${job.bgColor} ${job.textColor} text-[5px] font-bold px-1.5 py-0.5 rounded-full`}>{job.status}</span>
                </div>
                <div className="flex items-center gap-1 mb-0.5">
                  <svg className="w-2 h-2 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-[6px] text-slate-500">{job.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-2 h-2 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-[6px] text-slate-500">{job.time}</span>
                </div>
                {job.status === 'In Progress' && (
                  <div className="mt-1.5 flex gap-1">
                    <div className="flex-1 bg-blue-600 text-white text-[5px] font-medium text-center py-1 rounded-md">Mark Complete</div>
                    <div className="bg-slate-100 text-slate-600 text-[5px] font-medium text-center py-1 px-2 rounded-md">Notes</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 pt-1.5 pb-3 flex items-center justify-around" style={{ borderRadius: '0 0 1.5rem 1.5rem' }}>
            {[
              { label: 'Home', active: false, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { label: 'Jobs', active: true, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { label: 'Messages', active: false, icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
              { label: 'Profile', active: false, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            ].map((nav) => (
              <div key={nav.label} className="flex flex-col items-center gap-0.5">
                <svg className={`w-3 h-3 ${nav.active ? 'text-blue-600' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={nav.icon} /></svg>
                <span className={`text-[5px] font-medium ${nav.active ? 'text-blue-600' : 'text-slate-400'}`}>{nav.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
