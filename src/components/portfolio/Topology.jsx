import { useState } from "react";
import { topologyNodes } from "@/data/topology";
import { homelab } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import TopologyDiagram from "@/components/portfolio/TopologyDiagram";
import TopologyNode from "@/components/portfolio/TopologyNode";
import NodeDrawer from "@/components/portfolio/NodeDrawer";

export default function Topology() {
  const [selectedId, setSelectedId] = useState(null);
  const node = topologyNodes.find((n) => n.id === selectedId) || null;

  return (
    <section id="homelab" className="relative border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="03"
          label="Homelab"
          title="Enterprise IT & Cybersecurity Home Lab"
          description={`${homelab.summary} Select any node to inspect its configuration.`}
        />

        <div className="mt-12">
          <TopologyDiagram onSelect={setSelectedId} />

          <div className="relative space-y-3 border-l border-cyan-400/30 pl-5 md:hidden">
            {topologyNodes.map((n) => (
              <div key={n.id} className="relative">
                <span className="absolute -left-[25px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400" />
                <TopologyNode node={n} onSelect={setSelectedId} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <NodeDrawer node={node} onClose={() => setSelectedId(null)} />
    </section>
  );
}