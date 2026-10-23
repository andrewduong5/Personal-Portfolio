export const profile = {
  name: "Andrew Duong",
  eyebrow: "UCR BIS GRAD // AWS & COMPTIA A+",
  role: "IT Systems Administrator & Automation Engineer",
  focus: [
    "IT Systems Administration",
    "Active Directory Infrastructure",
    "Cloud",
    "Automation",
  ],
  tagline: "Cloud Security & Analysis Focus",
  location: "Ventura County, CA",
  email: "andrew.duong85@gmail.com",
  phone: "+1 (805) 630-9552",
  phoneHref: "tel:+18056309552",
  github: "https://github.com/andrewduong5",
  linkedin: "https://www.linkedin.com/in/andrew-duong85",
  credly: "https://www.credly.com/users/andrew-duong.ab4bfa97/badges/credly",
  headshot: "https://media.base44.com/images/public/6ad8e65d52108e5d2a0f0115/c45a3df99_andrew-headshot.jpg",
  status: "[ONLINE] Open to Enterprise IT, Systems Support & Cloud Infrastructure Roles",
  availability:
    "Available for full-time roles in cloud, cybersecurity, AI, IT/Helpdesk, Security Analyst, or digital strategy.",
  bio: "Information Systems graduate from UC Riverside. Certified AWS Cloud Practitioner and CompTIA A+ professional expanding into cloud security and security analysis through hands-on labs and continuous learning.",
  about: [
    "Information Systems graduate from UC Riverside with a foundation in cloud infrastructure, information security, and risk analysis. Proven ability to evaluate complex systems, identify operational vulnerabilities, and translate data insights into secure, scalable solutions.",
    "Backed by practical experience in AI evaluation and data analysis. AWS Cloud Practitioner and CompTIA A+ certified, with active CompTIA credentialing in progress.",
  ],
};

export const credentials = [
  { k: "School", v: "UC Riverside" },
  { k: "Degree", v: "B.S. Info Systems" },
  { k: "GPA", v: "3.5 / 4.0" },
  { k: "Graduated", v: "June 2026" },
  { k: "Languages", v: "EN / VI / ES" },
  { k: "Region", v: "Ventura, CA" },
];

export const abilities = [
  {
    title: "Cloud Infrastructure",
    meta: "ABILITY",
    body: "Deploys resilient, scalable systems with zero-downtime tolerance across AWS, virtualization & Docker containers.",
  },
  {
    title: "Data Analysis",
    meta: "ABILITY",
    body: "Translates complex telemetry into actionable, risk-aware decisions and performance reporting.",
  },
];

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Homelab", href: "#homelab" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const homelab = {
  title: "Windows Server 2022 Active Directory & Segmentation Lab",
  summary:
    "Virtualized enterprise IT lab for hands-on exploration of infrastructure, networking, and system administration.",
  stack: ["Proxmox VE", "Windows Server 2022", "Active Directory", "PowerShell", "VirtualBox", "Tailscale"],
  domain: "corp.homelab.local",
  nodes: [
    { id: "hv", label: "Hypervisor", value: "Proxmox VE", detail: "Virtualized compute layer" },
    { id: "dc", label: "DC01", value: "AD DS · DNS · DHCP", detail: "corp.homelab.local", accent: true },
    { id: "admin", label: "Admin Workstation", value: "RSAT · PowerShell", detail: "Remote administration" },
    { id: "seg", label: "Segmentation", value: "Isolated VLANs", detail: "Trust boundaries enforced" },
  ],
  groups: [
    {
      id: "domain",
      title: "Domain Architecture",
      summary: "Forest design, OU hierarchy, and policy-driven provisioning.",
      specs: [
        { k: "Forest / Domain", v: "corp.homelab.local" },
        { k: "OU design", v: "Department-aligned OUs for users, groups & computers" },
        { k: "Group Policy", v: "Baseline GPOs for security, desktop & drive mapping" },
        { k: "Provisioning", v: "Bulk user creation via PowerShell + CSV import" },
      ],
    },
    {
      id: "services",
      title: "Core Services",
      summary: "Addressing, name resolution, and deterministic allocation.",
      specs: [
        { k: "DHCP", v: "Scoped address pools per network segment" },
        { k: "DNS", v: "Forward + reverse lookup zones for the lab domain" },
        { k: "Allocations", v: "Static reservations for servers & infrastructure" },
        { k: "Time / Auth", v: "Domain-joined clients, centralized authentication" },
      ],
    },
    {
      id: "security",
      title: "Security & Administration",
      summary: "Access control, lockout policy, and isolated network paths.",
      specs: [
        { k: "Remote admin", v: "RSAT, PowerShell remoting, Tailscale access" },
        { k: "Segmentation", v: "Separated segments for servers, clients & lab testing" },
        { k: "Account policy", v: "Lockout thresholds, password policy & least privilege" },
        { k: "Validation", v: "Kali Linux used for internal testing & hardening checks" },
      ],
    },
  ],
};

