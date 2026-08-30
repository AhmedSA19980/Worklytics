import { StatCard as statCardProp } from "@/types/startcards";

export const StatCard = ({ title, value, change }: statCardProp) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-gray-500">{title}</h3>

      <h2 className="mt-2 text-3xl font-bold">{value}</h2>

      <p className="mt-3 text-sm text-green-600">{change}</p>
    </div>
  );
};
