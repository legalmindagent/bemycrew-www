interface PhoneMockupProps {
  className?: string;
}

export default function PhoneMockup({ className = '' }: PhoneMockupProps) {
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
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[1.5rem] overflow-hidden relative" style={{ aspectRatio: '9/19' }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-5 pb-1">
            <span className="text-[7px] font-medium text-slate-400">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-0.5 rounded-full ${i <= 3 ? 'bg-slate-400' : 'bg-slate-600'}`} style={{ height: `${4 + i * 1.5}px` }} />
                ))}
              </div>
              <svg className="w-2.5 h-2.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2" /><rect x="20" y="9" width="3" height="6" rx="1" /></svg>
            </div>
          </div>

          {/* Call header */}
          <div className="text-center pt-4 pb-2">
            <div className="w-14 h-14 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-2 ring-4 ring-blue-500/20">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="absolute">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
            </div>
            <div className="text-[11px] font-semibold text-white">AI Assistant</div>
            <div className="text-[8px] text-emerald-400 mt-0.5">Active Call</div>
            <div className="text-[16px] font-mono text-white mt-1 tracking-wider">2:34</div>
          </div>

          {/* Sound wave visualization */}
          <div className="flex items-center justify-center gap-0.5 py-2">
            {[3, 5, 8, 12, 8, 14, 10, 6, 11, 7, 4, 9, 13, 8, 5, 3].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-blue-500"
                style={{ height: `${h}px`, opacity: 0.4 + (h / 14) * 0.6 }}
              />
            ))}
          </div>

          {/* Transcription area */}
          <div className="mx-3 bg-slate-800/80 rounded-xl p-2.5 border border-slate-700">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-[6px] font-medium text-emerald-400 uppercase tracking-wider">Live Transcription</span>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-[6px] font-bold text-orange-400">Customer:</span>
                <p className="text-[7px] text-slate-300 leading-relaxed">I need my furnace looked at. It&apos;s making a weird noise.</p>
              </div>
              <div>
                <span className="text-[6px] font-bold text-blue-400">AI:</span>
                <p className="text-[7px] text-slate-300 leading-relaxed">I&apos;d be happy to help schedule that. Can I get your address and preferred date?</p>
              </div>
              <div>
                <span className="text-[6px] font-bold text-orange-400">Customer:</span>
                <p className="text-[7px] text-slate-300 leading-relaxed">Sure, I&apos;m at 445 Elm Street...</p>
              </div>
            </div>
          </div>

          {/* Call controls */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
            <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
            </div>
            <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
