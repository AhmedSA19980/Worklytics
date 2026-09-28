import { Activity, BarChart3, Database, Lightbulb, Target } from "lucide-react";

export const pipeline = [
  {
    title: "Data",
    description: "Collect workforce activity and performance data.",
    icon: Database,
  },
  {
    title: "KPIs",
    description: "Measure performance against role-specific KPIs.",
    icon: Target,
  },
  {
    title: "Analysis",
    description: "Identify trends, patterns, and meaningful changes.",
    icon: BarChart3,
  },
  {
    title: "Insights",
    description: "Turn analysis into understandable performance insights.",
    icon: Lightbulb,
  },
  {
    title: "Action",
    description: "Translate insights into practical improvement plans.",
    icon: Activity,
  },
];
