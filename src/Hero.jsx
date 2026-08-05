import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { profile, translations } from './data';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(118,185,0,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

      <div className="container-nvidia relative z-10 px-6 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-nvidia-green" />
              <span className="text-nvidia-green text-sm font-bold uppercase tracking-wide">
                {profile.status}
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 text-xl lg:text-2xl font-normal">
                {t.greeting}
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.25]">
                {profile.name}
              </h1>
              <p className="text-nvidia-green text-2xl md:text-3xl lg:text-[36px] font-bold leading-[1.25] text-glow-green">
                {t.tagline}
              </p>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollToSection('portfolio')} className="btn-primary">
                {t.ctaPrimary}
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-outline-dark border border-gray-600 hover:bg-gray-800 text-white">
                {t.ctaSecondary}
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-nvidia-green transition-colors">
                <Github size={22} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-nvidia-green transition-colors">
                <Linkedin size={22} />
              </a>
              <div className="h-4 w-px bg-gray-600" />
              <span className="text-gray-300 text-sm">
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-nvidia-green z-10" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-nvidia-green z-10" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-nvidia overflow-hidden border-2 border-gray-700 shadow-xl">
                {/* INI YANG DIBENERIN (Pakai titik di depan) */}
                <img
                  src="./foto-profil.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=400&background=76b900&color=000000&bold=true`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-nvidia-green transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
