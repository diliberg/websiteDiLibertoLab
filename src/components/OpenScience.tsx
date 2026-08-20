import { ExternalLink } from 'lucide-react';

type Resource = {
  title: string;
  description: string;
  links: Array<{
    text: string;
    url: string;
  }>;
  papers?: Array<{
    text: string;
    url: string;
  }>;
};

const resources: Resource[] = [
  {
    title: "mTRF toolbox",
    description: "A MATLAB toolbox for relating neural signals to continuous stimuli",
    links: [
      {
        text: "Git",
        url: "https://github.com/mickcrosse/mTRF-Toolbox"
      },
      {
        text: "Sourceforge",
        url: "https://sourceforge.net/projects/aespa/"
      }
    ],
    papers: [
      {
        text: "Crosse, Di Liberto, Bednar and Lalor, Front. in Hum Neurosci, 2016",
        url: "https://www.frontiersin.org/articles/10.3389/fnhum.2016.00604/full"
      },
      {
        text: "Crosse, Zuk, Di Liberto, Nidiffer, Molholdm, and Lalor, Front. in Hum Neurosci, 2021",
        url: "https://www.frontiersin.org/articles/10.3389/fnins.2021.705621/full"
      }
    ]
  }
];

export function OpenScience({ onViewDatasets }: { onViewDatasets?: () => void }) {
  return (
    <div className="max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-semibold">Open Science</h2>
        {onViewDatasets && (
          <button
            onClick={onViewDatasets}
            // Made the link larger (text-lg) and bolder (font-semibold)
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold hover:underline inline-flex items-center transition-colors"
          >
            See our standardised datasets →
          </button>
        )}
      </div>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <img 
              src="https://cnsp-workshop.github.io/website/images/CNSP_Logo.gif" 
              alt="CNSP Logo"
              className="w-20 h-20 object-contain mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold mb-4">CNSP initiative</h3>
              <p className="text-gray-600 mb-4">
                Co-ordination of the Open Science initiative CNSP. Check out the resource page of the{' '}
                <a 
                  href="https://cnspinitiative.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Cognition and Natural Sensory Processing (CNSP)
                </a>
                 . CNSP is an open science initiative sharing lectures, standardised datasets, scripts, and toolboxes for the analysis of neurophysiology data involving continuous tasks, such as speech communication, music listening, and movie watching.
              </p>
              <a
                href="https://nbdt.scholasticahq.com/article/124867"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 italic block"
              >
                Di Liberto, Nidiffer, Crosse, Zuk, Haro, Cantisani, et al. (2024). A standardised open science framework for sharing and re-analysing neural data acquired to continuous stimuli. Neurons, Behavior, Data analysis and Theory
              </a>

              <a
                href="https://humanbrainmapping.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 italic block mt-4"
              >
                John is presenting out latest mTRF-Toolbox tutorials at the Open Science Room of the OHBM conference (Brisbane, Australia; June 2025).                
              </a>

              <a
                href="https://www.youtube.com/watch?v=Sj1txAtvMiA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 italic block mt-4"
              >
                Giovanni talked about some of our open science work (CNSP) at the CogHear conference (Maryland, USA; June 2025). Check out the videorecording here.                
              </a>
            </div>
          </div>
        </div>

        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                {resource.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {link.text} <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                ))}
              </div>
              <p className="text-gray-600">{resource.description}</p>
              {resource.papers && (
                <div className="space-y-2">
                  {resource.papers.map((paper, paperIndex) => (
                    <a
                      key={paperIndex}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-blue-600 italic"
                    >
                      {paper.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}