export const projects = [
  {
    name: 'Muha Members Warehouse Fulfillment',
    category: 'Warehouse + member operations',
    role: 'Lead Mobile / Fullstack Software Developer',
    image: '/images/work_muha_warehouse.png',
    secondaryImage: '/images/work_dialed_icon.jpg',
    imageType: 'screenshot',
    tone: 'muha',
    description: 'A fulfillment and member-operations system for turning rewards, store orders, inventory, shipping labels, returns, and support follow-up into one trackable workflow.',
    impact: 'Built around real warehouse pressure: pending orders, grouped shipments, inventory exceptions, return labels, reships, support messages, and management dashboards.',
    highlights: [
      'Built warehouse queues for pending fulfillment, pending shipment, shipped orders, reships, return labels, and inventory',
      'Added grouped order flows so multiple rewards going to the same recipient can be handled as one shipment',
      'Integrated EasyPost label buying, tracking events, address verification, packing slips, and shipment status updates',
      'Expanded rewards into a product and variant inventory system with SKUs, stock levels, low-stock attention states, and audit history',
      'Supported operator workflows for bulk messaging, stuck orders, missing tracking, return-to-sender recovery, and shipment reporting'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'EasyPost', 'AWS', 'OpenAI API'],
    actions: [
      {
        href: 'https://apps.apple.com/us/app/muha-members/id6743873537',
        label: 'Muha App Store'
      },
      {
        href: 'https://apps.apple.com/us/app/dialed-health-app/id6759681236',
        label: 'Dialed App Store'
      }
    ],
    caseStudy: {
      featured: true,
      eyebrow: 'Warehouse fulfillment',
      headline: 'Turning reward claims into a real warehouse operating system.',
      lead: 'Muha Members needed more than a rewards app. The work had to keep up with real fulfillment: inventory, labels, exceptions, returns, and customer follow-up.',
      problem: 'As rewards and store orders grew, the hard part became operational. Warehouse staff needed to know what was ready, what was stuck, what could be combined, which products were low, and which customers needed follow-up.',
      productStory: 'I built the warehouse surface around the way operators actually move: overview, pending fulfillment, pending shipment, shipped, reship queue, return labels, and inventory. The system groups orders by recipient, buys labels, records tracking, handles exceptions, and keeps product stock tied to the claims people are making.',
      agentWorkflow: 'I use agents as a product and ops layer around this kind of system: tracing fulfillment edge cases, tightening API contracts, generating migration and QA checklists, reviewing label-buying flows, and helping turn warehouse feedback into shippable improvements without losing the thread.',
      operationalPayoff: 'Operators get one place to see what needs attention, managers get healthier fulfillment signals, and the product can keep growing without every exception becoming a manual spreadsheet chase.',
      proofPoints: [
        'Grouped pending orders by address or user so one label can cover multiple eligible rewards',
        'EasyPost-backed label buying, address verification, tracking sync, packing slips, and return-label flows',
        'Inventory panel for products, variants, SKU stock, low-stock attention states, and affected customers',
        'Warehouse overview with on-time delivery, stuck orders, missing tracking, return-to-sender, and failed-shipment signals'
      ],
      metrics: [
        { value: '7', label: 'warehouse queues' },
        { value: 'EasyPost', label: 'shipping engine' },
        { value: 'SKU', label: 'variant inventory' }
      ],
      workflowSteps: ['Claim', 'Group', 'Label', 'Track', 'Recover'],
      visual: 'screenshot'
    }
  },
  {
    name: 'Vantaview',
    category: 'Real-time video SaaS',
    role: 'Fullstack Software Engineer',
    link: 'https://www.vantaview.live',
    linkLabel: 'Website',
    image: '/images/work_vantaview.png',
    imageType: 'screenshot',
    tone: 'vantaview',
    description: 'A Mac-native live production product combining real-time video engineering, subscription infrastructure, release readiness, funnel monitoring, and AI-assisted product operations.',
    impact: 'Built low-latency rendering pipelines optimized for macOS and supported the path from polished app to first monitored customer trials.',
    highlights: [
      'Architected real-time video rendering pipelines using Swift, Metal, and AVFoundation',
      'Built AI Engineer features for audio analysis, shot scoring, subject tracking, PTZ direction, and automated production assistance',
      'Improved performance for preview/program playback with GPU-first rendering, triple-buffering, and shared frame pacing',
      'Integrated Supabase-backed authentication, licensing, app activation, funnel telemetry, and subscription readiness',
      'Built release and operations workflows around notarized downloads, update checks, trial monitoring, and first-user activation'
    ],
    technologies: ['Swift', 'Metal', 'AVFoundation', 'React', 'Supabase', 'Stripe'],
    caseStudy: {
      featured: true,
      eyebrow: 'Live-production SaaS',
      headline: 'Shipping a serious video product with agents in the build room.',
      lead: 'Vantaview is a Mac-native live-production app with real-time video, customer onboarding, licensing, updates, and revenue operations moving together.',
      problem: 'The product has a lot of moving pieces: cameras, rendering, streaming, trials, activation, app updates, and the first-customer funnel. A change in one area can break trust somewhere else.',
      productStory: 'I worked across the native app, web onboarding, licensing, update paths, telemetry, and first-user readiness. The goal was not just to make the app look good, but to make the product measurable and shippable.',
      agentWorkflow: 'Agents help me run this like a control room: profiling performance work, checking release gates, tracing signup-to-activation paths, drafting test scorecards, and turning messy product risks into tight next actions.',
      operationalPayoff: 'The result is a product workflow that can move from code to notarized build to monitored trial without guessing where the funnel is breaking.',
      proofPoints: [
        'Swift, Metal, and AVFoundation rendering work for low-latency preview/program workflows',
        'AI Engineer subsystem for production assistance across audio, shot scoring, subject tracking, and PTZ decisions',
        'License activation, app telemetry, update checks, and revenue-readiness monitoring around the customer journey',
        'Performance roadmap and profiling work for multi-source video, streaming, effects, and virtual production scenes'
      ],
      metrics: [
        { value: '60fps', label: 'rendering target' },
        { value: 'Notarized', label: 'Mac release path' },
        { value: 'AI', label: 'production assistant' }
      ],
      workflowSteps: ['Build', 'Profile', 'Ship', 'Watch', 'Improve'],
      visual: 'screenshot'
    }
  },
  {
    name: 'LavPass',
    category: 'Location-based SaaS',
    role: 'Fullstack Developer',
    link: 'https://lavpass.com',
    linkLabel: 'Website',
    appStore: 'https://lavpass.app',
    image: '/images/work6_lavpass_blue.png',
    imageType: 'screenshot',
    tone: 'lavpass',
    description: 'A location-based SaaS platform enabling users to share and verify public restroom access codes in real time.',
    impact: 'Resume notes thousands of active users supported by authentication, validation, analytics tracking, and real-time data workflows.',
    highlights: [
      'Engineered React, TypeScript, Node.js, and Supabase architecture for location-based user-generated content',
      'Built scalable, reusable React components with optimized state management across multiple views',
      'Integrated RESTful API endpoints and real-time subscriptions for live data accuracy',
      'Implemented authentication, data validation, and analytics tracking',
      'Collaborated with UI/UX designers in Figma to translate wireframes into responsive product interfaces'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Figma']
  },
  {
    name: 'City of Los Angeles / Pershing Square',
    category: 'Public sector web rebuild',
    role: 'Software Engineer',
    link: 'https://pershing-square.vercel.app',
    linkLabel: 'Website',
    image: '/images/work2_laparks.png',
    imageType: 'screenshot',
    tone: 'pershing',
    description: 'A rebuild and maintenance project for the Pershing Square website within the City of Los Angeles Department of Recreation & Parks.',
    impact: 'Resume notes a 20% boost in traffic and event ticket sales.',
    highlights: [
      'Re-designed and maintained the Pershing Square website',
      'Built CMS infrastructure enabling non-technical staff to update website content independently',
      'Implemented Firebase and Supabase integrations for reliable real-time data updates'
    ],
    technologies: ['React', 'MongoDB', 'Supabase', 'Firebase', 'Node.js']
  },
  {
    name: 'Blackcrab',
    category: 'Claude Code desktop GUI',
    link: 'https://blackcrab-landing.vercel.app',
    linkLabel: 'Website',
    github: 'https://github.com/BonJenn/blackcrab',
    image: '/images/work_blackcrab.png',
    imageType: 'screenshot',
    tone: 'blackcrab',
    description: 'A local desktop control surface for Claude Code sessions with searchable transcripts, parallel panels, usage tracking, terminal access, previews, and release tooling.',
    highlights: [
      'Wraps the local Claude Code CLI in a Tauri desktop app',
      'Indexes saved sessions, tool calls, diffs, token usage, and project history',
      'Supports multi-panel agent work, command palette flows, terminal workflows, local previews, and local-first privacy',
      'Includes usage dashboards, backup and restore, diagnostics, release packaging, and update-aware product operations'
    ],
    technologies: ['Claude Code', 'Tauri', 'React', 'Rust', 'Vite'],
    caseStudy: {
      featured: true,
      eyebrow: 'Agent command center',
      headline: 'A local cockpit for running serious agent work.',
      lead: 'Blackcrab is the most direct proof point: a desktop product built to make agent sessions easier to resume, search, compare, and operate.',
      problem: 'Claude Code is powerful, but real work quickly spreads across sessions, projects, terminals, previews, diffs, and usage limits. Without a control surface, it is easy to lose context or duplicate work.',
      productStory: 'I built Blackcrab as a local-first desktop app that wraps the Claude Code CLI, indexes saved sessions, runs multiple live panels, shows transcripts and tool calls clearly, and keeps terminal and preview workflows close to the conversation.',
      agentWorkflow: 'Blackcrab is both a product and part of my workflow. It lets me manage parallel agents, resume the right context, inspect what happened, watch token spend, and keep powerful local tools under a clearer interface.',
      operationalPayoff: 'It turns agent work from a pile of terminal windows into a productized workflow: searchable, reviewable, backup-friendly, and safer to use on real client projects.',
      proofPoints: [
        'Local Tauri/Rust app that starts Claude subprocesses and enforces one writer per session file',
        'Global search across local Claude sessions by project, title, model, date, and transcript text',
        'Grid mode for up to six live panels, plus command palette, terminal, preview webview, diagnostics, and usage dashboards',
        'Local-first privacy model with no hosted backend or credential proxying'
      ],
      metrics: [
        { value: '6', label: 'live panels' },
        { value: 'Local', label: 'privacy model' },
        { value: 'Tauri', label: 'desktop shell' }
      ],
      workflowSteps: ['Find', 'Resume', 'Run', 'Inspect', 'Ship'],
      visual: 'screenshot'
    }
  },
  {
    name: 'Presearch Privacy Browser',
    category: 'iOS privacy browser',
    role: 'iOS Developer',
    link: 'https://apps.apple.com/us/app/presearch-privacy-browser/id1565192485',
    appStore: 'https://apps.apple.com/us/app/presearch-privacy-browser/id1565192485',
    image: '/images/work_presearch_icon.jpg',
    imageType: 'icon',
    tone: 'presearch',
    description: 'A privacy-first iPhone browser for the Presearch ecosystem, focused on fast search, mobile browsing, and a clean onboarding path for everyday users.',
    highlights: [
      'Shipped iOS browser experience for a privacy search product',
      'Built around mobile search, browser usability, and App Store release polish',
      'Built with native mobile patterns for search, browsing, and privacy-oriented UX'
    ],
    technologies: ['Swift', 'iOS', 'WebKit', 'Privacy UX', 'App Store']
  },
  {
    name: 'Psalion',
    category: 'Web3 investment website',
    link: 'https://psalion.vercel.app',
    linkLabel: 'Website',
    image: '/images/work7_psalion.png',
    imageType: 'screenshot',
    tone: 'psalion',
    description: 'A polished website for a crypto-focused venture capital firm, presenting investment strategy, web3 positioning, and institutional-grade credibility.',
    highlights: [
      'Designed a clean landing experience for private clients, family offices, and professional investors',
      'Balanced crypto-native language with a refined financial services presentation',
      'Built as a responsive Next.js site with fast-loading project and firm content'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web3']
  },
  {
    name: 'Bitcoin Brainiac',
    category: 'AI newsletter pipeline',
    link: 'https://bitcoinbrainiac.net',
    linkLabel: 'Website',
    github: 'https://github.com/BonJenn/bitcoinbrainiac_v2',
    image: '/images/work5_bitcoinbrainiac.png',
    imageType: 'screenshot',
    tone: 'bitcoin',
    description: 'A daily Bitcoin newsletter system that gathers news and market data, summarizes it, and sends digestible updates to subscribers.',
    highlights: [
      'Automates source gathering, summarization, and newsletter delivery',
      'Combines crypto data APIs with LLM-generated editorial output',
      'Built as an end-to-end full-stack content pipeline'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API']
  }
];

export const agenticCaseStudies = projects.filter((project) => project.caseStudy?.featured);
export const selectedWorkProjects = projects.filter((project) => !project.caseStudy?.featured);
