import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Welcome } from './components/Welcome';
import { Team } from './components/Team';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { OpenScience } from './components/OpenScience';
import { Press } from './components/Press';
import { Alumni } from './components/Alumni';
import { JoinUs } from './components/JoinUs';
import { Teaching } from './components/Teaching';
import { CV } from './components/CV';
import { Datasets } from './components/Datasets';
import { News } from './components/News';
import { Prodaptive } from './components/Prodaptive';

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
  { id: 'prodaptive', label: 'PRODAPTIVE' },
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

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
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
        return <Team />;
      case 'research':
        return <Research onSectionChange={handleSectionChange} />;
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
      case 'alumni':
        return <Alumni />;
      case 'datasets':
        return <Datasets />;
      case 'news':
        return <News />;
      case 'prodaptive':
        return <Prodaptive />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Top Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <button onClick={goToWelcome} className="flex items-center gap-2 font-bold text-gray-900">
          <Brain className="h-6 w-6 text-blue-600" />
          <span>Di Liberto Lab</span>
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Navigation Sidebar (Responsive) */}
      <nav
        className={`lg:block lg:w-[15%] min-w-[240px] bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ${
          mobileMenuOpen
            ? 'fixed inset-0 z-50 bg-white'
            : 'hidden lg:flex flex-col sticky top-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100 hidden lg:block">
          <button onClick={goToWelcome} className="flex items-center gap-2 font-bold text-gray-900 text-left hover:opacity-80 transition-opacity">
            <Brain className="h-7 w-7 text-blue-600" />
            <div>
              <span className="block text-lg font-extrabold leading-none">Di Liberto</span>
              <span className="block text-xs text-gray-500 font-semibold tracking-wide mt-1">LIFESPAN COMMUNICATION</span>
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id && !showCV;
            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-100 text-center text-xs text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} Di Liberto Lab
        </div>
      </nav>

      {/* Mobile Menu Overlay Escape Click Area */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
