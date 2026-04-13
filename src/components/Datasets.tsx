import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import * as d3 from 'd3';
import { ExternalLink } from 'lucide-react';

const datasetTableData = [
  { "Name": "LalorNatSpeech", "Age": "Adults", "N": "19", "nativeLang": "L1", "Stimulus": "Audiobook recordings", "Modality": "EEG", "Authors": "Broderick/Di Liberto & Lalor", "Papers": ["https://pubmed.ncbi.nlm.nih.gov/29478856/"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.070jc" },
  { "Name": "LalorRevSpeech", "Age": "Adults", "N": "10", "nativeLang": "L1", "Stimulus": "Time-reversed audiobooks", "Modality": "EEG", "Authors": "Broderick/Di Liberto & Lalor", "Papers": ["https://pubmed.ncbi.nlm.nih.gov/29478856/"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.070jc" },
  { "Name": "AliceSpeech", "Age": "Adults", "N": "20", "nativeLang": "L1", "Stimulus": "Audiobook (slowed 20%)", "Modality": "EEG", "Authors": "Brennan & Hale", "Papers": ["https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0207741"], "Link": "https://deepblue.lib.umich.edu/data/concern/data_sets/bg257f92t" },
  { "Name": "GwilliamsSpeechMEG-1", "Age": "Adults", "N": "11", "nativeLang": "L1", "Stimulus": "MASC Naturalistic stories", "Modality": "MEG", "Authors": "Gwilliams & Poeppel/King", "Papers": ["https://www.nature.com/articles/s41597-023-02752-5"], "Link": "https://osf.io/ag3kj/overview" },
  { "Name": "GwilliamsSpeechMEG-2", "Age": "Adults", "N": "10", "nativeLang": "L1", "Stimulus": "MASC Naturalistic stories", "Modality": "MEG", "Authors": "Gwilliams & Poeppel/King", "Papers": ["https://www.nature.com/articles/s41597-023-02752-5"], "Link": "https://osf.io/ag3kj/overview" },
  { "Name": "PodcastListening", "Age": "Adults", "N": "20", "nativeLang": "L1", "Stimulus": "Podcast ADS and CDS", "Modality": "EEG", "Authors": "Ip & Di Liberto", "Papers": ["https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1.abstract"], "Link": "Available Soon" },
  { "Name": "TrustSpeech", "Age": "Adults", "N": "20", "nativeLang": "L1", "Stimulus": "Synthesised speech stories", "Modality": "EEG", "Authors": "Hannah & Di Liberto", "Papers": ["https://doi.org/10.64898/2026.03.11.711118"], "Link": "Available Soon" },
  { "Name": "EmotionSpeech", "Age": "Adults", "N": "27", "nativeLang": "L1", "Stimulus": "Recorded emotional stories", "Modality": "EEG", "Authors": "Akkaya & Di Liberto", "Papers": ["https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1.abstract"], "Link": "Available Soon" },
  { "Name": "FDSpeech L1", "Age": "Adults", "N": "19", "nativeLang": "L1", "Stimulus": "Native directed speech", "Modality": "EEG", "Authors": "Piazza & Martin/Di Liberto", "Papers": ["https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00539/128622/"], "Link": "Available Soon" },
  { "Name": "FDSpeech L2", "Age": "Adults", "N": "21", "nativeLang": "L2", "Stimulus": "Foreigner directed speech", "Modality": "EEG", "Authors": "Piazza & Di Liberto/Martin", "Papers": ["https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00539/128622/"], "Link": "Available Soon" },
  { "Name": "SparrKULee1", "Age": "Adults", "N": "77", "nativeLang": "L1", "Stimulus": "Dutch/Flemish speech", "Modality": "EEG", "Authors": "Accou/Bollens & Francart", "Papers": [], "Link": "https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND" },
  { "Name": "SparrKULee2", "Age": "Adults", "N": "56", "nativeLang": "L1", "Stimulus": "Dutch/Flemish speech", "Modality": "EEG", "Authors": "Accou/Bollens & Francart", "Papers": [], "Link": "https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND" },
  { "Name": "VocodedSpeech", "Age": "Adults", "N": "13", "nativeLang": "L1", "Stimulus": "Noise-vocoded speech", "Modality": "EEG", "Authors": "Calderon & Lopez Valdes", "Papers": ["https://www.isca-archive.org/interspeech_2023/calderondepalma23_interspeech.pdf"], "Link": "https://osf.io/gx6rm/overview" },
  { "Name": "ChildStories_Sysoeva", "Age": "3-8yo", "N": "52", "nativeLang": "L1", "Stimulus": "Russian child directed speech", "Modality": "EEG", "Authors": "Rogachev & Sysoeva", "Papers": ["https://www.sciencedirect.com/science/article/pii/S1389041724000305"], "Link": "https://osf.io/c3agw/" },
  { "Name": "BabyRhythmCambridge Adults", "Age": "Adults", "N": "17", "nativeLang": "L1", "Stimulus": "Nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "BabyRhythmCambridge 4mo", "Age": "4mo", "N": "47", "nativeLang": "L1", "Stimulus": "Nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "BabyRhythmCambridge 7mo", "Age": "7mo", "N": "47", "nativeLang": "L1", "Stimulus": "Nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "BabyRhythmCambridge 11mo", "Age": "11mo", "N": "47", "nativeLang": "L1", "Stimulus": "Nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "ConversationListening", "Age": "Adults", "N": "10", "nativeLang": "L1/L2", "Stimulus": "Synthesised + live opinion", "Modality": "EEG", "Authors": "Chalehchaleh & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "ConversationSpeaking", "Age": "Adults", "N": "10", "nativeLang": "L1/L2", "Stimulus": "Live opinion speech", "Modality": "EEG", "Authors": "Chalehchaleh & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "CocktailAttSwitch", "Age": "Adults", "N": "24", "nativeLang": "L1", "Stimulus": "TED talks + babble", "Modality": "EEG", "Authors": "Carta & Lopez/Di Liberto", "Papers": ["https://www.biorxiv.org/content/10.1101/2025.07.02.662762v1.abstract"], "Link": "Available Soon" },
  { "Name": "AAD KULeuven", "Age": "Adults", "N": "16", "nativeLang": "L1", "Stimulus": "Dutch short stories", "Modality": "EEG", "Authors": "Das & Francart/Bertrand", "Papers": ["https://iopscience.iop.org/article/10.1088/1741-2560/13/5/056014"], "Link": "https://zenodo.org/records/3997352" },
  { "Name": "StandupComedy", "Age": "Adults", "N": "14", "nativeLang": "L1", "Stimulus": "Stand-up comedy videos", "Modality": "EEG", "Authors": "Peters & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "CantisaniSpeech", "Age": "Adults", "N": "20", "nativeLang": "L1", "Stimulus": "Natural speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "CantisaniMelody", "Age": "Adults", "N": "20", "nativeLang": "non-M", "Stimulus": "Hummed speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "CantisaniSong", "Age": "Adults", "N": "20", "nativeLang": "L1/non-M", "Stimulus": "Sung speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "DiliBach", "Age": "Adults", "N": "20", "nativeLang": "M/NM", "Stimulus": "Synthesised Bach Piano", "Modality": "EEG", "Authors": "Di Liberto & Shamma", "Papers": ["https://elifesciences.org/articles/51784"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.g1jwstqmh" },
  { "Name": "MelodySwitch", "Age": "Adults", "N": "17", "nativeLang": "NM", "Stimulus": "Piano melodies (4 genres)", "Modality": "EEG", "Authors": "O'Doherty & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "PolyphonicBach", "Age": "Adults", "N": "30", "nativeLang": "M/NM", "Stimulus": "Bach Piano Double-point", "Modality": "EEG", "Authors": "Winchester & Di Liberto", "Papers": ["https://elifesciences.org/reviewed-preprints/108767"], "Link": "https://osf.io/bjdh6/overview" },
  { "Name": "MusicImagery Listening", "Age": "Adults", "N": "21", "nativeLang": "M", "Stimulus": "Bach Piano Melodies", "Modality": "EEG", "Authors": "Marion/Di Liberto & Shamma", "Papers": ["https://www.jneurosci.org/content/41/35/7435"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j" },
  { "Name": "MusicImagery Imagination", "Age": "Adults", "N": "21", "nativeLang": "M", "Stimulus": "Imagining Bach Melodies", "Modality": "EEG", "Authors": "Marion/Di Liberto & Shamma", "Papers": ["https://www.jneurosci.org/content/41/35/7435"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j" },
  { "Name": "SignLanguageSigners", "Age": "Adults", "N": "14", "nativeLang": "L1/L2", "Stimulus": "LSF deaf signer videos", "Modality": "EEG", "Authors": "Mertz/Hannah & Kuhn/Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "SignLanguageNonsigners", "Age": "Adults", "N": "20", "nativeLang": "NonSigners", "Stimulus": "LSF deaf signer videos", "Modality": "EEG", "Authors": "Mertz/Hannah & Kuhn/Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "Podcast fNIRS", "Age": "Adults", "N": "8", "nativeLang": "L1/L2", "Stimulus": "Podcast ADS and CDS", "Modality": "fNIRS", "Authors": "Wilroth/Hannah & Di Liberto", "Papers": ["https://doi.org/10.64898/2026.03.20.713212"], "Link": "Available Soon" }
];

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const mmRef = useRef<Markmap | null>(null);

  useEffect(() => {
    // 1. DATA DEFINITION (Every single dataset restored, links only where existing)
    const markdown = `
# Datasets
- EEG
  - Speech Production
    - ConversationSpeaking
  - Speech Listening
    - [LalorNatSpeech](https://datadryad.org/dataset/doi:10.5061/dryad.070jc)
    - [LalorRevSpeech](https://datadryad.org/dataset/doi:10.5061/dryad.070jc)
    - [AliceSpeech](https://deepblue.lib.umich.edu/data/concern/data_sets/bg257f92t)
    - PodcastListening
    - FDSpeech L1
    - FDSpeech L2
    - [SparrKULee1](https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND)
    - [SparrKULee2](https://rdr.kuleuven.be/dataset.xhtml?persistentId=doi:10.48804/K3VSND)
    - [ChildStories_Sysoeva](https://osf.io/c3agw/)
    - ConversationListening
    - CocktailAttSwitch
    - [AAD KULeuven](https://zenodo.org/records/3997352)
    - StandupComedy
    - CantisaniSpeech
    - [VocodedSpeech](https://osf.io/gx6rm/overview)
    - TrustSpeech
    - EmotionSpeech
    - Nursery Rhymes
      - [BabyRhythmCambridge Adults](https://osf.io/mdnwg/)
      - [BabyRhythmCambridge 4mo](https://osf.io/mdnwg/)
      - [BabyRhythmCambridge 7mo](https://osf.io/mdnwg/)
      - [BabyRhythmCambridge 11mo](https://osf.io/mdnwg/)
  - Music
    - [DiliBach](https://datadryad.org/dataset/doi:10.5061/dryad.g1jwstqmh)
    - [PolyphonicBach](https://osf.io/bjdh6/overview)
    - [MusicImagery Listening](https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j)
    - [MusicImagery Imagination](https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j)
    - CantisaniMelody
    - MelodySwitch
  - Sign Language
    - SignLanguageSigners
    - SignLanguageNonsigners
- MEG
  - [GwilliamsSpeechMEG-1](https://osf.io/ag3kj/overview)
  - [GwilliamsSpeechMEG-2](https://osf.io/ag3kj/overview)
- fNIRS
  - PodcastListening fNIRS
`;

    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    const setupParents = (node: any, parent: any = null) => {
      node.parent = parent;
      if (node.children) node.children.forEach((c: any) => setupParents(c, node));
    };
    setupParents(root);

    if (svgRef.current) {
      if (!mmRef.current) {
        const mm = Markmap.create(svgRef.current, {
          autoFit: true,
          initialExpandLevel: 2,
          duration: 400,
        }, root);
        mmRef.current = mm;

        const mmAny = mm as any;
        const originalToggle = mmAny.handleToggle;
        mmAny.handleToggle = (d3Node: any, event: any) => {
          if (d3Node.data.f) {
            const parent = d3Node.data.parent;
            if (parent && parent.children) {
              parent.children.forEach((sib: any) => { if (sib !== d3Node.data) sib.f = true; });
            }
            mmAny.setData(mmAny.state.data);
          }
          originalToggle.call(mmAny, d3Node, event);
          setTimeout(() => mm.fit(), 500);
        };
      }
    }

    const updateHoverAndLinks = () => {
      const svg = d3.select(svgRef.current);
      const tooltip = d3.select(tooltipRef.current);

      svg.selectAll('a').attr('target', '_blank').attr('rel', 'noopener noreferrer');

      svg.selectAll('.markmap-node')
        .on('mouseenter', function(event, d: any) {
          const nodeText = d3.select(this).text().trim();
          const dataset = datasetTableData.find(item => item.Name === nodeText);
          if (dataset) {
            tooltip.style('opacity', 1).html(`
              <div class="font-bold text-blue-700 mb-1 border-b pb-1">${dataset.Name}</div>
              <div class="text-[11px] text-gray-700 leading-relaxed"><strong>Stimulus:</strong> ${dataset.Stimulus}</div>
              <div class="mt-2 text-[10px] text-gray-400 italic">Auth: ${dataset.Authors}</div>
            `);
          }
        })
        .on('mousemove', (event) => {
          tooltip.style('left', (event.pageX + 15) + 'px').style('top', (event.pageY - 20) + 'px');
        })
        .on('mouseleave', () => tooltip.style('opacity', 0));
    };

    const handleResize = () => { if (mmRef.current) mmRef.current.fit(); };
    window.addEventListener('resize', handleResize);
    
    const observer = new MutationObserver(updateHoverAndLinks);
    if (svgRef.current) observer.observe(svgRef.current, { childList: true, subtree: true });

    updateHoverAndLinks();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full px-4 sm:px-10 py-10 bg-white min-h-screen overflow-x-hidden">
      <div ref={tooltipRef} className="fixed pointer-events-none opacity-0 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-xl p-4 z-[9999] max-w-[280px] transition-opacity duration-200 text-sm ring-1 ring-black/5" />
      <style>{`
        .markmap-node a { color: #2563eb !important; text-decoration: none !important; }
        .markmap-node a:hover { text-decoration: underline !important; }
        .markmap-foreign { font-size: 11px; line-height: 1.3; cursor: help; }
        @media (min-width: 768px) { .markmap-foreign { font-size: 13px; } }
      `}</style>
      <div className="w-full max-w-screen-2xl">
        <div className="mb-10 text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Datasets Explorer</h2>
          <p className="text-gray-500 mt-2 text-lg italic">Hover for details. Only underlined items contain external links.</p>
        </div>
        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden mb-20 h-[500px] md:h-[650px] w-full">
          <svg ref={svgRef} className="w-full h-full bg-slate-50/20" style={{ cursor: 'grab' }} />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Complete Study Catalog</h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-50">
                <tr>{["Name", "Age", "N", "Language", "Stimulus", "Modality", "Authors", "Links"].map(h => <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {datasetTableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{row.Name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{row.Age}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.N}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.nativeLang}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate" title={row.Stimulus}>{row.Stimulus}</td>
                    <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold uppercase border border-blue-100">{row.Modality}</span></td>
                    <td className="px-4 py-3 text-sm text-gray-500 italic">{row.Authors}</td>
                    <td className="px-4 py-3 text-sm space-y-1">
                      {row.Link.startsWith('http') ? <a href={row.Link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">Dataset <ExternalLink className="h-3 w-3 ml-1" /></a> : <span className="text-gray-400 text-xs italic">{row.Link}</span>}
                      {row.Papers.map((paper, pIdx) => <a key={pIdx} href={paper} target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-gray-600 text-xs underline truncate max-w-[150px]">Paper {pIdx + 1}</a>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}