
import React from 'react';
import { Mail } from 'lucide-react';

export function JoinUs() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Join Us</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Open Positions</h3>

          
          <h3 className="text-xl font-semibold mb-4">
          <a
            href="https://www.adaptcentre.ie/careers/research-assistant-in-cognitive-science-and-generative-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 no-underline"
          >
            Research Assistant in Cognitive Science and Generative AI
          </a>
          </h3>

          <h3 className="text-xl font-semibold mb-4">
          <a
            href="https://www.adaptcentre.ie/careers/postdoctoral-researcher-in-cognitive-science-and-generative-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 no-underline"
          >
            Postdoctoral Researcher in Cognitive Science and Generative AI

          </a>
          </h3>

          <p className="text-gray-600">
            We thank everyone who has submitted their application. We have received a high volume of applications and we will contact the applicants about the outcome of stage 1 by the second week of February. We always welcome expressions of interest from students interested in applying for external funding (e.g., PhD Scholarships) to join our team. Please note that the submission deadline for some PhD Scholarship / Postdoctoral Fellowship applications is often 1 year before the proposed start date. We welcome applications from candidates with diverse backgrounds and experiences relevant to our research. We also welcome TCD undergraduate students to join our team for gaining lab experience with us.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Volunteers</h3>
          <p className="text-gray-600 mb-6">
            If you are based in Dublin, please feel free to get in touch if you would like to get involved in our research. We are always looking for volunteers for our experiments.
          </p>
          <a
            href="mailto:gdiliber@tcd.ie"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full transition-colors text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
