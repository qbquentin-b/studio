import { Code, Palette, Megaphone, Search } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Design Web',
      description:
        'Création de designs modernes et intuitifs qui captivent vos utilisateurs et renforcent votre identité de marque.',
      features: [
        'Design UI/UX',
        'Prototypage interactif',
        'Design système',
        'Identité visuelle',
      ],
    },
    {
      icon: Code,
      title: 'Développement',
      description:
        'Développement de sites web et applications performants avec les dernières technologies pour une expérience utilisateur optimale.',
      features: [
        'Sites web sur mesure',
        'Applications web',
        'E-commerce',
        'Maintenance & support',
      ],
    },
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      description:
        'Stratégies marketing complètes pour augmenter votre visibilité en ligne et atteindre vos objectifs commerciaux.',
      features: [
        'Stratégie de contenu',
        'Réseaux sociaux',
        'Email marketing',
        'Analyse de données',
      ],
    },
    {
      icon: Search,
      title: 'SEO',
      description:
        'Optimisation pour les moteurs de recherche afin d\'améliorer votre positionnement et générer du trafic qualifié.',
      features: [
        'Audit SEO complet',
        'Optimisation on-page',
        'Link building',
        'SEO local',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Nos Services
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Des solutions complètes pour propulser votre présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-xl mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Contactez-nous pour discuter de vos besoins et découvrir comment
              nous pouvons vous aider.
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
