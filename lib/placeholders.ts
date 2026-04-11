import type {
  CreatorSummary,
  DashboardNavItem,
  NavItem,
  StatItem,
  StudioSummary,
  VideoSummary,
} from "@/lib/types";

export const siteNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse" },
  { href: "/creators", label: "Creators" },
];

export const stats: StatItem[] = [
  {
    label: "Creator profiles",
    value: "24",
    description: "Placeholder count for profile pages, discovery rows, and creator tooling.",
  },
  {
    label: "Studio releases",
    value: "12",
    description: "Starter volume for featured drops, landing pages, and promo cards.",
  },
  {
    label: "Royalty surface",
    value: "3 dashboards",
    description: "Creator, studio, and admin routes are now scaffolded and navigable.",
  },
];

export const creators: CreatorSummary[] = [
  {
    slug: "luna-vale",
    name: "Luna Vale",
    tagline: "Atmospheric performances, premium editorial energy.",
    specialty: "Creator page baseline with credits, featured content, and royalty hooks.",
    royaltyRate: 18,
    monthlyAudience: "$2,450 projected",
    verified: true,
  },
  {
    slug: "nico-voss",
    name: "Nico Voss",
    tagline: "Studio-forward collaborations built for repeat releases.",
    specialty: "Supports future collab rows, performer tags, and studio relationships.",
    royaltyRate: 15,
    monthlyAudience: "$1,980 projected",
    verified: true,
  },
  {
    slug: "rhea-onyx",
    name: "Rhea Onyx",
    tagline: "Premium creator identity with room for future subscription modules.",
    specialty: "Good placeholder for expanding performer bios and content libraries.",
    royaltyRate: 20,
    monthlyAudience: "$3,120 projected",
    verified: false,
  },
];

export const studios: StudioSummary[] = [
  {
    slug: "midnight-room",
    name: "Midnight Room",
    focus: "Cinematic releases, premium promos, and editorial landing pages.",
    status: "Featured studio shell",
  },
  {
    slug: "velvet-axis",
    name: "Velvet Axis",
    focus: "Creator-led drops, royalty-friendly release structure, and cast metadata.",
    status: "Open for baseline buildout",
  },
  {
    slug: "after-hours-unit",
    name: "After Hours Unit",
    focus: "Operational placeholder for studio dashboards, publishing, and cast rosters.",
    status: "Internal starter profile",
  },
];

export const videos: VideoSummary[] = [
  {
    slug: "midnight-premiere",
    title: "Midnight Premiere",
    studio: "Midnight Room",
    status: "Featured",
    summary: "Placeholder release card for browse shelves, studio pages, and homepage modules.",
  },
  {
    slug: "velvet-spotlight",
    title: "Velvet Spotlight",
    studio: "Velvet Axis",
    status: "Draft shell",
    summary: "Simple baseline for future metadata, previews, creator credits, and access logic.",
  },
  {
    slug: "royalty-cut",
    title: "Royalty Cut",
    studio: "After Hours Unit",
    status: "Coming soon",
    summary: "A content detail route that keeps the site feeling complete while implementation catches up.",
  },
];

export const dashboardNavigation: DashboardNavItem[] = [
  {
    href: "/dashboard",
    label: "Overview",
    description: "High-level creator dashboard placeholder.",
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
    description: "Starter settings for identity, banner, and bio modules.",
  },
  {
    href: "/dashboard/content",
    label: "Content",
    description: "Reserved for release lists and creator-owned media.",
  },
  {
    href: "/dashboard/earnings",
    label: "Earnings",
    description: "Placeholder payouts and revenue summary view.",
  },
  {
    href: "/dashboard/royalties",
    label: "Royalties",
    description: "Reserved for split logic, statements, and transparency tools.",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    description: "Account and workflow preferences shell.",
  },
];

export const studioDashboardNavigation: DashboardNavItem[] = [
  {
    href: "/studio-dashboard",
    label: "Overview",
    description: "Studio operations overview baseline.",
  },
  {
    href: "/studio-dashboard/videos",
    label: "Videos",
    description: "Publishing queue and release shelf placeholder.",
  },
  {
    href: "/studio-dashboard/cast",
    label: "Cast",
    description: "Talent roster and contributor management placeholder.",
  },
  {
    href: "/studio-dashboard/royalties",
    label: "Royalties",
    description: "Split tracking and studio payout surface.",
  },
  {
    href: "/studio-dashboard/settings",
    label: "Settings",
    description: "Studio profile, controls, and future permissions.",
  },
];

export const adminNavigation: DashboardNavItem[] = [
  {
    href: "/admin",
    label: "Overview",
    description: "Admin control panel baseline.",
  },
  {
    href: "/admin/creators",
    label: "Creators",
    description: "Review queue and profile oversight placeholder.",
  },
  {
    href: "/admin/videos",
    label: "Videos",
    description: "Moderation and publishing operations shell.",
  },
  {
    href: "/admin/studios",
    label: "Studios",
    description: "Studio approvals and management baseline.",
  },
  {
    href: "/admin/royalties",
    label: "Royalties",
    description: "Internal finance and payout review surface.",
  },
  {
    href: "/admin/reports",
    label: "Reports",
    description: "Support, abuse, and compliance handling placeholder.",
  },
];
