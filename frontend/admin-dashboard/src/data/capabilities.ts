import { ArrowUpRight, BarChart3, BellRing, BrainCircuit, Building2, ClipboardCheck, FileText, ShieldCheck, Sparkles, Target, TrendingUp, Users } from "lucide-react";

export const capabilities = [
  {
    number: "01",
    title: "Workforce Foundation",
    description:
      "Build a structured view of your workforce and establish the organizational foundation needed for meaningful performance analysis.",
    icon: Users,
    features: [
      { label: "Employees", icon: Users },
      { label: "Departments", icon: Building2 },
      { label: "Positions", icon: ClipboardCheck },
      { label: "Organizations", icon: Building2 },
      { label: "Roles & permissions", icon: ShieldCheck },
    ],
    visual: "foundation",
  },
  {
    number: "02",
    title: "Performance Management",
    description:
      "Turn employee and team activity into measurable performance through position-based KPIs, scoring, and trend analysis.",
    icon: BarChart3,
    features: [
      { label: "KPIs", icon: Target },
      { label: "Performance scoring", icon: BarChart3 },
      { label: "Team monitoring", icon: Users },
      { label: "Trend analysis", icon: TrendingUp },
    ],
    visual: "performance",
  },
  {
    number: "03",
    title: "Intelligence",
    description:
      "Detect meaningful changes in performance and transform workforce data into insights that help managers understand what is happening.",
    icon: BrainCircuit,
    features: [
      { label: "Anomaly detection", icon: BrainCircuit },
      { label: "Automated alerts", icon: BellRing },
      { label: "AI analysis", icon: Sparkles },
      { label: "Recommendations", icon: ArrowUpRight },
    ],
    visual: "intelligence",
  },
  {
    number: "04",
    title: "Action & Improvement",
    description:
      "Move from insight to execution with structured action plans, goals, improvement tracking, and performance reports.",
    icon: Target,
    features: [
      { label: "Manager action plans", icon: ClipboardCheck },
      { label: "Performance goals", icon: Target },
      { label: "Improvement tracking", icon: TrendingUp },
      { label: "Reports", icon: FileText },
    ],
    visual: "action",
  },
];
