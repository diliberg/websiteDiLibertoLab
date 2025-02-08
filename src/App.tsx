import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Welcome } from './components/Welcome';
import { Team } from './components/Team';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { OpenScience } from './components/OpenScience';
import { Press } from './components/Press';
import { JoinUs } from './components/JoinUs';
import { Teaching } from './components/Teaching';
import { CV } from './components/CV';

type MenuItem = {
  id: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'team', label: 'Team' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'press', label: 'Press' },
  { id: 'open-science', label: 'Open Science' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'join-us', label: 'Join us' },
];

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const goToWelcome = () => {
    setActiveSection('welcome');
    setShowCV(false);
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    if (showCV) {
      return <CV />;
    }

    switch (activeSection) {
      case 'welcome':
        return <Welcome />;
      case 'team':
        return <Team onViewCV={() => setShowCV(true)} />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'press':
        return <Press />;
      case 'open-science':
        return <OpenScience />;
      case 'teaching':
        return <Teaching />;
      case 'join-us':
        return <JoinUs />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <nav className={`
        lg:block lg:w-[15%] min-h-screen bg-white
        ${mobileMenuOpen ? 'block fixed inset-0 z-50 bg-white w-64' : 'hidden'}
      `}>
        {mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 lg:hidden"
          >
            <span className="text-2xl text-gray-600">&times;</span>
          </button>
        )}
        
        <div className="h-24"></div>

        <ul className="py-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  setShowCV(false);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors
                  ${activeSection === item.id && !showCV
                    ? 'bg-gray-100 text-gray-900 border-l-4 border-gray-800'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-20 left-4 z-40 bg-white p-2 rounded-md shadow-md"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      <main className="flex-1">
        <div className="p-4 lg:p-6">
          <button
            onClick={goToWelcome}
            className="block transition-transform hover:scale-105"
          >
            <img
              src="https://www.diliberg.net/images/brainGio2_v2.png"
              alt="Di Liberto Lab"
              className="h-16 object-contain"
            />
          </button>
        </div>
        <div className="p-4 md:p-8 lg:pl-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;