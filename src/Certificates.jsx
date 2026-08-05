import { useLanguage } from './LanguageContext';
import { certificatesData, translations } from './data';
import { Award, Calendar, Building2 } from 'lucide-react';
import { useInView } from './hooks/useInView';

export default function Certificates() {
  const { lang } = useLanguage();
  const t = translations[lang].certificates;
  const { ref, inView } = useInView({ threshold: 0.15 });

  const typeColors = {
    academic: 'bg-nvidia-accent-purple-pale text-nvidia-accent-purple-deep',
    organization: 'bg-nvidia-accent-yellow-pale text-nvidia-warning',
    course: 'bg-nvidia-surface-soft text-nvidia-body',
  };

  const typeLabels = {
    academic: lang === 'id' ? 'Akademik' : 'Academic',
    organization: lang === 'id' ? 'Organisasi' : 'Organization',
    course: lang === 'id' ? 'Kursus' : 'Course',
  };

  return (
    <section
      id="certificates"
      ref={ref}
      className={`bg-nvidia-surface-soft section-padding fade-up ${inView ? 'visible' : ''}`}
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children visible">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="card-nvidia overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="corner-square bottom-0 right-0" />

              {/* Image */}
              <div className="relative h-40 overflow-hidden -mx-6 -mt-6 mb-4 img-zoom">
                <img
                  src={cert.image}
                  alt={lang === 'id' ? cert.title : cert.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded-nvidia ${typeColors[cert.type] || typeColors.course}`}>
                    {typeLabels[cert.type] || cert.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Award size={18} className="text-nvidia-green shrink-0 mt-1" />
                  <h3 className="text-nvidia-ink text-[17px] font-bold leading-tight">
                    {lang === 'id' ? cert.title : cert.titleEn}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-nvidia-mute text-sm">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={14} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-nvidia-body text-[15px] leading-relaxed">
                  {lang === 'id' ? cert.description : cert.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