export const projects = [
  {
    id: "homelab",
    title: "Enterprise IT & Cyber Home Lab",
    category: "Infrastructure",
    year: "2026",
    description:
      "Virtualized enterprise IT lab for hands-on exploration of infrastructure, networking, and system administration.",
    notes: [
      "Windows Server 2022 domain controller serving AD DS, DNS and DHCP for corp.homelab.local.",
      "Bulk user provisioning through PowerShell and structured OU design.",
      "Segmented network paths with centralized remote administration.",
    ],
    tech: ["Proxmox VE", "Windows Server 2022", "Active Directory", "Linux", "Docker", "Kali Linux"],
    links: [
      { label: "Architecture", href: "#homelab" },
      { label: "GitHub", href: "https://github.com/andrewduong5" },
    ],
    featured: true,
  },
  {
    id: "fridgepal",
    title: "FridgePal",
    category: "Mobile App",
    year: "2025",
    description:
      "Food waste and budgeting app for college students — tracks inventory, alerts on expiration, and plans meals.",
    notes: [
      "Receipt scanning captures grocery purchases into a structured pantry inventory.",
      "Recipe generation suggests meals from what is already on hand to cut waste.",
      "Pantry tracking with expiration alerts and budget-aware planning.",
    ],
    tech: ["Python", "C++", "JavaScript", "SQL", "AWS"],
    links: [{ label: "GitHub", href: "https://github.com/andrewduong5" }],
    featured: true,
  },
  {
    id: "routing",
    title: "Lead Routing Automation",
    category: "Automation",
    year: "2025 · Blight Dental Client Portfolio",
    description:
      "Production lead capture, sanitization, and routing pipeline supporting a multi-client portfolio — ingesting real-time webhook payloads, qualifying inbound leads against custom business logic, assigning account ownership, and maintaining an auditable transaction log.",
    notes: [
      { title: "Intake & Normalization", text: "Ingests raw webhook payloads from paid Meta Ads (Facebook/Instagram Lead Ads) and normalizes contact schemas." },
      { title: "Rule-Based Qualification", text: "Filters and routes patient leads dynamically based on location, treatment category, and dental office availability." },
      { title: "Auditing & Notification Layer", text: "Triggers instant multi-channel staff notifications and logs every touchpoint to a synced audit tracker (Google Sheets / Excel) to prevent lead leakage." },
      { title: "Quantified Business Impact", text: "Supported the attribution and tracking of 2,500+ qualified leads across $150K+ in ad spend, helping scale client portfolio revenue from $100K to $250K (+150%)." },
    ],
    tech: ["Python", "Meta Ads", "REST APIs", "Google Sheets / Excel", "Email Automation"],
    links: [],
    proprietary: "Client Production System",
    workflow: [
      "Meta Ad Lead Form",
      "Webhook Receiver",
      "Data Sanitization & Schema Validation",
      "Routing Rules Engine",
      "Client CRM / Google Sheets & Excel Audit Sync / Notification Dispatch",
    ],
    featured: false,
  },
];

export const experience = [
  {
    title: "Handshake AI",
    role: "AI Trainer",
    period: "Apr 2026 — Present",
    location: "Remote (Contract)",
    tags: ["Technical QA", "Documentation", "SLA Delivery"],
    points: [
      "Audited and resolved 500+ complex technical logic, reasoning, and instruction-following failures in model outputs, owning quality reviews and escalating systemic model hallucinations to engineering teams.",
      "Authored comprehensive technical documentation and rationale notes detailing the root causes of syntax bugs and edge-case errors, producing verified ground-truth standards for model alignment.",
      "Maintained a >95% quality audit rating across strict production turnaround SLAs by strictly applying standardized evaluation rubrics and technical safety guidelines.",
    ],
  },
  {
    title: "Biight Dental | Digital Advertising Agency",
    role: "Account Manager",
    period: "Dec 2024 — Sep 2026",
    location: "Las Vegas, NV (Remote)",
    tags: ["Client Reporting", "Campaign Data", "Budget Allocation"],
    points: [
      "Managed day-to-day communication for a 3-client portfolio, answering questions, handling requests, and delivering regular performance reports.",
      "Grew the agency's book of business from $100K to $250K in annual revenue (150%) through strong client relationships and campaign results.",
      "Generated 2,500+ qualified leads across $150,000+ in ad spend by reviewing campaign data and adjusting budget allocation.",
      "Balanced multiple clients' deadlines and priorities while meeting agency turnaround expectations.",
    ],
  },
];

