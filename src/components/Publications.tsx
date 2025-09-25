import React from 'react';
import { ExternalLink } from 'lucide-react';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
};

const latestPublications: Publication[] = [
  {
    title: "Are you talking to me? How the choice of speech register impacts listeners' hierarchical encoding of speech",
    authors: "G Piazza, S Carta, E Ip, J Pérez-Navarro, M Kalashnikova, CD Martin, GM Di Liberto",
    journal: "Imaging Neuroscience 3: imag_a_00539.",
    year: "2025",
    link: "https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00539/128622/Are-you-talking-to-me-How-the-choice-of-speech"
  },
  {
    title: "Robust assessment of the cortical encoding of word-level expectations using the temporal response function",
    authors: "A Chalehchaleh, MM Winchester, GM Di Liberto",
    journal: "Journal of Neural Engineering 22 (1), 016004",
    year: 2025,
    link: "https://iopscience.iop.org/article/10.1088/1741-2552/ada30a/meta"
  },
  {
    title: "Cortical encoding of phonetic onsets of both attended and ignored speech in hearing impaired individuals",
    authors: "S Carta, E Aličković, J Zaar, AL Valdés, GM Di Liberto",
    journal: "PLoS One 19 (11), e0308554",
    year: 2024,
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0308554"
  }
];

const latestPreprints: Publication[] = [
  {
    title: "Exploring the impact of social relevance on the cortical tracking of speech: viability and temporal response characterisation",
    authors: "EYJ Ip, A Akkaya, MM Winchester, SJ Bishop, BR Cowan, GM Di Liberto".
    journal: "BioRxiv",
    year: "in review",
    link: "https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1"
  },
  {
    title: "Where is the melody? Spontaneous attention orchestrates melody formation during polyphonic music listening",
    authors: "MM Winchester, K Reynolds, C Nebo, IC Scott, GM Di Liberto",
    journal: "BioRxiv",
    year: "in review",
    link: "https://www.biorxiv.org/content/10.1101/2025.08.26.672294v1"
  },
  {
    title: "Simultaneous cortical tracking of competing speech stream during attention switching",
    authors: "S Carta, E Aličković, J Zaar, A López Valdés, GM Di Liberto",
    journal: "bioRxiv",
    year: "in review",
    link: "https://www.biorxiv.org/content/10.1101/2025.07.02.662762v1"
  },
  
  {
    title: "Speech Neurophysiology in Realistic Contexts: Big Hype or Big Leap?",
    authors: "GM Di Liberto and EYJ Ip",
    journal: "arXiv",
    year: "in review",
    link: "https://arxiv.org/abs/2506.05494"
  },
  {
    title: "Neural signatures of musical and linguistic interactions during natural song listening",
    authors: "G Cantisani, S Shamma, GM Di Liberto",
    journal: "HAL",
    year: "in review",
    link: "https://hal.science/hal-04529950/"
  }
];

const selectedPublications: Publication[] = [
  {
    title: "Emergence of the cortical encoding of phonetic features in the first year of life",
    authors: "GM Di Liberto, A Attaheri, G Cantisani, RB Reilly, Á Ní Choisdealbha, ..., U Goswami",
    journal: "Nature Communications 14 (1), 7789",
    year: 2023,
    link: "https://www.nature.com/articles/s41467-023-43490-x"
  },
  {
    title: "Neural representation of linguistic feature hierarchy reflects second-language proficiency",
    authors: "GM Di Liberto, J Nie, J Yeaton, B Khalighinejad, SA Shamma, N Mesgarani",
    journal: "NeuroImage 227, 117586",
    year: 2021,
    link: "https://www.sciencedirect.com/science/article/pii/S1053811920310715"
  },
  {
    title: "Cortical encoding of melodic expectations in human temporal cortex",
    authors: "GM Di Liberto, C Pelofi, R Bianco, P Patel, AD Mehta, JL Herrero, A de Cheveigne, S Shamma, N Mesgarani",
    journal: "Elife 9, e51784",
    year: 2020,
    link: "https://elifesciences.org/articles/51784"
  },
  {
    title: "Atypical cortical entrainment to speech in the right hemisphere underpins phonemic deficits in dyslexia",
    authors: "GM Di Liberto, V Peter, M Kalashnikova, U Goswami, D Burnham, E Lalor",
    journal: "NeuroImage 175, 70-79",
    year: 2018,
    link: "https://www.sciencedirect.com/science/article/pii/S1053811918302829"
  },
  {
    title: "Low-frequency cortical entrainment to speech reflects phoneme-level processing",
    authors: "GM Di Liberto, JA O'sullivan, EC Lalor",
    journal: "Current Biology 25 (19), 2457-2465",
    year: 2015,
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(15)01001-5"
  },
  {
    title: "A standardised open science framework for sharing and re-analysing neural data acquired to continuous stimuli",
    authors: "GM Di Liberto, A Nidiffer, MJ Crosse, NJ Zuk, S Haro, G Cantisani, et al.",
    journal: "Neurons, Behavior, Data Analysis, and Theory, October, 1–25",
    year: 2024,
    link: "https://nbdt.scholasticahq.com/article/124867"
  }
];

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <a 
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:no-underline"
      >
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 mb-2">
          {publication.title}
        </h3>
      </a>
      <p className="text-gray-600 text-sm mb-2">{publication.authors}</p>
      <div className="text-sm">
        <span className="text-gray-500">
          {publication.journal} ({publication.year})
        </span>
      </div>
    </div>
  );
}

export function Publications() {
  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Publications</h2>
        <a 
          href="https://scholar.google.it/citations?user=0NWmnJYAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full transition-colors text-sm font-medium"
        >
          Google Scholar
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Latest Publications</h3>
        <div className="space-y-6">
          {latestPublications.map((pub, index) => (
            <PublicationCard key={`latest-${index}`} publication={pub} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Latest Preprints</h3>
        <div className="space-y-6">
          {latestPreprints.map((pub, index) => (
            <PublicationCard key={`latest-${index}`} publication={pub} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Selected Publications</h3>
        <div className="space-y-6">
          {selectedPublications.map((pub, index) => (
            <PublicationCard key={`selected-${index}`} publication={pub} />
          ))}
        </div>
      </div>
    </div>
  );
}
