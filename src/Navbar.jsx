import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { profile, translations } from './data';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'skills', label: t.skills },
    { id: 'portfolio', label: t.portfolio },
    { id: 'certificates', label: t.certificates },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-[0_0_5px_0_rgba(0,0,0,0.5)] border-b border-gray-900'
          : 'bg-[#0a0a0a]'
      }`}
      style={{ height: 64 }}
    >
      <div className="container-nvidia h-full flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-white font-bold text-base tracking-tight hover:text-nvidia-green transition-colors"
        >
          {profile.name}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-gray-200 text-sm font-bold hover:text-nvidia-green transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-gray-200 text-sm font-bold border border-gray-700 rounded-md hover:border-nvidia-green hover:text-nvidia-green transition-colors"
          >
            <Globe size={16} />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 p-2 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-gray-200 text-base font-bold hover:text-nvidia-green hover:bg-gray-800 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
