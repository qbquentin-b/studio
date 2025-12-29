import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Luxe',
      category: 'E-commerce',
      description:
        'Plateforme e-commerce haut de gamme avec expérience utilisateur immersive',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Application SaaS',
      category: 'Application Web',
      description:
        'Interface moderne et intuitive pour une solution SaaS innovante',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    },
    {
      title: 'Site Corporate',
      category: 'Site Vitrine',
      description:
        'Site web institutionnel élégant pour une entreprise internationale',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg',
    },
    {
      title: 'Portfolio Créatif',
      category: 'Portfolio',
      description:
        'Site portfolio minimaliste pour un studio de design renommé',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
      title: 'Application Mobile',
      category: 'Mobile',
      description:
        'Application mobile native avec design système cohérent',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    },
    {
      title: 'Plateforme Collaborative',
      category: 'Application Web',
      description:
        'Outil de collaboration en temps réel pour équipes distribuées',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Notre Portfolio
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Découvrez nos réalisations et l'impact que nous créons pour nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Votre projet sera le prochain
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Travaillons ensemble pour créer quelque chose d'exceptionnel
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
