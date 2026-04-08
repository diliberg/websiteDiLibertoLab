import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import * as d3 from 'd3';
import { ExternalLink } from 'lucide-react';

// Full data from your Excel file
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
  { "Name": "BabyRhythmCambridge 4mo", "Age": "4mo", "N": "47", "nativeLang": "L1", "Stimulus": "Recorded nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "BabyRhythmCambridge 7mo", "Age": "7mo", "N": "47", "nativeLang": "L1", "Stimulus": "Recorded nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "BabyRhythmCambridge 11mo", "Age": "11mo", "N": "47", "nativeLang": "L1", "Stimulus": "Recorded nursery rhymes", "Modality": "EEG", "Authors": "Attaheri/Di Liberto & Goswami", "Papers": ["https://www.nature.com/articles/s41467-023-43490-x"], "Link": "https://osf.io/mdnwg/" },
  { "Name": "ConversationListening", "Age": "Adults", "N": "10", "nativeLang": "L1/L2", "Stimulus": "Synthesised + live opinion", "Modality": "EEG", "Authors": "Chalehchaleh & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "ConversationSpeaking", "Age": "Adults", "N": "10", "nativeLang": "L1/L2", "Stimulus": "Live opinion speech", "Modality": "EEG", "Authors": "Chalehchaleh & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "CocktailAttSwitch", "Age": "Adults", "N": "24", "nativeLang": "L1", "Stimulus": "Simultaneous Eng TED talks", "Modality": "EEG", "Authors": "Carta & Lopez/Di Liberto", "Papers": ["https://www.biorxiv.org/content/10.1101/2025.07.02.662762v1.abstract"], "Link": "Available Soon" },
  { "Name": "AAD KULeuven", "Age": "Adults", "N": "16", "nativeLang": "L1", "Stimulus": "Dutch short stories (2 simult.)", "Modality": "EEG", "Authors": "Das & Francart/Bertrand", "Papers": ["https://iopscience.iop.org/article/10.1088/1741-2560/13/5/056014"], "Link": "https://zenodo.org/records/3997352" },
  { "Name": "CantisaniSpeech", "Age": "Adults", "N": "20", "nativeLang": "L1", "Stimulus": "Speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "CantisaniMelody", "Age": "Adults", "N": "20", "nativeLang": "non-M", "Stimulus": "Hummed speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "CantisaniSong", "Age": "Adults", "N": "20", "nativeLang": "L1/non-M", "Stimulus": "Sung speech", "Modality": "EEG", "Authors": "Cantisani & Di Liberto/Shamma", "Papers": ["https://hal.science/hal-04529950"], "Link": "Available Soon" },
  { "Name": "DiliBach", "Age": "Adults", "N": "20", "nativeLang": "M/NM", "Stimulus": "Synthesised Bach Piano", "Modality": "EEG", "Authors": "Di Liberto & Shamma", "Papers": ["https://elifesciences.org/articles/51784"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.g1jwstqmh" },
  { "Name": "MelodySwitch", "Age": "Adults", "N": "17", "nativeLang": "NM", "Stimulus": "Piano melodies (4 genres)", "Modality": "EEG", "Authors": "O'Doherty & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "PolyphonicBach", "Age": "Adults", "N": "30", "nativeLang": "M/NM", "Stimulus": "Bach Piano Double-point", "Modality": "EEG", "Authors": "Winchester & Di Liberto", "Papers": ["https://elifesciences.org/reviewed-preprints/108767"], "Link": "https://osf.io/bjdh6/overview" },
  { "Name": "MusicImagery List.", "Age": "Adults", "N": "21", "nativeLang": "M", "Stimulus": "Bach Piano Melodies", "Modality": "EEG", "Authors": "Marion/Di Liberto & Shamma", "Papers": ["https://www.jneurosci.org/content/41/35/7435"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j" },
  { "Name": "MusicImagery Imag.", "Age": "Adults", "N": "21", "nativeLang": "M", "Stimulus": "Imagining Bach Melodies", "Modality": "EEG", "Authors": "Marion/Di Liberto & Shamma", "Papers": ["https://www.jneurosci.org/content/41/35/7435"], "Link": "https://datadryad.org/dataset/doi:10.5061/dryad.dbrv15f0j" },
  { "Name": "StandupComedy", "Age": "Adults", "N": "14", "nativeLang": "L1", "Stimulus": "Stand-up comedy videos", "Modality": "EEG", "Authors": "Peters & Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "SignLang Signers", "Age": "Adults", "N": "14", "nativeLang": "L1/L2", "Stimulus": "LSF deaf signer videos", "Modality": "EEG", "Authors": "Mertz/Hannah & Kuhn/Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "SignLang NonSigners", "Age": "Adults", "N": "20", "nativeLang": "NonSigners", "Stimulus": "LSF deaf signer videos", "Modality": "EEG", "Authors": "Mertz/Hannah & Kuhn/Di Liberto", "Papers": [], "Link": "Available Soon" },
  { "Name": "Podcast fNIRS", "Age": "Adults", "N": "8", "nativeLang": "L1/L2", "Stimulus": "Podcast ADS and CDS", "Modality": "fNIRS", "Authors": "Wilroth/Hannah & Di Liberto", "Papers": ["https://doi.org/10.64898/2026.03.20.713212"], "Link": "Available Soon" }
];

export function Datasets() {
  const svgRef = useRef<SVGSVGElement>(null);
  const mmRef = useRef<Markmap | null>(null);

  useEffect(() => {
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
    }

    const handleLinks = () => {
      d3.select(svgRef.current)
        .selectAll('a')
        .attr('target', '_blank')
        .attr('rel', 'noopener noreferrer');
    };

    const observer = new MutationObserver(handleLinks);
    if (svgRef.current) {
      observer.observe(svgRef.current, { childList: true, subtree: true });
    }

    handleLinks();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl ml-0 px-4 py-8 text-left">
      <style>{`
        .markmap-node a { color: #2563eb !important; font-weight: 500; text-decoration: none !important; }
        .markmap-node a:hover { text-decoration: underline !important; }
        .markmap-foreign { line-height: 1.2; }
      `}</style>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Datasets Explorer</h2>
        <p className="text-gray-600 mt-2 italic">For a table overview, see below.</p>
      </div>

      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mb-12" style={{ height: '550px' }}>
        <svg ref={svgRef} className="w-full h-full bg-gray-50" style={{ cursor: 'grab' }} />
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Study Catalog</h3>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                {["Name", "Age", "N", "Language", "Stimulus", "Modality", "Authors", "Links"].map((header) => (
                  <th key={header} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {datasetTableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-bold text-gray-900">{row.Name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{row.Age}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.N}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.nativeLang}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate" title={row.Stimulus}>{row.Stimulus}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium uppercase">
                      {row.Modality}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 italic">{row.Authors}</td>
                  <td className="px-4 py-3 text-sm space-y-1">
                    {row.Link.startsWith('http') ? (
                      <a href={row.Link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        Dataset <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs italic">{row.Link}</span>
                    )}
                    {row.Papers.map((paper, pIdx) => (
                      <a key={pIdx} href={paper} target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-gray-600 text-xs underline truncate max-w-[150px]">
                        Paper {pIdx + 1}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}