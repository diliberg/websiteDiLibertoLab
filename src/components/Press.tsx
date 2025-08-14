import React from 'react';
import { ExternalLink, Music, Brain, Radio, Tv, Podcast, Newspaper, GraduationCap } from 'lucide-react';

type MediaCoverage = {
  press: Array<{ name: string; link: string; }>;
  university: Array<{ name: string; link: string; }>;
  radio: Array<{ name: string; link: string; }>;
  tv: Array<{ name: string; link: string; }>;
  podcasts: Array<{ name: string; link: string; }>;
};

type ResearchCoverage = {
  title: string;
  paperLink: string;
  coverage: MediaCoverage;
};

const researchCoverage: ResearchCoverage[] = [
  {
    title: "Di Liberto, Attaheri et al., Nature Communications, 'Emergence of the cortical encoding of phonetic features in the first year of life', 2023",
    paperLink: "https://www.nature.com/articles/s41467-023-43490-x",
    coverage: {
      press: [
        { name: "IrishExaminer.com", link: "https://www.irishexaminer.com/news/arid-41281537.html" },
        { name: "GlobalNews.ca", link: "https://globalnews.ca/news/10154392/nursery-rhymes-babies-language-study/" },
        { name: "DailyMail.co.uk", link: "https://www.dailymail.co.uk/sciencetech/article-12814279/Why-nursery-rhymes-best-childs-brain-Speaking-sing-song-voice-helps-babies-learn-language-study-finds.html" },
        { name: "TheGuardian.co.uk", link: "https://www.theguardian.com/science/2023/dec/01/singing-to-babies-is-vital-to-help-them-understand-language-say-scientists" },
        { name: "Telegraph.co.uk", link: "https://www.telegraph.co.uk/news/2023/12/01/sing-to-babies-to-help-them-learn-cambridge-study-says/" },
        { name: "Independent.co.uk", link: "https://www.independent.co.uk/news/science/scientists-infants-university-of-cambridge-english-b2456702.html" }
      ],
      university: [
        { name: "Trinity College Dublin", link: "https://www.tcd.ie/news_events/articles/2023/why-reading-nursery-rhymes-and-singing-to-babies-may-help-them-to-learn-language-/" },
        { name: "ADAPT", link: "https://www.adaptcentre.ie/news-and-events/why-reading-nursery-rhymes-and-singing-to-babies-may-help-them-learn-language/" },
        { name: "St. Johns College", link: "https://www.joh.cam.ac.uk/why-reading-nursery-rhymes-and-singing-babies-may-help-them-learn-language" },
        { name: "Univ. of Cambridge", link: "https://www.cam.ac.uk/research/news/why-reading-nursery-rhymes-and-singing-to-babies-may-help-them-to-learn-language" }
      ],
      radio: [
        { name: "AirTalk (with Larry Mantle and Prof. Angela Lukowski), on NPR LAist radio", link: "https://laist.com/shows/airtalk/what-you-should-know-about-the-tesla-recall" }
      ],
      tv: [
        { name: "itv news", link: "https://www.itv.com/news/2023-12-01/speaking-to-babies-in-sing-song-speech-helps-them-learn-language" }
      ],
      podcasts: [
        { name: "Reach Out and Read", link: "https://podcasts.apple.com/us/podcast/lullabies-and-language/id1522976383?i=1000648327554" }
      ]
    }
  },
  {
    title: "Guilhem et al., Journal of Neuroscience and Di Liberto et al., Journal of Neuroscience 'The music of silence, parts I and II', 2021",
    paperLink: "https://www.jneurosci.org/content/41/35/7449",
    coverage: {
      press: [
        { name: "The Sunday Times", link: "images/sundaytimesmusicsilence.jpg" },
        { name: "Inverse", link: "https://www.inverse.com/mind-body/neuroscience-of-imagined-music" },
        { name: "Medical News Today", link: "https://www.medicalnewstoday.com/articles/medical-myths-all-about-dementia#11.-Dementia-is-never-fatal" },
        { name: "CORDIS", link: "https://cordis.europa.eu/article/id/435248-the-brain-alive-with-imagined-music-and-the-sound-of-silence/fr" },
        { name: "Neuroscience News", link: "https://neurosciencenews.com/imagined-music-silence-19037/" }
      ],
      university: [
        { name: "Trinity College Dublin", link: "https://www.tcd.ie/news_events/articles/the-music-of-silence-imagining-a-song-triggers-similar-brain-activity-to-moments-of-mid-music-silence/" },
        { name: "Univ. of Maryland", link: "https://research.umd.edu/articles/exploring-music-silence" },
        { name: "Ecole Normale Superieure", link: "https://lsp.dec.ens.fr/en/news/what-happens-when-our-brain-imagines-music-15680" }
      ],
      radio: [],
      tv: [],
      podcasts: []
    }
  }
];

