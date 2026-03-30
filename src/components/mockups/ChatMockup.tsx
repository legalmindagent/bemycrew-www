interface ChatMockupProps {
  className?: string;
}

const messages = [
  { from: 'customer', text: 'Do you service AC units?' },
  { from: 'bot', text: "Yes! We service all major AC brands. Would you like to schedule a service call?" },
  { from: 'customer', text: 'Yes please' },
  { from: 'bot', text: "Great! I have openings tomorrow at 10am or 2pm. Which works better?" },
];

export default function ChatMockup({ className = '' }: ChatMockupProps) {
  return (
    <div className={`${className}`}>
      {/* Chat widget frame */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" style={{ width: '280px', maxWidth: '100%' }}>
        {/* Chat header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">BC</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-white">BeMyCrew Assistant</div>
            <div className="text-[8px] text-emerald-400">Online now</div>
          </div>
          <div className="ml-auto">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        {/* Messages */}
        <div className="p-3 space-y-3 bg-slate-50" style={{ minHeight: '240px' }}>
          {/* Welcome message */}
          <div className="text-center">
            <span className="text-[7px] text-slate-400 bg-white px-2 py-0.5 rounded-full">Today 3:24 PM</span>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'customer' ? 'justify-end' : 'justify-start'} gap-1.5`}>
              {msg.from === 'bot' && (
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-auto">
                  <span className="text-[5px] font-bold text-white">BC</span>
                </div>
              )}
              <div
                className={`max-w-[75%] px-2.5 py-1.5 rounded-xl text-[8px] leading-relaxed ${
                  msg.from === 'customer'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          <div className="flex justify-start gap-1.5">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-auto">
              <span className="text-[5px] font-bold text-white">BC</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl rounded-bl-sm px-3 py-2 shadow-sm">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="w-1 h-1 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Input field */}
        <div className="px-3 py-2 border-t border-slate-200 bg-white flex items-center gap-2">
          <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5">
            <span className="text-[8px] text-slate-400">Type a message...</span>
          </div>
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </div>
        </div>

        {/* Powered by */}
        <div className="text-center py-1 bg-slate-50 border-t border-slate-100">
          <span className="text-[6px] text-slate-400">Powered by <span className="font-semibold text-slate-500">BeMyCrew AI</span></span>
        </div>
      </div>
    </div>
  );
}
