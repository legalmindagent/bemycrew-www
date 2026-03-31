export interface ComparisonPoint {
  area: string;
  bemycrew: string;
  competitor: string;
}

export interface Comparison {
  slug: string;
  name: string;
  tagline: string;
  advantages: ComparisonPoint[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'fieldpulse',
    name: 'BeMyCrew vs FieldPulse',
    tagline:
      'Everything FieldPulse offers, plus four AI capabilities they cannot match — free and open source with no per-technician fees.',
    advantages: [
      {
        area: 'Pricing Model',
        bemycrew: 'Free & open source. Self-host the entire platform at no cost, or use our hosted version. No per-technician fees ever.',
        competitor: 'Per-user pricing that increases every time you hire a new technician. Costs scale linearly with team size.',
      },
      {
        area: 'AI Capabilities',
        bemycrew: 'Four built-in AI features: AI Dispatch (ML-powered technician scoring), AI Chatbot (books jobs from your website), Voice AI (24/7 phone answering), and AI Inventory (photo-based part identification).',
        competitor: 'No AI dispatch, no AI chatbot, no voice AI, no AI inventory identification.',
      },
      {
        area: 'Voice AI & Phone System',
        bemycrew: 'Built-in VoIP phone system with Voice AI that answers calls 24/7, qualifies leads, and books appointments automatically.',
        competitor: 'No built-in phone system. No AI call handling. Missed after-hours calls go to voicemail.',
      },
      {
        area: 'Consumer Financing',
        bemycrew: 'Built-in 3/6/12-month consumer financing. Customers apply in 2 minutes, you get paid upfront.',
        competitor: 'No native consumer financing option. Requires third-party integration.',
      },
      {
        area: 'Online Booking',
        bemycrew: 'Public booking portal with real-time availability that syncs directly to your dispatch board.',
        competitor: 'Limited online booking capabilities. Less integration with live schedule data.',
      },
      {
        area: 'Mobile Experience',
        bemycrew: 'PWA with full offline support. Installs in 60 seconds from the browser. Works on any device. Always up to date.',
        competitor: 'Native mobile app requires app store download and manual updates.',
      },
      {
        area: 'Review Automation',
        bemycrew: 'Automated review requests via SMS and email with sentiment filtering to protect your online reputation.',
        competitor: 'Basic review request functionality without intelligent sentiment routing.',
      },
      {
        area: 'Customer Portal',
        bemycrew: 'Branded self-service portal for job history, invoice payments, and new service requests.',
        competitor: 'Limited customer-facing portal with fewer self-service capabilities.',
      },
    ],
  },
  {
    slug: 'servicetitan',
    name: 'BeMyCrew vs ServiceTitan',
    tagline:
      'Enterprise-grade features without the enterprise price tag. Free and open source — get 100% of the features at zero cost.',
    advantages: [
      {
        area: 'Pricing',
        bemycrew: 'Free & open source. The entire platform is available at no cost. Self-host or use our hosted version. No setup fees, no contracts.',
        competitor: 'Starts around $2,000-$4,000+/month. Requires annual contracts, setup fees, and per-technician charges. Built for large operations.',
      },
      {
        area: 'Setup & Onboarding',
        bemycrew: 'Self-service setup in under a day. Simple, intuitive interface. No implementation team or months-long onboarding process.',
        competitor: 'Weeks to months of implementation. Dedicated onboarding team required. Steep learning curve for office staff and technicians.',
      },
      {
        area: 'AI Capabilities',
        bemycrew: 'Four AI features built in from day one: AI Dispatch, AI Chatbot, Voice AI, and AI Inventory. No add-on fees.',
        competitor: 'Titan Intelligence features are available but often require higher-tier plans or add-on costs. No AI inventory identification.',
      },
      {
        area: 'Contract Terms',
        bemycrew: 'Month-to-month. Cancel anytime. No long-term commitments or early termination fees.',
        competitor: 'Typically requires annual or multi-year contracts. Early termination fees apply.',
      },
      {
        area: 'Small Business Fit',
        bemycrew: 'Built specifically for 1-50 technician shops. Every feature is designed for small business workflows and budgets.',
        competitor: 'Built for large operations (50+ technicians). Feature complexity and cost are overkill for most small businesses.',
      },
      {
        area: 'Mobile App',
        bemycrew: 'PWA with offline support. No app store needed. Works on any device, always current.',
        competitor: 'Native mobile app with good functionality but requires app store downloads and manual updates.',
      },
      {
        area: 'Feature Count',
        bemycrew: '27+ features included — all open source. Nothing hidden behind enterprise tiers.',
        competitor: 'Many features require Pro or Enterprise tier upgrades. Add-on modules increase monthly cost significantly.',
      },
      {
        area: 'Consumer Financing',
        bemycrew: 'Built-in financing with 3/6/12-month payment plans. Customers apply in minutes.',
        competitor: 'Financing available through GreenSky integration but requires separate setup and approval.',
      },
    ],
  },
  {
    slug: 'jobber',
    name: 'BeMyCrew vs Jobber',
    tagline:
      'More features, more AI, and completely free and open source — no fees that punish you for growing your team.',
    advantages: [
      {
        area: 'Pricing Model',
        bemycrew: 'Free & open source. Unlimited users. Self-host the entire platform at no cost or use our hosted version.',
        competitor: 'Per-user pricing on higher tiers. Adding technicians increases your monthly bill. Core plan limited to 1 user.',
      },
      {
        area: 'AI Features',
        bemycrew: 'Four AI capabilities: AI Dispatch, AI Chatbot, Voice AI, AI Inventory. No competitor offers all four.',
        competitor: 'Jobber Copilot offers basic AI assistance. No AI dispatch scoring, no voice AI, no AI inventory identification.',
      },
      {
        area: 'Consumer Financing',
        bemycrew: 'Built-in 3/6/12-month payment plans. You get paid upfront, customers pay over time.',
        competitor: 'No native consumer financing. Customers must pay in full or use their own financing.',
      },
      {
        area: 'Custom Workflows',
        bemycrew: 'Fully customizable status workflows per job type. Define your own process with required actions at each step.',
        competitor: 'Fixed workflow stages with limited customization. Cannot create different flows for different job types.',
      },
      {
        area: 'VoIP Phone System',
        bemycrew: 'Built-in VoIP phone with call recording, automatic call logging, and Voice AI integration.',
        competitor: 'No built-in phone system. Requires separate VoIP provider and manual call logging.',
      },
      {
        area: 'Project Management',
        bemycrew: 'Full project management with milestones, tasks, budget tracking, and progress billing for complex jobs.',
        competitor: 'Limited project tracking. Better suited for simple service calls than multi-phase projects.',
      },
      {
        area: 'Custom Forms',
        bemycrew: 'Drag-and-drop form builder with 10 field types. Create unlimited custom forms for inspections, checklists, and compliance.',
        competitor: 'Basic custom fields available but no full form builder with conditional logic and multiple field types.',
      },
      {
        area: 'Multi-Location',
        bemycrew: 'Full multi-location management with per-location settings, teams, and pricing at no extra cost.',
        competitor: 'Limited multi-location support. Managing multiple branches requires workarounds.',
      },
    ],
  },
  {
    slug: 'housecall-pro',
    name: 'BeMyCrew vs Housecall Pro',
    tagline:
      'All the features that made Housecall Pro popular, plus AI-powered dispatch, voice AI, and it is completely free and open source.',
    advantages: [
      {
        area: 'Pricing',
        bemycrew: 'Free & open source. Unlimited technicians. Self-host the entire platform at no cost or use our hosted version.',
        competitor: 'Per-technician pricing that increases as your team grows. Basic plan limited to 1 user.',
      },
      {
        area: 'AI Capabilities',
        bemycrew: 'Four AI features: ML-powered dispatch, website chatbot that books jobs, Voice AI for 24/7 call handling, and photo-based inventory ID.',
        competitor: 'No AI dispatch scoring. No AI chatbot. No voice AI. No AI inventory identification.',
      },
      {
        area: 'Voice AI & After-Hours',
        bemycrew: 'Voice AI answers calls 24/7, qualifies leads, books appointments, and routes emergencies. Never miss a call again.',
        competitor: 'No voice AI. After-hours calls go to voicemail or require a separate answering service.',
      },
      {
        area: 'Custom Workflows',
        bemycrew: 'Create unlimited custom status workflows per job type. Gate transitions behind required actions like photos or signatures.',
        competitor: 'Predefined workflow stages with limited flexibility. Same workflow for every job type.',
      },
      {
        area: 'Offline Capability',
        bemycrew: 'Full offline support. View schedules, update work orders, capture photos, and collect signatures with zero internet. Syncs when back online.',
        competitor: 'Limited offline functionality. Most features require an active internet connection.',
      },
      {
        area: 'Service Agreements',
        bemycrew: 'Robust service agreement management with automated scheduling, billing, renewal tracking, and profitability reporting.',
        competitor: 'Basic recurring service scheduling. Less comprehensive agreement management and tracking.',
      },
      {
        area: 'Project Management',
        bemycrew: 'Built-in project management for complex jobs — milestones, task assignment, budget tracking, and progress billing.',
        competitor: 'Primarily designed for simple service calls. Limited support for multi-phase projects.',
      },
      {
        area: 'Barcode Scanning & AI Inventory',
        bemycrew: 'Camera-based barcode scanning plus AI-powered part identification from photos. No extra hardware needed.',
        competitor: 'No barcode scanning. No AI inventory identification. Manual parts entry only.',
      },
    ],
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
