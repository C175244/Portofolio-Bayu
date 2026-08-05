import { useLanguage } from './LanguageContext';
import { portfolioData, translations } from './data';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang].portfolio;
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="portfolio"
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
          <h2 className="text-nvidia-ink text-3xl md:text-[36px] font-bold leading-[1.25] mb-4">
            {t.title}
          </h2>
          <p className="text-nvidia-body text-base leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children visible">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="card-nvidia overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="corner-square top-0 left-0" />

              {/* Image */}
              <div className="relative h-48 overflow-hidden -mx-6 -mt-6 mb-4 img-zoom">
                <img
                  src={project.image}
                  alt={lang === 'id' ? project.title : project.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 text-xs font-bold uppercase rounded-nvidia ${
                      project.status === 'draft'
                        ? 'bg-nvidia-warning text-white'
                        : 'bg-nvidia-success-deep text-white'
                    }`}
                  >
                    {project.status === 'draft' ? t.statusDraft : t.statusCompleted}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-nvidia-ink text-[17px] font-bold leading-tight">
                  {lang === 'id' ? project.title : project.titleEn}
                </h3>

                <p className="text-nvidia-body text-[15px] leading-relaxed">
                  {lang === 'id' ? project.description : project.descriptionEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-nvidia-surface-soft text-nvidia-body text-xs font-bold uppercase rounded-nvidia"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Note */}
                {project.note && (
                  <div className="flex items-start gap-2 p-3 bg-nvidia-accent-yellow-pale/30 rounded-nvidia">
                    <AlertCircle size={16} className="text-nvidia-warning shrink-0 mt-0.5" />
                    <p className="text-nvidia-body text-xs leading-relaxed">
                      {lang === 'id' ? project.note : project.noteEn}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-nvidia-ink text-sm font-bold hover:text-nvidia-green transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-nvidia-green text-sm font-bold hover:underline"
                    >
                      <ExternalLink size={16} />
                      {t.cta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
