import React from 'react';
import { ExternalLink, Globe, Twitter, Cloud } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  description?: string;
  keywords?: string[];
  photo?: string;
  link?: string;
  publications?: Array<{
    title: string;
    link: string;
  }>;
};

const teamMembers = {
  pi: {
    name: "Giovanni Di Liberto",
    role: "Principal Investigator",
    description: "Assistant Professor in Neural Engineering at Trinity College Dublin, School of Computer Science and Statistics. PI at ADAPT Centre.",
    photo: "https://diliberg.github.io/websiteDiLibertoLabImages/cv3.jpg",
    links: [
      { title: "Full list of publications", url: "https://scholar.google.it/citations?view_op=list_works&hl=en&hl=en&user=0NWmnJYAAAAJ" },
      { title: "Academic webpage", url: "https://www.tcd.ie/scss/people/academic-staff/gdiliber/" },
      { title: "Research Gate", url: "https://www.researchgate.net/profile/Giovanni_Di_Liberto" },
      { title: "X (Twitter)", url: "https://twitter.com/diliberg" },
      { title: "BlueSky", url: "https://bsky.app/profile/diliberg.bsky.social" }
    ]
  },
  postdocs: [
    {
      name: "Jaimy Hannah",
      role: "Postdoctoral Researcher",
      description: "Research interests: Cognition, Psycholinguistics",
      keywords: ["Speech interaction", "language", "trust"],
      publications: [
        { title: "bioRxiv 2026 (1)", link: "https://www.biorxiv.org/content/10.64898/2026.03.11.711118v1.abstract" },
        { title: "bioRxiv 2026 (2)", link: "https://www.biorxiv.org/content/10.64898/2026.03.20.713212v1" }
      ],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Jaimy.jpeg"
    },
    {
      name: "Giorgio Piazza",
      role: "Marie-Curie Postdoctoral Fellow",
      description: "Research interests: Speech, Language, Neurophysiology",
      keywords: ["Speech", "Perception", "Adaptation", "EEG"],
      publications: [
        { title: "Imaging Neuroscience, 2025", link: "https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00539/128622" },
        { title: "CNSP2023 talk", link: "https://www.youtube.com/watch?v=lJu9XWgENgA" }
      ],
      photo: "https://i1.rgstatic.net/ii/profile.image/947252432474114-1602853987361_Q512/Giorgio-Piazza-2.jpg"
    }
  ],
  phd: [
    {
      name: "Amirhossein Chalehchaleh",
      role: "PhD Candidate",
      keywords: ["Speech perception", "Semantic processing", "Statistical learning"],
      publications: [
        { title: "J Neural Eng, 2024", link: "https://iopscience.iop.org/article/10.1088/1741-2552/ada30a/meta" }
      ],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/amirPic.jpg"
    },
    {
      name: "Emily Ip",
      role: "PhD Candidate",
      keywords: ["Speech perception", "Statistical learning", "Perspective taking"],
      publications: [
        { title: "arXiv, 2025", link: "https://arxiv.org/abs/2506.05494" },
        { title: "BioRxiv, 2025", link: "https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1"}
      ],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/M1.jpg"
    },
    {
      name: "Martin Winchester",
      role: "PhD Candidate",
      keywords: ["Speech communication", "Music perception", "EEG", "CNSP"], 
      publications: [{title: "BioRxiv, 2025", link: "https://www.biorxiv.org/content/10.1101/2025.08.26.672294v1"}]
    },
    {
      name: "John O'Doherty",
      role: "PhD Candidate",
      keywords: ["Music perception", "Music decoding", "Machine learning"],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2022john.jpg"
    },
    {
      name: "Asena Akkaya",
      role: "PhD Candidate",
      keywords: ["Speech and music processing", "Prosody", "Social anxiety"],
      publications: [
        {title: "BioRxiv, 2025", link: "https://www.biorxiv.org/content/10.1101/2025.09.23.674728v1"}],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/asenaPic.jpg"
    }
  ],
  staff: [
    {
      name: "Yannick Peters",
      role: "Research Assistant", 
      keywords: ["Sign Language Processing", "Irish Sign Language", "Modality"],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025yannick.jpg"
    }
  ],
  visitorsCurrent: [
    {
      name: "Simon Geirnaert", 
      role: "Postdoctoral Researcher", 
      keywords: ["Signal Processing", "EEG"], 
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2026Simon.jpg"
    },
    {
      name: "Joaquín Ordoñez", 
      role: "Predoctoral Researcher", 
      keywords: ["Sign Language", "Deafness", "Motion Tracking"], 
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/Joaquin_2026.jpg"
    }
  ],
  dissertation: [
    {
      name: "Ignacy Sus", 
      role: "MCS Student",
      keywords: ["Speech Production", "EEG"],
      publications: [
        { title: "LinkedIn", link: "https://www.linkedin.com/in/ignacy-sus/" }],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Ignacy.jpg"
    },
    {
      name: "Declan Michael McCabe", 
      role: "MCS Student",
      keywords: ["Music Decoding", "Machine Learning", "Audio Perception"],
      publications: [
        { title: "LinkedIn", link: "https://www.linkedin.com/in/declan-michael-mccabe/" }],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Declan.jpg"
    },
    {
      name: "Stephen Komolafe", 
      role: "MCS Student",
      keywords: ["Large Language Models","Auditory Cognition","EEG"],
      publications: [
        { title: "LinkedIn", link : "http://www.linkedin.com/in/stephen-komolafe-197842263/"},
        { title: "GitHub", link: "https://github.com/SK-portfolio"}]
    },
    {
      name: "Niall Grogan", 
      role: "MAI Student", 
      keywords: ["Machine Learning", "Speech Communication"],
      publications: [
      { title: "LinkedIn", link : "https://www.linkedin.com/in/niall-grogan-a17482228/"}],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Niall.jpg"
    },
    {
      name: "Anna Sawicka", 
      role: "MCS Student",
      keywords: ["Speech","EEG","Machine Learning"],
      publications: [
        {title: "LinkedIn", link: "https://www.linkedin.com/in/annasawicka/"}],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Anna.jpg"      
    },
    {
      name: "Stevin Joseph Sebastian", 
      role: "MCS Student",
      keywords: ["Music Perception", "Sign Language", "Transformers"],
      photo: "https://diliberg.github.io/websiteDiLibertoLabImages/2025Stevin.jpg"      
    },
    {
      name: "Tom Gilbride", 
      role: "MCS Student"
    },
    {
      name: "Maria Mezquita Garcia-Poggio", 
      role: "MAI Student"
    }
  ]
};