export const education = {
  school: "University of California, Riverside",
  location: "Riverside, CA",
  degree: "B.S. Business Administration, Information Systems",
  period: "Sept. 2022 — June 2026",
  gpa: "3.5 / 4.0",
  coursework: [
    "Information Technology Management (BUS101)",
    "Introduction to Databases for Management (BUS173)",
    "Business Data Communications (BUS174)",
  ],
};

export const metrics = [
  {
    id: "audits",
    value: 500,
    suffix: "+",
    label: "Technical failures audited & resolved",
    detail: "Logic, reasoning and instruction-following defects — Handshake AI",
  },
  {
    id: "quality",
    value: 95,
    prefix: ">",
    suffix: "%",
    label: "Quality audit rating under SLAs",
    detail: "Held across strict production turnaround deadlines",
  },
  {
    id: "growth",
    value: 150,
    suffix: "%",
    label: "Revenue growth managed",
    detail: "$100K → $250K annual book of business — Biight Dental",
  },
  {
    id: "leads",
    value: 2500,
    suffix: "+",
    label: "Qualified leads generated",
    detail: "Across $150,000+ in ad spend",
  },
];

export const skills = {
  "Directory Services & Networking": [
    { name: "Active Directory", level: 85, desc: "AD DS administration" },
    { name: "Users & OUs", level: 85, desc: "Provisioning and OU design" },
    { name: "Group Policy", level: 75, desc: "GPO baselines" },
    { name: "DNS", level: 80, desc: "Zones and records" },
    { name: "DHCP", level: 80, desc: "Scopes and reservations" },
    { name: "TCP/IP", level: 75, desc: "Addressing and troubleshooting" },
    { name: "VPNs", level: 65, desc: "Secure remote access" },
    { name: "Subnetting", level: 70, desc: "Network segmentation" },
    { name: "SSH/RDP", level: 80, desc: "Remote administration" },
  ],
  "Virtualization & Infrastructure": [
    { name: "Proxmox VE", level: 80, desc: "Self-hosted virtualization" },
    { name: "VirtualBox", level: 85, desc: "Isolated lab VMs" },
    { name: "Docker", level: 70, desc: "Containerized services" },
    { name: "AWS EC2", level: 65, desc: "Cloud compute" },
    { name: "AWS S3", level: 65, desc: "Object storage" },
    { name: "AWS IAM", level: 65, desc: "Cloud access control" },
  ],
  "Operating Systems & Hardware": [
    { name: "Windows 10/11", level: 90, desc: "Desktop support" },
    { name: "Windows Server", level: 80, desc: "Server administration" },
    { name: "Linux", level: 75, desc: "Ubuntu / Debian" },
    { name: "MacOS", level: 70, desc: "Desktop support" },
    { name: "HW Diagnostics", level: 85, desc: "PC hardware diagnostics" },
    { name: "Peripherals", level: 80, desc: "Peripheral configuration" },
  ],
  "Scripting & Enterprise Tools": [
    { name: "PowerShell", level: 80, desc: "Windows automation" },
    { name: "Bash", level: 70, desc: "Linux scripting" },
    { name: "Python", level: 75, desc: "Scripting and automation" },
    { name: "SQL", level: 70, desc: "Relational queries" },
    { name: "M365 Admin", level: 75, desc: "Microsoft 365 Admin Center" },
    { name: "Google Workspace", level: 75, desc: "Workspace administration" },
    { name: "Git/GitHub", level: 75, desc: "Version control" },
  ],
  "Spoken Languages": [
    { name: "English", level: 100, desc: "Native" },
    { name: "Vietnamese", level: 100, desc: "Native" },
    { name: "Spanish", level: 60, desc: "Working proficiency" },
  ],
};

export const certifications = [
  {
    name: "CompTIA A+ (Core 1 & Core 2)",
    status: "Active (September 2026)",
    desc: "Hardware, OS, security and troubleshooting",
    href: "https://www.credly.com/badges/6148f519-e58e-40e8-85dc-20879b17c0dc",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    status: "Active (April 2025)",
    desc: "Cloud infrastructure and core architecture",
    href: "https://www.credly.com/badges/02d7abf7-5689-4b23-b2a0-8ba9ffba52bd",
  },
];