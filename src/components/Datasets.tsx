import React, { useEffect, useRef, useState } from 'react';

// Use a named export to match your App.js import
export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // 1. Only load scripts if they aren't already on the page
      if (!(window as any).markmap) {
        const scripts = [
          'https://cdn.jsdelivr.net/npm/d3@7',
          'https://cdn.jsdelivr.net/npm/markmap-lib@0.17.0/dist/browser/index.js',
          'https://cdn.jsdelivr.net/npm/markmap-view@0.17.0/dist/browser/index.js'
        ];

        for (const src of scripts) {
          await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            document.head.appendChild(script);
          });
        }
      }

      // 2. Data definition
      const { Transformer, Markmap } = (window as any).markmap;
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

      const transformer = new Transformer();
      const { root } = transformer.transform(markdown);

      // 3. Render
      if (svgRef.current) {
        svgRef.current.innerHTML = ''; // Clear previous
        Markmap.create(svgRef.current, {
          autoFit: true,
          initialExpandLevel: 2,
          duration: 500,
        }, root);
      }
      setLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Datasets</h2>
      <p className="text-gray-600 mb-8">
        Interactive taxonomy of research datasets. Click nodes to expand or collapse branches.
      </p>

      <div className="relative bg-gray-50 rounded-xl border border-gray-200 shadow-sm overflow-hidden" style={{ height: '600px' }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-2"></div>
              <p className="text-sm text-gray-500">Loading interactive map...</p>
            </div>
          </div>
        )}
        
        {/* The SVG must have a class or ref for markmap to target */}
        <svg 
          ref={svgRef} 
          className="w-full h-full"
          style={{ minHeight: '500px' }}
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          Scroll to Zoom • Drag to Move • Click to Explore
        </p>
      </div>
    </div>
  );
}