function KeywordsList({ keywords }: { keywords?: string[] }) {
  if (!keywords?.length) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {keywords.map((keyword, index) => (
        <span 
          key={index}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}

function TeamSection({ title, members }: { title: string; members: TeamMember[] }) {
  if (!members?.length) return null;
  
  const defaultBrainImage = "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=200&h=200";
  
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100">
            <div className="flex gap-4">
              <img
                src={member.photo || defaultBrainImage}
                alt={member.name}
                className={`w-24 h-24 object-cover rounded-full flex-shrink-0 ${!member.photo ? 'opacity-70 grayscale' : ''}`}
              />
              <div>
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                {member.description && (
                  <p className="text-gray-600 text-sm">{member.description}</p>
                )}
                {member.publications && (
                  <div className="mt-2 space-y-1">
                    {member.publications.map((pub, idx) => (
                      <a
                        key={idx}
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 text-sm"
                      >
                        {pub.title} <ExternalLink className="inline h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <KeywordsList keywords={member.keywords} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Team({ onViewCV }: { onViewCV: () => void }) {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
      
      <div className="mb-12">
        <div className="bg-gray-50 p-8 rounded-lg flex gap-6 items-start">
          <img
            src={teamMembers.pi.photo}
            alt={teamMembers.pi.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-gray-900">{teamMembers.pi.name}</h3>
              <button
                onClick={onViewCV}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                View CV <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 font-medium mb-4">{teamMembers.pi.role}</p>
            <p className="text-gray-600 mb-4">{teamMembers.pi.description}</p>
            <div className="flex flex-wrap gap-3">
              {teamMembers.pi.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800"
                >
                  {link.title} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TeamSection title="Postdoctoral Researchers" members={teamMembers.postdocs} />
      <TeamSection title="PhD Students" members={teamMembers.phd} />
      <TeamSection title="Research Staff" members={teamMembers.staff} />
      <TeamSection title="Dissertation Projects 2025-26" members={teamMembers.dissertation} />
      <TeamSection title="Visiting Students/Researchers" members={teamMembers.visitorsCurrent} />

    </div>
  );
}
