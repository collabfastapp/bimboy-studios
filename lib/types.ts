export type NavItem = {
  href: string;
  label: string;
};

export type CreatorSummary = {
  slug: string;
  name: string;
  tagline: string;
  specialty: string;
  royaltyRate: number;
  monthlyAudience: string;
  verified: boolean;
};

export type VideoSummary = {
  slug: string;
  title: string;
  studio: string;
  status: string;
  summary: string;
};

export type StudioSummary = {
  slug: string;
  name: string;
  focus: string;
  status: string;
};

export type DashboardNavItem = {
  href: string;
  label: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
  description: string;
};
