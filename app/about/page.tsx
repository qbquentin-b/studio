import { Heart, Award, Users2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Nous sommes passionnés par le design et la technologie, et cela se reflète dans chaque projet.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Nous visons l\'excellence dans tout ce que nous faisons, du design au code, en passant par le service client.',
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description:
        'Nous croyons en la puissance de la collaboration et travaillons en étroite relation avec nos clients.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Nous restons à la pointe de la technologie et explorons constamment de nouvelles approches.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projets réalisés' },
    { number: '40+', label: 'Clients satisfaits' },
    { number: '5+', label: 'Années d\'expérience' },
    { number: '98%', label: 'Taux de satisfaction' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              À Propos de Nous
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Une équipe passionnée dédiée à créer des expériences digitales
              exceptionnelles
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fondée en 2019, Studio est une agence web créative spécialisée
                dans la création d'expériences digitales qui marquent les
                esprits. Notre équipe multidisciplinaire combine créativité,
                expertise technique et stratégie pour transformer vos idées en
                réalité.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous croyons que chaque projet est unique et mérite une
                attention particulière. C'est pourquoi nous adoptons une
                approche sur mesure pour chaque client, en prenant le temps de
                comprendre vos objectifs et vos défis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos Valeurs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-4">
                    <Icon className="h-7 w-7 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Prêt à donner vie à votre projet ? Contactez-nous pour en
              discuter.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
