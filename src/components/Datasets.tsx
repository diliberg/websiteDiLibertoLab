import React, { useEffect } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid with a clean, modern theme
mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#fff',
    lineColor: '#93c5fd',
    fontSize: '16px',
    nodeSpacing: 50,
    rankSpacing: 50,
  },
});

export function Datasets() {
  useEffect(() => {
    // This forces Mermaid to re-scan the DOM for the .mermaid class 
    // and render the diagram when the component mounts.
    mermaid.contentLoaded();
  }, []);

  // Mermaid mindmap syntax based on your structure
  const chartConfig = `
    mindmap
      root((datasets))
        speech
          production
          listening
            sung speech
            regular speech
        music
          listening
          imagined
        sign
  `;

  return (
    <div className="flex flex-col items-center w-full p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dataset Taxonomy</h2>
      
      <div className="w-full overflow-x-auto flex justify-center">
        <div className="mermaid">
          {chartConfig}
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400 italic">
        Interactive Mindmap • Generated via Mermaid.js
      </div>
    </div>
  );
}
