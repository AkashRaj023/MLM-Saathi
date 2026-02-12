
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { MOCK_GENEALOGY } from '../constants.tsx';

const NetworkGenealogy: React.FC = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const margin = { top: 40, right: 90, bottom: 50, left: 90 };
      const width = 1000 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      d3.select(d3Container.current).selectAll("*").remove();

      const svg = d3.select(d3Container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const tree = d3.tree().size([width, height]);
      const root = d3.hierarchy(MOCK_GENEALOGY);

      tree(root);

      // Links
      // Fix: Providing explicit generics to linkVertical to handle HierarchyPointLink and casting to any to satisfy the attribute function signature
      svg.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkVertical<any, d3.HierarchyPointLink<any>, d3.HierarchyPointNode<any>>()
          .x((d: any) => d.x)
          .y((d: any) => d.y) as any)
        .attr("fill", "none")
        .attr("stroke", "#334155")
        .attr("stroke-width", 2);

      // Nodes
      const node = svg.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);

      node.append("circle")
        .attr("r", 25)
        .attr("fill", "#1e293b")
        .attr("stroke", (d: any) => d.data.rank.includes('Director') ? '#00d09c' : '#3b82f6')
        .attr("stroke-width", 3);

      node.append("text")
        .attr("dy", ".35em")
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .text((d: any) => d.data.name)
        .style("fill", "#e2e8f0")
        .style("font-size", "12px")
        .style("font-weight", "600");

      node.append("text")
        .attr("y", 55)
        .attr("text-anchor", "middle")
        .text((d: any) => d.data.rank)
        .style("fill", "#94a3b8")
        .style("font-size", "10px");
        
      // Tooltip effect simulated with hover color
      node.on("mouseover", function() {
        d3.select(this).select("circle").transition().duration(200).attr("r", 30);
      }).on("mouseout", function() {
        d3.select(this).select("circle").transition().duration(200).attr("r", 25);
      });
    }
  }, []);

  return (
    <div className="bg-[#131722] border border-slate-800 rounded-2xl p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold">Network Genealogy</h2>
          <p className="text-slate-500 text-sm">Visualize your active chain and downline hierarchies.</p>
        </div>
        <div className="flex gap-2">
            <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 bg-emerald-500 rounded-full"></span> Active</span>
            <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Inactive</span>
        </div>
      </div>
      <div className="w-full flex justify-center" ref={d3Container}></div>
    </div>
  );
};

export default NetworkGenealogy;
