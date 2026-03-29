export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  heroDescription: string;
  features: string[];
  painPoints: string[];
}

export const industries: Industry[] = [
  {
    slug: 'hvac',
    name: 'HVAC & Refrigeration',
    description:
      'Purpose-built field service software for HVAC contractors. Manage installations, repairs, and maintenance agreements with AI-powered dispatch and smart scheduling.',
    icon: 'Thermometer',
    heroDescription:
      'Run your HVAC business smarter with AI-powered dispatch, maintenance agreement tracking, and Good/Better/Best proposals that increase your average ticket by 20-30%.',
    features: [
      'scheduling-and-dispatching',
      'ai-dispatch',
      'service-agreements',
      'estimates-and-invoicing',
      'route-optimization',
      'customer-portal',
      'mobile-app',
      'consumer-financing',
      'photo-documentation',
      'voice-ai',
      'on-my-way-texts',
      'review-automation',
    ],
    painPoints: [
      'Seasonal demand spikes that overwhelm your dispatch team',
      'Maintenance agreement tracking spread across spreadsheets and sticky notes',
      'Losing big-ticket replacement jobs because customers cannot afford to pay upfront',
      'Technicians driving inefficient routes between calls all day',
      'After-hours emergency calls going to voicemail and lost to competitors',
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    description:
      'Field service management designed for plumbing companies. From emergency drain calls to full repipes, manage every job with real-time dispatch and mobile tools.',
    icon: 'Droplets',
    heroDescription:
      'Keep your plumbing business flowing with instant dispatch, on-my-way texts that eliminate "where is my plumber" calls, and same-day payment collection that ends the accounts receivable chase.',
    features: [
      'scheduling-and-dispatching',
      'work-order-management',
      'estimates-and-invoicing',
      'route-optimization',
      'mobile-app',
      'on-my-way-texts',
      'online-payments',
      'photo-documentation',
      'digital-signatures',
      'two-way-sms',
      'consumer-financing',
      'review-automation',
    ],
    painPoints: [
      'Emergency calls that need immediate dispatch to the closest available plumber',
      'Paper estimates that get lost and delay job approvals',
      'Customers who cannot afford major repairs like repipes or sewer replacements',
      'Technicians wasting time driving back to the office for paperwork',
      'Difficulty proving work was completed properly when disputes arise',
    ],
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    description:
      'Electrical contractor software with custom inspection forms, certification tracking, and compliance documentation built in.',
    icon: 'Zap',
    heroDescription:
      'Power your electrical business with digital inspection forms, compliance documentation, and AI inventory that identifies parts from a photo — so your team works faster and safer.',
    features: [
      'scheduling-and-dispatching',
      'custom-forms',
      'work-order-management',
      'estimates-and-invoicing',
      'ai-inventory',
      'barcode-scanning',
      'mobile-app',
      'photo-documentation',
      'digital-signatures',
      'route-optimization',
      'online-payments',
      'review-automation',
    ],
    painPoints: [
      'Paper inspection forms and compliance checklists that are easy to lose and hard to search',
      'Identifying unfamiliar parts and panels on the job site',
      'Complex multi-phase projects that need milestone tracking and progress billing',
      'Ensuring every technician follows safety protocols and completes required documentation',
      'Quoting complex jobs accurately in the field without access to the pricebook',
    ],
  },
  {
    slug: 'garage-door',
    name: 'Garage Door',
    description:
      'Garage door service software with Good/Better/Best proposals, consumer financing, and review automation to grow your business.',
    icon: 'DoorOpen',
    heroDescription:
      'Grow your garage door business with tiered proposals that upsell premium options, consumer financing that closes big-ticket sales, and automated review requests that build your online reputation.',
    features: [
      'scheduling-and-dispatching',
      'estimates-and-invoicing',
      'consumer-financing',
      'on-my-way-texts',
      'photo-documentation',
      'online-payments',
      'mobile-app',
      'review-automation',
      'route-optimization',
      'booking-portal',
      'two-way-sms',
      'ai-chatbot',
    ],
    painPoints: [
      'Customers choosing the cheapest repair option instead of a full replacement',
      'Price objections on $2,000-$5,000 garage door installations',
      'Competing against big-box retailers on price and online presence',
      'Same-day service expectations with limited technician availability',
      'Low online review counts making it hard to compete in local search',
    ],
  },
  {
    slug: 'locksmith',
    name: 'Locksmith',
    description:
      'Locksmith business software with real-time dispatch, route optimization, and on-my-way tracking for fast-response service.',
    icon: 'KeyRound',
    heroDescription:
      'Run your locksmith business at the speed your customers demand with real-time GPS dispatch, route optimization, and on-my-way texts that set expectations while your tech races to the scene.',
    features: [
      'scheduling-and-dispatching',
      'route-optimization',
      'on-my-way-texts',
      'mobile-app',
      'online-payments',
      'estimates-and-invoicing',
      'two-way-sms',
      'voice-ai',
      'ai-dispatch',
      'booking-portal',
      'digital-signatures',
      'review-automation',
    ],
    painPoints: [
      'Emergency lockout calls that need the fastest possible response time',
      'Dispatching the closest available technician in real time',
      'Collecting payment on site for one-time customers who may never call again',
      'After-hours calls going to voicemail when customers are locked out at midnight',
      'Building a reputation in a trade where trust is everything',
    ],
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    description:
      'Field service software for property managers. Coordinate maintenance across multiple properties with tenant portals, vendor management, and work order tracking.',
    icon: 'Building2',
    heroDescription:
      'Simplify property maintenance with a tenant-facing portal for service requests, multi-location management across your portfolio, and automated workflows that keep maintenance on schedule.',
    features: [
      'work-order-management',
      'customer-portal',
      'multi-location',
      'scheduling-and-dispatching',
      'custom-workflows',
      'service-agreements',
      'advanced-reporting',
      'photo-documentation',
      'two-way-sms',
      'online-payments',
      'mobile-app',
      'digital-signatures',
    ],
    painPoints: [
      'Maintenance requests scattered across phone calls, emails, texts, and sticky notes',
      'Tracking work orders across dozens or hundreds of properties',
      'Coordinating multiple vendors and in-house maintenance staff',
      'Tenant communication breakdowns that lead to complaints and turnover',
      'Lack of documentation when disputes arise about repair quality or timing',
    ],
  },
  {
    slug: 'appliance-repair',
    name: 'Appliance Repair',
    description:
      'Appliance repair software with AI inventory identification, barcode scanning, and parts management to speed up every repair.',
    icon: 'Wrench',
    heroDescription:
      'Fix more appliances on the first visit with AI-powered parts identification, barcode scanning for instant inventory lookup, and a mobile app that gives your techs everything they need in the field.',
    features: [
      'scheduling-and-dispatching',
      'ai-inventory',
      'barcode-scanning',
      'work-order-management',
      'estimates-and-invoicing',
      'mobile-app',
      'on-my-way-texts',
      'route-optimization',
      'consumer-financing',
      'photo-documentation',
      'online-payments',
      'review-automation',
    ],
    painPoints: [
      'Ordering the wrong replacement part and needing a costly return visit',
      'Junior technicians who cannot identify parts as quickly as veterans',
      'Customers declining repairs when the cost approaches the price of a new appliance',
      'Managing parts inventory across service trucks without barcode scanners',
      'Maximizing first-time fix rates to reduce unpaid return trips',
    ],
  },
  {
    slug: 'fire-and-security',
    name: 'Fire & Security',
    description:
      'Fire and security system software with inspection forms, compliance tracking, and service agreement management for recurring contracts.',
    icon: 'ShieldCheck',
    heroDescription:
      'Stay compliant and profitable with digital inspection forms, automated service agreement scheduling, and compliance documentation that is always audit-ready.',
    features: [
      'custom-forms',
      'service-agreements',
      'scheduling-and-dispatching',
      'work-order-management',
      'custom-workflows',
      'digital-signatures',
      'advanced-reporting',
      'multi-location',
      'photo-documentation',
      'mobile-app',
      'estimates-and-invoicing',
      'customer-portal',
    ],
    painPoints: [
      'Paper inspection reports that are hard to organize and impossible to search',
      'Tracking hundreds of recurring inspection and maintenance contracts',
      'Ensuring compliance documentation is complete and accessible for audits',
      'Complex regulatory requirements that vary by jurisdiction',
      'Managing inspection schedules across commercial properties with different code cycles',
    ],
  },
  {
    slug: 'contractors',
    name: 'General Contractors',
    description:
      'Project management and field service software for general contractors. Track milestones, budgets, subcontractors, and multi-phase projects in one platform.',
    icon: 'HardHat',
    heroDescription:
      'Keep complex projects on budget and on schedule with milestone tracking, progress billing, and a mobile app that keeps your entire crew connected from the job site.',
    features: [
      'project-management',
      'estimates-and-invoicing',
      'scheduling-and-dispatching',
      'work-order-management',
      'photo-documentation',
      'custom-forms',
      'digital-signatures',
      'consumer-financing',
      'mobile-app',
      'advanced-reporting',
      'online-payments',
      'customer-portal',
    ],
    painPoints: [
      'Multi-phase projects that are hard to track without dedicated project management software',
      'Budget overruns discovered too late to course-correct',
      'Coordinating schedules across multiple subcontractors and trades',
      'Customers who need financing for large renovation or build-out projects',
      'Inconsistent documentation that creates liability during inspections or disputes',
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    description:
      'All-in-one field service software for home service businesses. Cleaning, handyman, pest control, landscaping — if you serve residential customers, BeMyCrew fits your workflow.',
    icon: 'Home',
    heroDescription:
      'Grow your home service business with online booking that fills your schedule, automated review requests that build your reputation, and a customer portal that keeps homeowners coming back.',
    features: [
      'booking-portal',
      'scheduling-and-dispatching',
      'review-automation',
      'customer-portal',
      'on-my-way-texts',
      'two-way-sms',
      'estimates-and-invoicing',
      'online-payments',
      'mobile-app',
      'route-optimization',
      'service-agreements',
      'ai-chatbot',
    ],
    painPoints: [
      'Customers who expect to book online like they do with every other service',
      'Low online visibility and few reviews compared to franchise competitors',
      'Seasonal demand fluctuations that make revenue unpredictable',
      'Customers ghosting after receiving an estimate and never responding',
      'Spending hours every evening doing invoicing and admin instead of resting',
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial Services',
    description:
      'Field service software for commercial service providers. Multi-location management, service agreements, project tracking, and enterprise-grade reporting at a small business price.',
    icon: 'Building',
    heroDescription:
      'Win and retain commercial accounts with professional proposals, service agreement management, multi-location support, and reporting that proves your value at every contract renewal.',
    features: [
      'multi-location',
      'service-agreements',
      'project-management',
      'advanced-reporting',
      'estimates-and-invoicing',
      'custom-workflows',
      'custom-forms',
      'scheduling-and-dispatching',
      'work-order-management',
      'digital-signatures',
      'customer-portal',
      'online-payments',
    ],
    painPoints: [
      'Commercial clients demanding detailed reporting and SLA compliance',
      'Managing service across multiple client locations with different requirements',
      'Complex billing structures with PO numbers, net terms, and milestone payments',
      'Enterprise competitors offering software capabilities you cannot match',
      'Proving ROI to commercial accounts at contract renewal time',
    ],
  },
  {
    slug: 'residential',
    name: 'Residential Services',
    description:
      'Field service software built for residential service businesses. Online booking, on-my-way texts, consumer financing, and review automation to win homeowner loyalty.',
    icon: 'House',
    heroDescription:
      'Deliver the five-star experience homeowners expect with on-my-way tracking, online booking, same-day invoicing, and automated review requests that grow your reputation on Google.',
    features: [
      'booking-portal',
      'on-my-way-texts',
      'estimates-and-invoicing',
      'consumer-financing',
      'review-automation',
      'customer-portal',
      'scheduling-and-dispatching',
      'two-way-sms',
      'online-payments',
      'mobile-app',
      'ai-chatbot',
      'voice-ai',
    ],
    painPoints: [
      'Homeowners choosing competitors who offer online booking and modern communication',
      'Price-sensitive customers who decline necessary repairs',
      'Losing jobs to competitors with more Google reviews and better online reputation',
      'Missed calls during evenings and weekends when homeowners actually call',
      'The "let me get three quotes" cycle that kills your close rate',
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
