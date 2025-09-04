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
    date: "September 2025", 
    title: "Martin's new preprint",
    description: "Martin's new preprint on musical perception is available on BioRxiv",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/bioRxiv.png"
  },
  {
    date: "July 2025", 
    title: "Giorgio Frego's research visit",
    description: "Giorgio Frego from the Free University of Bozen-Bolzano joins the lab for a 9-month research visit!",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/2025giorgiof2.jpg"
  },
  {
    date: "July 2025", 
    title: "John and Martin's travel award", 
    description: "John and Martin have both received a travel award for the 2025 meetings of the International Conference on Auditory Cortex in Maastricht and the the 48th Annual Meeting of the Japan Neuroscience Society in Niigata, Japan.",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/conferences.jpg"
  },
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
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/ncomms.jpg",
    link: "https://www.nature.com/collections/ifdfgjdggc"
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

const nextConferences = [
  {
    date: "12-14 September 2025",
    title: "CNSP Hackathon",
    description: "We are organising the CNSP hackathon 2025 (satellite of ICAC) in Maastricht!",
    image: "https://cnspworkshop.net/images/CNSP_Logo.gif",
    link: "https://cnspworkshop.net/hackathon.html"
  },
  {
    date: "14-18 September 2025",
    title: "International conference on auditory cortex (ICAC)",
    description: "Giovanni, Jaimy, Amir, Martin, Asena, and John will present their work at ICAC this year!",
    image: "https://www.maastrichtuniversity.nl/sites/default/files/styles/1560x1040/public/2025-06/fpn-LOGO_ICAC2025_v02_UM_landing-16x9.png?h=8eee6c50&itok=3YFrSHgj",
    link: "https://www.maastrichtuniversity.nl/icac2025/international-conference-auditory-cortex"
  },
  {
    date: "2-3 September 2025",
    title: "CNSP Workshop (online)",
    description: "We are organising the CNSP workshop 2025. The organisation team is composed of a strong team of 11 international scientists. Check out the CNSP website to know more.",
    image: "https://cnspworkshop.net/images/CNSP_Logo.gif",
    link: "https://cnspworkshop.net/workshops.html"
  },
  {
    date: "20-22 August 2025",
    title: "ISAAR",
    description: "Giovanni will give an invited talk at the International Symposium on Auditory and Audiological Research in Denmark!",
    image: "https://isaar.eu/wp-content/uploads/2021/05/cropped-ISAAR-2021-Grid_0.png",
    link: "https://isaar.eu/information-isaar-2025/"
  },
  {
    date: "24-27 July 2025",
    title: "Japan Neuroscience Society",
    description: "Martin and Asena will present their work at that 48th Annual Meeting of the Japan Neuroscience Society! Congratulations to Martin, who was awarded a travel grant for participating in this conference.",
    image: "https://www.fens.org/wp-content/uploads/2024/10/JNS-2025-768x403.jpg"
  },
  {
    date: "16-18 July 2025",
    title: "MEG-UKI",
    description: "Emily will participate at the MEG-UKI event in London!",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/emilyPrizeADAPT.jpg",
    link: "https://meguk.ac.uk/meg-uki-2025/"
  },
  {
    date: "8-11 July 2025",
    title: "CSBBCS Annual Meeting",
    description: "Jaimy is attending the 2025 annual meeting of the Canadian Society for Brain, Behaviour, and Cognitive Science in Dundee, Scotland. She'll be presenting her work on trust in speech communication.",
    image: "https://www.csbbcs.org/fileadmin/_processed_/8/8/csm_Meeting_Poster_d2e479ba52.png",
    link: "https://www.csbbcs.org/meetings/2025-meeting"
  },   
  {
    date: "29 June - 19 July 2025",
    title: "Telluride Neuromorphic Cognition Engineering Workshop",
    description: "John will participate in the prestigious Telluride Neuromorphic workshop!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Telluride_from_the_ski_hill.jpg/500px-Telluride_from_the_ski_hill.jpg",
    link: "https://sites.google.com/view/telluride-2025/home?pli=1&authuser=1"
  },
  {
    date: "26-26 June 2025",
    title: "VCCA 2025",
    description: "Giovanni will give a keynote presentation at the Virtual Conference on Computational Audiology!",
    image: "https://i0.wp.com/computationalaudiology.com/wp-content/uploads/2024/10/vcca2025_logo-e1749699764368.png?fit=312%2C341&ssl=1",
    link: "https://computationalaudiology.com/events/vcca2025/"
  },
  {
    date: "16-20 June 2025",
    title: "CogHear 2025",
    description: "Giovanni and John will participate in CogHear 2025 in Maryland. Giovanni was invited to give a talk/lead a discussion on the final day of the workshop.",
    image: "https://umd-brand.transforms.svdcdn.com/production/uploads/images/logos-formal-seal.jpg?w=1801&h=1801&auto=compress%2Cformat&fit=crop&dm=1651267392&s=81a14f930f7888983f0f8bc10146c0b2",
    link: "https://sites.google.com/view/coghear2020/in-person-coghear/coghear-2025?pli=1&authuser=1"
  },
  {
    date: "8-12 June 2025",
    title: "OPM-FLUX",
    description: "Emily had fun at the FLUX-MEG workshop, boosting the expertise on OPM-MEG at the Trinity College Institute of Neuroscience.",
    image: "https://static.wixstatic.com/media/daa417_974f22e4f7214db5a365e046887d221e~mv2.jpg/v1/fill/w_740,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/daa417_974f22e4f7214db5a365e046887d221e~mv2.jpg",
    link: "https://www.neuosc.com/post/announcing-the-first-opm-flux-toolkit-9-12-june-at-university-of-oxford"
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
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Recent and Upcoming events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nextConferences.map((item, index) => (
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
