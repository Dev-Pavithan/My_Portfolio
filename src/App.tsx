import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Add smooth scrolling to sections
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-grow">{renderSection()}</div>
      <footer className="bg-[#1A1A1A] text-center py-4 text-gray-400">
        © {new Date().getFullYear()} Pavithan Unenthiran. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
