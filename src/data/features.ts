export type FeatureCategory = 'office' | 'field' | 'customer' | 'ai';

export interface Benefit {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  category: FeatureCategory;
  benefits: Benefit[];
  faqs: FAQ[];
}

export const features: Feature[] = [
  // ─── OFFICE FEATURES ───────────────────────────────────────────────
  {
    slug: 'scheduling-and-dispatching',
    name: 'Scheduling & Dispatching',
    shortDescription: 'AI-powered scheduling with smart technician matching.',
    longDescription:
      'Stop spending hours on the phone juggling schedules. BeMyCrew uses AI to match the right technician to every job based on skills, location, availability, and customer history. Drag-and-drop calendar views, recurring appointments, and real-time schedule updates keep your entire team in sync.',
    icon: 'CalendarClock',
    category: 'office',
    benefits: [
      {
        title: 'Cut scheduling time by 80%',
        description:
          'AI suggests the best technician for every job instantly, so dispatchers spend minutes instead of hours building the daily board.',
      },
      {
        title: 'Fewer missed appointments',
        description:
          'Automated reminders and real-time schedule syncing mean technicians always know where to be and customers always know when to expect them.',
      },
      {
        title: 'Maximize billable hours',
        description:
          'Smart scheduling minimizes drive time between jobs and fills open slots automatically, so your team stays productive all day.',
      },
      {
        title: 'Handle last-minute changes',
        description:
          'Cancellations and emergencies happen. Drag-and-drop rescheduling and instant tech notifications keep your day on track.',
      },
    ],
    faqs: [
      {
        question: 'Can I see all my technicians on one calendar?',
        answer:
          'Yes. The dispatch board shows every technician side-by-side with color-coded job statuses. Filter by skill, location, or availability in one click.',
      },
      {
        question: 'Does it support recurring appointments?',
        answer:
          'Absolutely. Set up weekly, monthly, quarterly, or custom recurring schedules for maintenance contracts and service agreements.',
      },
      {
        question: 'How does the AI matching work?',
        answer:
          'Our AI scores each available technician based on skill certifications, proximity to the job site, current workload, and past performance on similar jobs to recommend the optimal assignment.',
      },
      {
        question: 'Can dispatchers override the AI suggestion?',
        answer:
          'Always. The AI provides a ranked recommendation, but dispatchers have full drag-and-drop control to assign any technician they choose.',
      },
    ],
  },
  {
    slug: 'work-order-management',
    name: 'Work Order Management',
    shortDescription: 'Complete job lifecycle management from creation to close-out.',
    longDescription:
      'Track every job from the first customer call to final payment. Work orders capture all the details your team needs — scope of work, parts, labor, photos, notes, and signatures — in one organized record. Custom statuses let you mirror your real workflow, so nothing slips through the cracks.',
    icon: 'ClipboardList',
    category: 'office',
    benefits: [
      {
        title: 'Nothing falls through the cracks',
        description:
          'Every job has a clear status and owner. Automated status transitions and notifications keep work moving without manual follow-up.',
      },
      {
        title: 'Complete job history at your fingertips',
        description:
          'Photos, notes, parts used, time logged, and customer signatures are all attached to the work order for easy reference and dispute resolution.',
      },
      {
        title: 'Faster invoicing',
        description:
          'Convert completed work orders to invoices in one click. Labor, materials, and line items carry over automatically.',
      },
      {
        title: 'Customizable to your process',
        description:
          'Define custom fields, checklists, and status flows that match exactly how your business operates — no workarounds needed.',
      },
    ],
    faqs: [
      {
        question: 'Can I create work orders from the field?',
        answer:
          'Yes. Technicians can create, update, and complete work orders from any mobile device using the BeMyCrew PWA, even offline.',
      },
      {
        question: 'How do work orders connect to invoicing?',
        answer:
          'One click converts a completed work order into an invoice. All labor hours, parts, and line items transfer automatically so you never miss a charge.',
      },
      {
        question: 'Can I attach files and photos to a work order?',
        answer:
          'Yes. Attach unlimited photos, PDFs, and documents to any work order. Technicians can snap before/during/after photos directly from their phone.',
      },
    ],
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    shortDescription: 'Milestones, tasks, and budget tracking for larger jobs.',
    longDescription:
      'Not every job is a one-visit fix. BeMyCrew project management lets you break complex installations and renovations into milestones and tasks, assign them across your team, and track budgets in real time. Keep big projects profitable and on schedule without spreadsheets.',
    icon: 'FolderKanban',
    category: 'office',
    benefits: [
      {
        title: 'Keep big jobs profitable',
        description:
          'Real-time budget tracking compares estimated vs. actual costs at every milestone, so you catch overruns before they eat your margin.',
      },
      {
        title: 'Break work into clear milestones',
        description:
          'Define phases, assign tasks to specific techs, and track completion percentages so everyone knows what is done and what is next.',
      },
      {
        title: 'One system for all job sizes',
        description:
          'Use simple work orders for service calls and full project management for multi-day installs — no need for a separate PM tool.',
      },
    ],
    faqs: [
      {
        question: 'Can I set up milestone-based billing?',
        answer:
          'Yes. Create invoices tied to specific milestones so you can bill as phases complete rather than waiting until the entire project is done.',
      },
      {
        question: 'How does budget tracking work?',
        answer:
          'Set an estimated budget per project or milestone. As labor and parts are logged, BeMyCrew calculates actual spend and shows remaining budget in real time.',
      },
      {
        question: 'Can multiple technicians work on the same project?',
        answer:
          'Absolutely. Assign different tasks and milestones to different team members. Everyone sees the full project timeline and their specific responsibilities.',
      },
    ],
  },
  {
    slug: 'advanced-reporting',
    name: 'Advanced Reporting',
    shortDescription: '6 report templates, 8 KPIs, and CSV export.',
    longDescription:
      'Make data-driven decisions with built-in reporting that tracks the metrics that matter most to field service businesses. Monitor revenue, job completion rates, technician utilization, average ticket value, and more. Export to CSV for deeper analysis or share reports with your team.',
    icon: 'BarChart3',
    category: 'office',
    benefits: [
      {
        title: 'Know your numbers instantly',
        description:
          'Dashboard KPIs show revenue, job volume, average ticket value, and technician utilization at a glance — no spreadsheets required.',
      },
      {
        title: 'Identify your top performers',
        description:
          'Technician performance reports highlight who is generating the most revenue, completing the most jobs, and earning the best reviews.',
      },
      {
        title: 'Spot trends before they become problems',
        description:
          'Track week-over-week and month-over-month trends in revenue, cancellations, and customer satisfaction to catch issues early.',
      },
    ],
    faqs: [
      {
        question: 'What report templates are included?',
        answer:
          'Six templates out of the box: Revenue Summary, Technician Performance, Job Completion, Customer Acquisition, Service Agreement Status, and Accounts Receivable Aging.',
      },
      {
        question: 'Can I export data?',
        answer:
          'Yes. Every report can be exported to CSV for use in Excel, Google Sheets, or your accounting software.',
      },
      {
        question: 'What KPIs are tracked?',
        answer:
          'Eight core KPIs: total revenue, job count, average ticket value, first-time fix rate, technician utilization, customer satisfaction score, accounts receivable aging, and conversion rate.',
      },
    ],
  },
  {
    slug: 'multi-location',
    name: 'Multi-Location Management',
    shortDescription: 'Manage multiple office locations with per-location settings.',
    longDescription:
      'Running more than one location should not mean running more than one software system. BeMyCrew supports multiple locations under a single account with per-location settings for service areas, pricing, tax rates, and team assignments. Roll-up reporting gives you the big picture while location-level views keep managers focused.',
    icon: 'MapPin',
    category: 'office',
    benefits: [
      {
        title: 'One account, all locations',
        description:
          'Manage every branch from a single login. No duplicate data entry, no separate subscriptions, no reconciling across systems.',
      },
      {
        title: 'Per-location control',
        description:
          'Set unique service areas, tax rates, pricing, and team rosters for each location while sharing a global pricebook and customer database.',
      },
      {
        title: 'Roll-up reporting',
        description:
          'See company-wide revenue and performance, then drill into individual locations to compare and identify opportunities.',
      },
    ],
    faqs: [
      {
        question: 'Is there a limit to the number of locations?',
        answer:
          'No. Add as many locations as you need. Each location can have its own service area, team, and settings.',
      },
      {
        question: 'Can technicians be shared across locations?',
        answer:
          'Yes. Assign a technician to multiple locations or keep them dedicated to one — whatever fits your operation.',
      },
      {
        question: 'How does pricing work for multiple locations?',
        answer:
          'BeMyCrew charges a flat monthly rate, not per-location. All your locations are included in your plan at no additional cost.',
      },
    ],
  },
  {
    slug: 'custom-workflows',
    name: 'Custom Workflows',
    shortDescription: 'Build custom status flows per job type.',
    longDescription:
      'Every trade works differently. A plumbing repair has different steps than an HVAC install. Custom workflows let you define the exact status progression for each job type — from initial request through completion and follow-up. Automate transitions, require approvals, and trigger notifications at every stage.',
    icon: 'Workflow',
    category: 'office',
    benefits: [
      {
        title: 'Mirror your real process',
        description:
          'Define statuses and transitions that match how your team actually works, rather than forcing your business into a rigid template.',
      },
      {
        title: 'Enforce quality standards',
        description:
          'Require photos, signatures, or checklist completion before a job can advance to the next status, ensuring consistent work quality.',
      },
      {
        title: 'Different flows for different job types',
        description:
          'A service call, an installation, and a maintenance visit can each have their own workflow with unique steps and requirements.',
      },
    ],
    faqs: [
      {
        question: 'How many custom workflows can I create?',
        answer:
          'Unlimited. Create as many workflows as you have job types. Each workflow can have as many statuses and transitions as you need.',
      },
      {
        question: 'Can I require certain actions at specific stages?',
        answer:
          'Yes. Gate status transitions behind requirements like uploading a photo, collecting a signature, completing a checklist, or getting manager approval.',
      },
      {
        question: 'Do workflows trigger notifications?',
        answer:
          'Yes. Configure automatic notifications to customers, technicians, or office staff whenever a job enters a specific status.',
      },
    ],
  },

  // ─── FIELD FEATURES ────────────────────────────────────────────────
  {
    slug: 'route-optimization',
    name: 'Route Optimization',
    shortDescription: 'Google Maps powered route optimization for field teams.',
    longDescription:
      'Every mile your technician drives is a mile they are not billing. BeMyCrew integrates with Google Maps to calculate the fastest routes between jobs, minimize windshield time, and maximize the number of jobs your team can complete each day. Real-time traffic data keeps routes accurate throughout the day.',
    icon: 'Route',
    category: 'field',
    benefits: [
      {
        title: 'More jobs per day',
        description:
          'Optimized routes reduce drive time by up to 30%, letting your team fit one or two extra jobs into every day.',
      },
      {
        title: 'Lower fuel costs',
        description:
          'Fewer miles driven means less spent on gas, vehicle wear, and maintenance — savings that go straight to your bottom line.',
      },
      {
        title: 'Real-time traffic awareness',
        description:
          'Routes adjust for live traffic conditions so your techs avoid delays and arrive on time, every time.',
      },
    ],
    faqs: [
      {
        question: 'Does it use real-time traffic data?',
        answer:
          'Yes. Route optimization is powered by Google Maps and incorporates live traffic conditions to calculate the fastest actual route.',
      },
      {
        question: 'Can technicians see their route on their phone?',
        answer:
          'Yes. The optimized route displays in the mobile app with turn-by-turn navigation. One tap opens directions in Google Maps or Apple Maps.',
      },
      {
        question: 'Does it handle same-day schedule changes?',
        answer:
          'Yes. When a job is added, moved, or cancelled, the route recalculates automatically so your tech always has the most efficient path.',
      },
    ],
  },
  {
    slug: 'mobile-app',
    name: 'Mobile App',
    shortDescription: 'PWA with offline support — no app store needed.',
    longDescription:
      'Your technicians need their tools to work everywhere — including basements, attics, and rural areas with no signal. BeMyCrew is a Progressive Web App that installs instantly from the browser, works offline, and syncs automatically when connectivity returns. No app store downloads, no update delays, no compatibility issues.',
    icon: 'Smartphone',
    category: 'field',
    benefits: [
      {
        title: 'Works offline',
        description:
          'View schedules, update work orders, capture photos, and collect signatures even with zero internet connection. Everything syncs when you are back online.',
      },
      {
        title: 'Instant deployment',
        description:
          'No app store approval, no downloads, no waiting. Send your team a link and they are up and running in 60 seconds.',
      },
      {
        title: 'Always up to date',
        description:
          'PWA updates happen automatically in the background. Every technician is always on the latest version with zero effort from you or your team.',
      },
      {
        title: 'Works on any device',
        description:
          'Android, iPhone, iPad, laptop — if it has a browser, it runs BeMyCrew. No compatibility headaches.',
      },
    ],
    faqs: [
      {
        question: 'Do technicians need to download anything from the app store?',
        answer:
          'No. BeMyCrew is a Progressive Web App. Technicians open a link in their browser and tap "Add to Home Screen." It looks and feels like a native app without the app store.',
      },
      {
        question: 'What works offline?',
        answer:
          'Schedules, work order details, customer info, photo capture, digital signatures, and form completion all work offline. Data syncs automatically when connectivity returns.',
      },
      {
        question: 'Does it work on both Android and iPhone?',
        answer:
          'Yes. The PWA runs on any modern browser on any device — Android, iOS, tablets, and laptops.',
      },
    ],
  },
  {
    slug: 'photo-documentation',
    name: 'Photo Documentation',
    shortDescription: 'Before, during, and after job photos.',
    longDescription:
      'A picture is worth a thousand words — and in field service, it can be worth thousands of dollars in avoided disputes. BeMyCrew makes it easy for technicians to capture timestamped, geotagged photos at every stage of a job. Photos attach directly to the work order for a complete visual record.',
    icon: 'Camera',
    category: 'field',
    benefits: [
      {
        title: 'Eliminate disputes',
        description:
          'Timestamped before-and-after photos provide undeniable proof of work completed and pre-existing conditions.',
      },
      {
        title: 'Improve customer trust',
        description:
          'Sharing job photos with customers shows transparency and professionalism, leading to higher review scores and repeat business.',
      },
      {
        title: 'Train your team',
        description:
          'Build a visual library of completed work that new hires can reference. See what quality workmanship looks like across your organization.',
      },
    ],
    faqs: [
      {
        question: 'Are photos timestamped and geotagged?',
        answer:
          'Yes. Every photo is automatically stamped with the date, time, and GPS location for a verifiable record.',
      },
      {
        question: 'Where are photos stored?',
        answer:
          'Photos are attached directly to the work order and stored securely in the cloud. They are accessible from any device at any time.',
      },
      {
        question: 'Can I require photos at certain job stages?',
        answer:
          'Yes. Use custom workflows to require photo uploads before a technician can advance a job to the next status.',
      },
    ],
  },
  {
    slug: 'barcode-scanning',
    name: 'Barcode Scanning',
    shortDescription: 'Camera-based barcode and inventory scanning.',
    longDescription:
      'Stop typing part numbers by hand. BeMyCrew uses your phone camera to scan barcodes and QR codes instantly, pulling up part details, pricing, and inventory levels. Speed up parts logging on work orders and keep your inventory counts accurate without expensive handheld scanners.',
    icon: 'ScanBarcode',
    category: 'field',
    benefits: [
      {
        title: 'Eliminate manual entry errors',
        description:
          'Scanning a barcode is faster and more accurate than typing a 12-digit part number on a phone keyboard in a dark attic.',
      },
      {
        title: 'No extra hardware needed',
        description:
          'Use the camera already on your phone. No expensive handheld barcode scanners to buy, maintain, or replace.',
      },
      {
        title: 'Real-time inventory tracking',
        description:
          'Scanned parts are automatically deducted from inventory, keeping stock levels accurate and reorder alerts timely.',
      },
    ],
    faqs: [
      {
        question: 'What types of barcodes are supported?',
        answer:
          'BeMyCrew supports UPC, EAN, Code 128, Code 39, QR codes, and most other standard barcode formats.',
      },
      {
        question: 'Does it work with my existing inventory?',
        answer:
          'Yes. Import your parts catalog with barcode numbers and the scanner will match scanned codes to your existing inventory items.',
      },
      {
        question: 'Can technicians scan parts onto a work order?',
        answer:
          'Yes. Scan a part barcode from the work order screen and it is added as a line item with the correct description, price, and quantity.',
      },
    ],
  },
  {
    slug: 'digital-signatures',
    name: 'Digital Signatures',
    shortDescription: 'On-site electronic signature capture.',
    longDescription:
      'Close out jobs on the spot with legally binding electronic signatures captured right on the technician\'s phone or tablet. Customers sign with their finger, and the signature is permanently attached to the work order. No more chasing paper, scanning forms, or losing sign-off sheets.',
    icon: 'PenTool',
    category: 'field',
    benefits: [
      {
        title: 'Close jobs on site',
        description:
          'Capture customer approval before your technician leaves, eliminating follow-up calls and delayed sign-offs.',
      },
      {
        title: 'Legally binding records',
        description:
          'E-signatures meet ESIGN Act and UETA standards. Timestamped and attached to the work order for a complete audit trail.',
      },
      {
        title: 'Go fully paperless',
        description:
          'Eliminate printed forms, clipboards, and filing cabinets. Every signature is stored digitally and searchable forever.',
      },
    ],
    faqs: [
      {
        question: 'Are electronic signatures legally binding?',
        answer:
          'Yes. BeMyCrew e-signatures comply with the ESIGN Act and UETA, making them legally equivalent to wet-ink signatures for service agreements and work authorizations.',
      },
      {
        question: 'Can customers sign on the technician\'s phone?',
        answer:
          'Yes. Customers sign directly on the technician\'s device using their finger or a stylus. The signature is captured, timestamped, and attached to the work order instantly.',
      },
      {
        question: 'Can I require a signature before closing a job?',
        answer:
          'Yes. Configure your workflow to require a customer signature before the work order can be marked complete.',
      },
    ],
  },
  {
    slug: 'custom-forms',
    name: 'Custom Forms',
    shortDescription: 'Drag-and-drop form builder with 10 field types.',
    longDescription:
      'Every trade has unique inspection checklists, safety forms, and documentation requirements. BeMyCrew\'s form builder lets you create custom forms with 10 field types — text, number, date, dropdown, checkbox, radio, photo, signature, toggle, and paragraph. Attach forms to job types so technicians always fill out the right paperwork.',
    icon: 'FileText',
    category: 'field',
    benefits: [
      {
        title: 'Replace paper forms completely',
        description:
          'Digitize every inspection checklist, safety form, and equipment log. Data flows directly into the work order — no re-entry needed.',
      },
      {
        title: 'Ensure compliance',
        description:
          'Require form completion before a job can be closed. Never miss a safety check, inspection item, or regulatory requirement again.',
      },
      {
        title: 'Build forms in minutes',
        description:
          'Drag-and-drop builder with 10 field types means anyone on your team can create professional forms without any technical skills.',
      },
    ],
    faqs: [
      {
        question: 'What field types are available?',
        answer:
          'Ten types: text input, number input, date picker, dropdown select, checkbox, radio button, photo capture, signature, toggle switch, and paragraph text.',
      },
      {
        question: 'Can I attach forms to specific job types?',
        answer:
          'Yes. Link forms to job types so the correct form automatically appears when a technician opens that type of work order.',
      },
      {
        question: 'Do forms work offline?',
        answer:
          'Yes. Technicians can fill out forms offline. Completed form data syncs to the work order when connectivity returns.',
      },
    ],
  },

  // ─── CUSTOMER FEATURES ─────────────────────────────────────────────
  {
    slug: 'estimates-and-invoicing',
    name: 'Estimates & Invoicing',
    shortDescription: 'Good/Better/Best proposals with pricebook and one-click invoicing.',
    longDescription:
      'Win more jobs and get paid faster. Create professional Good/Better/Best proposals that let customers choose the option that fits their budget — proven to increase average ticket value by 20-30%. Convert approved estimates to invoices in one click, and collect payment on site or online through Stripe.',
    icon: 'Receipt',
    category: 'customer',
    benefits: [
      {
        title: 'Increase average ticket value',
        description:
          'Good/Better/Best proposals give customers a choice and consistently drive upsells. Most businesses see a 20-30% increase in average ticket size.',
      },
      {
        title: 'Get paid same-day',
        description:
          'Convert estimates to invoices in one click and collect payment on site via card or online via Stripe. No more 30-day receivables.',
      },
      {
        title: 'Professional proposals in minutes',
        description:
          'Pull items from your pricebook, add labor, and send a polished proposal via email or text — all from the job site.',
      },
      {
        title: 'Pricebook keeps pricing consistent',
        description:
          'A centralized pricebook ensures every technician quotes the same prices. Update once, and it is reflected across your entire team.',
      },
    ],
    faqs: [
      {
        question: 'What is a Good/Better/Best proposal?',
        answer:
          'It presents three options at different price points — for example, a basic repair, a mid-range fix with warranty, and a premium replacement. Customers choose the tier that fits their budget, and most pick the middle or top option.',
      },
      {
        question: 'Can customers approve estimates online?',
        answer:
          'Yes. Customers receive a link via email or SMS, review the proposal, and approve it with a digital signature — all from their phone.',
      },
      {
        question: 'Does it integrate with accounting software?',
        answer:
          'Yes. Invoice data can be exported via CSV for import into QuickBooks, Xero, or any accounting platform.',
      },
      {
        question: 'Can I customize invoice templates?',
        answer:
          'Yes. Add your logo, company colors, terms, and custom notes to create professional-looking invoices that match your brand.',
      },
    ],
  },
  {
    slug: 'customer-management',
    name: 'Customer Management',
    shortDescription: 'Full CRM built for field service businesses.',
    longDescription:
      'Know your customers inside and out. BeMyCrew CRM stores complete contact information, property details, equipment records, service history, communication logs, and payment history in one place. When a customer calls, your team has everything they need to deliver exceptional service — before the tech even arrives.',
    icon: 'Users',
    category: 'customer',
    benefits: [
      {
        title: 'Complete customer history',
        description:
          'Every job, invoice, payment, photo, note, and communication is tied to the customer record. No more digging through files or asking the customer to repeat themselves.',
      },
      {
        title: 'Property and equipment tracking',
        description:
          'Record equipment make, model, serial number, and install date for every property. Your technicians arrive knowing exactly what they are walking into.',
      },
      {
        title: 'Faster phone intake',
        description:
          'Caller ID lookup pulls up the customer record instantly. Your CSR can greet them by name and see open jobs before the customer finishes saying hello.',
      },
    ],
    faqs: [
      {
        question: 'Can I import my existing customer list?',
        answer:
          'Yes. Import customers via CSV with mapping for all standard fields including name, address, phone, email, and custom properties.',
      },
      {
        question: 'Does it track equipment at customer locations?',
        answer:
          'Yes. Create equipment records with make, model, serial number, install date, and warranty info. Link them to the property for easy access on every visit.',
      },
      {
        question: 'Can I segment customers for marketing?',
        answer:
          'Yes. Filter customers by location, service history, equipment type, agreement status, and more to target communications and campaigns.',
      },
    ],
  },
  {
    slug: 'customer-portal',
    name: 'Customer Portal',
    shortDescription: 'Self-service portal for job history, invoices, and service requests.',
    longDescription:
      'Give your customers the self-service experience they expect from modern businesses. The BeMyCrew customer portal lets your customers view their complete job history, download invoices, pay outstanding balances, request new service, and track upcoming appointments — all without calling your office.',
    icon: 'LayoutDashboard',
    category: 'customer',
    benefits: [
      {
        title: 'Reduce inbound phone calls',
        description:
          'Customers check job status, view invoices, and make payments on their own — freeing your CSRs to focus on new business.',
      },
      {
        title: 'Get paid faster',
        description:
          'Customers can view and pay invoices 24/7 through the portal. No waiting for office hours or check delivery.',
      },
      {
        title: 'Professional impression',
        description:
          'A branded customer portal shows your clients you run a modern, tech-forward operation — setting you apart from competitors still using paper.',
      },
    ],
    faqs: [
      {
        question: 'Can customers request service through the portal?',
        answer:
          'Yes. Customers can submit new service requests describing the issue, attach photos, and select preferred appointment windows — all from the portal.',
      },
      {
        question: 'Is the portal branded to my company?',
        answer:
          'Yes. The portal displays your company name, logo, and colors. Customers see your brand, not ours.',
      },
      {
        question: 'How do customers access the portal?',
        answer:
          'Customers receive a unique login link via email. No passwords to remember — they click the secure link and they are in.',
      },
    ],
  },
  {
    slug: 'booking-portal',
    name: 'Online Booking',
    shortDescription: 'Public online booking widget for your website.',
    longDescription:
      'Let customers book service directly from your website, 24 hours a day. The BeMyCrew booking portal embeds on your site and shows available appointment slots based on your real-time schedule. Customers select a service, pick a time, and the job appears on your dispatch board automatically — no phone call required.',
    icon: 'CalendarPlus',
    category: 'customer',
    benefits: [
      {
        title: 'Book jobs while you sleep',
        description:
          'Customers book online at any hour. Wake up to a full schedule without spending a minute on the phone.',
      },
      {
        title: 'Reduce no-shows',
        description:
          'Online bookings include automatic email and SMS confirmations and reminders, cutting no-show rates significantly.',
      },
      {
        title: 'Easy website integration',
        description:
          'Embed the booking widget on your website with a simple code snippet. No developer needed.',
      },
    ],
    faqs: [
      {
        question: 'Can I control which services are bookable?',
        answer:
          'Yes. Choose exactly which services appear on the booking portal, set duration estimates, and define available time slots.',
      },
      {
        question: 'Does it sync with my schedule in real time?',
        answer:
          'Yes. The booking portal reads your live dispatch schedule to only show slots where you have technician availability.',
      },
      {
        question: 'Can I require payment at booking?',
        answer:
          'Yes. Optionally collect a deposit or full payment at the time of booking via Stripe integration.',
      },
    ],
  },
  {
    slug: 'two-way-sms',
    name: 'Two-Way SMS',
    shortDescription: 'Real-time SMS conversations with customers.',
    longDescription:
      'Meet your customers where they are — on their phones. BeMyCrew two-way SMS lets your office and field team send and receive text messages with customers directly from the platform. Appointment confirmations, schedule updates, follow-ups, and quick questions all happen via text, with a full conversation history saved to the customer record.',
    icon: 'MessageSquare',
    category: 'customer',
    benefits: [
      {
        title: '98% open rate',
        description:
          'Text messages have a 98% open rate compared to 20% for email. Your customers will actually see your communications.',
      },
      {
        title: 'Faster response times',
        description:
          'Customers reply to texts in minutes, not hours. Resolve scheduling questions and job details faster than phone tag.',
      },
      {
        title: 'Complete conversation history',
        description:
          'Every SMS is logged to the customer record. Anyone on your team can pick up the conversation with full context.',
      },
    ],
    faqs: [
      {
        question: 'Can customers text back?',
        answer:
          'Yes. It is a real two-way conversation. Customer replies appear in the BeMyCrew inbox and are logged to their record automatically.',
      },
      {
        question: 'Can I send automated texts?',
        answer:
          'Yes. Set up automatic texts for appointment confirmations, reminders, on-my-way notifications, follow-ups, and review requests.',
      },
      {
        question: 'Is there a per-message cost?',
        answer:
          'SMS messaging is included in your plan. No per-message fees or hidden charges.',
      },
    ],
  },
  {
    slug: 'on-my-way-texts',
    name: 'On My Way Texts',
    shortDescription: 'Automatic "On My Way" texts with live tracking link.',
    longDescription:
      'Customers hate wondering when the technician will show up. BeMyCrew sends an automatic text when your tech is en route, including a live GPS tracking link so the customer can watch them approach in real time. It is the same experience customers expect from Uber and DoorDash — now for your field service business.',
    icon: 'Navigation',
    category: 'customer',
    benefits: [
      {
        title: 'Eliminate "Where is my tech?" calls',
        description:
          'Customers see exactly where their technician is and when they will arrive. No more anxious phone calls to your office.',
      },
      {
        title: 'Wow your customers',
        description:
          'Live GPS tracking is the experience customers get from Uber and Amazon. Now you offer the same thing — and your competitors do not.',
      },
      {
        title: 'Reduce missed appointments',
        description:
          'Customers know exactly when to be home, reducing the chance they step out and miss the technician.',
      },
    ],
    faqs: [
      {
        question: 'How does the tracking link work?',
        answer:
          'When the tech marks "On My Way," the customer receives a text with a link to a live map showing the technician\'s real-time location and estimated arrival time.',
      },
      {
        question: 'Is technician location tracked all day?',
        answer:
          'No. The tracking link is only active during the "On My Way" period for that specific job. Technician privacy is respected outside of active dispatch.',
      },
      {
        question: 'Can I customize the text message?',
        answer:
          'Yes. Customize the message template with your company name, technician name, and any other details you want customers to see.',
      },
    ],
  },
  {
    slug: 'online-payments',
    name: 'Online Payments',
    shortDescription: 'Stripe-powered on-site and online payment collection.',
    longDescription:
      'Get paid the same day the work is done. BeMyCrew integrates with Stripe to let you collect credit card payments on site, send payment links via text or email, and accept payments through the customer portal. No more chasing checks or waiting 30 days for receivables.',
    icon: 'CreditCard',
    category: 'customer',
    benefits: [
      {
        title: 'Same-day payment',
        description:
          'Collect payment on site with a tap or send a payment link via text. Most customers pay within hours, not weeks.',
      },
      {
        title: 'Multiple payment options',
        description:
          'Accept credit cards, debit cards, and ACH bank transfers. Customers pay the way they prefer.',
      },
      {
        title: 'Automatic payment recording',
        description:
          'Payments collected through Stripe are automatically recorded on the invoice. No manual reconciliation needed.',
      },
    ],
    faqs: [
      {
        question: 'What are the processing fees?',
        answer:
          'Standard Stripe processing rates apply (typically 2.9% + 30 cents per transaction). BeMyCrew does not add any additional markup.',
      },
      {
        question: 'Can I send payment links via text?',
        answer:
          'Yes. Generate a secure payment link from any invoice and send it via SMS or email. The customer taps the link and pays from their phone.',
      },
      {
        question: 'How fast do I receive funds?',
        answer:
          'Stripe deposits funds to your bank account on a rolling basis, typically within 2 business days.',
      },
    ],
  },
  {
    slug: 'service-agreements',
    name: 'Service Agreements',
    shortDescription: 'Recurring contracts and maintenance plans.',
    longDescription:
      'Predictable recurring revenue is the foundation of a profitable field service business. BeMyCrew service agreements let you create maintenance plans and recurring contracts with automated scheduling, billing, and renewals. Build a base of committed customers who pay monthly or annually for ongoing service.',
    icon: 'FileCheck',
    category: 'customer',
    benefits: [
      {
        title: 'Predictable recurring revenue',
        description:
          'Service agreements generate monthly or annual recurring revenue, smoothing out seasonal dips and making your business more valuable.',
      },
      {
        title: 'Automated scheduling and billing',
        description:
          'Maintenance visits are auto-scheduled and invoices are auto-generated based on the agreement terms. Set it and forget it.',
      },
      {
        title: 'Higher customer retention',
        description:
          'Customers on service agreements renew at much higher rates than one-time customers. Build long-term relationships that compound over time.',
      },
    ],
    faqs: [
      {
        question: 'Can I offer different agreement tiers?',
        answer:
          'Yes. Create multiple agreement types with different coverage levels, visit frequencies, pricing, and included services.',
      },
      {
        question: 'Are renewals automatic?',
        answer:
          'Yes. Set agreements to auto-renew at the end of the term. Customers receive a renewal notice and billing continues seamlessly.',
      },
      {
        question: 'Can I track agreement profitability?',
        answer:
          'Yes. BeMyCrew tracks revenue and costs per agreement so you can see exactly which plans are profitable and which need adjustment.',
      },
    ],
  },
  {
    slug: 'consumer-financing',
    name: 'Consumer Financing',
    shortDescription: '3, 6, and 12-month payment plans for customers.',
    longDescription:
      'Big-ticket jobs should not mean big objections. Offer your customers 3, 6, or 12-month payment plans right from the estimate so price never kills a sale. You get paid in full upfront while the customer pays over time. It is the same "buy now, pay later" experience that is driving sales across every industry.',
    icon: 'Wallet',
    category: 'customer',
    benefits: [
      {
        title: 'Close more big-ticket jobs',
        description:
          'When a $5,000 repair becomes $417/month, customers say yes instead of "let me think about it." Financing removes the price objection.',
      },
      {
        title: 'You get paid upfront',
        description:
          'The financing provider pays you the full invoice amount. You carry zero risk — the financing company handles collections.',
      },
      {
        title: 'Increase average ticket value',
        description:
          'Customers with a payment plan are more likely to choose the Better or Best option on your proposal, increasing revenue per job.',
      },
    ],
    faqs: [
      {
        question: 'How does the financing work?',
        answer:
          'The customer applies for financing through a quick online application. Once approved, they choose their payment term. You receive full payment immediately; the financing company collects from the customer over time.',
      },
      {
        question: 'Is there a cost to my business?',
        answer:
          'Merchant fees may apply depending on the financing terms offered. Many businesses build this into their pricing or offer financing as a premium option.',
      },
      {
        question: 'How fast is the approval process?',
        answer:
          'Most customers receive an instant decision within seconds. The application takes about two minutes to complete on their phone.',
      },
    ],
  },
  {
    slug: 'review-automation',
    name: 'Review Automation',
    shortDescription: 'Automated review requests via SMS and email.',
    longDescription:
      'Five-star reviews are the lifeblood of local service businesses, but asking for them is awkward and easy to forget. BeMyCrew automates the entire process — sending a review request via text and email at the perfect moment after a completed job. Customers tap a link and leave a review on Google, Yelp, or your platform of choice.',
    icon: 'Star',
    category: 'customer',
    benefits: [
      {
        title: 'More five-star reviews on autopilot',
        description:
          'Automated requests go out at the optimal time after every completed job. Businesses using review automation typically see a 3-5x increase in review volume.',
      },
      {
        title: 'Win more local search traffic',
        description:
          'More positive reviews improve your Google Business Profile ranking, putting you in front of more local customers searching for your services.',
      },
      {
        title: 'Catch negative experiences early',
        description:
          'The review flow can filter unhappy customers to an internal feedback form before they post publicly, giving you a chance to make it right.',
      },
    ],
    faqs: [
      {
        question: 'Which review platforms are supported?',
        answer:
          'Direct customers to Google, Yelp, Facebook, or any review platform with a public URL. You configure the destination link.',
      },
      {
        question: 'When are review requests sent?',
        answer:
          'Requests are triggered automatically when a job is marked complete. You can configure a delay (e.g., 2 hours or 1 day) to time it perfectly.',
      },
      {
        question: 'Can I filter out unhappy customers?',
        answer:
          'Yes. The review flow first asks the customer to rate their experience. High ratings are directed to your public review page; low ratings are routed to a private feedback form so you can address the issue directly.',
      },
    ],
  },

  // ─── AI FEATURES ───────────────────────────────────────────────────
  {
    slug: 'ai-dispatch',
    name: 'AI Dispatch',
    shortDescription: 'AI-powered dispatch with technician scoring and machine learning.',
    longDescription:
      'BeMyCrew AI Dispatch goes beyond simple scheduling. Our machine learning model scores every available technician for every job based on skill match, location, historical performance, customer relationship, and workload balance. The system learns from outcomes — when a tech nails a job, the model updates. Over time, your dispatch decisions get smarter automatically.',
    icon: 'Brain',
    category: 'ai',
    benefits: [
      {
        title: 'Optimal technician-job matching',
        description:
          'Machine learning considers dozens of factors humans cannot track — skill certifications, drive time, past performance on similar equipment, customer preferences, and real-time workload — to find the best match every time.',
      },
      {
        title: 'Gets smarter over time',
        description:
          'The model learns from every completed job. If a technician consistently excels at a specific repair type, the system weights them higher for those jobs automatically.',
      },
      {
        title: 'Reduce callbacks and rework',
        description:
          'By matching the right tech to the right job, first-time fix rates improve and costly return visits decrease.',
      },
      {
        title: 'Fair workload distribution',
        description:
          'AI balances job assignments across your team so no single technician is overloaded while others sit idle.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from regular scheduling?',
        answer:
          'Regular scheduling assigns the next available tech. AI Dispatch scores every available tech on multiple factors and recommends the optimal match — the tech most likely to complete the job successfully on the first visit.',
      },
      {
        question: 'What data does the AI use?',
        answer:
          'Technician skills, certifications, location, drive time, current workload, customer history, equipment experience, job complexity, and historical performance on similar jobs.',
      },
      {
        question: 'Can I override the AI recommendation?',
        answer:
          'Always. The AI provides a scored ranking of available technicians. Dispatchers can accept the top recommendation or choose any tech they prefer.',
      },
    ],
  },
  {
    slug: 'ai-chatbot',
    name: 'AI Chatbot',
    shortDescription: 'Claude-powered website chatbot that auto-books services.',
    longDescription:
      'Turn website visitors into booked jobs around the clock. The BeMyCrew AI Chatbot — powered by Claude — lives on your website and engages visitors in natural conversation. It answers service questions, provides pricing estimates, qualifies leads, and books appointments directly onto your schedule. It is like having a knowledgeable CSR available 24/7.',
    icon: 'Bot',
    category: 'ai',
    benefits: [
      {
        title: 'Convert website visitors 24/7',
        description:
          'Most website visitors leave without calling. The chatbot engages them instantly, answers questions, and books the job before they bounce to a competitor.',
      },
      {
        title: 'Reduce CSR workload',
        description:
          'The chatbot handles routine questions — pricing, availability, service area — so your team focuses on complex calls and high-value customers.',
      },
      {
        title: 'Trained on your business',
        description:
          'The chatbot knows your services, pricing, service area, and FAQs. It represents your company accurately, not with generic answers.',
      },
    ],
    faqs: [
      {
        question: 'Can the chatbot actually book appointments?',
        answer:
          'Yes. The chatbot reads your live schedule, shows available slots, and books directly onto your dispatch board. The customer receives a confirmation and it appears on your calendar instantly.',
      },
      {
        question: 'How does it know about my business?',
        answer:
          'You configure the chatbot with your services, pricing, service area, FAQs, and business policies. It uses this knowledge base to answer questions accurately.',
      },
      {
        question: 'What if the chatbot cannot answer a question?',
        answer:
          'If the chatbot encounters a question outside its knowledge base, it offers to connect the visitor with your team via phone or email, capturing their contact info so you can follow up.',
      },
    ],
  },
  {
    slug: 'voice-ai',
    name: 'Voice AI',
    shortDescription: 'Voice AI call handling for 24/7 phone coverage.',
    longDescription:
      'Never miss another call. BeMyCrew Voice AI answers your phones when your team cannot — after hours, during peak volume, or on weekends. The AI handles calls naturally, qualifying the caller, gathering job details, and booking appointments. Customers speak to what sounds like a helpful, professional receptionist — not a frustrating phone tree.',
    icon: 'Mic',
    category: 'ai',
    benefits: [
      {
        title: 'Never miss a call',
        description:
          'Every missed call is a lost customer. Voice AI answers immediately, 24/7/365 — no hold times, no voicemail, no lost revenue.',
      },
      {
        title: 'After-hours booking',
        description:
          'Customers who call at 8 PM get the same experience as those who call at 10 AM. Voice AI books the job and confirms the appointment.',
      },
      {
        title: 'Handle overflow volume',
        description:
          'Monday morning call rushes? Voice AI handles the overflow so callers do not get a busy signal or wait on hold.',
      },
    ],
    faqs: [
      {
        question: 'Does it sound like a real person?',
        answer:
          'Voice AI uses natural-sounding speech synthesis. Callers experience a professional, conversational interaction — not a robotic IVR menu.',
      },
      {
        question: 'Can it book appointments?',
        answer:
          'Yes. Voice AI accesses your live schedule, finds available slots, and books appointments. The caller receives an SMS confirmation and the job appears on your dispatch board.',
      },
      {
        question: 'What if the caller has an emergency?',
        answer:
          'Configure emergency routing rules to forward urgent calls to an on-call technician or manager immediately, with all details captured.',
      },
    ],
  },
  {
    slug: 'ai-inventory',
    name: 'AI Inventory',
    shortDescription: 'AI inventory identification via photo using Claude Vision.',
    longDescription:
      'Not sure what part you are looking at? Snap a photo and let AI tell you. BeMyCrew AI Inventory uses Claude Vision to identify parts, equipment, and components from a photo. Point your camera at a compressor, circuit breaker, or valve, and the AI returns the make, model, and compatible replacement parts — saving time and reducing ordering errors.',
    icon: 'ScanSearch',
    category: 'ai',
    benefits: [
      {
        title: 'Identify unknown parts instantly',
        description:
          'New tech on the job? No problem. Snap a photo and AI identifies the part, model number, and compatible replacements in seconds.',
      },
      {
        title: 'Reduce ordering errors',
        description:
          'AI-verified part identification means fewer wrong-part orders, fewer return trips, and fewer wasted hours.',
      },
      {
        title: 'Build institutional knowledge',
        description:
          'AI captures what your veteran techs know instinctively — part identification that would normally take years of experience.',
      },
    ],
    faqs: [
      {
        question: 'How accurate is the identification?',
        answer:
          'Claude Vision is highly accurate for common HVAC, plumbing, electrical, and mechanical parts. Accuracy improves as you add your specific inventory catalog for the AI to reference.',
      },
      {
        question: 'Does it work with my parts catalog?',
        answer:
          'Yes. Connect your pricebook and parts catalog so the AI can match identified parts to your exact inventory items and pricing.',
      },
      {
        question: 'Can it read model and serial numbers?',
        answer:
          'Yes. Point the camera at a nameplate or label and AI extracts the text, including model numbers, serial numbers, and specifications.',
      },
    ],
  },
  {
    slug: 'time-clock',
    name: 'Employee Time Clock',
    shortDescription: 'Track employee hours with GPS-verified clock-in/out, overtime alerts, and payroll-ready timesheets.',
    longDescription: 'BeMyCrew\'s built-in time clock lets your field team clock in and out from their phone with GPS verification. Track hours by job, by day, or by pay period. Automatic overtime calculations, break tracking, and one-click payroll exports mean no more manual timesheets or payroll surprises.',
    icon: 'Clock',
    category: 'office' as const,
    benefits: [
      { title: 'GPS-Verified Clock In/Out', description: 'Employees clock in from the job site with automatic GPS verification — no buddy punching, no guesswork.' },
      { title: 'Automatic Overtime Alerts', description: 'Set overtime thresholds and get notified before hours add up. Stay compliant with labor laws automatically.' },
      { title: 'Payroll-Ready Exports', description: 'Export timesheets to QuickBooks, ADP, or CSV in one click. No more manual data entry on payroll day.' },
      { title: 'Job-Level Time Tracking', description: 'See exactly how long each job takes. Track labor costs per job for more accurate estimates and better profitability.' },
    ],
    faqs: [
      { question: 'Can employees clock in from their phone?', answer: 'Yes. Technicians clock in and out directly from the BeMyCrew mobile app. GPS coordinates are captured automatically to verify they\'re at the job site.' },
      { question: 'Does the time clock track overtime?', answer: 'Yes. You set your overtime rules (daily, weekly, or both) and BeMyCrew automatically calculates overtime hours and alerts you before thresholds are hit.' },
      { question: 'Can I export timesheets for payroll?', answer: 'Absolutely. Export timesheets as CSV or sync directly with QuickBooks. Each export includes employee name, hours worked, overtime, and job assignments.' },
      { question: 'Does it track time per job?', answer: 'Yes. Time is tracked at both the employee level and the job level, so you can see total labor hours per job for accurate costing and future estimates.' },
    ],
  },
  {
    slug: 'gps-tracking',
    name: 'Live GPS Tracking',
    shortDescription: 'See your entire team on a live map. Know exactly where every technician is and their current job status.',
    longDescription: 'BeMyCrew gives you a real-time map view of your entire field team. See who\'s on a job, who\'s driving, and who\'s available — all from one dashboard. Geofenced job sites trigger automatic clock-ins, breadcrumb trails show where techs have been, and mileage tracking helps with reimbursement and fleet management.',
    icon: 'MapPinned',
    category: 'field' as const,
    benefits: [
      { title: 'Real-Time Technician Locations', description: 'See every technician on a live map with their current status — on a job, en route, or available for dispatch.' },
      { title: 'Geofenced Job Sites', description: 'Set up geofences around job sites for automatic clock-in/out and arrival notifications to customers.' },
      { title: 'Breadcrumb Trail History', description: 'Review where technicians have been throughout the day. Useful for route analysis, accountability, and dispute resolution.' },
      { title: 'Automatic Mileage Tracking', description: 'Track miles driven per technician and per job automatically. Export for reimbursement or tax deductions.' },
    ],
    faqs: [
      { question: 'How accurate is the GPS tracking?', answer: 'BeMyCrew uses your technician\'s phone GPS, which is typically accurate to within 10-30 feet. Location updates every 60 seconds while on the clock.' },
      { question: 'Can technicians see that they\'re being tracked?', answer: 'Yes, transparency is important. Technicians see a location indicator in the app when tracking is active. Tracking only occurs during work hours when clocked in.' },
      { question: 'Does GPS tracking work offline?', answer: 'Yes. Location data is cached when the phone is offline and synced automatically when connectivity is restored.' },
      { question: 'Can I set up geofences?', answer: 'Yes. Draw geofences around job sites, the office, or supply houses. When a technician enters or leaves a geofence, you can trigger automatic actions like clock-in or customer notifications.' },
    ],
  },
  {
    slug: 'inventory-management',
    name: 'Inventory & Parts Management',
    shortDescription: 'Track parts across trucks and warehouses. Set reorder points, manage stock levels, and never run out on a job.',
    longDescription: 'Keep track of every part, tool, and material across all your trucks and warehouses. BeMyCrew\'s inventory management gives you real-time stock levels, low-stock alerts, truck-level tracking, and automatic parts deduction when jobs are completed. Link parts directly to jobs and invoices for accurate costing.',
    icon: 'Package',
    category: 'office' as const,
    benefits: [
      { title: 'Truck-Level Inventory', description: 'Track what\'s on each truck so techs always know what parts they have before heading to a job. Transfer parts between trucks with a tap.' },
      { title: 'Low Stock Alerts', description: 'Set reorder points for every part. Get automatic alerts when stock drops below threshold so you never run out of critical parts.' },
      { title: 'Parts Catalog with Pricing', description: 'Build a searchable parts catalog with cost, markup, and retail pricing. Techs can add parts to jobs and invoices are calculated automatically.' },
      { title: 'Job-to-Inventory Linking', description: 'When a tech uses parts on a job, inventory is deducted automatically. See exact material costs per job for accurate profitability tracking.' },
    ],
    faqs: [
      { question: 'Can I track inventory per truck?', answer: 'Yes. Each truck is a separate inventory location. You can see what\'s on each truck, transfer parts between trucks, and track usage per technician.' },
      { question: 'Does it integrate with suppliers?', answer: 'You can import parts catalogs from major suppliers via CSV. Automatic reorder through supplier integration is on our roadmap.' },
      { question: 'How do parts get deducted from inventory?', answer: 'When a technician adds parts to a work order or invoice, the parts are automatically deducted from that truck\'s inventory. You can also do manual adjustments.' },
      { question: 'Can I set different prices for different customer types?', answer: 'Yes. The parts catalog supports cost price, standard markup, and custom pricing. You can set different rate tiers for residential vs commercial customers.' },
    ],
  },
  {
    slug: 'voip-phone',
    name: 'VoIP Phone System',
    shortDescription: 'Built-in VoIP phone system powered by Twilio.',
    longDescription:
      'Ditch your expensive phone provider. BeMyCrew includes a full VoIP phone system built on Twilio — the same platform used by Uber, Airbnb, and Lyft. Get local and toll-free numbers, call recording, automatic call logging to customer records, and seamless integration with every other BeMyCrew feature.',
    icon: 'Phone',
    category: 'customer',
    benefits: [
      {
        title: 'One platform for everything',
        description:
          'Phone calls, texts, dispatch, invoicing, and CRM all in one system. No switching between apps or reconciling data across platforms.',
      },
      {
        title: 'Automatic call logging',
        description:
          'Every call is automatically logged to the customer record with duration, recording, and notes. Complete communication history at your fingertips.',
      },
      {
        title: 'Professional phone presence',
        description:
          'Get local or toll-free numbers, custom greetings, call routing, and hold music — the phone presence of a large company at a fraction of the cost.',
      },
    ],
    faqs: [
      {
        question: 'Can I keep my existing phone number?',
        answer:
          'Yes. Port your existing business number to BeMyCrew VoIP at no additional charge. The process typically takes 1-2 weeks.',
      },
      {
        question: 'Are calls recorded?',
        answer:
          'Call recording is available and optional. Recorded calls are stored securely and linked to the customer record for training and quality assurance.',
      },
      {
        question: 'What does VoIP cost?',
        answer:
          'The VoIP phone system is included in your BeMyCrew subscription. Standard per-minute calling rates from Twilio apply for usage.',
      },
    ],
  },
];

export const featuresByCategory: Record<FeatureCategory, Feature[]> = {
  office: features.filter((f) => f.category === 'office'),
  field: features.filter((f) => f.category === 'field'),
  customer: features.filter((f) => f.category === 'customer'),
  ai: features.filter((f) => f.category === 'ai'),
};

export const categoryLabels: Record<FeatureCategory, string> = {
  office: 'Office & Operations',
  field: 'Field & Mobile',
  customer: 'Customer Experience',
  ai: 'AI-Powered',
};

export const categoryDescriptions: Record<FeatureCategory, string> = {
  office:
    'Streamline back-office operations with intelligent scheduling, work order management, reporting, and multi-location control.',
  field:
    'Equip your technicians with powerful mobile tools that work anywhere — even offline.',
  customer:
    'Deliver a modern customer experience that wins jobs, collects payments, and earns five-star reviews.',
  ai:
    'Four AI capabilities no competitor can match — dispatch, chatbot, voice, and inventory intelligence.',
};

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
