import { useLanguage } from './LanguageContext';
import { skillsData, translations } from './data';
import * as Icons from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  const { ref, inView } = useInView({ threshold: 0.15 });

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Code2 size={24} />;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`bg-nvidia-surface-soft section-padding fade-up ${inView ? 'visible' : ''}`}
    >
      <div className="container-nvidia">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-nvidia-green" />
            <span className="text-nvidia-mute text-sm font-bold uppercase tracking-wide">
              {t.eyebrow}
            </span>
            <div className="w-3 h-3 bg-nvidia-green" />
          </div>
          <h2 className="text-nvidia-ink text-3xl md:text-[36px] font-bold leading-[1.25] mb-4">
            {t.title}
          </h2>
          <p className="text-nvidia-body text-base leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children visible">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="card-nvidia p-6 group hover:border-nvidia-green transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="corner-square top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-nvidia-green transition-transform duration-300 group-hover:scale-110">
                  {getIcon(skill.icon)}
                </div>
                <div>
                  <h3 className="text-nvidia-ink text-[17px] font-bold leading-tight">
                    {skill.name}
                  </h3>
                  <span className="text-nvidia-mute text-xs font-bold uppercase">
                    {skill.category}
                  </span>
                </div>
              </div>

              <p className="text-nvidia-body text-[15px] leading-relaxed mb-4">
                {skill.description}
              </p>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-nvidia-surface-soft rounded-nvidia overflow-hidden">
                  <div
                    className="h-full bg-nvidia-green rounded-nvidia transition-all duration-700"
                    style={{
                      width:
                        skill.level === 'Beginner'
                          ? '33%'
                          : skill.level === 'Intermediate'
                          ? '66%'
                          : '90%',
                    }}
                  />
                </div>
                <span className="text-nvidia-mute text-xs font-bold">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
