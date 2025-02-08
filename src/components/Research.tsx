import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { researchAreas } from '../data/research';
import { collaborations, fundingLogos } from '../data/collaborations';
import type { ResearchArea } from '../types/research';

function ResearchAreaCard({ area, expanded, onToggle }: { 
  area: ResearchArea; 
  expanded: boolean;
  onToggle: () => void;
}) {
  const Icon = area.icon;
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${
        expanded ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
      }`}
      style={{
        backgroundImage: `url("${area.bgPattern}")`,
        backgroundRepeat: 'repeat'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-6 text-left"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2 md:p-3 bg-white bg-opacity-50 rounded-full">
            <Icon className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
          </div>
          <h3 className="text-base md:text-xl font-semibold">{area.title}</h3>
          {expanded ? (
            <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-gray-500 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-500 ml-auto" />
          )}
        </div>
        <p className="text-gray-600 hidden md:block">{area.description}</p>
      </button>
    </div>
  );
}

function ExpandedContent({ area }: { area: ResearchArea }) {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageUrl]: true
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <h3 className="text-2xl font-semibold mb-6">{area.title}</h3>
      
      <div className="space-y-12">
        {area.keyStudies.map((study, index) => (
          <div key={index} className="border-b last:border-b-0 pb-8 last:pb-0">
            <div className="lg:flex gap-8 items-start">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                {study.image && (
                  <div className="relative aspect-[2/1] rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        loadedImages[study.image] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(study.image!)}
                    />
                  </div>
                )}
                
                {study.publications && (
                  <div className="mt-6">
                    <h5 className="font-medium text-gray-700 mb-3">Related Publications</h5>
                    <div className="space-y-2">
                      {study.publications.map((pub, idx) => (
                        <a
                          key={idx}
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4 flex-shrink-0" />
                          <span>{pub.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="lg:w-1/2">
                <h4 className="text-xl font-semibold mb-4">{study.title}</h4>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationCard({ collaboration }: { 
  collaboration: typeof collaborations[0]
}) {
  return (
    <a
      href={collaboration.website}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group hover:bg-gray-50"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {collaboration.name}
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        {collaboration.institution}
      </p>
      <div className="flex items-center gap-1 text-blue-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Visit website</span>
        <ExternalLink className="h-3 w-3" />
      </div>
    </a>
  );
}

function FundingSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {fundingLogos.map((funder) => (
        <a
          key={funder.name}
          href={funder.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={funder.logo}
            alt={funder.name}
            className="max-h-16 w-auto"
          />
        </a>
      ))}
    </div>
  );
}

export function Research() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  return (
    <div className="max-w-6xl">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <ResearchAreaCard
              key={area.id}
              area={area}
              expanded={expandedArea === area.id}
              onToggle={() => setExpandedArea(expandedArea === area.id ? null : area.id)}
            />
          ))}
        </div>
      </section>

      {expandedArea && (
        <ExpandedContent 
          area={researchAreas.find(area => area.id === expandedArea)!}
        />
      )}

      {!expandedArea && (
        <>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-8">Main Collaborators</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {collaborations.map((collaboration, index) => (
                <CollaborationCard key={index} collaboration={collaboration} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8">Funding & Support</h2>
            <FundingSection />
          </section>
        </>
      )}
    </div>
  );
}