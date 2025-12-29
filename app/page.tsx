import { ArrowRight, Zap, Users, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: 'Rapidité',
      description:
        'Des solutions agiles et performantes, livrées dans les délais avec une attention au moindre détail.',
      gradient: 'from-orange-50 to-amber-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Une communication transparente et un partenariat étroit tout au long du projet.',
      gradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Target,
      title: 'Précision',
      description:
        'Des solutions sur mesure, parfaitement alignées avec vos objectifs stratégiques.',
      gradient: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description:
        'Un design moderne et une qualité irréprochable pour faire briller votre marque.',
      gradient: 'from-slate-50 to-gray-50',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[90vh] flex items-center py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <Sparkles className="h-4 w-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                Agence Web Créative
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Créons ensemble votre présence digitale
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
              Nous transformons vos idées en expériences digitales
              exceptionnelles. Design moderne, développement performant,
              résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 font-bold text-lg group"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 font-bold text-lg"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-xl text-gray-600">
              Une méthodologie éprouvée pour des résultats exceptionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${benefit.gradient} border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${benefit.iconBg} rounded-2xl mb-6`}
                  >
                    <Icon className={`h-7 w-7 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Discutons de votre projet et découvrons comment nous pouvons vous
              aider à atteindre vos objectifs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-5 bg-white text-gray-900 rounded-2xl hover:bg-gray-100 transition-all duration-200 font-bold text-lg group"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
