import React, { useEffect, useRef, useState } from 'react';

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    let isMounted = true;

    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists to avoid duplicates
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
      });
    };

    const startApp = async () => {
      try {
        console.log("Step 1: Loading D3...");
        setStatus("Loading D3 library...");
        await loadScript('https://cdn.jsdelivr.net/npm/d3@7');

        console.log("Step 2: Loading Markmap Lib...");
        setStatus("Loading Markmap Core...");
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-lib@0.17.0/dist/browser/index.js');

        console.log("Step 3: Loading Markmap View...");
        setStatus("Loading Markmap Visualizer...");
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.17.0/dist/browser/index.js');

        if (!isMounted) return;

        console.log("Step 4: Transforming Markdown...");
        setStatus("Building taxonomy...");
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

        console.log("Step 5: Rendering SVG...");
        if (svgRef.current) {
          svgRef.current.innerHTML = '';
          Markmap.create(svgRef.current, {
            autoFit: true,
            initialExpandLevel: 2,
            duration: 500,
          }, root);
          console.log("Render Complete!");
          setStatus("Ready");
        }
      } catch (err) {
        console.error("Critical Error:", err);
        setStatus("Error: Connectivity issue. Check your console (F12).");
      }
    };

    startApp();

    return () => { isMounted = false; };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Research Datasets</h2>
        <p className="text-gray-600 mt-2">Interactive hierarchy of our laboratory data collections.</p>
      </div>

      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden" style={{ height: '600px' }}>
        {status !== "Ready" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500 font-medium">{status}</p>
              {status.includes("Error") && (
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
                >
                  Retry Connection
                </button>
              )}
            </div>
          </div>
        )}
        
        <svg 
          ref={svgRef} 
          className="w-full h-full"
          style={{ cursor: 'grab' }}
        />
      </div>

      <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
        <div className="flex gap-4">
          <span>• Click circle to expand</span>
          <span>• Mouse wheel to zoom</span>
          <span>• Drag to pan</span>
        </div>
      </div>
    </div>
  );
}