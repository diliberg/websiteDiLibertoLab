import React, { useState, useRef, useEffect } from 'react';
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

function ExpandedContent({ area, isTransitioning }: { 
  area: ResearchArea;
  isTransitioning: boolean;
}) {
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
                    {!isTransitioning && (
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                    )}
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
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const expandedWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedArea) {
      setIsTransitioning(true);
      // Reset transition state after content is loaded
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match the duration of the scroll animation
      return () => clearTimeout(timer);
    }
  }, [expandedArea]);

  useEffect(() => {
    if (expandedContentRef.current && expandedArea) {
      setContentHeight(expandedContentRef.current.scrollHeight);
      
      setTimeout(() => {
        if (expandedWrapperRef.current) {
          const yOffset = -20;
          const y = expandedWrapperRef.current.getBoundingClientRect().top + 
                   window.pageYOffset + yOffset;
          
          const startPosition = window.pageYOffset;
          const distance = y - startPosition;
          const duration = 500;
          const startTime = performance.now();

          function easeInOutCubic(t: number): number {
            return t < 0.5
              ? 4 * t * t * t
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          }

          function scrollAnimation(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = easeInOutCubic(progress);
            window.scrollTo(0, startPosition + distance * easedProgress);

            if (progress < 1) {
              requestAnimationFrame(scrollAnimation);
            }
          }

          requestAnimationFrame(scrollAnimation);
        }
      }, 50);
    } else {
      setContentHeight(0);
    }
  }, [expandedArea]);

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

      <div 
        ref={expandedWrapperRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: contentHeight ? `${contentHeight}px` : '0px' }}
      >
        <div ref={expandedContentRef}>
          {expandedArea && (
            <ExpandedContent 
              area={researchAreas.find(area => area.id === expandedArea)!}
              isTransitioning={isTransitioning}
            />
          )}
        </div>
      </div>

      <div 
        className={`transition-all duration-500 ${
          expandedArea ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
        }`}
      >
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
      </div>
    </div>
  );
}