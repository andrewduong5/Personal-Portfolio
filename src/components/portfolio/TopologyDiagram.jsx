import { useState } from "react";
import { topologyNodes, topologyEdges } from "@/data/topology";
import TopologyNode from "@/components/portfolio/TopologyNode";

const byId = Object.fromEntries(topologyNodes.map((n) => [n.id, n]));

export default function TopologyDiagram({ onSelect }) {
  const [hover, setHover] = useState(null);

  return (
    <div className="relative hidden h-[480px] rounded-2xl border border-zinc-800 bg-zinc-900/40 dot-grid md:block">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        {topologyEdges.map(([a, b]) => {
          const active = hover === a || hover === b;
          const props = {
            x1: `${byId[a].x}%`,
            y1: `${byId[a].y}%`,
            x2: `${byId[b].x}%`,
            y2: `${byId[b].y}%`,
          };
          return (
            <g key={`${a}-${b}`}>
              <line {...props} stroke="#27272a" strokeWidth="1.5" />
              <line
                {...props}
                className="flow-line"
                stroke={active ? "#67e8f9" : "#22d3ee"}
                strokeOpacity={active ? 1 : 0.45}
                strokeWidth={active ? 2 : 1.5}
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>
      {topologyNodes.map((node) => (
        <TopologyNode
          key={node.id}
          node={node}
          onSelect={onSelect}
          onHover={setHover}
          className="absolute w-52 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        />
      ))}
    </div>
  );
}