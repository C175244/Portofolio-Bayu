import { useLanguage } from './LanguageContext';
import { socialLinks, profile, translations } from './data';
import * as Icons from 'lucide-react';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={22} /> : <Icons.Link size={22} />;
  };

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-nvidia">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-nvidia-green" />
            <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
              {t.eyebrow}
            </span>
            <div className="w-3 h-3 bg-nvidia-green" />
          </div>
          <h2 className="text-gray-900 text-3xl md:text-[36px] font-bold leading-[1.25] mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Profile Card */}
          <div className="card-nvidia bg-gray-50 border border-gray-200 shadow-sm p-8 mb-8 text-center relative">
            <div className="corner-square top-0 left-0 bg-nvidia-green" />
            <div className="corner-square bottom-0 right-0 bg-nvidia-green" />

            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-nvidia-green">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=200&background=76b900&color=000000&bold=true`;
                }}
              />
            </div>

            <h3 className="text-gray-900 text-xl font-bold mb-1">
              {profile.name}
            </h3>
            <p className="text-nvidia-green text-base font-bold mb-2">
              {profile.title}
            </p>
            <p className="text-gray-500 text-sm">
              {profile.location}
            </p>
          </div>

          {/* Social Links Grid */}
          <h3 className="text-gray-900 text-lg font-bold mb-6 text-center">
            {t.connectTitle}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-nvidia bg-white border border-gray-200 shadow-sm p-5 flex items-center gap-4 group hover:border-nvidia-green transition-colors"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md text-white transition-transform group-hover:scale-110 flex-shrink-0"
                  style={{ backgroundColor: social.color }}
                >
                  {getIcon(social.icon)}
                </div>
                <div className="min-w-0">
                  <p className="text-gray-900 text-sm font-bold truncate">{social.name}</p>
                  <p className="text-gray-500 text-xs truncate">{social.displayText}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
