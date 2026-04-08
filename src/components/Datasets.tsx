import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import * as d3 from 'd3';

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const mmRef = useRef<Markmap | null>(null);

  useEffect(() => {
    // 1. Data definition - Use [Text](URL) to make nodes clickable
    const markdown = `
# Datasets
- EEG
  - Speech
    - Production
      - ConversationSpeaking - Chalehchaleh & Di Liberto (Available Soon)
    - Listening
      - Sung Speech
        - CantisaniSong - Cantisani & Di Liberto/Shamma (Available Soon)
        - Nursery Rhymes
          - [BabyRhythmCambridge Adults - Attaheri/Di Liberto & Goswami](https://osf.io/mdnwg/)
          - [BabyRhythmCambridge 4mo - Attaheri/Di Liberto & Goswami](https://osf.io/mdnwg/)
          - [BabyRhythmCambridge 7mo - Attaheri/Di Liberto & Goswami](https://osf.io/mdnwg/)
          - [BabyRhythmCambridge 11mo - Attaheri/Di Liberto & Goswami](https://osf.io/mdnwg/)
      - Regular Speech
        - Natural
          - [LalorNatSpeech - Broderick/Di Liberto & Lalor](https://datadryad.org/dataset/doi:10.5061/dryad.070jc)
          - [LalorRevSpeech - Broderick/Di Liberto & Lalor](https://datadryad.org/dataset/doi:10.5061/dryad.070jc)
          - [AliceSpeech - Brennan & Hale](https://deepblue.lib.umich.edu/data/concern/data_sets/bg257f92t)
          - PodcastListening - Ip & Di Liberto (Available Soon)
          - EmotionSpeech - Akkaya & Di Liberto (Available Soon)
          - FDSpeech L1 - Piazza & Martin/Di Liberto (Available Soon)
          - FDSpeech L2 - Piazza & Martin/Di Liberto (Available Soon)
          - [SparrKULee1 - Accou/Bollens & Francart](https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND)
          - [SparrKULee2 - Accou/Bollens & Francart](https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND)
          - [ChildStories_Sysoeva - Rogachev & Sysoeva](https://osf.io/c3agw/)
          - ConversationListening - Chalehchaleh & Di Liberto (Available Soon)
          - CocktailAttSwitch - Carta & Lopez/Di Liberto (Available Soon)
          - [AAD KULeuven - Das & Francart/Bertrand](https://zenodo.org/records/3997352#.X0fP1sgza5g)
          - StandupComedy - Peters & Di Liberto (Available Soon)
        - Synthesised
          - [VocodedSpeech - Calderon & Lopez Valdes](https://osf.io/gx6rm/overview)
          - ConversationListening - Chalehchaleh & Di Liberto (Available Soon)
  - Music
    - Musicians
      - Listening
        - [DiliBach - Di Liberto & Shamma](https://datadryad.org/dataset/doi:10.5061/dryad.g1jwstqmh)
        - [PolyphonicBach - Winchester & Di Liberto](https://osf.io/bjdh6/overview)
        - [MusicImagery Listening - Marion/Di Liberto & Shamma](https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j)
      - Imagining
        - [MusicImagery Imagination - Marion/Di Liberto & Shamma](https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j)
    - Non-Musicians
      - Recorded
        - CantisaniMelody - Cantisani & Di Liberto/Shamma (Available Soon)
      - Synthesised
        - [DiliBach - Di Liberto & Shamma](https://datadryad.org/dataset/doi:10.5061/dryad.g1jwstqmh)
        - [PolyphonicBach - Winchester & Di Liberto](https://osf.io/bjdh6/overview)
        - MelodySwitch - O'Doherty & Di Liberto (Available Soon)
  - Sign Language
    - Signers
      - SignLanguageSigners - Mertz/Hannah & Kuhn/Di Liberto (Available Soon)
    - Non Signers
      - SignLanguageNonsigners - Mertz/Hannah & Kuhn/Di Liberto (Available Soon)
- MEG
  - [GwilliamsSpeechMEG-1 - Gwilliams & Poeppel/King](https://osf.io/ag3kj/overview)
  - [GwilliamsSpeechMEG-2 - Gwilliams & Poeppel/King](https://osf.io/ag3kj/overview)
- fNIRS
  - PodcastListening fNIRS - Wilroth/Hannah & Di Liberto (Available Soon)
`;

    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    if (svgRef.current) {
      if (!mmRef.current) {
        mmRef.current = Markmap.create(svgRef.current, {
          autoFit: true,
          initialExpandLevel: 2,
          duration: 500,
        }, root);
      } else {
        mmRef.current.setData(root);
        mmRef.current.fit();
      }

      // 2. NEW: Force all links to open in a new tab and style them
      d3.select(svgRef.current)
        .selectAll('a')
        .attr('target', '_blank')
        .attr('rel', 'noopener noreferrer')
        .style('color', '#2563eb')
        .style('text-decoration', 'none')
        .on('mouseover', function() { d3.select(this).style('text-decoration', 'underline'); })
        .on('mouseout', function() { d3.select(this).style('text-decoration', 'none'); });
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <style>{`
        .markmap-node a {
          cursor: pointer;
        }
        .markmap-foreign {
          line-height: 1.2;
        }
      `}</style>
      
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Datasets</h2>
        <p className="text-gray-600 mt-2">For a table structure, click here.</p>
      </div>

      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden" style={{ height: '700px' }}>
        <svg 
          ref={svgRef} 
          className="w-full h-full bg-gray-50"
          style={{ cursor: 'grab' }}
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg flex flex-wrap justify-center gap-6 text-sm text-blue-700 font-medium">
        <span>• Click circle to expand/collapse</span>
        <span>• Click text to open dataset link</span>
        <span>• Scroll to zoom • Drag to pan</span>
      </div>
    </div>
  );
}