const otherMedia = [ 
  {
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/coghear.png",
    imageWidth: 130,
    date: "June 2025",
    title: "Presentation discussing speech neurophysiology in realistic contexts",
    description: "CogHear", 
    link: "https://youtu.be/Sj1txAtvMiA?si=iIyj1pFgwRr7FDW-"
  },
  {
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/lclogo.png",
    imageWith: 130,
    date: "November 2024",
    title: "Presentation outlining lab goals, methods and results", 
    description: "Language Cycles", 
    link: "https://youtu.be/aFpM5Y3R5AA?si=w21UKkAk-XNvkYiY"  
  },
  {
    image: "https://www.scientificast.it/blog/wp-content/uploads/2018/09/Logo-sito1.png",
    imageWidth: 130,
    date: "July 2024",
    title: "Fun discussion about music perception with Dr. Anna Truzzi",
    description: "Scientificast (in Italian)",
    link: "https://www.scientificast.it/la-musica-dei-muoni-a-rna/"
  },
  {
    image: "https://diliberg.github.io/websiteDiLibertoLabImages/adaptradio.jpg",
    imageWidth: 130,
    date: "Feb 2023",
    title: "Fun discussion about AI and human interaction with Dr. Andrea Patane",
    description: "ADAPT radio",
    link: "https://soundcloud.com/theadaptcentre/giovanni-di-liberto-andrea-patane-ai-and-human-interaction"
  }
];

function CoverageSection({ title, items, icon: Icon }: { 
  title: string; 
  items: Array<{ name: string; link: string; }>;
  icon: React.ComponentType<any>;
}) {
  if (!items?.length) return null;
  
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-gray-500" />
        <h4 className="text-sm font-semibold text-gray-700">{title}:</h4>
      </div>
      <div className="space-y-1 ml-6">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:text-blue-800"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Press() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Media coverage of our research</h2>
      
      <div className="space-y-8">
        {researchCoverage.map((coverage, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                {index === 0 ? (
                  <Brain className="h-6 w-6 text-blue-600" />
                ) : (
                  <Music className="h-6 w-6 text-blue-600" />
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold mb-4">
                  Journal paper:{' '}
                  <a
                    href={coverage.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {coverage.title}
                  </a>
                </h3>
                
                <div className="space-y-4">
                  <CoverageSection title="Press coverage includes" items={coverage.coverage.press} icon={Newspaper} />
                  <CoverageSection title="University press" items={coverage.coverage.university} icon={GraduationCap} />
                  <CoverageSection title="Radio coverage" items={coverage.coverage.radio} icon={Radio} />
                  <CoverageSection title="TV coverage" items={coverage.coverage.tv} icon={Tv} />
                  <CoverageSection title="Podcasts" items={coverage.coverage.podcasts} icon={Podcast} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-8">Other media</h2>
      <div className="space-y-6">
        {otherMedia.map((media, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
            <a
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src={media.image}
                alt=""
                style={{ width: `${media.imageWidth}px` }}
                className="object-contain"
              />
            </a>
            <div>
              <p className="font-semibold mb-2">{media.date}</p>
              <p>
                {media.title} on{' '}
                <a
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {media.description}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
