import { useLanguage } from './LanguageContext';
import { translations, profile } from './data';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: translations[lang].nav.home },
    { id: 'about', label: translations[lang].nav.about },
    { id: 'skills', label: translations[lang].nav.skills },
    { id: 'portfolio', label: translations[lang].nav.portfolio },
    { id: 'certificates', label: translations[lang].nav.certificates },
    { id: 'contact', label: translations[lang].nav.contact },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const waNumber = profile.whatsapp.replace(/\+/g, '');

  return (
    <footer className="bg-nvidia-surface-dark">
      {/* Main Footer */}
      <div className="container-nvidia px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-nvidia-green" />
              <h3 className="text-nvidia-on-dark text-xl font-bold">
                {profile.name}
              </h3>
            </div>
            <p className="text-nvidia-on-dark-mute text-[15px] leading-relaxed mb-4 max-w-md">
              {lang === 'id'
                ? `${profile.title} — Seorang pelajar yang passionate di bidang teknologi dan bercita-cita menjadi ${profile.careerFocus}.`
                : `${profile.title} — A passionate student in technology aspiring to become an ${profile.careerFocus}.`}
            </p>
            <p className="text-nvidia-mute text-sm">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-nvidia-on-dark text-base font-bold mb-4">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-nvidia-on-dark-mute text-[15px] hover:text-nvidia-green transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-nvidia-on-dark text-base font-bold mb-4">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-nvidia-on-dark-mute text-[15px] hover:text-nvidia-green transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nvidia-on-dark-mute text-[15px] hover:text-nvidia-green transition-colors"
                >
                  {profile.whatsapp}
                </a>
              </li>
              <li className="text-nvidia-on-dark-mute text-[15px]">
                {profile.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nvidia-hairline-strong">
        <div className="container-nvidia px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-nvidia-mute text-[10px] font-bold uppercase tracking-wide">
            {t.copyright}
          </p>

          <div className="flex items-center gap-4">
            <p className="text-nvidia-mute text-[10px] font-bold uppercase tracking-wide">
              {t.madeWith}
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center bg-nvidia-green text-nvidia-ink rounded-nvidia hover:bg-nvidia-green-dark transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
              {t.madeWith}
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center bg-nvidia-green text-black rounded-md hover:bg-[#5a8c00] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
