export const topologyNodes = [
  {
    id: "hypervisor",
    icon: "Cpu",
    label: "Hypervisor Core",
    sub: "Proxmox VE / VirtualBox",
    x: 50,
    y: 12,
    summary:
      "Virtualized host environment used to explore enterprise IT infrastructure, networking and system administration while safely testing endpoint deployments.",
    configs: [
      { k: "Platforms", v: "Proxmox VE, VirtualBox" },
      { k: "Purpose", v: "Safe endpoint deployment and OS testing" },
      { k: "Workloads", v: "Windows Server, Linux and client VMs" },
    ],
    network: ["Host-only and bridged virtual switches", "VMs attached per segment"],
    snippet: "qm list   # enumerate VMs on the Proxmox host",
  },
  {
    id: "identity",
    icon: "KeyRound",
    label: "Identity & Directory",
    sub: "Windows Server AD DS",
    x: 50,
    y: 48,
    summary:
      "Windows Server running Active Directory Domain Services to enforce identity and access management and secure user onboarding.",
    configs: [
      { k: "Domain", v: "corp.homelab.local" },
      { k: "Provisioning", v: "User accounts and security groups" },
      { k: "Policy", v: "Password policies and Group Policy" },
      { k: "Structure", v: "Organizational Units (OUs)" },
    ],
    network: ["DC01 is the authoritative DNS server for the domain", "Clients domain-joined for central authentication"],
    snippet:
      'New-ADUser -Name "jdoe" -Path "OU=Staff,DC=corp,DC=homelab,DC=local" -Enabled $true',
  },
  {
    id: "network",
    icon: "Network",
    label: "Core Network Services",
    sub: "DNS · DHCP · Static IPs",
    x: 15,
    y: 48,
    summary:
      "Core network services configured to guarantee stable device connectivity and prevent address conflicts.",
    configs: [
      { k: "DNS", v: "Forward and reverse lookup zones" },
      { k: "DHCP", v: "Scoped address pools per segment" },
      { k: "Static IPs", v: "Reserved assignments for infrastructure" },
    ],
    network: ["Scopes sized per segment", "Reservations avoid address conflicts"],
    snippet: "Get-DhcpServerv4Scope | Format-Table Name, StartRange, EndRange",
  },
  {
    id: "security",
    icon: "ShieldCheck",
    label: "Security & Segmentation",
    sub: "Isolated VMs · RDP/SSH",
    x: 85,
    y: 48,
    summary:
      "Secure remote administration with segmented virtual networks and isolated testing VMs, used to practice secure remote support and isolate technical issues.",
    configs: [
      { k: "Remote admin", v: "RDP and SSH" },
      { k: "Segmentation", v: "Separated virtual networks" },
      { k: "Isolation", v: "Dedicated test VMs for risky changes" },
    ],
    network: ["Server, client and test segments", "Remote sessions only through approved paths"],
    snippet: "Enter-PSSession -ComputerName DC01   # or: ssh admin@lab-host",
  },
  {
    id: "containers",
    icon: "Container",
    label: "Container Infrastructure",
    sub: "Docker · Bridges · Uptime",
    x: 50,
    y: 86,
    summary:
      "Containerized self-hosted tools and services deployed and monitored with Docker to optimize resource utilization and maximize uptime.",
    configs: [
      { k: "Runtime", v: "Docker" },
      { k: "Networking", v: "Managed network bridges" },
      { k: "Access", v: "Permissions scoped per service" },
      { k: "Monitoring", v: "Service availability and uptime" },
    ],
    network: ["User-defined bridge networks", "Published ports limited to required services"],
    snippet: 'docker ps --format "table {{.Names}}\\t{{.Status}}"',
  },
];

export const topologyEdges = [
  ["hypervisor", "identity"],
  ["hypervisor", "network"],
  ["hypervisor", "security"],
  ["identity", "network"],
  ["identity", "security"],
  ["identity", "containers"],
];