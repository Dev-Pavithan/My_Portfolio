import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Resume', 'Projects', 'Blog', 'Contact'];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 
        ${isScrolled ? 'bg-[#2A2A2A]/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        {/* Mobile - Centered */}
        <div className="flex justify-center sm:hidden">
          <div
            className={`flex flex-wrap items-center justify-center gap-6 rounded-full px-6 py-3 transition-all 
              ${isScrolled ? 'bg-[#2A2A2A]/80' : 'bg-[#2A2A2A]/40'}`}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 
                  ${activeSection === item.toLowerCase() ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop - Right-Aligned */}
        <div className="hidden sm:flex sm:justify-end">
          <div
            className={`flex flex-wrap items-center justify-center gap-6 rounded-full px-6 py-3 transition-all 
              ${isScrolled ? 'bg-[#2A2A2A]/80' : 'bg-[#2A2A2A]/40'}`}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 
                  ${activeSection === item.toLowerCase() ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
