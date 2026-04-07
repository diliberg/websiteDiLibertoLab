import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import * as d3 from 'd3';

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const mmRef = useRef<Markmap | null>(null);

  useEffect(() => {
    // 1. Data definition
    const markdown = `
# datasets
- speech
  - production
  - listening
    - sung speech
    - regular speech
- music
  - listening
  - imagined
- sign
    `;

    // 2. Transform Markdown to Markmap data
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    // 3. Create/Update the Markmap
    if (svgRef.current) {
      // If we haven't created the map yet, create it
      if (!mmRef.current) {
        mmRef.current = Markmap.create(svgRef.current, {
          autoFit: true,
          initialExpandLevel: 2,
          duration: 500,
        }, root);
      } else {
        // If it already exists, just update the data
        mmRef.current.setData(root);
        mmRef.current.fit();
      }
    }

    // Cleanup on unmount
    return () => {
      if (mmRef.current) {
        // Clean up listeners if necessary
      }
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Dataset Taxonomy</h2>
        <p className="text-gray-600 mt-2">Interactive hierarchy of laboratory data collections.</p>
      </div>

      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden" style={{ height: '600px' }}>
        <svg 
          ref={svgRef} 
          className="w-full h-full bg-gray-50"
          style={{ cursor: 'grab' }}
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg flex flex-wrap justify-center gap-6 text-sm text-blue-700 font-medium">
        <span>• Click circle to expand/collapse</span>
        <span>• Scroll to zoom</span>
        <span>• Drag to pan</span>
      </div>
    </div>
  );
}