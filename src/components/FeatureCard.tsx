import Link from 'next/link';
import Icon from './Icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-200"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 rounded-lg transition-colors mb-4">
        <Icon name={icon} className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
        Learn more
        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
