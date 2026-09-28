import { BrainCircuit, ChartNoAxesCombined, UsersRound } from "lucide-react";

export 
const useCases = [
  {
    role: "HR",
    label: "Workforce foundation",
    title: "Build a clear workforce structure.",
    description:
      "Manage employees, positions, departments, roles, and performance structures from one connected system.",
    icon: UsersRound,
    capabilities: [
      "Employee management",
      "Positions & departments",
      "Roles & permissions",
      "Performance structures",
    ],
  },
  {
    role: "MANAGERS",
    label: "Team intelligence",
    title: "Understand how your team is performing.",
    description:
      "Monitor team KPIs, identify meaningful changes, and turn performance insights into focused action plans.",
    icon: ChartNoAxesCombined,
    capabilities: [
      "Team performance",
      "KPI monitoring",
      "Trend analysis",
      "Action plans",
    ],
    featured: true,
  },
  {
    role: "EXECUTIVES",
    label: "Organization intelligence",
    title: "See the organization beyond individual metrics.",
    description:
      "Understand organization-wide performance trends and identify areas that may require attention.",
    icon: BrainCircuit,
    capabilities: [
      "Organization trends",
      "Performance overview",
      "Cross-team visibility",
      "Strategic insights",
    ],
  },
];
