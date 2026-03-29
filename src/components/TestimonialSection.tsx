const testimonials = [
  {
    quote:
      "BeMyCrew cut our scheduling time in half. We went from sticky notes and phone calls to a fully digital dispatch board in one weekend. My techs love the mobile app.",
    name: "Marcus Johnson",
    role: "Owner",
    company: "Johnson HVAC Services",
  },
  {
    quote:
      "The AI-powered estimates are a game changer. I used to spend 2 hours every evening writing up quotes. Now it takes minutes and my close rate went up 30%.",
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "Bright Spark Electrical",
  },
  {
    quote:
      "We switched from FieldPulse because we needed offline support and better pricing. BeMyCrew delivers both, plus features we didn't even know we needed.",
    name: "David Ramirez",
    role: "Founder",
    company: "Ramirez Plumbing Co.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Trusted by Field Service Pros
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            See why small business owners are switching to BeMyCrew.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                <div className="text-slate-500 text-sm">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
