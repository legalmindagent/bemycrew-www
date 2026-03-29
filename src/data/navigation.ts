export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export interface NavDropdown {
  label: string;
  groups: NavGroup[];
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdown;
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Features',
    dropdown: {
      label: 'Features',
      groups: [
        {
          label: 'Office & Operations',
          links: [
            { label: 'Scheduling & Dispatching', href: '/features/scheduling-and-dispatching', description: 'AI-powered scheduling with smart technician matching' },
            { label: 'Work Order Management', href: '/features/work-order-management', description: 'Complete job lifecycle management' },
            { label: 'Project Management', href: '/features/project-management', description: 'Milestones, tasks, and budget tracking' },
            { label: 'Advanced Reporting', href: '/features/advanced-reporting', description: '6 templates, 8 KPIs, CSV export' },
            { label: 'Multi-Location', href: '/features/multi-location', description: 'Per-location settings and roll-up reporting' },
            { label: 'Custom Workflows', href: '/features/custom-workflows', description: 'Custom status flows per job type' },
          ],
        },
        {
          label: 'Field & Mobile',
          links: [
            { label: 'Mobile App', href: '/features/mobile-app', description: 'PWA with offline support' },
            { label: 'Route Optimization', href: '/features/route-optimization', description: 'Google Maps powered routing' },
            { label: 'Photo Documentation', href: '/features/photo-documentation', description: 'Before/during/after job photos' },
            { label: 'Digital Signatures', href: '/features/digital-signatures', description: 'On-site electronic signatures' },
            { label: 'Custom Forms', href: '/features/custom-forms', description: 'Drag-drop form builder, 10 field types' },
            { label: 'Barcode Scanning', href: '/features/barcode-scanning', description: 'Camera-based inventory scanning' },
          ],
        },
        {
          label: 'Customer Experience',
          links: [
            { label: 'Estimates & Invoicing', href: '/features/estimates-and-invoicing', description: 'Good/Better/Best proposals' },
            { label: 'Customer Management', href: '/features/customer-management', description: 'Full CRM for field service' },
            { label: 'Customer Portal', href: '/features/customer-portal', description: 'Self-service for your customers' },
            { label: 'Online Booking', href: '/features/booking-portal', description: 'Public booking widget' },
            { label: 'Two-Way SMS', href: '/features/two-way-sms', description: 'Real-time text conversations' },
            { label: 'On My Way Texts', href: '/features/on-my-way-texts', description: 'Live GPS tracking link' },
            { label: 'Online Payments', href: '/features/online-payments', description: 'Stripe-powered payment collection' },
            { label: 'Service Agreements', href: '/features/service-agreements', description: 'Recurring contracts and plans' },
            { label: 'Consumer Financing', href: '/features/consumer-financing', description: '3/6/12-month payment plans' },
            { label: 'Review Automation', href: '/features/review-automation', description: 'Automated review requests' },
            { label: 'VoIP Phone', href: '/features/voip-phone', description: 'Built-in phone system' },
          ],
        },
        {
          label: 'AI-Powered',
          links: [
            { label: 'AI Dispatch', href: '/features/ai-dispatch', description: 'ML-powered technician scoring' },
            { label: 'AI Chatbot', href: '/features/ai-chatbot', description: 'Claude-powered website bot' },
            { label: 'Voice AI', href: '/features/voice-ai', description: '24/7 AI phone answering' },
            { label: 'AI Inventory', href: '/features/ai-inventory', description: 'Photo-based part identification' },
          ],
        },
      ],
    },
  },
  {
    label: 'Solutions',
    dropdown: {
      label: 'Solutions',
      groups: [
        {
          label: 'By Trade',
          links: [
            { label: 'HVAC & Refrigeration', href: '/solutions/hvac' },
            { label: 'Plumbing', href: '/solutions/plumbing' },
            { label: 'Electrical', href: '/solutions/electrical' },
            { label: 'Garage Door', href: '/solutions/garage-door' },
            { label: 'Locksmith', href: '/solutions/locksmith' },
            { label: 'Appliance Repair', href: '/solutions/appliance-repair' },
            { label: 'Fire & Security', href: '/solutions/fire-and-security' },
            { label: 'General Contractors', href: '/solutions/contractors' },
          ],
        },
        {
          label: 'By Market',
          links: [
            { label: 'Home Services', href: '/solutions/home-services' },
            { label: 'Commercial Services', href: '/solutions/commercial' },
            { label: 'Residential Services', href: '/solutions/residential' },
            { label: 'Property Management', href: '/solutions/property-management' },
          ],
        },
      ],
    },
  },
  {
    label: 'Compare',
    dropdown: {
      label: 'Compare',
      groups: [
        {
          label: 'BeMyCrew vs',
          links: [
            { label: 'vs FieldPulse', href: '/compare/fieldpulse', description: 'More AI, flat-rate pricing' },
            { label: 'vs ServiceTitan', href: '/compare/servicetitan', description: '90% of the features at 10% of the cost' },
            { label: 'vs Jobber', href: '/compare/jobber', description: 'More features, no per-user fees' },
            { label: 'vs Housecall Pro', href: '/compare/housecall-pro', description: 'AI-powered, flat-rate pricing' },
          ],
        },
      ],
    },
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

export const footerNavigation = {
  product: {
    label: 'Product',
    links: [
      { label: 'All Features', href: '/features' },
      { label: 'AI Capabilities', href: '/features#ai' },
      { label: 'Mobile App', href: '/features/mobile-app' },
      { label: 'Pricing', href: '/pricing' },
      { label: "What's New", href: '/changelog' },
    ],
  },
  solutions: {
    label: 'Solutions',
    links: [
      { label: 'HVAC', href: '/solutions/hvac' },
      { label: 'Plumbing', href: '/solutions/plumbing' },
      { label: 'Electrical', href: '/solutions/electrical' },
      { label: 'Garage Door', href: '/solutions/garage-door' },
      { label: 'Home Services', href: '/solutions/home-services' },
      { label: 'Commercial', href: '/solutions/commercial' },
    ],
  },
  compare: {
    label: 'Compare',
    links: [
      { label: 'vs FieldPulse', href: '/compare/fieldpulse' },
      { label: 'vs ServiceTitan', href: '/compare/servicetitan' },
      { label: 'vs Jobber', href: '/compare/jobber' },
      { label: 'vs Housecall Pro', href: '/compare/housecall-pro' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
};

export const ctaNavigation = {
  primary: { label: 'Start Free Trial', href: '/signup' },
  secondary: { label: 'Book a Demo', href: '/demo' },
};
