import { ArrowRight, Zap, Users, Target } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              Créons ensemble votre présence digitale
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Nous transformons vos idées en expériences digitales exceptionnelles.
              Design moderne, développement performant, résultats mesurables.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200 font-medium"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Notre approche
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une méthodologie éprouvée pour des résultats exceptionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Zap className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rapidité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Des solutions agiles et performantes, livrées dans les délais
                convenus avec une attention au moindre détail.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une communication transparente et un partenariat étroit
                tout au long du projet.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Target className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Précision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Des solutions sur mesure, parfaitement alignées avec
                vos objectifs stratégiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Discutons de votre projet et découvrons comment nous pouvons
              vous aider à atteindre vos objectifs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
