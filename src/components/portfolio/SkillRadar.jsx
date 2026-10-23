import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

export default function SkillRadar({ items }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={items} outerRadius="68%">
          <PolarGrid stroke="#27272a" />
          <PolarAngleAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 10 }} />
          <Radar
            dataKey="level"
            stroke="#22d3ee"
            fill="#22d3ee"
            fillOpacity={0.22}
            isAnimationActive
            animationDuration={600}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}