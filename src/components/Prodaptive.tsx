import React from 'react';
import { ExternalLink, Brain, Activity, Award, MessageSquare, ShieldCheck } from 'lucide-react';

export function Prodaptive() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
          <Award className="h-4 w-4" />
          <span>Marie Curie Individual Fellowship</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          PRODAPTIVE: The Neural Foundations of Communicative Adaptation
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
          Exploring the bidirectional neural mechanisms of speech production and perception to unlock new frontiers in cognitive neuroscience and clinical rehabilitation.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12 aspect-[16/9] md:aspect-[21/9]">
        <img
          src="https://diliberg.github.io/websiteDiLibertoLabImages/2025-2labphoto_2.jpg"
          alt="PRODAPTIVE Research Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
          <p className="text-white text-sm md:text-base p-6 md:p-8 font-medium">
            The PRODAPTIVE research team under the Di Liberto Lab at Trinity College Dublin.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column: Core Narrative */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section 1: Introduction */}
          <section className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Speech & Social Adaptation
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Speech is central to social life. A key part of successful interaction is adapting what we say and how we say it to fit the situation. Some adjustments are automatic (we raise our voice in noise); others are intentional (we use simpler words with a child). People vary widely in these skills, and trouble adapting can cause misunderstandings, social strain, and long-term isolation.
            </p>
          </section>

          {/* Section 2: Core Inquiry */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">The Central Scientific Question</h3>
            <p className="text-blue-950 font-semibold text-lg md:text-xl leading-relaxed">
              &ldquo;Do the brain mechanisms that let us change our own speech also support how we understand others?&rdquo;
            </p>
            <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">
              Led by <strong>Dr. Giorgio Piazza</strong> and supervised by <strong>Asst. Prof. Giovanni Di Liberto</strong> at Trinity College Dublin, PRODAPTIVE asks this fundamental question. Detecting if the same neural system is at the foundation of both perception and production would have important implications, such as the development of targeted therapies that strengthen comprehension deficits through production exercises.
            </p>
          </section>

          {/* Section 3: Technology */}
          <section className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Cutting-Edge Technology: OPM-MEG
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              This project uses a new brain-recording tool called <strong>OPM-MEG</strong> (Optically Pumped Magnetometer Magnetoencephalography), representing <strong>the first system of its kind in Ireland</strong>.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-4 flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Natural Movement & Realistic Settings</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unlike traditional scanners that require people to stay completely still, the lightweight OPM-MEG helmet allows natural movement. This makes it possible to record brain activity while people speak and listen in realistic settings, including noisy environments like a busy café. Studying conversation as it naturally happens makes the findings directly relevant to everyday communication.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Key Details, Quotes, and Applications */}
        <div className="space-y-6">
          {/* Quote Block */}
          <div className="bg-blue-950 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10">
              <Brain className="h-40 w-40" />
            </div>
            <p className="italic text-blue-100 text-base md:text-lg leading-relaxed mb-6 relative z-10">
              &ldquo;By measuring the brain while people speak and listen naturally, we can finally test whether adaptation when speaking and understanding are two expressions of the same underlying neural flexibility.&rdquo;
            </p>
            <div className="border-t border-blue-800/60 pt-4">
              <p className="font-bold text-white text-sm">Dr. Giorgio Piazza</p>
              <p className="text-blue-300 text-xs">Marie Curie Fellow</p>
            </div>
          </div>

          {/* Practical Applications */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              Practical Impact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-green-50 text-green-700 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Smarter Hearing Aids</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Customized to match an individual's specific communicative adaptation needs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-green-50 text-green-700 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Earlier Diagnosis</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Enabling earlier and more accurate detection of communication disorders.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-green-50 text-green-700 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Methodological Advances</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Advancing state-of-the-art neurophysiology and neural data analysis across neuroscience, linguistics, and computer science.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lifespan Research & Fellowship Affiliations */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Broader Research Context</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
          This Marie Curie Individual Fellowship is based in the <strong>School of Computer Science and Statistics</strong>, with support from the <strong>Trinity College Institute of Neuroscience (TCIN)</strong> and the <strong>Rinn AI Centre</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
          It forms a pivotal part of the <strong>Di Liberto Lab’s</strong> broader program investigating how human communication develops and changes across the lifespan. This extensive research includes dedicated work on speech, sign language, music, attention in hearing, as well as translational research into neurodiversity and assistive technologies.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-semibold text-gray-500">School of Computer Science & Statistics, Trinity College Dublin</span>
          <a
            href="https://diliberg.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-colors"
          >
            Visit Di Liberto Lab website
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
