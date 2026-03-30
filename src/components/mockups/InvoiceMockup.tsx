interface InvoiceMockupProps {
  className?: string;
}

const lineItems = [
  { description: 'AC Inspection', qty: 1, price: '$89.00' },
  { description: 'Filter Replacement (2x)', qty: 1, price: '$45.00' },
  { description: 'Labor (1.5 hrs)', qty: 1, price: '$120.00' },
];

export default function InvoiceMockup({ className = '' }: InvoiceMockupProps) {
  return (
    <div className={`${className}`}>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden" style={{ width: '300px', maxWidth: '100%' }}>
        {/* Invoice header */}
        <div className="bg-slate-900 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">BC</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-white">BeMyCrew</div>
              <div className="text-[7px] text-slate-400">Field Service Solutions</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-white">INVOICE</div>
            <div className="text-[7px] text-blue-400">#1042</div>
          </div>
        </div>

        {/* Invoice body */}
        <div className="p-5">
          {/* Customer & dates */}
          <div className="flex justify-between mb-4">
            <div>
              <div className="text-[6px] text-slate-400 uppercase tracking-wider font-medium mb-1">Bill To</div>
              <div className="text-[9px] font-semibold text-slate-900">Sarah Mitchell</div>
              <div className="text-[7px] text-slate-500">1423 Oak Street, Apt 4B</div>
              <div className="text-[7px] text-slate-500">Austin, TX 78701</div>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <div className="text-[6px] text-slate-400 uppercase tracking-wider font-medium">Date</div>
                <div className="text-[8px] text-slate-700">Mar 28, 2026</div>
              </div>
              <div>
                <div className="text-[6px] text-slate-400 uppercase tracking-wider font-medium">Due Date</div>
                <div className="text-[8px] text-slate-700">Apr 11, 2026</div>
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-50 text-yellow-700 text-[6px] font-bold px-2 py-0.5 rounded-full border border-yellow-200">PENDING</span>
            <span className="text-[6px] text-slate-400">Sent on Mar 28, 2026</span>
          </div>

          {/* Line items */}
          <div className="border border-slate-200 rounded-lg overflow-hidden mb-4">
            <div className="bg-slate-50 px-3 py-1.5 flex text-[6px] font-semibold text-slate-500 uppercase tracking-wider">
              <div className="flex-1">Description</div>
              <div className="w-10 text-center">Qty</div>
              <div className="w-16 text-right">Amount</div>
            </div>
            {lineItems.map((item, i) => (
              <div key={i} className={`px-3 py-2 flex items-center ${i < lineItems.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex-1 text-[8px] text-slate-800 font-medium">{item.description}</div>
                <div className="w-10 text-center text-[8px] text-slate-500">{item.qty}</div>
                <div className="w-16 text-right text-[8px] text-slate-800 font-medium">{item.price}</div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-slate-200 pt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-[7px] text-slate-500">Subtotal</span>
              <span className="text-[7px] text-slate-700">$254.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[7px] text-slate-500">Tax (0%)</span>
              <span className="text-[7px] text-slate-700">$0.00</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-200">
              <span className="text-[9px] font-bold text-slate-900">Total</span>
              <span className="text-[9px] font-bold text-slate-900">$254.00</span>
            </div>
          </div>

          {/* Pay button */}
          <div className="mt-4">
            <div className="w-full bg-orange-500 text-white text-center py-2 rounded-lg text-[9px] font-semibold shadow-lg shadow-orange-500/20">
              Pay Now &mdash; $254.00
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 text-center">
            <span className="text-[6px] text-slate-400">Thank you for your business! Payment is due within 14 days.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
