import React, { useEffect, useRef } from 'react';

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // 1. Load the Markmap scripts from CDN
    const loadScript = (src: string) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    const initMarkmap = async () => {
      // Load both the 'view' and 'lib' (transformer) libraries
      await loadScript('https://cdn.jsdelivr.net/npm/markmap-lib@0.17.0/dist/browser/index.js');
      await loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.17.0/dist/browser/index.js');

      const { Transformer } = (window as any).markmap;
      const { Markmap, loadCSS, loadJS } = (window as any).markmap;

      // 2. Define your data in Markdown format
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

      // 3. Transform Markdown to Markmap data
      const transformer = new Transformer();
      const { root, features } = transformer.transform(markdown);
      const { styles, scripts } = transformer.getAssets();
      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => Markmap });

      // 4. Create the interactive map
      if (svgRef.current) {
        Markmap.create(svgRef.current, {
          autoFit: true,
          initialExpandLevel: 2, // Starts with 'listening' and 'music' sub-branches visible
          duration: 500, // Smooth animation speed
        }, root);
      }
    };

    initMarkmap();
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive Dataset Taxonomy</h2>
      <p className="text-sm text-gray-500 mb-6 italic">
        Click the circles to expand/collapse • Scroll to zoom • Drag to move
      </p>
      
      <div className="w-full border rounded-lg bg-gray-50 overflow-hidden">
        <svg 
          ref={svgRef} 
          style={{ width: '100%', height: '500px' }} 
        />
      </div>
    </div>
  );
}