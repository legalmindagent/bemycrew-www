import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Blog — Resources & Insights — BeMyCrew',
  description:
    'Tips, guides, and insights for field service businesses. Learn how to grow your business, improve operations, and deliver better customer experiences.',
};

const placeholderArticles = [
  {
    title: '5 Ways AI Is Changing Field Service Management in 2026',
    category: 'Industry Trends',
    description:
      'From automated dispatch to voice AI, discover how artificial intelligence is transforming the way field service companies operate.',
    readTime: '6 min read',
  },
  {
    title: 'How to Increase Your Average Ticket Value by 30%',
    category: 'Growth',
    description:
      'Good/Better/Best proposals, consumer financing, and upselling strategies that help field service businesses earn more per job.',
    readTime: '8 min read',
  },
  {
    title: 'The True Cost of Per-Technician Pricing',
    category: 'Pricing',
    description:
      'Why per-user software pricing punishes growing businesses — and how flat-rate alternatives save thousands per year.',
    readTime: '5 min read',
  },
  {
    title: 'Getting More 5-Star Google Reviews (Without Being Pushy)',
    category: 'Marketing',
    description:
      'Automated review request strategies that boost your online reputation and help you win more local search traffic.',
    readTime: '7 min read',
  },
  {
    title: 'Offline-First Mobile Apps: Why Your Field Team Needs One',
    category: 'Technology',
    description:
      'Basements, rural areas, and job sites with no signal — why offline capability is a must-have for field service software.',
    readTime: '4 min read',
  },
  {
    title: 'From Spreadsheets to Software: A Migration Guide',
    category: 'Getting Started',
    description:
      'A step-by-step guide for field service businesses making the leap from spreadsheets and paper to modern management software.',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Resources & Insights"
        subtitle="Tips, guides, and industry insights to help you run a more profitable field service business."
        badge="Blog"
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'View Features', href: '/features' }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Articles on the Way
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We are writing in-depth guides for field service business owners. Here is a preview of what is coming.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderArticles.map((article) => (
              <div
                key={article.title}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Do Not Wait for the Blog — Try BeMyCrew Today"
        subtitle="Start your free trial and see how BeMyCrew can transform your field service business."
        primaryCTA={{ text: 'Start Free Trial', href: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', href: '/demo' }}
      />
    </>
  );
}
