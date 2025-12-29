import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '2,999',
      description: 'Parfait pour débuter votre présence digitale',
      features: [
        'Site web vitrine (5 pages)',
        'Design moderne & responsive',
        'Intégration formulaire contact',
        'Optimisation SEO basique',
        'Analytics & monitoring',
        'Support email',
      ],
      cta: 'Commencer',
    },
    {
      name: 'Professionnel',
      price: '7,999',
      description: 'La solution complète pour une présence digitale forte',
      features: [
        'Site web complet (15 pages)',
        'Design sur mesure & prototypage',
        'Blog & système de contenu',
        'Intégration CRM',
        'Optimisation SEO avancée',
        'Stratégie marketing digital',
        'Analytics détaillées',
        'Support prioritaire',
        'Formation & documentation',
      ],
      cta: 'Choisir ce pack',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      description: 'Solutions personnalisées pour les grands projets',
      features: [
        'Plateforme web sur mesure',
        'Architecture personnalisée',
        'Intégrations multiples',
        'Application mobile',
        'Système CMS avancé',
        'Stratégie digitale complète',
        'Support 24/7',
        'Maintenance continue',
        'Équipe dédiée',
      ],
      cta: 'Nous contacter',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[80vh] flex items-center py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Nos Tarifs
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Des solutions pour tous les budgets et besoins. Choisissez le pack qui correspond à vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center lg:items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl transition-all duration-300 ${
                  plan.featured
                    ? 'lg:scale-105 lg:shadow-2xl ring-2 ring-gray-900'
                    : 'hover:shadow-xl'
                } ${
                  plan.featured
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold rounded-full">
                      PLUS POPULAIRE
                    </span>
                  </div>
                )}

                <div className="p-8 sm:p-10">
                  <h3 className={`text-3xl font-black mb-2 ${
                    plan.featured ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-lg mb-8 ${
                    plan.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-5xl font-black ${
                        plan.featured ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.price}
                      </span>
                      {plan.price !== 'Sur devis' && (
                        <span className={plan.featured ? 'text-gray-400' : 'text-gray-600'}>
                          euros
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-200 group mb-10 ${
                      plan.featured
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? 'text-orange-400' : 'text-gray-900'
                        }`} />
                        <span className={plan.featured ? 'text-gray-200' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 sm:py-32 ${true ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-8">
              Des questions ?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Contactez-nous pour discuter de votre projet et trouver la solution
              qui correspond parfaitement à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 font-bold text-lg group"
            >
              Demander une consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
