import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, MapPin } from 'lucide-react';

const newsItems = [
  {
    date: "February 2026",
    title: "Simon visits the lab",
    description: "Simon Geirnaert from KU Leuven will join the lab for a three-months visit!",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/2026Simoncap.jpg"
  },
    {
    date: "November 2025",
    title: "Giorgio joins the lab",
    description: "Giorgio Piazza has joined the lab with a Marie-Curie fellowship.",
    image: "https://i1.rgstatic.net/ii/profile.image/947252432474114-1602853987361_Q512/Giorgio-Piazza-2.jpg"
  },
  {
    date: "November 2025",
    title: "Sara's PhD defence",
    description: "Sara Carta has succesfully defended her PhD thesis on sustained attention and switching. Congratulations!", 
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/defenceSara.jpg"
  },
  {
    date: "September 2025",
    title: "Emily and Asena's new preprint",
    description: "Please check out our new preprint on social relevance and cortical speech tracking on BioRxiv", 
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/BioRxiv.png",
    link: "https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1"
  },
  {
    date: "September 2025", 
    title: "Martin's new preprint",
    description: "Martin's new preprint on polyphonic musical perception is available on BioRxiv",
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/polyphon.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2025.08.26.672294v1"
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

export function News() {
return(
  
<div>
        <h2 className="text-4xl font-semibold mb-6">News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-54 overflow-hidden">
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
  );
}
