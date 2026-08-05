import { useLanguage } from './LanguageContext';
import { profile, translations } from './data';
import { MapPin, GraduationCap, Target } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className={`bg-nvidia-canvas section-padding fade-up ${inView ? 'visible' : ''}`}
    >
      <div className="container-nvidia">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-nvidia-green" />
            <span className="text-nvidia-mute text-sm font-bold uppercase tracking-wide">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="text-nvidia-ink text-3xl md:text-[36px] font-bold leading-[1.25]">
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {t.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-nvidia-body text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 stagger-children visible">
              <div className="card-nvidia p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <GraduationCap size={22} className="text-nvidia-green mb-3" />
                <p className="text-nvidia-ink text-sm font-bold mb-1">Status</p>
                <p className="text-nvidia-body text-sm">{profile.status}</p>
              </div>
              <div className="card-nvidia p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <MapPin size={22} className="text-nvidia-green mb-3" />
                <p className="text-nvidia-ink text-sm font-bold mb-1">Lokasi</p>
                <p className="text-nvidia-body text-sm">{profile.location}</p>
              </div>
              <div className="card-nvidia p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Target size={22} className="text-nvidia-green mb-3" />
                <p className="text-nvidia-ink text-sm font-bold mb-1">Fokus</p>
                <p className="text-nvidia-body text-sm">{profile.careerFocus}</p>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-4">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="card-nvidia p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="corner-square top-0 left-0" />
                <p className="text-nvidia-green text-4xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-nvidia-mute text-sm font-bold uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
