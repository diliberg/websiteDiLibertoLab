import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Microscope, Code, Lightbulb } from 'lucide-react';

const slides = [
  {
    url: "https://www.diliberg.net/images/labphoto1.png",
    alt: "Di Liberto Lab team"
  },
  {
    url: "https://www.diliberg.net/images/SaraSetup1.jpg",
    alt: "Lab setup"
  },
  {
    url: "https://www.diliberg.net/images/SaraSetup2.jpg",
    alt: "Lab setup"
  }
];

const researchHighlights = [
  {
    icon: Brain,
    title: "Neural Foundations",
    description: "Understanding the neural foundations of human communication, with a focus on speech, music perception, and sign language."
  },
  {
    icon: Microscope,
    title: "Multidisciplinary Approach",
    description: "Combining neurophysiology, machine learning, signal processing, computational linguistics, and psychology."
  },
  {
    icon: Code,
    title: "Advanced Technologies",
    description: "Utilizing EEG, MEG, pupillometry, and other technologies for multivariate neural data analysis."
  },
  {
    icon: Lightbulb,
    title: "Impact Areas",
    description: "Contributing to understanding of language learning, development, developmental deficits, ageing, and hearing-impairment."
  }
];

export function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-4xl">      
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden shadow-md group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}