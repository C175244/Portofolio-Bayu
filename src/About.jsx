import { useLanguage } from './LanguageContext';
import { profile, translations } from './data';
import { MapPin, GraduationCap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="bg-nvidia-canvas section-padding overflow-hidden">
      <div className="container-nvidia">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-nvidia-green" />
            <span className="text-nvidia-mute text-sm font-bold uppercase tracking-wide">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="text-nvidia-ink text-3xl md:text-[36px] font-bold leading-[1.25]">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {t.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-nvidia-body text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: GraduationCap, title: "Status", desc: profile.status },
                { icon: MapPin, title: "Lokasi", desc: profile.location },
                { icon: Target, title: "Fokus", desc: profile.careerFocus },
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="card-nvidia p-5 cursor-default shadow-sm hover:shadow-md transition-shadow"
                >
                  <info.icon size={22} className="text-nvidia-green mb-3" />
                  <p className="text-nvidia-ink text-sm font-bold mb-1">{info.title}</p>
                  <p className="text-nvidia-body text-sm">{info.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <div className="space-y-4">
            {t.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-nvidia p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="corner-square top-0 left-0" />
                <p className="text-nvidia-green text-4xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-nvidia-mute text-sm font-bold uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
