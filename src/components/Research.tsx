import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { researchAreas } from '../data/research';
import { collaborations, fundingLogos, researchhighlights } from '../data/collaborations';
import type { ResearchArea } from '../types/research';

interface ResearchAreaCardProps {
  area: ResearchArea;
  expanded: boolean;
  onToggle: () => void;
}

function ResearchAreaCard({ area, expanded, onToggle }: ResearchAreaCardProps) {
  const Icon = area.icon;
  return (
    <div
      className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${
        expanded ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
      }`}
      style={{
        backgroundImage: area.bgPattern ? `url("${area.bgPattern}")` : 'none',
        backgroundRepeat: 'repeat'
      }}
    >
      <button onClick={onToggle} className="w-full p-4 md:p-6 text-left">
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
        <p className="text-gray-600 hidden md:block mt-2">{area.description}</p>
      </button>
    </div>
  );
}

interface FundingSectionProps {
  onSectionChange?: (sectionId: string) => void;
}

function FundingSection({ onSectionChange }: FundingSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {fundingLogos.map((funder) => {
        const isInternal = funder.link.startsWith('#');
        const sectionId = isInternal ? funder.link.substring(1) : '';

        return (
          <a
            key={funder.name}
            href={funder.link}
            target={isInternal ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (isInternal && onSectionChange) {
                e.preventDefault();
                onSectionChange(sectionId);
              }
            }}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={funder.logo}
              alt={funder.name}
              className="max-h-16 w-auto object-contain"
            />
          </a>
        );
      })}
    </div>
  );
}

export interface ResearchProps {
  onSectionChange?: (sectionId: string) => void;
}

export function Research({ onSectionChange }: ResearchProps) {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const expandedWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedArea) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [expandedArea]);

  useEffect(() => {
    if (expandedContentRef.current && expandedArea) {
      setContentHeight(expandedContentRef.current.scrollHeight);
    }
  }, [expandedArea]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Research Highlights Section at the Top */}
      <section className="mb-12 border-b border-gray-100 pb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Research Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {researchhighlights && researchhighlights.map((highlight) => {
            const isInternal = highlight.link.startsWith('#');
            const sectionId = isInternal ? highlight.link.substring(1) : '';

            return (
              <a
                key={highlight.name}
                href={highlight.link}
                target={isInternal ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (isInternal && onSectionChange) {
                    e.preventDefault();
                    onSectionChange(sectionId);
                  }
                }}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50/40 to-indigo-50/40 hover:from-blue-50 hover:to-indigo-50 border border-blue-100/50 hover:border-blue-200/80 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 border border-gray-100 flex items-center justify-center">
                  <img
                    src={highlight.logo}
                    alt={highlight.name}
                    className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                    {highlight.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 mt-0.5">
                    {isInternal ? 'View Project Subpage' : 'External Website'}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Research Areas</h2>
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

      {/* Expanded Research Area Content Panel with Smooth Transition */}
      <div
        ref={expandedWrapperRef}
        style={{
          height: expandedArea ? `${contentHeight}px` : '0px',
          transition: 'height 500ms ease-in-out',
        }}
        className="overflow-hidden mb-12"
      >
        <div ref={expandedContentRef} className="p-6 bg-blue-50/50 rounded-xl border border-blue-100">
          {expandedArea && (
            <div>
              {researchAreas.find((a) => a.id === expandedArea)?.details ? (
                <div className="prose max-w-none text-gray-700">
                  <p className="font-semibold text-lg text-blue-900 mb-2">
                    {researchAreas.find((a) => a.id === expandedArea)?.title}
                  </p>
                  <p className="whitespace-pre-wrap">
                    {researchAreas.find((a) => a.id === expandedArea)?.details}
                  </p>
                </div>
              ) : (
                <div className="text-gray-700">
                  <p className="font-semibold text-lg text-blue-900 mb-2">
                    {researchAreas.find((a) => a.id === expandedArea)?.title}
                  </p>
                  <p>{researchAreas.find((a) => a.id === expandedArea)?.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Collaborations Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Collaborations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collaborations.map((collab) => (
            <a
              key={collab.name}
              href={collab.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg transition-colors flex justify-between items-center group"
            >
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {collab.name}
                </div>
                <div className="text-sm text-gray-500">{collab.institution}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Funding & Sponsors Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Funding & Sponsors</h2>
        <FundingSection onSectionChange={onSectionChange} />
      </section>
    </div>
  );
}
