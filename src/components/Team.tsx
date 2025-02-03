import React from 'react';
import { ExternalLink } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  description?: string;
  keywords?: string[];
  photo?: string;
  link?: string;
};

const teamMembers = {
  pi: {
    name: "Giovanni Di Liberto",
    role: "Principal Investigator",
    description: "Assistant Professor in Neural Engineering at Trinity College Dublin, School of Computer Science and Statistics. PI at ADAPT Centre.",
    photo: "https://www.diliberg.net/images/cv3.jpg"
  },
  postdocs: [
    {
      name: "Jaimy Hannah",
      role: "Postdoctoral Researcher",
      description: "Research interests: Cognition, Psycholinguistics",
      keywords: ["Speech interaction", "language", "trust"],
      photo: "https://www.diliberg.net/images/JaimyLabpic.jpeg"
    }
  ],
  phd: [
    {
      name: "Sara Carta",
      role: "PhD Student",
      keywords: ["Speech perception", "Selective Attention", "Hearing Impairment"],
      description: "Check out Sara's latest preprint on the cortical encoding of phonemes in hearing impaired participants.",
      photo: "https://www.diliberg.net/images/SaraLabpic.jpeg"
    },
    {
      name: "Amirhossein Chalehchaleh",
      role: "PhD Student",
      keywords: ["Speech perception", "Semantic processing", "Statistical learning"],
      photo: "https://www.diliberg.net/images/amirPic.jpg"
    },
    {
      name: "Emily Ip",
      role: "PhD Student",
      keywords: ["Speech perception", "Statistical learning", "Perspective taking"],
      photo: "https://www.diliberg.net/images/emilyPic.jpg"
    },
    {
      name: "Martin Winchester",
      role: "PhD Student",
      keywords: ["Speech communication", "Music perception", "EEG", "CNSP"]
    },
    {
      name: "John O'Doherty",
      role: "PhD Student",
      keywords: ["Music perception", "Music decoding", "Machine learning"],
      photo: "https://www.diliberg.net/images/2022john.jpg"
    },
    {
      name: "Asena Akkaya",
      role: "PhD Student",
      keywords: ["Speech and music processing", "Prosody", "Social anxiety"],
      photo: "https://www.diliberg.net/images/asenaPic.jpg"
    }
  ],
  staff: [
    {
      name: "Fionn O'Connor",
      role: "Visiting Research Assistant"
    }
  ],
  dissertation: [
    {
      name: "Meaghan McGoldrick",
      role: "MAI Student",
      keywords: ["Sign language", "EEG"]
    },
    {
      name: "Arshad Mohammed",
      role: "MCS Student",
      keywords: ["Speech production", "Decoding", "Transformers"]
    },
    {
      name: "Holly Daly",
      role: "MCS Student",
      keywords: ["Hyperscanning", "EEG", "Speech communication"]
    },
    {
      name: "Evander Darius Sequeira",
      role: "MSc Student",
      keywords: ["Speech production", "EEG"]
    },
    {
      name: "Sathvika Thorali Suresh",
      role: "MSc Student",
      keywords: ["Second language learning", "large language models"]
    },
    {
      name: "Sudheendra Neela",
      role: "MSc Student",
      keywords: ["Speech perception", "EEG", "large language models"]
    },
    {
      name: "Sahana Hegde",
      role: "MSc Student",
      keywords: ["Music enjoyment", "EEG"]
    },
    {
      name: "Cillian French",
      role: "BA ICS Student",
      keywords: ["Big data", "CNSP", "TRF"]
    }
  ],
  alumni2324: [
    {
      name: "Fionn O'Connor",
      role: "MCS Student",
      keywords: ["Speech perception", "humour", "EEG"]
    },
    {
      name: "Aritro De",
      role: "BA ICS Student",
      keywords: ["Pupillometry", "Auditory perception"]
    },
    {
      name: "Yifan Zhu",
      role: "MSc Student",
      keywords: ["Music perception", "EEG", "Music decoding"]
    },
    {
      name: "Sebastin Regitz",
      role: "MSc Student",
      keywords: ["Music perception", "EEG", "Music decoding"]
    },
    {
      name: "Haozhe Ma",
      role: "MSc Student",
      keywords: ["Sign language perception", "EEG", "image processing"]
    },
    {
      name: "Chiara D'Ercoli",
      role: "MSc Student",
      keywords: ["Speech perception", "EEG", "large language models"]
    }
  ],
  alumni2223: [
    {
      name: "Isabel Moulton",
      role: "MAI Student",
      keywords: ["Speech Perception", "Statistical learning", "Decision making"],
      photo: "https://www.diliberg.net/images/2022isabel.jpg"
    },
    {
      name: "Jeroen Lemsom",
      role: "MSc Student",
      keywords: ["Humor", "Speech Perception", "Statistics"],
      photo: "https://www.diliberg.net/images/2022jeroen.jpg"
    },
    {
      name: "Mehak Roy",
      role: "MSc Student",
      keywords: ["Speech Perception", "Speech reconstruction", "Auditory imagery"],
      photo: "https://www.diliberg.net/images/2022mehak.jpg"
    },
    {
      name: "Satwick Chandra",
      role: "BA ICS Student",
      keywords: ["Open science", "CNSP"],
      photo: "https://www.diliberg.net/images/2022satwik.jpg"
    },
    {
      name: "John O'Doherty",
      role: "MCS Student",
      keywords: ["Music decoding", "Machine learning"],
      photo: "https://www.diliberg.net/images/2022john.jpg"
    }
  ],
  alumni2122: [
    {
      name: "Kevin Reynolds",
      role: "MSc Student",
      keywords: ["Machine learning", "Music perception", "Statistical learning"],
      photo: "https://www.diliberg.net/images/kevinReynolds.jpg"
    },
    {
      name: "Sophie Crowley",
      role: "MSc Student",
      keywords: ["EEG Decoding", "Speech Reconstruction", "Linguistics"],
      photo: "https://www.diliberg.net/images/sophieCrowley.jpg"
    },
    {
      name: "Sean Brieffies",
      role: "MSc Student",
      keywords: ["Statistical learning", "Auditory perception in infants"]
    },
    {
      name: "Ross McCrann",
      role: "MCS Student",
      keywords: ["Machine Learning", "Open data"]
    },
    {
      name: "Nissimol Aji",
      role: "MCS Student",
      keywords: ["Music perception"]
    }
  ],
  pastStaff: [
    {
      name: "Aoife Igoe",
      role: "Research Assistant (2023)",
      keywords: ["Speech perception", "Large language models", "EEG data collection", "CNSP"]
    }
  ],
  visitors: [
    {
      name: "Giorgia Cantisani",
      role: "Postdoc Research Visitor (Ecole Normal Superieure, 2022-23)",
      keywords: ["Speech and Music perception", "Source separation", "Machine learning"],
      description: "Check out Giorgia's latest study with us on speech and music perception.",
      photo: "https://www.diliberg.net/images/giorgiaCantisani.jpg"
    },
    {
      name: "Frank Sierra",
      role: "Post PhD Research Visitor (Max Planck Institute for Empirical Aesthetics, 2022-23)",
      keywords: ["Time perception", "Neural Decoding", "EEG"],
      photo: "https://www.diliberg.net/images/2022frank.jpg"
    },
    {
      name: "Jwaad Hussain",
      role: "Visiting Student (Middlesex Univ, 2023)",
      keywords: ["Speech and music processing", "EEG", "ageing"]
    },
    {
      name: "Giorgio Piazza",
      role: "Visiting Student (BCBL, 2023)",
      keywords: ["Speech perception", "Phonological processing", "EEG"],
      description: "Check out Giogio's talk at CNSP2023, where he presents the work he did with us at TCD (among other studies).",
      photo: "https://i1.rgstatic.net/ii/profile.image/947252432474114-1602853987361_Q512/Giorgio-Piazza-2.jpg"
    },
    {
      name: "Jordi Martorell",
      role: "Visiting Student (BCBL, 2022)",
      keywords: ["Sentence processing", "Syntax", "Predictive processing", "Oscillations", "EEG/MEG"],
      photo: "https://th.bing.com/th/id/OIP.peejJT2qgQVPgEGe2wlCHwHaHa?w=156&h=180&c=7&r=0&o=5&dpr=3&pid=1.7"
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
            <p className="text-gray-600">{teamMembers.pi.description}</p>
          </div>
        </div>
      </div>

      <TeamSection title="Postdoctoral Researchers" members={teamMembers.postdocs} />
      <TeamSection title="PhD Students" members={teamMembers.phd} />
      <TeamSection title="Research Staff" members={teamMembers.staff} />
      <TeamSection title="Dissertation Projects 2024-25" members={teamMembers.dissertation} />
      <TeamSection title="Alumni: Visiting Students/Researchers" members={teamMembers.visitors} />
      <TeamSection title="Alumni: Research Staff" members={teamMembers.pastStaff} />
      <TeamSection title="Alumni: Master's/Final year projects (2023-24)" members={teamMembers.alumni2324} />
      <TeamSection title="Alumni: Master's/Final year projects (2022-23)" members={teamMembers.alumni2223} />
      <TeamSection title="Alumni: Master's/Final year projects (2021-22)" members={teamMembers.alumni2122} />
    </div>
  );
}