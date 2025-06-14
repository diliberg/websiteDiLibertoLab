import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, MapPin } from 'lucide-react';

const slides = [
  {
    url: "https://diliberg.github.io/websiteDiLibertoLabImages/labPhoto2025.jpg",
    alt: "Di Liberto Lab team"
  },
  {
    url: "https://diliberg.github.io/websiteDiLibertoLabImages/labPhotoEEG2025.jpg",
    alt: "Di Liberto Lab team"
  },
  {
    url: "https://diliberg.github.io/websiteDiLibertoLabImages/labPhotoAA4.jpg",
    alt: "Lab setup"
  },
  {
    url: "https://diliberg.github.io/websiteDiLibertoLabImages/labPhotoAA1.jpg",
    alt: "Di Liberto Lab team"
  },
  {
    url: "https://diliberg.github.io/websiteDiLibertoLabImages/labPhotoAA2.jpg",
    alt: "Di Liberto Lab team"
  }
];

const newsItems = [
  {
    date: "May 2025",
    title: "Emily's best presentation award",
    description: "Emily was awarded the best contribution award at the ADAPT conference in Dublin!",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/emilyPrizeADAPT.jpg"
  },
  {
    date: "May 2025",
    title: "Pint of Science",
    description: "Our team led discussions about trust (Jaimy) and babytalk (Giovanni) at two Pint of Science events!",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/pintOfScience2025.jpg"
  },
  {
    date: "April 2025",
    title: "Giorgio's paper is on Imaging Neuroscience",
    description: "New paper on speech adaptation to non-native speakers!",
    image: "https://mitp.silverchair-cdn.com/data/SiteBuilderAssets/Live/Images/imag/IMAG_cover-1980937453.png",
    link: "https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00539/128622/Are-you-talking-to-me-How-the-choice-of-speech"
  },
  {
    date: "February 2025",
    title: "Giorgio's Marie-Curie fellowship",
    description: "Giorgio Piazza was awarded a Marie-Curie fellowship to join our team!",
    image: "https://i1.rgstatic.net/ii/profile.image/947252432474114-1602853987361_Q512/Giorgio-Piazza-2.jpg"
  },
  {
    date: "January 2025",
    title: "New lab Paper Published in Journal of Neural Engineering",
    description: "Amir's latest work on robust assessment of cortical encoding has been published.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500&h=300",
    link: "https://iopscience.iop.org/article/10.1088/1741-2552/ada30a"
  },
  {
    date: "January 2025",
    title: "CNSP Workshop 2025 Announced",
    description: "Join us in September 2025 for the next CNSP workshop on neural signal processing and cognitive science.",
    image: "https://cnspworkshop.net/images/CNSP_Logo.gif"
  },
  {
    date: "December 2024",
    title: "Jaimy joins the team!",
    description: "New project studying  the impact of trust on speech perception, with the ADAPT centre and the Fidelity Center for Applied Technology.",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Jaimy.jpg"
  },
  {
    date: "October 2024",
    title: "New Laboratory for Social Interaction Research",
    description: "Excited to announce our new Collective-minds laboratory at Trinity College Dublin, dedicated to studying social interaction.",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/collectiveMinds.png",
    link: "https://www.collective-minds.net"
  },
  {
    date: "March 2024",
    title: "Top 25 Social Science and Human Behavior Article",
    description: "Our paper made it to the top 25 Social Science and Human Behavior Article of 2023!",
    image: "https://www.nature.com/ncomms",
    link: "https://diliberg.github.io/websiteDiLibertoLabImages/ncomms.jpg"
  },
  {
    date: "December 2023",
    title: "ADAPT Best Researcher Award 2023",
    description: "Giovanni Di Liberto receives ADAPT's Best Researcher Award for his research on the emergence of phonological encoding in the first year of life.",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/adaptAward.jpg"
  },
  {
    date: "November 2023",
    title: "Live Interview on NPR's AirTalk",
    description: "Giovanni discusses latest research with Larry Mantle on AirTalk radio show.",
    image: "https://lnx.diliberg.net/images/airtalk.png",
    link: "https://laist.com/shows/airtalk/what-you-should-know-about-the-tesla-recall"
  },
  {
    date: "December 2023",
    title: "New Publication in Nature Communications",
    description: "Our research on infant language development published in Nature Communications.",
    image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&q=80&w=500&h=300",
    link: "https://www.nature.com/articles/s41467-023-43490-x"
  },
  {
    date: "October 2023",
    title: "Welcome Asena to the Team",
    description: "Asena joins us with a PhD project supported by the SFI centre d-REAL.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    date: "October 2023",
    title: "John's IRC Scholarship Success",
    description: "John joins us with an IRC postgraduate scholarship to study music cognition.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=500&h=300"
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
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden shadow-md group">
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

      <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to the Di Liberto-lab at Trinity College Dublin. Our research interest centers on understanding the neural foundation of human communication. We develop neural data analysis methodologies based on machine learning and signal processing. Then, we apply those methodologies on neurophysiology brain data to better understand auditory communication and other aspects of human cognition. Those findings are then used to derive objective measurements of cognition, allowing us to conduct applied research on the causes, impact, and potential solutions of cognitive and communication deficits (e.g., hearing impairment, cognitive decline).
        </p>
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin className="h-5 w-5" />
          <span>School of Computer Science and Statistics, Trinity College Dublin</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="font-medium text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 min-h-[6rem]">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Read more <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
