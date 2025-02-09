import React from 'react';
import { ExternalLink, Building, GraduationCap, History, Users } from 'lucide-react';

type SocialLink = {
  name: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  { name: "Publications", url: "https://scholar.google.it/citations?view_op=list_works&hl=en&hl=en&user=0NWmnJYAAAAJ" },
  { name: "Academic", url: "https://www.tcd.ie/scss/people/academic-staff/gdiliber/" },
  { name: "X", url: "https://twitter.com/diliberg" },
  { name: "BlueSky", url: "https://bsky.app/profile/diliberg.bsky.social" },
  { name: "Further details", url: "https://peoplefinder.tcd.ie/Profile?Username=GDILIBER" }
];

type Position = {
  title: string;
  organization?: string;
  link?: string;
};

type Education = {
  degree: string;
  institution: string;
  year: string;
};

const education: Education[] = [
  {
    degree: "PhD in Electronic and Electrical Engineering (PI: Prof. Edmund Lalor)",
    institution: "Trinity College Dublin",
    year: "2017"
  },
  {
    degree: "Master's degree in Computer Engineering (Thesis supervisors: Prof. Matteo Fischetti; Dr. Yuri Malitsky)",
    institution: "Universita' degli Studi di Padova",
    year: "2013"
  },
  {
    degree: "Bachelor's degree in Information Engineering",
    institution: "Universita' degli studi di Padova",
    year: "2011"
  }
];

const currentPositions: Position[] = [
  { title: "Assistant Professor in Neural Engineering", organization: "Discipline of Artificial Intelligence, School of Computer Science and Statistics, The University of Dublin, Trinity College, Ireland" },
  { title: "Funded Investigator", organization: "ADAPT Centre, Ireland" },
  { title: "Principal Investigator", organization: "Trinity College Institute of Neuroscience, Ireland" },
  { title: "Member of the TCD-SCSS Research Ethics Committee" },
  { title: "Member of the TCIN MEG Committee" },
  { title: "Member of the TCD-SCSS Research Strategy Committee" },
  { title: "Associate Editor for IEEE Journal of Translational Engineering in Health and Medicine" }
];

const pastPositions: Position[] = [
  { 
    title: "Visiting Scientist", 
    organization: "Centre for Neuroscience in Education, Department of Psychology, University of Cambridge, Cambridge, United Kingdom"
  },
  { 
    title: "Guest Associate Editor", 
    organization: "Frontiers Research Topic 'Neural Tracking: Closing the Gap Between Neurophysiology and Translational Medicine'",
    link: "https://www.frontiersin.org/research-topics/12581/neural-tracking-closing-the-gap-between-neurophysiology-and-translational-medicine"
  },
  { 
    title: "Postdoctoral researcher (FTE 0.5)", 
    organization: "Cognitive Neural Systems lab (PI: Simon Kelly), University College Dublin, Ireland",
    link: "https://cogneusys.com/"
  },
  { 
    title: "Postdoctoral researcher (FTE 0.5)", 
    organization: "Reilly Lab (PI: Richard Reilly), University of Dublin, Trinity College, Ireland",
    link: "https://reillylab.net/"
  },
  { 
    title: "Postdoctoral researcher", 
    organization: "LSP, École Normale Superieure, Paris (PI: Shihab Shamma)",
    link: "https://lsp.dec.ens.fr/en"
  },
  { 
    title: "Postdoctoral researcher", 
    organization: "LSP, École Normale Superieure, Paris (PI: Alain de Cheveigné)",
    link: "https://lsp.dec.ens.fr/en"
  }
];

export function CV() {
  return (
    <div className="max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <div className="flex gap-8 items-start">
          <img
            src="https://www.diliberg.net/images/headshot2024.jpg"
            alt="Giovanni M. Di Liberto"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Giovanni M. Di Liberto</h2>
            <h3 className="text-xl text-gray-600 mb-4">Assistant Professor in Intelligent Systems</h3>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  {link.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Building className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">Current Positions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {currentPositions.map((position, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    <span className="font-medium">{position.title}</span>
                    {position.organization && (
                      <span className="text-gray-600">, {position.organization}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <div>
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-gray-600">{edu.institution}, {edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <History className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">Past Positions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {pastPositions.map((position, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">•</span>
                  {position.link ? (
                    <a
                      href={position.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      <span className="font-medium">{position.title}</span>
                      {position.organization && (
                        <span className="text-gray-600">, {position.organization}</span>
                      )}
                    </a>
                  ) : (
                    <span>
                      <span className="font-medium">{position.title}</span>
                      {position.organization && (
                        <span className="text-gray-600">, {position.organization}</span>
                      )}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}